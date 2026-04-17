// components/game/StreetScramble.tsx
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";
import { GAME_DATA, RESULT_COPY, getResultTier, type GameItem } from "./gameData";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { SITE } from "@/constants";

// ── helpers ──
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Screen = "intro" | "game" | "result";
type FeedbackState = Record<string, "idle" | "correct" | "incorrect">;

const TOTAL_TIME = 30;
const GOLD = "#c8a96e";

// ── component ──
export function StreetScramble() {
  const [screen, setScreen] = useState<Screen>("intro");
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<FeedbackState>({});
  const [highScore, setHighScore] = useState<number | null>(null);
  const [wordOrder, setWordOrder] = useState<GameItem[]>([]);
  const [objectOrder, setObjectOrder] = useState<GameItem[]>([]);
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gameActiveRef = useRef(false);

  // Load high score
  useEffect(() => {
    const hs = localStorage.getItem("lugha_hs");
    if (hs !== null) setHighScore(parseInt(hs));
  }, []);

  // Timer
  useEffect(() => {
    if (screen !== "game") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          gameActiveRef.current = false;
          setTimeTaken(TOTAL_TIME);
          setTimeout(() => setScreen("result"), 300);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [screen]);

  function startGame() {
    setScore(0);
    setTimeLeft(TOTAL_TIME);
    setMatched(new Set());
    setFeedback({});
    setDragging(null);
    setDragOver(null);
    setWordOrder(shuffle(GAME_DATA));
    setObjectOrder(shuffle(GAME_DATA));
    gameActiveRef.current = true;
    setScreen("game");
  }

  const evaluateMatch = useCallback(
    (draggedId: string, targetId: string) => {
      if (!gameActiveRef.current) return;
      if (matched.has(draggedId) || matched.has(targetId)) return;

      if (draggedId === targetId) {
        // Correct
        const next = new Set([...matched, draggedId]);
        setMatched(next);
        setScore((s) => s + 1);
        setFeedback((f) => ({ ...f, [targetId]: "correct" }));

        if (next.size === GAME_DATA.length) {
          clearInterval(timerRef.current!);
          gameActiveRef.current = false;
          setTimeTaken(TOTAL_TIME - timeLeft);
          setTimeout(() => setScreen("result"), 700);
        }
      } else {
        // Incorrect
        setFeedback((f) => ({ ...f, [targetId]: "incorrect" }));
        setTimeout(() => {
          setFeedback((f) => ({ ...f, [targetId]: "idle" }));
        }, 500);
      }
    },
    [matched, timeLeft]
  );

  // Save high score when going to result
  useEffect(() => {
    if (screen === "result") {
      const hs = parseInt(localStorage.getItem("lugha_hs") || "0");
      if (score > hs) {
        localStorage.setItem("lugha_hs", String(score));
        setHighScore(score);
      }
    }
  }, [screen, score]);

  const timerPct = (timeLeft / TOTAL_TIME) * 100;
  const urgent = timeLeft <= 8;

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Grid texture */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Corner marks */}
      {["tl", "br"].map((pos) => (
        <div
          key={pos}
          className="pointer-events-none absolute"
          style={{
            ...(pos === "tl" ? { top: 20, left: 20 } : { bottom: 20, right: 20 }),
            width: 20,
            height: 20,
            borderColor: "rgba(200,169,110,0.2)",
            borderStyle: "solid",
            borderWidth: pos === "tl" ? "1px 0 0 1px" : "0 1px 1px 0",
          }}
        />
      ))}

      <div className="relative z-10 w-full max-w-2xl px-6">
        <AnimatePresence mode="wait">
          {screen === "intro" && (
            <IntroScreen key="intro" onStart={startGame} highScore={highScore} />
          )}
          {screen === "game" && (
            <GameScreen
              key="game"
              wordOrder={wordOrder}
              objectOrder={objectOrder}
              matched={matched}
              feedback={feedback}
              score={score}
              timerPct={timerPct}
              timeLeft={timeLeft}
              urgent={urgent}
              dragging={dragging}
              dragOver={dragOver}
              setDragging={setDragging}
              setDragOver={setDragOver}
              onMatch={evaluateMatch}
            />
          )}
          {screen === "result" && (
            <ResultScreen
              key="result"
              score={score}
              timeTaken={timeTaken}
              onReset={() => setScreen("intro")}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── INTRO SCREEN ──
function IntroScreen({ onStart, highScore }: { onStart: () => void; highScore: number | null }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="text-center"
    >
      <p className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e] mb-5 font-medium">
        Lugha Studio × Interactive
      </p>
      <h1
        className="mb-4 leading-[1.05]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(38px, 8vw, 68px)",
          color: "#fff",
        }}
      >
        The Nairobi<br />
        <em style={{ color: GOLD, fontStyle: "italic" }}>Street Scramble.</em>
      </h1>
      <p className="text-white/40 text-sm leading-relaxed max-w-sm mx-auto mb-8">
        30 seconds. 5 Swahili words. Can you match them all before the market closes?
      </p>

      {highScore !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-block bg-[rgba(200,169,110,0.1)] border border-[rgba(200,169,110,0.25)] px-4 py-2 text-[11px] tracking-[0.2em] uppercase text-[#c8a96e] mb-8"
        >
          Your best: {highScore} / 5
        </motion.div>
      )}

      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {GAME_DATA.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 + i * 0.06 }}
            className="px-4 py-2 text-[13px] border border-white/8"
            style={{
              background: "rgba(255,255,255,0.03)",
              fontFamily: "'Playfair Display', serif",
              fontStyle: "italic",
              color: "#e2c99a",
            }}
          >
            {item.swahili}
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center gap-8 mb-10">
        {[
          { value: "30", label: "Seconds" },
          { value: "5",  label: "Words" },
          { value: "1",  label: "Chance" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: GOLD }}>
              {s.value}
            </div>
            <div className="text-[9px] tracking-[0.25em] uppercase text-white/40 mt-1">
              {s.label}
            </div>
          </div>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={onStart}
        className="px-12 py-4 font-semibold text-[11px] tracking-[0.25em] uppercase"
        style={{ background: GOLD, color: "#080808", border: "none", cursor: "pointer" }}
      >
        Begin the run →
      </motion.button>
    </motion.div>
  );
}

// ── GAME SCREEN ──
function GameScreen({
  wordOrder, objectOrder, matched, feedback, score,
  timerPct, timeLeft, urgent, dragging, dragOver,
  setDragging, setDragOver, onMatch,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <span
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: GOLD, fontStyle: "italic" }}
        >
          Nairobi Street Scramble
        </span>
        <div className="flex items-center gap-4">
          {/* Progress dots */}
          <div className="flex gap-1.5">
            {GAME_DATA.map((item) => (
              <motion.div
                key={item.id}
                animate={{ background: matched.has(item.id) ? "#3ecf8e" : "rgba(255,255,255,0.1)" }}
                className="w-1.5 h-1.5 rounded-full"
              />
            ))}
          </div>
          <span className="text-[11px] tracking-[0.2em] uppercase text-white/40">
            Score <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: GOLD }}>{score}</span>
          </span>
        </div>
      </div>

      {/* Timer */}
      <div className="mb-6">
        <div className="h-px bg-white/5 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ background: urgent ? "#e05252" : GOLD, transition: "background 0.5s" }}
            animate={{ width: `${timerPct}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <span className="text-[10px] tracking-[0.15em] uppercase text-white/30">Time remaining</span>
          <motion.span
            key={timeLeft}
            initial={{ scale: timeLeft <= 8 ? 1.2 : 1 }}
            animate={{ scale: 1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 13,
              color: urgent ? "#e05252" : GOLD,
            }}
          >
            {timeLeft}
          </motion.span>
        </div>
      </div>

      {/* Arena */}
      <div className="grid grid-cols-2 gap-4">
        {/* Words column */}
        <div>
          <div className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Swahili words — drag →
          </div>
          <div className="flex flex-col gap-2">
            {wordOrder.map((item: GameItem) => (
              <motion.div
                key={item.id}
                draggable={!matched.has(item.id)}
                onDragStart={() => setDragging(item.id)}
                onDragEnd={() => setDragging(null)}
                animate={{
                  opacity: matched.has(item.id) ? 0.3 : 1,
                  borderColor: dragging === item.id ? GOLD : "rgba(255,255,255,0.08)",
                  background: dragging === item.id ? "rgba(200,169,110,0.1)" : "rgba(255,255,255,0.04)",
                }}
                whileHover={!matched.has(item.id) ? { x: 2 } : {}}
                style={{
                  border: "1px solid",
                  padding: "12px 16px",
                  cursor: matched.has(item.id) ? "default" : "grab",
                  pointerEvents: matched.has(item.id) ? "none" : "all",
                }}
              >
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "#e2c99a", fontStyle: "italic" }}>
                  {item.swahili}
                </div>
                <div className="text-[10px] text-white/30 mt-0.5">{item.hint}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Objects column */}
        <div>
          <div className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Drop on the right object
          </div>
          <div className="flex flex-col gap-2">
            {objectOrder.map((item: GameItem) => {
              const state = feedback[item.id] || "idle";
              const isMatched = matched.has(item.id);
              return (
                <motion.div
                  key={item.id}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(item.id); }}
                  onDragLeave={() => setDragOver(null)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(null);
                    if (dragging) onMatch(dragging, item.id);
                  }}
                  animate={{
                    borderColor: isMatched
                      ? "#3ecf8e"
                      : state === "incorrect"
                      ? "#e05252"
                      : dragOver === item.id
                      ? GOLD
                      : "rgba(255,255,255,0.10)",
                    background: isMatched
                      ? "rgba(62,207,142,0.05)"
                      : state === "incorrect"
                      ? "rgba(224,82,82,0.07)"
                      : dragOver === item.id
                      ? "rgba(200,169,110,0.1)"
                      : "rgba(255,255,255,0.02)",
                  }}
                  style={{ border: "1px dashed", padding: "12px 14px", minHeight: 58 }}
                  className="flex items-center gap-3"
                >
                  {state === "incorrect" ? (
                    <motion.div
                      initial={{ x: -4 }}
                      animate={{ x: [0, -5, 5, -4, 4, 0] }}
                      transition={{ duration: 0.35 }}
                    >
                      <AlertCircle size={20} color="#e05252" />
                    </motion.div>
                  ) : isMatched ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle2 size={20} color="#3ecf8e" />
                    </motion.div>
                  ) : (
                    <item.Icon size={22} color={GOLD} strokeWidth={1.5} style={{ opacity: 0.65 }} />
                  )}

                  <span style={{ fontSize: 14, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                    {item.english}
                  </span>

                  <AnimatePresence>
                    {isMatched && (
                      <motion.span
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto"
                        style={{ fontFamily: "'Playfair Display', serif", fontSize: 12, color: "#3ecf8e", fontStyle: "italic" }}
                      >
                        {item.swahili}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ── RESULT SCREEN ──
function ResultScreen({ score, timeTaken, onReset }: { score: number; timeTaken: number; onReset: () => void }) {
  const tier = getResultTier(score);
  const copy = RESULT_COPY[tier];
  const circumference = 276.46;
  const offset = circumference - (score / 5) * circumference;
  const secs = timeTaken > 0 ? timeTaken : TOTAL_TIME;

  const insight =
    typeof copy.insight === "function"
      ? copy.insight(score, secs)
      : copy.insight;

  const waMsg = `Hi Divinar! I just played the Street Scramble and scored ${score}/5. I'd love to book a trial lesson!`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="text-center"
    >
      <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-4">
        {score === 5 ? "Perfect score 🎉" : `${score} of 5 matched`}
      </p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(42px,10vw,72px)", color: GOLD, fontStyle: "italic", lineHeight: 1 }}
      >
        {copy.swahili}
      </motion.div>
      <p className="text-[11px] tracking-[0.25em] uppercase text-white/40 mt-2 mb-8">
        {copy.english}
      </p>

      {/* Score ring */}
      <div className="relative w-24 h-24 mx-auto mb-8">
        <svg viewBox="0 0 100 100" width="96" height="96" style={{ transform: "rotate(-90deg)" }}>
          <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
          <motion.circle
            cx="50" cy="50" r="44"
            fill="none"
            stroke={GOLD}
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset: offset }}
            transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#fff", lineHeight: 1 }}>
            {score}
          </span>
          <span className="text-[9px] tracking-[0.15em] uppercase text-white/40 mt-1">of 5</span>
        </div>
      </div>

      {/* Insight card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative text-left p-6 mb-7 max-w-md mx-auto"
        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}
      >
        {/* Gold top line */}
        <div className="absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }} />
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, color: GOLD, fontStyle: "italic", marginBottom: 8 }}>
          You matched {score} word{score !== 1 ? "s" : ""} in {secs} seconds.
        </p>
        <p className="text-[13px] text-white/50 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: insight.replace(/\*\*(.*?)\*\*/g, "<strong style='color:rgba(255,255,255,0.85);font-weight:500'>$1</strong>") }}
        />
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="flex flex-col items-center gap-3"
      >
        <motion.a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(waMsg)}`}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-10 py-4 font-semibold text-[11px] tracking-[0.25em] uppercase no-underline"
          style={{ background: GOLD, color: "#080808", cursor: "pointer" }}
        >
          {copy.cta} →
        </motion.a>
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/30">{copy.subLabel}</p>
        <button
          onClick={onReset}
          className="mt-1 text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors"
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          Play again
        </button>
      </motion.div>
    </motion.div>
  );
}
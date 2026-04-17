// components/game/StreetScramble.tsx
"use client";

import { SITE } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  ChevronRight, Lock,
  Share2,
  Star,
  Trophy,
  Volume2,
  Zap,
} from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  getResultTier,
  LEVELS,
  PACKS,
  RESULT_COPY,
  type GameItem,
  type Level,
  type Pack,
} from "./gameData";
import { useAudio } from "./useAudio";
import {
  getComboMultiplier,
  useLevelSystem,
  type XPEntry
} from "./useLevelySystem";

// ── helpers ────────────────────────────────────────────────────────────────────
function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

type Screen = "packSelect" | "levelSelect" | "game" | "result" | "leaderboard";
type FeedbackState = Record<string, "idle" | "correct" | "incorrect">;

const GOLD = "#c8a96e";

// ── root component ─────────────────────────────────────────────────────────────
export function StreetScramble() {
  const { state, awardMatchXP, completeLevel, isPackUnlocked, isLevelCompleted } =
    useLevelSystem();
  const { speak, supported: audioSupported } = useAudio();

  const [screen, setScreen] = useState<Screen>("packSelect");
  const [selectedPack, setSelectedPack] = useState<Pack>(PACKS[0]);
  const [selectedLevel, setSelectedLevel] = useState<Level>(LEVELS[0]);
  const [playerName, setPlayerName] = useState<string>("");

  // game state
  const [score, setScore] = useState(0);
  const [xpThisRound, setXpThisRound] = useState(0);
  const [comboStreak, setComboStreak] = useState(0);
  const [comboFlash, setComboFlash] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState(0);
  const [matched, setMatched] = useState<Set<string>>(new Set());
  const [feedback, setFeedback] = useState<FeedbackState>({});
  const [wordOrder, setWordOrder] = useState<GameItem[]>([]);
  const [objectOrder, setObjectOrder] = useState<GameItem[]>([]);
  const [dragOver, setDragOver] = useState<string | null>(null);
  const [dragging, setDragging] = useState<string | null>(null);
  const [timeTaken, setTimeTaken] = useState(0);
  const [audioEnabled, setAudioEnabled] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const gameActiveRef = useRef(false);
  const comboRef = useRef(0);
  const xpRef = useRef(0);

  // Load player name
  useEffect(() => {
    const saved = localStorage.getItem("lugha_player_name");
    if (saved) setPlayerName(saved);
  }, []);

  // Timer
  useEffect(() => {
    if (screen !== "game") return;
    timerRef.current = setInterval(() => {
      setTimeLeft((t) => {
        if (t <= 1) {
          clearInterval(timerRef.current!);
          gameActiveRef.current = false;
          setTimeTaken(selectedLevel.timeLimit);
          setTimeout(() => setScreen("result"), 300);
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timerRef.current!);
  }, [screen, selectedLevel.timeLimit]);

  function startGame(pack: Pack, level: Level) {
    const items = pack.items.slice(0, level.wordCount);
    setScore(0);
    setXpThisRound(0);
    setComboStreak(0);
    comboRef.current = 0;
    xpRef.current = 0;
    setTimeLeft(level.timeLimit);
    setMatched(new Set());
    setFeedback({});
    setDragging(null);
    setDragOver(null);
    setWordOrder(shuffle(items));
    setObjectOrder(shuffle(items));
    gameActiveRef.current = true;
    setScreen("game");
  }

  const evaluateMatch = useCallback(
    (draggedId: string, targetId: string) => {
      if (!gameActiveRef.current) return;
      if (matched.has(draggedId) || matched.has(targetId)) return;

      if (draggedId === targetId) {
        // Correct
        const newStreak = comboRef.current + 1;
        comboRef.current = newStreak;
        setComboStreak(newStreak);

        const xp = awardMatchXP(newStreak);
        xpRef.current += xp;
        setXpThisRound((x) => x + xp);

        if (newStreak >= 3) {
          setComboFlash(getComboMultiplier(newStreak));
          setTimeout(() => setComboFlash(null), 800);
        }

        const next = new Set([...matched, draggedId]);
        setMatched(next);
        setScore((s) => s + 1);
        setFeedback((f) => ({ ...f, [targetId]: "correct" }));

        if (audioEnabled) {
          // Speak the matched word
          const item = selectedPack.items.find((i) => i.id === draggedId);
          if (item) speak(item.swahili);
        }

        if (next.size === selectedLevel.wordCount) {
          clearInterval(timerRef.current!);
          gameActiveRef.current = false;
          const taken = selectedLevel.timeLimit - timeLeft;
          setTimeTaken(taken > 0 ? taken : 1);

          // Bonus XP for time remaining
          const timeBonus = timeLeft * 2;
          xpRef.current += timeBonus;
          setXpThisRound((x) => x + timeBonus);

          const name = playerName || "Anonymous";
          completeLevel(selectedPack.id, selectedLevel.id, xpRef.current, name);

          setTimeout(() => setScreen("result"), 700);
        }
      } else {
        // Incorrect — reset combo
        comboRef.current = 0;
        setComboStreak(0);
        setFeedback((f) => ({ ...f, [targetId]: "incorrect" }));
        setTimeout(() => setFeedback((f) => ({ ...f, [targetId]: "idle" })), 500);
      }
    },
    [matched, timeLeft, selectedLevel, selectedPack, awardMatchXP, completeLevel, speak, audioEnabled, playerName],
  );

  const timerPct = (timeLeft / selectedLevel.timeLimit) * 100;
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
            width: 20, height: 20,
            borderColor: "rgba(200,169,110,0.2)",
            borderStyle: "solid",
            borderWidth: pos === "tl" ? "1px 0 0 1px" : "0 1px 1px 0",
          }}
        />
      ))}

      {/* Combo flash */}
      <AnimatePresence>
        {comboFlash !== null && (
          <motion.div
            key="combo"
            initial={{ opacity: 0, scale: 0.5, y: 0 }}
            animate={{ opacity: 1, scale: 1.1, y: -20 }}
            exit={{ opacity: 0, scale: 0.8, y: -50 }}
            className="pointer-events-none fixed top-1/4 left-1/2 -translate-x-1/2 z-50 text-center"
          >
            <div
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 48,
                color: GOLD,
                fontStyle: "italic",
                textShadow: `0 0 40px ${GOLD}88`,
              }}
            >
              {comboFlash}×
            </div>
            <div className="text-[10px] tracking-[0.3em] uppercase text-white/60">Combo!</div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Persistent XP bar (visible during game) */}
      {screen === "game" && (
        <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-2"
          style={{ background: "rgba(8,8,8,0.9)", borderBottom: "1px solid rgba(200,169,110,0.1)" }}>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/30">
            {selectedPack.emoji} {selectedPack.name} · Lv.{selectedLevel.id}
          </span>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <Zap size={11} color={GOLD} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, color: GOLD }}>
                +{xpThisRound} XP
              </span>
            </div>
            {comboStreak >= 2 && (
              <motion.div
                key={comboStreak}
                initial={{ scale: 1.3 }}
                animate={{ scale: 1 }}
                className="flex items-center gap-1"
              >
                <span className="text-[10px] tracking-[0.15em] uppercase"
                  style={{ color: getComboMultiplier(comboStreak) >= 3 ? "#f87171" : GOLD }}>
                  {comboStreak}× Streak
                </span>
              </motion.div>
            )}
            <button
              onClick={() => setAudioEnabled((a) => !a)}
              className="opacity-40 hover:opacity-80 transition-opacity"
              title={audioEnabled ? "Mute audio" : "Enable audio"}
            >
              <Volume2 size={14} color={audioEnabled ? GOLD : "#555"} />
            </button>
          </div>
        </div>
      )}

      <div className="relative z-10 w-full max-w-2xl px-6 py-16">
        <AnimatePresence mode="wait">
          {screen === "packSelect" && (
            <PackSelectScreen
              key="packSelect"
              packs={PACKS}
              state={state}
              isPackUnlocked={isPackUnlocked}
              isLevelCompleted={isLevelCompleted}
              onSelectPack={(pack) => {
                setSelectedPack(pack);
                setScreen("levelSelect");
              }}
              onShowLeaderboard={() => setScreen("leaderboard")}
              playerName={playerName}
              onSetPlayerName={(n) => {
                setPlayerName(n);
                localStorage.setItem("lugha_player_name", n);
              }}
            />
          )}
          {screen === "levelSelect" && (
            <LevelSelectScreen
              key="levelSelect"
              pack={selectedPack}
              levels={LEVELS}
              isLevelCompleted={(lid) => isLevelCompleted(selectedPack.id, lid)}
              onSelectLevel={(level) => {
                setSelectedLevel(level);
                startGame(selectedPack, level);
              }}
              onBack={() => setScreen("packSelect")}
            />
          )}
          {screen === "game" && (
            <GameScreen
              key="game"
              pack={selectedPack}
              level={selectedLevel}
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
              onSpeak={speak}
              audioEnabled={audioEnabled}
            />
          )}
          {screen === "result" && (
            <ResultScreen
              key="result"
              score={score}
              total={selectedLevel.wordCount}
              timeTaken={timeTaken}
              xpEarned={xpThisRound}
              pack={selectedPack}
              level={selectedLevel}
              playerName={playerName}
              onPlayAgain={() => startGame(selectedPack, selectedLevel)}
              onChangePack={() => setScreen("packSelect")}
              onShowLeaderboard={() => setScreen("leaderboard")}
            />
          )}
          {screen === "leaderboard" && (
            <LeaderboardScreen
              key="leaderboard"
              entries={state.leaderboard}
              totalXP={state.totalXP}
              dailyStreak={state.dailyStreak}
              onBack={() => setScreen("packSelect")}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// ── PACK SELECT SCREEN ──────────────────────────────────────────────────────────
function PackSelectScreen({
  packs, state, isPackUnlocked, isLevelCompleted,
  onSelectPack, onShowLeaderboard, playerName, onSetPlayerName,
}: {
  packs: Pack[];
  state: any;
  isPackUnlocked: (id: string) => boolean;
  isLevelCompleted: (packId: string, lid: number) => boolean;
  onSelectPack: (p: Pack) => void;
  onShowLeaderboard: () => void;
  playerName: string;
  onSetPlayerName: (n: string) => void;
}) {
  const [editingName, setEditingName] = useState(!playerName);
  const [nameInput, setNameInput] = useState(playerName);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <p className="text-[10px] tracking-[0.35em] uppercase text-[#c8a96e] mb-1 font-medium">
            Lugha Studio × Interactive
          </p>
          <h1
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(28px, 6vw, 44px)",
              color: "#fff",
              lineHeight: 1.1,
            }}
          >
            The Nairobi<br />
            <em style={{ color: GOLD }}>Street Scramble.</em>
          </h1>
        </div>

        {/* XP + leaderboard */}
        <div className="text-right">
          <button
            onClick={onShowLeaderboard}
            className="flex items-center gap-1.5 text-white/40 hover:text-white/70 transition-colors mb-2"
          >
            <Trophy size={13} />
            <span className="text-[10px] tracking-[0.2em] uppercase">Board</span>
          </button>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: GOLD }}>
            {state.totalXP}
          </div>
          <div className="text-[9px] tracking-[0.2em] uppercase text-white/30">Total XP</div>
          {state.dailyStreak > 1 && (
            <div className="text-[9px] tracking-[0.15em] uppercase mt-1" style={{ color: "#f87171" }}>
              🔥 {state.dailyStreak} day streak
            </div>
          )}
        </div>
      </div>

      {/* Player name */}
      <div className="mb-6">
        {editingName ? (
          <div className="flex gap-2">
            <input
              autoFocus
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && nameInput.trim()) {
                  onSetPlayerName(nameInput.trim());
                  setEditingName(false);
                }
              }}
              placeholder="Enter your name for the leaderboard"
              className="flex-1 bg-white/5 border border-white/10 px-3 py-2 text-[13px] text-white/80 outline-none focus:border-[#c8a96e]/40"
              style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}
            />
            <button
              onClick={() => {
                if (nameInput.trim()) {
                  onSetPlayerName(nameInput.trim());
                  setEditingName(false);
                }
              }}
              className="px-4 py-2 text-[11px] tracking-[0.2em] uppercase"
              style={{ background: GOLD, color: "#080808" }}
            >
              Save
            </button>
          </div>
        ) : (
          <button
            onClick={() => { setNameInput(playerName); setEditingName(true); }}
            className="text-[11px] tracking-[0.15em] text-white/30 hover:text-white/60 transition-colors"
          >
            Playing as <span style={{ color: GOLD, fontStyle: "italic" }}>{playerName}</span> · change
          </button>
        )}
      </div>

      {/* Pack grid */}
      <div className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-3">
        Choose a pack
      </div>
      <div className="grid grid-cols-1 gap-3 mb-6">
        {packs.map((pack, i) => {
          const unlocked = isPackUnlocked(pack.id);
          const completedCount = [1, 2, 3].filter((lid) =>
            isLevelCompleted(pack.id, lid)
          ).length;

          return (
            <motion.button
              key={pack.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07 }}
              onClick={() => unlocked && onSelectPack(pack)}
              className="w-full text-left flex items-center gap-4 px-4 py-3"
              style={{
                background: unlocked ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.01)",
                border: `1px solid ${unlocked ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.05)"}`,
                cursor: unlocked ? "pointer" : "not-allowed",
                opacity: unlocked ? 1 : 0.45,
              }}
              whileHover={unlocked ? { x: 4 } : {}}
            >
              <div className="text-2xl">{pack.emoji}</div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: 16,
                      color: unlocked ? "#fff" : "rgba(255,255,255,0.4)",
                      fontStyle: "italic",
                    }}
                  >
                    {pack.name}
                  </span>
                  {!unlocked && <Lock size={11} color="rgba(255,255,255,0.3)" />}
                </div>
                <div className="text-[11px] text-white/40 mt-0.5">{pack.theme}</div>
              </div>
              {unlocked && (
                <div className="flex flex-col items-end gap-1">
                  {/* Level completion stars */}
                  <div className="flex gap-1">
                    {[1, 2, 3].map((lid) => (
                      <Star
                        key={lid}
                        size={12}
                        color={isLevelCompleted(pack.id, lid) ? pack.color : "rgba(255,255,255,0.1)"}
                        fill={isLevelCompleted(pack.id, lid) ? pack.color : "none"}
                      />
                    ))}
                  </div>
                  <ChevronRight size={14} color="rgba(255,255,255,0.3)" />
                </div>
              )}
            </motion.button>
          );
        })}
      </div>

      <p className="text-[10px] text-white/25 text-center">
        Complete Pack 1 Level 1 to unlock the next pack
      </p>
    </motion.div>
  );
}

// ── LEVEL SELECT SCREEN ──────────────────────────────────────────────────────────
function LevelSelectScreen({
  pack, levels, isLevelCompleted, onSelectLevel, onBack,
}: {
  pack: Pack;
  levels: typeof LEVELS;
  isLevelCompleted: (lid: number) => boolean;
  onSelectLevel: (l: Level) => void;
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
    >
      <button
        onClick={onBack}
        className="text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 mb-8 flex items-center gap-2"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        ← Back to packs
      </button>

      <div className="text-4xl mb-2">{pack.emoji}</div>
      <h2
        style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, color: "#fff", fontStyle: "italic" }}
        className="mb-1"
      >
        {pack.name}
      </h2>
      <p className="text-white/40 text-sm mb-8">{pack.description}</p>

      <div className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-3">
        Choose difficulty
      </div>

      <div className="flex flex-col gap-3">
        {levels.map((level, i) => {
          const completed = isLevelCompleted(level.id);
          return (
            <motion.button
              key={level.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              onClick={() => onSelectLevel(level)}
              className="w-full text-left px-5 py-4"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: `1px solid ${completed ? pack.color + "44" : "rgba(255,255,255,0.10)"}`,
                cursor: "pointer",
              }}
              whileHover={{ x: 4 }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 18,
                        color: completed ? pack.color : "#fff",
                        fontStyle: "italic",
                      }}
                    >
                      {level.name}
                    </span>
                    <span
                      className="text-[9px] tracking-[0.2em] uppercase px-2 py-0.5"
                      style={{
                        background: `${pack.color}20`,
                        color: pack.color,
                        border: `1px solid ${pack.color}33`,
                      }}
                    >
                      {level.label}
                    </span>
                    {completed && <Star size={12} fill={pack.color} color={pack.color} />}
                  </div>
                  <div className="text-[11px] text-white/40">
                    {level.wordCount} words · {level.timeLimit}s
                    {!level.showHints && " · No hints"}
                    {!level.showIcons && " · No icons"}
                  </div>
                </div>
                <ChevronRight size={18} color="rgba(255,255,255,0.3)" />
              </div>
            </motion.button>
          );
        })}
      </div>
    </motion.div>
  );
}

// ── GAME SCREEN ─────────────────────────────────────────────────────────────────
function GameScreen({
  pack, level, wordOrder, objectOrder, matched, feedback, score,
  timerPct, timeLeft, urgent, dragging, dragOver,
  setDragging, setDragOver, onMatch, onSpeak, audioEnabled,
}: any) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full pt-6"
    >
      {/* Timer */}
      <div className="mb-6">
        <div className="h-px bg-white/5 relative overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0"
            style={{ background: urgent ? "#e05252" : pack.color, transition: "background 0.5s" }}
            animate={{ width: `${timerPct}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        <div className="flex justify-between mt-1.5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/30">
              Time remaining
            </span>
            {/* Match progress dots */}
            <div className="flex gap-1">
              {wordOrder.map((item: GameItem) => (
                <motion.div
                  key={item.id}
                  animate={{ background: matched.has(item.id) ? "#3ecf8e" : "rgba(255,255,255,0.1)" }}
                  className="w-1.5 h-1.5 rounded-full"
                />
              ))}
            </div>
          </div>
          <motion.span
            key={timeLeft}
            initial={{ scale: timeLeft <= 8 ? 1.2 : 1 }}
            animate={{ scale: 1 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: 13,
              color: urgent ? "#e05252" : pack.color,
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
            Swahili — drag →
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
                  borderColor: dragging === item.id ? pack.color : "rgba(255,255,255,0.08)",
                  background: dragging === item.id
                    ? `${pack.color}18`
                    : "rgba(255,255,255,0.04)",
                }}
                whileHover={!matched.has(item.id) ? { x: 2 } : {}}
                style={{
                  border: "1px solid",
                  padding: "10px 14px",
                  cursor: matched.has(item.id) ? "default" : "grab",
                  pointerEvents: matched.has(item.id) ? "none" : "all",
                }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <div
                      style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: 16,
                        color: "#e2c99a",
                        fontStyle: "italic",
                      }}
                    >
                      {item.swahili}
                    </div>
                    {level.showHints && (
                      <div className="text-[10px] text-white/30 mt-0.5">{item.hint}</div>
                    )}
                    <div className="text-[9px] text-white/20 mt-0.5 font-mono">{item.phonetic}</div>
                  </div>
                  {audioEnabled && (
                    <button
                    aria-label={`Hear pronunciation of ${item.swahili}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSpeak(item.swahili);
                      }}
                      className="ml-2 opacity-30 hover:opacity-70 transition-opacity flex-shrink-0"
                    >
                      <Volume2 size={12} color={pack.color} />
                    </button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Objects column */}
        <div>
          <div className="text-[9px] tracking-[0.3em] uppercase text-white/30 mb-3">
            Drop on the match
          </div>
          <div className="flex flex-col gap-2">
            {objectOrder.map((item: GameItem) => {
              const fbState = feedback[item.id] || "idle";
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
                      : fbState === "incorrect"
                      ? "#e05252"
                      : dragOver === item.id
                      ? pack.color
                      : "rgba(255,255,255,0.10)",
                    background: isMatched
                      ? "rgba(62,207,142,0.05)"
                      : fbState === "incorrect"
                      ? "rgba(224,82,82,0.07)"
                      : dragOver === item.id
                      ? `${pack.color}18`
                      : "rgba(255,255,255,0.02)",
                  }}
                  style={{ border: "1px dashed", padding: "10px 12px", minHeight: 52 }}
                  className="flex items-center gap-3"
                >
                  {fbState === "incorrect" ? (
                    <motion.div
                      initial={{ x: -4 }}
                      animate={{ x: [0, -5, 5, -4, 4, 0] }}
                      transition={{ duration: 0.35 }}
                    >
                      <AlertCircle size={18} color="#e05252" />
                    </motion.div>
                  ) : isMatched ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
                      <CheckCircle2 size={18} color="#3ecf8e" />
                    </motion.div>
                  ) : level.showIcons ? (
                    <item.Icon size={20} color={pack.color} strokeWidth={1.5} style={{ opacity: 0.65 }} />
                  ) : (
                    <div
                      className="w-5 h-5 rounded-sm"
                      style={{ background: `${pack.color}22`, border: `1px solid ${pack.color}33` }}
                    />
                  )}

                  <span style={{ fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: 500 }}>
                    {item.english}
                  </span>

                  <AnimatePresence>
                    {isMatched && (
                      <motion.span
                        initial={{ opacity: 0, x: 8 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="ml-auto"
                        style={{
                          fontFamily: "'Playfair Display', serif",
                          fontSize: 11,
                          color: "#3ecf8e",
                          fontStyle: "italic",
                        }}
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

// ── RESULT SCREEN ────────────────────────────────────────────────────────────────
function ResultScreen({
  score, total, timeTaken, xpEarned, pack, level,
  playerName, onPlayAgain, onChangePack, onShowLeaderboard,
}: {
  score: number; total: number; timeTaken: number; xpEarned: number;
  pack: Pack; level: Level; playerName: string;
  onPlayAgain: () => void; onChangePack: () => void; onShowLeaderboard: () => void;
}) {
  const tier = getResultTier(score, total);
  const copy = RESULT_COPY[tier];
  const circumference = 276.46;
  const offset = circumference - (score / total) * circumference;
  const secs = timeTaken > 0 ? timeTaken : level.timeLimit;

  const insight =
    typeof copy.insight === "function"
      ? copy.insight(score, secs)
      : copy.insight;

  const waMsg = `Hi Divinar! I scored ${score}/${total} on the Lugha Street Scramble (${pack.name} · ${level.name}). I'd love to book a trial lesson!`;
  const shareText = `I scored ${score}/${total} on the Nairobi Street Scramble! 🇰🇪 Can you beat me?\n\nPlay free at lugha.studio`;

  function handleShare() {
    if (navigator.share) {
      navigator.share({ title: "Lugha Street Scramble", text: shareText }).catch(() => {});
    } else {
      navigator.clipboard.writeText(shareText).then(() => alert("Score copied to clipboard!"));
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="text-center"
    >
      <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mb-3">
        {pack.emoji} {pack.name} · {level.name} · {score === total ? "Perfect! 🎉" : `${score} of ${total} matched`}
      </p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(38px,8vw,60px)",
          color: pack.color,
          fontStyle: "italic",
          lineHeight: 1,
        }}
      >
        {copy.swahili}
      </motion.div>
      <p className="text-[11px] tracking-[0.25em] uppercase text-white/40 mt-2 mb-6">
        {copy.english}
      </p>

      {/* Score ring + XP */}
      <div className="flex items-center justify-center gap-8 mb-8">
        <div className="relative w-20 h-20">
          <svg viewBox="0 0 100 100" width="80" height="80" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="50" cy="50" r="44" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
            <motion.circle
              cx="50" cy="50" r="44"
              fill="none"
              stroke={pack.color}
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              initial={{ strokeDashoffset: circumference }}
              animate={{ strokeDashoffset: offset }}
              transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.2 }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, color: "#fff", lineHeight: 1 }}>
              {score}
            </span>
            <span className="text-[8px] tracking-[0.1em] uppercase text-white/40">/{total}</span>
          </div>
        </div>

        <div className="text-left">
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-1.5 mb-1"
          >
            <Zap size={14} color={GOLD} />
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: GOLD }}>
              +{xpEarned}
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-white/40">XP earned</span>
          </motion.div>
          <div className="text-[11px] text-white/30">{secs}s taken</div>
        </div>
      </div>

      {/* Insight card */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="relative text-left p-5 mb-6 max-w-md mx-auto"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          overflow: "hidden",
        }}
      >
        <div
          className="absolute inset-x-0 top-0 h-px"
          style={{ background: `linear-gradient(90deg, transparent, ${pack.color}, transparent)` }}
        />
        <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 12, color: pack.color, fontStyle: "italic", marginBottom: 6 }}>
          {playerName ? `${playerName} matched ` : "You matched "}{score} word{score !== 1 ? "s" : ""} in {secs}s.
        </p>
        <p
          className="text-[12px] text-white/50 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: insight.replace(
              /\*\*(.*?)\*\*/g,
              "<strong style='color:rgba(255,255,255,0.85);font-weight:500'>$1</strong>",
            ),
          }}
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
          className="inline-block px-10 py-3.5 font-semibold text-[11px] tracking-[0.25em] uppercase no-underline"
          style={{ background: pack.color, color: "#080808", cursor: "pointer" }}
        >
          {copy.cta} →
        </motion.a>
        <p className="text-[10px] tracking-[0.2em] uppercase text-white/30">{copy.subLabel}</p>

        <div className="flex gap-4 mt-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white/70 transition-colors"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Share2 size={12} /> Share score
          </button>
          <button
            onClick={onShowLeaderboard}
            className="flex items-center gap-1.5 text-[11px] tracking-[0.15em] uppercase text-white/40 hover:text-white/70 transition-colors"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <Trophy size={12} /> Leaderboard
          </button>
        </div>

        <div className="flex gap-4 mt-1">
          <button
            onClick={onPlayAgain}
            className="text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Play again
          </button>
          <button
            onClick={onChangePack}
            className="text-[11px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 transition-colors"
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            Change pack
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── LEADERBOARD SCREEN ──────────────────────────────────────────────────────────
function LeaderboardScreen({
  entries, totalXP, dailyStreak, onBack,
}: {
  entries: XPEntry[];
  totalXP: number;
  dailyStreak: number;
  onBack: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <button
        onClick={onBack}
        className="text-[10px] tracking-[0.2em] uppercase text-white/30 hover:text-white/60 mb-8 flex items-center gap-2"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        ← Back
      </button>

      <div className="flex items-end gap-3 mb-2">
        <Trophy size={28} color={GOLD} />
        <h2
          style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, color: "#fff", fontStyle: "italic" }}
        >
          Leaderboard
        </h2>
      </div>

      <div className="flex gap-6 mb-8">
        <div>
          <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: GOLD }}>
            {totalXP}
          </div>
          <div className="text-[9px] tracking-[0.2em] uppercase text-white/30">Your total XP</div>
        </div>
        {dailyStreak > 1 && (
          <div>
            <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, color: "#f87171" }}>
              🔥 {dailyStreak}
            </div>
            <div className="text-[9px] tracking-[0.2em] uppercase text-white/30">Day streak</div>
          </div>
        )}
      </div>

      {entries.length === 0 ? (
        <p className="text-white/30 text-sm text-center py-12">
          No scores yet. Play a round to get on the board!
        </p>
      ) : (
        <div className="flex flex-col gap-2">
          {entries.map((entry, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 px-4 py-3"
              style={{
                background: i === 0 ? `${GOLD}10` : "rgba(255,255,255,0.03)",
                border: `1px solid ${i === 0 ? `${GOLD}30` : "rgba(255,255,255,0.07)"}`,
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 16,
                  color: i === 0 ? GOLD : i === 1 ? "#aaa" : i === 2 ? "#cd7f32" : "rgba(255,255,255,0.3)",
                  width: 20,
                  textAlign: "center",
                }}
              >
                {i + 1}
              </span>
              <div className="flex-1">
                <div className="text-[13px] text-white/80">{entry.name}</div>
                <div className="text-[10px] text-white/30">
                  {PACKS.find((p) => p.id === entry.pack)?.emoji}{" "}
                  {PACKS.find((p) => p.id === entry.pack)?.name} · Lv.{entry.level} · {entry.date}
                </div>
              </div>
              <div className="flex items-center gap-1">
                <Zap size={11} color={GOLD} />
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: GOLD }}>
                  {entry.xp}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
}
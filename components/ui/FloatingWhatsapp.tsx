"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/constants";

// ─── Types ────────────────────────────────────────────────────────────────────

type Step = "closed" | "goal" | "who" | "level" | "done";

interface Answers {
  goal: string;
  who: string;
  level: string;
}

// ─── Question data ────────────────────────────────────────────────────────────

const STEPS = {
  goal: {
    question: "What brings you here?",
    options: [
      {
        label: "Learn Swahili myself",
        value: "I want to learn Swahili for myself",
      },
      {
        label: "Lessons for my child",
        value: "I want Swahili lessons for my child",
      },
      {
        label: "Work / diplomacy",
        value: "I need Swahili for professional or diplomatic work",
      },
      {
        label: "Travelling to Kenya",
        value: "I'm travelling to Kenya and want to learn basics",
      },
    ],
  },
  who: {
    question: "Where are you based?",
    options: [
      { label: "🇺🇸 USA", value: "the USA" },
      { label: "🇬🇧 UK", value: "the UK" },
      { label: "🇨🇦 Canada", value: "Canada" },
      { label: "🌍 Elsewhere", value: "another country" },
    ],
  },
  level: {
    question: "Your current Swahili level?",
    options: [
      { label: "Complete beginner", value: "a complete beginner" },
      { label: "Know a few words", value: "a beginner who knows a few words" },
      { label: "Conversational", value: "conversational but want to improve" },
      { label: "Advanced", value: "advanced and want to refine my skills" },
    ],
  },
} as const;

// ─── Message builder ──────────────────────────────────────────────────────────

function buildMessage(answers: Answers): string {
  return `Hi! I found you through your website and I'd like to book a free trial lesson. Here's a bit about me:\n\n• *Reason:* ${answers.goal}\n• *Based in:* ${answers.who}\n• *Swahili level:* ${answers.level}\n\nLooking forward to hearing from you! 😊`;
}

// ─── Main component ───────────────────────────────────────────────────────────

export function FloatingWhatsApp() {
  const [step, setStep] = useState<Step>("closed");
  const [answers, setAnswers] = useState<Answers>({
    goal: "",
    who: "",
    level: "",
  });

  function handleAnswer(key: keyof Answers, value: string) {
    const updated = { ...answers, [key]: value };
    setAnswers(updated);

    if (key === "goal") setStep("who");
    else if (key === "who") setStep("level");
    else if (key === "level") {
      setStep("done");
      const msg = encodeURIComponent(buildMessage(updated));
      setTimeout(() => {
        window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
        // reset after redirect
        setTimeout(() => {
          setStep("closed");
          setAnswers({ goal: "", who: "", level: "" });
        }, 1500);
      }, 600);
    }
  }

  const currentStep = step !== "closed" && step !== "done" ? STEPS[step] : null;
  const progress =
    step === "goal" ? 1 : step === "who" ? 2 : step === "level" ? 3 : 0;

  return (
    <>
      {/* ── Backdrop ── */}
      <AnimatePresence>
        {step !== "closed" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setStep("closed")}
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
          />
        )}
      </AnimatePresence>

      {/* ── Popup card ── */}
      <AnimatePresence>
        {step !== "closed" && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-24 right-6 z-50 w-80 bg-[#0e0e0e] border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="bg-[#25D366] px-5 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <WhatsAppIcon size={18} color="white" />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">Divina</p>
                  <p className="text-white/70 text-xs">
                    Swahili Teacher · Usually replies fast
                  </p>
                </div>
              </div>
              <button
                onClick={() => setStep("closed")}
                className="text-white/60 hover:text-white transition-colors text-xl leading-none"
                aria-label="Close"
              >
                ×
              </button>
            </div>

            {/* Progress bar */}
            {step !== "done" && (
              <div className="h-0.5 bg-white/5">
                <motion.div
                  className="h-full bg-[#25D366]"
                  animate={{ width: `${(progress / 3) * 100}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            {/* Body */}
            <div className="p-5">
              <AnimatePresence mode="wait">
                {step === "done" ? (
                  <motion.div
                    key="done"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-4"
                  >
                    <p className="text-3xl mb-3">🎉</p>
                    <p className="text-white font-medium text-sm mb-1">
                      Opening WhatsApp...
                    </p>
                    <p className="text-white/40 text-xs">
                      Your message is prefilled and ready to send.
                    </p>
                  </motion.div>
                ) : currentStep ? (
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -16 }}
                    transition={{ duration: 0.25 }}
                  >
                    {/* Chat bubble */}
                    <div className="bg-white/[0.06] rounded-lg rounded-tl-none px-4 py-3 mb-4">
                      <p className="text-white/80 text-sm leading-relaxed">
                        {currentStep.question}
                      </p>
                    </div>

                    {/* Options */}
                    <div className="space-y-2">
                      {currentStep.options.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() =>
                            handleAnswer(step as keyof Answers, opt.value)
                          }
                          className="w-full text-left px-4 py-2.5 border border-white/10 text-white/70 text-sm hover:border-[#25D366]/50 hover:text-white hover:bg-[#25D366]/5 transition-all duration-200"
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>

                    {/* Step indicator */}
                    <p className="text-white/20 text-xs text-center mt-4">
                      Step {progress} of 3
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Floating button ── */}
      <motion.button
        onClick={() => setStep(step === "closed" ? "goal" : "closed")}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:bg-[#20ba58] transition-colors duration-200"
        aria-label="Chat on WhatsApp"
      >
        <AnimatePresence mode="wait">
          {step !== "closed" ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="text-white text-2xl leading-none font-light"
            >
              ×
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <WhatsAppIcon size={26} color="white" />
            </motion.span>
          )}
        </AnimatePresence>

        {/* Pulse ring — only when closed */}
        {step === "closed" && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none" />
        )}
      </motion.button>
    </>
  );
}

// ─── Icon ─────────────────────────────────────────────────────────────────────

function WhatsAppIcon({
  size = 24,
  color = "white",
}: {
  size?: number;
  color?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L.057 23.57l5.858-1.537A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.893 9.893 0 01-5.029-1.373l-.361-.214-3.741.981.999-3.643-.234-.375A9.867 9.867 0 012.107 12C2.107 6.579 6.578 2.108 12 2.108c5.421 0 9.893 4.471 9.893 9.892 0 5.422-4.472 9.894-9.893 9.894z" />
    </svg>
  );
}

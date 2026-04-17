// components/game/useAudio.ts
import { useCallback, useRef } from "react";

export function useAudio() {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const speak = useCallback(
    (text: string, lang = "sw") => {
      if (!supported) return;
      // Cancel any current speech
      window.speechSynthesis.cancel();

      const u = new SpeechSynthesisUtterance(text);
      u.lang = lang;
      u.rate = 0.85; // slightly slower — easier to follow
      u.pitch = 1;
      u.volume = 1;

      // Try to find a Swahili or African voice; fall back gracefully
      const voices = window.speechSynthesis.getVoices();
      const swVoice =
        voices.find((v) => v.lang.startsWith("sw")) ||
        voices.find((v) => v.lang.startsWith("en-KE")) ||
        voices.find((v) => v.lang.startsWith("en-ZA")) ||
        null;
      if (swVoice) u.voice = swVoice;

      utteranceRef.current = u;
      window.speechSynthesis.speak(u);
    },
    [supported],
  );

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
  }, [supported]);

  return { speak, stop, supported };
}
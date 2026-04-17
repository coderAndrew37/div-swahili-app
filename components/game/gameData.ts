// components/game/gameData.ts
import {
  Coffee, BookOpen, Car, Home, TreePine,
} from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export interface GameItem {
  id: string;
  swahili: string;
  english: string;
  hint: string;
  Icon: ComponentType<LucideProps>;
}

export const GAME_DATA: GameItem[] = [
  { id: "kahawa",  swahili: "Kahawa",  english: "Coffee", hint: "a warm morning drink", Icon: Coffee   },
  { id: "kitabu",  swahili: "Kitabu",  english: "Book",   hint: "pages you read",       Icon: BookOpen },
  { id: "gari",    swahili: "Gari",    english: "Car",    hint: "four wheels",          Icon: Car      },
  { id: "nyumba",  swahili: "Nyumba",  english: "House",  hint: "where you live",       Icon: Home     },
  { id: "mti",     swahili: "Mti",     english: "Tree",   hint: "grows in the ground",  Icon: TreePine },
];

export const RESULT_COPY = {
  5: {
    swahili: "Hongera!",
    english: "Congratulations!",
    eyebrow: "Perfect score",
    insight: (score: number, secs: number) =>
      `You matched all 5 words in ${secs} seconds. That's genuine talent. Imagine what a full 60-minute session with Divinar unlocks — the advanced track is waiting.`,
    cta: "Explore the advanced track",
    subLabel: "Adult lessons · $40/hr · Live from Nairobi",
  },
  3: {
    swahili: "Vizuri Sana!",
    english: "Very Good!",
    eyebrow: "Strong result",
    insight: (score: number) =>
      `${score} out of 5 with zero preparation — you're clearly a natural. With Divinar's Heart-to-Heart method, you'd have all five locked in by the end of your very first lesson.`,
    cta: "Book a free trial lesson",
    subLabel: "Free 20-min trial · No commitment",
  },
  0: {
    swahili: "Bado Kidogo!",
    english: "Not quite yet!",
    eyebrow: "Keep going",
    insight: () =>
      `Everyone starts here — this is exactly why Divinar's lessons exist. She gets complete beginners speaking real Swahili from day one. No rote learning, no pressure.`,
    cta: "Start from scratch — free trial",
    subLabel: "Free 20-min trial · Children from $30/hr",
  },
} as const;

export function getResultTier(score: number): keyof typeof RESULT_COPY {
  if (score === 5) return 5;
  if (score >= 3) return 3;
  return 0;
}
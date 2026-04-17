// app/play/page.tsx
import type { Metadata } from "next";
import { StreetScramble } from "@/components/game/StreetScramble";

export const metadata: Metadata = {
  title: "The Nairobi Street Scramble — Lugha Studio",
  description:
    "Can you survive a 30-second Nairobi market run? Match 5 Swahili words to the right objects and see what you're made of.",
  openGraph: {
    title: "Can you survive the Nairobi Street Scramble?",
    description: "30 seconds. 5 words. One shot. Play Lugha Studio's free Swahili challenge.",
    images: [{ url: "/assets/og-scramble.jpg" }],
  },
};

export default function PlayPage() {
  return (
    <main className="min-h-screen bg-[#080808]">
      <StreetScramble />
    </main>
  );
}
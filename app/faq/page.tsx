import type { Metadata } from "next";
import FaqClient from "./FaqClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions — Lugha Studio",
  description:
    "Common questions about online Swahili lessons: Trial sessions, pricing, time zones, and learning platforms for kids and adults.",
  openGraph: {
    title: "FAQ | Online Swahili Lessons with Divinar",
    description: "Find answers about enrollment, scheduling, and learning methodology at Lugha Studio.",
    images: [{ url: "/assets/og-image.jpeg" }],
  },
  alternates: {
    canonical: "https://lughastudio.com/faq",
  },
};

export default function FaqPage() {
  return <FaqClient />;
}
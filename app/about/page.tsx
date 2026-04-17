import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Divinar — Lugha Studio",
  description:
    "Meet Divinar Nyang'arisa — TSC-registered Swahili educator, native Nairobi speaker, and mother of five. A decade of bridging African heritage with global learners.",
  openGraph: {
    title: "About Divinar — Lugha Studio",
    description:
      "TSC-registered Swahili educator with 10+ years at elite international schools. Now bringing Nairobi to your screen.",
    images: [{ url: "/assets/about-div.jpg" }],
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Professional Swahili Services — Lugha Studio",
  description:
    "Explore our Swahili learning tracks for kids and adults, alongside professional translation, transcription, and interpretation services by a TSC-registered educator.",
  openGraph: {
    title: "Academic & Professional Swahili Services | Lugha Studio",
    description: "From children's heritage lessons to high-stakes diplomatic interpretation. High-end linguistic support in Nairobi.",
    images: [{ url: "/assets/og-services.jpg" }],
  },
  alternates: {
    canonical: "https://lughastudio.com/services",
  },
};

export default function ServicesPage() {
  return <ServicesClient />;
}
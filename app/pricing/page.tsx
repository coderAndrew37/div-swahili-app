import type { Metadata } from "next";
import PricingClient from "./PricingClient";

export const metadata: Metadata = {
  title: "Pricing & Enrollment — Lugha Studio",
  description:
    "Transparent pricing for online Swahili lessons. Children's programs from $30/hr, Adult & Professional tracks from $40/hr. TSC-registered instruction.",
  openGraph: {
    title: "Simple Swahili Lesson Pricing | Lugha Studio",
    description: "Affordable, high-end Swahili instruction live from Nairobi. View our children and adult learning tracks.",
    images: [{ url: "/assets/og-pricing.jpg" }],
  },
  alternates: {
    canonical: "https://lughastudio.com/pricing",
  },
};

export default function PricingPage() {
  return <PricingClient />;
}
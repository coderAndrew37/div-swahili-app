import type { Metadata } from "next";
import TestimonialsClient from "./TestimonialsClient";

export const metadata: Metadata = {
  title: "Testimonials & Success Stories — Lugha Studio",
  description:
    "Read how Divinar's Heart-to-Heart methodology helps heritage learners, diplomats, and NGO directors master Swahili and Kenyan cultural protocol.",
  openGraph: {
    title: "Swahili Learning Success Stories | Lugha Studio",
    description: "Real feedback from our global community of Swahili learners and professionals.",
    images: [{ url: "/assets/og-testimonials.jpg" }],
  },
  alternates: {
    canonical: "https://lughastudio.com/testimonials",
  },
};

export default function TestimonialsPage() {
  return <TestimonialsClient />;
}
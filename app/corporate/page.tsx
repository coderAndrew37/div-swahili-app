import type { Metadata } from "next";
import CorporateClient from "./CorporateClient";

export const metadata: Metadata = {
  title: "Corporate & Diplomatic Swahili Training — Lugha Studio",
  description:
    "Specialist Swahili training for UN personnel, diplomats, and expatriate executives. Bespoke cultural protocol and rapid-fluency onboarding for the East African professional landscape.",
  
  // High-end SEO and Social Previews
  openGraph: {
    title: "Institutional Swahili Training | Diplomatic Excellence",
    description:
      "TSC-registered instruction for NGO, embassy, and corporate personnel. Cultural protocol and intensive language onboarding in Nairobi.",
    url: "https://lughastudio.com/corporate",
    siteName: "Lugha Studio",
    images: [
      {
        url: "/assets/og-image.jpeg", // Ensure this image exists in /public/assets/
        width: 1200,
        height: 630,
        alt: "Corporate Swahili training at Lugha Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Diplomatic Swahili Training — Lugha Studio",
    description: "Stripping away the filler. Rapid-fluency modules for global leaders.",
    images: ["/assets/og-image.jpeg"],
  },

  alternates: {
    canonical: "https://lughastudio.com/corporate",
  },
};

export default function CorporatePage() {
  return <CorporateClient />;
}
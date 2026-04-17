import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Divinar — Lugha Studio | Enrol in Swahili Lessons",
  description:
    "Connect with Divinar Nyang'arisa for TSC-registered Swahili instruction, corporate training, or translation services. Reach out via WhatsApp, Email, or our contact form.",
  
  // OpenGraph for rich link previews on WhatsApp, LinkedIn, and Facebook
  openGraph: {
    title: "Start Your Swahili Journey — Lugha Studio",
    description:
      "Native Nairobi speaker & TSC-registered educator. Book a consultation or inquire about personalized Swahili lessons.",
    url: "https://lughastudio.com/contact", // Update with your actual domain
    siteName: "Lugha Studio",
    images: [
      {
        url: "/assets/og-image.jpeg", // Create a professional brand image for this
        width: 1200,
        height: 630,
        alt: "Contact Divinar at Lugha Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter/X Card Preview
  twitter: {
    card: "summary_large_image",
    title: "Contact Divinar | Lugha Studio",
    description: "Personalized Swahili instruction for global learners. Get in touch today.",
    images: ["/assets/og-image.jpeg"],
  },

  // Canonical prevents duplicate content issues
  alternates: {
    canonical: "https://lughastudio.com/contact",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}
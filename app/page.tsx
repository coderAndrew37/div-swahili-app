import type { Metadata } from "next";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FreeTrialSection } from "@/components/sections/FreeTrialSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VideoCtaSection } from "@/components/sections/VideoCTASection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FAQSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Lugha Studio — Premium Online Swahili Instruction",
  description:
    "Master Swahili with Divinar, a TSC-registered educator in Nairobi. Personalized heritage learning for children and professional tracks for diplomats.",
  openGraph: {
    title: "Lugha Studio | Swahili Mastery from the Heart of Nairobi",
    description: "Bridging cultures through academic excellence and heartfelt linguistic instruction.",
    images: [{ url: "/assets/og-image.jpeg" }],
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      
      <AboutSection />

      {/* Strategic Bridge: Video content adds human warmth 
          between the philosophy (About) and the logic (Services). 
      */}
      <VideoCtaSection />

      <ServicesSection />

      <FreeTrialSection />

      <TestimonialsSection />

      <PricingSection />

      <FAQSection />

      <ResourcesSection />

      <ContactSection />
    </main>
  );
}
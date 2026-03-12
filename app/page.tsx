import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <ResourcesSection />
      <ContactSection />
    </>
  );
}

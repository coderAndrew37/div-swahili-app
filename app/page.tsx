import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { FreeTrialSection } from "@/components/sections/FreeTrialSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { VideoCtaSection } from "@/components/sections/VideoCTASection"; // New Section
import { PricingSection } from "@/components/sections/PricingSection";
import { ResourcesSection } from "@/components/sections/ResourcesSection";
import { FAQSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
       {/* Placed here to bridge the gap between "social proof" (Testimonials) 
          and "commitment" (Pricing). It shows the fun side of the studio.
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
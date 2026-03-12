import Image from "next/image";
import { PRICING_TIERS } from "@/constants";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { PricingCard } from "@/components/ui/PricingCard";
import { Reveal } from "@/components/ui/Reveal";

export function PricingSection() {
  return (
    <>
      {/* ── Full-bleed image break ── */}
      <div className="relative h-56 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1600&q=75"
          alt="Students in a learning environment"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/65" />
        {/* Quote over image */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="text-white/80 font-serif text-2xl md:text-3xl italic max-w-2xl leading-snug">
            "Prices are flexible. Learning Swahili is priceless."
          </p>
          <div className="w-12 h-px bg-[#c8a96e] mt-5" />
        </div>
      </div>

      {/* ── Pricing cards ── */}
      <SectionWrapper id="pricing" bg="secondary">
        <SectionHeader
          label="Pricing"
          heading="Flexible Rates for Every Learner"
          subheading="Negotiable for group sessions or students booking 3+ classes. Reach out and we'll find something that works."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={i} delay={i + 1}>
              <PricingCard tier={tier} />
            </Reveal>
          ))}
        </div>
      </SectionWrapper>
    </>
  );
}

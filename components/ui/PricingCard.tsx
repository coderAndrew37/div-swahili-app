import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/constants";
import type { PricingTier } from "@/types";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  const { label, price, unit, featured, perks, cta } = tier;

  return (
    <div
      className={`relative p-8 border transition-colors duration-300 ${
        featured
          ? "border-[#c8a96e]/40 bg-[#c8a96e]/[0.03]"
          : "border-white/8 hover:border-white/15"
      }`}
    >
      {/* Featured top line */}
      {featured && (
        <div className="absolute -top-px left-6 right-6 h-px bg-[#c8a96e]" />
      )}

      <p
        className={`text-xs tracking-widest uppercase mb-6 ${
          featured ? "text-[#c8a96e]" : "text-white/30"
        }`}
      >
        {label}
      </p>

      <p className="text-5xl font-serif text-white mb-2">{price}</p>
      <p className="text-white/30 text-sm mb-8">{unit}</p>

      <ul className="space-y-3 mb-10">
        {perks.map((perk) => (
          <li
            key={perk}
            className="flex items-center gap-3 text-white/50 text-sm"
          >
            <span className="w-1 h-1 bg-[#c8a96e] rounded-full flex-shrink-0" />
            {perk}
          </li>
        ))}
      </ul>

      <ButtonLink
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        variant={featured ? "primary" : "outline"}
        className="w-full"
      >
        {cta}
      </ButtonLink>
    </div>
  );
}

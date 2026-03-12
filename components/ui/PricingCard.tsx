import { SITE } from "@/constants";
import type { PricingTier } from "@/types";

interface PricingCardProps {
  tier: PricingTier;
}

export function PricingCard({ tier }: PricingCardProps) {
  const { label, price, unit, featured, perks, cta, whatsappMessage } = tier;
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

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

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`block text-center py-3.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
          featured
            ? "bg-[#c8a96e] text-[#0a0a0a] hover:bg-white"
            : "border border-white/15 text-white hover:border-[#c8a96e] hover:text-[#c8a96e]"
        }`}
      >
        {cta}
      </a>
    </div>
  );
}

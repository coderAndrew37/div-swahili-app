import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

interface SectionHeaderProps {
  label: string;
  heading: React.ReactNode;
  subheading?: string;
  centered?: boolean;
}

export function SectionHeader({
  label,
  heading,
  subheading,
  centered = true,
}: SectionHeaderProps) {
  const align = centered ? "text-center" : "text-left";

  return (
    <div className={`mb-16 ${align}`}>
      <Reveal>
        <SectionLabel className={centered ? "text-center" : ""}>
          {label}
        </SectionLabel>
      </Reveal>

      <Reveal delay={1}>
        <h2 className="text-4xl md:text-5xl font-serif text-white leading-tight mb-4">
          {heading}
        </h2>
      </Reveal>

      {subheading && (
        <Reveal delay={2}>
          <p
            className={`text-white/40 leading-relaxed ${centered ? "max-w-xl mx-auto" : "max-w-xl"}`}
          >
            {subheading}
          </p>
        </Reveal>
      )}
    </div>
  );
}

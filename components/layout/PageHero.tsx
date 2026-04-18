// components/layout/PageHero.tsx
import { ReactNode } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { VideoHeroBackground } from "@/components/ui/VideoBackground";
import Image from "next/image";

type HeroBg =
  | { type: "color"; value: "primary" | "secondary" }
  | { type: "image"; src: string; alt: string }
  | { type: "video"; src: string; poster?: string };

interface PageHeroProps {
  eyebrow?: string;
  heading: ReactNode;
  subheading?: ReactNode;
  bg: HeroBg;
  align?: "left" | "center";
  children?: ReactNode;
  cta?: ReactNode;
}

export function PageHero({
  eyebrow,
  heading,
  subheading,
  bg,
  align = "left",
  children,
  cta,
}: PageHeroProps) {
  const bgClass =
    bg.type === "color"
      ? bg.value === "primary"
        ? "bg-[#0a0a0a]"
        : "bg-[#111111]"
      : "bg-[#0a0a0a]";

  return (
    <section
      className={`relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden ${bgClass}`}
    >
      {/* Media backgrounds */}
      {bg.type === "image" && (
        <>
          <Image
            src={bg.src}
            alt={bg.alt}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/65" />
        </>
      )}
      {bg.type === "video" && (
        <VideoHeroBackground src={bg.src} poster={bg.poster} />
      )}

      <div
        className={`relative z-10 max-w-7xl mx-auto px-6 ${
          align === "center" ? "text-center" : ""
        }`}
      >
        <div className={align === "center" ? "max-w-3xl mx-auto" : "max-w-4xl"}>
          {eyebrow && (
            <Reveal>
              <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
                {eyebrow}
              </span>
            </Reveal>
          )}
          <Reveal delay={0.1}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-[1.1]">
              {heading}
            </h1>
          </Reveal>
          {subheading && (
            <Reveal delay={0.25}>
              <div className="text-white/60 text-xl leading-relaxed">
                {subheading}
              </div>
            </Reveal>
          )}
          
          {/* Custom Content slot */}
          {children && <Reveal delay={0.35}>{children}</Reveal>}

          {/* Dedicated CTA slot */}
          {cta && (
            <Reveal delay={0.35}>
              <div className={`mt-10 flex gap-4 ${align === "center" ? "justify-center" : ""}`}>
                {cta}
              </div>
            </Reveal>
          )}
        </div>
      </div>
    </section>
  );
}
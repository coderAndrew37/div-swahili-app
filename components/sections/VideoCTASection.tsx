"use client";

import { motion } from "framer-motion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/constants";
import { Reveal } from "@/components/ui/Reveal";

export function VideoCtaSection() {
  /**
   * ASSET: public/assets/video/student-reel.mp4
   */
  const REEL_VIDEO = "/assets/video/student-reel.mp4";

  return (
    <section className="relative h-[600px] flex items-center justify-center overflow-hidden bg-black">
      {/* ── Background Video ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60 grayscale-[20%]"
        >
          <source src={REEL_VIDEO} type="video/mp4" />
        </video>
        {/* Gradients to blend with sections above/below */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <Reveal>
          <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block">
            Join the Community
          </span>
        </Reveal>
        
        <Reveal delay={0.2}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight">
            More than just a lesson. <br />
            <span className="italic text-[#c8a96e]">It's a celebration.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.4}>
          <p className="text-white/80 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            Experience the warmth of Kenyan culture while mastering the language. 
            Our sessions are designed to be engaging, interactive, and—most importantly—fun.
          </p>
        </Reveal>

        <Reveal delay={0.6}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ButtonLink
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4"
            >
              Book Your Free Trial
            </ButtonLink>
            <p className="text-white/40 text-sm tracking-widest uppercase border-l border-white/10 pl-6 hidden sm:block">
              Limited slots <br /> available for 2026
            </p>
          </div>
        </Reveal>
      </div>

      {/* Decorative Corner Accents */}
      <div className="absolute top-10 left-10 w-20 h-20 border-t border-l border-[#c8a96e]/30" />
      <div className="absolute bottom-10 right-10 w-20 h-20 border-b border-r border-[#c8a96e]/30" />
    </section>
  );
}
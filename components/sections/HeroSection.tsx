"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { HeroStatsCard } from "../ui/HeroStatCard";
import { HeroText } from "../ui/HeroText";
import { ScrollIndicator } from "../ui/ScrollIndicator";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  /**
   * ASSET STRATEGY:
   * Put your images/videos in /public/assets/hero/
   * Path: /assets/hero/client-hero.jpg
   */
  const HERO_ASSET = "/assets/client-hero.jpeg"; 
  const FALLBACK_BG = "https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1800&q=80";

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* ── Background Media ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src={HERO_ASSET || FALLBACK_BG}
          alt="Lugha Studio - Swahili Learning"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
          // If the file doesn't exist in /public yet, it will 404. 
          // You can use an error boundary or a simple check if needed.
        />

        {/* UNCOMMENT BELOW TO USE VIDEO INSTEAD:
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/assets/hero/tutor-session.mp4" type="video/mp4" />
          </video> 
        */}

        {/* Dark overlay — keeps text readable */}
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
        
        {/* Bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </motion.div>

      {/* ── Content ── */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-20 grid md:grid-cols-2 gap-16 items-center w-full"
      >
        <HeroText />
        <HeroStatsCard />
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}
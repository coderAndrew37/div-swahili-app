"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SITE, STATS } from "@/constants";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { fadeUp } from "@/lib/animations";

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background image with parallax ── */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1611348586804-61bf6c080437?w=1800&q=80"
          alt="Nairobi skyline at dusk"
          fill
          priority
          className="object-cover object-center"
        />
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

function HeroText() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="inline-flex items-center gap-2 border border-[#c8a96e]/40 text-[#c8a96e] text-xs tracking-[0.2em] uppercase px-4 py-2 mb-8 backdrop-blur-sm bg-black/20"
      >
        <span className="w-1.5 h-1.5 bg-[#c8a96e] rounded-full animate-pulse" />
        Now Accepting Students
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="text-5xl md:text-6xl lg:text-7xl font-serif text-white leading-[1.05] mb-6"
      >
        Speak Swahili
        <br />
        <span className="text-[#c8a96e] italic">with Confidence.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="text-white/70 text-lg leading-relaxed mb-10 max-w-md"
      >
        Expert online Swahili lessons for diaspora families, diplomats, foreign
        spouses, and curious minds — taught by a seasoned academic, live from
        Nairobi.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="flex flex-wrap gap-4"
      >
        <ButtonLink
          href={`https://wa.me/${SITE.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Start Learning Today
        </ButtonLink>
        <ButtonLink href="#about" variant="outline">
          Meet the Teacher
        </ButtonLink>
      </motion.div>
    </div>
  );
}

function HeroStatsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="hidden md:block border border-white/10 bg-black/40 backdrop-blur-md p-10"
    >
      <p className="text-white/30 text-xs tracking-[0.2em] uppercase mb-8">
        By the Numbers
      </p>

      <div className="grid grid-cols-2 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            custom={i}
            initial="hidden"
            animate="visible"
          >
            <p className="text-4xl font-serif text-[#c8a96e] mb-1">
              {stat.value}
            </p>
            <p className="text-white/50 text-sm tracking-wide">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 pt-8 border-t border-white/10">
        <p className="text-white/50 text-sm italic leading-relaxed">
          "Lugha ni Uhai" — Language is Life.
        </p>
        <p className="text-[#c8a96e] text-xs tracking-widest mt-2 uppercase">
          Swahili Proverb
        </p>
      </div>
    </motion.div>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
    >
      <span className="text-white/30 text-xs tracking-[0.2em] uppercase">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        className="w-px h-8 bg-gradient-to-b from-[#c8a96e]/50 to-transparent"
      />
    </motion.div>
  );
}

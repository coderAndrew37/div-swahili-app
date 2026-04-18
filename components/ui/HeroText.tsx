import { SITE } from "@/constants";
import { motion } from "framer-motion";
import { ButtonLink } from "./ButtonLink";

export function HeroText() {
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
        <ButtonLink href="/about" variant="outline">
          Meet the Teacher
        </ButtonLink>
      </motion.div>
    </div>
  );
}
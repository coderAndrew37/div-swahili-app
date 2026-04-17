import { STATS } from "@/constants";
import { fadeUp } from "@/lib/animations";
import { motion } from "framer-motion";

export function HeroStatsCard() {
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
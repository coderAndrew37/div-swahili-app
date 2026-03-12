"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/constants";

export function UrgencyBanner() {
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Show the banner once user scrolls past 400px
      setScrolled(window.scrollY > 400);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && scrolled && (
        <motion.div
          initial={{ y: 80, opacity: 0, x: "-50%" }} // Combined x-translate into motion for smoother centering
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 80, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl"
        >
          <div className="bg-[#0e0e0e] border border-[#c8a96e]/30 px-6 py-4 flex items-center justify-between gap-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#c8a96e] rounded-full animate-pulse flex-shrink-0" />
              <p className="text-white/80 text-sm">
                <span className="text-[#c8a96e] font-semibold">
                  Only 4 trial spots
                </span>{" "}
                left this month — first lesson is free.
              </p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* FIXED: Restored the 'a' tag name */}
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20my%20free%20trial%20Swahili%20lesson%20please.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c8a96e] text-[#0a0a0a] px-4 py-2 text-xs font-bold tracking-wide hover:bg-white transition-colors duration-200 whitespace-nowrap"
              >
                Claim Spot
              </a>
              <button
                onClick={() => setVisible(false)}
                className="text-white/30 hover:text-white/60 transition-colors text-2xl px-1 leading-none"
                aria-label="Dismiss"
              >
                &times;
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

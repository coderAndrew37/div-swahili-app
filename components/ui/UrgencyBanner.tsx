"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SITE } from "@/constants";

export function UrgencyBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasDismissed, setHasDismissed] = useState(true);

  useEffect(() => {
    const dismissed = localStorage.getItem("urgency_banner_dismissed");
    setHasDismissed(!!dismissed);
    setIsVisible(true);
  }, []);

  const handleDismiss = () => {
    localStorage.setItem("urgency_banner_dismissed", "true");
    setHasDismissed(true);

    // Track banner dismissal for retargeting exclusions
    if (typeof window !== 'undefined') {
      (window as any).fbq?.('trackCustom', 'BannerDismissed');
      (window as any).gtag?.('event', 'banner_dismissed');
    }
  };

  const handleClaimClick = () => {
    // Track high-intent click for retargeting audiences
    if (typeof window !== 'undefined') {
      (window as any).fbq?.('track', 'InitiateCheckout', {
        content_name: 'Urgency_Banner_Trial_Claim',
        value: 0,
        currency: 'USD'
      });
      (window as any).gtag?.('event', 'click_banner_claim', {
        event_category: 'engagement',
        event_label: 'urgency_banner'
      });
    }
  };

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      const isScrolled = window.scrollY > 400;
      if (isScrolled && !scrolled) {
        // Track banner view (when it first appears)
        (window as any).gtag?.('event', 'banner_view');
      }
      setScrolled(isScrolled);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  return (
    <AnimatePresence>
      {isVisible && !hasDismissed && scrolled && (
        <motion.div
          initial={{ y: 80, opacity: 0, x: "-50%" }}
          animate={{ y: 0, opacity: 1, x: "-50%" }}
          exit={{ y: 80, opacity: 0, x: "-50%" }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-6 left-1/2 z-50 w-[calc(100%-3rem)] max-w-2xl"
        >
          <div className="bg-[#0e0e0e] border border-[#c8a96e]/30 px-6 py-4 flex items-center justify-between gap-4 shadow-2xl">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#c8a96e] rounded-full animate-pulse shrink-0" />
              <p className="text-white/80 text-sm">
                <span className="text-[#c8a96e] font-semibold">
                  Only 4 trial spots
                </span>{" "}
                left this month — first lesson is free.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20my%20free%20trial%20Swahili%20lesson%20please.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleClaimClick}
                className="bg-[#c8a96e] text-[#0a0a0a] px-4 py-2 text-xs font-bold tracking-wide hover:bg-white transition-colors duration-200 whitespace-nowrap"
              >
                Claim Spot
              </a>
              <button
                onClick={handleDismiss}
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
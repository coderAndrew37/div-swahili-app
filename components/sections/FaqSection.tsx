"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FAQS, SITE } from "@/constants";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq" bg="secondary">
      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: header + CTA */}
        <div className="md:sticky md:top-28">
          <SectionHeader
            label="Common Questions"
            heading={
              <>
                Everything You
                <br />
                <span className="italic text-[#c8a96e]">Need to Know.</span>
              </>
            }
            centered={false}
          />
          <Reveal delay={0.2}>
            <p className="text-white/50 leading-relaxed mb-8">
              Still have questions? Send a message directly — she responds
              within a few hours.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            {/* FIXED: Added the missing 'a' tag name here */}
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#c8a96e] text-[#0a0a0a] px-6 py-3 text-sm font-semibold tracking-wide hover:bg-white transition-colors duration-200"
            >
              Ask on WhatsApp →
            </a>
          </Reveal>
        </div>

        {/* Right: accordion */}
        <div className="space-y-2">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              index={i}
              isOpen={open === i}
              onToggle={() => setOpen(open === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}

function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: (typeof FAQS)[number];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    // Reduced the multiplier from 0.5 to 0.1 for a smoother entrance
    <Reveal delay={index * 0.1}>
      <div
        className={`border transition-colors duration-300 ${
          isOpen
            ? "border-[#c8a96e]/30 bg-[#c8a96e]/[0.03]"
            : "border-white/8 hover:border-white/15"
        }`}
      >
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
        >
          <span
            className={`text-sm font-medium transition-colors duration-200 ${isOpen ? "text-white" : "text-white/70"}`}
          >
            {faq.q}
          </span>
          <motion.span
            animate={{ rotate: isOpen ? 45 : 0 }}
            transition={{ duration: 0.2 }}
            className="text-[#c8a96e] text-xl flex-shrink-0 leading-none"
          >
            +
          </motion.span>
        </button>

        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <p className="px-6 pb-5 text-white/50 text-sm leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}

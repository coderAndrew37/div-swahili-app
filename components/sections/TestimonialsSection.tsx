"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/constants";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function TestimonialsSection() {
  return (
    <SectionWrapper id="testimonials" bg="primary">
      <SectionHeader
        label="Student Stories"
        heading={
          <>
            Real People.
            <br />
            <span className="italic text-[#c8a96e]">Real Results.</span>
          </>
        }
        subheading="From diaspora families to diplomats — here's what students say."
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="grid md:grid-cols-2 gap-6"
      >
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard key={i} testimonial={t} index={i} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      className="border border-white/8 bg-white/[0.02] p-8 flex flex-col gap-6 hover:border-[#c8a96e]/20 transition-colors duration-300"
    >
      {/* Stars */}
      <div className="flex gap-1">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <span key={i} className="text-[#c8a96e] text-sm">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="text-white/70 text-sm leading-relaxed italic flex-1">
        "{testimonial.quote}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-white/8">
        <div className="w-10 h-10 rounded-full bg-[#c8a96e]/10 border border-[#c8a96e]/20 flex items-center justify-center text-lg">
          {testimonial.flag}
        </div>
        <div>
          <p className="text-white text-sm font-medium">{testimonial.name}</p>
          <p className="text-white/40 text-xs mt-0.5">
            {testimonial.role} · {testimonial.location}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

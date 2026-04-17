"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FEATURES } from "@/constants";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { fadeUp, staggerContainer } from "@/lib/animations";
import type { Feature } from "@/types";

export function AboutSection() {
  return (
    <SectionWrapper id="about" bg="secondary">
      <div className="grid md:grid-cols-2 gap-20 items-center">
        <TeacherCard />
        <AboutContent />
      </div>
    </SectionWrapper>
  );
}

function TeacherCard() {
  /**
   * Main Teacher Portrait from public folder
   * Path: public/assets/about/teacher-main.jpg
   */
  const TEACHER_IMAGE = "/assets/about-div.jpg";
  const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=800&q=80";

  return (
    <Reveal>
      <div className="relative">
        {/* Main photo */}
        <div className="w-full aspect-[3/4] relative overflow-hidden">
          <Image
            src={TEACHER_IMAGE || FALLBACK_IMAGE}
            alt="Lead Swahili Instructor"
            fill
            priority
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          {/* Bottom gradient overlay */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0e0e0e] to-transparent" />

          {/* Caption over image */}
          <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
            <p className="text-[#c8a96e] text-sm tracking-widest uppercase font-medium">
              Based in Nairobi
            </p>
            <p className="text-white text-lg font-serif mt-1">
              Teaching the World
            </p>
          </div>
        </div>

        {/* Offset decorative border */}
        <div className="absolute -bottom-4 -right-4 w-full h-full border border-[#c8a96e]/15 pointer-events-none -z-10" />

        {/* Credential badge */}
        <div className="absolute -top-4 -left-4 bg-[#c8a96e] text-[#0a0a0a] px-4 py-2 text-xs font-bold tracking-widest uppercase shadow-lg">
          MA · Swahili & Communication
        </div>

        {/* Floating school badge */}
        <div className="absolute -bottom-6 -right-6 bg-[#0a0a0a] border border-white/10 px-5 py-3 shadow-xl">
          <p className="text-white/40 text-xs tracking-widest uppercase">
            Currently teaching at
          </p>
          <p className="text-white text-sm font-serif mt-0.5">
            Language Garage, New York
          </p>
        </div>
      </div>
    </Reveal>
  );
}

function AboutContent() {
  return (
    <div>
      <SectionHeader
        label="About the Teacher"
        heading={
          <>
            A Decade of Turning{" "}
            <span className="italic text-white/40">Strangers</span> into
            <br /> Swahili Speakers.
          </>
        }
        centered={false}
      />

      <Reveal delay={0.2}>
        <p className="text-white/50 leading-relaxed mb-5">
          With a Bachelor's and Master's in Swahili and Communication, and over
          ten years teaching in international schools across Kenya, she brings
          academic rigour and real-world warmth to every lesson.
        </p>
      </Reveal>

      <Reveal delay={0.3}>
        <p className="text-white/50 leading-relaxed mb-10">
          She currently teaches virtually at the{" "}
          <span className="text-white/80">Language Garage</span> in New York — a
          testament to her global reach from right here in Nairobi.
        </p>
      </Reveal>

      {/* Static teaching scene image */}
      <Reveal delay={0.4}>
        <div className="relative w-full h-44 mb-10 overflow-hidden group">
          <Image
            src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=800&q=80"
            alt="Online teaching session"
            fill
            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-[#0a0a0a]/50" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white/80 font-serif text-lg italic">
              "Every lesson is a bridge between cultures."
            </p>
          </div>
        </div>
      </Reveal>

      <FeatureList features={[...FEATURES]} />
    </div>
  );
}

function FeatureList({ features }: { features: Feature[] }) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-1 gap-4"
    >
      {features.map((feature, i) => (
        <motion.div
          key={i}
          variants={fadeUp}
          custom={i}
          className="flex gap-4 group"
        >
          <div className="w-1 bg-[#c8a96e]/20 group-hover:bg-[#c8a96e] transition-colors duration-300 flex-shrink-0 rounded-full" />
          <div>
            <p className="text-white font-medium text-sm mb-1">
              {feature.title}
            </p>
            <p className="text-white/40 text-sm leading-relaxed">
              {feature.body}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
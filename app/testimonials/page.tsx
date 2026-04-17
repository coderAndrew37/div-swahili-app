"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/constants";
import { Globe, GraduationCap, MessageSquare, Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Parent, London",
    category: "Heritage Learning",
    content: "Divinar has a magical way with children. My 7-year-old was struggling to connect with our roots, but after 3 months of Class Dojo sessions, he’s starting his mornings with 'Hujambo Mama!' It's been life-changing for our family.",
  },
  {
    name: "David K.",
    role: "Diplomatic Envoy, Nairobi",
    category: "Professional Track",
    content: "As someone moving to Kenya for a 2-year posting, I needed more than just grammar. Divinar taught me the nuances of Kenyan professional etiquette that aren't in any textbook. I felt confident from my very first meeting.",
  },
  {
    name: "Elena R.",
    role: "NGO Director",
    category: "Intensive Track",
    content: "The academic rigor Divinar brings is unmatched. Her Master's background shows in how she structures complex verb tenses. I went from zero to conversational in record time.",
  },
  {
    name: "The Harrison Family",
    role: "Expats, New York",
    category: "Group Sessions",
    content: "We do family sessions every Saturday. It's become our favorite weekly tradition. Divinar makes the culture of Nairobi feel so close, even when we are thousands of miles away.",
  },
  {
    name: "James O.",
    role: "Software Engineer",
    category: "Adult Social",
    content: "I've tried every app out there. Nothing compares to a 1-on-1 session with a native expert who actually cares about your progress. The 'Heart-to-Heart' method is real.",
  }
];

export default function TestimonialsPage() {
  return (
    <main className="pt-20">
      {/* ── Header ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Success Stories
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Voices of our <br />
              <span className="italic text-[#c8a96e]">Global Community.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/60 text-xl leading-relaxed">
              From heritage learners in the diaspora to diplomats in the heart 
              of Nairobi, see how our methodology is bridging cultures, 
              one conversation at a time.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── Testimonial Grid (Wall of Love) ── */}
      <SectionWrapper bg="secondary">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {TESTIMONIALS.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </SectionWrapper>

      {/* ── Impact Stats ── */}
      <SectionWrapper bg="primary">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 border-y border-white/5 py-16">
          <ImpactStat icon={<GraduationCap />} label="Students Taught" value="200+" />
          <ImpactStat icon={<Globe />} label="Countries Reached" value="15+" />
          <ImpactStat icon={<MessageSquare />} label="Success Rate" value="100%" />
        </div>
      </SectionWrapper>

      {/* ── Final CTA ── */}
      <SectionWrapper bg="secondary">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-[#c8a96e]/20 p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Quote size={120} className="text-[#c8a96e]" />
          </div>
          
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">
              Ready to write your <br />
              <span className="italic text-[#c8a96e]">own story?</span>
            </h2>
            <p className="text-white/40 mb-10 max-w-lg mx-auto leading-relaxed">
              Join a community of learners who are discovering the beauty of 
              Swahili through a personalized, academic, and heartfelt approach.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <ButtonLink 
              href={`https://wa.me/${SITE.whatsapp}`}
              className="px-12 py-5 text-sm"
            >
              Book Your Intro Session
            </ButtonLink>
          </Reveal>
        </div>
      </SectionWrapper>
    </main>
  );
}

function TestimonialCard({ name, role, category, content, index }: any) {
  return (
    <Reveal delay={index * 0.1}>
      <div className="break-inside-avoid p-8 bg-white/[0.02] border border-white/10 hover:border-[#c8a96e]/30 transition-all group relative">
        <div className="flex gap-1 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} className="fill-[#c8a96e] text-[#c8a96e]" />
          ))}
        </div>
        
        <p className="text-white/70 italic leading-relaxed mb-8 text-lg">
          "{content}"
        </p>
        
        <div className="flex items-center justify-between border-t border-white/5 pt-6">
          <div>
            <h4 className="text-white font-medium">{name}</h4>
            <p className="text-white/30 text-xs uppercase tracking-widest mt-1">{role}</p>
          </div>
          <span className="text-[#c8a96e] text-[10px] font-bold uppercase tracking-tighter bg-[#c8a96e]/10 px-2 py-1">
            {category}
          </span>
        </div>
      </div>
    </Reveal>
  );
}

function ImpactStat({ icon, label, value }: any) {
  return (
    <div className="text-center space-y-3">
      <div className="text-[#c8a96e]/40 flex justify-center">{icon}</div>
      <h3 className="text-3xl md:text-5xl font-serif text-white">{value}</h3>
      <p className="text-white/30 text-[10px] uppercase tracking-[0.3em] font-bold">{label}</p>
    </div>
  );
}
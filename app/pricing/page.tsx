"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/constants";
import { Check, HelpCircle, ShieldCheck, Zap, Globe, MessageSquare } from "lucide-react";

export default function PricingPage() {
  return (
    <main className="pt-20">
      {/* ── Header ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-3xl mx-auto text-center">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Investment & Value
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-4xl md:text-6xl font-serif text-white mb-6">
              Start Your <span className="italic text-[#c8a96e]">Swahili Journey.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/60 text-lg leading-relaxed">
              No hidden fees. No long-term contracts. Just world-class instruction 
              from a TSC-registered academic, live from the heart of Nairobi.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── Pricing Cards ── */}
      <SectionWrapper bg="secondary">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Children's Plan */}
          <PricingCard 
            title="Children & Teens"
            age="5-18 Years"
            price="30"
            description="Perfect for heritage learners and students in international schools."
            features={[
              "Interactive Class Dojo Integration",
              "Kid-friendly Visual Materials",
              "Homework Support & Fun Quizzes",
              "Cultural Storytelling Sessions",
              "Progress Reports for Parents"
            ]}
          />

          {/* Adults Plan */}
          <PricingCard 
            highlight
            title="Adult Learners"
            age="18+ & Professionals"
            price="40"
            description="Tailored for diplomats, foreign spouses, and professionals."
            features={[
              "Bespoke Curriculum (Business or Social)",
              "Deep Cultural & Etiquette Training",
              "Google Classroom Access",
              "Flexible Scheduling via WhatsApp",
              "Direct 1-on-1 Access to Divinar"
            ]}
          />
        </div>

        {/* ── Value Props Bar ── */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
          <ValueProp icon={<ShieldCheck size={20} />} text="TSC Registered" />
          <ValueProp icon={<Zap size={20} />} text="Live Sessions" />
          <ValueProp icon={<Globe size={20} />} text="Native Context" />
          <ValueProp icon={<MessageSquare size={20} />} text="Daily Support" />
        </div>
      </SectionWrapper>

      {/* ── Specialized Services (From Flyer Footer) ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-4xl mx-auto text-center border border-white/10 p-12 bg-white/[0.02]">
          <Reveal>
            <h3 className="text-2xl font-serif text-white mb-6">Need something more specific?</h3>
            <p className="text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Divinar is more than a tutor. She is a multi-disciplinary expert 
              available for specialized projects across the Swahili-speaking world.
            </p>
          </Reveal>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#c8a96e] text-sm uppercase tracking-widest font-medium">
             <span>Translation</span>
             <span className="text-white/10">•</span>
             <span>Transcription</span>
             <span className="text-white/10">•</span>
             <span>Interpretation</span>
             <span className="text-white/10">•</span>
             <span>Tourist Guiding</span>
          </div>

          <Reveal delay={0.4}>
            <ButtonLink href={`https://wa.me/${SITE.whatsapp}`} variant="outline" className="mt-12">
              Request a Custom Quote
            </ButtonLink>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── Quick FAQ Section ── */}
      <SectionWrapper bg="secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-white mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-8">
            <FaqItem 
              question="Are there any group discounts?" 
              answer="Yes! For families with multiple children or corporate teams, I offer custom group rates. Reach out via WhatsApp to discuss your specific needs."
            />
            <FaqItem 
              question="How do I pay from outside Kenya?" 
              answer="I accept international payments via secure platforms including PayPal, Wise, and direct bank transfers. We'll set this up during your first session."
            />
            <FaqItem 
              question="What is the cancellation policy?" 
              answer="I value your time and mine. Cancellations made 24 hours in advance can be rescheduled at no extra cost."
            />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function PricingCard({ title, age, price, description, features, highlight = false }: any) {
  return (
    <Reveal>
      <div className={`p-10 border transition-all duration-500 ${highlight ? 'border-[#c8a96e] bg-[#c8a96e]/5' : 'border-white/10 bg-white/[0.02] hover:border-white/30'}`}>
        <div className="mb-8">
          <h3 className="text-white text-2xl font-serif mb-1">{title}</h3>
          <p className="text-[#c8a96e] text-xs uppercase tracking-widest font-bold">{age}</p>
        </div>
        
        <div className="mb-8">
          <div className="flex items-baseline gap-1">
            <span className="text-white/50 text-xl">$</span>
            <span className="text-white text-6xl font-serif">{price}</span>
            <span className="text-white/30 text-lg">/hour</span>
          </div>
          <p className="text-white/50 mt-4 text-sm leading-relaxed">{description}</p>
        </div>

        <ul className="space-y-4 mb-10 border-t border-white/5 pt-8">
          {features.map((f: string, i: number) => (
            <li key={i} className="flex gap-3 text-sm text-white/70">
              <Check size={18} className="text-[#c8a96e] flex-shrink-0" />
              {f}
            </li>
          ))}
        </ul>

        <ButtonLink 
          href={`https://wa.me/${SITE.whatsapp}`} 
          variant={highlight ? "default" : "outline"}
          className="w-full justify-center py-4"
        >
          Enrol Now
        </ButtonLink>
      </div>
    </Reveal>
  );
}

function ValueProp({ icon, text }: any) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="text-[#c8a96e] opacity-60">{icon}</div>
      <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">{text}</span>
    </div>
  );
}

function FaqItem({ question, answer }: any) {
  return (
    <div className="border-b border-white/5 pb-6">
      <h4 className="text-white font-serif text-lg mb-2 flex gap-2 items-center">
        <HelpCircle size={16} className="text-[#c8a96e]/40" />
        {question}
      </h4>
      <p className="text-white/40 leading-relaxed text-sm pl-6">{answer}</p>
    </div>
  );
}
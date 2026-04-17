"use client";

import { Check, Globe, HelpCircle, MessageSquare, ShieldCheck, Zap } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/constants";

const CHILDREN_FEATURES = [
  "Interactive Class Dojo integration",
  "Kid-friendly visual materials",
  "Homework support and fun quizzes",
  "Cultural storytelling sessions",
  "Progress reports for parents",
];

const ADULT_FEATURES = [
  "Bespoke curriculum — business or social",
  "Deep cultural and etiquette training",
  "Google Classroom access",
  "Flexible scheduling via WhatsApp",
  "Direct 1-on-1 access to Divinar",
];

export default function PricingClient() {
  return (
    <main className="pt-20">
      <PageHero
        eyebrow="Investment & value"
        heading={
          <>
            Start your{" "}
            <span className="italic text-[#c8a96e]">Swahili journey.</span>
          </>
        }
        subheading="No hidden fees. No long-term contracts. Just world-class instruction 
          from a TSC-registered educator, live from the heart of Nairobi."
        bg={{ type: "video", src: "/assets/video/student-reel.mp4" }}
        align="center"
      />

      {/* Cards */}
      <SectionWrapper bg="secondary">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Children & teens"
            age="5–18 years"
            price="30"
            description="Perfect for heritage learners and students in international schools."
            features={CHILDREN_FEATURES}
          />
          <PricingCard
            highlight
            title="Adult learners"
            age="18+ & professionals"
            price="40"
            description="Tailored for diplomats, foreign spouses, and professionals who need results."
            features={ADULT_FEATURES}
          />
        </div>

        {/* Value props */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12">
          {[
            { icon: <ShieldCheck size={20} />, text: "TSC Registered" },
            { icon: <Zap size={20} />, text: "Live sessions" },
            { icon: <Globe size={20} />, text: "Native context" },
            { icon: <MessageSquare size={20} />, text: "Daily support" },
          ].map((v) => (
            <div key={v.text} className="flex flex-col items-center gap-3 text-center">
              <div className="text-[#c8a96e] opacity-60">{v.icon}</div>
              <span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold">
                {v.text}
              </span>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Specialised services */}
      <SectionWrapper bg="primary">
        <div className="max-w-4xl mx-auto text-center border border-white/10 p-12 bg-white/[0.02]">
          <Reveal>
            <h3 className="text-2xl font-serif text-white mb-6">Need something more specific?</h3>
            <p className="text-white/50 mb-10 max-w-2xl mx-auto leading-relaxed">
              Divinar is also a professional translator, transcriber, and cultural guide 
              — available for specialised projects across the Swahili-speaking world.
            </p>
          </Reveal>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[#c8a96e] text-sm uppercase tracking-widest font-medium mb-12">
            {["Translation", "Transcription", "Interpretation", "Tourist guiding"].map((s, i, arr) => (
              <div key={s} className="flex gap-8 items-center">
                <span>{s}</span>
                {i < arr.length - 1 && (
                  <span className="text-white/10">•</span>
                )}
              </div>
            ))}
          </div>
          <Reveal delay={0.4}>
            <ButtonLink href={`https://wa.me/${SITE.whatsapp}`} variant="outline">
              Request a custom quote
            </ButtonLink>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* FAQ */}
      <SectionWrapper bg="secondary">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif text-white mb-12 text-center">Pricing FAQ</h2>
          <div className="space-y-8">
            {[
              {
                q: "Are there group discounts?",
                a: "Yes — for families with multiple children or corporate teams, custom group rates are available. Reach out via WhatsApp to discuss.",
              },
              {
                q: "How do I pay from outside Kenya?",
                a: "PayPal, Wise, and direct bank transfers all work. Payment details come through once your schedule is confirmed.",
              },
              {
                q: "What's the cancellation policy?",
                a: "24 hours' notice is all that's needed. Cancel in time and we'll reschedule at no extra cost.",
              },
            ].map((item) => (
              <div key={item.q} className="border-b border-white/5 pb-6">
                <h4 className="text-white font-serif text-lg mb-2 flex gap-2 items-center">
                  <HelpCircle size={16} className="text-[#c8a96e]/40 shrink-0" />
                  {item.q}
                </h4>
                <p className="text-white/40 leading-relaxed text-sm pl-6">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function PricingCard({
  title,
  age,
  price,
  description,
  features,
  highlight = false,
}: {
  title: string;
  age: string;
  price: string;
  description: string;
  features: string[];
  highlight?: boolean;
}) {
  return (
    <Reveal>
      <div
        className={`p-10 border transition-all duration-500 h-full ${
          highlight
            ? "border-[#c8a96e] bg-[#c8a96e]/5"
            : "border-white/10 bg-white/[0.02] hover:border-white/30"
        }`}
      >
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
          {features.map((f) => (
            <li key={f} className="flex gap-3 text-sm text-white/70">
              <Check size={18} className="text-[#c8a96e] shrink-0" />
              {f}
            </li>
          ))}
        </ul>
        <ButtonLink
          href={`https://wa.me/${SITE.whatsapp}`}
          variant={highlight ? "primary" : "outline"}
          className="w-full justify-center py-4"
        >
          Enrol now
        </ButtonLink>
      </div>
    </Reveal>
  );
}
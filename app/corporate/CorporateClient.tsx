"use client";

import { Award, Briefcase, Clock, FileCheck, Globe, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { StatBar } from "@/components/layout/StatBar";
import { CtaBlock } from "@/components/layout/CTABlock";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/constants";

const STATS = [
  { label: "Experience", value: "10+ Years" },
  { label: "Accreditation", value: "TSC Registered" },
  { label: "Education", value: "MA Candidate" },
  { label: "Delivery", value: "Global / Hybrid" },
];

const MODULES = [
  {
    icon: <Briefcase size={28} />,
    title: "The diplomatic track",
    description:
      "Formal address, political vocabulary, and regional etiquette — essential for embassy and NGO staff who can't afford to misread a room.",
  },
  {
    icon: <Globe size={28} />,
    title: "Cultural protocol",
    description:
      "Beyond the words: understanding East African hierarchy, negotiation styles, and the social norms that build trust faster than any phrasebook.",
  },
  {
    icon: <Clock size={28} />,
    title: "Intensive onboarding",
    description:
      "Rapid-fluency modules designed for professionals on 6–12 month assignments in Kenya or Tanzania who need results in weeks, not years.",
  },
];

export default function CorporateClient() {
  return (
    <main className="pt-20">
      <PageHero
        eyebrow="Diplomatic & professional excellence"
        heading={
          <>
            High-stakes Swahili{" "}
            <span className="italic text-[#c8a96e]">for global leaders.</span>
          </>
        }
        bg={{ type: "image", src: "/assets/client-hero.jpeg", alt: "Corporate Swahili training at Lugha Studio" }}
      >
        <p className="text-white/50 text-xl leading-relaxed max-w-2xl mt-4 border-l-2 border-[#c8a96e]/30 pl-8">
          Specialised linguistic training and cultural protocol for diplomats, UN
          personnel, and expatriate executives navigating the East African
          professional landscape.
        </p>
      </PageHero>

      <StatBar stats={STATS} />

      {/* Modules */}
      <SectionWrapper bg="secondary">
        <div className="grid lg:grid-cols-3 gap-8">
          {MODULES.map((m) => (
            <Reveal key={m.title}>
              <div className="p-10 bg-white/[0.02] border border-white/5 hover:border-[#c8a96e]/30 transition-all h-full group">
                <div className="mb-6 text-[#c8a96e] group-hover:scale-110 transition-transform duration-500">
                  {m.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-4">{m.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{m.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Methodology */}
      <SectionWrapper bg="primary">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif text-white italic">
                Efficiency meets academic rigour.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/50 leading-relaxed">
                For the professional learner, time is the most valuable currency.
                Corporate curricula are stripped of filler — every session focuses
                on the specific vocabulary and scenarios relevant to your mission.
              </p>
            </Reveal>
            <div className="space-y-4">
              {[
                "Bespoke curriculum aligned to your sector — health, law, tech, NGO.",
                "Flexible scheduling across global time zones.",
                "Dedicated reporting for corporate sponsorship and reimbursement.",
              ].map((text) => (
                <div key={text} className="flex gap-3 items-start text-white/70 text-sm">
                  <span className="text-[#c8a96e] mt-0.5">→</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative p-1 bg-gradient-to-br from-[#c8a96e]/20 to-transparent">
            <div className="bg-[#0a0a0a] p-10 space-y-8 border border-white/5">
              <Award className="text-[#c8a96e]" size={40} />
              <h3 className="text-xl font-serif text-white">Why Lugha Studio?</h3>
              <p className="text-white/40 text-sm leading-relaxed italic">
                "Divinar brings experience from elite British International Schools
                and global language platforms, ensuring a standard of instruction
                that meets institutional requirements."
              </p>
              <div className="flex gap-4">
                <ShieldCheck className="text-[#c8a96e]/40" size={20} />
                <FileCheck className="text-[#c8a96e]/40" size={20} />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="secondary">
        <CtaBlock
          heading="Enquire about institutional training"
          body="For group enrolments, NGO contracts, or specialised translation projects, reach out and we'll put together a formal proposal."
          actions={[
            { href: `mailto:${SITE.email}`, label: "Request a proposal" },
            { href: `https://wa.me/${SITE.whatsapp}`, label: "Direct consultation", variant: "outline" },
          ]}
        />
      </SectionWrapper>
    </main>
  );
}
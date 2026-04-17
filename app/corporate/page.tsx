"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/constants";
import {
    ArrowRight,
    Award,
    Briefcase,
    Clock,
    FileCheck,
    Globe,
    ShieldCheck
} from "lucide-react";

export default function CorporatePage() {
  return (
    <main className="pt-20">
      {/* ── Executive Header ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.4em] uppercase mb-6 block font-bold">
              Diplomatic & Professional Excellence
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
              High-Stakes Swahili <br />
              <span className="italic text-[#c8a96e]">for Global Leaders.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/50 text-xl leading-relaxed max-w-2xl border-l-2 border-[#c8a96e]/30 pl-8">
              Specialized linguistic training and cultural protocol for 
              diplomats, UN personnel, and expatriate executives navigating 
              the East African professional landscape.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── The Professional Standard (Stats/Trust) ── */}
      <div className="bg-[#0e0e0e] py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatBlock label="Experience" value="10+ Years" />
          <StatBlock label="Accreditation" value="TSC Registered" />
          <StatBlock label="Education" value="MA Candidate" />
          <StatBlock label="Reach" value="Global/Hybrid" />
        </div>
      </div>

      {/* ── Specialized Corporate Modules ── */}
      <SectionWrapper bg="secondary">
        <div className="grid lg:grid-cols-3 gap-8">
          <ModuleCard 
            icon={<Briefcase size={28} />}
            title="The Diplomatic Track"
            description="Focus on formal address, political terminology, and regional etiquette for embassy and NGO staff."
          />
          <ModuleCard 
            icon={<Globe size={28} />}
            title="Cultural Protocol"
            description="Beyond language: understanding East African hierarchy, negotiation styles, and social norms."
          />
          <ModuleCard 
            icon={<Clock size={28} />}
            title="Intensive Onboarding"
            description="Rapid-fluency modules for professionals on 6-12 month assignments in Kenya or Tanzania."
          />
        </div>
      </SectionWrapper>

      {/* ── Methodology for Professionals ── */}
      <SectionWrapper bg="primary">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-serif text-white italic">
                Efficiency Meets <br /> Academic Rigor.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/50 leading-relaxed">
                We understand that for the professional learner, time is the most 
                valuable currency. Our corporate curriculum is stripped of 
                filler, focusing on the specific vocabulary and scenarios 
                relevant to your mission.
              </p>
            </Reveal>
            
            <div className="space-y-4">
              <FeatureItem text="Bespoke curriculum aligned with your sector (Health, Law, Tech, etc.)" />
              <FeatureItem text="Flexible scheduling to accommodate global time zones." />
              <FeatureItem text="Dedicated reporting for corporate sponsorship/reimbursement." />
            </div>
          </div>

          <div className="relative p-1 bg-gradient-to-br from-[#c8a96e]/20 to-transparent">
            <div className="bg-[#0a0a0a] p-10 space-y-8 border border-white/5">
              <Award className="text-[#c8a96e]" size={40} />
              <h3 className="text-xl font-serif text-white">Why Lugha Studio?</h3>
              <p className="text-white/40 text-sm leading-relaxed italic">
                "Our lead instructor, Divinar Nyang’arisa, brings experience 
                from elite British International Schools and global language 
                hubs, ensuring a standard of instruction that meets 
                institutional requirements."
              </p>
              <div className="flex gap-4">
                <ShieldCheck className="text-[#c8a96e]/40" size={20} />
                <FileCheck className="text-[#c8a96e]/40" size={20} />
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Corporate CTA ── */}
      <SectionWrapper bg="secondary">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <h2 className="text-3xl font-serif text-white mb-8">
              Inquire for Institutional Training
            </h2>
            <p className="text-white/40 mb-12 max-w-xl mx-auto">
              For group enrollments, NGO contracts, or specialized translation 
              projects, please request a formal proposal.
            </p>
          </Reveal>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ButtonLink 
              href={`mailto:${SITE.email}`}
              className="px-12 py-5 bg-[#c8a96e] text-[#0a0a0a] font-bold"
            >
              Request a Proposal
            </ButtonLink>
            <ButtonLink 
              href={`https://wa.me/${SITE.whatsapp}`}
              variant="outline"
              className="px-12 py-5"
            >
              Direct Consultation
            </ButtonLink>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function StatBlock({ label, value }: { label: string, value: string }) {
  return (
    <div className="text-center">
      <p className="text-white font-serif text-2xl mb-1">{value}</p>
      <p className="text-[#c8a96e] text-[10px] uppercase tracking-[0.2em] font-bold">{label}</p>
    </div>
  );
}

function ModuleCard({ icon, title, description }: any) {
  return (
    <Reveal>
      <div className="p-10 bg-white/[0.02] border border-white/5 hover:border-[#c8a96e]/30 transition-all h-full group">
        <div className="mb-6 text-[#c8a96e] group-hover:scale-110 transition-transform duration-500">
          {icon}
        </div>
        <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
        <p className="text-white/40 text-sm leading-relaxed">{description}</p>
      </div>
    </Reveal>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex gap-3 items-start text-white/70 text-sm">
      <ArrowRight className="text-[#c8a96e] mt-1 shrink-0" size={16} />
      <span>{text}</span>
    </div>
  );
}
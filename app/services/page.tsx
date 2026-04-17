"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/constants";
import { 
  BookOpen, 
  Users2, 
  Languages, 
  Compass, 
  FileText, 
  Mic2,
  ArrowRight
} from "lucide-react";

export default function ServicesPage() {
  return (
    <main className="pt-20">
      {/* ── Header ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Our Offerings
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Expertise for Every <br />
              <span className="italic text-[#c8a96e]">Swahili Need.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/60 text-xl leading-relaxed">
              From foundational literacy for children to high-level diplomatic 
              interpretation, we provide academic-grade linguistic services 
              tailored to the global stage.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── Core Teaching Services ── */}
      <SectionWrapper bg="secondary">
        <div className="grid md:grid-cols-2 gap-12">
          <ServiceDetailCard 
            icon={<BookOpen size={32} />}
            title="Children's Academic Track"
            price="$30 / hr"
            description="Designed for ages 5-18. We focus on building a strong foundation in grammar, vocabulary, and cultural heritage using interactive tools like Class Dojo and Google Classroom."
            points={[
              "Heritage language preservation",
              "International school curriculum support",
              "Interactive storytelling & games",
              "Primary to High School levels"
            ]}
          />
          <ServiceDetailCard 
            icon={<Users2 size={32} />}
            title="Adult & Professional Track"
            price="$40 / hr"
            description="Intensive or social tracks for diplomats, expats, and spouses. We focus on conversational confidence, business etiquette, and real-world communication."
            points={[
              "Diplomatic & Business Swahili",
              "Social integration & travel prep",
              "Flexible 1-on-1 live sessions",
              "Advanced grammar & literature"
            ]}
          />
        </div>
      </SectionWrapper>

      {/* ── Specialized Linguistic Services (From Flyer) ── */}
      <SectionWrapper bg="primary">
        <div className="mb-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">Linguistic Professionalism</h2>
            <p className="text-white/40 uppercase tracking-widest text-xs">Beyond the Classroom</p>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <MiniServiceCard 
            icon={<Languages size={24} />}
            title="Translation"
            text="Precise Swahili-English document translation for academic, legal, or creative texts."
          />
          <MiniServiceCard 
            icon={<Mic2 size={24} />}
            title="Transcription"
            text="High-accuracy audio and video transcription for media, research, or interviews."
          />
          <MiniServiceCard 
            icon={<FileText size={24} />}
            title="Interpretation"
            text="Live interpretation services for meetings, conferences, or virtual events."
          />
          <MiniServiceCard 
            icon={<Compass size={24} />}
            title="Tour Guiding"
            text="Expert cultural guiding for tourists visiting Nairobi and the wider East African region."
          />
        </div>
      </SectionWrapper>

      {/* ── CTA Section ── */}
      <SectionWrapper bg="secondary">
        <div className="max-w-4xl mx-auto bg-[#c8a96e] p-12 md:p-20 text-[#0a0a0a] text-center relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
             <div className="absolute -top-24 -left-24 w-64 h-64 border-[20px] border-black rounded-full" />
          </div>

          <Reveal>
            <h2 className="text-4xl font-serif mb-6 italic">Ready to find your track?</h2>
            <p className="text-black/70 mb-10 max-w-xl mx-auto font-medium">
              Every journey starts with a single conversation. Reach out today to 
              discuss which service best fits your goals or the goals of your family.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ButtonLink 
                href={`https://wa.me/${SITE.whatsapp}`}
                className="bg-[#0a0a0a] text-white hover:bg-black border-none px-10 py-4"
              >
                Inquire via WhatsApp
              </ButtonLink>
              <ButtonLink 
                href="/contact" 
                variant="outline" 
                className="border-black/20 text-black hover:bg-black/5"
              >
                View Contact Details
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </SectionWrapper>
    </main>
  );
}

function ServiceDetailCard({ icon, title, price, description, points }: any) {
  return (
    <Reveal>
      <div className="p-10 border border-white/10 bg-white/[0.02] flex flex-col h-full hover:border-[#c8a96e]/30 transition-all duration-500">
        <div className="text-[#c8a96e] mb-6">{icon}</div>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-serif text-white">{title}</h3>
          <span className="text-[#c8a96e] font-serif text-xl">{price}</span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed mb-8">
          {description}
        </p>
        <ul className="space-y-4 mb-10 flex-grow">
          {points.map((p: string, i: number) => (
            <li key={i} className="flex items-center gap-3 text-white/70 text-sm">
              <div className="w-1.5 h-1.5 bg-[#c8a96e] rounded-full" />
              {p}
            </li>
          ))}
        </ul>
        <ButtonLink 
          href={`https://wa.me/${SITE.whatsapp}`} 
          variant="outline" 
          className="w-full justify-center group"
        >
          Enrol in this Track
          <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
        </ButtonLink>
      </div>
    </Reveal>
  );
}

function MiniServiceCard({ icon, title, text }: any) {
  return (
    <Reveal>
      <div className="p-8 border border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors h-full">
        <div className="text-[#c8a96e] mb-4 opacity-80">{icon}</div>
        <h4 className="text-white font-medium mb-3">{title}</h4>
        <p className="text-white/40 text-xs leading-relaxed">{text}</p>
      </div>
    </Reveal>
  );
}
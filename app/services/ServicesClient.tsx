"use client";

import { ArrowRight, BookOpen, Compass, FileText, Languages, Mic2, Users2 } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { CtaBlock } from "@/components/layout/CTABlock";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/constants";

const SPECIALIST_SERVICES = [
  {
    icon: <Languages size={24} />,
    title: "Translation",
    text: "Precise Swahili–English document translation for academic, legal, or creative texts.",
  },
  {
    icon: <Mic2 size={24} />,
    title: "Transcription",
    text: "High-accuracy audio and video transcription for media, research, or interviews.",
  },
  {
    icon: <FileText size={24} />,
    title: "Interpretation",
    text: "Live interpretation for meetings, conferences, or virtual events — remote or in-person.",
  },
  {
    icon: <Compass size={24} />,
    title: "Tour guiding",
    text: "Expert cultural guiding for visitors to Nairobi and the wider East African region.",
  },
];

export default function ServicesClient() {
  return (
    <main className="pt-20">
      <PageHero
        eyebrow="Our offerings"
        heading={
          <>
            Expertise for every{" "}
            <span className="italic text-gold">Swahili need.</span>
          </>
        }
        subheading="From foundational literacy for children to high-level diplomatic
          interpretation, we provide academic-grade linguistic services tailored
          to the global stage."

          cta={
            <>
              <ButtonLink href="/methodology">How We Work</ButtonLink>
              <ButtonLink href="/pricing" variant="outline">View pricing details</ButtonLink>
            </>
          }
        bg={{ type: "video", src: "/assets/video/student-reel.mp4" }}
      />

      {/* Core teaching tracks */}
      <SectionWrapper bg="secondary">
        <div className="grid md:grid-cols-2 gap-12">
          {[
            {
              icon: <BookOpen size={32} />,
              title: "Children's academic track",
              price: "$30 / hr",
              description:
                "For ages 5–18. We build a strong foundation in grammar, vocabulary, and cultural heritage using interactive tools — Class Dojo keeps young learners engaged and their parents informed.",
              points: [
                "Heritage language preservation",
                "International school curriculum support",
                "Interactive storytelling and games",
                "Primary through to high school levels",
              ],
            },
            {
              icon: <Users2 size={32} />,
              title: "Adult & professional track",
              price: "$40 / hr",
              description:
                "Intensive or social tracks for diplomats, expats, and spouses. The focus is on conversational confidence, business etiquette, and real-world communication that actually opens doors.",
              points: [
                "Diplomatic and business Swahili",
                "Social integration and travel prep",
                "Flexible 1-on-1 live sessions",
                "Advanced grammar and literature",
              ],
            },
          ].map((service) => (
            <Reveal key={service.title}>
              <div className="p-10 border border-white/10 bg-white/[0.02] flex flex-col h-full hover:border-[#c8a96e]/30 transition-all duration-500">
                <div className="text-[#c8a96e] mb-6">{service.icon}</div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif text-white">{service.title}</h3>
                  <span className="text-[#c8a96e] font-serif text-xl">{service.price}</span>
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-8">{service.description}</p>
                <ul className="space-y-4 mb-10 flex-grow">
                  {service.points.map((p) => (
                    <li key={p} className="flex items-center gap-3 text-white/70 text-sm">
                      <div className="w-1.5 h-1.5 bg-[#c8a96e] rounded-full shrink-0" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href={`https://wa.me/${SITE.whatsapp}`}
                  variant="outline"
                  className="w-full justify-center group"
                >
                  Enrol in this track
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </ButtonLink>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* Specialist services */}
      <SectionWrapper bg="primary">
        <div className="mb-16 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Linguistic professionalism
            </h2>
            <p className="text-white/40 uppercase tracking-widest text-xs">Beyond the classroom</p>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALIST_SERVICES.map((s) => (
            <Reveal key={s.title}>
              <div className="p-8 border border-white/5 bg-[#0a0a0a] hover:bg-white/[0.02] transition-colors h-full">
                <div className="text-[#c8a96e] mb-4 opacity-80">{s.icon}</div>
                <h4 className="text-white font-medium mb-3">{s.title}</h4>
                <p className="text-white/40 text-xs leading-relaxed">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper bg="secondary">
        <CtaBlock
          heading="Ready to find your track?"
          body="Every journey starts with a single conversation. Reach out today to talk through which service fits your goals — or your family's."
          actions={[
            { href: `https://wa.me/${SITE.whatsapp}`, label: "Inquire via WhatsApp" },
            { href: "/contact", label: "View contact details", variant: "outline" },
          ]}
        />
      </SectionWrapper>
    </main>
  );
}
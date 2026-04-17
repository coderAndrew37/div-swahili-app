"use client";

import { Clock, Globe, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { ContactForm } from "@/components/ui/ContactForm";
import { SITE } from "@/constants";

export default function ContactClient() {
  return (
    <main className="pt-20">
      <PageHero
        eyebrow="Get in touch"
        heading={
          <>
            Let's start the{" "}
            <span className="italic text-[#c8a96e]">conversation.</span>
          </>
        }
        subheading="Whether you're ready to enrol or just have a few questions, reach out
          in whatever way feels most natural. No sales pitch, just an honest chat
          about your Swahili goals."
        bg={{ type: "image", src: "/assets/client-hero.jpeg", alt: "Contact Divinar Nyang'arisa" }}
      />

      <SectionWrapper bg="secondary">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Direct channels */}
          <div className="space-y-12">
            <div>
              <Reveal>
                <h2 className="text-2xl font-serif text-white mb-8">Direct channels</h2>
              </Reveal>
              <div className="space-y-6">
                <ContactMethod
                  href={`https://wa.me/${SITE.whatsapp}`}
                  icon={<MessageCircle className="text-[#c8a96e]" size={24} />}
                  title="WhatsApp"
                  detail="+254 725 646 544"
                  description="Best for quick questions and enrolment."
                />
                <ContactMethod
                  href={`mailto:${SITE.email}`}
                  icon={<Mail className="text-[#c8a96e]" size={24} />}
                  title="Email"
                  detail="divinarnyangarisa@gmail.com"
                  description="Corporate inquiries and translation projects."
                />
              </div>
            </div>

            <div className="p-8 border border-white/5 bg-white/[0.02] space-y-4">
              <div className="flex items-center gap-3 text-[#c8a96e]">
                <Clock size={20} />
                <span className="text-xs uppercase tracking-widest font-bold">
                  Nairobi time (EAT)
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                I typically reply within 2 hours on weekdays (8 AM – 8 PM). Been
                teaching students across US, European, and Middle Eastern time
                zones for years — we'll find a slot that works.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="#"
                className="flex items-center gap-2 text-white/40 hover:text-[#c8a96e] transition-colors group"
              >
                <div className="p-2 border border-white/10 rounded-lg group-hover:border-[#c8a96e]/40">
                  <Globe size={20} />
                </div>
                <span className="text-[10px] uppercase tracking-widest hidden sm:block">Blog</span>
              </a>
            </div>
          </div>

          {/* Form — client island */}
          <ContactForm />
        </div>
      </SectionWrapper>
    </main>
  );
}

function ContactMethod({
  href,
  icon,
  title,
  detail,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  title: string;
  detail: string;
  description: string;
}) {
  return (
    <Reveal>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex gap-6 p-4 -ml-4 hover:bg-white/[0.02] transition-colors rounded-xl"
      >
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/40 transition-colors shrink-0">
          {icon}
        </div>
        <div>
          <h4 className="text-white font-medium mb-0.5">{title}</h4>
          <p className="text-[#c8a96e] text-sm mb-1">{detail}</p>
          <p className="text-white/30 text-xs">{description}</p>
        </div>
      </a>
    </Reveal>
  );
}
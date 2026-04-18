"use client";

import { HelpCircle, MessageCircle, ChevronDown } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { SITE } from "@/constants";

const FAQ_DATA = [
  {
    category: "Getting started",
    questions: [
      {
        q: "Do you offer a trial lesson?",
        a: "Yes — a complimentary 20-minute intro session. It's a chance for us to talk about your goals, gauge where you're starting from, and make sure my teaching style actually clicks with you. No obligation at all.",
      },
      {
        q: "I'm a complete beginner. Is that okay?",
        a: "Karibu! (Welcome!) Most students start from zero. The Heart-to-Heart method gets you speaking real phrases from the very first session — it's about building confidence, not just memorising grammar rules.",
      },
      {
        q: "What age groups do you teach?",
        a: "Two main tracks: children aged 5–18 using interactive tools like Class Dojo, and adults — professionals, diplomats, or anyone navigating life in East Africa — focusing on conversational and business Swahili.",
      },
    ],
  },
  {
    category: "Logistics & technology",
    questions: [
      {
        q: "Which platforms do you use?",
        a: "Live sessions run on Zoom or Google Meet. Course materials live in Google Classroom, and for younger students, Class Dojo tracks progress and keeps engagement high between lessons.",
      },
      {
        q: "What about different time zones?",
        a: "Based in Nairobi (EAT), but used to working with students across the US, Europe, and the Middle East. Finding a recurring slot that actually suits your schedule is part of the onboarding conversation.",
      },
      {
        q: "What's the cancellation policy?",
        a: "24 hours' notice is all that's needed. Cancel in time and we'll reschedule at no extra cost — it just helps keep the teaching calendar running smoothly for everyone.",
      },
    ],
  },
  {
    category: "Payments & services",
    questions: [
      {
        q: "How do I pay from outside Kenya?",
        a: "PayPal, Wise, and direct bank transfers all work fine. Payment details come through once your lesson schedule is confirmed.",
      },
      {
        q: "Do you do translation or transcription?",
        a: "Yes — professional Swahili–English translation and transcription for academic, legal, creative, or media work. Reach out directly with your document or audio file for a custom quote.",
      },
    ],
  },
];

export default function FaqClient() {
  return (
    <main className="pt-20">
      <PageHero
        eyebrow="Common questions"
        heading={
          <>
            Everything you{" "}
            <span className="italic text-gold">need to know.</span>
          </>
        }
        subheading="Transparent answers about how the lessons work, pricing, and how we
          bring the spirit of Nairobi to your screen — wherever you are."
        bg={{ type: "image", src: "/assets/client-hero.jpeg", alt: "Frequently asked questions about Swahili lessons" }}
        cta={
          <>
            <ButtonLink href="/pricing">View Pricing</ButtonLink>
            <ButtonLink href="/contact" variant="outline">Book Trial Session</ButtonLink>
          </>
        }
      />

      <SectionWrapper bg="secondary">
        <div className="max-w-4xl mx-auto">
          {FAQ_DATA.map((group) => (
            <div key={group.category} className="mb-16 last:mb-0">
              <Reveal>
                <h2 className="text-gold text-xs uppercase tracking-[0.4em] font-bold mb-8 opacity-50">
                  {group.category}
                </h2>
              </Reveal>
              <div className="space-y-4">
                {group.questions.map((item) => (
                  <FaqAccordion key={item.q} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="primary">
        <div className="max-w-4xl mx-auto text-center py-12 border border-white/5 bg-white/2">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/10 text-gold mb-6">
            <HelpCircle size={32} />
          </div>
          <h3 className="text-2xl font-serif text-white mb-4">Still have a question?</h3>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            If you didn't find what you were looking for, just ask directly. Happy to chat.
          </p>
          <ButtonLink
            href={`https://wa.me/${SITE.whatsapp}`}
            className="px-10 py-4 flex items-center gap-2 mx-auto w-fit"
          >
            <MessageCircle size={18} />
            Chat on WhatsApp
          </ButtonLink>
        </div>
      </SectionWrapper>
    </main>
  );
}
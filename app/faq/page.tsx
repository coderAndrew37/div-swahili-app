"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Plus, Minus, HelpCircle, MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/constants";

const FAQ_DATA = [
  {
    category: "Getting Started",
    questions: [
      {
        q: "Do you offer a free trial lesson?",
        a: "Yes! I offer a complimentary 20-minute introductory session. This allows us to discuss your goals, assess your current level, and ensure my teaching style is the right fit for you or your child."
      },
      {
        q: "I am a complete beginner. Is that okay?",
        a: "Karibu! (Welcome!) Most of my students start from zero. My 'Heart-to-Heart' methodology is designed to get you speaking basic phrases from day one, focusing on confidence rather than just memorizing rules."
      },
      {
        q: "What age groups do you teach?",
        a: "I specialize in two main areas: Children (ages 5–18) using interactive tools like Class Dojo, and Adults (Professionals/Diplomats) focusing on social and business communication."
      }
    ]
  },
  {
    category: "Logistics & Tech",
    questions: [
      {
        q: "Which platforms do you use for virtual lessons?",
        a: "We primarily use Zoom or Google Meet for live sessions. For course materials and homework, I use Google Classroom, and for younger students, Class Dojo to track progress and engagement."
      },
      {
        q: "How do we handle different time zones?",
        a: "I am based in Nairobi (EAT), but I have years of experience coordinating with students in the US, Europe, and the Middle East. We will find a recurring slot that works for your specific schedule."
      },
      {
        q: "What is your cancellation policy?",
        a: "I require 24 hours' notice for cancellations. Sessions canceled with at least 24 hours' notice can be rescheduled at no extra cost. This helps me manage my teaching calendar effectively."
      }
    ]
  },
  {
    category: "Payments & Services",
    questions: [
      {
        q: "How do I make payments from outside Kenya?",
        a: "I accept international payments via PayPal, Wise, and direct bank transfers. Payment details are provided once we confirm your lesson schedule."
      },
      {
        q: "Do you provide translation or transcription services?",
        a: "Yes. Beyond tutoring, I am a professional Swahili-English translator and transcriber. Please contact me directly with your document or audio file for a custom quote."
      }
    ]
  }
];

export default function FaqPage() {
  return (
    <main className="pt-20">
      {/* ── Header ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Common Questions
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
              Everything You <br />
              <span className="italic text-[#c8a96e]">Need to Know.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/60 text-xl leading-relaxed">
              Transparent answers about our methodology, pricing, and 
              how we bring the spirit of Nairobi to your screen.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── Accordion Section ── */}
      <SectionWrapper bg="secondary">
        <div className="max-w-4xl mx-auto">
          {FAQ_DATA.map((group, groupIdx) => (
            <div key={groupIdx} className="mb-16 last:mb-0">
              <Reveal>
                <h2 className="text-[#c8a96e] text-xs uppercase tracking-[0.4em] font-bold mb-8 opacity-50">
                  {group.category}
                </h2>
              </Reveal>
              <div className="space-y-4">
                {group.questions.map((item, qIdx) => (
                  <FaqAccordion key={qIdx} question={item.q} answer={item.a} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Still have questions? ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-4xl mx-auto text-center py-12 border border-white/5 bg-white/[0.02]">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#c8a96e]/10 text-[#c8a96e] mb-6">
            <HelpCircle size={32} />
          </div>
          <h3 className="text-2xl font-serif text-white mb-4">Still have questions?</h3>
          <p className="text-white/40 mb-8 max-w-md mx-auto">
            If you couldn't find what you're looking for, feel free to reach out 
            directly. I'm always happy to chat.
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

function FaqAccordion({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Reveal>
      <div 
        className={`border border-white/10 transition-all duration-300 ${
          isOpen ? "bg-white/[0.05] border-[#c8a96e]/30" : "bg-transparent"
        }`}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-6 md:p-8 text-left outline-none"
        >
          <span className="text-white font-serif text-lg md:text-xl pr-8 italic">
            {question}
          </span>
          <div className={`text-[#c8a96e] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
          </div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
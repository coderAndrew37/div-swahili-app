"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { 
  Laptop, 
  HeartHandshake, 
  Sparkles, 
  Globe2, 
  Clock 
} from "lucide-react";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { SITE } from "@/constants";

export default function MethodologyClient() {
  return (
    <main className="pt-20">
      {/* ── Conversational Header ── */}
     <SectionWrapper bg="primary" className="relative overflow-hidden min-h-[60vh] flex items-center">
  {/* ── Video Background Overlay ── */}
  <div className="absolute inset-0 z-0">
    <video
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-full object-cover opacity-30" // Low opacity to keep text readable
    >
      <source src="/assets/video/student-reel.mp4" type="video/mp4" />
    </video>
    {/* Gradient overlay to ensure text contrast against video */}
    <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/80 to-transparent" />
  </div>

  <div className="max-w-3xl relative z-10">
    <Reveal>
      <span className="text-gold text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
        How we learn
      </span>
    </Reveal>
    <Reveal delay={0.2}>
      <h1 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">
        Beyond the Grammar: <br />
        <span className="italic text-gold">A Heart-to-Heart Approach.</span>
      </h1>
    </Reveal>
    <Reveal delay={0.3}>
      <p className="text-white/70 text-lg md:text-xl leading-relaxed">
        If you&apos;ve tried apps and felt like a robot, you&apos;re in the right place. 
        I don&apos;t just teach you how to speak; I teach you how to <span className="text-white">connect</span>. 
        Whether you are a diplomat in Nairobi or a parent in the diaspora, 
        here is exactly how we&apos;ll make Swahili stick.
      </p>
    </Reveal>
  </div>
</SectionWrapper>

      {/* ── The "Three Pillars" ── */}
      <SectionWrapper bg="secondary">
        <div className="grid md:grid-cols-3 gap-12">
          <MethodologyCard 
            icon={<HeartHandshake className="text-gold" size={32} />}
            title="Mind & Heart"
            description="Education shapes more than the mind. My lessons are rooted in cultural appreciation, ensuring you understand the 'why' behind the words."
          />
          <MethodologyCard 
            icon={<Laptop className="text-gold" size={32} />}
            title="Digital First"
            description="I use Zoom, Google Classroom, and Class Dojo to create a classroom that feels local, even if we are 8,000 miles apart."
          />
          <MethodologyCard 
            icon={<Globe2 className="text-gold" size={32} />}
            title="Native Context"
            description="As a Nairobi native, I bring real-world slang, etiquette, and traditions into every session. No textbook-only Swahili here."
          />
        </div>
      </SectionWrapper>

      {/* ── The One-to-One Conversation ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <Reveal>
              <h2 className="text-3xl font-serif text-white leading-snug">
                "Wait, is this going to be like a boring school class?"
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/50 leading-relaxed">
                Absolutely not. I&apos;ve spent 10 years in British International Schools 
                learning that the best way to teach is to keep you <span className="italic">engaged</span>. 
                We use up-to-date presentation skills, interactive slides, and real-time 
                feedback. You&apos;ll be talking more than I will—that&apos;s the secret.
              </p>
            </Reveal>
          </div>

          <div className="border-t border-white/10 pt-16">
            <Reveal>
              <h3 className="text-gold uppercase tracking-widest text-sm mb-8">The Pathway</h3>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-8">
              <Step number="01" title="The Discovery" text="We talk about your 'why'. Are you connecting with family? Prepping for a move? We align the vocabulary to your life." />
              <Step number="02" title="The Immersion" text="We dive into live sessions via Zoom. I use Class Dojo for children to keep them motivated and rewarded." />
              <Step number="03" title="The Support" text="You get 24/7 access to materials in Google Classroom. Learning doesn't stop when the call ends." />
              <Step number="04" title="The Fluency" text="We move from basic greetings to complex conversations, incorporating proverbs and cultural nuances." />
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* ── Transparent Rates ── */}
      <SectionWrapper bg="secondary">
        <div className="max-w-4xl mx-auto bg-[#0a0a0a] border border-gold/20 p-8 md:p-16 relative">
          <div className="absolute top-0 right-0 p-4">
             <Sparkles className="text-gold/20" size={64} />
          </div>
          
          <Reveal>
            <h2 className="text-3xl font-serif text-white mb-4 text-center">Investment in your Future</h2>
            <p className="text-white/40 text-center mb-12 uppercase tracking-widest text-xs">Simple, Transparent Pricing</p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 p-8 border border-white/5 text-center group hover:border-gold/40 transition-colors">
              <h4 className="text-white/60 text-sm uppercase mb-2">Children (5-18 Yrs)</h4>
              <p className="text-4xl font-serif text-gold">$30<span className="text-lg text-white/40">/hour</span></p>
              <p className="mt-4 text-white/40 text-xs italic">Tailored for heritage learners and curious young minds.</p>
            </div>
            <div className="bg-white/5 p-8 border border-white/5 text-center group hover:border-gold/40 transition-colors">
              <h4 className="text-white/60 text-sm uppercase mb-2">Adults</h4>
              <p className="text-4xl font-serif text-gold">$40<span className="text-lg text-white/40">/hour</span></p>
              <p className="mt-4 text-white/40 text-xs italic">For professionals, spouses, and travelers needing results.</p>
            </div>
          </div>

          <div className="text-center space-y-6">
            <p className="text-white/60 italic">
              "Ready to start? I&apos;m currently accepting a limited number of new students for 2026."
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
              <ButtonLink href={`https://wa.me/${SITE.whatsapp}`} className="px-12 py-4">
                Enrol Now via WhatsApp
              </ButtonLink>
              <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
                <Clock size={14} /> Flexible Scheduling
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function MethodologyCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Reveal>
      <div className="p-8 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors h-full">
        <div className="mb-6">{icon}</div>
        <h3 className="text-xl font-serif text-white mb-4">{title}</h3>
        <p className="text-white/40 leading-relaxed text-sm">{description}</p>
      </div>
    </Reveal>
  );
}

function Step({ number, title, text }: { number: string, title: string, text: string }) {
  return (
    <Reveal>
      <div className="flex gap-6 group">
        <span className="text-gold font-serif text-2xl opacity-40 group-hover:opacity-100 transition-opacity">
          {number}
        </span>
        <div>
          <h4 className="text-white font-medium mb-2">{title}</h4>
          <p className="text-white/40 text-sm leading-relaxed">{text}</p>
        </div>
      </div>
    </Reveal>
  );
}
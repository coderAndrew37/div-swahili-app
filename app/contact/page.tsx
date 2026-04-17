"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SITE } from "@/constants";
import { 
  Mail, 
  MessageCircle, 
  Phone, 
  Clock, 
  Globe, 
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-20">
      {/* ── Header ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Get in Touch
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-tight">
              Let's Start the <br />
              <span className="italic text-[#c8a96e]">Conversation.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/60 text-xl leading-relaxed">
              Whether you're ready to enrol or just have a few questions about 
              the curriculum, I'm here to help you navigate your Swahili journey.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── Main Contact Grid ── */}
      <SectionWrapper bg="secondary">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Contact Channels */}
          <div className="space-y-12">
            <div>
              <Reveal>
                <h2 className="text-2xl font-serif text-white mb-8 text-balance">
                  Direct Channels
                </h2>
              </Reveal>
              
              <div className="space-y-6">
                <ContactMethod 
                  href={`https://wa.me/${SITE.whatsapp}`}
                  icon={<MessageCircle className="text-[#c8a96e]" size={24} />}
                  title="WhatsApp"
                  detail="+254 725 646 544"
                  description="Best for quick enrollment questions."
                />
                <ContactMethod 
                  href={`mailto:${SITE.email}`}
                  icon={<Mail className="text-[#c8a96e]" size={24} />}
                  title="Email"
                  detail="divinarnyangarisa@gmail.com"
                  description="For corporate inquiries and translations."
                />
              </div>
            </div>

            {/* Availability / Timezone Support */}
            <div className="p-8 border border-white/5 bg-white/[0.02] space-y-4">
              <div className="flex items-center gap-3 text-[#c8a96e]">
                <Clock size={20} />
                <span className="text-xs uppercase tracking-widest font-bold">Nairobi Time (EAT)</span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                I typically respond within 2 hours during Nairobi business hours 
                (8:00 AM — 8:00 PM). I am experienced in working with students 
                across US, European, and Middle Eastern time zones.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-6 pt-4">
              {/* <SocialLink href="#" icon={<Instagram size={20} />} label="Instagram" />
              <SocialLink href="#" icon={<Linkedin size={20} />} label="LinkedIn" /> */}
              <SocialLink href="#" icon={<Globe size={20} />} label="Blog" />
            </div>
          </div>

          {/* Right Side: Mini Enrollment Form */}
          <div className="bg-[#0a0a0a] border border-white/10 p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#c8a96e]/5 rounded-full -mr-16 -mt-16 blur-3xl" />
            
            <Reveal>
              <h3 className="text-2xl font-serif text-white mb-2">Send a Message</h3>
              <p className="text-white/40 text-sm mb-10">Briefly tell me about your goals.</p>
            </Reveal>

            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <InputGroup label="Full Name" placeholder="Jane Doe" />
                <InputGroup label="Email Address" placeholder="jane@example.com" type="email" />
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Interest</label>
                <select aria-label="select plan" className="w-full bg-white/5 border border-white/10 p-4 text-white/80 focus:border-[#c8a96e] outline-none transition-colors appearance-none cursor-pointer">
                  <option className="bg-[#0a0a0a]">Children's Lessons ($30/hr)</option>
                  <option className="bg-[#0a0a0a]">Adult Lessons ($40/hr)</option>
                  <option className="bg-[#0a0a0a]">Translation/Interpretation</option>
                  <option className="bg-[#0a0a0a]">Other Inquiries</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Message</label>
                <textarea 
                  rows={4}
                  placeholder="Tell me about your current level and goals..."
                  className="w-full bg-white/5 border border-white/10 p-4 text-white/80 focus:border-[#c8a96e] outline-none transition-colors resize-none"
                />
              </div>

              <button className="w-full bg-[#c8a96e] hover:bg-[#b8985e] text-[#0a0a0a] font-bold py-4 uppercase tracking-widest text-xs transition-all active:scale-[0.98]">
                Submit Inquiry
              </button>
            </form>
          </div>

        </div>
      </SectionWrapper>
    </main>
  );
}

function ContactMethod({ href, icon, title, detail, description }: any) {
  return (
    <Reveal>
      <a href={href} target="_blank" rel="noopener noreferrer" className="group flex gap-6 p-4 -ml-4 hover:bg-white/[0.02] transition-colors rounded-xl">
        <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#c8a96e]/40 transition-colors">
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

function InputGroup({ label, placeholder, type = "text" }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] uppercase tracking-widest text-white/40 font-bold">{label}</label>
      <input 
        type={type}
        placeholder={placeholder}
        className="w-full bg-white/5 border border-white/10 p-4 text-white/80 focus:border-[#c8a96e] outline-none transition-colors"
      />
    </div>
  );
}

function SocialLink({ href, icon, label }: any) {
  return (
    <a href={href} className="flex items-center gap-2 text-white/40 hover:text-[#c8a96e] transition-colors group">
      <div className="p-2 border border-white/10 rounded-lg group-hover:border-[#c8a96e]/40">
        {icon}
      </div>
      <span className="text-[10px] uppercase tracking-widest hidden sm:block">{label}</span>
    </a>
  );
}
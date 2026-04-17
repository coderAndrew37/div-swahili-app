"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import {
    BookMarked,
    ExternalLink,
    FileDown,
    GraduationCap,
    LayoutDashboard,
    Music,
    PlayCircle
} from "lucide-react";

export default function ResourcesPage() {
  return (
    <main className="pt-20">
      {/* ── Header ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Learning Hub
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
              Tools for your <br />
              <span className="italic text-[#c8a96e]">Swahili Growth.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/60 text-xl leading-relaxed">
              Learning a language happens between the lessons. Access our curated 
              guides, cultural playlists, and student portals to keep your 
              momentum high.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── Student Portals (The "Action" Row) ── */}
      <SectionWrapper bg="secondary">
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <PortalCard 
            icon={<LayoutDashboard className="text-[#c8a96e]" />}
            title="Current Students"
            description="Access your assignments, lesson recordings, and feedback via Google Classroom."
            link="https://classroom.google.com"
            label="Go to Classroom"
          />
          <PortalCard 
            icon={<GraduationCap className="text-[#c8a96e]" />}
            title="Kids Corner"
            description="Parents: Check your child's points, stories, and progress on Class Dojo."
            link="https://www.classdojo.com"
            label="Open Class Dojo"
          />
        </div>

        {/* ── Free Downloads ── */}
        <div className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/10 pb-6">
            <Reveal>
              <h2 className="text-3xl font-serif text-white italic">Free Study Guides</h2>
            </Reveal>
            <p className="text-white/30 text-xs uppercase tracking-widest hidden md:block">Updated for 2026</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <DownloadCard 
              title="The First 50 Phrases"
              type="PDF Guide"
              size="1.2 MB"
              description="Essential greetings and survival Swahili for your first week in East Africa."
            />
            <DownloadCard 
              title="Swahili Verb Tense Cheat Sheet"
              type="Infographic"
              size="800 KB"
              description="A one-page visual guide to mastering Past, Present, and Future tenses."
            />
            <DownloadCard 
              title="Numbers & Currency"
              type="Worksheet"
              size="1.5 MB"
              description="Practice counting and handling transactions like a Nairobi local."
            />
          </div>
        </div>
      </SectionWrapper>

      {/* ── Cultural Immersion (Spotify/YouTube) ── */}
      <SectionWrapper bg="primary">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl font-serif text-white leading-tight">
                Immerse yourself in <br />
                <span className="text-[#c8a96e]">Kenyan Culture.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/50 leading-relaxed text-lg">
                Language is music. It's rhythm. To truly learn Swahili, you have 
                to hear it in the wild. I've curated these lists to help you 
                train your ear while you're driving, cooking, or relaxing.
              </p>
            </Reveal>
            
            <div className="flex flex-col gap-4">
              <ExternalResource 
                icon={<Music size={20} />} 
                title="Swahili Soul (Spotify)" 
                desc="A mix of Taarab, Bongo Flava, and Kenyan Afro-pop."
              />
              <ExternalResource 
                icon={<PlayCircle size={20} />} 
                title="Top Swahili YouTubers" 
                desc="Vloggers and storytellers to help your listening skills."
              />
            </div>
          </div>

          {/* Decorative Visual Block */}
          <div className="relative aspect-video bg-[#c8a96e]/5 border border-white/5 flex items-center justify-center group overflow-hidden">
             <BookMarked size={120} className="text-[#c8a96e]/10 group-hover:scale-110 transition-transform duration-700" />
             <div className="absolute inset-0 border border-[#c8a96e]/20 m-6" />
             <div className="absolute bottom-10 left-10 text-white/20 font-serif italic text-2xl">
               Soma ili uerevuke.
               <span className="block text-[10px] uppercase tracking-widest not-italic mt-1">Read so that you may become wise.</span>
             </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function PortalCard({ icon, title, description, link, label }: any) {
  return (
    <Reveal>
      <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
        <div className="w-12 h-12 rounded-lg bg-[#c8a96e]/10 flex items-center justify-center mb-6">
          {icon}
        </div>
        <h3 className="text-xl font-serif text-white mb-3">{title}</h3>
        <p className="text-white/40 text-sm leading-relaxed mb-8">{description}</p>
        <a 
          href={link} 
          target="_blank" 
          className="flex items-center gap-2 text-[#c8a96e] text-xs uppercase tracking-[0.2em] font-bold hover:gap-4 transition-all"
        >
          {label} <ExternalLink size={14} />
        </a>
      </div>
    </Reveal>
  );
}

function DownloadCard({ title, type, size, description }: any) {
  return (
    <Reveal>
      <div className="p-8 border border-white/5 bg-[#0a0a0a] flex flex-col justify-between h-full group hover:border-[#c8a96e]/30 transition-colors">
        <div>
          <div className="flex justify-between items-start mb-6">
            <span className="text-[#c8a96e]/40 text-[10px] uppercase tracking-widest font-bold">{type}</span>
            <span className="text-white/20 text-[10px] uppercase font-mono">{size}</span>
          </div>
          <h4 className="text-white font-serif text-lg mb-3">{title}</h4>
          <p className="text-white/40 text-xs leading-relaxed mb-8">{description}</p>
        </div>
        <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest">
          <FileDown size={16} className="text-[#c8a96e]" /> Download File
        </button>
      </div>
    </Reveal>
  );
}

function ExternalResource({ icon, title, desc }: any) {
  return (
    <div className="flex gap-4 p-4 border border-white/5 hover:border-[#c8a96e]/20 transition-colors group cursor-pointer">
      <div className="mt-1 group-hover:text-[#c8a96e] transition-colors">{icon}</div>
      <div>
        <h5 className="text-white font-medium text-sm">{title}</h5>
        <p className="text-white/30 text-xs">{desc}</p>
      </div>
    </div>
  );
}
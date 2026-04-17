"use client";

import { 
  BookMarked, 
  ExternalLink, 
  FileDown, 
  GraduationCap, 
  LayoutDashboard, 
  Music, 
  PlayCircle 
} from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

const DOWNLOADS = [
  {
    title: "The first 50 phrases",
    type: "PDF guide",
    size: "1.2 MB",
    description: "Essential greetings and survival Swahili for your first week in East Africa.",
  },
  {
    title: "Swahili verb tense cheat sheet",
    type: "Infographic",
    size: "800 KB",
    description: "A one-page visual guide to mastering past, present, and future tenses.",
  },
  {
    title: "Numbers & currency",
    type: "Worksheet",
    size: "1.5 MB",
    description: "Practice counting and handling transactions like a Nairobi local.",
  },
];

export default function ResourcesClient() {
  return (
    <main className="pt-20">
      <PageHero
        eyebrow="Learning hub"
        heading={
          <>
            Tools for your{" "}
            <span className="italic text-[#c8a96e]">Swahili growth.</span>
          </>
        }
        subheading="Learning a language happens between the lessons. Here are the guides,
          portals, and cultural playlists to keep your momentum going."
        bg={{ type: "color", value: "primary" }}
      />

      <SectionWrapper bg="secondary">
        {/* Student portals */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {[
            {
              icon: <LayoutDashboard className="text-[#c8a96e]" />,
              title: "Current students",
              description:
                "Access your assignments, lesson recordings, and feedback via Google Classroom.",
              link: "https://classroom.google.com",
              label: "Go to Classroom",
            },
            {
              icon: <GraduationCap className="text-[#c8a96e]" />,
              title: "Kids corner",
              description:
                "Parents: check your child's points, stories, and progress on Class Dojo.",
              link: "https://www.classdojo.com",
              label: "Open Class Dojo",
            },
          ].map((portal) => (
            <Reveal key={portal.title}>
              <div className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all group">
                <div className="w-12 h-12 rounded-lg bg-[#c8a96e]/10 flex items-center justify-center mb-6">
                  {portal.icon}
                </div>
                <h3 className="text-xl font-serif text-white mb-3">{portal.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-8">{portal.description}</p>
                <a
                  href={portal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#c8a96e] text-xs uppercase tracking-[0.2em] font-bold hover:gap-4 transition-all"
                >
                  {portal.label} <ExternalLink size={14} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Downloads */}
        <div className="space-y-12">
          <div className="flex items-end justify-between border-b border-white/10 pb-6">
            <Reveal>
              <h2 className="text-3xl font-serif text-white italic">Free study guides</h2>
            </Reveal>
            <p className="text-white/30 text-xs uppercase tracking-widest hidden md:block">
              Updated for 2026
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {DOWNLOADS.map((d) => (
              <Reveal key={d.title}>
                <div className="p-8 border border-white/5 bg-[#0a0a0a] flex flex-col justify-between h-full group hover:border-[#c8a96e]/30 transition-colors">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="text-[#c8a96e]/40 text-[10px] uppercase tracking-widest font-bold">
                        {d.type}
                      </span>
                      <span className="text-white/20 text-[10px] uppercase font-mono">{d.size}</span>
                    </div>
                    <h4 className="text-white font-serif text-lg mb-3">{d.title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed mb-8">{d.description}</p>
                  </div>
                  <button className="flex items-center gap-2 text-white/60 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest w-fit">
                    <FileDown size={16} className="text-[#c8a96e]" /> Download file
                  </button>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Cultural immersion */}
      <SectionWrapper bg="primary">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <Reveal>
              <h2 className="text-4xl font-serif text-white leading-tight">
                Immerse yourself in{" "}
                <span className="text-[#c8a96e]">Kenyan culture.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/50 leading-relaxed text-lg">
                Language is music — it's rhythm, it's timing. To really absorb Swahili,
                you have to hear it in the wild. These playlists and channels will
                train your ear while you drive, cook, or just relax.
              </p>
            </Reveal>
            <div className="flex flex-col gap-4">
              {[
                {
                  icon: <Music size={20} />,
                  title: "Swahili Soul (Spotify)",
                  desc: "A curated mix of Taarab, Bongo Flava, and Kenyan Afro-pop.",
                },
                {
                  icon: <PlayCircle size={20} />,
                  title: "Top Swahili YouTubers",
                  desc: "Vloggers and storytellers to sharpen your listening comprehension.",
                },
              ].map((r) => (
                <div
                  key={r.title}
                  className="flex gap-4 p-4 border border-white/5 hover:border-[#c8a96e]/20 transition-colors group cursor-pointer"
                >
                  <div className="mt-1 text-white/40 group-hover:text-[#c8a96e] transition-colors">
                    {r.icon}
                  </div>
                  <div>
                    <h5 className="text-white font-medium text-sm">{r.title}</h5>
                    <p className="text-white/30 text-xs">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative aspect-video bg-[#c8a96e]/5 border border-white/5 flex items-center justify-center group overflow-hidden">
            <BookMarked
              size={120}
              className="text-[#c8a96e]/10 group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 border border-[#c8a96e]/20 m-6" />
            <div className="absolute bottom-10 left-10 text-white/20 font-serif italic text-2xl">
              Soma ili uerevuke.
              <span className="block text-[10px] uppercase tracking-widest not-italic mt-1">
                Read so that you may become wise.
              </span>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
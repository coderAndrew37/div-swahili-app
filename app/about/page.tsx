"use client";

import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle2, GraduationCap, Heart, Users, Video } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* ── Header Section ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-4xl">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              The Story Behind Lugha Studio
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8 leading-[1.1]">
              Shaping Minds, <br />
              <span className="italic text-[#c8a96e]">Touching Hearts.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/60 text-xl leading-relaxed max-w-2xl">
              Divinar Nyang’arisa is a native Kiswahili speaker and TSC-registered 
              educator with over a decade of experience bridging the gap between 
              African heritage and global learners.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── The Academic & Professional Core ── */}
      <SectionWrapper bg="secondary">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <Image 
              src="/assets/about/teacher-main.jpg" 
              alt="Divinar Nyang’arisa"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl font-serif text-white">Professional Pedigree</h2>
            </Reveal>
            
            <div className="grid gap-6">
              <ProfessionalPoint 
                icon={<GraduationCap className="text-[#c8a96e]" size={24} />}
                title="Academic Excellence"
                description="Currently pursuing an MA in Swahili & Communication; holds a B.Ed in Kiswahili & Geography."
              />
              <ProfessionalPoint 
                icon={<Users className="text-[#c8a96e]" size={24} />}
                title="10+ Years Experience"
                description="A decade of instruction within elite British International Schools and global platforms like Language Garage, NYC."
              />
              <ProfessionalPoint 
                icon={<Video className="text-[#c8a96e]" size={24} />}
                title="Modern Methodology"
                description="Expertise in digital delivery via Zoom, Google Classroom, and Class Dojo for interactive, high-retention learning."
              />
            </div>

            <Reveal delay={0.4}>
              <div className="p-8 bg-white/5 border border-white/10 italic text-white/70 leading-relaxed">
                "I believe that learning different languages and traditions makes 
                students more culturally appreciative—a gift that serves them 
                their entire lives."
              </div>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>

      {/* ── The Personal Story (Motherhood & Advocacy) ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <Reveal>
                <h2 className="text-3xl font-serif text-white mb-6">Beyond the Classroom</h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-white/60 leading-relaxed mb-6">
                  Outside of linguistics, Divinar is a mother of five girls—including 
                  a set of quadruplets. Her journey navigating parenthood at such 
                   a scale has fueled her passion for mental health advocacy and 
                  parenting support.
                </p>
                <p className="text-white/60 leading-relaxed mb-8">
                  She actively blogs and speaks on the intersection of cultural 
                  identity and modern parenting, helping families find balance 
                  and resilience through their roots.
                </p>
              </Reveal>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <Heart className="text-[#c8a96e]" size={16} /> Mental Health Advocate
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="text-[#c8a96e]" size={16} /> Parenting Blogger
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2 relative aspect-square bg-[#c8a96e]/10 flex items-center justify-center p-12">
               {/* This is a great spot for a photo of her with her kids or a more relaxed lifestyle shot */}
               <div className="text-center">
                 <p className="text-[#c8a96e] font-serif text-6xl mb-4">5</p>
                 <p className="text-white/40 uppercase tracking-[0.2em] text-xs">Daughters</p>
                 <p className="text-white font-serif mt-2 italic text-lg">Including one set of Quadruplets</p>
               </div>
               <div className="absolute inset-0 border border-[#c8a96e]/20 m-4" />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}

function ProfessionalPoint({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <Reveal>
      <div className="flex gap-4">
        <div className="mt-1">{icon}</div>
        <div>
          <h4 className="text-white font-medium mb-1">{title}</h4>
          <p className="text-white/40 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </Reveal>
  );
}
"use client";

import Image from "next/image";
import { GraduationCap, Heart, CheckCircle2, Users, Video } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";

export default function AboutClient() {
  return (
    <main className="pt-20">
      <PageHero
        eyebrow="The story behind Lugha Studio"
        heading={
          <>
            Shaping Minds,{" "}
            <span className="italic text-[#c8a96e]">Touching Hearts.</span>
          </>
        }
        subheading="Divinar Nyang'arisa is a native Kiswahili speaker and TSC-registered 
          educator with over a decade of experience bridging the gap between African 
          heritage and global learners."
        bg={{ type: "image", src: "/assets/client-hero.jpeg", alt: "Divinar Nyang'arisa teaching a Swahili lesson" }}
      />

      {/* Professional background */}
      <SectionWrapper bg="secondary">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div className="relative aspect-[4/5] overflow-hidden border border-white/10">
            <Image
              src="/assets/about-div.jpg"
              alt="Divinar Nyang'arisa teaching a Swahili lesson"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          <div className="space-y-8">
            <Reveal>
              <h2 className="text-3xl font-serif text-white">Her background</h2>
            </Reveal>

            <div className="grid gap-6">
              {[
                {
                  icon: <GraduationCap className="text-[#c8a96e]" size={24} />,
                  title: "Genuinely academic",
                  description:
                    "Currently pursuing an MA in Swahili & Communication, building on a B.Ed in Kiswahili & Geography.",
                },
                {
                  icon: <Users className="text-[#c8a96e]" size={24} />,
                  title: "10+ years in the field",
                  description:
                    "A decade of instruction at elite British International Schools and global platforms like Language Garage, NYC.",
                },
                {
                  icon: <Video className="text-[#c8a96e]" size={24} />,
                  title: "Built for the digital age",
                  description:
                    "Fluent in Zoom, Google Classroom, and Class Dojo — the lesson always feels live, never like a recorded lecture.",
                },
              ].map((item) => (
                <Reveal key={item.title}>
                  <div className="flex gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div>
                      <h4 className="text-white font-medium mb-1">{item.title}</h4>
                      <p className="text-white/40 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <blockquote className="p-8 bg-white/5 border border-white/10 italic text-white/70 leading-relaxed">
                "I believe that learning different languages and traditions makes
                students more culturally appreciative — a gift that stays with
                them for life."
              </blockquote>
            </Reveal>
          </div>
        </div>
      </SectionWrapper>

      {/* Personal story */}
      <SectionWrapper bg="primary">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Reveal>
              <h2 className="text-3xl font-serif text-white mb-6">Life beyond the classroom</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-white/60 leading-relaxed mb-6">
                Divinar is a mother of five girls — including a set of quadruplets.
                Navigating that beautifully chaotic household has fuelled a genuine passion
                for mental health advocacy and parenting support.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                She blogs and speaks on the intersection of cultural identity and
                modern parenting, helping families find balance and resilience through
                their roots.
              </p>
            </Reveal>
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 text-white/80 text-sm">
                <Heart className="text-[#c8a96e]" size={16} /> Mental health advocate
              </span>
              <span className="flex items-center gap-2 text-white/80 text-sm">
                <CheckCircle2 className="text-[#c8a96e]" size={16} /> Parenting blogger
              </span>
            </div>
          </div>

          <div className="relative aspect-square bg-[#c8a96e]/10 flex items-center justify-center p-12">
            <div className="text-center">
              <p className="text-[#c8a96e] font-serif text-6xl mb-4">5</p>
              <p className="text-white/40 uppercase tracking-[0.2em] text-xs">Daughters</p>
              <p className="text-white font-serif mt-2 italic text-lg">
                Including one set of quadruplets
              </p>
            </div>
            <div className="absolute inset-0 border border-[#c8a96e]/20 m-4" />
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
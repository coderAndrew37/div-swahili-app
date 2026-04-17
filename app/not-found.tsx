"use client";

import { ButtonLink } from "@/components/ui/ButtonLink";
import { Reveal } from "@/components/ui/Reveal";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="h-screen w-full flex items-center justify-center bg-[#0a0a0a] px-6">
      <div className="max-w-xl text-center">
        <Reveal>
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <Compass size={80} className="text-[#c8a96e] opacity-20 animate-pulse" />
              <span className="absolute inset-0 flex items-center justify-center font-serif text-4xl text-white">
                404
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 italic">
            Hujapotea... <br />
            <span className="text-[#c8a96e] not-italic">just a wrong turn.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-white/40 mb-10 leading-relaxed">
            The page you are looking for doesn't exist or has moved. 
            Let's get you back on the right path to mastering Swahili.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ButtonLink href="/" className="px-8">
              <ArrowLeft size={16} className="mr-2" /> Return Home
            </ButtonLink>
            <ButtonLink href="/services" variant="outline">
              Explore Services
            </ButtonLink>
          </div>
        </Reveal>
      </div>

      {/* Background Decorative Element */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <p className="text-[20vw] font-serif text-white absolute -bottom-10 -left-10 leading-none select-none">
          Lugha
        </p>
      </div>
    </main>
  );
}
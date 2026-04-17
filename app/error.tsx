"use client";

import { useEffect } from "react";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { RefreshCcw, AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="h-screen w-full flex items-center justify-center bg-[#0a0a0a] px-6">
      <div className="max-w-lg text-center">
        <div className="mb-8 flex justify-center">
          <AlertCircle size={64} className="text-red-500/50" />
        </div>

        <Reveal>
          <h1 className="text-3xl md:text-4xl font-serif text-white mb-4">
            Samahani, something <br /> went wrong.
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-white/40 mb-10 text-sm leading-relaxed">
            An unexpected error occurred. We've been notified and are looking into it. 
            In the meantime, try refreshing the page.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => reset()}
              className="flex items-center gap-2 bg-[#c8a96e] text-[#0a0a0a] px-8 py-3 font-bold uppercase tracking-widest text-xs transition-transform active:scale-95"
            >
              <RefreshCcw size={16} /> Try Again
            </button>
            <span className="text-white/20 text-xs uppercase tracking-widest">or</span>
            <ButtonLink href="/contact" variant="outline" className="border-white/10">
              Report Issue
            </ButtonLink>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
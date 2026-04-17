"use client";

import { Reveal } from "@/components/ui/Reveal";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { ShieldCheck, Scale, FileText, Lock } from "lucide-react";

export default function LegalPage() {
  const lastUpdated = "April 2026";

  return (
    <main className="pt-20">
      {/* ── Header ── */}
      <SectionWrapper bg="primary">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-[#c8a96e] text-xs tracking-[0.3em] uppercase mb-4 block font-medium">
              Terms & Privacy
            </span>
          </Reveal>
          <Reveal delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-8">
              The <span className="italic text-[#c8a96e]">Fine Print.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-white/60 text-xl leading-relaxed">
              Transparent policies designed to protect our students, our 
              academic integrity, and the quality of our instruction.
            </p>
          </Reveal>
        </div>
      </SectionWrapper>

      {/* ── Legal Content ── */}
      <SectionWrapper bg="secondary">
        <div className="max-w-4xl mx-auto space-y-16">
          
          {/* 1. Terms of Service */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#c8a96e] mb-4">
              <Scale size={24} />
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Terms of Service</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-white/50 space-y-4">
              <p>
                By enrolling in lessons at Lugha Studio, you agree to the following 
                commercial terms. All lessons are conducted virtually via Zoom, 
                Google Meet, or agreed-upon platforms.
              </p>
              <h4 className="text-white font-medium underline decoration-[#c8a96e]/30 underline-offset-4">Cancellation Policy</h4>
              <p>
                We value your time and ours. Cancellations made with at least 
                <strong> 24 hours' notice</strong> may be rescheduled at no additional 
                cost. Cancellations made with less than 24 hours' notice or "no-shows" 
                will be charged at the full lesson rate.
              </p>
              <h4 className="text-white font-medium underline decoration-[#c8a96e]/30 underline-offset-4">Payments</h4>
              <p>
                Payments are due in advance of the scheduled session or as per the 
                agreed-upon monthly billing cycle. We accept PayPal, Wise, and 
                direct bank transfers.
              </p>
            </div>
          </div>

          <hr className="border-white/5" />

          {/* 2. Privacy Policy */}
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#c8a96e] mb-4">
              <ShieldCheck size={24} />
              <h2 className="text-2xl font-serif text-white uppercase tracking-wider">Privacy Policy</h2>
            </div>
            <div className="prose prose-invert prose-sm max-w-none text-white/50 space-y-4">
              <p>
                Your privacy is paramount. We collect minimal data necessary for 
                instructional purposes, including names, email addresses, and 
                student progress notes.
              </p>
              <h4 className="text-white font-medium">Educational Tools</h4>
              <p>
                We utilize third-party platforms including <strong>Class Dojo</strong> and 
                <strong> Google Classroom</strong>. Use of these tools is subject to their 
                respective privacy policies. We do not sell or share student data 
                with third-party marketers.
              </p>
              <h4 className="text-white font-medium">Children’s Privacy</h4>
              <p>
                For students under 18, all communication is funneled through 
                parental accounts. We comply with global standards for protecting 
                minors' digital information.
              </p>
            </div>
          </div>

          {/* 3. Footer Note */}
          <div className="p-8 border border-white/5 bg-white/[0.02] flex items-start gap-4">
            <Lock className="text-[#c8a96e]/40 shrink-0" size={20} />
            <p className="text-[10px] text-white/30 uppercase tracking-[0.2em] leading-loose">
              Last Updated: {lastUpdated} <br />
              Lugha Studio reserves the right to update these terms as necessary. 
              Continued enrollment constitutes acceptance of the updated policies.
            </p>
          </div>
        </div>
      </SectionWrapper>
    </main>
  );
}
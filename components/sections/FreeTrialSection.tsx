import Image from "next/image";
import { SITE } from "@/constants";
import { Reveal } from "@/components/ui/Reveal";

export function FreeTrialSection() {
  return (
    <div className="relative py-28 px-6 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1800&q=80"
        alt="Students learning"
        fill
        className="object-cover object-center"
        priority
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-[#0a0a0a]/80" />
      {/* Gold left accent */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c8a96e]" />

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 border border-[#c8a96e]/40 text-[#c8a96e] text-xs tracking-[0.2em] uppercase px-4 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-[#c8a96e] rounded-full animate-pulse" />
            Limited Spots Available This Month
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight mb-6">
            Your First Lesson
            <br />
            <span className="italic text-[#c8a96e]">Is Completely Free.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="text-white/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            No commitment. No payment. Just a full 45-minute lesson to see if
            it's the right fit — for you or your child.
          </p>
        </Reveal>

        <Reveal delay={0.4}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* FIXED: Added the missing 'a' tag name below */}
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=Hi%2C%20I%27d%20like%20to%20book%20my%20free%20trial%20Swahili%20lesson%20please.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c8a96e] text-[#0a0a0a] px-10 py-4 text-sm font-bold tracking-wide hover:bg-white transition-colors duration-200"
            >
              Book My Free Trial →
            </a>
            <p className="text-white/30 text-xs tracking-wide">
              Responds within a few hours · No card required
            </p>
          </div>
        </Reveal>

        {/* Trust signals */}
        <Reveal delay={0.5}>
          <div className="mt-12 pt-8 border-t border-white/8 flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: "✓", text: "No credit card needed" },
              { icon: "✓", text: "Full 45-min lesson" },
              { icon: "✓", text: "Free resources included" },
              { icon: "✓", text: "Cancel anytime" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-[#c8a96e] text-sm font-bold">
                  {item.icon}
                </span>
                <span className="text-white/50 text-xs tracking-wide">
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}

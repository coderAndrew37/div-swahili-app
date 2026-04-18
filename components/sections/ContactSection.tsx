import Image from "next/image";
import { SITE } from "@/constants";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Reveal } from "@/components/ui/Reveal";

export function ContactSection() {
  return (
    <>
      {/* ── Full-bleed Nairobi background CTA ── */}
      <div className="relative py-32 px-6 overflow-hidden">
        <Image
          src="/assets/nairobi-city.webp"
          alt="Nairobi Kenya"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <Reveal>
            <p className="text-[#c8a96e] text-xs tracking-[0.25em] uppercase mb-4">
              Taught from Nairobi, reaching the world
            </p>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-4 leading-tight">
              Your Journey to Swahili
              <br />
              <span className="italic text-white/50">
                Starts with One Message.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={2}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
              <WhatsAppButton />
              <EmailButton />
            </div>
          </Reveal>
        </div>
      </div>

      {/* ── Contact details section ── */}
      <SectionWrapper id="contact" bg="secondary">
        <div className="max-w-3xl mx-auto text-center">
          <SectionHeader
            label="Get in Touch"
            heading={
              <>
                Ready to Start
                <br />
                <span className="italic text-white/40">Your Journey?</span>
              </>
            }
            subheading="Whether you're booking a lesson, a group session, or need a tour guide or airport transfer in Nairobi — she'll get back to you promptly."
          />

          <Reveal delay={3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <WhatsAppButton />
              <EmailButton />
            </div>
          </Reveal>

          <Reveal delay={4}>
            <LanguageBadge />
          </Reveal>
        </div>
      </SectionWrapper>
    </>
  );
}

function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}`}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-3 bg-[#25D366] text-white px-8 py-4 font-medium hover:bg-[#20ba58] transition-colors duration-200 text-sm"
    >
      <WhatsAppIcon />
      WhatsApp: +254 725 646 544
    </a>
  );
}

function EmailButton() {
  return (
    <a
      href={`mailto:${SITE.email}`}
      className="flex items-center gap-3 border border-white/20 text-white px-8 py-4 hover:border-white/40 transition-colors duration-200 font-light text-sm"
    >
      <EmailIcon />
      {SITE.email}
    </a>
  );
}

function LanguageBadge() {
  return (
    <div className="inline-flex items-center gap-6 border border-white/8 px-8 py-4">
      <span className="text-white/30 text-xs tracking-widest uppercase">
        Languages
      </span>
      <span className="w-px h-4 bg-white/10" />
      {["Swahili", "English"].map((lang) => (
        <span key={lang} className="text-white/60 text-sm">
          {lang}
        </span>
      ))}
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.555 4.116 1.524 5.849L.057 23.57l5.858-1.537A11.95 11.95 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.894a9.893 9.893 0 01-5.029-1.373l-.361-.214-3.741.981.999-3.643-.234-.375A9.867 9.867 0 012.107 12C2.107 6.579 6.578 2.108 12 2.108c5.421 0 9.893 4.471 9.893 9.892 0 5.422-4.472 9.894-9.893 9.894z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    >
      <path
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

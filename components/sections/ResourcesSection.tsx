import Image from "next/image";
import { FREE_RESOURCES, SITE } from "@/constants";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function ResourcesSection() {
  return (
    <SectionWrapper id="resources" bg="primary">
      <div className="flex flex-col md:flex-row items-center gap-16">
        <ResourcesCopy />
        <ResourcesGrid />
      </div>
    </SectionWrapper>
  );
}

function ResourcesCopy() {
  return (
    <Reveal className="flex-1">
      <SectionLabel>Free Resources</SectionLabel>
      <h2 className="text-4xl font-serif text-white mb-6 leading-tight">
        Free Swahili Books &<br />
        <span className="text-white/40 italic">Revision Materials</span>
      </h2>
      <p className="text-white/50 leading-relaxed mb-6 max-w-md">
        Every student gets a curated set of soft-copy Swahili–English translated
        books and handpicked revision sites — absolutely free, no strings
        attached.
      </p>

      {/* Reading scene image */}
      <div className="relative w-full h-48 mb-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=800&q=75"
          alt="Books and study materials"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/50" />
      </div>

      <a
        href={`https://wa.me/${SITE.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#c8a96e] text-sm tracking-wide group"
      >
        Request your free copy
        <span className="group-hover:translate-x-1 transition-transform duration-200">
          →
        </span>
      </a>
    </Reveal>
  );
}

function ResourcesGrid() {
  // Unsplash images per resource type
  const images = [
    "https://images.unsplash.com/photo-1546521343-4eb2c01aa44b?w=400&q=70",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=70",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=70",
    "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=70",
  ];

  return (
    <Reveal delay={2} className="flex-1 grid grid-cols-2 gap-4">
      {FREE_RESOURCES.map((resource, i) => (
        <div
          key={i}
          className="group relative overflow-hidden border border-white/8 hover:border-[#c8a96e]/30 transition-colors duration-300"
        >
          {/* Background image */}
          <div className="relative h-28">
            <Image
              src={images[i]}
              alt={resource.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-[#0a0a0a]/60" />
            <span className="absolute top-3 left-3 text-xl">
              {resource.icon}
            </span>
          </div>

          {/* Label */}
          <div className="p-4 bg-[#0a0a0a]">
            <p className="text-white/70 text-sm font-medium group-hover:text-white transition-colors leading-snug">
              {resource.title}
            </p>
            <p className="text-white/25 text-xs mt-1">Free soft copy</p>
          </div>
        </div>
      ))}
    </Reveal>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { staggerContainer, fadeUp } from "@/lib/animations";

// Service images from Unsplash (free, no auth needed)
const SERVICES = [
  {
    icon: "🎓",
    title: "Children & Diaspora Youth",
    description:
      "Tailored lessons for Kenyan children born abroad to stay connected to their roots and mother tongue.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=70",
    imageAlt: "Children learning together",
  },
  {
    icon: "🌍",
    title: "Foreign Spouses & Diplomats",
    description:
      "Structured Swahili courses for spouses and diplomats living or working in Kenya — practical, professional, effective.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=70",
    imageAlt: "Professional meeting diplomats",
  },
  {
    icon: "✈️",
    title: "Travellers & Enthusiasts",
    description:
      "Anyone curious about Swahili culture or planning a trip to East Africa — we'll get you conversation-ready.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=70",
    imageAlt: "Traveller exploring Africa",
  },
  {
    icon: "📖",
    title: "Translation & Interpretation",
    description:
      "Professional Swahili-English translation and live interpretation for documents, events, and media.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=70",
    imageAlt: "Books and documents",
  },
  {
    icon: "🗺️",
    title: "Tour Guiding",
    description:
      "Immersive Nairobi & Kenya tours guided in Swahili and English — culture, nature, and hidden gems.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=70",
    imageAlt: "Kenya safari landscape",
  },
  {
    icon: "🚗",
    title: "Airport Transfers & Errands",
    description:
      "Chauffeured TX Prado hire for airport pickups, drops, and city errands — comfortable and reliable.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=70",
    imageAlt: "Luxury vehicle driving",
  },
];

export function ServicesSection() {
  return (
    <SectionWrapper id="services" bg="primary">
      <SectionHeader
        label="What I Offer"
        heading="One Teacher. Many Doors."
        subheading="From online Swahili lessons to airport transfers — a unique blend of language expertise and Kenyan hospitality."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {SERVICES.map((service, i) => (
          <ServiceCard key={i} service={service} index={i} />
        ))}
      </motion.div>
    </SectionWrapper>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      className="group relative overflow-hidden border border-white/8 hover:border-[#c8a96e]/30 transition-colors duration-500 cursor-default"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#0a0a0a]/55 group-hover:bg-[#0a0a0a]/40 transition-colors duration-500" />
        {/* Icon over image */}
        <div className="absolute top-4 left-4 text-2xl">{service.icon}</div>
      </div>

      {/* Text */}
      <div className="p-6 bg-[#0a0a0a]">
        <h3 className="text-white font-serif text-lg mb-2 group-hover:text-[#c8a96e] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-white/40 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    </motion.div>
  );
}

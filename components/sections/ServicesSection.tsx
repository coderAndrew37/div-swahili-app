"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { SITE } from "@/constants";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { staggerContainer, fadeUp } from "@/lib/animations";

// ─── Service data with per-service WhatsApp message ───────────────────────────

const SERVICES = [
  {
    icon: "🎓",
    title: "Children & Diaspora Youth",
    description:
      "Tailored lessons for Kenyan children born abroad to stay connected to their roots and mother tongue.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&q=70",
    imageAlt: "Children learning together",
    whatsappMessage:
      "Hi Divina! I'm interested in Swahili lessons for my child. They are part of the Kenyan diaspora and I'd love to book a free trial lesson. Could you share more details?",
  },
  {
    icon: "🌍",
    title: "Foreign Spouses & Diplomats",
    description:
      "Structured Swahili courses for spouses and diplomats living or working in Kenya — practical, professional, effective.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=70",
    imageAlt: "Professional meeting diplomats",
    whatsappMessage:
      "Hi Divina! I'm a foreign spouse / diplomat based in Kenya and I'd like to learn Swahili for professional use. Could we schedule a free trial lesson?",
  },
  {
    icon: "✈️",
    title: "Travellers & Enthusiasts",
    description:
      "Anyone curious about Swahili culture or planning a trip to East Africa — we'll get you conversation-ready.",
    image:
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600&q=70",
    imageAlt: "Traveller exploring Africa",
    whatsappMessage:
      "Hi Divina! I'm planning a trip to East Africa and would love to learn some conversational Swahili before I go. Can I book a free trial lesson?",
  },
  {
    icon: "📖",
    title: "Translation & Interpretation",
    description:
      "Professional Swahili-English translation and live interpretation for documents, events, and media.",
    image:
      "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=70",
    imageAlt: "Books and documents",
    whatsappMessage:
      "Hi Divina! I need professional Swahili-English translation / interpretation services. Could you share your availability and rates?",
  },
  {
    icon: "🗺️",
    title: "Tour Guiding",
    description:
      "Immersive Nairobi & Kenya tours guided in Swahili and English — culture, nature, and hidden gems.",
    image:
      "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=600&q=70",
    imageAlt: "Kenya safari landscape",
    whatsappMessage:
      "Hi Divina! I'm interested in a guided tour of Nairobi / Kenya. Could you share what tours are available and your pricing?",
  },
  {
    icon: "🚗",
    title: "Airport Transfers & Errands",
    description:
      "Chauffeured TX Prado hire for airport pickups, drops, and city errands — comfortable and reliable.",
    image:
      "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&q=70",
    imageAlt: "Luxury vehicle driving",
    whatsappMessage:
      "Hi Divina! I'd like to book a chauffeured TX Prado for an airport transfer / city errand. Could you confirm availability and the rate?",
  },
] as const;

// ─── Section ──────────────────────────────────────────────────────────────────

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

// ─── Card ─────────────────────────────────────────────────────────────────────

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  const href = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(service.whatsappMessage)}`;

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeUp}
      custom={index}
      className="group relative overflow-hidden border border-white/8 hover:border-[#c8a96e]/30 transition-colors duration-500 cursor-pointer"
    >
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/55 group-hover:bg-[#0a0a0a]/40 transition-colors duration-500" />
        <div className="absolute top-4 left-4 text-2xl">{service.icon}</div>

        {/* Hover CTA label that appears on the image */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-[#c8a96e] px-4 py-2 flex items-center justify-between">
          <span className="text-[#0a0a0a] text-xs font-semibold tracking-wide">
            Enquire on WhatsApp
          </span>
          <span className="text-[#0a0a0a] text-xs">→</span>
        </div>
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
    </motion.a>
  );
}

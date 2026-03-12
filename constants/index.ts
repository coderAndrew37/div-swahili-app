// ─── SITE META ────────────────────────────────────────────────────────────────
export const SITE = {
  name: "Lugha Studio",
  tagline: "Speak Swahili with Confidence.",
  whatsapp: "254725646544",
  email: "divinarnyangarisa@gmail.com",
  location: "Nairobi, Kenya",
} as const;

// ─── NAVIGATION ───────────────────────────────────────────────────────────────
export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
] as const;

// ─── STATS ────────────────────────────────────────────────────────────────────
export const STATS = [
  { value: "10+", label: "Years Teaching" },
  { value: "500+", label: "Students Taught" },
  { value: "3", label: "Countries Reached" },
  { value: "100%", label: "Passion for Swahili" },
] as const;

// ─── SERVICES ─────────────────────────────────────────────────────────────────
export const SERVICES = [
  {
    icon: "🎓",
    title: "Children & Diaspora Youth",
    description:
      "Tailored lessons for Kenyan children born abroad to stay connected to their roots and mother tongue.",
  },
  {
    icon: "🌍",
    title: "Foreign Spouses & Diplomats",
    description:
      "Structured Swahili courses for spouses and diplomats living or working in Kenya — practical, professional, effective.",
  },
  {
    icon: "✈️",
    title: "Travellers & Enthusiasts",
    description:
      "Anyone curious about Swahili culture or planning a trip to East Africa — we'll get you conversation-ready.",
  },
  {
    icon: "📖",
    title: "Translation & Interpretation",
    description:
      "Professional Swahili-English translation and live interpretation services for documents, events, and media.",
  },
  {
    icon: "🗺️",
    title: "Tour Guiding",
    description:
      "Immersive Nairobi & Kenya tours guided in Swahili and English — culture, nature, and hidden gems.",
  },
  {
    icon: "🚗",
    title: "Airport Transfers & Errands",
    description:
      "Chauffeured TX Prado hire for airport pickups, drops, and city errands — comfortable and reliable.",
  },
] as const;

// ─── ABOUT FEATURES ───────────────────────────────────────────────────────────
export const FEATURES = [
  {
    title: "Academic Foundation",
    body: "BA & MA in Swahili and Communication — not just a native speaker, but a trained language educator.",
  },
  {
    title: "International Experience",
    body: "Over a decade in international schools across Kenya, and current faculty at Language Garage, New York.",
  },
  {
    title: "Flexible & Online",
    body: "Live virtual sessions designed around your schedule — from Nairobi, New York, or anywhere in between.",
  },
  {
    title: "Free Learning Resources",
    body: "Complimentary soft-copy Swahili–English books and curated revision sites for every student.",
  },
] as const;

// ─── PRICING TIERS ────────────────────────────────────────────────────────────
export const PRICING_TIERS = [
  {
    label: "Single Session",
    price: "Custom",
    unit: "per lesson",
    featured: false,
    perks: [
      "1-on-1 virtual lesson",
      "Personalised curriculum",
      "Free resource materials",
      "Flexible scheduling",
    ],
    cta: "Enquire Now",
  },
  {
    label: "Group Sessions",
    price: "Discounted",
    unit: "negotiable rates",
    featured: true,
    perks: [
      "2–6 students per class",
      "Group dynamics & practice",
      "Shared learning resources",
      "Best value for families",
    ],
    cta: "Book Group Session",
  },
  {
    label: "Airport Transfer / Hire",
    price: "KES 15K",
    unit: "per day, chauffeured",
    featured: false,
    perks: [
      "TX Prado (luxury SUV)",
      "Chauffeured service",
      "Airport pickups & drops",
      "City errands & tours",
    ],
    cta: "Book Transfer",
  },
] as const;

// ─── FREE RESOURCES ───────────────────────────────────────────────────────────
export const FREE_RESOURCES = [
  { icon: "📗", title: "Swahili–English Dictionary" },
  { icon: "📘", title: "Children's Story Book" },
  { icon: "📙", title: "Grammar Revision Guide" },
  { icon: "📒", title: "Phrase Cards for Beginners" },
] as const;

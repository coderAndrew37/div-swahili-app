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
    whatsappMessage:
      "Hi Divina! I'm interested in booking a single 1-on-1 Swahili lesson. Could you share your availability and rates? I'd love to start with a free trial if possible.",
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
    whatsappMessage:
      "Hi Divina! I'm interested in a group Swahili session. We have [X] people who want to learn together. Could you share group rates and availability?",
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
    whatsappMessage:
      "Hi Divina! I'd like to book the chauffeured TX Prado. Could you confirm availability for my date and the KES 15,000/day rate?",
  },
] as const;

// ─── FREE RESOURCES ───────────────────────────────────────────────────────────
export const FREE_RESOURCES = [
  { icon: "📗", title: "Swahili–English Dictionary" },
  { icon: "📘", title: "Children's Story Book" },
  { icon: "📙", title: "Grammar Revision Guide" },
  { icon: "📒", title: "Phrase Cards for Beginners" },
] as const;

export const TESTIMONIALS = [
  {
    name: "Sarah M.",
    flag: "🇺🇸",
    location: "New York, USA",
    role: "Kenyan diaspora parent",
    quote:
      "My kids were losing their Swahili completely. After 3 months of lessons, they're speaking fluently with their grandparents again. Worth every penny.",
    rating: 5,
  },
  {
    name: "James K.",
    flag: "🇬🇧",
    location: "London, UK",
    role: "Foreign diplomat",
    quote:
      "I needed conversational Swahili fast before my posting to Nairobi. She had me confident in meetings within 6 weeks. Exceptional teacher.",
    rating: 5,
  },
  {
    name: "Amara L.",
    flag: "🇨🇦",
    location: "Toronto, Canada",
    role: "Kenyan-Canadian student",
    quote:
      "The free books alone are worth it. Add the personalised lessons and you genuinely can't find better value anywhere online.",
    rating: 5,
  },
  {
    name: "David R.",
    flag: "🇩🇪",
    location: "Berlin, Germany",
    role: "Travel enthusiast",
    quote:
      "Booked a tour guide session in Nairobi after my online lessons. The cultural context she teaches makes everything richer. Highly recommend.",
    rating: 5,
  },
] as const;

export const FAQS = [
  {
    q: "Do I need any prior knowledge of Swahili?",
    a: "Not at all. Lessons are tailored from absolute beginner to advanced. The first session is an assessment to understand your level and goals.",
  },
  {
    q: "How does the free trial work?",
    a: "Simply send a WhatsApp message to book your first session. The trial lesson is a full 45-minute class — no strings attached, no payment required upfront.",
  },
  {
    q: "What platform do online lessons take place on?",
    a: "Lessons are conducted via Zoom or Google Meet, whichever you prefer. All you need is a stable internet connection and a device with a camera.",
  },
  {
    q: "How long until I can hold a basic conversation?",
    a: "Most students can hold simple conversations within 4–6 weeks of consistent lessons. Children typically progress even faster.",
  },
  {
    q: "Can my whole family join the same lesson?",
    a: "Yes — group and family sessions are available at discounted rates. It's a great way to learn together and keep each other accountable.",
  },
  {
    q: "What's included in the free resources?",
    a: "Every enrolled student receives soft-copy Swahili–English translated books, grammar guides, phrase cards, and links to curated revision sites — all free.",
  },
] as const;

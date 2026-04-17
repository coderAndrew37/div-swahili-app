// components/game/gameData.ts
import {
  Coffee, BookOpen, Car, Home, TreePine,
  Croissant, Beef, Droplets, Fish, Apple,
  Bus, Bike, Map, TrainFront, Plane,
  Baby, Heart, DoorOpen, Lamp, Utensils,
  Briefcase, GraduationCap, Pen, Clock, Phone,
  Smile, Hand, Star, Sun, Moon,
} from "lucide-react";
import type { ComponentType } from "react";
import type { LucideProps } from "lucide-react";

export interface GameItem {
  id: string;
  swahili: string;
  english: string;
  hint: string;
  phonetic: string; // for audio / pronunciation guide
  Icon: ComponentType<LucideProps>;
}

export interface Level {
  id: number;           // 1 | 2 | 3
  name: string;         // "Mtoto" | "Kijana" | "Bingwa"
  label: string;        // display label
  wordCount: number;
  timeLimit: number;    // seconds
  showHints: boolean;
  showIcons: boolean;
}

export interface Pack {
  id: string;
  name: string;         // "Soko"
  emoji: string;
  theme: string;        // "Market & Food"
  description: string;
  color: string;        // accent colour for this pack
  items: GameItem[];
}

// ── Difficulty levels (shared across all packs) ──────────────────────────────
export const LEVELS: Level[] = [
  { id: 1, name: "Mtoto",  label: "Beginner",      wordCount: 5,  timeLimit: 40, showHints: true,  showIcons: true  },
  { id: 2, name: "Kijana", label: "Intermediate",  wordCount: 8,  timeLimit: 35, showHints: false, showIcons: true  },
  { id: 3, name: "Bingwa", label: "Expert",         wordCount: 10, timeLimit: 30, showHints: false, showIcons: false },
];

// ── Packs ─────────────────────────────────────────────────────────────────────
export const PACKS: Pack[] = [
  {
    id: "soko",
    name: "Soko",
    emoji: "🥘",
    theme: "Market & Food",
    description: "Navigate Nairobi's bustling market. Can you name what you see?",
    color: "#e8a045",
    items: [
      { id: "kahawa",  swahili: "Kahawa",  english: "Coffee",  hint: "a warm morning drink",   phonetic: "ka-HA-wa",  Icon: Coffee   },
      { id: "mkate",   swahili: "Mkate",   english: "Croissant",   hint: "baked from flour",        phonetic: "m-KA-teh",  Icon: Croissant    },
      { id: "nyama",   swahili: "Nyama",   english: "Meat",    hint: "protein on your plate",   phonetic: "NYAH-ma",   Icon: Beef     },
      { id: "maji",    swahili: "Maji",    english: "Water",   hint: "clear and essential",     phonetic: "MA-jee",    Icon: Droplets },
      { id: "samaki",  swahili: "Samaki",  english: "Fish",    hint: "lives in rivers & sea",   phonetic: "sa-MA-kee", Icon: Fish     },
      { id: "tunda",   swahili: "Tunda",   english: "Fruit",   hint: "sweet and colourful",     phonetic: "TOON-da",   Icon: Apple    },
      { id: "chakula", swahili: "Chakula", english: "Food",    hint: "the general word for it", phonetic: "cha-KOO-la",Icon: Utensils },
      { id: "kitabu",  swahili: "Kitabu",  english: "Book",    hint: "pages you read",          phonetic: "kee-TA-boo",Icon: BookOpen },
      { id: "mti",     swahili: "Mti",     english: "Tree",    hint: "grows tall in the ground",phonetic: "m-TEE",     Icon: TreePine },
      { id: "nyumba",  swahili: "Nyumba",  english: "House",   hint: "where you live",          phonetic: "NYOOM-ba",  Icon: Home     },
    ],
  },
  {
    id: "barabara",
    name: "Barabara",
    emoji: "🚌",
    theme: "Transport & City",
    description: "Rush hour in Nairobi. Every matatu, every turn — name it.",
    color: "#5b9cf6",
    items: [
      { id: "basi",      swahili: "Basi",      english: "Bus",       hint: "carries many people",     phonetic: "BA-see",      Icon: Bus       },
      { id: "pikipiki",  swahili: "Pikipiki",  english: "Motorbike", hint: "two wheels, fast",        phonetic: "pee-kee-PEE-kee", Icon: Bike  },
      { id: "ramani",    swahili: "Ramani",    english: "Map",       hint: "shows where to go",       phonetic: "ra-MA-nee",   Icon: Map       },
      { id: "treni",     swahili: "Treni",     english: "Train",     hint: "runs on rails",           phonetic: "TREH-nee",    Icon: TrainFront},
      { id: "ndege",     swahili: "Ndege",     english: "Aeroplane", hint: "flies above the clouds",  phonetic: "n-DEH-geh",   Icon: Plane     },
      { id: "gari",      swahili: "Gari",      english: "Car",       hint: "four wheels",             phonetic: "GA-ree",      Icon: Car       },
      { id: "saa",       swahili: "Saa",       english: "Watch/Time",hint: "tells you the hour",      phonetic: "SAA",         Icon: Clock     },
      { id: "simu",      swahili: "Simu",      english: "Phone",     hint: "you call people with it", phonetic: "SEE-moo",     Icon: Phone     },
      { id: "jua",       swahili: "Jua",       english: "Sun",       hint: "bright in the Nairobi sky",phonetic: "JOO-ah",     Icon: Sun       },
      { id: "nyota",     swahili: "Nyota",     english: "Star",      hint: "twinkles at night",       phonetic: "NYOH-ta",     Icon: Star      },
    ],
  },
  {
    id: "nyumbani",
    name: "Nyumbani",
    emoji: "🏠",
    theme: "Home & Family",
    description: "The warmth of a Kenyan household. Name everything inside.",
    color: "#3ecf8e",
    items: [
      { id: "mama",    swahili: "Mama",    english: "Mother",   hint: "she raised you",          phonetic: "MA-ma",     Icon: Heart    },
      { id: "baba",    swahili: "Baba",    english: "Father",   hint: "he raised you",           phonetic: "BA-ba",     Icon: Star     },
      { id: "mtoto",   swahili: "Mtoto",   english: "Child",    hint: "young and learning",      phonetic: "m-TOH-toh", Icon: Baby     },
      { id: "mlango",  swahili: "Mlango",  english: "Door",     hint: "open it to enter",        phonetic: "m-LAN-go",  Icon: DoorOpen },
      { id: "taa",     swahili: "Taa",     english: "Lamp",     hint: "brings light indoors",    phonetic: "TAA",       Icon: Lamp     },
      { id: "meza",    swahili: "Meza",    english: "Table",    hint: "you eat at it",           phonetic: "MEH-za",    Icon: Utensils },
      { id: "usiku",   swahili: "Usiku",   english: "Night",    hint: "when the stars come out", phonetic: "oo-SEE-koo",Icon: Moon     },
      { id: "asubuhi", swahili: "Asubuhi", english: "Morning",  hint: "the start of the day",   phonetic: "a-soo-BOO-hee", Icon: Sun  },
      { id: "moyo",    swahili: "Moyo",    english: "Heart",    hint: "beats in your chest",     phonetic: "MOH-yoh",   Icon: Heart    },
      { id: "mkono",   swahili: "Mkono",   english: "Hand",     hint: "five fingers",            phonetic: "m-KOH-noh", Icon: Hand     },
    ],
  },
  {
    id: "kazi",
    name: "Kazi",
    emoji: "💼",
    theme: "Work & School",
    description: "From classroom to boardroom. The language of ambition.",
    color: "#c084fc",
    items: [
      { id: "kazi",       swahili: "Kazi",       english: "Work",     hint: "what you do to earn",     phonetic: "KA-zee",       Icon: Briefcase     },
      { id: "shule",      swahili: "Shule",       english: "School",   hint: "where children learn",    phonetic: "SHOO-leh",     Icon: GraduationCap },
      { id: "kalamu",     swahili: "Kalamu",      english: "Pen",      hint: "you write with it",       phonetic: "ka-LA-moo",    Icon: Pen           },
      { id: "mwalimu",    swahili: "Mwalimu",     english: "Teacher",  hint: "they explain lessons",    phonetic: "mwa-LEE-moo",  Icon: GraduationCap },
      { id: "ofisi",      swahili: "Ofisi",       english: "Office",   hint: "where business happens",  phonetic: "oh-FEE-see",   Icon: Briefcase     },
      { id: "kitabu2",    swahili: "Kitabu",      english: "Book",     hint: "read to learn more",      phonetic: "kee-TA-boo",   Icon: BookOpen      },
      { id: "simu2",      swahili: "Simu",        english: "Phone",    hint: "for calls and messages",  phonetic: "SEE-moo",      Icon: Phone         },
      { id: "saa2",       swahili: "Saa",         english: "Time",     hint: "never waste it",          phonetic: "SAA",          Icon: Clock         },
      { id: "gari2",      swahili: "Gari",        english: "Car",      hint: "drive to work",           phonetic: "GA-ree",       Icon: Car           },
      { id: "nyumba2",    swahili: "Nyumba",      english: "House",    hint: "where you rest after work",phonetic: "NYOOM-ba",    Icon: Home          },
    ],
  },
  {
    id: "moyo",
    name: "Moyo",
    emoji: "❤️",
    theme: "Emotions & Greetings",
    description: "Swahili lives in feeling. The words that connect people.",
    color: "#f87171",
    items: [
      { id: "furaha",   swahili: "Furaha",   english: "Happiness", hint: "the feeling of joy",       phonetic: "foo-RA-ha",   Icon: Smile  },
      { id: "pole",     swahili: "Pole",     english: "Sorry",     hint: "said with sympathy",       phonetic: "POH-leh",     Icon: Heart  },
      { id: "asante",   swahili: "Asante",   english: "Thank you", hint: "said with gratitude",      phonetic: "a-SAN-teh",   Icon: Hand   },
      { id: "karibu",   swahili: "Karibu",   english: "Welcome",   hint: "said to a guest",          phonetic: "ka-REE-boo",  Icon: DoorOpen},
      { id: "upendo",   swahili: "Upendo",   english: "Love",      hint: "the deepest feeling",      phonetic: "oo-PEN-doh",  Icon: Heart  },
      { id: "rafiki",   swahili: "Rafiki",   english: "Friend",    hint: "someone you trust",        phonetic: "ra-FEE-kee",  Icon: Star   },
      { id: "ndoto",    swahili: "Ndoto",    english: "Dream",     hint: "what you see when asleep", phonetic: "n-DOH-toh",   Icon: Moon   },
      { id: "nguvu",    swahili: "Nguvu",    english: "Strength",  hint: "power and energy",         phonetic: "n-GOO-voo",   Icon: Star   },
      { id: "amani",    swahili: "Amani",    english: "Peace",     hint: "calm and quiet",           phonetic: "a-MA-nee",    Icon: Sun    },
      { id: "ujasiri",  swahili: "Ujasiri",  english: "Courage",   hint: "bravery in hard moments",  phonetic: "oo-ja-SEE-ree",Icon: Star  },
    ],
  },
];

// ── Result copy ───────────────────────────────────────────────────────────────
export const RESULT_COPY = {
  5: {
    swahili: "Hongera!",
    english: "Congratulations!",
    insight: (score: number, secs: number) =>
      `You matched all ${score} words in ${secs} seconds. That's genuine talent. Imagine what a full 60-minute session with Divinar unlocks — the advanced track is waiting.`,
    cta: "Explore the advanced track",
    subLabel: "Adult lessons · $40/hr · Live from Nairobi",
  },
  3: {
    swahili: "Vizuri Sana!",
    english: "Very Good!",
    insight: (score: number) =>
      `${score} matched with zero preparation — you're clearly a natural. With Divinar's Heart-to-Heart method, you'd have all of them locked in by the end of your very first lesson.`,
    cta: "Book a free trial lesson",
    subLabel: "Free 20-min trial · No commitment",
  },
  0: {
    swahili: "Bado Kidogo!",
    english: "Not quite yet!",
    insight: () =>
      `Everyone starts here — this is exactly why Divinar's lessons exist. She gets complete beginners speaking real Swahili from day one. No rote learning, no pressure.`,
    cta: "Start from scratch — free trial",
    subLabel: "Free 20-min trial · Children from $30/hr",
  },
} as const;

export function getResultTier(score: number, total: number): keyof typeof RESULT_COPY {
  const pct = score / total;
  if (pct === 1) return 5;
  if (pct >= 0.6) return 3;
  return 0;
}
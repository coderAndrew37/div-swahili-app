export interface NavLink {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface Feature {
  title: string;
  body: string;
}

export interface PricingTier {
  label: string;
  price: string;
  unit: string;
  featured: boolean;
  perks: readonly string[];
  cta: string;
}

export interface Resource {
  icon: string;
  title: string;
}

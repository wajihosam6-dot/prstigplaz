// ─── PRODUCT TYPES ───────────────────────────────────────────
export interface Product {
  id: string;
  name: string;
  category: string;
  material: string;
  price: string;
  badge?: string;
  description: string;
}

// ─── COLLECTION TYPES ────────────────────────────────────────
export interface Collection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  theme: string;
}

// ─── TESTIMONIAL TYPES ───────────────────────────────────────
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  location: string;
}

// ─── NAV LINK TYPES ──────────────────────────────────────────
export interface NavLink {
  label: string;
  href: string;
}

// ─── MATERIAL TYPES ──────────────────────────────────────────
export interface Material {
  name: string;
  color: string;
  accent: string;
}

// ─── STAT TYPES ──────────────────────────────────────────────
export interface Stat {
  number: string;
  suffix: string;
  label: string;
}

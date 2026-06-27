import type { Product, Collection, Testimonial, NavLink, Material, Stat } from "@/types";

export const NAV_LINKS: NavLink[] = [
  { label: "Collections", href: "#collections" },
  { label: "Products", href: "#products" },
  { label: "Craftsmanship", href: "#craft" },
  { label: "Experience", href: "#experience" },
  { label: "Visit Us", href: "#location" },
];

export const COLLECTIONS: Collection[] = [
  {
    id: "living",
    number: "01",
    title: "The Living Room Edit",
    subtitle: "Seating & Occasional",
    description:
      "Sofas, armchairs, and coffee tables designed to anchor your most-lived-in space with enduring elegance.",
    theme: "Living Room",
  },
  {
    id: "bedroom",
    number: "02",
    title: "The Bedroom Sanctuary",
    subtitle: "Beds & Storage",
    description:
      "Beds, wardrobes, and bedside companions crafted for restorative rest and morning rituals.",
    theme: "Bedroom",
  },
  {
    id: "dining",
    number: "03",
    title: "The Dining Experience",
    subtitle: "Tables & Chairs",
    description:
      "Tables, chairs, and sideboards that transform every meal into a ceremony worth savouring.",
    theme: "Dining",
  },
  {
    id: "office",
    number: "04",
    title: "The Home Office",
    subtitle: "Desks & Shelving",
    description:
      "Desks and shelving systems where productivity meets the aesthetics of intentional living.",
    theme: "Office",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "arco-lounge",
    name: "Arco Lounge Chair",
    category: "Seating",
    material: "Italian Leather · Walnut Frame",
    price: "from $3,840",
    badge: "New Arrival",
    description: "A masterwork of Italian tanning and Canadian joinery.",
  },
  {
    id: "onda-table",
    name: "Onda Centre Table",
    category: "Tables",
    material: "Calacatta Marble · Brushed Brass",
    price: "from $5,200",
    description: "Wave-form marble slab on hand-finished brass supports.",
  },
  {
    id: "sereno-sofa",
    name: "Sereno 3-Seat Sofa",
    category: "Sofas",
    material: "Bouclé Fabric · White Oak Frame",
    price: "from $8,900",
    description: "Deep-cushioned, cloud-like comfort in artisan bouclé.",
  },
  {
    id: "aurelio-lamp",
    name: "Aurelio Floor Lamp",
    category: "Lighting",
    material: "Brushed Brass · Belgian Linen",
    price: "from $1,450",
    badge: "Bestseller",
    description: "Sculptural brass stem with a hand-stitched linen shade.",
  },
  {
    id: "alba-bed",
    name: "Alba Platform Bed",
    category: "Bedroom",
    material: "Smoked Oak · Velvet Headboard",
    price: "from $6,200",
    description: "Low-profile elegance with a channel-tufted velvet headboard.",
  },
  {
    id: "forma-shelf",
    name: "Forma Shelving Unit",
    category: "Storage",
    material: "Solid Walnut · Black Steel",
    price: "from $3,100",
    description: "Modular shelving where function meets architectural form.",
  },
  {
    id: "rondo-dining",
    name: "Rondo Dining Table",
    category: "Dining",
    material: "Travertine Top · Bronze Frame",
    price: "from $9,500",
    description: "A centrepiece for gatherings — ancient stone, modern soul.",
  },
  {
    id: "petra-chair",
    name: "Petra Dining Chair",
    category: "Dining",
    material: "Full-Grain Leather · Beech",
    price: "from $890 each",
    description: "Architectural silhouette in handstitched saddle leather.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Prestige Plaza transformed our home into something beyond what we imagined. The craftsmanship is extraordinary — every piece feels like it was made specifically for us.",
    author: "Alexandra Fontaine",
    role: "Interior Designer",
    location: "Toronto, ON",
  },
  {
    id: "t2",
    quote:
      "The attention to detail is unlike anything I've encountered. Our dining set is the centrepiece of our home and a constant conversation starter among guests.",
    author: "James & Priya Mehta",
    role: "Homeowners",
    location: "North York, ON",
  },
  {
    id: "t3",
    quote:
      "From consultation to white-glove delivery, the experience was flawless. Their team understood our vision immediately and elevated it in ways we never anticipated.",
    author: "Sophie Tremblay",
    role: "Principal Architect",
    location: "Yorkville, Toronto",
  },
  {
    id: "t4",
    quote:
      "I specify Prestige Plaza exclusively for my most discerning clients. The quality and service are simply without peer in this city.",
    author: "Marcus Chen",
    role: "Interior Architect",
    location: "King West, Toronto",
  },
];

export const MATERIALS: Material[] = [
  { name: "Hardwood", color: "#3D2B1A", accent: "#6B4C2E" },
  { name: "Leather", color: "#2A1F18", accent: "#4A3020" },
  { name: "Marble", color: "#1A1E22", accent: "#2A3040" },
  { name: "Fabric", color: "#20201A", accent: "#35352A" },
  { name: "Brass", color: "#1E1A10", accent: "#3A3018" },
  { name: "Glass", color: "#141C20", accent: "#203040" },
];

export const STATS: Stat[] = [
  { number: "20", suffix: "+", label: "Years of Excellence" },
  { number: "500", suffix: "+", label: "Curated Pieces" },
  { number: "12", suffix: "K", label: "Happy Homes" },
];

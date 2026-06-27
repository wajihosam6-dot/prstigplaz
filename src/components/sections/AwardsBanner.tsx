"use client";

import { motion } from "framer-motion";

const AWARDS = [
  { name: "Architectural Digest", note: "Best Furniture Store 2023" },
  { name: "Azure Magazine", note: "Design Excellence Award" },
  { name: "Toronto Life", note: "Best of the City" },
  { name: "House & Home", note: "Top Luxury Retailer" },
  { name: "Canadian Interiors", note: "Industry Leader 2024" },
];

export default function AwardsBanner() {
  const doubled = [...AWARDS, ...AWARDS];

  return (
    <section
      className="relative py-8 overflow-hidden"
      style={{
        background: "var(--prestige-graphite)",
        borderTop: "1px solid rgba(201,169,110,0.08)",
        borderBottom: "1px solid rgba(201,169,110,0.08)",
      }}
    >
      <div className="container-luxury mb-6">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold opacity-15" />
          <span className="label-sm text-prestige-warm/35">As Featured In</span>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold opacity-15" />
        </motion.div>
      </div>

      {/* Scrolling logos */}
      <div
        className="flex gap-16 whitespace-nowrap overflow-hidden"
        aria-label="Press features"
      >
        <div
          className="flex gap-16 flex-shrink-0"
          style={{ animation: "marquee 30s linear infinite" }}
        >
          {doubled.map((a, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-1 flex-shrink-0 px-4 group"
            >
              <span
                className="font-serif text-[1rem] font-light transition-colors duration-300
                           text-prestige-warm/25 group-hover:text-gold/60"
                style={{ letterSpacing: "0.05em" }}
              >
                {a.name}
              </span>
              <span className="label-sm text-prestige-warm/15 group-hover:text-gold/30 transition-colors duration-300">
                {a.note}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { COLLECTIONS } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

export default function CollectionsSection() {
  return (
    <section
      id="collections"
      className="relative py-[var(--section-padding)]"
      style={{ background: "var(--prestige-graphite)" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-1 pointer-events-none"
        style={{
          background: "linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent)",
        }}
      />

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16"
        >
          <motion.h2
            variants={fadeUpVariants}
            custom={0}
            className="text-display-lg text-prestige-white"
          >
            Curated
            <br />
            <em className="italic text-gold-light">Collections</em>
          </motion.h2>
          <motion.div variants={fadeUpVariants} custom={0.15}>
            <button className="btn-luxury-ghost">All Collections</button>
          </motion.div>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-px bg-prestige-dark/60">
          {COLLECTIONS.map((col, i) => (
            <CollectionCard key={col.id} collection={col} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({
  collection,
  index,
}: {
  collection: (typeof COLLECTIONS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  const heights = [620, 560, 600, 540];

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 1,
        delay: index * 0.12,
        ease: [0.76, 0, 0.24, 1],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative overflow-hidden group"
      style={{ height: heights[index] || 560, background: "var(--prestige-dark)" }}
    >
      {/* Room illustration */}
      <div
        className="absolute inset-0 transition-transform duration-[900ms] ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
      >
        <CollectionRoomArt id={collection.id} />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0 transition-opacity duration-600 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(10,9,8,0.96) 0%, rgba(10,9,8,0.3) 55%, transparent 100%)",
          opacity: hovered ? 0.85 : 1,
        }}
      />

      {/* Gold top line — appears on hover */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-gold transition-opacity duration-500"
        style={{ opacity: hovered ? 0.6 : 0 }}
      />

      {/* Card info */}
      <div
        className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ transform: hovered ? "translateY(0)" : "translateY(12px)" }}
      >
        {/* Number */}
        <div
          className="absolute top-8 right-8 font-serif text-[4rem] font-light leading-none pointer-events-none"
          style={{
            color: "rgba(201,169,110,0.07)",
            transition: "opacity 0.4s",
            opacity: hovered ? 0 : 1,
          }}
        >
          {collection.number}
        </div>

        <div className="label-sm text-gold mb-3">
          Collection {collection.number}
        </div>
        <h3 className="font-serif text-[1.8rem] font-light text-prestige-white leading-tight mb-3">
          {collection.title}
        </h3>
        <div
          className="label-sm text-prestige-warm/50 mb-4 transition-all duration-500"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          {collection.subtitle}
        </div>
        <p
          className="text-[0.78rem] leading-[1.75] text-prestige-warm/70 mb-6 max-h-0 overflow-hidden transition-all duration-600"
          style={{
            maxHeight: hovered ? "80px" : "0",
            opacity: hovered ? 1 : 0,
          }}
        >
          {collection.description}
        </p>

        {/* Gold underline */}
        <div
          className="h-px bg-gold transition-all duration-600 ease-[cubic-bezier(0.76,0,0.24,1)]"
          style={{ width: hovered ? "56px" : "0px" }}
        />
      </div>
    </motion.div>
  );
}

/* ── Per-collection room art ── */
function CollectionRoomArt({ id }: { id: string }) {
  const arts: Record<string, React.ReactNode> = {
    living: (
      <svg viewBox="0 0 400 620" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="400" height="620" fill="#1A1816" />
        <rect x="0" y="370" width="400" height="250" fill="#141210" />
        {/* Sofa */}
        <rect x="30" y="300" width="340" height="75" rx="5" fill="#252220" stroke="#C9A96E" strokeWidth="0.5" />
        <rect x="30" y="268" width="340" height="38" rx="5" fill="#2E2825" stroke="#C9A96E" strokeWidth="0.5" />
        <rect x="30" y="264" width="24" height="90" rx="4" fill="#252220" stroke="#C9A96E" strokeWidth="0.5" />
        <rect x="346" y="264" width="24" height="90" rx="4" fill="#252220" stroke="#C9A96E" strokeWidth="0.5" />
        <rect x="52" y="276" width="90" height="28" rx="3" fill="#332D28" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="155" y="276" width="90" height="28" rx="3" fill="#332D28" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="258" y="276" width="90" height="28" rx="3" fill="#332D28" stroke="#C9A96E" strokeWidth="0.4" />
        {/* Coffee table */}
        <rect x="130" y="372" width="140" height="12" rx="2" fill="#181614" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="370" y1="370" x2="370" y2="620" stroke="#C9A96E" strokeWidth="0.3" opacity="0.12" />
        {/* Rug */}
        <ellipse cx="200" cy="390" rx="140" ry="16" fill="#1C1910" opacity="0.5" stroke="#C9A96E" strokeWidth="0.4" />
        {/* Wall light */}
        <line x1="200" y1="0" x2="200" y2="260" stroke="#C9A96E" strokeWidth="0.4" opacity="0.1" />
        <radialGradient id="wl1" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="0" rx="150" ry="200" fill="url(#wl1)" />
      </svg>
    ),
    bedroom: (
      <svg viewBox="0 0 400 560" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="400" height="560" fill="#161412" />
        <rect x="0" y="400" width="400" height="160" fill="#121008" />
        {/* Bed */}
        <rect x="50" y="250" width="300" height="155" rx="4" fill="#222018" stroke="#C9A96E" strokeWidth="0.5" />
        <rect x="50" y="200" width="300" height="58" rx="5" fill="#1C1A16" stroke="#C9A96E" strokeWidth="0.6" />
        {/* Pillows */}
        <rect x="80" y="208" width="75" height="46" rx="3" fill="#2A2820" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="245" y="208" width="75" height="46" rx="3" fill="#2A2820" stroke="#C9A96E" strokeWidth="0.4" />
        {/* Nightstands */}
        <rect x="14" y="295" width="42" height="70" rx="2" fill="#1C1A16" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="344" y="295" width="42" height="70" rx="2" fill="#1C1A16" stroke="#C9A96E" strokeWidth="0.4" />
        {/* Lamp glow */}
        <radialGradient id="bl1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="35" cy="280" rx="40" ry="30" fill="url(#bl1)" />
        <ellipse cx="365" cy="280" rx="40" ry="30" fill="url(#bl1)" />
        {/* Floor line */}
        <line x1="0" y1="400" x2="400" y2="400" stroke="#C9A96E" strokeWidth="0.3" opacity="0.15" />
      </svg>
    ),
    dining: (
      <svg viewBox="0 0 400 600" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="400" height="600" fill="#141210" />
        <rect x="0" y="430" width="400" height="170" fill="#0E0C0A" />
        {/* Table */}
        <rect x="80" y="240" width="240" height="120" rx="4" fill="#1C1916" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="80" y1="300" x2="320" y2="300" stroke="#C9A96E" strokeWidth="0.3" opacity="0.2" />
        {/* Chairs — top */}
        <rect x="95" y="188" width="55" height="58" rx="3" fill="#222018" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="173" y="188" width="55" height="58" rx="3" fill="#222018" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="251" y="188" width="55" height="58" rx="3" fill="#222018" stroke="#C9A96E" strokeWidth="0.4" />
        {/* Chairs — bottom */}
        <rect x="95" y="360" width="55" height="58" rx="3" fill="#222018" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="173" y="360" width="55" height="58" rx="3" fill="#222018" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="251" y="360" width="55" height="58" rx="3" fill="#222018" stroke="#C9A96E" strokeWidth="0.4" />
        {/* Pendant */}
        <line x1="200" y1="0" x2="200" y2="180" stroke="#C9A96E" strokeWidth="0.6" opacity="0.35" />
        <ellipse cx="200" cy="188" rx="26" ry="8" fill="#C9A96E" opacity="0.12" stroke="#C9A96E" strokeWidth="0.5" />
        <radialGradient id="dg1" cx="50%" cy="0%" r="100%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.14" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="188" rx="130" ry="110" fill="url(#dg1)" />
      </svg>
    ),
    office: (
      <svg viewBox="0 0 400 540" fill="none" className="w-full h-full" aria-hidden="true">
        <rect width="400" height="540" fill="#161412" />
        <rect x="0" y="390" width="400" height="150" fill="#0E0C0A" />
        {/* Desk */}
        <rect x="40" y="290" width="320" height="15" rx="2" fill="#1C1916" stroke="#C9A96E" strokeWidth="0.5" />
        <line x1="60" y1="305" x2="55" y2="390" stroke="#C9A96E" strokeWidth="1" opacity="0.4" />
        <line x1="340" y1="305" x2="345" y2="390" stroke="#C9A96E" strokeWidth="1" opacity="0.4" />
        {/* Monitor */}
        <rect x="155" y="215" width="90" height="72" rx="3" fill="#141210" stroke="#C9A96E" strokeWidth="0.5" />
        <rect x="163" y="222" width="74" height="58" rx="1" fill="#0C1018" stroke="#C9A96E" strokeWidth="0.3" opacity="0.5" />
        <line x1="200" y1="287" x2="200" y2="295" stroke="#C9A96E" strokeWidth="0.8" opacity="0.4" />
        <rect x="185" y="294" width="30" height="3" rx="1" fill="#181614" stroke="#C9A96E" strokeWidth="0.4" />
        {/* Chair */}
        <rect x="165" y="320" width="70" height="50" rx="3" fill="#1E1C18" stroke="#C9A96E" strokeWidth="0.4" />
        <rect x="170" y="295" width="60" height="30" rx="3" fill="#222018" stroke="#C9A96E" strokeWidth="0.4" />
        {/* Bookshelf */}
        <rect x="330" y="80" width="60" height="210" rx="2" fill="#1A1816" stroke="#C9A96E" strokeWidth="0.4" />
        {[0, 1, 2, 3].map((r) => (
          <line key={r} x1="330" y1={128 + r * 50} x2="390" y2={128 + r * 50} stroke="#C9A96E" strokeWidth="0.3" opacity="0.2" />
        ))}
        {/* Ambient light */}
        <radialGradient id="og1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
        <ellipse cx="200" cy="250" rx="120" ry="100" fill="url(#og1)" />
      </svg>
    ),
  };

  return (
    <div className="w-full h-full">
      {arts[id] || arts["living"]}
    </div>
  );
}

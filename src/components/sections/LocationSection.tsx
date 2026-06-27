"use client";

import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

const details = [
  {
    icon: "◆",
    label: "Address",
    content: "Prestige Plaza Furniture\nToronto, Ontario, Canada",
  },
  {
    icon: "◆",
    label: "Showroom Hours",
    content: "Mon – Fri: 10:00 AM – 7:00 PM\nSat – Sun: 11:00 AM – 6:00 PM",
  },
  {
    icon: "◆",
    label: "Private Consultations",
    content: "Available by appointment\nIn-showroom or at your home",
  },
  {
    icon: "◆",
    label: "Contact",
    content: "info@prestigeplaza.ca\n+1 (416) 555-0192",
  },
];

export default function LocationSection() {
  return (
    <section
      id="location"
      className="relative py-[var(--section-padding)] overflow-hidden"
      style={{ background: "var(--prestige-graphite)" }}
    >
      {/* Top line */}
      <div className="gold-line-h absolute top-0 left-[var(--gutter)] right-[var(--gutter)] opacity-15" />

      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-start">
          {/* Left — info */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.div
              variants={fadeUpVariants}
              custom={0}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="label-sm text-gold">Visit Us</span>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              custom={0.08}
              className="text-display-md text-prestige-white mb-6"
            >
              Visit Our
              <br />
              <em className="italic text-gold-light">Showroom</em>
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              custom={0.16}
              className="text-[0.86rem] leading-[1.9] text-prestige-warm/65 mb-10 max-w-[440px]"
            >
              Experience our full collections in person at our Toronto showroom.
              Our design consultants are ready to guide you through every piece
              and help you curate your perfect space.
            </motion.p>

            {/* Details */}
            <div className="space-y-7">
              {details.map((d, i) => (
                <motion.div
                  key={d.label}
                  variants={fadeUpVariants}
                  custom={0.2 + i * 0.08}
                  className="flex items-start gap-4"
                >
                  <span className="text-gold text-[0.5rem] mt-[6px] flex-shrink-0">
                    {d.icon}
                  </span>
                  <div>
                    <div className="label-sm text-prestige-white mb-1">{d.label}</div>
                    <div className="text-[0.8rem] leading-[1.8] text-prestige-warm/60 whitespace-pre-line">
                      {d.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div variants={fadeUpVariants} custom={0.55} className="mt-10">
              <a
                href="https://maps.app.goo.gl/Prjgb5z2F24gLqck7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-luxury-outline inline-block"
              >
                Get Directions
              </a>
            </motion.div>
          </motion.div>

          {/* Right — luxury map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.25 }}
          >
            <LuxuryMap />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LuxuryMap() {
  return (
    <div
      className="relative overflow-hidden border"
      style={{
        height: "clamp(380px,45vw,520px)",
        borderColor: "rgba(201,169,110,0.14)",
        background: "var(--prestige-black)",
      }}
    >
      {/* Top label bar */}
      <div className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-5 py-3 border-b"
        style={{ borderColor: "rgba(201,169,110,0.1)", background: "rgba(10,9,8,0.8)" }}>
        <span className="label-sm text-gold">Toronto, Ontario</span>
        <span className="label-sm text-prestige-warm/40">Showroom Location</span>
      </div>

      <svg
        viewBox="0 0 560 480"
        fill="none"
        className="w-full h-full"
        aria-label="Prestige Plaza Furniture — Toronto showroom location map"
      >
        {/* Background */}
        <rect width="560" height="480" fill="#0A0908" />

        {/* Grid */}
        {[1, 2, 3, 4, 5, 6].map((r) => (
          <line key={`h${r}`} x1="0" y1={r * 80} x2="560" y2={r * 80}
            stroke="#C9A96E" strokeWidth="0.3" opacity="0.1" />
        ))}
        {[1, 2, 3, 4, 5, 6].map((c) => (
          <line key={`v${c}`} x1={c * 80} y1="0" x2={c * 80} y2="480"
            stroke="#C9A96E" strokeWidth="0.3" opacity="0.1" />
        ))}

        {/* Main roads */}
        <line x1="0" y1="240" x2="560" y2="240" stroke="#C9A96E" strokeWidth="0.9" opacity="0.2" />
        <line x1="280" y1="0" x2="280" y2="480" stroke="#C9A96E" strokeWidth="0.9" opacity="0.2" />
        <line x1="0" y1="160" x2="560" y2="160" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <line x1="0" y1="320" x2="560" y2="320" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <line x1="160" y1="0" x2="160" y2="480" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />
        <line x1="400" y1="0" x2="400" y2="480" stroke="#C9A96E" strokeWidth="0.5" opacity="0.12" />

        {/* City blocks */}
        {[
          [90, 90, 60, 45],
          [170, 85, 45, 55],
          [90, 175, 55, 35],
          [330, 85, 55, 65],
          [310, 175, 70, 40],
          [90, 275, 65, 35],
          [170, 265, 40, 55],
          [330, 265, 60, 40],
          [410, 175, 55, 55],
          [410, 270, 45, 60],
        ].map(([x, y, w, h], i) => (
          <rect key={i} x={x} y={y} width={w} height={h}
            fill="#1C1A18" opacity="0.7" />
        ))}

        {/* Glow area around pin */}
        <defs>
          <radialGradient id="mapGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="280" cy="240" r="80" fill="url(#mapGlow)" />

        {/* Pin rings */}
        <circle cx="280" cy="240" r="40" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.15" />
        <circle cx="280" cy="240" r="60" stroke="#C9A96E" strokeWidth="0.3" fill="none" opacity="0.08" />

        {/* Pin dot — animated */}
        <circle cx="280" cy="240" r="7" fill="#C9A96E">
          <animate attributeName="r" values="7;14;7" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="opacity" values="1;0;1" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="280" cy="240" r="5" fill="#C9A96E" />
        <circle cx="280" cy="240" r="2" fill="#0A0908" />

        {/* Tooltip */}
        <rect x="198" y="195" width="164" height="40" rx="2" fill="#0A0908"
          stroke="#C9A96E" strokeWidth="0.6" opacity="0.96" />
        <text x="280" y="212" textAnchor="middle" fill="#C9A96E"
          fontSize="9" fontFamily="Jost,sans-serif" letterSpacing="0.18em" opacity="0.9">
          PRESTIGE PLAZA
        </text>
        <text x="280" y="226" textAnchor="middle" fill="#B8B0A2"
          fontSize="7" fontFamily="Jost,sans-serif" letterSpacing="0.12em" opacity="0.6">
          FURNITURE · TORONTO
        </text>

        {/* Compass */}
        <text x="528" y="48" textAnchor="middle" fill="#C9A96E"
          fontSize="10" fontFamily="Jost,sans-serif" opacity="0.35" letterSpacing="0.1em">
          N
        </text>
        <line x1="528" y1="52" x2="528" y2="70" stroke="#C9A96E" strokeWidth="0.5" opacity="0.2" />
      </svg>

      {/* Bottom overlay */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
        style={{
          background: "linear-gradient(to top, var(--prestige-black), transparent)",
        }}
      />
    </div>
  );
}

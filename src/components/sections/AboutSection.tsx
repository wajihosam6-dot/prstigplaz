"use client";

import { motion } from "framer-motion";
import { STATS } from "@/lib/data";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative py-[var(--section-padding)] overflow-hidden"
      style={{ background: "var(--prestige-black)" }}
    >
      {/* Ambient top glow */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(201,169,110,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="container-luxury">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Left — text */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Label */}
            <motion.div
              variants={fadeUpVariants}
              custom={0}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-8 bg-gold" />
              <span className="label-sm text-gold">Our Philosophy</span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={fadeUpVariants}
              custom={0.1}
              className="text-display-md text-prestige-white mb-6 leading-tight"
            >
              Where Every Piece
              <br />
              Tells a{" "}
              <em className="font-serif italic text-gold-light">Story</em>
            </motion.h2>

            {/* Body */}
            <motion.p
              variants={fadeUpVariants}
              custom={0.2}
              className="text-[0.88rem] leading-[1.9] text-prestige-warm mb-5 max-w-[500px]"
            >
              Prestige Plaza Furniture was born from a singular conviction: that
              the spaces we inhabit shape the lives we lead. Each piece in our
              collection is a collaboration between master craftspeople and
              visionary designers, resulting in furniture that transcends trend.
            </motion.p>

            <motion.p
              variants={fadeUpVariants}
              custom={0.25}
              className="text-[0.88rem] leading-[1.9] text-prestige-warm/70 max-w-[500px]"
            >
              We source only the finest materials — sustainably harvested woods,
              full-grain leathers, hand-woven textiles — and entrust them to
              artisans who have dedicated their lives to their craft.
            </motion.p>

            {/* Divider */}
            <motion.div
              variants={fadeUpVariants}
              custom={0.3}
              className="gold-line-h w-full my-10 opacity-20"
            />

            {/* Stats */}
            <motion.div
              variants={staggerContainerVariants}
              className="grid grid-cols-3 gap-6"
            >
              {STATS.map((stat, i) => (
                <motion.div key={stat.label} variants={fadeUpVariants} custom={0.35 + i * 0.08}>
                  <div className="font-serif text-[2.8rem] font-light text-prestige-white leading-none mb-2">
                    {stat.number}
                    <span className="text-gold text-[1.4rem]">{stat.suffix}</span>
                  </div>
                  <div className="label-sm text-prestige-warm/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — visual */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div
              className="relative h-[580px] overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, var(--prestige-graphite), var(--prestige-dark))",
              }}
            >
              {/* Room SVG illustration */}
              <RoomIllustration />

              {/* Gold accent bar */}
              <div
                className="absolute top-12 -right-3 w-[3px] h-48 gold-line-v opacity-60"
              />
              <div
                className="absolute bottom-12 -left-3 w-[3px] h-32 gold-line-v opacity-40"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="absolute -bottom-6 -left-6 glass px-6 py-5"
            >
              <div className="label-sm text-gold mb-1">Since 2004</div>
              <div className="font-serif text-xl text-prestige-white font-light">
                Toronto&apos;s Premier
              </div>
              <div className="label-sm text-prestige-warm/60 mt-1">
                Luxury Furniture Destination
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function RoomIllustration() {
  return (
    <svg
      viewBox="0 0 500 580"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      {/* Definitions */}
      <defs>
        <radialGradient id="lampGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="windowLight" cx="50%" cy="100%" r="100%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.06" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="wallGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1C1A18" />
          <stop offset="100%" stopColor="#141210" />
        </linearGradient>
      </defs>

      {/* Wall */}
      <rect width="500" height="580" fill="url(#wallGrad)" />
      {/* Floor */}
      <rect x="0" y="430" width="500" height="150" fill="#1A1714" />
      {/* Wall panel */}
      <rect x="30" y="30" width="440" height="400" stroke="#C9A96E" strokeWidth="0.4" fill="none" opacity="0.15" />
      <rect x="50" y="50" width="400" height="360" stroke="#C9A96E" strokeWidth="0.3" fill="none" opacity="0.08" />

      {/* Window */}
      <rect x="170" y="55" width="160" height="200" fill="url(#windowLight)" />
      <rect x="170" y="55" width="160" height="200" stroke="#C9A96E" strokeWidth="0.8" fill="none" opacity="0.25" />
      <line x1="250" y1="55" x2="250" y2="255" stroke="#C9A96E" strokeWidth="0.5" opacity="0.2" />
      <line x1="170" y1="155" x2="330" y2="155" stroke="#C9A96E" strokeWidth="0.5" opacity="0.2" />
      {/* Window glow on floor */}
      <polygon points="170,255 330,255 380,430 120,430" fill="#C9A96E" opacity="0.012" />

      {/* Sofa */}
      <rect x="70" y="345" width="360" height="85" rx="5" fill="#252220" stroke="#C9A96E" strokeWidth="0.6" opacity="0.9" />
      <rect x="70" y="308" width="360" height="45" rx="5" fill="#2E2825" stroke="#C9A96E" strokeWidth="0.6" opacity="0.9" />
      <rect x="70" y="302" width="28" height="100" rx="4" fill="#252220" stroke="#C9A96E" strokeWidth="0.5" />
      <rect x="402" y="302" width="28" height="100" rx="4" fill="#252220" stroke="#C9A96E" strokeWidth="0.5" />
      {/* Cushions */}
      <rect x="90" y="316" width="100" height="32" rx="3" fill="#332D28" stroke="#C9A96E" strokeWidth="0.5" opacity="0.9" />
      <rect x="200" y="316" width="100" height="32" rx="3" fill="#332D28" stroke="#C9A96E" strokeWidth="0.5" opacity="0.9" />
      <rect x="310" y="316" width="100" height="32" rx="3" fill="#332D28" stroke="#C9A96E" strokeWidth="0.5" opacity="0.9" />
      {/* Sofa legs */}
      <line x1="95" y1="430" x2="88" y2="458" stroke="#C9A96E" strokeWidth="1" opacity="0.4" />
      <line x1="405" y1="430" x2="412" y2="458" stroke="#C9A96E" strokeWidth="1" opacity="0.4" />

      {/* Coffee table */}
      <rect x="155" y="408" width="190" height="16" rx="2" fill="#181612" stroke="#C9A96E" strokeWidth="0.6" />
      <line x1="173" y1="424" x2="168" y2="450" stroke="#C9A96E" strokeWidth="1" opacity="0.35" />
      <line x1="327" y1="424" x2="332" y2="450" stroke="#C9A96E" strokeWidth="1" opacity="0.35" />
      {/* Table objects */}
      <rect x="195" y="394" width="50" height="14" rx="1" fill="#1E1C18" stroke="#C9A96E" strokeWidth="0.4" opacity="0.7" />
      <circle cx="310" cy="402" r="10" fill="#1A1814" stroke="#C9A96E" strokeWidth="0.4" opacity="0.7" />

      {/* Floor lamp */}
      <line x1="420" y1="180" x2="420" y2="430" stroke="#C9A96E" strokeWidth="1.2" opacity="0.55" />
      <ellipse cx="420" cy="185" rx="28" ry="8" fill="#C9A96E" opacity="0.1" stroke="#C9A96E" strokeWidth="0.6" />
      <path d="M396 185 L400 212 L440 212 L444 185" fill="#1E1C18" stroke="#C9A96E" strokeWidth="0.6" fill-opacity="0.8" />
      {/* Lamp glow */}
      <ellipse cx="420" cy="300" rx="90" ry="130" fill="url(#lampGlow)" />

      {/* Rug */}
      <ellipse cx="250" cy="448" rx="155" ry="18" fill="#1E1B15" stroke="#C9A96E" strokeWidth="0.5" opacity="0.5" />
      <ellipse cx="250" cy="448" rx="130" ry="14" fill="none" stroke="#C9A96E" strokeWidth="0.3" opacity="0.2" />

      {/* Wall art */}
      <rect x="205" y="85" width="90" height="64" fill="none" stroke="#C9A96E" strokeWidth="0.5" opacity="0.2" />
      <rect x="214" y="94" width="72" height="46" fill="none" stroke="#C9A96E" strokeWidth="0.3" opacity="0.12" />

      {/* Floor line */}
      <line x1="0" y1="430" x2="500" y2="430" stroke="#C9A96E" strokeWidth="0.4" opacity="0.18" />
    </svg>
  );
}

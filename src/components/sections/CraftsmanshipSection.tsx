"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MATERIALS } from "@/lib/data";

export default function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headlineY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const subY = useTransform(scrollYProgress, [0, 1], [60, -30]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.05, 1]);

  return (
    <section
      id="craft"
      ref={sectionRef}
      className="relative py-[var(--section-padding)] overflow-hidden text-center"
      style={{
        background:
          "linear-gradient(to bottom, var(--prestige-graphite), var(--prestige-dark) 50%, var(--prestige-graphite))",
      }}
    >
      {/* Parallax ambient bg */}
      <motion.div
        style={{ scale: bgScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(201,169,110,0.07) 0%, transparent 60%)," +
              "radial-gradient(ellipse at 20% 80%, rgba(201,169,110,0.04) 0%, transparent 50%)",
          }}
        />
      </motion.div>

      {/* Top gold line */}
      <div className="gold-line-h absolute top-0 left-[var(--gutter)] right-[var(--gutter)] opacity-20" />

      <div className="container-luxury relative z-10">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
          <span className="label-sm text-gold">The Prestige Standard</span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Main headline */}
        <motion.div style={{ y: headlineY }}>
          <h2 className="text-display-xl text-prestige-white pointer-events-none select-none">
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
              className="block"
            >
              The Art
            </motion.span>
            <motion.em
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.12, ease: [0.76, 0, 0.24, 1] }}
              className="block italic text-gold-light"
            >
              of Making
            </motion.em>
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.24, ease: [0.76, 0, 0.24, 1] }}
              className="block text-prestige-white/20"
              style={{ fontSize: "0.55em" }}
            >
              Since 2004
            </motion.span>
          </h2>
        </motion.div>

        {/* Sub */}
        <motion.p
          style={{ y: subY }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-[0.82rem] leading-[2] text-prestige-warm/60 max-w-[640px]
                     mx-auto mt-12 tracking-wide"
        >
          Every joint, every curve, every grain of wood is considered with
          intentionality. Our craftspeople bring decades of training to each
          commission, resulting in furniture built to outlast generations and
          grow more beautiful with time.
        </motion.p>

        {/* Materials row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 mt-20"
        >
          {MATERIALS.map((mat, i) => (
            <MaterialItem key={mat.name} material={mat} index={i} />
          ))}
        </motion.div>

        {/* Large decorative text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden="true"
        >
          <span
            className="font-serif font-light whitespace-nowrap"
            style={{
              fontSize: "clamp(5rem,22vw,18rem)",
              color: "rgba(201,169,110,0.022)",
              letterSpacing: "-0.04em",
              lineHeight: 1,
            }}
          >
            Prestige
          </span>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="gold-line-h absolute bottom-0 left-[var(--gutter)] right-[var(--gutter)] opacity-20" />
    </section>
  );
}

function MaterialItem({
  material,
  index,
}: {
  material: (typeof MATERIALS)[0];
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.55 + index * 0.08 }}
      whileHover={{ y: -10 }}
      className="flex flex-col items-center gap-4 group"
    >
      {/* Circle */}
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center relative overflow-hidden
                   border transition-all duration-500 group-hover:border-gold"
        style={{
          background: `linear-gradient(135deg, ${material.color}, ${material.accent})`,
          borderColor: "rgba(201,169,110,0.25)",
        }}
      >
        <MaterialIcon name={material.name} />

        {/* Hover ring */}
        <div
          className="absolute inset-0 rounded-full border-2 border-gold/0 transition-all duration-500
                     group-hover:border-gold/30 group-hover:scale-110"
        />
      </div>

      <span
        className="label-sm text-prestige-warm/55 transition-colors duration-300
                   group-hover:text-gold"
      >
        {material.name}
      </span>
    </motion.div>
  );
}

function MaterialIcon({ name }: { name: string }) {
  const icons: Record<string, React.ReactNode> = {
    Hardwood: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M5 31 Q18 6 31 31" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.65" />
        <line x1="5" y1="31" x2="31" y2="31" stroke="#C9A96E" strokeWidth="0.5" opacity="0.3" />
        <path d="M10 27 Q18 14 26 27" stroke="#C9A96E" strokeWidth="0.6" fill="none" opacity="0.35" />
      </svg>
    ),
    Leather: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <rect x="7" y="9" width="22" height="18" rx="2" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.7" />
        <line x1="7" y1="15" x2="29" y2="15" stroke="#C9A96E" strokeWidth="0.5" opacity="0.35" />
        <line x1="7" y1="21" x2="29" y2="21" stroke="#C9A96E" strokeWidth="0.5" opacity="0.35" />
      </svg>
    ),
    Marble: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <path d="M7 13 Q18 5 29 13 Q18 22 7 13" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.65" />
        <path d="M7 20 Q18 12 29 20 Q18 28 7 20" stroke="#C9A96E" strokeWidth="0.6" fill="none" opacity="0.35" />
      </svg>
    ),
    Fabric: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        {[0, 1, 2, 3, 4].map((r) => (
          <line key={r} x1="9" y1={9 + r * 5} x2="27" y2={9 + r * 5} stroke="#C9A96E" strokeWidth={r % 2 === 0 ? 0.9 : 0.4} opacity={r % 2 === 0 ? 0.55 : 0.25} />
        ))}
        {[0, 1, 2, 3].map((c) => (
          <line key={c} x1={11 + c * 5} y1="7" x2={11 + c * 5} y2="29" stroke="#C9A96E" strokeWidth="0.4" opacity="0.18" />
        ))}
      </svg>
    ),
    Brass: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <circle cx="18" cy="18" r="11" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.65" />
        <circle cx="18" cy="18" r="5" stroke="#C9A96E" strokeWidth="0.6" fill="none" opacity="0.4" />
        <circle cx="18" cy="18" r="2" fill="#C9A96E" opacity="0.5" />
      </svg>
    ),
    Glass: (
      <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
        <polygon points="18,7 29,27 7,27" stroke="#C9A96E" strokeWidth="1" fill="none" opacity="0.6" />
        <line x1="13" y1="20" x2="23" y2="20" stroke="#C9A96E" strokeWidth="0.5" opacity="0.35" />
        <circle cx="18" cy="16" r="3" stroke="#C9A96E" strokeWidth="0.5" fill="none" opacity="0.3" />
      </svg>
    ),
  };

  return icons[name] || null;
}

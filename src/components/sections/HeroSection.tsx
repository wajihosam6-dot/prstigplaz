"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const scrollTo = (href: string) => {
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (!el) return;
  const lenis = (window as { lenis?: { scrollTo: (el: Element, options: { offset: number; duration: number }) => void } }).lenis;
  if (lenis) {
    lenis.scrollTo(el, { offset: -80, duration: 1.8 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollY = window.scrollY;
      const h = heroRef.current.offsetHeight;

      if (contentRef.current) {
        contentRef.current.style.transform = `translateY(${scrollY * 0.38}px)`;
        contentRef.current.style.opacity = String(
          Math.max(0, 1 - scrollY / (h * 0.65))
        );
      }
      if (gridRef.current) {
        gridRef.current.style.transform = `translateY(${scrollY * 0.18}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      aria-label="Hero — Luxury Crafted For Timeless Living"
    >
      {/* ── Background radial glow ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 28% 60%, rgba(201,169,110,0.07) 0%, transparent 55%)," +
            "radial-gradient(ellipse at 80% 20%, rgba(201,169,110,0.04) 0%, transparent 45%)," +
            "var(--prestige-black)",
        }}
      />

      {/* ── Perspective grid ── */}
      <div
        ref={gridRef}
        className="absolute inset-0 pointer-events-none will-change-transform"
        style={{
          backgroundImage:
            "linear-gradient(rgba(201,169,110,0.045) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(201,169,110,0.045) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 0%, transparent 72%)",
        }}
      />

      {/* ── Ambient particles (CSS only) ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gold/20"
            style={{
              width: `${1 + (i % 3)}px`,
              height: `${1 + (i % 3)}px`,
              left: `${8 + i * 7.5}%`,
              top: `${15 + ((i * 13) % 70)}%`,
              animation: `float ${6 + (i % 4)}s ease-in-out ${i * 0.5}s infinite`,
              opacity: 0.15 + (i % 5) * 0.07,
            }}
          />
        ))}
      </div>

      {/* ── Floating furniture silhouettes ── */}
      <FurnitureSilhouettes />

      {/* ── Hero Content ── */}
      <div
        ref={contentRef}
        className="relative z-10 text-center px-6 max-w-5xl mx-auto will-change-transform"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-px w-10 bg-gradient-to-r from-transparent to-gold" />
          <span className="label-sm text-gold">Est. Toronto · Since 2004</span>
          <div className="h-px w-10 bg-gradient-to-l from-transparent to-gold" />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.7, ease: [0.76, 0, 0.24, 1] }}
          className="text-display-xl text-prestige-white mb-6"
        >
          Luxury Crafted
          <br />
          For{" "}
          <em className="font-serif italic text-gold-light">Timeless</em>
          <br />
          Living
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.0, ease: [0.25, 0.1, 0.25, 1] }}
          className="label-lg text-prestige-warm mb-12 max-w-sm mx-auto"
        >
          Where artisanal mastery meets contemporary elegance
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex items-center justify-center gap-5 flex-wrap"
        >
          <button
            className="btn-luxury-primary"
            onClick={() => scrollTo("#collections")}
          >
            <span>Explore Collections</span>
          </button>
          <button
            className="btn-luxury-outline"
            onClick={() => scrollTo("#experience")}
          >
            View Showroom
          </button>
        </motion.div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="label-sm text-prestige-warm/50 tracking-[0.4em]">
          Scroll to discover
        </span>
        <div
          className="w-px h-14 bg-gradient-to-b from-gold to-transparent animate-scroll-pulse"
          style={{ animation: "scrollPulse 2s ease-in-out infinite" }}
        />
      </motion.div>

      {/* ── Bottom gradient fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, var(--prestige-black))",
        }}
      />
    </section>
  );
}

/* ── Floating SVG furniture silhouettes ── */
function FurnitureSilhouettes() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Armchair — left */}
      <svg
        className="absolute opacity-[0.055]"
        style={{
          top: "14%",
          left: "6%",
          width: "clamp(120px,14vw,220px)",
          animation: "float 9s ease-in-out 0s infinite",
        }}
        viewBox="0 0 200 200"
        fill="none"
      >
        <rect x="28" y="98" width="144" height="70" rx="8" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <rect x="28" y="68" width="144" height="38" rx="6" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <rect x="28" y="62" width="20" height="80" rx="4" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <rect x="152" y="62" width="20" height="80" rx="4" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <line x1="44" y1="168" x2="38" y2="192" stroke="#C9A96E" strokeWidth="1" />
        <line x1="156" y1="168" x2="162" y2="192" stroke="#C9A96E" strokeWidth="1" />
        <line x1="76" y1="168" x2="76" y2="192" stroke="#C9A96E" strokeWidth="1" />
        <line x1="124" y1="168" x2="124" y2="192" stroke="#C9A96E" strokeWidth="1" />
      </svg>

      {/* Vase — upper right */}
      <svg
        className="absolute opacity-[0.045]"
        style={{
          top: "12%",
          right: "9%",
          width: "clamp(60px,7vw,110px)",
          animation: "float 7s ease-in-out 2.5s infinite",
        }}
        viewBox="0 0 80 140"
        fill="none"
      >
        <path d="M30 130 Q10 90 14 60 Q16 30 40 20 Q64 30 66 60 Q70 90 50 130 Z" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <ellipse cx="40" cy="130" rx="22" ry="5" stroke="#C9A96E" strokeWidth="0.8" fill="none" />
        <ellipse cx="40" cy="20" rx="14" ry="5" stroke="#C9A96E" strokeWidth="0.8" fill="none" />
        <line x1="40" y1="15" x2="40" y2="5" stroke="#C9A96E" strokeWidth="1" />
        <path d="M30 10 Q40 0 50 10" stroke="#C9A96E" strokeWidth="0.8" fill="none" />
      </svg>

      {/* Sofa — lower left */}
      <svg
        className="absolute opacity-[0.05]"
        style={{
          bottom: "18%",
          left: "5%",
          width: "clamp(160px,18vw,280px)",
          animation: "float 11s ease-in-out 4s infinite",
        }}
        viewBox="0 0 300 160"
        fill="none"
      >
        <rect x="18" y="80" width="264" height="65" rx="6" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <rect x="18" y="52" width="264" height="36" rx="5" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <rect x="18" y="48" width="24" height="80" rx="4" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <rect x="258" y="48" width="24" height="80" rx="4" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <line x1="106" y1="52" x2="106" y2="88" stroke="#C9A96E" strokeWidth="0.6" />
        <line x1="194" y1="52" x2="194" y2="88" stroke="#C9A96E" strokeWidth="0.6" />
      </svg>

      {/* Floor lamp — right */}
      <svg
        className="absolute opacity-[0.045]"
        style={{
          top: "20%",
          right: "20%",
          width: "clamp(50px,5vw,80px)",
          animation: "float 10s ease-in-out 1.5s infinite",
        }}
        viewBox="0 0 80 200"
        fill="none"
      >
        <line x1="40" y1="50" x2="40" y2="180" stroke="#C9A96E" strokeWidth="1.5" />
        <path d="M18 50 L25 80 L55 80 L62 50 Z" stroke="#C9A96E" strokeWidth="1" fill="none" />
        <ellipse cx="40" cy="50" rx="24" ry="7" stroke="#C9A96E" strokeWidth="0.8" fill="none" />
        <ellipse cx="40" cy="180" rx="22" ry="6" stroke="#C9A96E" strokeWidth="0.8" fill="none" />
      </svg>
    </div>
  );
}

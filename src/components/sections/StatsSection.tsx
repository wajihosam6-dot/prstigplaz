"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const STATS = [
  { value: 20, suffix: "+", label: "Years of Excellence", desc: "Serving Toronto's most discerning homeowners since 2004" },
  { value: 500, suffix: "+", label: "Curated Pieces", desc: "Hand-selected from ateliers across Europe and beyond" },
  { value: 12000, suffix: "", label: "Happy Homes", desc: "Spaces transformed through design and craftsmanship" },
  { value: 98, suffix: "%", label: "Client Satisfaction", desc: "A testament to our relentless pursuit of excellence" },
];

function useCounter(target: number, duration = 1800, inView = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;

    const start = performance.now();
    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out quart
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return count;
}

function StatItem({
  stat,
  index,
  inView,
}: {
  stat: (typeof STATS)[0];
  index: number;
  inView: boolean;
}) {
  const count = useCounter(stat.value, 1600 + index * 150, inView);

  const display =
    stat.value >= 1000
      ? `${(count / 1000).toFixed(count >= stat.value ? 0 : 1)}K`
      : `${count}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      className="relative text-center lg:text-left group"
    >
      {/* Number */}
      <div className="font-serif text-[clamp(3rem,6vw,5rem)] font-light leading-none text-prestige-white mb-2">
        {display}
        <span className="text-gold text-[0.55em]">{stat.suffix}</span>
      </div>

      {/* Label */}
      <div className="label-md text-gold mb-3">{stat.label}</div>

      {/* Description */}
      <p className="text-[0.75rem] leading-[1.8] text-prestige-warm/45 max-w-[240px] mx-auto lg:mx-0">
        {stat.desc}
      </p>

      {/* Bottom gold accent */}
      <div
        className="mt-6 h-px bg-gold transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
                   opacity-20 group-hover:opacity-60 w-8 group-hover:w-16 mx-auto lg:mx-0"
      />
    </motion.div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--prestige-black)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.035) 0%, transparent 65%)",
        }}
      />

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {STATS.map((stat, i) => (
            <StatItem key={stat.label} stat={stat} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;          // 0 = no parallax, 1 = full speed
  direction?: "up" | "down";
  className?: string;
  style?: React.CSSProperties;
}

export default function ParallaxSection({
  children,
  speed = 0.3,
  direction = "up",
  className = "",
  style,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const range = 120 * speed;
  const yFrom = direction === "up" ? range : -range;
  const yTo = direction === "up" ? -range : range;

  const y = useTransform(scrollYProgress, [0, 1], [yFrom, yTo]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`} style={style}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

/* ── Inner content that moves in opposite direction (counter-parallax) ── */
export function CounterParallax({
  children,
  speed = 0.15,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * 80, -speed * 80]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }} className="will-change-transform">
        {children}
      </motion.div>
    </div>
  );
}

"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SplitTextProps {
  children: string;
  className?: string;
  delay?: number;
  stagger?: number;
  type?: "words" | "chars";
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
}

export default function SplitText({
  children,
  className = "",
  delay = 0,
  stagger = 0.04,
  type = "words",
  as: Tag = "div",
}: SplitTextProps) {
  const parts =
    type === "chars" ? children.split("") : children.split(" ");

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const item = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <Tag className={className} aria-label={children}>
      <motion.span
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: "inline-flex", flexWrap: "wrap", gap: type === "words" ? "0.25em" : 0 }}
        aria-hidden="true"
      >
        {parts.map((part, i) => (
          <span
            key={i}
            style={{ display: "inline-block", overflow: "hidden", lineHeight: 1.1 }}
          >
            <motion.span
              variants={item}
              style={{ display: "inline-block" }}
            >
              {part}
              {type === "words" && i < parts.length - 1 ? "" : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

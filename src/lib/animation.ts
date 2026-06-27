/**
 * animation.ts
 * Central motion configuration — Framer Motion variants,
 * GSAP defaults, and reusable animation presets.
 */

// ─── FRAMER MOTION TRANSITION PRESETS ────────────────────────

export const transitions = {
  luxury: {
    duration: 0.9,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
  cinematic: {
    duration: 1.1,
    ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
  },
  elastic: {
    duration: 0.8,
    ease: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  },
  fast: {
    duration: 0.4,
    ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  },
  slow: {
    duration: 1.4,
    ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
  },
} as const;

// ─── STAGGER CONTAINERS ───────────────────────────────────────

export const stagger = {
  fast: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
  },
  normal: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.15 } },
  },
  slow: {
    hidden: {},
    visible: { transition: { staggerChildren: 0.16, delayChildren: 0.2 } },
  },
};

// ─── ELEMENT VARIANTS ─────────────────────────────────────────

export const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.cinematic,
  },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: transitions.luxury,
  },
};

export const fadeLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.cinematic,
  },
};

export const fadeRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: transitions.cinematic,
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: transitions.luxury,
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: transitions.luxury,
  },
};

export const scaleUp = {
  hidden: { opacity: 0, scale: 0.92, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: transitions.cinematic,
  },
};

export const clipRevealLeft = {
  hidden: { clipPath: "inset(0 100% 0 0)" },
  visible: {
    clipPath: "inset(0 0% 0 0)",
    transition: transitions.cinematic,
  },
};

export const clipRevealBottom = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: transitions.cinematic,
  },
};

export const lineGrow = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] as [number, number, number, number] },
  },
};

// ─── CHARACTER / WORD SPLIT VARIANT ──────────────────────────

export const charReveal = {
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

// ─── PAGE TRANSITION (Next.js) ───────────────────────────────

export const pageTransition = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

// ─── GSAP DEFAULTS ────────────────────────────────────────────

export const gsapConfig = {
  defaultEase: "power3.out",
  defaultDuration: 1,
  scrollTriggerDefaults: {
    start: "top 80%",
    once: true,
  },
};

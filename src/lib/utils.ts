import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ─── CLASS NAMES UTILITY ─────────────────────────────────────
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ─── CLAMP VALUE ─────────────────────────────────────────────
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

// ─── MAP RANGE ───────────────────────────────────────────────
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin;
}

// ─── EASING FUNCTIONS ────────────────────────────────────────
export const easings = {
  luxury: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
  cinematic: [0.76, 0, 0.24, 1] as [number, number, number, number],
  elastic: [0.34, 1.56, 0.64, 1] as [number, number, number, number],
  smooth: [0.43, 0.13, 0.23, 0.96] as [number, number, number, number],
};

// ─── FRAMER MOTION VARIANTS ──────────────────────────────────
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay,
      ease: easings.cinematic,
    },
  }),
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: easings.luxury,
    },
  }),
};

export const slideRightVariants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: (delay = 0) => ({
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay,
      ease: easings.cinematic,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: (delay = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.1,
      delay,
      ease: easings.luxury,
    },
  }),
};

// ─── GSAP DEFAULTS ───────────────────────────────────────────
export const gsapDefaults = {
  ease: "power3.out",
  duration: 1,
};

// ─── FORMAT PRICE ────────────────────────────────────────────
export function formatPrice(price: string): string {
  return price;
}

// ─── DEBOUNCE ────────────────────────────────────────────────
export function debounce<T extends (...args: unknown[]) => void>(
  fn: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// ─── THROTTLE ────────────────────────────────────────────────
export function throttle<T extends (...args: unknown[]) => void>(
  fn: T,
  limit: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  return (...args: Parameters<T>) => {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn(...args);
    }
  };
}

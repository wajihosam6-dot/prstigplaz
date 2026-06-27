/**
 * theme.ts
 * Single source of truth for all design tokens.
 * Mirrors tailwind.config.ts values for use in JS/TS contexts
 * (e.g. Three.js materials, canvas drawing, inline styles).
 */

export const colors = {
  // Gold palette
  gold: "#C9A96E",
  goldLight: "#E8D5B0",
  goldDark: "#A07840",
  goldPale: "#F5EDD8",

  // Prestige grays / blacks
  black: "#0A0908",
  graphite: "#1C1A18",
  dark: "#252220",
  mid: "#4A4540",
  warm: "#B8B0A2",
  offWhite: "#F5F3EF",
  white: "#FAFAF8",

  // Transparency helpers
  goldA10: "rgba(201,169,110,0.10)",
  goldA15: "rgba(201,169,110,0.15)",
  goldA20: "rgba(201,169,110,0.20)",
  goldA30: "rgba(201,169,110,0.30)",

  warmA40: "rgba(184,176,162,0.40)",
  warmA60: "rgba(184,176,162,0.60)",

  whiteA60: "rgba(250,250,248,0.60)",
  whiteA80: "rgba(250,250,248,0.80)",
} as const;

export const fonts = {
  serif: "'Cormorant Garamond', Georgia, serif",
  sans: "'Jost', 'Helvetica Neue', sans-serif",
} as const;

export const easings = {
  luxury: [0.25, 0.1, 0.25, 1],
  cinematic: [0.76, 0, 0.24, 1],
  elastic: [0.34, 1.56, 0.64, 1],
  smooth: [0.43, 0.13, 0.23, 0.96],
} as const;

export const durations = {
  fast: 300,
  normal: 600,
  slow: 900,
  cinematic: 1100,
  glacial: 1400,
} as const;

export const spacing = {
  sectionPadding: "10rem",
  sectionPaddingMd: "6rem",
  sectionPaddingSm: "5rem",
  gutter: "4rem",
  gutterSm: "1.5rem",
} as const;

export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1440,
} as const;

export const zIndex = {
  cursor: 9999,
  trail: 9998,
  progress: 9997,
  noise: 9990,
  nav: 1000,
  modal: 900,
  overlay: 800,
  content: 10,
  base: 0,
} as const;

// Three.js material presets
export const threeMaterials = {
  gold: { color: colors.gold, metalness: 0.85, roughness: 0.15 },
  upholstery: { color: "#352D28", metalness: 0.02, roughness: 0.88 },
  wood: { color: "#2C1F10", metalness: 0.05, roughness: 0.82 },
  marble: { color: "#E8E0D8", metalness: 0.02, roughness: 0.1 },
  floor: { color: colors.black, metalness: 0.5, roughness: 1 },
} as const;

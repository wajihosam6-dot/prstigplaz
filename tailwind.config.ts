import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/hooks/**/*.{js,ts,jsx,tsx}",
    "./src/lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#C9A96E",
          light: "#E8D5B0",
          dark: "#A07840",
          pale: "#F5EDD8",
        },
        prestige: {
          black: "#0A0908",
          graphite: "#1C1A18",
          dark: "#252220",
          mid: "#4A4540",
          warm: "#B8B0A2",
          off: "#F5F3EF",
          white: "#FAFAF8",
        },
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Georgia", "serif"],
        sans: ["var(--font-jost)", "'Helvetica Neue'", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(4rem,10vw,10rem)", { lineHeight: "0.92", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(3rem,7vw,7rem)", { lineHeight: "0.95", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(2rem,4vw,4rem)", { lineHeight: "1.05", letterSpacing: "-0.01em" }],
        "display-sm": ["clamp(1.5rem,3vw,2.5rem)", { lineHeight: "1.1" }],
        "label-lg": ["0.7rem", { lineHeight: "1", letterSpacing: "0.3em" }],
        "label-md": ["0.65rem", { lineHeight: "1", letterSpacing: "0.35em" }],
        "label-sm": ["0.6rem", { lineHeight: "1", letterSpacing: "0.4em" }],
      },
      spacing: {
        "section": "10rem",
        "section-sm": "6rem",
        "gutter": "4rem",
        "gutter-sm": "2rem",
      },
      transitionTimingFunction: {
        "luxury": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "cinematic": "cubic-bezier(0.76, 0, 0.24, 1)",
        "elastic": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      transitionDuration: {
        "400": "400ms",
        "600": "600ms",
        "800": "800ms",
        "1000": "1000ms",
        "1200": "1200ms",
      },
      animation: {
        "float": "float 8s ease-in-out infinite",
        "float-delayed": "float 8s ease-in-out 2s infinite",
        "float-slow": "float 12s ease-in-out 4s infinite",
        "marquee": "marquee 24s linear infinite",
        "scroll-pulse": "scrollPulse 2s ease-in-out infinite",
        "pin-pulse": "pinPulse 2s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 1s cubic-bezier(0.76,0,0.24,1) forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(2deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        scrollPulse: {
          "0%, 100%": { opacity: "0.3", transform: "scaleY(1)" },
          "50%": { opacity: "1", transform: "scaleY(1.1)" },
        },
        pinPulse: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(201,169,110,0.4)" },
          "50%": { boxShadow: "0 0 0 16px rgba(201,169,110,0)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(60px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      backgroundImage: {
        "noise": "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E\")",
        "gold-gradient": "linear-gradient(135deg, #C9A96E 0%, #E8D5B0 50%, #C9A96E 100%)",
        "gold-radial": "radial-gradient(ellipse at center, rgba(201,169,110,0.15) 0%, transparent 70%)",
      },
      backdropBlur: {
        "luxury": "24px",
      },
      zIndex: {
        "cursor": "9999",
        "trail": "9998",
        "nav": "1000",
        "modal": "900",
        "overlay": "800",
      },
    },
  },
  plugins: [],
};

export default config;

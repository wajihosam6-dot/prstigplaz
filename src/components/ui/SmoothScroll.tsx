"use client";

import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    let lenis: {
      raf: (time: number) => void;
      destroy: () => void;
      on: (event: string, callback: (e: { scroll: number }) => void) => void;
    } | null = null;

    const initLenis = async () => {
      try {
        const LenisModule = await import("@studio-freight/lenis");
        const Lenis = LenisModule.default;

        lenis = new Lenis({
          duration: 1.4,
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          orientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.8,
        }) as typeof lenis;

        // Sync with GSAP ScrollTrigger if available
        lenis!.on("scroll", (e: { scroll: number }) => {
          // Dispatch a custom event for components that need scroll position
          window.dispatchEvent(
            new CustomEvent("lenis-scroll", { detail: { scroll: e.scroll } })
          );
        });

        function raf(time: number) {
          lenis!.raf(time);
          requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Make lenis globally accessible for GSAP ScrollTrigger
        (window as { lenis?: typeof lenis }).lenis = lenis;
      } catch (err) {
        console.warn("Lenis failed to load, using native scroll:", err);
      }
    };

    initLenis();

    return () => {
      lenis?.destroy();
    };
  }, []);

  return null;
}

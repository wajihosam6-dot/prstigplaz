"use client";

import { useEffect, useRef } from "react";

type GSAPCallback = (gsap: typeof import("gsap").gsap, container: HTMLElement) => (() => void) | void;

/**
 * useGSAP — dynamically loads GSAP + ScrollTrigger and runs a callback
 * once the target container ref is mounted.
 *
 * Usage:
 *   const ref = useGSAP((gsap, el) => {
 *     gsap.from(el.querySelectorAll('.item'), { y: 60, opacity: 0, stagger: 0.1 });
 *   });
 *   <div ref={ref}>...</div>
 */
export function useGSAP(callback: GSAPCallback) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cleanup: (() => void) | void;

    const init = async () => {
      try {
        const gsapModule = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        const gsap = gsapModule.gsap;

        gsap.registerPlugin(ScrollTrigger);

        // Sync with Lenis if available
        const lenis = (window as { lenis?: { on: (event: string, cb: () => void) => void } }).lenis;
        if (lenis) {
          lenis.on("scroll", ScrollTrigger.update);
          gsap.ticker.lagSmoothing(0);
        }

        cleanup = callback(gsap, el) ?? undefined;
      } catch (err) {
        console.warn("GSAP not available:", err);
      }
    };

    init();

    return () => {
      cleanup?.();
    };
  }, [callback]);

  return ref;
}

/**
 * useGSAPTextReveal — animates lines of text with a clip-path reveal
 */
export function useGSAPTextReveal(selector: string, delay = 0) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const init = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const targets = el.querySelectorAll(selector);

        gsap.fromTo(
          targets,
          { y: "110%", opacity: 0 },
          {
            y: "0%",
            opacity: 1,
            duration: 1,
            delay,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              once: true,
            },
          }
        );
      } catch {
        // GSAP not available — CSS animations handle it
      }
    };

    init();
  }, [selector, delay]);

  return ref;
}

/**
 * useGSAPHorizontalScroll — horizontal scroll section
 */
export function useGSAPHorizontalScroll() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const init = async () => {
      try {
        const { gsap } = await import("gsap");
        const { ScrollTrigger } = await import("gsap/ScrollTrigger");
        gsap.registerPlugin(ScrollTrigger);

        const track = el.querySelector<HTMLElement>("[data-scroll-track]");
        if (!track) return;

        const scrollWidth = track.scrollWidth - track.clientWidth;

        const tween = gsap.to(track, {
          x: -scrollWidth,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: () => `+=${scrollWidth}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
          },
        });

        return () => {
          tween.kill();
          ScrollTrigger.getAll().forEach((t) => t.kill());
        };
      } catch {
        // noop
      }
    };

    init();
  }, []);

  return ref;
}

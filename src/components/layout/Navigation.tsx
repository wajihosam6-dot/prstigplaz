"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    const handleLenisScroll = (e: Event) => {
      const customEvent = e as CustomEvent<{ scroll: number }>;
      setScrolled(customEvent.detail.scroll > 80);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("lenis-scroll", handleLenisScroll);

    // Intersection observer for active section
    const sections = document.querySelectorAll("section[id]");
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );
    sections.forEach((s) => sectionObserver.observe(s));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("lenis-scroll", handleLenisScroll);
      sectionObserver.disconnect();
    };
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const lenis = (window as { lenis?: { scrollTo: (el: Element, options: { offset: number; duration: number }) => void } }).lenis;
      if (lenis) {
        lenis.scrollTo(el, { offset: -80, duration: 1.8 });
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.5 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-[1000] transition-all duration-700",
          scrolled
            ? "py-4 bg-prestige-black/90 backdrop-blur-luxury border-b border-gold/5"
            : "py-8 bg-gradient-to-b from-prestige-black/60 to-transparent"
        )}
        aria-label="Main navigation"
      >
        <div className="container-luxury flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo("#")}
            className="flex flex-col leading-none gap-[3px] group"
            aria-label="Prestige Plaza Furniture — Home"
          >
            <span
              className="font-serif text-gold tracking-[0.2em] uppercase text-[1.1rem] font-normal
                         transition-opacity duration-300 group-hover:opacity-80"
            >
              Prestige Plaza
            </span>
            <span className="label-sm text-prestige-warm tracking-[0.45em]">
              Furniture
            </span>
          </button>

          {/* Desktop Nav Links */}
          <ul className="hidden lg:flex items-center gap-10 list-none" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    "label-sm relative pb-1 transition-colors duration-300",
                    activeSection === link.href.replace("#", "")
                      ? "text-prestige-white"
                      : "text-prestige-warm hover:text-prestige-white"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px bg-gold transition-all duration-500",
                      activeSection === link.href.replace("#", "")
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    )}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-6">
            <button
              className="btn-luxury-primary hidden lg:block"
              onClick={() => scrollTo("#contact")}
            >
              <span>Book Consultation</span>
            </button>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-[5px] p-2"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-prestige-white origin-center transition-all"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                className="block w-4 h-px bg-gold origin-center transition-all"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                className="block w-6 h-px bg-prestige-white origin-center transition-all"
              />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[999] bg-prestige-black/97 backdrop-blur-luxury
                       flex flex-col items-center justify-center lg:hidden"
          >
            <nav aria-label="Mobile navigation">
              <ul className="flex flex-col items-center gap-8 list-none text-center">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                  >
                    <button
                      onClick={() => scrollTo(link.href)}
                      className="font-serif text-4xl font-light text-prestige-white
                                 hover:text-gold transition-colors duration-300 italic"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="mt-12 text-center"
              >
                <button
                  className="btn-luxury-primary"
                  onClick={() => scrollTo("#contact")}
                >
                  <span>Book Consultation</span>
                </button>
              </motion.div>
            </nav>

            {/* Gold decorative line */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4">
              <div className="gold-line-h w-16" />
              <span className="label-sm text-prestige-warm">Toronto, Ontario</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

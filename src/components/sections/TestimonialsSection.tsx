"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TESTIMONIALS } from "@/lib/data";

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  const goTo = useCallback(
    (i: number) => {
      setDirection(i > current ? 1 : -1);
      setCurrent(i);
    },
    [current]
  );

  const next = useCallback(() => {
    const n = (current + 1) % TESTIMONIALS.length;
    setDirection(1);
    setCurrent(n);
  }, [current]);

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const variants = {
    enter: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 40 : -40,
      filter: "blur(6px)",
    }),
    center: {
      opacity: 1,
      x: 0,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -40 : 40,
      filter: "blur(6px)",
    }),
  };

  const t = TESTIMONIALS[current];

  return (
    <section
      id="testimonials"
      className="relative py-[var(--section-padding)] overflow-hidden"
      style={{ background: "var(--prestige-black)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.04) 0%, transparent 65%)",
        }}
      />

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="label-sm text-gold">Client Stories</span>
            <div className="h-px w-8 bg-gold opacity-60" />
          </div>
          <h2 className="text-display-md text-prestige-white">
            What Our Clients
            <br />
            <em className="italic text-gold-light">Are Saying</em>
          </h2>
        </motion.div>

        {/* Testimonial carousel */}
        <div className="max-w-4xl mx-auto text-center relative">
          {/* Large decorative quote mark */}
          <div
            className="absolute -top-6 left-0 font-serif text-[9rem] leading-none
                       text-gold/[0.06] pointer-events-none select-none"
            aria-hidden="true"
          >
            &#8220;
          </div>

          <div className="relative min-h-[240px] flex items-center justify-center">
            <AnimatePresence custom={direction} mode="wait">
              <motion.div
                key={t.id}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 flex flex-col items-center justify-center px-4"
              >
                <blockquote
                  className="font-serif text-[clamp(1.15rem,2.2vw,1.75rem)] font-light italic
                             text-prestige-white leading-[1.55] mb-8"
                >
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                <div className="gold-line-h w-12 mb-6" />

                <cite className="not-italic">
                  <div className="label-md text-gold mb-1">{t.author}</div>
                  <div className="label-sm text-prestige-warm/50">
                    {t.role} &middot; {t.location}
                  </div>
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`
                  rounded-full transition-all duration-500 border-none
                  ${i === current
                    ? "w-6 h-[5px] bg-gold rounded-[3px]"
                    : "w-[5px] h-[5px] bg-prestige-warm/25 hover:bg-gold/50"
                  }
                `}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => goTo((current - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="w-10 h-10 border border-gold/20 hover:border-gold/60 flex items-center justify-center
                         text-prestige-warm/40 hover:text-gold transition-all duration-300"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-gold/20 hover:border-gold/60 flex items-center justify-center
                         text-prestige-warm/40 hover:text-gold transition-all duration-300"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

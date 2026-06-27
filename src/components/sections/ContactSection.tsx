"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { fadeUpVariants, staggerContainerVariants } from "@/lib/utils";

const INTERESTS = [
  "Living Room",
  "Bedroom",
  "Dining",
  "Home Office",
  "Complete Home",
  "Commercial",
];

export default function ContactSection() {
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (item: string) => {
    setSelected((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-[var(--section-padding)] overflow-hidden text-center"
      style={{ background: "var(--prestige-black)" }}
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(201,169,110,0.055) 0%, transparent 65%)",
        }}
      />
      <div className="gold-line-h absolute top-0 left-[var(--gutter)] right-[var(--gutter)] opacity-15" />

      <div className="container-luxury relative z-10">
        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Eyebrow */}
          <motion.div
            variants={fadeUpVariants}
            custom={0}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="h-px w-8 bg-gold opacity-60" />
            <span className="label-sm text-gold">Begin Your Journey</span>
            <div className="h-px w-8 bg-gold opacity-60" />
          </motion.div>

          {/* Heading */}
          <motion.h2
            variants={fadeUpVariants}
            custom={0.08}
            className="text-display-lg text-prestige-white mb-4"
          >
            Let&apos;s Create Your
            <br />
            <em className="italic text-gold-light">Perfect Space</em>
          </motion.h2>

          <motion.p
            variants={fadeUpVariants}
            custom={0.16}
            className="label-lg text-prestige-warm/55 mb-14"
          >
            Private consultations available in-showroom or at your home
          </motion.p>

          {/* Form */}
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-md mx-auto py-16"
            >
              <div className="text-gold text-5xl mb-4 font-serif">✦</div>
              <h3 className="font-serif text-2xl text-prestige-white mb-3">
                Thank you
              </h3>
              <p className="text-[0.82rem] text-prestige-warm/60 leading-relaxed">
                We&apos;ll be in touch within 24 hours to schedule your consultation.
              </p>
            </motion.div>
          ) : (
            <motion.form
              variants={fadeUpVariants}
              custom={0.24}
              onSubmit={handleSubmit}
              className="max-w-lg mx-auto text-left space-y-6"
            >
              {/* Name row */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                    className="luxury-input"
                    aria-label="First Name"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                    className="luxury-input"
                    aria-label="Last Name"
                  />
                </div>
              </div>

              {/* Email */}
              <input
                type="email"
                placeholder="Email Address"
                required
                className="luxury-input"
                aria-label="Email Address"
              />

              {/* Phone */}
              <input
                type="tel"
                placeholder="Phone Number"
                className="luxury-input"
                aria-label="Phone Number"
              />

              {/* Interest tags */}
              <div>
                <div className="label-sm text-prestige-warm/40 mb-4">
                  Area of interest (select all that apply)
                </div>
                <div className="flex flex-wrap gap-2">
                  {INTERESTS.map((item) => (
                    <button
                      type="button"
                      key={item}
                      onClick={() => toggle(item)}
                      className={`
                        label-sm px-4 py-2 border transition-all duration-300
                        ${selected.includes(item)
                          ? "border-gold bg-gold/10 text-gold"
                          : "border-prestige-warm/15 text-prestige-warm/40 hover:border-gold/40"
                        }
                      `}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="luxury-input resize-none"
                aria-label="Project details"
              />

              {/* Submit */}
              <button type="submit" className="btn-luxury-primary w-full py-4">
                <span>Send Enquiry</span>
              </button>

              <p className="text-[0.65rem] text-prestige-warm/30 text-center leading-relaxed">
                By submitting, you agree to our Privacy Policy. We respond within 24 hours.
              </p>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--prestige-dark)" }}
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 100%, rgba(201,169,110,0.06) 0%, transparent 60%)",
        }}
      />
      <div className="gold-line-h absolute top-0 left-[var(--gutter)] right-[var(--gutter)] opacity-15" />
      <div className="gold-line-h absolute bottom-0 left-[var(--gutter)] right-[var(--gutter)] opacity-15" />

      <div className="container-luxury relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-8 bg-gold opacity-50" />
              <span className="label-sm text-gold">Stay Inspired</span>
              <div className="h-px w-8 bg-gold opacity-50" />
            </div>

            <h2 className="font-serif text-[clamp(1.8rem,3.5vw,3rem)] font-light text-prestige-white mb-4 leading-tight">
              The Art of Living,{" "}
              <em className="italic text-gold-light">Delivered</em>
            </h2>

            <p className="text-[0.82rem] leading-[1.9] text-prestige-warm/55 mb-10 max-w-md mx-auto">
              Receive exclusive collection previews, design inspiration, and
              private event invitations directly to your inbox.
            </p>

            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-8"
                >
                  <div className="text-gold text-3xl mb-3 font-serif">✦</div>
                  <p className="label-lg text-prestige-white mb-1">
                    Welcome to the Circle
                  </p>
                  <p className="text-[0.75rem] text-prestige-warm/50">
                    Your first letter will arrive shortly.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="luxury-input flex-1 sm:border-b border-gold/20 focus:border-gold"
                    aria-label="Email address for newsletter"
                  />
                  <button type="submit" className="btn-luxury-primary flex-shrink-0">
                    <span>Subscribe</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>

            <p className="text-[0.6rem] text-prestige-warm/25 mt-4 tracking-wider">
              No spam. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

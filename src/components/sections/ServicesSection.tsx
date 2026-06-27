"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    number: "01",
    title: "Interior Design",
    desc: "Our in-house designers collaborate with you to create cohesive, breathtaking spaces from concept to completion.",
    features: ["Space planning", "Material selection", "3D visualisation", "Project management"],
  },
  {
    number: "02",
    title: "Bespoke Commissions",
    desc: "When our collection isn't quite right, we work directly with master craftspeople to create pieces designed exclusively for you.",
    features: ["Custom dimensions", "Material choice", "Finish options", "1:1 artisan collaboration"],
  },
  {
    number: "03",
    title: "Design Consultation",
    desc: "A focused session with our senior designers to refine your vision, curate a furniture plan, and set a clear path forward.",
    features: ["In-showroom or at-home", "Mood board creation", "Budget planning", "Complimentary follow-up"],
  },
  {
    number: "04",
    title: "White Glove Delivery",
    desc: "Precision installation by our dedicated team ensures every piece is placed perfectly and your home is left immaculate.",
    features: ["Glove-handled transport", "Expert installation", "Room dressing", "Packaging removal"],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="relative py-[var(--section-padding)] overflow-hidden"
      style={{ background: "var(--prestige-black)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 0% 50%, rgba(201,169,110,0.04) 0%, transparent 50%)",
        }}
      />

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
          className="grid lg:grid-cols-2 gap-12 mb-20 items-end"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-gold" />
              <span className="label-sm text-gold">Our Services</span>
            </div>
            <h2 className="text-display-lg text-prestige-white">
              Beyond the
              <br />
              <em className="italic text-gold-light">Showroom Floor</em>
            </h2>
          </div>
          <p className="text-[0.86rem] leading-[1.9] text-prestige-warm/55 max-w-[440px] lg:pb-2">
            Every great interior begins with great guidance. Our services are
            designed to support you at every stage of your journey — from first
            inspiration to final placement.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-px bg-prestige-dark/40">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.number} service={svc} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay: index * 0.1, ease: [0.76, 0, 0.24, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative p-10 group transition-colors duration-500"
      style={{
        background: hovered ? "rgba(201,169,110,0.025)" : "var(--prestige-graphite)",
      }}
    >
      {/* Number */}
      <div
        className="font-serif text-[5rem] font-light leading-none mb-6 transition-colors duration-500"
        style={{ color: hovered ? "rgba(201,169,110,0.12)" : "rgba(201,169,110,0.06)" }}
        aria-hidden="true"
      >
        {service.number}
      </div>

      {/* Title */}
      <h3 className="font-serif text-[1.6rem] font-light text-prestige-white mb-4 leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-[0.82rem] leading-[1.85] text-prestige-warm/55 mb-8">
        {service.desc}
      </p>

      {/* Features list */}
      <ul className="space-y-2">
        {service.features.map((feat) => (
          <li key={feat} className="flex items-center gap-3">
            <span
              className="text-gold transition-opacity duration-300"
              style={{ fontSize: "0.35rem", opacity: hovered ? 1 : 0.5 }}
            >
              ◆
            </span>
            <span className="text-[0.75rem] text-prestige-warm/50">{feat}</span>
          </li>
        ))}
      </ul>

      {/* Bottom gold line reveal */}
      <div
        className="absolute bottom-0 left-0 h-px bg-gold transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]"
        style={{ width: hovered ? "100%" : "0%" }}
      />
    </motion.div>
  );
}

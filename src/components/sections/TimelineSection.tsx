"use client";

import { motion } from "framer-motion";

const milestones = [
  {
    year: "2004",
    title: "The Beginning",
    desc: "Prestige Plaza Furniture opens its first Toronto showroom with a curated selection of European luxury pieces.",
  },
  {
    year: "2008",
    title: "Expanding the Vision",
    desc: "We expand our offering to include custom bespoke commissions, partnering with Italian and Scandinavian ateliers.",
  },
  {
    year: "2013",
    title: "Design Consultancy",
    desc: "Launch of our full interior design service, bringing a holistic approach to residential and commercial spaces.",
  },
  {
    year: "2018",
    title: "The Collections",
    desc: "Introduction of three exclusive house collections, designed collaboratively with award-winning designers.",
  },
  {
    year: "2022",
    title: "Showroom Expansion",
    desc: "Our flagship Toronto showroom undergoes a complete transformation — 12,000 sq ft of curated living experience.",
  },
  {
    year: "2024",
    title: "Two Decades of Excellence",
    desc: "Celebrating 20 years of crafting luxury interiors for discerning clients across Canada and beyond.",
  },
];

export default function TimelineSection() {
  return (
    <section
      id="story"
      className="relative py-[var(--section-padding)] overflow-hidden"
      style={{ background: "var(--prestige-graphite)" }}
    >
      {/* Ambient background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 100% 50%, rgba(201,169,110,0.04) 0%, transparent 55%)",
        }}
      />
      <div className="gold-line-h absolute top-0 left-[var(--gutter)] right-[var(--gutter)] opacity-15" />

      <div className="container-luxury">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-gold" />
            <span className="label-sm text-gold">Our Journey</span>
          </div>
          <h2 className="text-display-lg text-prestige-white">
            Two Decades of
            <br />
            <em className="italic text-gold-light">Crafted Excellence</em>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1] }}
            className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold to-transparent opacity-25 origin-top hidden sm:block"
          />

          <div className="space-y-0">
            {milestones.map((m, i) => (
              <TimelineItem key={m.year} milestone={m} index={i} />
            ))}
          </div>
        </div>
      </div>

      <div className="gold-line-h absolute bottom-0 left-[var(--gutter)] right-[var(--gutter)] opacity-15" />
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
}: {
  milestone: (typeof milestones)[0];
  index: number;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.9,
        delay: 0.1,
        ease: [0.76, 0, 0.24, 1],
      }}
      className={`
        relative grid lg:grid-cols-2 gap-0 py-12
        border-b border-gold/8
        ${isEven ? "" : ""}
      `}
    >
      {/* Left side */}
      <div
        className={`
          flex items-center
          ${isEven ? "lg:justify-end lg:pr-16" : "lg:order-2 lg:pl-16"}
        `}
      >
        <div className="max-w-sm">
          {/* Year */}
          <div
            className="font-serif text-[3.5rem] font-light leading-none mb-3"
            style={{ color: "rgba(201,169,110,0.15)" }}
          >
            {milestone.year}
          </div>
          <h3 className="font-serif text-[1.5rem] font-light text-prestige-white mb-3 leading-tight">
            {milestone.title}
          </h3>
          <p className="text-[0.8rem] leading-[1.85] text-prestige-warm/55">
            {milestone.desc}
          </p>
        </div>
      </div>

      {/* Center dot (desktop) */}
      <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center z-10">
        <div className="w-3 h-3 rounded-full bg-gold ring-4 ring-prestige-graphite ring-offset-0" />
      </div>

      {/* Right side — mirror on even */}
      <div
        className={`
          hidden lg:flex items-center
          ${isEven ? "lg:pl-16" : "lg:order-1 lg:justify-end lg:pr-16"}
        `}
      >
        {/* Decorative year echo */}
        <span
          className="font-serif text-[6rem] font-light leading-none select-none pointer-events-none"
          style={{ color: "rgba(201,169,110,0.035)" }}
        >
          {milestone.year}
        </span>
      </div>
    </motion.div>
  );
}

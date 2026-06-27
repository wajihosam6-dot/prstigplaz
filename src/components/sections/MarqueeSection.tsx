"use client";

const ITEMS = [
  "Living Room",
  "Bedroom",
  "Dining",
  "Home Office",
  "Outdoor",
  "Lighting",
  "Accessories",
  "Custom Orders",
  "Interior Design",
  "White Glove Delivery",
];

export default function MarqueeSection() {
  const doubled = [...ITEMS, ...ITEMS];

  return (
    <div
      className="relative overflow-hidden border-y py-4"
      style={{
        borderColor: "rgba(201,169,110,0.14)",
        background: "rgba(201,169,110,0.018)",
      }}
      aria-hidden="true"
    >
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center gap-12 flex-shrink-0">
            <span className="label-sm text-prestige-warm/60">{item}</span>
            <span className="text-gold" style={{ fontSize: "0.35rem" }}>
              ◆
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

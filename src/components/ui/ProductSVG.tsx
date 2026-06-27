import React from "react";

const svgMap: Record<string, React.ReactNode> = {
  "arco-lounge": (
    <svg width="180" height="180" viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pg1" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="28" y="98" width="144" height="70" rx="8" fill="#2A2520" stroke="#C9A96E" strokeWidth="0.8" />
      <rect x="28" y="68" width="144" height="38" rx="6" fill="#332D28" stroke="#C9A96E" strokeWidth="0.8" />
      <rect x="28" y="62" width="20" height="82" rx="4" fill="#2A2520" stroke="#C9A96E" strokeWidth="0.7" />
      <rect x="152" y="62" width="20" height="82" rx="4" fill="#2A2520" stroke="#C9A96E" strokeWidth="0.7" />
      <line x1="43" y1="168" x2="37" y2="192" stroke="#C9A96E" strokeWidth="1.2" />
      <line x1="157" y1="168" x2="163" y2="192" stroke="#C9A96E" strokeWidth="1.2" />
      <line x1="73" y1="168" x2="73" y2="192" stroke="#C9A96E" strokeWidth="1.2" />
      <line x1="127" y1="168" x2="127" y2="192" stroke="#C9A96E" strokeWidth="1.2" />
      <ellipse cx="100" cy="188" rx="72" ry="10" fill="url(#pg1)" />
    </svg>
  ),
  "onda-table": (
    <svg width="200" height="160" viewBox="0 0 220 160" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pg2" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="18" y="58" width="184" height="12" rx="2" fill="#1E1C18" stroke="#C9A96E" strokeWidth="0.8" />
      <line x1="38" y1="70" x2="32" y2="132" stroke="#C9A96E" strokeWidth="1.6" opacity="0.7" />
      <line x1="182" y1="70" x2="188" y2="132" stroke="#C9A96E" strokeWidth="1.6" opacity="0.7" />
      <line x1="72" y1="70" x2="72" y2="132" stroke="#C9A96E" strokeWidth="1.6" opacity="0.7" />
      <line x1="148" y1="70" x2="148" y2="132" stroke="#C9A96E" strokeWidth="1.6" opacity="0.7" />
      <rect x="28" y="126" width="164" height="6" rx="1" fill="#1A1714" stroke="#C9A96E" strokeWidth="0.5" opacity="0.5" />
      <rect x="78" y="40" width="50" height="18" rx="1" fill="#2A2518" stroke="#C9A96E" strokeWidth="0.5" opacity="0.65" />
      <circle cx="162" cy="48" r="13" fill="#241E14" stroke="#C9A96E" strokeWidth="0.5" opacity="0.65" />
      <ellipse cx="110" cy="140" rx="82" ry="12" fill="url(#pg2)" />
    </svg>
  ),
  "sereno-sofa": (
    <svg width="210" height="180" viewBox="0 0 220 180" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pg3" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="14" y="96" width="192" height="66" rx="6" fill="#2C2520" stroke="#C9A96E" strokeWidth="0.8" />
      <rect x="14" y="66" width="192" height="38" rx="5" fill="#352D28" stroke="#C9A96E" strokeWidth="0.8" />
      <rect x="14" y="60" width="22" height="80" rx="4" fill="#2C2520" stroke="#C9A96E" strokeWidth="0.7" />
      <rect x="184" y="60" width="22" height="80" rx="4" fill="#2C2520" stroke="#C9A96E" strokeWidth="0.7" />
      <rect x="34" y="75" width="62" height="25" rx="3" fill="#3D3530" stroke="#C9A96E" strokeWidth="0.5" />
      <rect x="109" y="75" width="62" height="25" rx="3" fill="#3D3530" stroke="#C9A96E" strokeWidth="0.5" />
      <line x1="28" y1="162" x2="22" y2="178" stroke="#C9A96E" strokeWidth="1.2" />
      <line x1="192" y1="162" x2="198" y2="178" stroke="#C9A96E" strokeWidth="1.2" />
      <ellipse cx="110" cy="175" rx="94" ry="11" fill="url(#pg3)" />
    </svg>
  ),
  "aurelio-lamp": (
    <svg width="120" height="200" viewBox="0 0 120 220" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pg4" cx="50%" cy="0%" r="80%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="60" cy="90" rx="66" ry="88" fill="url(#pg4)" />
      <line x1="60" y1="46" x2="60" y2="178" stroke="#C9A96E" strokeWidth="1.5" opacity="0.7" />
      <ellipse cx="60" cy="46" rx="30" ry="9" fill="#252018" stroke="#C9A96E" strokeWidth="0.8" opacity="0.9" />
      <path d="M30 46 L22 76 L98 76 L90 46 Z" fill="#1E1C18" stroke="#C9A96E" strokeWidth="0.7" opacity="0.85" />
      <ellipse cx="60" cy="178" rx="34" ry="8" fill="#1A1714" stroke="#C9A96E" strokeWidth="0.8" opacity="0.8" />
      <rect x="52" y="168" width="16" height="12" rx="2" fill="#222018" stroke="#C9A96E" strokeWidth="0.5" />
    </svg>
  ),
  "alba-bed": (
    <svg width="200" height="170" viewBox="0 0 220 180" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pg5" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="18" y="100" width="184" height="65" rx="4" fill="#222018" stroke="#C9A96E" strokeWidth="0.7" />
      <rect x="18" y="60" width="184" height="46" rx="4" fill="#1C1A16" stroke="#C9A96E" strokeWidth="0.8" />
      <rect x="36" y="68" width="68" height="34" rx="3" fill="#2A2820" stroke="#C9A96E" strokeWidth="0.5" />
      <rect x="116" y="68" width="68" height="34" rx="3" fill="#2A2820" stroke="#C9A96E" strokeWidth="0.5" />
      <line x1="28" y1="165" x2="22" y2="178" stroke="#C9A96E" strokeWidth="1" />
      <line x1="192" y1="165" x2="198" y2="178" stroke="#C9A96E" strokeWidth="1" />
      <ellipse cx="110" cy="175" rx="88" ry="10" fill="url(#pg5)" />
    </svg>
  ),
  "forma-shelf": (
    <svg width="170" height="200" viewBox="0 0 180 220" fill="none" aria-hidden="true">
      <rect x="20" y="20" width="140" height="185" rx="3" fill="none" stroke="#C9A96E" strokeWidth="0.7" />
      {[0, 1, 2, 3].map((i) => (
        <line key={i} x1="20" y1={20 + i * 46} x2="160" y2={20 + i * 46} stroke="#C9A96E" strokeWidth="0.5" opacity="0.4" />
      ))}
      <rect x="30" y="26" width="38" height="34" rx="1" fill="#1E1C18" stroke="#C9A96E" strokeWidth="0.4" opacity="0.7" />
      <rect x="75" y="30" width="22" height="30" rx="1" fill="#1A1816" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
      <rect x="105" y="26" width="44" height="34" rx="1" fill="#1E1C18" stroke="#C9A96E" strokeWidth="0.4" opacity="0.7" />
      <circle cx="50" cy="82" r="12" fill="#1A1814" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
      <rect x="75" y="70" width="65" height="22" rx="1" fill="#1E1C18" stroke="#C9A96E" strokeWidth="0.4" opacity="0.6" />
    </svg>
  ),
  "rondo-dining": (
    <svg width="200" height="160" viewBox="0 0 220 160" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pg7" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="110" cy="75" rx="90" ry="38" fill="#1C1916" stroke="#C9A96E" strokeWidth="0.7" />
      <ellipse cx="110" cy="75" rx="80" ry="30" fill="none" stroke="#C9A96E" strokeWidth="0.3" opacity="0.3" />
      <line x1="110" y1="110" x2="110" y2="145" stroke="#C9A96E" strokeWidth="1.4" opacity="0.6" />
      <ellipse cx="110" cy="148" rx="22" ry="7" fill="#181614" stroke="#C9A96E" strokeWidth="0.6" />
      <ellipse cx="110" cy="148" rx="82" ry="11" fill="url(#pg7)" />
    </svg>
  ),
  "petra-chair": (
    <svg width="140" height="190" viewBox="0 0 160 200" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pg8" cx="50%" cy="100%" r="60%">
          <stop offset="0%" stopColor="#C9A96E" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#C9A96E" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="28" y="88" width="104" height="72" rx="4" fill="#2A2520" stroke="#C9A96E" strokeWidth="0.7" />
      <rect x="28" y="44" width="104" height="50" rx="4" fill="#332D28" stroke="#C9A96E" strokeWidth="0.8" />
      <line x1="42" y1="160" x2="36" y2="190" stroke="#C9A96E" strokeWidth="1.2" />
      <line x1="118" y1="160" x2="124" y2="190" stroke="#C9A96E" strokeWidth="1.2" />
      <line x1="58" y1="160" x2="58" y2="190" stroke="#C9A96E" strokeWidth="1.2" />
      <line x1="102" y1="160" x2="102" y2="190" stroke="#C9A96E" strokeWidth="1.2" />
      <ellipse cx="80" cy="188" rx="58" ry="9" fill="url(#pg8)" />
    </svg>
  ),
};

export default function ProductSVG({ id }: { id: string }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {svgMap[id] || svgMap["arco-lounge"]}
    </div>
  );
}

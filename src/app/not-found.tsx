import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found — Prestige Plaza Furniture",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative overflow-hidden"
      style={{ background: "var(--prestige-black)" }}
    >
      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, rgba(201,169,110,0.05) 0%, transparent 65%)",
        }}
      />

      {/* 404 */}
      <div
        className="font-serif font-light leading-none mb-6 select-none pointer-events-none"
        style={{
          fontSize: "clamp(6rem,20vw,16rem)",
          color: "rgba(201,169,110,0.06)",
          letterSpacing: "-0.04em",
        }}
        aria-hidden="true"
      >
        404
      </div>

      {/* Content */}
      <div className="relative z-10 -mt-8">
        <div className="flex items-center justify-center gap-4 mb-5">
          <div className="h-px w-8 bg-gold opacity-50" />
          <span className="label-sm text-gold">Page Not Found</span>
          <div className="h-px w-8 bg-gold opacity-50" />
        </div>

        <h1 className="font-serif text-[clamp(1.8rem,4vw,3.5rem)] font-light text-prestige-white mb-4">
          This Room Is Empty
        </h1>

        <p className="text-[0.82rem] leading-[1.9] text-prestige-warm/50 mb-10 max-w-sm mx-auto">
          The page you&apos;re looking for has been moved or doesn&apos;t exist.
          Let us guide you back to our curated collections.
        </p>

        <Link href="/" className="btn-luxury-primary inline-block">
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}

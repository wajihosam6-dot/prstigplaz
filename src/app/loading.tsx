export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center"
      style={{ background: "var(--prestige-black)" }}
      role="status"
      aria-label="Loading Prestige Plaza Furniture"
    >
      {/* Logo */}
      <div className="flex flex-col items-center gap-2 mb-10">
        <span
          className="font-serif text-gold tracking-[0.25em] uppercase text-[1.2rem] font-light"
          aria-hidden="true"
        >
          Prestige Plaza
        </span>
        <span
          className="label-sm text-prestige-warm/35 tracking-[0.5em]"
          aria-hidden="true"
        >
          Furniture
        </span>
      </div>

      {/* Gold loading bar */}
      <div
        className="w-32 h-px relative overflow-hidden"
        style={{ background: "rgba(201,169,110,0.12)" }}
      >
        <div
          className="absolute inset-y-0 left-0 w-full"
          style={{
            background:
              "linear-gradient(to right, transparent, var(--gold), transparent)",
            animation: "shimmer 1.6s ease-in-out infinite",
            backgroundSize: "200% auto",
          }}
        />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
}

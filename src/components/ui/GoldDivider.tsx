import { cn } from "@/lib/utils";

interface GoldDividerProps {
  className?: string;
  vertical?: boolean;
  opacity?: number;
}

export default function GoldDivider({
  className = "",
  vertical = false,
  opacity = 0.2,
}: GoldDividerProps) {
  if (vertical) {
    return (
      <div
        className={cn("gold-line-v", className)}
        style={{ opacity }}
        aria-hidden="true"
      />
    );
  }
  return (
    <div
      className={cn("gold-line-h", className)}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}

/* ── Section eyebrow label with flanking lines ── */
export function SectionEyebrow({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-4", className)}>
      <div className="h-px w-8 bg-gradient-to-r from-transparent to-gold" />
      <span className="label-sm text-gold">{children}</span>
      <div className="h-px w-8 bg-gradient-to-l from-transparent to-gold" />
    </div>
  );
}

/* ── Gold dot accent ── */
export function GoldDot({ className = "" }: { className?: string }) {
  return (
    <span
      className={cn("inline-block text-gold", className)}
      aria-hidden="true"
      style={{ fontSize: "0.35rem" }}
    >
      ◆
    </span>
  );
}

import { site } from "@/lib/site";

// Small technical coordinate annotation, placed at section corners.
export default function Coordinate({ text, className }:any) {
  const label = text || `${site.city.toUpperCase()} · 49`;
  return (
    <span
      className={`font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground/70 ${className || ""}`}
    >
      {label}
    </span>
  );
}
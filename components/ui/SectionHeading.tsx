import { cn } from "@/lib/utils";

// Section heading with blueprint numbering and editorial type.
export default function SectionHeading({
  number,
  eyebrow,
  title,
  intro,
  align = "left",
  dark = false,
  className,
}:any) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4 mb-6",
          align === "center" && "justify-center"
        )}
      >
        {number && (
          <span className="font-mono text-xs tracking-[0.25em] text-slate-cobalt">
            {number}
          </span>
        )}
        <span className="h-px w-12 bg-slate-cobalt/60" />
        {eyebrow && (
          <span
            className={cn(
              "font-mono text-[11px] uppercase tracking-[0.2em]",
              dark ? "text-white/60" : "text-muted-foreground"
            )}
          >
            {eyebrow}
          </span>
        )}
      </div>
      <h2
        className={cn(
          "heading-display text-3xl sm:text-4xl lg:text-5xl leading-[1.08] text-balance",
          dark ? "text-white" : "text-slate-deep"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-6 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-slate-natural"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
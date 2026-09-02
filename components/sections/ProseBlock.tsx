import Reveal from "@/components/ui/Reveal";
import Coordinate from "@/components/ui/Coordinate";
import { Image } from "@/components/ui/image";

// Editorial prose block for long-form pages. Renders an <article> with
// a numbered eyebrow, heading and rich paragraphs.
export default function ProseBlock({ number, eyebrow, title, children }:any) {
  return (
    <Reveal>
      <article className="max-w-3xl">
        <div className="flex items-center gap-4 mb-5">
          {number && (
            <span className="font-mono text-xs tracking-[0.25em] text-slate-cobalt">{number}</span>
          )}
          <span className="h-px w-10 bg-slate-cobalt/60" />
          {eyebrow && (
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              {eyebrow}
            </span>
          )}
        </div>
        {title && (
          <h2 className="heading-display text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-slate-deep text-balance">
            {title}
          </h2>
        )}
        <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-natural">{children}</div>
      </article>
    </Reveal>
  );
}

export function ProseImage({ src, alt, caption }:any) {
  return (
    <Reveal>
      <figure className="my-12">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image src={src} alt={alt} fittingType="fill" className="absolute inset-0 h-full w-full" />
        </div>
        {caption && (
          <figcaption className="mt-3 flex items-center justify-between">
            <Coordinate text={caption} />
          </figcaption>
        )}
      </figure>
    </Reveal>
  );
}
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Coordinate from "@/components/ui/Coordinate";
import { services } from "@/lib/site";
import Link from "next/link";

export default function Services() {
  return (
    <section id="prestations" className="py-20 lg:py-28">
      <div className="container-vasseur">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            number="01 //"
            eyebrow="Prestations"
            title="Une expertise complète de la toiture"
          />
          <Coordinate text="08 PRESTATIONS" className="hidden lg:block" />
        </div>

        <div className="mt-14 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.id} delay={(i % 4) * 0.04}>
              <article className="group h-full bg-background p-7 transition-colors duration-300 hover:bg-slate-deep">
                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground transition-colors group-hover:text-white" />
                </div>
                <h3 className="mt-6 heading-display text-xl text-slate-deep transition-colors group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-natural transition-colors group-hover:text-white/70">
                  {s.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/toiture-ardoise-angers"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-deep hover:text-slate-cobalt transition-colors"
          >
            Approfondir la réfection de toiture en ardoise
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
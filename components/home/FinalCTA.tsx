import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-slate-deep py-20 text-white lg:py-28">
      <div className="container-vasseur">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-slate-cobalt">
              Contact
            </span>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-6 heading-display text-4xl leading-[1.08] sm:text-5xl lg:text-6xl text-balance">
              Parlons de votre toiture
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              Un diagnostic, un devis clair, une intervention sérieuse. Décrivez-nous votre
              besoin — nous revenons vers vous sous 48 h pour organiser la visite.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button to="/#contact" variant="cobalt" size="lg">
                Demander un devis gratuit
              </Button>
              <Button href={`tel:${site.phoneHref}`} variant="lightOutline" size="lg">
                <Phone className="w-4 h-4" />
                {site.phone}
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 inline-flex items-center gap-3 border border-white/20 px-5 py-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-slate-cobalt" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/80">
                Réponse sous 48 h · {site.emergency}
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
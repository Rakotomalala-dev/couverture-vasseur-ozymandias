import { Image } from "@/components/ui/image";
import Button from "@/components/ui/Button";
import Coordinate from "@/components/ui/Coordinate";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import { Phone, Star, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-deep text-white">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src={IMAGES.hero}
          alt="Toiture en ardoise naturelle à Angers, vue architecturale en contre-plongée"
          fittingType="fill"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-deep via-slate-deep/85 to-slate-deep/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-deep/80 via-transparent to-transparent" />
      </div>

      <div className="container-vasseur relative">
        <div className="flex min-h-[88vh] flex-col justify-end pb-16 pt-32 lg:min-h-[92vh] lg:justify-center lg:pb-24">
          <div className="max-w-2xl">
            <Reveal>
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-10 bg-slate-cobalt" />
                <Coordinate text={`COUVERTURE VASSEUR · ${site.city.toUpperCase()} · 49`} className="text-white/60" />
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="heading-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl xl:text-7xl text-balance">
                Couvreur à Angers, spécialiste de l'ardoise naturelle
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/75">
                Artisan couvreur angevin depuis {site.yearsExperience} ans. Réfection de
                toiture, rénovation de l'ardoise, zinguerie et recherche de fuite — dans
                Angers et un rayon de {site.interventionRadiusKm} km.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button to="/#contact" variant="cobalt" size="lg">
                  Demander un devis gratuit
                </Button>
                <Button href={`tel:${site.phoneHref}`} variant="lightOutline" size="lg">
                  <Phone className="w-4 h-4" />
                  {site.phone}
                </Button>
              </div>
            </Reveal>

            {/* <Reveal delay={0.2}>
              <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
                <Proof value={`${site.yearsExperience} ans`} label="d'expérience" />
                <Proof value={`${site.rating} / 5`} label={`${site.reviewCount} avis Google`} icon={<Star className="w-3.5 h-3.5 fill-slate-cobalt text-slate-cobalt" />} />
                <Proof value="RGE" label="Qualibat" />
                <Proof value="AXA" label="garantie décennale" icon={<ShieldCheck className="w-3.5 h-3.5 text-slate-cobalt" />} />
              </dl>
            </Reveal> */}
          </div>
        </div>
      </div>
    </section>
  );
}

function Proof({ value, label, icon }:any) {
  return (
    <div>
      <dt className="flex items-center gap-2 font-heading text-2xl font-light text-white">
        {icon}
        {value}
      </dt>
      <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/50">
        {label}
      </dd>
    </div>
  );
}
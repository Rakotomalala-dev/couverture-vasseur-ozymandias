import { Image } from "@/components/ui/image";
import Coordinate from "@/components/ui/Coordinate";
import Button from "@/components/ui/Button";
import { site } from "@/lib/site";
import { IMAGES } from "@/lib/images";
import Reveal from "../ui/Reveal";

export default function Artisan() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-vasseur">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <div className="lg:col-span-6">
            <Reveal>
              <figure className="relative aspect-[4/5] w-full overflow-hidden">
                <Image
                  src={IMAGES.maisonAngevine}
                  alt="Maison angevine traditionnelle avec toiture en ardoise, lumière du matin"
                  fittingType="fill"
                  className="absolute inset-0 h-full w-full"
                />
              </figure>
            </Reveal>
          </div>

          {/* Text */}
          <div className="lg:col-span-6 lg:flex lg:flex-col lg:justify-center">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs tracking-[0.25em] text-slate-cobalt">05 //</span>
              <span className="h-px w-12 bg-slate-cobalt/60" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                L'artisan
              </span>
            </div>
            <Reveal>
              <h2 className="heading-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl text-slate-deep">
                Julien Vasseur, artisan couvreur à Angers
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-8 space-y-5 text-slate-natural leading-relaxed">
                <p>
                  Julien Vasseur exerce le métier de couvreur depuis {site.yearsExperience} ans.
                  Il s'est spécialisé dans l'ardoise naturelle, un matériau qui demande de la
                  patience et une réelle connaissance du geste.
                </p>
                <p>
                  Il travaille avec trois compagnons, en équipe restreinte. Cela permet de
                  garder la main sur chaque chantier, de soigner les finitions et de garantir
                  une continuité du diagnostic à la réception des travaux.
                </p>
                <p>
                  La proximité n'est pas un argument commercial : c'est une organisation.
                  Intervenir à Angers et dans un rayon de {site.interventionRadiusKm} km,
                  c'est connaître le bâti, les accès, les contraintes d'urbanisme et les
                  usages locaux de la couverture.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="mt-10 flex items-center justify-between border-t border-border pt-6">
                <Coordinate text={`${site.owner.toUpperCase()} · ${site.city.toUpperCase()}`} />
                <Button to="/#contact" variant="outline" size="sm">
                  Le rencontrer
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
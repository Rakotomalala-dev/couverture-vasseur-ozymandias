import { Image } from "@/components/ui/image";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import Breadcrumbs from "@/components/seo/Breadcrumbs";
import Coordinate from "@/components/ui/Coordinate";
import { site } from "@/lib/site";
import { Phone } from "lucide-react";

export default function PageHero({ image, imageAlt, breadcrumbItems, label, title, intro }:any) {
  return (
    <section className="relative overflow-hidden bg-slate-deep text-white">
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fittingType="fill"
          className="absolute inset-0 h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-deep via-slate-deep/85 to-slate-deep/40" />
      </div>
      <div className="container-vasseur relative">
        <div className="flex min-h-[60vh] flex-col justify-end pb-14 pt-32 lg:min-h-[64vh] lg:justify-center lg:pb-20">
          <Reveal>
            <Breadcrumbs items={breadcrumbItems} />
          </Reveal>
          <Reveal delay={0.05}>
            <div className="mt-8 flex items-center gap-4">
              <span className="h-px w-10 bg-slate-cobalt" />
              <Coordinate text={label} className="text-white/60" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 max-w-3xl heading-display text-4xl leading-[1.06] sm:text-5xl lg:text-6xl text-balance">
              {title}
            </h1>
          </Reveal>
          {intro && (
            <Reveal delay={0.15}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/75">{intro}</p>
            </Reveal>
          )}
          <Reveal delay={0.2}>
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
        </div>
      </div>
    </section>
  );
}
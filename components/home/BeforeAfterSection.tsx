import SectionHeading from "@/components/ui/SectionHeading";
import BeforeAfter from "@/components/home/BeforeAfter";
import { IMAGES } from "@/lib/images";
import Reveal from "../ui/Reveal";

export default function BeforeAfterSection() {
  return (
    <section className="bg-slate-arch py-20 lg:py-28">
      <div className="container-vasseur">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-6">
            <SectionHeading
              number="04 //"
              eyebrow="Avant / Après"
              title="Le passage d'une toiture fatiguée à une couverture saine"
              intro="Faites glisser le curseur pour visualiser l'écart entre une couverture en fin de vie et une toiture refaite dans les règles de l'art."
            />
          </div>
          <div className="lg:col-span-6 lg:pb-2">
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              Visuels de démonstration — ne représentent pas un chantier réel de Couverture Vasseur.
            </p>
          </div>
        </div>

        <Reveal className="mt-12">
          <BeforeAfter
            before={IMAGES.avant}
            after={IMAGES.apres}
            beforeAlt="Toiture ancienne en ardoise abîmée, ardoises manquantes et mousses"
            afterAlt="Toiture en ardoise naturelle rénovée, ardoises alignées et faîtage net"
          />
        </Reveal>
      </div>
    </section>
  );
}
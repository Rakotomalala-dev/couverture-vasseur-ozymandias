import { Image } from "@/components/ui/image";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { IMAGES } from "@/lib/images";

const steps = [
  { n: "01", t: "Diagnostic", d: "Examen de la couverture, de la charpente et des points singuliers. On identifie l'origine réelle des désordres, pas seulement le symptôme." },
  { n: "02", t: "Couverture", d: "Pose de l'ardoise, recouvrement et alignement du pureau. Chaque pièce est fixée une à une, dans le respect des règles professionnelles." },
  { n: "03", t: "Étanchéité", d: "Reprise des noues, solins et raccords. L'étanchéité se joue aux transitions, là où la couverture seule ne suffit pas." },
  { n: "04", t: "Zinguerie", d: "Façonnage du zinc, gouttières, chéneaux et noquets. Le métal épouse les lignes de la toiture et évacue les eaux." },
  { n: "05", t: "Finitions", d: "Faîtage, arêtiers, rives. Les ouvrages de finition ferment la couverture et lui donnent sa ligne définitive." },
  { n: "06", t: "Contrôle", d: "Vérification finale de l'ensemble, étanchéité et zinguerie. Remise des documents et mise en route de la garantie." },
];

export default function Craftsmanship() {
  return (
    <section id="savoir-faire" className="py-20 lg:py-28">
      <div className="container-vasseur">
        <SectionHeading
          number="03 //"
          eyebrow="Savoir-faire"
          title="Un métier qui se joue dans les détails"
          intro="La qualité d'une toiture ne se voit pas seulement de loin. Elle se mesure dans la précision de chaque raccord, de chaque fixation, de chaque pli de zinc."
        />

        <div className="mt-14 grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Image */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <figure className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src={IMAGES.artisan}
                  alt="Main d'un compagnon couvreur posant une ardoise au marteau"
                  fittingType="fill"
                  className="absolute inset-0 h-full w-full"
                />
              </figure>
            </Reveal>
          </div>

          {/* Steps */}
          <div className="lg:col-span-7">
            <ol className="divide-y divide-border border-y border-border">
              {steps.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.04}>
                  <li className="grid grid-cols-[auto_1fr] gap-6 py-7 sm:gap-10">
                    <span className="font-mono text-sm text-slate-cobalt pt-1">{s.n}</span>
                    <div>
                      <h3 className="heading-display text-xl text-slate-deep">{s.t}</h3>
                      <p className="mt-2 text-slate-natural leading-relaxed">{s.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
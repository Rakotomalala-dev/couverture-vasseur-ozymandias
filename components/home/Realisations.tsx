import { Image } from "@/components/ui/image";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import Coordinate from "@/components/ui/Coordinate";
import { IMAGES } from "@/lib/images";

// Editorial demonstrations of know-how — not presented as Couverture Vasseur's
// actual client chantiers (no real project photos were provided).
const items = [
  {
    img: IMAGES.faitage,
    title: "Faîtage et arêtiers en ardoise",
    type: "Ouvrages de finition",
    desc: "Fermeture du faîtage et des arêtiers en ardoise, alignement et recouvrement soigné au sommet du versant.",
  },
  {
    img: IMAGES.zinc,
    title: "Zinguerie et raccords en zinc",
    type: "Points singuliers",
    desc: "Façonnage du zinc aux rives, solins et noquets : l'étanchéité là où la couverture seule ne suffit pas.",
  },
  {
    img: IMAGES.maisonAngevine,
    title: "Intégration au bâti angevin",
    type: "Architecture locale",
    desc: "Une couverture qui respecte la ligne et la matière des toitures angevines traditionnelles.",
  },
];

export default function Realisations() {
  return (
    <section id="realisations" className="py-20 lg:py-28">
      <div className="container-vasseur">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            number="10 //"
            eyebrow="Savoir-faire en images"
            title="Nos réalisations"
          />
          <Coordinate text="VISUELS DE DÉMONSTRATION" />
        </div>

        <div className="mt-6 max-w-2xl">
          <p className="text-slate-natural leading-relaxed">
            Les visuels ci-dessous illustrent des types d'ouvrages et de mise en œuvre
            représentatifs de notre métier. Ils ne sont pas présentés comme des chantiers
            clients identifiés.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <article className="group">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={it.img}
                    alt={it.title}
                    fittingType="fill"
                    className="absolute inset-0 h-full w-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-background/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-slate-deep">
                    {it.type}
                  </span>
                </div>
                <div className="mt-5 border-t border-border pt-5">
                  <h3 className="heading-display text-xl text-slate-deep">{it.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-natural">{it.desc}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
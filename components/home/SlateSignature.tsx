import { Image } from "@/components/ui/image";
import Reveal from "@/components/ui/Reveal";
import Coordinate from "@/components/ui/Coordinate";
import { IMAGES } from "@/lib/images";

// Signature section about natural slate — the differentiator.
export default function SlateSignature() {
  return (
    <section className="bg-slate-deep py-20 text-white lg:py-28">
      <div className="container-vasseur">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Text */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-4 mb-6">
              <span className="font-mono text-xs tracking-[0.25em] text-slate-cobalt">02 //</span>
              <span className="h-px w-12 bg-slate-cobalt/60" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/50">
                Matière
              </span>
            </div>
            <Reveal>
              <h2 className="heading-display text-3xl leading-[1.1] sm:text-4xl lg:text-5xl">
                L'ardoise naturelle, une signature angevine
              </h2>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="mt-8 space-y-5 text-white/70 leading-relaxed">
                <p>
                  L'ardoise est une pierre naturelle, extraite du sous-sol, fendue à la
                  main en feuilles minces. Sa structure lamellaire lui donne cette teinte
                  profonde, légèrement bleutée, qui se patine avec le temps sans jamais
                  se dégrader.
                </p>
                <p>
                  En Anjou, l'ardoise est le matériau historique des toitures. Elle
                  habite le paysage angevin depuis des générations, sur les hôtels
                  particuliers du centre comme sur les maisons de faubourg. Choisir
                  l'ardoise, c'est s'inscrire dans la continuité du bâti local.
                </p>
                <p>
                  Sa pose exige de la précision : recouvrement, alignement, pureau,
                  raccords aux points singuliers. Chaque ardoise est fixée une à une, au
                  crochet ou au clou, sur un liteaunage préparé avec soin. C'est un
                  travail lent, fait pour durer.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <dl className="mt-10 grid grid-cols-3 gap-6 border-t border-white/15 pt-8">
                <Spec value="Naturelle" label="Matière pierre" />
                <Spec value="Fendue" label="À la main" />
                <Spec value="Décennies" label="De longévité" />
              </dl>
            </Reveal>
          </div>

          {/* Image */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <figure className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden">
                  <Image
                    src={IMAGES.ardoiseMacro}
                    alt="Gros plan d'une ardoise naturelle fendue, texture minérale lamellaire"
                    fittingType="fill"
                    className="absolute inset-0 h-full w-full"
                  />
                </div>
                <figcaption className="mt-4 flex items-center justify-between">
                  <Coordinate text="ARDOISE NATURELLE · GROS PLAN" className="text-white/40" />
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    47° 28' N
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Spec({ value, label }:any) {
  return (
    <div>
      <dt className="font-heading text-xl font-light text-white">{value}</dt>
      <dd className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
        {label}
      </dd>
    </div>
  );
}
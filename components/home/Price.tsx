import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { priceFactors } from "@/lib/site";

export default function Price() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container-vasseur">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              number="07 //"
              eyebrow="Tarif"
              title="Combien coûte une réfection de toiture ?"
              intro="Nous ne communiquons pas de prix générique : une toiture n'est pas un produit standard. Le devis gratuit après visite reste la seule réponse honnête."
            />
            <Reveal delay={0.1}>
              <p className="mt-8 text-slate-natural leading-relaxed">
                En revanche, nous pouvons lister les facteurs qui font varier le coût d'une
                intervention. Les connaître vous aide à comprendre ce qui est chiffré, et
                pourquoi.
              </p>
            </Reveal>
          </div>

        <div className="lg:col-span-7">
  <ul className="border-y border-border">
    {priceFactors.map((factor, index) => (
      <Reveal
        key={`${factor}-${index}`}
        delay={index * 0.03}
      >
        <li className="grid grid-cols-[auto_1fr] items-center gap-6 border-b border-border py-5">
          <span className="font-mono text-xs text-slate-cobalt">
            {String(index + 1).padStart(2, "0")}
          </span>

          <span className="text-slate-deep">
            {factor}
          </span>
        </li>
      </Reveal>
    ))}
  </ul>
</div>
        </div>
      </div>
    </section>
  );
}
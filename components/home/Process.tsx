import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { process } from "@/lib/site";

export default function Process() {
  return (
    <section className="bg-slate-deep py-20 text-white lg:py-28">
      <div className="container-vasseur">
        <SectionHeading
          number="06 //"
          eyebrow="Méthode"
          title="Un chantier clair, du premier appel à la réception"
          intro="Pas de mauvaise surprise. Chaque étape est expliquée, chiffrée et validée avant de passer à la suivante."
          dark
        />

        <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
          {process.map((p, i) => (
            <Reveal key={p.num} delay={(i % 5) * 0.05}>
              <li className="h-full bg-slate-deep p-7">
                <span className="font-mono text-3xl font-light text-slate-cobalt">
                  {p.num}
                </span>

                <h3 className="mt-6 heading-display text-lg text-white">
                  {p.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-white/60">
                  {p.text}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

// import SectionHeading from "@/components/ui/SectionHeading";
// import Reveal from "@/components/ui/Reveal";
// import { process } from "@/lib/site";

// export default function Process() {
//   return (
//     <section className="bg-slate-deep py-20 text-white lg:py-28">
//       <div className="container-vasseur">
//         <SectionHeading
//           number="06 //"
//           eyebrow="Méthode"
//           title="Un chantier clair, du premier appel à la réception"
//           intro="Pas de mauvaise surprise. Chaque étape est expliquée, chiffrée et validée avant de passer à la suivante."
//           dark
//         />

//         <ol className="mt-14 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
//           {process.map(({p, i}:any) => (
//             <Reveal key={p.num} delay={(i % 5) * 0.05}>
//               <li className="h-full bg-slate-deep p-7">
//                 <span className="font-mono text-3xl font-light text-slate-cobalt">{p.num}</span>
//                 <h3 className="mt-6 heading-display text-lg text-white">{p.title}</h3>
//                 <p className="mt-3 text-sm leading-relaxed text-white/60">{p.text}</p>
//               </li>
//             </Reveal>
//           ))}
//         </ol>
//       </div>
//     </section>
//   );
// }
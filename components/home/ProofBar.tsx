import { site } from "@/lib/site";

// Static, high-density proof bar — not a carousel.
export default function ProofBar() {
  const items = [
    { value: `${site.yearsExperience}`, unit: "ans", label: "d'expérience" },
    { value: `${site.reviewCount}`, unit: "avis", label: "Google" },
    { value: `${site.rating}`, unit: "/ 5", label: "de moyenne" },
    { value: "RGE", unit: "", label: "Qualibat" },
    { value: "AXA", unit: "", label: "décennale" },
  ];
  return (
    <section className="border-b border-border bg-background">
      <div className="container-vasseur">
        <div className="grid grid-cols-2 divide-x divide-border sm:grid-cols-3 lg:grid-cols-5">
          {items.map((it, i) => (
            <div key={i} className="px-4 py-8 text-center sm:py-10">
              <p className="font-heading text-3xl font-light text-slate-deep sm:text-4xl">
                {it.value}
                <span className="text-slate-cobalt">{it.unit}</span>
              </p>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {it.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
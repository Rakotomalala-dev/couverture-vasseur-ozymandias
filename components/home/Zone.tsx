import { MapPin } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import { site } from "@/lib/site";
import Link from "next/link";

export default function Zone() {
    return (
        <section className="bg-slate-arch py-20 lg:py-28">
            <div className="container-vasseur">
                <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
                    <div className="lg:col-span-5">
                        <SectionHeading
                            number="08 //"
                            eyebrow="Secteur"
                            title={`Couvreur à Angers et dans un rayon de ${site.interventionRadiusKm} km`}
                            intro="Une intervention de proximité, qui connaît le bâti local et ses contraintes d'accès."
                        />
                        <Reveal delay={0.1}>
                            <Link
                                href="/couvreur-angers"
                                className="mt-8 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-slate-cobalt hover:text-slate-deep transition-colors"
                            >
                                <MapPin className="w-4 h-4" />
                                Voir la page couvreur à Angers
                            </Link>
                        </Reveal>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="grid grid-cols-1 gap-px border border-border bg-border sm:grid-cols-2">
                            {site.communes.map((commune, index) => (
                                <Reveal
                                    key={commune}
                                    delay={(index % 2) * 0.05}
                                >
                                    <div className="flex items-center justify-between bg-background px-6 py-5">
                                        <span className="heading-display text-lg text-slate-deep">
                                            {commune}
                                        </span>

                                        <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                                            {site.city === commune ? "Centre" : "≤ 30 km"}
                                        </span>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
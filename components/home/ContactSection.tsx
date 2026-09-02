import SectionHeading from "@/components/ui/SectionHeading";
import ContactForm from "@/components/forms/ContactForm";
import { site } from "@/lib/site";
import { Phone, Clock, ShieldCheck } from "lucide-react";
import Reveal from "../ui/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container-vasseur">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <SectionHeading
              number="09 //"
              eyebrow="Devis"
              title="Demander un devis gratuit"
              intro="Quelques informations suffisent pour préparer le diagnostic. Vous pouvez aussi joindre une photo de votre toiture."
            />
            <Reveal delay={0.1}>
              <ul className="mt-10 space-y-6">
                <InfoRow icon={<Phone className="w-4 h-4" />} label="Téléphone" value={site.phone} href={`tel:${site.phoneHref}`} />
                <InfoRow icon={<Clock className="w-4 h-4" />} label="Délai" value={site.promise} />
                <InfoRow icon={<ShieldCheck className="w-4 h-4" />} label="Garantie" value="Décennale AXA · RGE Qualibat" />
              </ul>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 border-l-2 border-slate-cobalt pl-4">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-cobalt">
                  Urgence fuite
                </p>
                <p className="mt-2 text-slate-natural">
                  {site.emergency}. Appelez directement, nous intervenons en priorité.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <ContactForm />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({ icon, label, value, href }:any) {
  const content = (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center border border-border text-slate-cobalt">
        {icon}
      </span>
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-lg text-slate-deep">{value}</p>
      </div>
    </div>
  );
  if (href) {
    return (
      <li>
        <a href={href} className="block hover:opacity-80 transition-opacity">
          {content}
        </a>
      </li>
    );
  }
  return <li>{content}</li>;
}
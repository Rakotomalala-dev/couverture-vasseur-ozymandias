import { Phone, Mail, MapPin } from "lucide-react";
import { site, services } from "@/lib/site";
import Logo from "@/components/ui/Logo";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-deep text-white">
      <div className="container-vasseur py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="flex h-fit gap-5">
              <div className="bg-white flex items-center justify-center w-fit">
                <Logo height={52} />
              </div>
              <div className="flex flex-col gap-2">
                {site.certifications.map((c: any) => (
                  <span
                    key={c}
                    className="border border-white/20 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white/70"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/60">
              Artisan couvreur à Angers, spécialiste de l'ardoise naturelle, de la réfection
              de toiture et de la zinguerie. Interventions dans Angers et un rayon de 30 km.
            </p>

          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Prestations
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((s: any) => (
                <li key={s.id}>
                  <Link
                    href="/#prestations"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Area */}
          <div className="lg:col-span-3">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Secteur
            </h3>
            <ul className="mt-5 space-y-3">
              {site.communes.map((c: any) => (
                <li key={c}>
                  <Link
                    href="/couvreur-angers"
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/40">
              Contact
            </h3>
            <address className="mt-5 not-italic space-y-4">
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2 text-sm text-white hover:text-slate-cobalt transition-colors"
              >
                <Phone className="w-4 h-4 shrink-0" />
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-2 text-sm text-white/70 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 shrink-0 mt-0.5" />
                {site.email}
              </a>
              <p className="flex items-start gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {site.city} · {site.department}
              </p>
            </address>
            <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-cobalt">
              {site.promise}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40">
            © {new Date().getFullYear()} {site.name} — {site.owner}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors">
              Accueil
            </Link>
            <Link href="/toiture-ardoise-angers" className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors">
              Réfection ardoise
            </Link>
            <Link href="/couvreur-angers" className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/40 hover:text-white transition-colors">
              Couvreur Angers
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
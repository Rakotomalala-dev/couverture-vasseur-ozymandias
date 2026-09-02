"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

import { site, nav } from "@/lib/site";
import Button from "@/components/ui/Button";
import Logo from "@/components/ui/Logo";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const pathname = usePathname();

  /**
   * Ferme le menu mobile lorsqu'on change de page.
   */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /**
   * Détecte le scroll pour modifier l'apparence du header.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /**
   * Empêche le scroll de la page lorsque le menu mobile est ouvert.
   */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-border"
          : "bg-background border-transparent"
      }`}
    >
      <div className="container-vasseur">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Logo height={44} />

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================= */}
          <nav
            className="hidden lg:flex items-center gap-8"
            aria-label="Navigation principale"
          >
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.path}
                className={`font-mono text-[11px] uppercase tracking-[0.18em] transition-colors ${
                  pathname === item.path
                    ? "text-slate-cobalt"
                    : "text-slate-natural hover:text-slate-cobalt"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* =========================================
              DESKTOP ACTIONS
          ========================================= */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${site.phoneHref}`}
              aria-label={`Appeler le ${site.phone}`}
              className="flex items-center gap-2 font-mono text-xs tracking-[0.1em] text-slate-deep hover:text-slate-cobalt transition-colors"
            >
              <Phone
                className="w-3.5 h-3.5"
                aria-hidden="true"
              />

              <span>{site.phone}</span>
            </a>

            <Button
              to="/#contact"
              variant="cobalt"
              size="sm"
            >
              Demander un devis
            </Button>
          </div>

          {/* =========================================
              MOBILE CONTROLS
          ========================================= */}
          <div className="flex lg:hidden items-center gap-3">
            {/* Phone */}
            <a
              href={site.phoneHref}
              aria-label={`Appeler le ${site.phone}`}
              className="flex h-10 w-10 items-center justify-center border border-border text-slate-deep hover:border-slate-cobalt hover:text-slate-cobalt transition-colors"
            >
              <Phone
                className="w-4 h-4"
                aria-hidden="true"
              />
            </a>

            {/* Menu */}
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={
                open
                  ? "Fermer le menu"
                  : "Ouvrir le menu"
              }
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center border border-border text-slate-deep hover:border-slate-cobalt transition-colors"
            >
              {open ? (
                <X
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              ) : (
                <Menu
                  className="w-5 h-5"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* =========================================
          MOBILE MENU
      ========================================= */}
      {open && (
        <div
          id="mobile-navigation"
          className="lg:hidden border-t border-border bg-background"
        >
          <div className="container-vasseur py-6">
            <nav
              className="flex flex-col"
              aria-label="Navigation mobile"
            >
              {nav.map((item) => (
                <Link
                  key={item.label}
                  href={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center justify-between py-4 border-b border-border font-heading text-lg transition-colors ${
                    pathname === item.path
                      ? "text-slate-cobalt"
                      : "text-slate-deep hover:text-slate-cobalt"
                  }`}
                >
                  <span>{item.label}</span>

                  <span
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile actions */}
            <div className="mt-6 flex flex-col gap-3">
              <Button
                to="/#contact"
                variant="cobalt"
                size="lg"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Demander un devis
              </Button>

              <Button
                href={site.phoneHref}
                variant="outline"
                size="lg"
                className="w-full"
              >
                {site.phone}
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
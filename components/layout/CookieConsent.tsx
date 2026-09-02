"use client"

import { useState, useEffect } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "vasseur-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (!choice) {
        const t = setTimeout(() => setVisible(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const choose = (value:any) => {
    try {
      localStorage.setItem(STORAGE_KEY, value);
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:w-[360px] z-50 bg-slate-deep text-white shadow-2xl shadow-black/40 animate-fade-up"
      role="dialog"
      aria-label="Consentement aux cookies"
    >
      <div className="flex items-start justify-between gap-3 p-5 pb-2">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-slate-cobalt">
            Cookies
          </span>
        </div>
        <button
          onClick={() => choose("refuse")}
          aria-label="Fermer"
          className="text-white/50 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="px-5 pb-2">
        <p className="text-sm leading-relaxed text-white/75">
          Nous utilisons des cookies techniques pour le fonctionnement du site et des
          cookies de mesure d'audience anonymisée. Vous pouvez accepter ou refuser.
        </p>
      </div>

      <div className="flex gap-2 p-5 pt-3">
        <button
          onClick={() => choose("accept")}
          className="flex-1 bg-slate-cobalt py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white transition-colors hover:brightness-110"
        >
          Accepter
        </button>
        <button
          onClick={() => choose("refuse")}
          className="flex-1 border border-white/25 py-2.5 font-mono text-[11px] uppercase tracking-[0.15em] text-white/80 transition-colors hover:bg-white/10"
        >
          Refuser
        </button>
      </div>
    </div>
  );
}
"use client"

import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import Link from "next/link";
import Button from "../ui/Button";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`hidden lg:flex fixed bottom-6 right-6 z-40 flex-col gap-1.5 transition-all duration-500 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={`tel:${site.phoneHref}`}
        className="flex items-center justify-center gap-2 bg-slate-deep hover:bg-slate-cobalt px-5 py-3 font-mono text-xs tracking-[0.12em] text-white shadow-lg shadow-black/20 transition-colors"
      >
        <Phone className="w-3.5 h-3.5" />
        {site.phone}
      </a>
      
      <Button
                    to="/#contact"
                    variant="cobalt"
                    size="sm"
                  >
                            Devis gratuit

                  </Button>
    </div>
  );
}
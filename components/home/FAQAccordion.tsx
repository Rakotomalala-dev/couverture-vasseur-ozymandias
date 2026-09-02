"use client"

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

// Accessible FAQ accordion. Pair with faqSchema in <Seo />.
export default function FAQAccordion({ items }:any) {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item:any, i:any) => {
        const isOpen = open === i;
        return (
          <div key={i}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between gap-6 py-6 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-mono text-xs text-slate-cobalt">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="heading-display text-lg sm:text-xl text-slate-deep">
                    {item.q}
                  </span>
                </span>
                <span className="shrink-0 text-slate-deep">
                  {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                </span>
              </button>
            </h3>
            <div
              className={cn(
                "grid transition-all duration-300",
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pl-10 pr-10 text-slate-natural leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
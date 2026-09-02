import { Phone, FileText } from "lucide-react";
import { site } from "@/lib/site";

// Persistent mobile action bar: call + quote.
export default function MobileActionBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 lg:hidden border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="grid grid-cols-2">
        <a
          href={`tel:${site.phoneHref}`}
          className="flex items-center justify-center gap-2 py-4 font-mono text-xs uppercase tracking-[0.15em] text-slate-deep border-r border-border active:bg-muted transition-colors"
        >
          <Phone className="w-4 h-4" />
          Appeler
        </a>
        <a
          href="/#contact"
          className="flex items-center justify-center gap-2 py-4 font-mono text-xs uppercase tracking-[0.15em] text-white bg-slate-cobalt active:bg-slate-deep transition-colors"
        >
          <FileText className="w-4 h-4" />
          Devis gratuit
        </a>
      </div>
    </div>
  );
}
import { ChevronRight } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  to?: string;
};

type BreadcrumbsProps = {
  items: BreadcrumbItem[];
};

// Visual breadcrumb trail. Pair with breadcrumbSchema in <Seo />.
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Fil d'Ariane"
      className="font-mono text-[11px] uppercase tracking-[0.18em]"
    >
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={`${item.name}-${index}`}
              className="flex items-center gap-x-2"
            >
              {item.to && !isLast ? (
                <Link
                  href={item.to}
                  className="transition-colors hover:text-slate-cobalt"
                >
                  {item.name}
                </Link>
              ) : (
                <span className={isLast ? "text-muted-foreground" : ""}>
                  {item.name}
                </span>
              )}

              {!isLast && (
                <ChevronRight
                  className="h-3 w-3 text-muted-foreground"
                  aria-hidden="true"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
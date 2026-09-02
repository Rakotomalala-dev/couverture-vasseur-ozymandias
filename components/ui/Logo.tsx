import { site } from "@/lib/site";
import Link from "next/link";

/**
 * Brand logo for Couverture Vasseur.
 * The source asset has a solid black background with blue accents, so it reads
 * cleanly on both the light header (as a contained brand plate) and the dark footer.
 */
export default function Logo({ height = 44, to = "/", className = "", imgClassName = "" }) {
  return (
    <Link
      href={to}
      className={`flex items-center ${className}`}
      aria-label={`${site.name} — accueil`}
    >
      <img
        src={site.logoUrl}
        alt={`${site.name} — couvreur à Angers`}
        style={{ height: `${height}px`, width: "auto" }}
        className={`block ${imgClassName}`}
        loading="eager"
        decoding="async"
      />
    </Link>
  );
}
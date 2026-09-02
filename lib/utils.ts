import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne proprement les classes CSS/Tailwind.
 *
 * Exemple :
 *
 * cn(
 *   "px-4 py-2 bg-blue-500",
 *   condition && "bg-red-500"
 * )
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Indique si l'application est actuellement affichée
 * à l'intérieur d'une iframe.
 *
 * Important :
 * `window` n'existe pas côté serveur.
 */
export const isIframe =
  typeof window !== "undefined" &&
  window.self !== window.top;
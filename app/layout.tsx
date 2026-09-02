import type { Metadata } from "next";
import {
  Inter,
  JetBrains_Mono,
  Space_Grotesk,
} from "next/font/google";

import "./globals.css";

import MobileActionBar from "@/components/layout/MobileActionBar";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import FloatingCTA from "@/components/layout/FloatingCTA";
import CookieConsent from "@/components/layout/CookieConsent";

const SITE_URL = "https://www.couverture-vasseur-ozymandias.vercel.app";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default:
      "Couvreur à Angers — Toiture & ardoise naturelle | Couverture Vasseur",
    template: "%s | Couverture Vasseur",
  },

  description:
    "Artisan couvreur certifié RGE Qualibat à Angers. Spécialiste de l’ardoise naturelle, de la réfection de toiture et de la zinguerie. Devis gratuit sous 48h. Intervention urgence fuite 7j/7.",

  applicationName: "Couverture Vasseur",

  authors: [
    {
      name: "Couverture Vasseur",
    },
  ],

  creator: "Couverture Vasseur",
  publisher: "Couverture Vasseur",

  keywords: [
    "couvreur Angers",
    "couvreur à Angers",
    "entreprise couverture Angers",
    "artisan couvreur Angers",
    "toiture Angers",
    "rénovation toiture Angers",
    "ardoise naturelle Angers",
    "zinguerie Angers",
    "réfection toiture Angers",
    "urgence fuite toiture Angers",
    "RGE Qualibat Angers",
    "couvreur Maine-et-Loire",
    "couvreur 49",
  ],

  alternates: {
    canonical: SITE_URL + "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      {
        url: "/favicon.svg",
        type: "image/svg+xml",
      },
    ],
  },

  manifest: "/manifest.json",

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL + "/",
    siteName: "Couverture Vasseur",

    title:
      "Couvreur à Angers — Toiture & ardoise naturelle | Couverture Vasseur",

    description:
      "Artisan couvreur à Angers spécialisé dans l’ardoise naturelle, la rénovation de toiture et la zinguerie. Devis gratuit sous 48h.",

    images: [
      {
        url: SITE_URL + "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Couverture Vasseur — Artisan couvreur à Angers",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Couvreur à Angers — Couverture Vasseur",

    description:
      "Artisan couvreur RGE Qualibat à Angers. Toiture, ardoise naturelle, rénovation et zinguerie.",

    images: [SITE_URL + "/og-image.jpg"],
  },

  category: "Construction et couverture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <div className="flex min-h-screen flex-col bg-background">
          <Header />

          <main className="flex-1">
            {children}
          </main>

          <Footer />

          <div
            className="h-14 lg:hidden"
            aria-hidden="true"
          />

          <MobileActionBar />
          <FloatingCTA />
          <CookieConsent />
        </div>
      </body>
    </html>
  );
}
"use client";

import { useEffect } from "react";
import { site } from "@/lib/site";

/* -------------------------------------------------------------------------- */
/* Configuration                                                              */
/* -------------------------------------------------------------------------- */

const SITE_URL =
  "https://www.couverture-vasseur-ozymandias.vercel.app";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

export type FaqItem = {
  q: string;
  a: string;
};

export type BreadcrumbItem = {
  name: string;
  url: string;
};

export type JsonLd = Record<string, unknown>;

export type SeoProps = {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  schema?: JsonLd;
  faqItems?: FaqItem[];
  breadcrumbs?: BreadcrumbItem[];
};

/* -------------------------------------------------------------------------- */
/* URL helpers                                                                */
/* -------------------------------------------------------------------------- */

/**
 * Converts a relative URL into an absolute URL.
 * Absolute http/https URLs are returned unchanged.
 */
function toAbsoluteUrl(url: string): string {
  if (/^https?:\/\//i.test(url)) {
    return url;
  }

  return new URL(url, SITE_URL).toString();
}

/* -------------------------------------------------------------------------- */
/* Meta helpers                                                               */
/* -------------------------------------------------------------------------- */

function setMeta(
  name: string,
  content: string,
  attr: "name" | "property" = "name"
): void {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attr}="${name}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

/* -------------------------------------------------------------------------- */
/* Link helpers                                                               */
/* -------------------------------------------------------------------------- */

function setLink(rel: string, href: string): void {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`
  );

  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }

  element.setAttribute("href", href);
}

/* -------------------------------------------------------------------------- */
/* JSON-LD helpers                                                             */
/* -------------------------------------------------------------------------- */

function setJsonLd(id: string, data: JsonLd): void {
  const existingElement = document.getElementById(id);

  let element: HTMLScriptElement;

  if (existingElement instanceof HTMLScriptElement) {
    element = existingElement;
  } else {
    if (existingElement) {
      existingElement.remove();
    }

    element = document.createElement("script");
    element.id = id;
    element.type = "application/ld+json";
    document.head.appendChild(element);
  }

  /**
   * Prevent a "<" character coming from the data from
   * breaking the JSON-LD script content.
   */
  element.textContent = JSON.stringify(data).replace(
    /</g,
    "\\u003c"
  );
}

/* -------------------------------------------------------------------------- */
/* Remove JSON-LD                                                              */
/* -------------------------------------------------------------------------- */

function removeJsonLd(id: string): void {
  const element = document.getElementById(id);

  if (element) {
    element.remove();
  }
}

/* -------------------------------------------------------------------------- */
/* Roofing Schema                                                              */
/* -------------------------------------------------------------------------- */

export function roofingSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",

    name: site.name,

    telephone: site.phone,

    email: site.email,

    address: {
      "@type": "PostalAddress",
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: "49000",
      addressCountry: "FR",
    },

    areaServed: site.communes.map(
      (commune: any) => ({
        "@type": "City",
        name: commune,
      })
    ),

    knowsAbout: [
      "Couverture en ardoise naturelle",
      "Réfection de toiture",
      "Zinguerie",
      "Recherche de fuite",
      "Rénovation de toiture",
    ],

    hasCredential: site.certifications,
  };
}

/* -------------------------------------------------------------------------- */
/* FAQ Schema                                                                  */
/* -------------------------------------------------------------------------- */

export function faqSchema(items: FaqItem[]): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",

    mainEntity: items.map((item) => ({
      "@type": "Question",

      name: item.q,

      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Breadcrumb Schema                                                           */
/* -------------------------------------------------------------------------- */

export function breadcrumbSchema(
  items: BreadcrumbItem[]
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      // Schema.org BreadcrumbList expects a canonical absolute URL.
      item: toAbsoluteUrl(item.url),
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* SEO Component                                                               */
/* -------------------------------------------------------------------------- */

export default function Seo({
  title,
  description,
  canonical,
  ogImage,
  schema,
  faqItems,
  breadcrumbs,
}: SeoProps): null {
  useEffect(() => {
    /* ---------------------------------------------------------------------- */
    /* Basic SEO                                                              */
    /* ---------------------------------------------------------------------- */

    if (title) {
      document.title = title;
    }

    if (description) {
      setMeta("description", description);
    }

    /* ---------------------------------------------------------------------- */
    /* Open Graph                                                             */
    /* ---------------------------------------------------------------------- */

    setMeta(
      "og:title",
      title ?? "",
      "property"
    );

    setMeta(
      "og:description",
      description ?? "",
      "property"
    );

    setMeta(
      "og:type",
      "website",
      "property"
    );

    setMeta(
      "og:locale",
      "fr_FR",
      "property"
    );

    setMeta(
      "og:site_name",
      site.name,
      "property"
    );

    if (ogImage) {
      setMeta(
        "og:image",
        toAbsoluteUrl(ogImage),
        "property"
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Twitter                                                                */
    /* ---------------------------------------------------------------------- */

    setMeta(
      "twitter:card",
      "summary_large_image"
    );

    setMeta(
      "twitter:title",
      title ?? ""
    );

    setMeta(
      "twitter:description",
      description ?? ""
    );

    if (ogImage) {
      setMeta(
        "twitter:image",
        toAbsoluteUrl(ogImage)
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Canonical                                                              */
    /* ---------------------------------------------------------------------- */

    if (canonical) {
      setLink(
        "canonical",
        toAbsoluteUrl(canonical)
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Main business JSON-LD                                                  */
    /* ---------------------------------------------------------------------- */

    setJsonLd(
      "ld-roofing",
      roofingSchema()
    );

    /* ---------------------------------------------------------------------- */
    /* Page Schema                                                            */
    /* ---------------------------------------------------------------------- */

    if (schema) {
      setJsonLd(
        "ld-page",
        schema
      );
    } else {
      removeJsonLd("ld-page");
    }

    /* ---------------------------------------------------------------------- */
    /* FAQ Schema                                                             */
    /* ---------------------------------------------------------------------- */

    if (
      faqItems &&
      faqItems.length > 0
    ) {
      setJsonLd(
        "ld-faq",
        faqSchema(faqItems)
      );
    } else {
      removeJsonLd("ld-faq");
    }

    /* ---------------------------------------------------------------------- */
    /* Breadcrumb Schema                                                      */
    /* ---------------------------------------------------------------------- */

    if (
      breadcrumbs &&
      breadcrumbs.length > 0
    ) {
      setJsonLd(
        "ld-breadcrumb",
        breadcrumbSchema(breadcrumbs)
      );
    } else {
      removeJsonLd("ld-breadcrumb");
    }
  }, [
    title,
    description,
    canonical,
    ogImage,
    schema,
    faqItems,
    breadcrumbs,
  ]);

  return null;
}


// "use client";

// import { useEffect } from "react";
// import { site } from "@/lib/site";

// /* -------------------------------------------------------------------------- */
// /* Types                                                                      */
// /* -------------------------------------------------------------------------- */

// export type FaqItem = {
//   q: string;
//   a: string;
// };

// export type BreadcrumbItem = {
//   name: string;
//   url: string;
// };

// export type JsonLd = Record<string, unknown>;

// export type SeoProps = {
//   title?: string;
//   description?: string;
//   canonical?: string;
//   ogImage?: string;
//   schema?: JsonLd;
//   faqItems?: FaqItem[];
//   breadcrumbs?: BreadcrumbItem[];
// };

// /* -------------------------------------------------------------------------- */
// /* Meta helpers                                                               */
// /* -------------------------------------------------------------------------- */

// function setMeta(
//   name: string,
//   content: string,
//   attr: "name" | "property" = "name"
// ): void {
//   let element = document.head.querySelector<HTMLMetaElement>(
//     `meta[${attr}="${name}"]`
//   );

//   if (!element) {
//     element = document.createElement("meta");

//     element.setAttribute(attr, name);

//     document.head.appendChild(element);
//   }

//   element.setAttribute("content", content);
// }

// /* -------------------------------------------------------------------------- */
// /* Link helpers                                                               */
// /* -------------------------------------------------------------------------- */

// function setLink(
//   rel: string,
//   href: string
// ): void {
//   let element = document.head.querySelector<HTMLLinkElement>(
//     `link[rel="${rel}"]`
//   );

//   if (!element) {
//     element = document.createElement("link");

//     element.setAttribute("rel", rel);

//     document.head.appendChild(element);
//   }

//   element.setAttribute("href", href);
// }

// /* -------------------------------------------------------------------------- */
// /* JSON-LD helpers                                                            */
// /* -------------------------------------------------------------------------- */

// // function setJsonLd(
// //   id: string,
// //   data: JsonLd
// // ): void {
// //   let element = document.getElementById(id);

// //   if (!(element instanceof HTMLScriptElement)) {
// //     element = document.createElement("script");

// //     element.id = id;
// //     element.type = "application/ld+json";

// //     document.head.appendChild(element);
// //   }

// //   /*
// //    * Évite qu'un caractère "<" provenant des données
// //    * puisse casser le contenu du script JSON-LD.
// //    */
// //   element.textContent = JSON.stringify(data).replace(
// //     /</g,
// //     "\\u003c"
// //   );
// // }

// function setJsonLd(
//   id: string,
//   data: JsonLd
// ): void {
//   const existingElement = document.getElementById(id);

//   let element: HTMLScriptElement;

//   if (existingElement instanceof HTMLScriptElement) {
//     element = existingElement;
//   } else {
//     if (existingElement) {
//       existingElement.remove();
//     }

//     element = document.createElement("script");

//     element.id = id;
//     element.type = "application/ld+json";

//     document.head.appendChild(element);
//   }

//   /*
//    * Évite qu'un caractère "<" provenant des données
//    * puisse casser le contenu du script JSON-LD.
//    */
//   element.textContent = JSON.stringify(data).replace(
//     /</g,
//     "\\u003c"
//   );
// }

// /* -------------------------------------------------------------------------- */
// /* Remove JSON-LD                                                             */
// /* -------------------------------------------------------------------------- */

// function removeJsonLd(id: string): void {
//   const element = document.getElementById(id);

//   if (element) {
//     element.remove();
//   }
// }

// /* -------------------------------------------------------------------------- */
// /* Roofing Schema                                                             */
// /* -------------------------------------------------------------------------- */

// export function roofingSchema(): JsonLd {
//   return {
//     "@context": "https://schema.org",
//     "@type": "RoofingContractor",

//     name: site.name,

//     telephone: site.phone,

//     email: site.email,

//     address: {
//       "@type": "PostalAddress",
//       addressLocality: site.city,
//       addressRegion: site.region,
//       postalCode: "49000",
//       addressCountry: "FR",
//     },

//     areaServed: site.communes.map(
//       (commune:any) => ({
//         "@type": "City",
//         name: commune,
//       })
//     ),

//     knowsAbout: [
//       "Couverture en ardoise naturelle",
//       "Réfection de toiture",
//       "Zinguerie",
//       "Recherche de fuite",
//       "Rénovation de toiture",
//     ],

//     hasCredential: site.certifications,
//   };
// }

// /* -------------------------------------------------------------------------- */
// /* FAQ Schema                                                                 */
// /* -------------------------------------------------------------------------- */

// export function faqSchema(
//   items: FaqItem[]
// ): JsonLd {
//   return {
//     "@context": "https://schema.org",

//     "@type": "FAQPage",

//     mainEntity: items.map(
//       (item) => ({
//         "@type": "Question",

//         name: item.q,

//         acceptedAnswer: {
//           "@type": "Answer",
//           text: item.a,
//         },
//       })
//     ),
//   };
// }

// /* -------------------------------------------------------------------------- */
// /* Breadcrumb Schema                                                          */
// /* -------------------------------------------------------------------------- */

// export function breadcrumbSchema(
//   items: BreadcrumbItem[]
// ): JsonLd {
//   return {
//     "@context": "https://schema.org",

//     "@type": "BreadcrumbList",

//     itemListElement: items.map(
//       (item, index) => ({
//         "@type": "ListItem",

//         position: index + 1,

//         name: item.name,

//         item: item.url,
//       })
//     ),
//   };
// }

// /* -------------------------------------------------------------------------- */
// /* SEO Component                                                              */
// /* -------------------------------------------------------------------------- */

// export default function Seo({
//   title,
//   description,
//   canonical,
//   ogImage,
//   schema,
//   faqItems,
//   breadcrumbs,
// }: SeoProps): null {
//   useEffect(() => {
//     /* ---------------------------------------------------------------------- */
//     /* Basic SEO                                                               */
//     /* ---------------------------------------------------------------------- */

//     if (title) {
//       document.title = title;
//     }

//     if (description) {
//       setMeta(
//         "description",
//         description
//       );
//     }

//     /* ---------------------------------------------------------------------- */
//     /* Open Graph                                                              */
//     /* ---------------------------------------------------------------------- */

//     setMeta(
//       "og:title",
//       title ?? "",
//       "property"
//     );

//     setMeta(
//       "og:description",
//       description ?? "",
//       "property"
//     );

//     setMeta(
//       "og:type",
//       "website",
//       "property"
//     );

//     setMeta(
//       "og:locale",
//       "fr_FR",
//       "property"
//     );

//     setMeta(
//       "og:site_name",
//       site.name,
//       "property"
//     );

//     if (ogImage) {
//       setMeta(
//         "og:image",
//         ogImage,
//         "property"
//       );
//     }

//     /* ---------------------------------------------------------------------- */
//     /* Twitter                                                                 */
//     /* ---------------------------------------------------------------------- */

//     setMeta(
//       "twitter:card",
//       "summary_large_image"
//     );

//     setMeta(
//       "twitter:title",
//       title ?? ""
//     );

//     setMeta(
//       "twitter:description",
//       description ?? ""
//     );

//     if (ogImage) {
//       setMeta(
//         "twitter:image",
//         ogImage
//       );
//     }

//     /* ---------------------------------------------------------------------- */
//     /* Canonical                                                               */
//     /* ---------------------------------------------------------------------- */

//     if (canonical) {
//       setLink(
//         "canonical",
//         canonical
//       );
//     }

//     /* ---------------------------------------------------------------------- */
//     /* Main business JSON-LD                                                   */
//     /* ---------------------------------------------------------------------- */

//     setJsonLd(
//       "ld-roofing",
//       roofingSchema()
//     );

//     /* ---------------------------------------------------------------------- */
//     /* Page Schema                                                             */
//     /* ---------------------------------------------------------------------- */

//     if (schema) {
//       setJsonLd(
//         "ld-page",
//         schema
//       );
//     } else {
//       removeJsonLd("ld-page");
//     }

//     /* ---------------------------------------------------------------------- */
//     /* FAQ Schema                                                              */
//     /* ---------------------------------------------------------------------- */

//     if (
//       faqItems &&
//       faqItems.length > 0
//     ) {
//       setJsonLd(
//         "ld-faq",
//         faqSchema(faqItems)
//       );
//     } else {
//       removeJsonLd("ld-faq");
//     }

//     /* ---------------------------------------------------------------------- */
//     /* Breadcrumb Schema                                                       */
//     /* ---------------------------------------------------------------------- */

//     if (
//       breadcrumbs &&
//       breadcrumbs.length > 0
//     ) {
//       setJsonLd(
//         "ld-breadcrumb",
//         breadcrumbSchema(breadcrumbs)
//       );
//     } else {
//       removeJsonLd("ld-breadcrumb");
//     }
//   }, [
//     title,
//     description,
//     canonical,
//     ogImage,
//     schema,
//     faqItems,
//     breadcrumbs,
//   ]);

//   return null;
// }

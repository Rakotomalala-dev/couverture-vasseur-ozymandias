export const WIX_MEDIA_HOSTS = {
  "media.base44.com": "/images/public/",
  "static.wixstatic.com": "/media/",
} as const;

export const DEFAULT_TRANSFORM_WIDTH = 1024;

export const IMAGE_LOAD_MODE = {
  OPTIMIZED: "optimized",
  ORIGINAL: "original",
  FALLBACK: "fallback",
} as const;

export type ImageLoadMode =
  (typeof IMAGE_LOAD_MODE)[keyof typeof IMAGE_LOAD_MODE];

export type FocalPoint = {
  x: number;
  y: number;
};

export type ParsedWixMediaUrl = {
  baseUrl: string;
  filename: string;
};

export type TransformOptions = {
  width: number;
  height?: number;
  crop: boolean;
  focalPoint?: FocalPoint;
  quality: number;
};

const DEVICE_PIXEL_RATIOS = [1, 2, 3] as const;

const MAX_DIMENSION = 6000;

/* -------------------------------------------------------------------------- */
/* Parse Wix URL                                                              */
/* -------------------------------------------------------------------------- */

/**
 * Analyse une URL Wix canonique.
 *
 * Retourne les informations nécessaires à la génération
 * des URLs transformées.
 *
 * Retourne null si l'URL n'est pas une URL Wix supportée.
 */
export function parseWixMediaUrl(
  src: string
): ParsedWixMediaUrl | null {
  try {
    const url = new URL(src);

    /*
     * Sécurité :
     * uniquement HTTPS,
     * aucun username/password,
     * aucun port différent de 443.
     */
    if (
      url.protocol !== "https:" ||
      url.username ||
      url.password ||
      (url.port && url.port !== "443")
    ) {
      return null;
    }

    const pathPrefix =
      WIX_MEDIA_HOSTS[
        url.hostname as keyof typeof WIX_MEDIA_HOSTS
      ];

    if (!pathPrefix) {
      return null;
    }

    /*
     * Si l'URL contient déjà une transformation Wix :
     *
     * /v1/fill/...
     * /v1/fit/...
     *
     * on récupère uniquement le chemin original.
     */
    const transformed = url.pathname.match(
      /^(.*)\/v1\/(?:fill|fit)\/[^/]+\/[^/]+$/i
    );

    const basePath = transformed
      ? transformed[1]
      : url.pathname;

    const filename = basePath.split("/").pop();

    /*
     * Validation du chemin et du fichier.
     */
    if (
      !basePath.startsWith(pathPrefix) ||
      !filename ||
      !/\.[a-z0-9]+$/i.test(filename) ||
      /\.svg$/i.test(filename)
    ) {
      return null;
    }

    return {
      baseUrl: `${url.origin}${basePath}`,
      filename,
    };
  } catch {
    return null;
  }
}

/* -------------------------------------------------------------------------- */
/* Dimensions                                                                 */
/* -------------------------------------------------------------------------- */

/**
 * Limite une dimension entre 1 et 6000 pixels.
 */
function clampDim(value: number): number {
  if (!Number.isFinite(value)) {
    return 1;
  }

  return Math.min(
    Math.max(Math.round(value), 1),
    MAX_DIMENSION
  );
}

/**
 * Limite une valeur entre 0 et 1.
 */
function clamp01(value: number): number {
  if (!Number.isFinite(value)) {
    return 0;
  }

  return Math.min(
    1,
    Math.max(0, value)
  );
}

/* -------------------------------------------------------------------------- */
/* Build Wix transform URL                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Génère une URL Wix transformée.
 *
 * Exemple :
 *
 * /v1/fill/w_1200,h_800,al_c,q_90,enc_webp/...
 */
export function buildTransformUrl(
  parsed: ParsedWixMediaUrl,
  options: TransformOptions
): string {
  const {
    width,
    height,
    crop,
    focalPoint,
    quality,
  } = options;

  const params: string[] = [
    `w_${clampDim(width)}`,
    `h_${clampDim(height ?? width)}`,
  ];

  /*
   * Paramètres de recadrage.
   */
  if (crop) {
    if (focalPoint) {
      params.push(
        `fp_${clamp01(focalPoint.x).toFixed(2)}_${clamp01(
          focalPoint.y
        ).toFixed(2)}`
      );
    } else {
      params.push("al_c");
    }
  }

  /*
   * Qualité et compression.
   */
  params.push(
    `q_${clampQuality(quality)}`,
    "usm_0.66_1.00_0.01",
    "enc_webp",
    "quality_auto"
  );

  /*
   * Wix conserve les GIF.
   * Les autres formats deviennent WebP.
   */
  const outputName = /\.gif$/i.test(
    parsed.filename
  )
    ? parsed.filename
    : parsed.filename.replace(
        /\.[a-z0-9]+$/i,
        ""
      ) + ".webp";

  return [
    parsed.baseUrl,
    "v1",
    crop ? "fill" : "fit",
    params.join(","),
    outputName,
  ].join("/");
}

/* -------------------------------------------------------------------------- */
/* Quality                                                                    */
/* -------------------------------------------------------------------------- */

/**
 * Limite la qualité entre 1 et 100.
 */
function clampQuality(value: number): number {
  if (!Number.isFinite(value)) {
    return 90;
  }

  return Math.min(
    100,
    Math.max(1, Math.round(value))
  );
}

/* -------------------------------------------------------------------------- */
/* Responsive srcSet                                                          */
/* -------------------------------------------------------------------------- */

/**
 * Génère un srcSet pour les écrans 1x, 2x et 3x.
 *
 * Exemple :
 *
 * image-800.webp 1x,
 * image-1600.webp 2x,
 * image-2400.webp 3x
 */
export function buildSrcSet(
  parsed: ParsedWixMediaUrl,
  options: TransformOptions
): string {
  return DEVICE_PIXEL_RATIOS.map(
    (dpr) => {
      const width =
        options.width * dpr;

      const height =
        options.height
          ? options.height * dpr
          : undefined;

      const url = buildTransformUrl(
        parsed,
        {
          ...options,
          width,
          height,
        }
      );

      return `${url} ${dpr}x`;
    }
  ).join(", ");
}

/* -------------------------------------------------------------------------- */
/* Original URL                                                               */
/* -------------------------------------------------------------------------- */

/**
 * Retourne l'URL originale de l'image.
 *
 * Si l'image a été analysée comme une image Wix,
 * on utilise son URL canonique.
 */
export function getOriginalImageUrl(
  src: string,
  parsed: ParsedWixMediaUrl | null
): string {
  return parsed?.baseUrl ?? src;
}

/* -------------------------------------------------------------------------- */
/* Load mode                                                                  */
/* -------------------------------------------------------------------------- */

/**
 * Détermine la prochaine étape après une erreur.
 *
 * OPTIMIZED
 *    ↓ erreur
 * ORIGINAL
 *    ↓ erreur
 * FALLBACK
 */
export function nextImageLoadMode(
  mode: ImageLoadMode
): ImageLoadMode {
  if (
    mode === IMAGE_LOAD_MODE.OPTIMIZED
  ) {
    return IMAGE_LOAD_MODE.ORIGINAL;
  }

  return IMAGE_LOAD_MODE.FALLBACK;
}
"use client";

import * as React from "react";

import { useSize } from "@/hooks/use-size";
import { cn } from "@/lib/utils";

import {
  buildSrcSet,
  buildTransformUrl,
  DEFAULT_TRANSFORM_WIDTH,
  getOriginalImageUrl,
  IMAGE_LOAD_MODE,
  nextImageLoadMode,
  parseWixMediaUrl,
} from "./image-helpers";

/* -------------------------------------------------------------------------- */
/* Types                                                                      */
/* -------------------------------------------------------------------------- */

type FittingType = "fill" | "fit" | string;

type FocalPoint = {
  x: number;
  y: number;
};

type ParsedWixImage = NonNullable<ReturnType<typeof parseWixMediaUrl>>;

type ImageWrapperProps = {
  aspectRatio?: string;
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
};

type ResponsiveImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet"
> & {
  parsed: ParsedWixImage;
  fittingType: FittingType;
  focalPoint?: FocalPoint;
  quality: number;
  aspectRatio?: string;
};

export type ImageProps = Omit<
  React.ImgHTMLAttributes<HTMLImageElement>,
  "src" | "srcSet"
> & {
  src?: string | null;

  /**
   * fill = couvre toute la zone avec recadrage
   * fit  = conserve entièrement l'image
   */
  fittingType?: FittingType;

  /**
   * Dimensions originales de l'image.
   * Permet de stabiliser le layout avant le chargement.
   */
  originWidth?: number;
  originHeight?: number;

  /**
   * Point focal pour le recadrage Wix.
   */
  focalPointX?: number;
  focalPointY?: number;

  /**
   * Qualité de transformation Wix.
   */
  quality?: number;
};

/* -------------------------------------------------------------------------- */
/* Constants                                                                  */
/* -------------------------------------------------------------------------- */

const FALLBACK_IMAGE_URL =
  "https://static.wixstatic.com/media/12d367_4f26ccd17f8f4e3a8958306ea08c2332~mv2.png";

/* -------------------------------------------------------------------------- */
/* Image Wrapper                                                              */
/* -------------------------------------------------------------------------- */

const ImageWrapper = React.forwardRef<HTMLSpanElement, ImageWrapperProps>(
  function ImageWrapper(
    { aspectRatio, className, style, children },
    ref
  ) {
    return (
      <span
        ref={ref}
        className={cn("relative inline-block", className)}
        style={{
          aspectRatio,
          ...style,
        }}
      >
        {children}
      </span>
    );
  }
);

/* -------------------------------------------------------------------------- */
/* Responsive Image                                                           */
/* -------------------------------------------------------------------------- */

const ResponsiveImage = React.forwardRef<
  HTMLImageElement,
  ResponsiveImageProps
>(function ResponsiveImage(
  {
    parsed,
    fittingType,
    focalPoint,
    quality,
    className,
    style,
    aspectRatio,
    onLoad,
    ...props
  },
  parentRef
) {
  const wrapperRef = React.useRef<HTMLSpanElement | null>(null);
  const imgRef = React.useRef<HTMLImageElement | null>(null);

  const size = useSize(wrapperRef);

  const [loaded, setLoaded] = React.useState(false);

  React.useImperativeHandle(
    parentRef,
    () => imgRef.current as HTMLImageElement,
    []
  );

  /*
   * Lorsque l'image change, on réactive le placeholder.
   */
  React.useEffect(() => {
    setLoaded(false);
  }, [parsed.baseUrl]);

  /*
   * "fill" => recadrage
   * "fit"  => image entièrement visible
   */
  const crop = fittingType !== "fit";

  /*
   * Tant que le conteneur n'est pas mesuré,
   * on ne génère aucune URL d'image.
   */
  const options = size
    ? {
        width: size.width || DEFAULT_TRANSFORM_WIDTH,
        height: size.height || undefined,
        crop,
        focalPoint: crop ? focalPoint : undefined,
        quality,
      }
    : null;

  return (
    <ImageWrapper
      ref={wrapperRef}
      aspectRatio={aspectRatio}
      className={className}
      style={style}
    >
      {/* ------------------------------------------------------------------ */}
      {/* Blur placeholder                                                   */}
      {/* ------------------------------------------------------------------ */}

      {options && !loaded && (
        <img
          src={buildTransformUrl(parsed, {
            ...options,
            width: 20,
            height: options.height
              ? Math.max(
                  1,
                  Math.round(
                    (20 * options.height) / options.width
                  )
                )
              : undefined,
            quality: 20,
          })}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full"
          style={{
            objectFit:
              fittingType === "fit"
                ? "contain"
                : "cover",
            filter: "blur(10px)",
            transform: "scale(1.1)",
          }}
        />
      )}

      {/* ------------------------------------------------------------------ */}
      {/* Main image                                                         */}
      {/* ------------------------------------------------------------------ */}

      {options && (
        <img
          ref={imgRef}
          src={buildTransformUrl(parsed, options)}
          srcSet={buildSrcSet(parsed, options)}
          loading="lazy"
          className={cn(
            "absolute inset-0 h-full w-full",
            fittingType === "fit"
              ? "object-contain"
              : "object-cover"
          )}
          onLoad={(event) => {
            setLoaded(true);
            onLoad?.(event);
          }}
          {...props}
        />
      )}
    </ImageWrapper>
  );
});

/* -------------------------------------------------------------------------- */
/* Main Image Component                                                       */
/* -------------------------------------------------------------------------- */

const Image = React.forwardRef<HTMLImageElement, ImageProps>(
  function Image(
    {
      src,
      fittingType = "fill",
      originWidth,
      originHeight,
      focalPointX,
      focalPointY,
      quality = 90,
      onError,
      ...props
    },
    ref
  ) {
    /*
     * On analyse l'URL uniquement si elle existe
     * et qu'elle n'est pas déjà notre fallback.
     */
    const parsedSource =
      src && src !== FALLBACK_IMAGE_URL
        ? parseWixMediaUrl(src)
        : null;

    /*
     * Si l'URL est une image Wix :
     * => tentative optimisée
     *
     * Sinon :
     * => image originale
     */
    const initialMode = parsedSource
      ? IMAGE_LOAD_MODE.OPTIMIZED
      : IMAGE_LOAD_MODE.ORIGINAL;

    const [loadState, setLoadState] = React.useState<{
      src: string | null | undefined;
      mode: (typeof IMAGE_LOAD_MODE)[keyof typeof IMAGE_LOAD_MODE];
    }>({
      src,
      mode: initialMode,
    });

    /*
     * Si src change, on recommence le cycle.
     */
    React.useEffect(() => {
      setLoadState({
        src,
        mode: initialMode,
      });
    }, [src, initialMode]);

    /*
     * Évite d'utiliser un ancien mode lorsque src change.
     */
    const mode =
      loadState.src === src
        ? loadState.mode
        : initialMode;

    /* ---------------------------------------------------------------------- */
    /* Error handling                                                         */
    /* ---------------------------------------------------------------------- */

    const handleError = React.useCallback(
      (event: React.SyntheticEvent<HTMLImageElement>) => {
        /*
         * Nous sommes déjà sur le fallback.
         */
        if (mode === IMAGE_LOAD_MODE.FALLBACK) {
          return;
        }

        const nextMode = nextImageLoadMode(mode);

        setLoadState({
          src,
          mode: nextMode,
        });

        /*
         * On appelle onError uniquement lorsqu'on arrive
         * au dernier niveau : le fallback.
         */
        if (nextMode === IMAGE_LOAD_MODE.FALLBACK) {
          onError?.(event);
        }
      },
      [mode, src, onError]
    );

    const imageProps: React.ImgHTMLAttributes<HTMLImageElement> = {
      ...props,
      onError: handleError,
    };

    /* ---------------------------------------------------------------------- */
    /* No image                                                               */
    /* ---------------------------------------------------------------------- */

    if (!src) {
      return (
        <img
          ref={ref}
          src={FALLBACK_IMAGE_URL}
          {...imageProps}
          data-empty-image
          alt={props.alt ?? ""}
        />
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Original / fallback image                                              */
    /* ---------------------------------------------------------------------- */

    const parsed =
      mode === IMAGE_LOAD_MODE.OPTIMIZED
        ? parsedSource
        : null;

    if (!parsed) {
      const isErrorMode =
        mode === IMAGE_LOAD_MODE.FALLBACK;

      const imageSrc = isErrorMode
        ? FALLBACK_IMAGE_URL
        : getOriginalImageUrl(src, parsedSource);

      return (
        <img
          ref={ref}
          src={imageSrc}
          {...imageProps}
          data-error-image={
            isErrorMode ? true : undefined
          }
          alt={props.alt ?? ""}
        />
      );
    }

    /* ---------------------------------------------------------------------- */
    /* Focal point                                                            */
    /* ---------------------------------------------------------------------- */

    const focalPoint =
      typeof focalPointX === "number" &&
      typeof focalPointY === "number"
        ? {
            x: focalPointX,
            y: focalPointY,
          }
        : undefined;

    /* ---------------------------------------------------------------------- */
    /* Aspect ratio                                                           */
    /* ---------------------------------------------------------------------- */

    const aspectRatio =
      typeof originWidth === "number" &&
      typeof originHeight === "number" &&
      originWidth > 0 &&
      originHeight > 0
        ? `${originWidth} / ${originHeight}`
        : undefined;

    /* ---------------------------------------------------------------------- */
    /* Responsive Wix image                                                   */
    /* ---------------------------------------------------------------------- */

    return (
      <ResponsiveImage
        ref={ref}
        parsed={parsed}
        fittingType={fittingType}
        focalPoint={focalPoint}
        quality={quality}
        aspectRatio={aspectRatio}
        {...imageProps}
      />
    );
  }
);

Image.displayName = "Image";

export { Image };
"use client";

import * as React from "react";

export type ElementSize = {
  width: number;
  height: number;
};

export function useSize<T extends HTMLElement>(
  ref: React.RefObject<T | null>
): ElementSize | null {
  const [size, setSize] =
    React.useState<ElementSize | null>(null);

  React.useLayoutEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    /* ---------------------------------------------------------------------- */
    /* Initial measurement                                                    */
    /* ---------------------------------------------------------------------- */

    const rect =
      element.getBoundingClientRect();

    setSize({
      width: rect.width,
      height: rect.height,
    });

    /* ---------------------------------------------------------------------- */
    /* ResizeObserver                                                         */
    /* ---------------------------------------------------------------------- */

    const observer =
      new ResizeObserver(([entry]) => {
        if (!entry) {
          return;
        }

        const {
          width,
          height,
        } = entry.contentRect;

        setSize({
          width,
          height,
        });
      });

    observer.observe(element);

    /* ---------------------------------------------------------------------- */
    /* Cleanup                                                                */
    /* ---------------------------------------------------------------------- */

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return size;
}
"use client"
import { useRef, useState, useCallback, useEffect } from "react";
import { Image } from "@/components/ui/image";

// Accessible before/after slider. Keyboard + pointer + touch.
// Uses clip-path so the "before" image keeps full container width.
export default function BeforeAfter({ before, after, beforeAlt, afterAlt }:any) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const dragging = useRef(false);

//   const updateFromClientX = useCallback((clientX:any) => {
//     const el = containerRef.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     const pct = ((clientX - rect.left) / rect.width) * 100;
//     setPos(Math.max(0, Math.min(100, pct)));
//   }, []);

const updateFromClientX = useCallback((clientX: number) => {
  const el = containerRef.current;

  if (!el) return;

  const rect = el.getBoundingClientRect();

  const pct = ((clientX - rect.left) / rect.width) * 100;

  setPos(Math.max(0, Math.min(100, pct)));
}, []);

  useEffect(() => {
    const onMove = (e:any) => {
      if (!dragging.current) return;
      if (e.touches) e.preventDefault();
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      updateFromClientX(x);
    };
    const onUp = () => {
      dragging.current = false;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [updateFromClientX]);

  const onKeyDown = (e:any) => {
    if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 4));
    if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 4));
  };

  return (
    <div
      ref={containerRef}
      className="relative aspect-[4/3] w-full overflow-hidden bg-slate-deep select-none"
    >
      {/* After (base layer) */}
      <Image
        src={after}
        alt={afterAlt}
        fittingType="fill"
        className="absolute inset-0 h-full w-full"
      />
      <span className="pointer-events-none absolute bottom-4 right-4 z-10 bg-slate-deep/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
        Après
      </span>

      {/* Before (clipped layer) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image
          src={before}
          alt={beforeAlt}
          fittingType="fill"
          className="absolute inset-0 h-full w-full"
        />
        <span className="pointer-events-none absolute bottom-4 left-4 z-10 bg-white/90 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-deep">
          Avant
        </span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 w-px bg-white"
        style={{ left: `${pos}%` }}
      >
        <button
          type="button"
          aria-label="Glisser pour comparer avant et après"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          role="slider"
          onKeyDown={onKeyDown}
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={(e) => {
            dragging.current = true;
            updateFromClientX(e.touches[0].clientX);
          }}
          className="absolute top-1/2 left-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize items-center justify-center rounded-full bg-white shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-cobalt"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0C131C" strokeWidth="2">
            <path d="M8 7l-5 5 5 5M16 7l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
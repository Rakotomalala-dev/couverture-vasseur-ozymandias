"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import {
  forwardRef,
  type ElementType,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: ElementType;
};

const Reveal = forwardRef<HTMLElement, RevealProps>(
  (
    {
      children,
      className,
      delay = 0,
      as = "div",
    },
    forwardedRef
  ) => {
    const ref = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);
    const [reduced, setReduced] = useState(false);

    /**
     * Détecte prefers-reduced-motion
     */
    useEffect(() => {
      const mediaQuery = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      );

      const handleChange = (event: MediaQueryListEvent) => {
        setReduced(event.matches);
      };

      setReduced(mediaQuery.matches);

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }, []);

    /**
     * IntersectionObserver
     */
    useEffect(() => {
      if (reduced) {
        setVisible(true);
        return;
      }

      const node = ref.current;

      if (!node) {
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            setVisible(true);
            observer.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -8% 0px",
        }
      );

      observer.observe(node);

      return () => {
        observer.disconnect();
      };
    }, [reduced]);

    /**
     * Fusionne la ref interne avec la ref éventuellement
     * fournie par le parent.
     */
    const setRefs = (node: HTMLElement | null) => {
      ref.current = node;

      if (!forwardedRef) {
        return;
      }

      if (typeof forwardedRef === "function") {
        forwardedRef(node);
      } else {
        forwardedRef.current = node;
      }
    };

    const MotionTag = motion.create(as);

    return (
      <MotionTag
        ref={setRefs}
        className={className}
        initial={
          reduced
            ? false
            : {
                opacity: 0,
                y: 18,
              }
        }
        animate={
          reduced || visible
            ? {
                opacity: 1,
                y: 0,
              }
            : undefined
        }
        transition={
          reduced
            ? {
                duration: 0,
              }
            : {
                duration: 0.7,
                delay,
                ease: [0.16, 1, 0.3, 1],
              }
        }
      >
        {children}
      </MotionTag>
    );
  }
);

Reveal.displayName = "Reveal";

export default Reveal;
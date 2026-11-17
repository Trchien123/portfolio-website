import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "./motion";

/**
 * Marks an element with data-reveal="out" and flips it to "in" the first time
 * it enters the viewport. Children use the .rv-draw / .rv-wipe / .rv-up /
 * .rv-fade classes (index.css) and an optional --d delay.
 */
export function useReveal({ immediate = false, threshold = 0.2 } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (immediate || prefersReducedMotion() || !("IntersectionObserver" in window)) {
      element.dataset.reveal = "in";
      return;
    }
    element.dataset.reveal = "out";
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        element.dataset.reveal = "in";
        observer.disconnect();
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate, threshold]);

  return ref;
}

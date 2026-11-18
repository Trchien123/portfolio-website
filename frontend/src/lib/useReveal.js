import { useCallback, useEffect, useRef } from "react";
import { prefersReducedMotion } from "./motion";

/**
 * Reveal choreography. Returns a callback ref: the element is marked
 * data-reveal="out" before the first paint (so the start state is drawn),
 * then flips to "in":
 * - `immediate`: two frames after mount (on-load animations like the hero);
 * - otherwise: the first time it enters the viewport. Observation starts only
 *   after the page has loaded, so the browser's scroll restoration on reload
 *   can't reveal sections the visitor hasn't scrolled to yet.
 * Children animate with .rv-draw / .rv-wipe / .rv-up / .rv-fade (index.css).
 */
export function useReveal({ immediate = false, threshold = 0.2 } = {}) {
  const nodeRef = useRef(null);

  const setRef = useCallback((node) => {
    if (node && !node.dataset.reveal) node.dataset.reveal = prefersReducedMotion() ? "in" : "out";
    nodeRef.current = node;
  }, []);

  useEffect(() => {
    const element = nodeRef.current;
    if (!element) return;
    const reveal = () => (element.dataset.reveal = "in");

    if (prefersReducedMotion() || !("IntersectionObserver" in window)) {
      reveal();
      return;
    }

    let frame;
    let observer;

    if (immediate) {
      frame = requestAnimationFrame(() => (frame = requestAnimationFrame(reveal)));
      return () => cancelAnimationFrame(frame);
    }

    const start = () => {
      frame = requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          ([entry]) => {
            if (!entry.isIntersecting) return;
            reveal();
            observer.disconnect();
          },
          { threshold }
        );
        observer.observe(element);
      });
    };

    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });

    return () => {
      window.removeEventListener("load", start);
      cancelAnimationFrame(frame);
      observer?.disconnect();
    };
  }, [immediate, threshold]);

  return setRef;
}

import { prefersReducedMotion } from "./motion";

// Scrolls to an in-page section by id. Returns false if it isn't on this page.
export function scrollToSection(id) {
  const element = document.getElementById(id);
  if (!element) return false;
  element.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
  return true;
}

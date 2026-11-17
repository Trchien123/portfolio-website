import { useCallback, useSyncExternalStore } from "react";

// Same key and values as the inline script in index.html.
const STORAGE_KEY = "theme";
const DARK_QUERY = "(prefers-color-scheme: dark)";

function readStoredTheme() {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    return value === "light" || value === "dark" ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.style.colorScheme = theme;
}

export function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

// An explicit choice: applied and remembered.
export function setTheme(theme) {
  applyTheme(theme);
  try {
    localStorage.setItem(STORAGE_KEY, theme);
  } catch {
    // Storage unavailable (private mode): theme still applies for this visit.
  }
}

function subscribe(onChange) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

  // Follow the system theme live until the visitor makes a choice.
  const media = window.matchMedia(DARK_QUERY);
  const onSystemChange = () => {
    if (!readStoredTheme()) applyTheme(media.matches ? "dark" : "light");
  };
  media.addEventListener("change", onSystemChange);

  return () => {
    observer.disconnect();
    media.removeEventListener("change", onSystemChange);
  };
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "light");
  const toggleTheme = useCallback(() => {
    setTheme(getTheme() === "dark" ? "light" : "dark");
  }, []);
  return { theme, toggleTheme };
}

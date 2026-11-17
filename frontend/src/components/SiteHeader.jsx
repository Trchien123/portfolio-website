import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Wordmark from "./Wordmark";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Projects", id: "projects" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Blogs", id: "blogs" },
  { label: "Contact", id: "contact" },
];

const SiteHeader = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  // Arriving on "/#id" from another route: scroll once the section exists.
  useEffect(() => {
    if (pathname !== "/" || !hash) return;
    const frame = requestAnimationFrame(() => scrollToSection(hash.slice(1)));
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  // Escape closes the mobile menu and returns focus to its button.
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (event) => {
      if (event.key !== "Escape") return;
      setIsOpen(false);
      menuButtonRef.current?.focus();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setIsOpen(false);
    if (pathname === "/" && scrollToSection(id)) return;
    navigate(`/#${id}`);
  };

  const renderLinks = (linkClassName) =>
    NAV_ITEMS.map(({ label, id }) => (
      <li key={id}>
        <Link
          to={`/#${id}`}
          onClick={(event) => handleNavClick(event, id)}
          className={cn(linkClassName, id === "contact" ? "text-accent hover:text-accent-hover" : "text-fg-muted hover:text-fg")}
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-bg/80 backdrop-blur">
      <a
        href="#main"
        className="sr-only rounded-sm bg-accent px-3 py-2 text-sm font-medium text-accent-fg focus:not-sr-only focus:absolute focus:left-4 focus:top-3"
      >
        Skip to content
      </a>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
        <Wordmark />

        <div className="flex items-center gap-1 md:gap-6">
          <nav aria-label="Main" className="hidden md:block">
            <ul className="flex items-center gap-7">
              {renderLinks("text-sm transition-colors duration-150 ease-out-soft")}
            </ul>
          </nav>
          <ThemeToggle />
          <Button
            ref={menuButtonRef}
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </Button>
        </div>
      </div>

      {isOpen ? (
        <nav id="mobile-nav" aria-label="Main" className="border-t border-border bg-bg md:hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2">
            {renderLinks("block py-3 text-base")}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default SiteHeader;

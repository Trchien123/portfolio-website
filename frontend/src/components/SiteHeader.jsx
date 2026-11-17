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
  { label: "Experience", id: "experience" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Writing", id: "blogs" },
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
          className={cn(linkClassName, id === "contact" ? "text-dim" : "text-ink hover:text-dim")}
        >
          {label}
        </Link>
      </li>
    ));

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-sheet">
      <a
        href="#main"
        className="sr-only bg-fill px-3 py-2 text-sm font-bold text-on-fill focus:not-sr-only focus:absolute focus:top-3 focus:left-4"
      >
        Skip to content
      </a>
      <div className="flex h-16 items-center justify-between px-4 md:h-20 md:px-10">
        <Wordmark />

        <div className="flex items-center gap-2 md:gap-7">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-7">
              {renderLinks("text-base transition-colors duration-200 ease-out-soft")}
            </ul>
          </nav>
          <ThemeToggle />
          <Button
            ref={menuButtonRef}
            variant="secondary"
            size="icon"
            className="lg:hidden"
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
        <nav id="mobile-nav" aria-label="Main" className="border-t border-line bg-sheet lg:hidden">
          <ul className="flex flex-col px-4 py-2 md:px-10">
            {renderLinks("block border-b border-faint py-3 text-lg")}
          </ul>
        </nav>
      ) : null}
    </header>
  );
};

export default SiteHeader;

import { useEffect, useState } from "react";
import DimensionLine from "@/components/drawing/DimensionLine";
import IsoStack from "@/components/drawing/IsoStack";
import LayerDetail from "@/components/drawing/LayerDetail";
import TitleBlock from "@/components/drawing/TitleBlock";
import { TextLink } from "@/components/ui/text-link";
import { portfolioData } from "@/lib/data";
import { LAYERS } from "@/lib/layers";
import { prefersReducedMotion } from "@/lib/motion";
import { useReveal } from "@/lib/useReveal";
import { scrollToSection } from "@/lib/scroll";
import { cn } from "@/lib/utils";

const { hero } = portfolioData;
const OPEN_DELAY_MS = 450;
function Hero() {
  const revealRef = useReveal({ immediate: true });
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), prefersReducedMotion() ? 0 : OPEN_DELAY_MS);
    return () => clearTimeout(timer);
  }, []);

  // Escape closes the layer detail.
  useEffect(() => {
    if (!active) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const toggle = (layer) => setActive((current) => (current === layer ? null : layer));

  const goToContact = (event) => {
    if (scrollToSection("contact")) event.preventDefault();
  };

  const [first, second] = hero.name.replace(/\.$/, "").split(/ (?=\S+$)/);

  return (
    <section ref={revealRef} aria-labelledby="hero-title" className="hero-min-h grid items-center gap-12 px-4 pt-10 pb-16 md:px-10 xl:grid-cols-2 xl:py-10">
      <div>
        <DimensionLine label="Full stack" className="mb-6 max-w-lg" />
        <h1 id="hero-title" className="text-display tracking-tightest">
          <span className="rv-wipe pb-descender block">{first}</span>
          <span className="rv-wipe pb-descender block" style={{ "--d": "0.15s" }}>
            {second}
          </span>
        </h1>
        <div className="rv-up mt-6 max-w-xl space-y-3 text-lg leading-relaxed md:text-xl" style={{ "--d": "0.7s" }}>
          <p className="font-bold text-ink">{hero.role}</p>
          <p>
            {hero.descriptionP1} {hero.descriptionP2}
          </p>
        </div>
        <div className="rv-up mt-8 max-w-xl" style={{ "--d": "0.9s" }}>
          <TitleBlock
            cells={[
              { label: "Role", value: "Full Stack Dev" },
              { label: "At", value: "BGSV, HCMC" },
            ]}
            action={{ label: "Action", text: "Get in touch", href: "#contact", onClick: goToContact }}
          />
          <TextLink href={hero.cvLink} download="HuynhTrungChien_CV.pdf" className="mt-4 inline-block">
            Download CV
          </TextLink>
        </div>
      </div>

      <div>
        <IsoStack open={open} active={active} onSelect={toggle} className="is-hero mx-auto w-full" gap={100} />

        <div className="rv-up mx-auto max-w-xl" style={{ "--d": "1.1s" }}>
          <p id="layers-hint" className="mb-2 font-mono text-xs tracking-wider text-muted uppercase">
            Select a layer to inspect it
          </p>
          {/* gap-0.5 over bg-line draws the dividers between cells */}
          <ul className="grid grid-cols-2 gap-0.5 border-2 border-line bg-line sm:grid-cols-4" aria-describedby="layers-hint">
            {LAYERS.map((layer) => {
              const selected = active === layer;
              return (
                <li key={layer}>
                  <button
                    type="button"
                    aria-expanded={selected}
                    aria-controls="layer-detail"
                    onClick={() => toggle(layer)}
                    className={cn("block w-full cursor-pointer px-3 py-2 text-left transition-colors duration-200", selected ? "bg-fill text-on-fill" : "bg-sheet text-ink hover:bg-faint")}
                  >
                    <span className={cn("block font-mono text-xs", selected ? "text-on-fill" : "text-muted")}>L{LAYERS.length - LAYERS.indexOf(layer)}</span>
                    <span className="text-lg font-black">{layer}</span>
                  </button>
                </li>
              );
            })}
          </ul>
          <LayerDetail layer={active} index={LAYERS.indexOf(active)} onClose={() => setActive(null)} />
        </div>
      </div>
    </section>
  );
}

export default Hero;

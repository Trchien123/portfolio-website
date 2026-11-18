import { useCallback, useEffect, useRef, useState } from "react";
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
const EXPLODE_MS = 1900; // slab spring (1.4s) + top slab delay (0.3s) + margin
const LABEL_WIDTH = 144; // matches md:w-36 on the callout labels

// Measures the right edge of each slab's top face so the callouts point at
// the real slab. Measuring starts only once the stack has finished opening,
// so labels never show up at the collapsed positions.
function useCallouts(viewRef, slabRefs, ready) {
  const [points, setPoints] = useState([]);

  const measure = useCallback(() => {
    const view = viewRef.current;
    if (!view || window.innerWidth < 768) return setPoints([]);
    const box = view.getBoundingClientRect();
    const anchors = LAYERS.map((layer) => {
      const r = slabRefs.current[layer].querySelector(".face").getBoundingClientRect();
      return { layer, x: r.right - box.left - 6, y: r.top - box.top + r.height * 0.62 };
    });
    // Labels sit in one column right of the widest slab, never on top of it.
    const end = Math.max(box.width - LABEL_WIDTH - 8, ...anchors.map((a) => a.x + 24));
    setPoints(anchors.map((a) => ({ ...a, end })));
  }, [viewRef, slabRefs]);

  useEffect(() => {
    if (!ready || !viewRef.current) return;
    const wait = prefersReducedMotion() ? 0 : EXPLODE_MS;
    let settled = false;
    let timer = setTimeout(() => {
      settled = true;
      measure();
    }, wait);
    // A resize can change slab size and gap (CSS breakpoints) and re-run the
    // spring: measure now, and again once it has settled.
    const observer = new ResizeObserver(() => {
      if (!settled) return;
      measure();
      clearTimeout(timer);
      timer = setTimeout(measure, wait);
    });
    observer.observe(viewRef.current);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [ready, measure, viewRef]);

  return points;
}

function Hero() {
  const revealRef = useReveal({ immediate: true });
  const viewRef = useRef(null);
  const slabRefs = useRef({});
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(null);
  const points = useCallouts(viewRef, slabRefs, open);

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
  const placed = points.length > 0;

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

      <div ref={viewRef} className="relative">
        <IsoStack open={open} active={active} onSelect={toggle} slabRefs={slabRefs} className="is-hero mx-auto w-full" gap={100} />

        {placed ? (
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            {points.map(({ layer, x, y, end }, i) => (
              <g key={layer} className={cn("callout-ink", active === layer && "is-active")} style={{ "--len": end - x, "--d": `${i * 0.09}s` }}>
                <line x1={x} y1={y} x2={end} y2={y} strokeWidth="1" />
                <circle cx={x} cy={y} r="3.5" />
              </g>
            ))}
          </svg>
        ) : null}

        <p id="layers-hint" className={cn("mt-4 font-mono text-xs tracking-wider text-muted uppercase md:absolute md:top-0 md:right-0 md:mt-0 md:w-36", placed ? "callout-in" : "md:opacity-0")} style={{ "--d": "0.45s" }}>
          Select a layer to inspect it
        </p>

        <ol className="mt-4 grid grid-cols-2 gap-2 md:mt-0" aria-describedby="layers-hint">
          {LAYERS.map((layer, i) => {
            const point = points.find((p) => p.layer === layer);
            const selected = active === layer;
            return (
              <li
                key={layer}
                data-callout={layer}
                className={cn("md:absolute md:w-36", point ? "callout-in" : "md:opacity-0")}
                style={point ? { top: point.y - 18, left: point.end + 8, "--d": `${0.15 + i * 0.09}s` } : undefined}
              >
                <button
                  type="button"
                  aria-expanded={selected}
                  aria-controls="layer-detail"
                  onClick={() => toggle(layer)}
                  className={cn(
                    "flex w-full cursor-pointer items-center gap-3 border-2 px-1.5 py-1 text-left transition-colors duration-200",
                    selected ? "border-dim bg-fill text-on-fill" : "border-transparent text-ink hover:border-line"
                  )}
                >
                  <span className={cn("grid size-7 shrink-0 place-items-center rounded-full border-2 font-mono text-sm", selected ? "border-on-fill" : "border-line")}>{i + 1}</span>
                  <span className="text-lg font-black">{layer}</span>
                </button>
              </li>
            );
          })}
        </ol>

        <LayerDetail layer={active} index={LAYERS.indexOf(active)} onClose={() => setActive(null)} />
      </div>
    </section>
  );
}

export default Hero;

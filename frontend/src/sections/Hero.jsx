import { useCallback, useEffect, useRef, useState } from "react";
import DimensionLine from "@/components/drawing/DimensionLine";
import IsoStack from "@/components/drawing/IsoStack";
import TitleBlock from "@/components/drawing/TitleBlock";
import { TextLink } from "@/components/ui/text-link";
import { portfolioData } from "@/lib/data";
import { LAYERS } from "@/lib/layers";
import { useReveal } from "@/lib/useReveal";
import { scrollToSection } from "@/lib/scroll";

const { hero } = portfolioData;
const EXPLODE_MS = 1900; // slab spring (1.4s) + top slab delay (0.3s) + margin
const LABEL_WIDTH = 144; // matches md:w-36 on the callout labels

const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Measures the right edge of each slab's top face so the callouts point at
// the real slab, whatever the viewport.
function useCallouts(viewRef, slabRefs, ready) {
  const [points, setPoints] = useState([]);

  const measure = useCallback(() => {
    const view = viewRef.current;
    if (!view || window.innerWidth < 768) return setPoints([]);
    const box = view.getBoundingClientRect();
    const end = box.width - LABEL_WIDTH - 8;
    setPoints(
      LAYERS.map((layer) => {
        const r = slabRefs.current[layer].querySelector(".face").getBoundingClientRect();
        return { layer, x: r.right - box.left - 6, y: r.top - box.top + r.height * 0.62, end };
      })
    );
  }, [viewRef, slabRefs]);

  useEffect(() => {
    if (!ready) return;
    const timer = setTimeout(measure, reducedMotion() ? 0 : EXPLODE_MS);
    window.addEventListener("resize", measure);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", measure);
    };
  }, [ready, measure]);

  return points;
}

const Hero = () => {
  const revealRef = useReveal({ immediate: true });
  const viewRef = useRef(null);
  const slabRefs = useRef({});
  const [open, setOpen] = useState(false);
  const points = useCallouts(viewRef, slabRefs, open);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), reducedMotion() ? 0 : 450);
    return () => clearTimeout(timer);
  }, []);

  const goToContact = (event) => {
    if (scrollToSection("contact")) event.preventDefault();
  };

  const [first, second] = hero.name.replace(/\.$/, "").split(/ (?=\S+$)/);

  return (
    <section ref={revealRef} aria-labelledby="hero-title" className="hero-min-h grid items-center gap-12 px-4 pt-10 pb-16 md:px-10 lg:grid-cols-2 lg:py-10">
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
              { label: "At", value: "Bosch GST, HCMC" },
            ]}
            action={{ label: "Action", text: "Get in touch", href: "#contact", onClick: goToContact }}
          />
          <TextLink href={hero.cvLink} download="HuynhTrungChien_CV.pdf" className="mt-4 inline-block">
            Download CV
          </TextLink>
        </div>
      </div>

      <div ref={viewRef} className="relative">
        <IsoStack open={open} slabRefs={slabRefs} className="is-hero mx-auto w-full" gap={100} />

        {points.length ? (
          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
            {points.map(({ layer, x, y, end }) => (
              <g key={layer}>
                <line x1={x} y1={y} x2={end} y2={y} className="stroke-line" strokeWidth="1" />
                <circle cx={x} cy={y} r="3.5" className="fill-dim" />
              </g>
            ))}
          </svg>
        ) : null}

        <ol className={`mt-4 grid grid-cols-2 gap-x-6 gap-y-3 md:mt-0 ${points.length ? "" : "md:invisible"}`}>
          {LAYERS.map((layer, i) => {
            const point = points.find((p) => p.layer === layer);
            return (
              <li
                key={layer}
                className="flex items-center gap-3 transition-opacity duration-500 md:absolute md:right-0 md:w-36"
                style={point ? { top: point.y - 16 } : undefined}
              >
                <span className="grid size-8 shrink-0 place-items-center rounded-full border-2 border-line font-mono text-sm text-ink">{i + 1}</span>
                <span className="text-lg font-black text-ink">{layer}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Hero;

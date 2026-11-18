import { useRef, useState } from "react";
import SectionHeading from "@/components/drawing/SectionHeading";
import Achievement from "./tabs/Achievement";
import Certificate from "./tabs/Certificate";
import Hobby from "./tabs/Hobby";
import Photo from "./tabs/Photo";
import { portfolioData } from "@/lib/data";
import Reveal from "@/components/drawing/Reveal";
import { cn } from "@/lib/utils";

const { intro } = portfolioData.about;

const TABS = [
  { id: "achievements", label: "Achievements", Panel: Achievement },
  { id: "certificates", label: "Certificates", Panel: Certificate },
  { id: "hobbies", label: "Hobbies", Panel: Hobby },
  { id: "photos", label: "Photos", Panel: Photo },
];

function About() {
  const [active, setActive] = useState(TABS[0].id);
  const tabRefs = useRef({});
  const ActivePanel = TABS.find((tab) => tab.id === active).Panel;

  // Arrow keys / Home / End move between tabs (WAI-ARIA tabs pattern).
  const onKeyDown = (event) => {
    const index = TABS.findIndex((tab) => tab.id === active);
    const next = { ArrowRight: index + 1, ArrowLeft: index - 1, Home: 0, End: TABS.length - 1 }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    const tab = TABS[(next + TABS.length) % TABS.length];
    setActive(tab.id);
    tabRefs.current[tab.id]?.focus();
  };

  return (
    <section id="about" aria-labelledby="about-title" className="border-t border-line px-4 py-20 md:px-10 md:py-28">
      <SectionHeading id="about-title" title="About" note={"General notes\nRead before reviewing"} />

      <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
        {/* reason (grid-cols): note heading column + reading column */}
        <Reveal as="p" className="text-2xl leading-snug font-black text-ink md:text-3xl">
          {intro.title}
          <span className="block font-normal text-muted">{intro.subtitle.replace(/^\s*-\s*/, "")}</span>
        </Reveal>
        <ol className="space-y-6">
          {intro.paragraphs.map((paragraph, i) => (
            <Reveal as="li" key={paragraph.slice(0, 24)} className="grid grid-cols-[2.5rem_1fr] gap-2 text-lg leading-relaxed" delay={0.1 + i * 0.1}>
              <span className="font-mono text-dim">{i + 1}.</span>
              <p className="max-w-prose">{paragraph}</p>
            </Reveal>
          ))}
        </ol>
      </div>

      <div className="mt-16">
        <div role="tablist" aria-label="More about me" className="flex overflow-x-auto border-b-2 border-line" onKeyDown={onKeyDown}>
          {TABS.map((tab, i) => {
            const selected = tab.id === active;
            return (
              <button
                key={tab.id}
                ref={(node) => (tabRefs.current[tab.id] = node)}
                id={`tab-${tab.id}`}
                type="button"
                role="tab"
                aria-selected={selected}
                aria-controls="about-panel"
                tabIndex={selected ? 0 : -1}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "-mb-0.5 flex shrink-0 cursor-pointer items-baseline gap-2 border-2 border-b-0 px-5 py-3 text-lg font-bold transition-colors duration-200",
                  selected ? "border-line bg-sheet text-ink" : "border-transparent text-muted hover:text-ink"
                )}
              >
                <span className={cn("font-mono text-xs", selected ? "text-dim" : "text-muted")}>{String(i + 1).padStart(2, "0")}</span>
                {tab.label}
              </button>
            );
          })}
        </div>
        <div id="about-panel" role="tabpanel" aria-labelledby={`tab-${active}`} tabIndex={0} className="border-2 border-t-0 border-line p-5 md:p-8">
          <div key={active} className="animate-fade-in">
            <ActivePanel />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

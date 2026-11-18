import { useState } from "react";
import PartCard from "@/components/PartCard";
import SectionHeading from "@/components/drawing/SectionHeading";
import { Button } from "@/components/ui/button";
import { portfolioData } from "@/lib/data";
import Reveal from "@/components/drawing/Reveal";
import { scrollToSection } from "@/lib/scroll";

const { projects } = portfolioData;
const PAGE = 3;

function Project() {
  const [visibleCount, setVisibleCount] = useState(PAGE);

  const handleSeeLess = () => {
    setVisibleCount(PAGE);
    scrollToSection("projects");
  };

  return (
    <section id="projects" aria-labelledby="projects-title" className="border-t border-line px-4 py-20 md:px-10 md:py-28">
      <SectionHeading id="projects-title" title="Parts list" note={`Selected projects · ${String(projects.length).padStart(2, "0")} parts\nHover a part to explode it`}>
        <ul className="flex flex-wrap gap-x-6 gap-y-2 pt-4 font-mono text-xs tracking-wider text-muted uppercase" aria-label="Legend">
          <li className="flex items-center gap-2"><span className="size-3 bg-fill" aria-hidden="true" />Layer used</li>
          <li className="flex items-center gap-2"><span className="size-3 border-2 border-line" aria-hidden="true" />Not used</li>
          <li>Bottom → top: Models · Data · APIs · Interface</li>
        </ul>
      </SectionHeading>

      <div className="grid border-t border-l border-line md:grid-cols-2 xl:grid-cols-3">
        {projects.slice(0, visibleCount).map((project, index) => (
          <Reveal key={project.id} className="flex" delay={(index % PAGE) * 0.1}>
            <PartCard project={project} index={index} />
          </Reveal>
        ))}
      </div>

      {projects.length > PAGE ? (
        <div className="mt-10 flex justify-center">
          {visibleCount < projects.length ? (
            <Button variant="secondary" onClick={() => setVisibleCount((count) => count + PAGE)}>
              Show more parts ↓
            </Button>
          ) : (
            <Button variant="secondary" onClick={handleSeeLess}>
              Show fewer ↑
            </Button>
          )}
        </div>
      ) : null}
    </section>
  );
}

export default Project;

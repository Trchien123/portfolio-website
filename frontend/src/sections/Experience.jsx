import SectionHeading from "@/components/drawing/SectionHeading";
import { portfolioData } from "@/lib/data";
import { useReveal } from "@/lib/useReveal";

const { experience, education } = portfolioData.about;

// Newest revision gets the highest letter, like a drawing's revision table.
const revisions = experience.map((item, i) => ({ ...item, rev: String.fromCharCode(65 + experience.length - 1 - i) }));

// Presentation only: drop leading emoji / punctuation from award headings.
const cleanTitle = (title = "") => title.replace(/^[^\p{L}]+/u, "").replace(/:\s*$/, "");

const HEAD = "font-mono text-label tracking-wider text-muted uppercase";

function Experience() {
  const ref = useReveal({ threshold: 0.1 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="border-t border-line px-4 py-20 md:px-10 md:py-28">
      <SectionHeading id="experience-title" title="Revision table" note={"Experience & education\nNewest revision on top"} />

      <div ref={ref} className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
        {/* reason (grid-cols): work history is the wider column */}
        <div className="rv-up">
          <h3 className="mb-4 text-xl">Work</h3>
          <ol className="border-2 border-line">
            <li className={`hidden grid-cols-[4rem_14rem_1fr] border-b-2 border-line bg-faint md:grid ${HEAD}`} aria-hidden="true">
              <span className="px-4 py-2">Rev</span>
              <span className="border-l border-line px-4 py-2">Date</span>
              <span className="border-l border-line px-4 py-2">Description</span>
            </li>
            {revisions.map((item, i) => (
              <li key={item.period} className="grid border-b border-line last:border-b-0 md:grid-cols-[4rem_14rem_1fr]">
                <span className={`flex items-start px-4 pt-4 md:py-5 ${i === 0 ? "text-dim" : "text-ink"}`}>
                  <span className="grid size-9 place-items-center border-2 border-current font-mono text-base font-medium">{item.rev}</span>
                </span>
                <span className="px-4 pt-3 font-mono text-sm text-muted md:border-l md:border-line md:py-5">{item.period}</span>
                <div className="px-4 pt-2 pb-5 md:border-l md:border-line md:py-5">
                  <p className="text-xl font-black text-ink">{item.role}</p>
                  <p className="mt-1">
                    {item.company} · {item.location}
                  </p>
                  {item.tasks?.length ? (
                    <ul className="mt-3 list-disc space-y-1 pl-5">
                      {item.tasks.map((task) => (
                        <li key={task}>{task}</li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="rv-up" style={{ "--d": "0.15s" }}>
          <h3 className="mb-4 text-xl">Education</h3>
          <ol className="border-2 border-line">
            {education.map((item) => (
              <li key={item.degree} className="border-b border-line px-5 py-5 last:border-b-0">
                <p className="font-mono text-sm text-muted">{item.year}</p>
                <p className="mt-1 text-xl font-black text-ink">{item.degree}</p>
                <p className="mt-1">{item.institution}</p>
                <p className="mt-2 font-mono text-sm text-ink">GPA {item.gpa}</p>
                {item.awards?.length ? (
                  <div className="mt-4 border-t border-faint pt-3">
                    <p className={HEAD}>{cleanTitle(item.awardsTitle) || "Awards"}</p>
                    <ul className="mt-2 space-y-1.5 text-sm">
                      {item.awards.map((award) => (
                        <li key={award.code} className="flex justify-between gap-4">
                          <span className="text-ink">{award.name}</span>
                          <span className="font-mono text-muted">{award.code}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Experience;

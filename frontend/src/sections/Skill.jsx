import SectionHeading from "@/components/drawing/SectionHeading";
import { portfolioData } from "@/lib/data";
import Reveal from "@/components/drawing/Reveal";

const { skills } = portfolioData;
const HEAD = "font-mono text-label tracking-wider text-muted uppercase";

// Each skill set becomes a group in a bill of materials:
// proficient = "In stock", learning = "On order".
function Skill() {

  return (
    <section id="skills" aria-labelledby="skills-title" className="border-t border-line px-4 py-20 md:px-10 md:py-28">
      <SectionHeading id="skills-title" title="Bill of materials" note={"Skills\nIn stock · on order"} />
      <p className="mb-10 max-w-prose text-lg leading-relaxed">{skills.intro}</p>

      <div className="grid gap-10 lg:grid-cols-2">
        {skills.skillSets.map((set, g) => {
          const rows = [
            ...set.proficient.map((name) => ({ name, stock: true })),
            ...set.learning.map((name) => ({ name, stock: false })),
          ];
          return (
            <div key={set.id}>
              <Reveal delay={g * 0.15}>
              <div className="flex items-baseline justify-between gap-4 border-2 border-b-0 border-line bg-faint px-4 py-3">
                <h3 className="text-xl">{set.title}</h3>
                <span className="font-mono text-sm text-dim">G-{String(g + 1).padStart(2, "0")}</span>
              </div>
              <p className="border-x-2 border-line px-4 py-3 text-sm">{set.description}</p>
              </Reveal>
              <table className="w-full border-2 border-line text-left">
                <thead>
                  <tr className="border-b-2 border-line">
                    <th scope="col" className={`w-14 px-4 py-2 ${HEAD}`}>No.</th>
                    <th scope="col" className={`border-l border-line px-4 py-2 ${HEAD}`}>Component</th>
                    <th scope="col" className={`w-32 border-l border-line px-4 py-2 ${HEAD}`}>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <Reveal as="tr" key={row.name} delay={g * 0.15} className="border-b border-faint last:border-b-0">
                      <td className="px-4 py-2.5 font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</td>
                      <td className="border-l border-line px-4 py-2.5 text-ink">{row.name}</td>
                      <td className="border-l border-line px-4 py-2.5">
                        <span className={`inline-flex items-center gap-2 font-mono text-sm ${row.stock ? "text-dim" : "text-muted"}`}>
                          <span className={`size-2.5 ${row.stock ? "bg-fill" : "border-2 border-line"}`} aria-hidden="true" />
                          {row.stock ? "In stock" : "On order"}
                        </span>
                      </td>
                    </Reveal>
                  ))}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Skill;

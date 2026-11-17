import IsoStack from "@/components/drawing/IsoStack";
import { layersFor, statusFor } from "@/lib/layers";

// One project as a part on the parts list: id, mini stack with the layers it
// uses lit, spec rows, and a single link covering the card.
function PartCard({ project, index }) {
  const used = layersFor(project.tech);
  const id = `P-${String(index + 1).padStart(2, "0")}`;

  return (
    <article className="part group relative flex w-full flex-col gap-4 border-r border-b border-line p-6 transition-colors duration-300 ease-out-soft hover:bg-faint">
      <div className="flex justify-between font-mono text-xs tracking-wider uppercase">
        <span className="text-dim">{id}</span>
        <span className="text-muted">{statusFor(project.description)}</span>
      </div>

      <div className="relative h-44 border border-dashed border-faint">
        <IsoStack small used={used} className="h-full w-full" />
      </div>

      <h3 className="text-2xl leading-tight tracking-tight md:text-[1.75rem]">
        {/* reason: card title sits between 2xl and 3xl to fit long project names */}
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="card-link">
          {project.title}
        </a>
      </h3>
      <p className="leading-relaxed">{project.description}</p>

      <dl className="mt-auto border-t border-line text-sm">
        <div className="grid grid-cols-[5rem_1fr] gap-3 border-b border-faint py-2">
          <dt className="pt-0.5 font-mono text-label tracking-wider text-muted uppercase">Layers</dt>
          <dd className="text-ink">{used.join(" · ") || "—"}</dd>
        </div>
        <div className="grid grid-cols-[5rem_1fr] gap-3 py-2">
          <dt className="pt-0.5 font-mono text-label tracking-wider text-muted uppercase">Stack</dt>
          <dd className="text-ink">{project.tech.join(" · ")}</dd>
        </div>
      </dl>

      <p className="flex items-center justify-between font-bold text-ink" aria-hidden="true">
        View on GitHub
        <span className="transition-transform duration-300 ease-out-soft group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-dim">↗</span>
      </p>
    </article>
  );
}

export default PartCard;

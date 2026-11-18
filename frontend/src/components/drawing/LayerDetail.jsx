import { LAYER_TOOLS, projectsFor } from "@/lib/layers";
import { cn } from "@/lib/utils";

/**
 * "Detail" box for the selected hero layer: the tools used on that layer and
 * the projects that touch it (both derived from data.js). Always in the DOM
 * so the layer buttons' aria-controls resolves; hidden when nothing is selected.
 */
function LayerDetail({ layer, index, onClose }) {
  const projects = layer ? projectsFor(layer) : [];

  return (
    <div
      id="layer-detail"
      role="region"
      aria-label={layer ? `${layer} layer details` : "Layer details"}
      aria-live="polite"
      hidden={!layer}
      className={cn("layer-detail mt-6 border-2 border-line bg-sheet md:absolute md:right-0 md:bottom-0 md:mt-0 md:w-80")}
    >
      {layer ? (
        <div key={layer} className="animate-fade-in">
          <div className="flex items-center justify-between border-b-2 border-line px-4 py-2">
            <p className="font-mono text-label tracking-wider text-muted uppercase">
              Detail · L{4 - index} · <span className="text-dim">{layer}</span>
            </p>
            <button type="button" onClick={onClose} aria-label="Close layer details" className="grid size-7 cursor-pointer place-items-center text-ink hover:bg-faint">
              ×
            </button>
          </div>
          <dl className="px-4 py-3 text-sm">
            <dt className="font-mono text-label tracking-wider text-muted uppercase">Tools</dt>
            <dd className="mt-1 text-ink">{LAYER_TOOLS[layer].join(" · ")}</dd>
            <dt className="mt-3 font-mono text-label tracking-wider text-muted uppercase">Used in {projects.length} {projects.length === 1 ? "project" : "projects"}</dt>
            <dd className="mt-1">
              <ul className="space-y-1">
                {projects.map((project) => (
                  <li key={project.id}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-ink underline decoration-line underline-offset-4 hover:text-dim hover:decoration-dim">
                      {project.title} <span aria-hidden="true">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        </div>
      ) : null}
    </div>
  );
}

export default LayerDetail;

import { cn } from "@/lib/utils";

/**
 * A drawing title block: labelled cells in one ruled row (wraps on small
 * screens). `action` renders as the filled last cell.
 */
function TitleBlock({ cells, action, className }) {
  return (
    <dl className={cn("grid border-2 border-line bg-sheet sm:auto-cols-fr sm:grid-flow-col", className)}>
      {cells.map(({ label, value }) => (
        <div key={label} className="border-b border-line px-4 py-3 last:border-b-0 sm:border-r sm:border-b-0">
          <dt className="font-mono text-label tracking-wider text-muted uppercase">{label}</dt>
          <dd className="mt-0.5 text-lg text-ink">{value}</dd>
        </div>
      ))}
      {action ? (
        <div className="border-t border-line sm:border-t-0">
          <dt className="sr-only">{action.label}</dt>
          <dd className="h-full">
            <a
              href={action.href}
              onClick={action.onClick}
              download={action.download}
              className="flex h-full flex-col justify-center bg-fill px-4 py-3 text-on-fill transition-colors duration-200 hover:bg-ink hover:text-sheet"
            >
              <span className="font-mono text-label tracking-wider uppercase" aria-hidden="true">{action.label}</span>
              <span className="mt-0.5 text-lg font-black">
              {action.text} <span aria-hidden="true">→</span>
            </span>
            </a>
          </dd>
        </div>
      ) : null}
    </dl>
  );
}

export default TitleBlock;

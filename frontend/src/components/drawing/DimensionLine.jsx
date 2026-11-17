import { cn } from "@/lib/utils";

// A drafting dimension: tick, line, centered label, tick. Draws in when its
// reveal parent flips to "in".
function DimensionLine({ label, className, delay = 0 }) {
  return (
    <div className={cn("relative h-8 text-dim", className)} aria-hidden="true">
      <span className="absolute top-0 left-0 h-8 w-px bg-current" />
      <span className="rv-draw absolute top-1/2 right-0 left-0 h-px bg-current" style={{ "--d": `${delay}s` }} />
      <span className="rv-fade absolute top-0 right-0 h-8 w-px bg-current" style={{ "--d": `${delay + 0.9}s` }} />
      {label ? (
        <span
          className="rv-fade absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-sheet px-3 font-mono text-sm whitespace-nowrap uppercase"
          style={{ "--d": `${delay + 0.8}s` }}
        >
          {label}
        </span>
      ) : null}
    </div>
  );
}

export default DimensionLine;

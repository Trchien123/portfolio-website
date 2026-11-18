import { cn } from "@/lib/utils";

const ZONES = ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M"];

// The drawing sheet: 2px frame, lettered zone border on top, drafting grid.
function SheetFrame({ children, className }) {
  return (
    <div className={cn("drafting-grid relative border-2 border-line", className)}>
      <div className="flex border-b border-line font-mono text-label text-muted" aria-hidden="true">
        {ZONES.map((zone, i) => (
          <span key={zone} className={cn("flex-1 border-r border-faint py-1 text-center last:border-r-0", i > 5 && "hidden md:block")}>
            {zone}
          </span>
        ))}
      </div>
      {children}
    </div>
  );
}

export default SheetFrame;

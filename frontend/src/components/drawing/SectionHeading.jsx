import { useReveal } from "@/lib/useReveal";

/**
 * Section title as a drawing heading: big wiping title, a mono note on the
 * right, and a 2px rule that draws in underneath.
 */
function SectionHeading({ id, title, note, children }) {
  const ref = useReveal();
  return (
    <div ref={ref} className="mb-8 md:mb-10">
      <div className="flex flex-col gap-4 pb-4 md:flex-row md:items-end md:justify-between">
        <h2 id={id} className="rv-wipe pb-descender text-5xl leading-display tracking-tightest md:text-7xl lg:text-8xl">
          {title}
        </h2>
        {note ? (
          <p className="rv-fade font-mono text-xs leading-relaxed tracking-wider whitespace-pre-line text-muted uppercase md:text-right" style={{ "--d": "0.4s" }}>
            {note}
          </p>
        ) : null}
      </div>
      <div className="rv-draw h-0.5 bg-line" style={{ "--d": "0.15s" }} />
      {children}
    </div>
  );
}

export default SectionHeading;

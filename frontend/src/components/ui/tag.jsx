import { cn } from "@/lib/utils";

const TONES = {
  neutral: "border border-border bg-surface text-fg-muted",
  accent: "bg-accent-soft text-accent",
};

function Tag({ tone = "neutral", className, children }) {
  return (
    <span className={cn("inline-flex items-center rounded-full px-2.5 py-1 font-mono text-xs", TONES[tone], className)}>
      {children}
    </span>
  );
}

export { Tag };

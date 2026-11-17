import { cn } from "@/lib/utils";

/**
 * Surface container. With `interactive`, put exactly one link inside with the
 * `card-link` class: its ::after stretches over the whole card, so the card is
 * clickable without nesting anchors.
 */
function Card({ as = "div", interactive = false, className, ...props }) {
  const Comp = as;
  return (
    <Comp
      className={cn(
        "rounded-md border border-border bg-surface",
        interactive &&
          "relative transition-colors duration-150 ease-out-soft hover:border-border-strong hover:bg-surface-hover focus-within:border-accent",
        className
      )}
      {...props}
    />
  );
}

export { Card };

import { useReveal } from "@/lib/useReveal";
import { cn } from "@/lib/utils";

/**
 * One item that rises in when IT enters the viewport (scrolling down or up),
 * instead of riding on its whole section. `delay` staggers siblings.
 */
function Reveal({ as = "div", delay = 0, className, style, ...props }) {
  const ref = useReveal({ threshold: 0.15 });
  const Comp = as;
  return <Comp ref={ref} className={cn("rv-self", className)} style={{ "--d": `${delay}s`, ...style }} {...props} />;
}

export default Reveal;

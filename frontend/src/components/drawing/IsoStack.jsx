import { LAYERS } from "@/lib/layers";
import { cn } from "@/lib/utils";

const SLAB_COLORS = { Interface: "var(--slab-1)", APIs: "var(--slab-2)", Data: "var(--slab-3)", Models: "var(--slab-4)" };

/**
 * Isometric 4-slab stack. `open` raises the gap between slabs (CSS spring
 * transition). In the small variant, `used` layers are filled green.
 */
function IsoStack({ open = false, gap = 100, small = false, used, className, slabRefs }) {
  return (
    <div
      className={cn("iso-stack", small && "is-small", className)}
      style={{ "--gap": open ? `${gap}px` : "0px" }}
      aria-hidden="true"
    >
      <div className="iso-plane">
        {[...LAYERS].reverse().map((layer, i) => (
          <div
            key={layer}
            ref={slabRefs ? (node) => (slabRefs.current[layer] = node) : undefined}
            className="slab"
            data-layer={layer}
            data-used={used?.includes(layer) ? "" : undefined}
            style={{ "--i": i, "--c": SLAB_COLORS[layer] }}
          >
            <div className="face" />
            <div className="side-a" />
            <div className="side-b" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IsoStack;

import { LAYERS } from "@/lib/layers";
import { cn } from "@/lib/utils";

/**
 * Isometric 4-plate stack drawn like a technical drawing: sheet-coloured
 * plates with a drafting hatch per layer and the layer name printed on the
 * plate. `open` raises the gap between plates (CSS spring transition). In the
 * small variant, `used` layers are filled green. An
 * `active` layer lifts and turns green while the others step back; clicking a
 * slab calls `onSelect` (mouse shortcut; the labelled buttons are the
 * accessible control).
 */
function IsoStack({ open = false, gap = 100, small = false, used, active, onSelect, className, slabRefs }) {
  return (
    <div
      className={cn("iso-stack", small && "is-small", className)}
      style={small ? undefined : { "--gap": open ? `var(--gap-open, ${gap}px)` : "0px" }}
      data-has-active={active ? "" : undefined}
      aria-hidden="true"
    >
      <div className="iso-plane">
        {[...LAYERS].reverse().map((layer, i) => (
          <div
            key={layer}
            ref={slabRefs ? (node) => (slabRefs.current[layer] = node) : undefined}
            className={cn("slab", onSelect && "cursor-pointer")}
            data-layer={layer}
            data-used={used?.includes(layer) ? "" : undefined}
            data-active={active === layer ? "" : undefined}
            onClick={onSelect ? () => onSelect(layer) : undefined}
            style={{ "--i": i }}
          >
            <div className="face">
              {small ? null : (
                <span className="slab-tag">
                  <span className="slab-tag-id">L{i + 1}</span>
                  {layer}
                </span>
              )}
            </div>
            <div className="side-a" />
            <div className="side-b" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default IsoStack;

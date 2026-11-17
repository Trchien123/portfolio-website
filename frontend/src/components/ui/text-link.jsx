import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

function TextLink({ asChild = false, className, ...props }) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      className={cn(
        "text-fg underline decoration-border-strong underline-offset-4 transition-colors duration-150 ease-out-soft hover:text-accent hover:decoration-accent",
        className
      )}
      {...props}
    />
  );
}

export { TextLink };

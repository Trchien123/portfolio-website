import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

function TextLink({ asChild = false, className, ...props }) {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      className={cn(
        "text-ink underline decoration-line underline-offset-4 transition-colors duration-200 ease-out-soft hover:text-dim hover:decoration-dim",
        className
      )}
      {...props}
    />
  );
}

export { TextLink };

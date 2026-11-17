import { cn } from "@/lib/utils";

function SectionHeading({ id, title, lead, action, as = "h2", className }) {
  const Heading = as;
  return (
    <div className={cn("mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between", className)}>
      <div className="space-y-3">
        <Heading id={id} className="text-3xl text-fg md:text-4xl">
          {title}
        </Heading>
        {lead ? <p className="max-w-prose text-lg text-fg-muted">{lead}</p> : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </div>
  );
}

export { SectionHeading };

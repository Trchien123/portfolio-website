import { portfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";

const { socials } = portfolioData.about;

const SocialLinks = ({ showLabels = false, className }) => (
  <ul className={cn("flex flex-wrap items-center", showLabels ? "gap-x-5 gap-y-3" : "gap-1", className)}>
    {socials.map(({ name, url, icon }) => {
      const Icon = icon;
      const external = !url.startsWith("mailto:");
      return (
        <li key={name}>
          <a
            href={url}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            aria-label={showLabels ? undefined : name}
            className={cn(
              "inline-flex items-center gap-2 rounded-sm text-fg-subtle transition-colors duration-150 ease-out-soft hover:text-fg",
              showLabels ? "text-sm" : "size-10 justify-center hover:bg-surface-hover"
            )}
          >
            <Icon size={18} aria-hidden="true" />
            {showLabels ? name : null}
          </a>
        </li>
      );
    })}
  </ul>
);

export default SocialLinks;

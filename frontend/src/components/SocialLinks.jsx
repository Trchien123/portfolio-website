import { portfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";

const { socials } = portfolioData.about;

const SocialLinks = ({ showLabels = false, className }) => (
  <ul className={cn("flex flex-wrap items-center", showLabels ? "gap-x-6 gap-y-3" : "gap-1", className)}>
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
              "inline-flex items-center gap-2 text-muted transition-colors duration-200 ease-out-soft hover:text-dim",
              showLabels ? "text-base" : "size-10 justify-center hover:bg-faint"
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

import SocialLinks from "./SocialLinks";
import { portfolioData } from "@/lib/data";
import { cn } from "@/lib/utils";

const { details } = portfolioData.contact;

const ContactBlock = () => (
  <div className="space-y-10">
    <dl className="space-y-6">
      {details.map(({ label, value, href, icon }) => {
        const Icon = icon;
        const isEmail = label === "Email";
        const isExternal = href.startsWith("http");
        return (
          <div key={label}>
            <dt className="flex items-center gap-2 text-sm text-fg-subtle">
              <Icon size={16} className="shrink-0" aria-hidden="true" />
              {label}
            </dt>
            <dd className="mt-1.5">
              <a
                href={href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noopener noreferrer" : undefined}
                className={cn(
                  "text-fg underline decoration-transparent underline-offset-4 transition-colors duration-150 ease-out-soft hover:text-accent hover:decoration-accent",
                  isEmail ? "text-xl font-medium md:text-2xl" : "text-base"
                )}
              >
                {value}
              </a>
            </dd>
          </div>
        );
      })}
    </dl>
    <SocialLinks showLabels />
  </div>
);

export default ContactBlock;

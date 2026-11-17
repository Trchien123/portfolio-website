import Signature from "./Signature";
import SocialLinks from "./SocialLinks";
import { TextLink } from "@/components/ui/text-link";
import { portfolioData } from "@/lib/data";

const { hero, contact } = portfolioData;
const email = contact.details.find((detail) => detail.label === "Email");
const YEAR = new Date().getFullYear();

const SiteFooter = () => (
  <footer className="border-t border-border">
    <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-12 md:px-6">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          <Signature className="h-9 w-auto text-fg-subtle" />
          <TextLink href={email.href} className="text-sm">
            {email.value}
          </TextLink>
        </div>
        <SocialLinks className="-ml-2.5 md:-mr-2.5 md:ml-0" />
      </div>
      <div className="flex flex-col gap-2 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>© {YEAR} Huynh Trung Chien</p>
        <TextLink href={hero.cvLink} download="HuynhTrungChien_CV.pdf" className="w-fit text-fg-muted">
          Download CV
        </TextLink>
      </div>
    </div>
  </footer>
);

export default SiteFooter;

import Signature from "./Signature";
import SocialLinks from "./SocialLinks";
import { TextLink } from "@/components/ui/text-link";
import { portfolioData } from "@/lib/data";

const { hero, contact } = portfolioData;
const email = contact.details.find((detail) => detail.label === "Email");
const YEAR = new Date().getFullYear();

const Cell = ({ label, children, className = "" }) => (
  <div className={`border-b border-line px-4 py-4 md:border-r md:border-b-0 md:px-6 ${className}`}>
    <p className="font-mono text-label tracking-wider text-muted uppercase">{label}</p>
    <div className="mt-2">{children}</div>
  </div>
);

// The page ends like a drawing: a title block, signed.
// reason (grid-cols): title-block cells sized to their content, like a real drawing.
const SiteFooter = () => (
  <footer className="border-t-2 border-line bg-sheet">
    <div className="grid md:grid-cols-[1.1fr_1.4fr_1.2fr_auto]">
      <Cell label="Drawn by">
        <Signature className="h-12 w-auto text-ink" />
      </Cell>
      <Cell label="Title">
        <p className="text-xl font-black text-ink">Huynh Trung Chien</p>
        <p className="text-muted">Full Stack Developer · Portfolio</p>
      </Cell>
      <Cell label="Contact">
        <TextLink href={email.href} className="text-lg">
          {email.value}
        </TextLink>
        <SocialLinks className="mt-2 -ml-2.5" />
      </Cell>
      <Cell label="Sheet" className="md:border-r-0">
        <p className="text-ink">© {YEAR}</p>
        <TextLink href={hero.cvLink} download="HuynhTrungChien_CV.pdf" className="mt-1 inline-block">
          Download CV
        </TextLink>
      </Cell>
    </div>
  </footer>
);

export default SiteFooter;

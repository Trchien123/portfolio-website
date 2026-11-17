// DEV ONLY: design-system preview at /__design. Removed in the final cleanup.
import { ArrowRight, Download } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProjectCard from "@/components/ProjectCard";
import ContactBlock from "@/components/ContactBlock";
import { Button } from "@/components/ui/button";
import { TextLink } from "@/components/ui/text-link";
import { Tag } from "@/components/ui/tag";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";
import { portfolioData } from "@/lib/data";

const COLOR_TOKENS = [
  ["bg", "#FBFCFD", "#070D17"],
  ["surface", "#F2F5F8", "#0E1826"],
  ["surface-hover", "#EAEFF4", "#132033"],
  ["border", "#DCE3EA", "#1E2B3C"],
  ["border-strong", "#C3CDD8", "#2C3D52"],
  ["fg", "#0B1524", "#E6EDF3"],
  ["fg-muted", "#4A5B6E", "#93A4B5"],
  ["fg-subtle", "#64748B", "#6B7D90"],
  ["accent", "#047857", "#3DDC97"],
  ["accent-hover", "#065F46", "#5FE6AB"],
  ["accent-fg", "#FFFFFF", "#04130C"],
  ["accent-soft", "accent 10%", "accent 12%"],
  ["danger", "#B91C1C", "#F87171"],
];

const TYPE_SCALE = [
  ["text-6xl", "60 / hero name (desktop)"],
  ["text-5xl", "48 / hero name (mobile)"],
  ["text-4xl", "38 / section title (desktop)"],
  ["text-3xl", "30 / section title (mobile)"],
  ["text-2xl", "24"],
  ["text-xl", "20 / card title"],
  ["text-lg", "18 / lead"],
  ["text-base", "16 / body"],
  ["text-sm", "14 / meta, UI"],
  ["text-xs", "12 / mono data: dates, tags"],
];

const SPACING = [1, 2, 3, 4, 6, 8, 12, 16, 24, 32];
const RADII = [["rounded-sm", "6px: buttons, inputs"], ["rounded-md", "12px: cards, panels"], ["rounded-full", "tags, avatars"]];

const Block = ({ id, title, children }) => (
  <section data-testid={id} aria-labelledby={`${id}-title`} className="space-y-6 border-t border-border py-12">
    <h2 id={`${id}-title`} className="text-sm font-medium text-fg-subtle">
      {title}
    </h2>
    {children}
  </section>
);

const DesignPreview = () => {
  const [firstProject, secondProject] = portfolioData.projects;

  return (
    <div className="min-h-screen bg-bg">
      <div data-testid="header">
        <SiteHeader />
      </div>

      <main id="main" className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="py-12">
          <h1 className="text-4xl text-fg">Design system</h1>
          <p className="mt-3 max-w-prose text-lg text-fg-muted">Direction A, “Ink &amp; Emerald”. Toggle the theme in the header.</p>
        </div>

        <Block id="tokens" title="Color tokens (light / dark)">
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {COLOR_TOKENS.map(([name, light, dark]) => (
              <li key={name} className="space-y-2">
                <div className="h-14 rounded-sm border border-border" style={{ background: `var(--${name})` }} />
                <p className="font-mono text-xs text-fg">{name}</p>
                <p className="font-mono text-xs text-fg-subtle">
                  {light} / {dark}
                </p>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="type" title="Type scale: Geist + Geist Mono">
          <ul className="space-y-4">
            {TYPE_SCALE.map(([cls, note]) => (
              <li key={cls} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-6">
                <span className="w-56 shrink-0 font-mono text-xs text-fg-subtle">
                  {cls} · {note}
                </span>
                <span className={`${cls} text-fg`}>{cls === "text-xs" ? "2026-11-18" : "Huynh Trung Chien"}</span>
              </li>
            ))}
          </ul>
          <p className="max-w-prose text-fg-muted">
            Body copy is 16px with relaxed line height and a ~68 character measure, so long paragraphs stay comfortable to read on any screen.
          </p>
        </Block>

        <Block id="spacing" title="Spacing (4px base)">
          <ul className="space-y-2">
            {SPACING.map((step) => (
              <li key={step} className="flex items-center gap-4">
                <span className="w-16 font-mono text-xs text-fg-subtle">{step * 4}px</span>
                <span className="h-3 rounded-full bg-accent" style={{ width: step * 4 }} />
              </li>
            ))}
          </ul>
        </Block>

        <Block id="radii" title="Radii">
          <ul className="flex flex-wrap gap-6">
            {RADII.map(([cls, note]) => (
              <li key={cls} className="space-y-2">
                <div className={`size-20 border border-border-strong bg-surface ${cls}`} />
                <p className="font-mono text-xs text-fg-subtle">{note}</p>
              </li>
            ))}
          </ul>
        </Block>

        <Block id="buttons" title="Buttons (one primary per view)">
          <div className="flex flex-wrap items-center gap-3">
            <Button>Get in touch</Button>
            <Button variant="secondary">
              <Download size={16} aria-hidden="true" /> Download CV
            </Button>
            <Button variant="ghost">About me</Button>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Button size="sm" variant="secondary">
              Small secondary
            </Button>
            <Button size="sm" variant="ghost">
              Small ghost
            </Button>
            <Button size="icon" variant="ghost" aria-label="Next">
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
          </div>
        </Block>

        <Block id="links" title="Links">
          <p className="max-w-prose text-fg-muted">
            Inline links like <TextLink href="#links">this one</TextLink> stay quiet until hovered or focused.
          </p>
        </Block>

        <Block id="tags" title="Tags">
          <div className="flex flex-wrap gap-2">
            <Tag>React</Tag>
            <Tag>Node.js</Tag>
            <Tag>TypeScript</Tag>
            <Tag tone="accent">Web Development</Tag>
          </div>
        </Block>

        <Block id="section-heading" title="Section heading">
          <SectionHeading
            title="Projects"
            lead="A plain heading carries the section; an optional lead and one action sit beside it."
            action={<Button variant="secondary">View all</Button>}
          />
        </Block>

        <Block id="card" title="Card">
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="p-6">
              <h3 className="text-xl text-fg">Static card</h3>
              <p className="mt-2 text-fg-muted">Surface, hairline border, 12px radius. No shadow.</p>
            </Card>
            <Card interactive className="p-6">
              <h3 className="text-xl text-fg">
                <a href="#card" className="card-link">
                  Interactive card
                </a>
              </h3>
              <p className="mt-2 text-fg-muted">The whole card is one link. Hover and focus change the border.</p>
            </Card>
          </div>
        </Block>

        <Block id="project-card" title="Project card">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard project={firstProject} />
            <ProjectCard project={secondProject} />
          </div>
        </Block>

        <Block id="contact-block" title="Contact block">
          <ContactBlock />
        </Block>
      </main>

      <div data-testid="footer" className="mt-12">
        <SiteFooter />
      </div>
    </div>
  );
};

export default DesignPreview;

import SectionHeading from "@/components/drawing/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import { portfolioData } from "@/lib/data";
import Reveal from "@/components/drawing/Reveal";

const { contact } = portfolioData;
const email = contact.details.find((d) => d.label === "Email");
const others = contact.details.filter((d) => d.label !== "Email");
const LABEL = "font-mono text-label tracking-wider uppercase";

// Contact as the drawing's main title block; the email cell is the one
// filled (primary) action.
function Contact() {

  return (
    <section id="contact" aria-labelledby="contact-title" className="border-t border-line px-4 py-20 md:px-10 md:py-28">
      <SectionHeading id="contact-title" title="Contact" note={"Get in touch\nRecruiters & clients welcome"} />
      <p className="mb-10 max-w-prose text-xl leading-relaxed">{contact.subtitle}</p>

      <Reveal className="grid border-2 border-line lg:grid-cols-[1.6fr_1fr]">
        {/* reason (grid-cols): the email cell dominates the block */}
        <a href={email.href} className="group flex flex-col justify-between gap-10 bg-fill p-6 text-on-fill transition-colors duration-200 hover:bg-ink hover:text-sheet md:p-10">
          <span className={LABEL}>Email · primary action</span>
          <span className="text-3xl leading-tight font-black break-all md:text-5xl">
            {email.value}
            <span className="ml-3 inline-block transition-transform duration-300 group-hover:translate-x-2" aria-hidden="true">
              →
            </span>
          </span>
        </a>
        <dl className="grid border-t-2 border-line lg:border-t-0 lg:border-l-2">
          {others.map((detail) => {
            const external = detail.href.startsWith("http");
            return (
              <div key={detail.label} className="border-b border-line px-6 py-5">
                <dt className={`${LABEL} text-muted`}>{detail.label}</dt>
                <dd className="mt-1">
                  <a
                    href={detail.href}
                    target={external ? "_blank" : undefined}
                    rel={external ? "noopener noreferrer" : undefined}
                    className="text-xl font-bold text-ink underline decoration-transparent underline-offset-4 transition-colors duration-200 hover:text-dim hover:decoration-dim"
                  >
                    {detail.value}
                  </a>
                </dd>
              </div>
            );
          })}
          <div className="px-6 py-5">
            <dt className={`${LABEL} text-muted`}>Elsewhere</dt>
            <dd className="mt-2">
              <SocialLinks showLabels />
            </dd>
          </div>
        </dl>
      </Reveal>
    </section>
  );
}

export default Contact;

import { portfolioData } from "@/lib/data";

const { certificates } = portfolioData.about;

function Certificate() {
  return (
    <ol className="border-t border-line">
      {certificates.map((cert, i) => (
        <li key={cert.id} className="relative border-b border-line">
          <div className="group grid gap-1 py-4 transition-colors duration-200 hover:bg-faint md:grid-cols-[3rem_9rem_1fr_auto] md:items-baseline md:gap-6 md:px-2">
            <span className="font-mono text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
            <span className="font-mono text-sm text-muted">{cert.date}</span>
            <span>
              <a href={cert.link} target="_blank" rel="noopener noreferrer" className="card-link text-lg font-bold text-ink group-hover:text-dim">
                {cert.title.trim()}
              </a>
              <span className="block text-sm">{cert.issuer}</span>
            </span>
            <span className="text-ink transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" aria-hidden="true">
              ↗
            </span>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default Certificate;

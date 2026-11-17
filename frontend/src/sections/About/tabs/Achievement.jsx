import { portfolioData } from "@/lib/data";

const { achievements } = portfolioData.about;

function Achievement() {
  return (
    <ul className="grid gap-px border border-line bg-line md:grid-cols-2">
      {achievements.map((item) => (
        <li key={item.title} className="bg-sheet p-6">
          <p className="font-mono text-sm text-dim">{item.year}</p>
          <p className="mt-2 text-2xl font-black text-ink">{item.title}</p>
          <p className="mt-2 leading-relaxed">{item.description}</p>
        </li>
      ))}
    </ul>
  );
}

export default Achievement;

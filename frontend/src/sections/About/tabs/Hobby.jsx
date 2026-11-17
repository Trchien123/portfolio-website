import { portfolioData } from "@/lib/data";

const { hobbies } = portfolioData.about;

const Hobby = () => (
  <div className="grid gap-8 lg:grid-cols-2">
    <div>
      <p className="text-2xl font-black text-ink">{hobbies.title}</p>
      <p className="mt-2 font-mono text-sm tracking-wider text-dim uppercase">{hobbies.tags.join(" · ")}</p>
      <p className="mt-5 max-w-prose text-lg leading-relaxed">{hobbies.description}</p>
    </div>
    <div className="grid grid-cols-2 gap-4">
      {hobbies.images.map((src, i) => (
        <figure key={src} className="border-2 border-line">
          <img src={src} alt={`Hobby photo ${i + 1}`} loading="lazy" decoding="async" width={600} height={600} className="aspect-square w-full object-cover" />
        </figure>
      ))}
    </div>
  </div>
);

export default Hobby;

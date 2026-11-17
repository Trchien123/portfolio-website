import { ArrowUpRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

const MAX_TAGS = 4;

const ProjectCard = ({ project }) => {
  const { title, description, image, tech, link } = project;
  const shownTech = tech.slice(0, MAX_TAGS);
  const hiddenCount = tech.length - shownTech.length;

  return (
    <Card as="article" interactive className="group flex flex-col overflow-hidden">
      <img
        src={image}
        alt=""
        width={800}
        height={450}
        loading="lazy"
        decoding="async"
        className="aspect-video w-full border-b border-border object-cover"
      />
      <div className="flex flex-1 flex-col gap-3 p-6">
        <h3 className="text-xl text-fg">
          <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
            {title}
          </a>
        </h3>
        <p className="line-clamp-3 text-fg-muted">{description}</p>
        <ul className="mt-auto flex flex-wrap gap-2 pt-2" aria-label="Technologies">
          {shownTech.map((name) => (
            <li key={name}>
              <Tag>{name}</Tag>
            </li>
          ))}
          {hiddenCount > 0 ? (
            <li>
              <Tag>+{hiddenCount}</Tag>
            </li>
          ) : null}
        </ul>
        <p className="flex items-center gap-1 pt-2 text-sm font-medium text-fg transition-colors duration-150 group-hover:text-accent" aria-hidden="true">
          View project
          <ArrowUpRight size={16} />
        </p>
      </div>
    </Card>
  );
};

export default ProjectCard;

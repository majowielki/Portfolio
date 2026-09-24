import { CSSProperties, useRef } from "react";
import BrowserFrame from "@/components/ui/BrowserFrame";
import { ButtonLink } from "@/components/ui/Button";
import SectionHeading from "@/components/ui/SectionHeading";
import { projects } from "@/content/projects";
import { useStackedCards } from "@/hooks/useStackedCards";
import { Project } from "@/types/types";

const hostname = (url: string) => new URL(url).hostname.replace(/^www\./, "");
const pad = (value: number) => String(value).padStart(2, "0");

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const previewUrl = project.liveUrl ?? project.githubUrl;
  const titleId = `project-${index}`;

  return (
    <article
      data-stack-card
      aria-labelledby={titleId}
      className="project-card"
      style={{ "--i": index } as CSSProperties}
    >
      <div className="project-card__inner relative overflow-hidden rounded-[28px] border border-line/[0.08] bg-sec p-5 shadow-[0_-24px_60px_-30px_rgb(0_0_0/0.9)] sm:p-7 lg:p-10">
        <div className="grid grid-cols-[minmax(0,1fr)] gap-x-12 gap-y-6 [grid-template-areas:'meta'_'title'_'media'_'body'] lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:grid-rows-[auto_auto_1fr] lg:[grid-template-areas:'meta_media'_'title_media'_'body_media']">
          <p className="flex items-center justify-between gap-4 font-mono text-xs text-other [grid-area:meta]">
            <span>
              <span className="text-main">{pad(index + 1)}</span> / {pad(projects.length)}
            </span>
            <span className="uppercase tracking-[0.2em]">{project.category}</span>
          </p>

          <h3 id={titleId} className="text-3xl font-bold tracking-tight [grid-area:title] md:text-5xl">
            {project.title}
          </h3>

          <a
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={-1}
            aria-hidden="true"
            className="group/media block [grid-area:media] lg:self-center"
          >
            <BrowserFrame url={hostname(previewUrl)}>
              <img
                src={project.image}
                alt=""
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition-transform duration-1000 ease-expo group-hover/media:scale-[1.04]"
              />
              <span className="absolute bottom-4 right-4 flex translate-y-2 items-center gap-1.5 rounded-full border border-line/10 bg-bg/85 px-3.5 py-1.5 text-xs font-medium opacity-0 backdrop-blur-md transition duration-500 ease-expo group-hover/media:translate-y-0 group-hover/media:opacity-100">
                {project.liveUrl ? "Open live demo" : "View source"}
                <i className="ri-arrow-right-up-line text-main" />
              </span>
            </BrowserFrame>
          </a>

          <div className="flex flex-col [grid-area:body]">
            <p className="leading-relaxed text-other md:text-lg">{project.description}</p>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technologies">
              {project.tags.map((tag) => (
                <li
                  key={tag.label}
                  className="inline-flex items-center gap-2 rounded-full border border-line/10 bg-line/[0.03] px-3 py-1.5 text-[13px] font-medium text-text/85"
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${tag.color}`} aria-hidden="true" />
                  {tag.label}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3 lg:mt-auto lg:pt-8">
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  Live Demo
                  <i
                    className="ri-arrow-right-up-line group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                    aria-hidden="true"
                  />
                </ButtonLink>
              )}
              <ButtonLink href={project.githubUrl} variant="outline" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill" aria-hidden="true" />
                Source Code
              </ButtonLink>
            </div>
          </div>
        </div>

        <div className="project-card__shade pointer-events-none absolute inset-0 bg-black" aria-hidden="true" />
      </div>
    </article>
  );
};

const MyProjectsSection = () => {
  const stackRef = useRef<HTMLDivElement>(null);
  useStackedCards(stackRef);

  return (
    <section id="Projects" className="py-24 md:py-32">
      <div className="container-x">
        <SectionHeading
          index="03"
          label="Projects"
          description="A few things I’ve built end to end – each one live or open source, so you can poke around."
        >
          My <span className="text-main">Projects</span>
        </SectionHeading>

        <div ref={stackRef} className="project-stack flex flex-col gap-6 lg:gap-24">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjectsSection;

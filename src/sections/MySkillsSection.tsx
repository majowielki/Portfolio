import { CSSProperties } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { skillCategories } from "@/content/skills";
import { trackGlow } from "@/utils/glow";

const MySkillsSection = () => (
  <section id="Skills" className="py-24 md:py-32">
    <div className="container-x">
      <SectionHeading
        index="02"
        label="Skills"
        description="The stack I use to design, build and ship full-stack applications – from the database all the way to the UI."
      >
        My <span className="text-main">Skills</span>
      </SectionHeading>

      <div className="glow-group grid grid-cols-[minmax(0,1fr)] gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-[minmax(0,9fr)_minmax(0,11fr)]" onPointerMove={trackGlow}>
        {skillCategories.map((category, index) => (
          <article
            key={category.title}
            data-glow
            data-reveal
            style={{ "--reveal-delay": `${index * 90}ms` } as CSSProperties}
            className="glow-card group/card flex flex-col rounded-3xl border border-line/[0.08] bg-card/60 p-6 md:p-8"
          >
            <div className="flex items-center gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-main/10 text-main ring-1 ring-inset ring-main/20 transition-shadow duration-500 group-hover/card:shadow-[0_0_24px_rgb(var(--main-color)/0.35)]">
                <i className={`${category.icon} text-2xl`} aria-hidden="true" />
              </span>
              <div>
                <h3 className="text-2xl font-bold tracking-tight">{category.title}</h3>
                <p className="text-sm text-other md:text-base">{category.description}</p>
              </div>
            </div>

            <ul className="mt-8 grid grid-cols-[repeat(auto-fit,minmax(5.5rem,1fr))] gap-2.5 sm:gap-3">
              {category.skills.map((skill, skillIndex) => (
                <li
                  key={skill.name}
                  className="group/skill flex flex-col items-center gap-3 rounded-2xl border border-line/[0.06] bg-line/[0.02] px-2 pb-3.5 pt-4 transition-[transform,border-color,background-color] duration-300 hover:-translate-y-1 hover:border-main/40 hover:bg-main/[0.06]"
                >
                  <img
                    src={skill.logo}
                    alt=""
                    width={36}
                    height={36}
                    loading="lazy"
                    style={{ transitionDelay: `${skillIndex * 50}ms` }}
                    className="h-9 w-9 object-contain opacity-70 brightness-125 grayscale transition duration-500 group-hover/card:brightness-100 group-hover/card:opacity-100 group-hover/card:grayscale-0"
                  />
                  <span className="whitespace-nowrap text-[13px] font-medium text-text/80 transition-colors group-hover/skill:text-text">
                    {skill.name}
                  </span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default MySkillsSection;

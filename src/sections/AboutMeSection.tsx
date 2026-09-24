import { CSSProperties } from "react";
import { ButtonLink } from "@/components/ui/Button";
import CodeWindow, { CodeLine } from "@/components/ui/CodeWindow";
import SectionHeading from "@/components/ui/SectionHeading";
import { profile } from "@/content/profile";
import { trackGlow } from "@/utils/glow";

const property = (name: string, value: CodeLine): CodeLine => [
  ["plain", `  `],
  ["wideSpace", "  "],
  ["plain", name],
  ["wideSpace", " ".repeat(10 - name.length)],
  ["plain", " "],
  ["punct", "= "],
  ...value,
  ["punct", ","],
];

const text = (value: string): CodeLine => [["string", `"${value}"`]];

const list = (values: string[]): CodeLine => [
  ["punct", "["],
  ...values.flatMap((value, index): CodeLine => [
    ...text(value),
    ...(index < values.length - 1 ? ([["punct", ", "]] as CodeLine) : []),
  ]),
  ["punct", "]"],
];

const developerCode: CodeLine[] = [
  [
    ["keyword", "var"],
    ["plain", " michal "],
    ["punct", "= "],
    ["keyword", "new"],
    ["plain", " "],
    ["type", "Developer"],
  ],
  [["punct", "{"]],
  property("Name", text(profile.name)),
  property("Role", text(profile.role)),
  property("Location", text(profile.location)),
  property("Experience", text(`${profile.experienceYears}+ years`)),
  property("Stack", list(["C#", "React", "TypeScript"])),
  property("Languages", list(profile.languages)),
  [["punct", "};"]],
  [],
  [
    ["keyword", "await"],
    ["plain", " michal."],
    ["method", "BuildAsync"],
    ["punct", "("],
    ["plain", "yourIdea"],
    ["punct", ");"],
  ],
];

const stats = [
  { value: `${profile.experienceYears}+`, label: "Years of experience" },
  { value: profile.speciality, label: "Speciality" },
  { value: "PL / EN", label: "Languages" },
];

const AboutMeSection = () => (
  <section id="AboutMe" className="py-24 md:py-32">
    <div className="container-x">
      <SectionHeading index="01" label="About">
        About <span className="text-main">Me</span>
      </SectionHeading>

      <div className="grid grid-cols-[minmax(0,1fr)] items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div data-reveal>
          <h3 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl">
            I am <span className="text-main">Full Stack</span>
            <br />
            React + .NET Developer
          </h3>
          <p className="mt-6 text-lg leading-relaxed text-other">
            I build complete web applications end to end – from .NET APIs, data access and messaging on the
            backend to fast, type-safe React interfaces on the frontend, containerized and ready for the cloud.
          </p>

          <dl className="glow-group mt-10 grid grid-cols-3 gap-3 sm:gap-4" onPointerMove={trackGlow}>
            {stats.map((stat) => (
              <div
                key={stat.label}
                data-glow
                className="glow-card flex flex-col-reverse justify-end rounded-2xl border border-line/10 bg-card/50 p-4 sm:p-5"
              >
                <dt className="mt-1 font-mono text-[10px] uppercase tracking-wider text-other/80 sm:text-xs">
                  {stat.label}
                </dt>
                <dd className="whitespace-nowrap text-xl font-bold tracking-tight text-main sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <ButtonLink href="#Contact" className="mt-10">
            Contact Me
            <i className="ri-arrow-right-line group-hover/button:translate-x-0.5" aria-hidden="true" />
          </ButtonLink>
        </div>

        <CodeWindow
          fileName="Developer.cs"
          lines={developerCode}
          style={{ "--reveal-delay": "150ms" } as CSSProperties}
        />
      </div>
    </div>
  </section>
);

export default AboutMeSection;

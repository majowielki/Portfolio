import photo from "@/assets/images/MichalMajewski.webp";
import { ButtonLink } from "@/components/ui/Button";
import RotatingWords from "@/components/ui/RotatingWords";
import SocialLinks from "@/components/ui/SocialLinks";
import { profile } from "@/content/profile";

const HeroSection = () => (
  <section
    id="Home"
    className="relative flex min-h-svh items-center overflow-hidden pb-14 pt-[calc(var(--header-h)+3.5rem)] md:pb-20 md:pt-[calc(var(--header-h)+5rem)]"
  >
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <div className="absolute -right-[10%] -top-[25%] h-[40rem] w-[40rem] rounded-full bg-main/[0.12] blur-[140px]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgb(var(--line-color)/0.04)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--line-color)/0.04)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_70%_60%_at_60%_40%,#000_20%,transparent_75%)]" />
    </div>

    <div className="container-x relative grid items-center gap-16 lg:grid-cols-[minmax(0,1fr)_auto] xl:gap-24">
      <div>
        <p className="eyebrow flex animate-fade-up items-center gap-3 text-text/80">
          <img
            src={photo}
            alt=""
            width={44}
            height={44}
            className="h-11 w-11 rounded-full object-cover ring-2 ring-main/70 ring-offset-2 ring-offset-bg lg:hidden"
          />
          <span className="accent-dash hidden lg:inline-block" aria-hidden="true" />
          {profile.role}
        </p>

        <h1 className="mt-6 text-[length:clamp(3.25rem,15vw,6.5rem)] font-bold leading-[0.92] tracking-[-0.035em] xl:text-[7.25rem]">
          <span className="line-mask">
            <span className="block animate-line-up [animation-delay:120ms]">{profile.firstName}</span>
          </span>
          <span className="line-mask">
            <span className="block animate-line-up [animation-delay:240ms]">
              {profile.lastName}
              <span className="text-main">.</span>
            </span>
          </span>
        </h1>

        <div className="relative mt-10 animate-fade-up pl-6 [animation-delay:400ms] md:pl-10">
          <span
            className="absolute inset-y-0 left-0 w-stroke origin-top animate-grow-y bg-main [animation-delay:500ms] shadow-[0_0_14px_rgb(var(--main-color)/0.6)]"
            aria-hidden="true"
          />
          <p className="text-2xl font-medium leading-tight md:text-3xl">
            <span className="text-other">I build</span>
            <br />
            <RotatingWords words={["robust .NET APIs", "modern React SPAs", "cloud-ready systems"]} className="text-main" />
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-other md:text-lg">
            Hello there! Welcome to my portfolio. Here, you’ll find projects and ideas I’ve designed and shipped end to
            end – from clean backend architecture all the way to polished, type-safe interfaces.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-5">
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#Projects">
                View My Projects
                <i className="ri-arrow-right-line group-hover/button:translate-x-0.5" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href={profile.cvUrl} variant="outline" download>
                Download CV
                <i className="ri-download-2-line group-hover/button:translate-y-0.5" aria-hidden="true" />
              </ButtonLink>
            </div>
            <SocialLinks />
          </div>
        </div>
      </div>

      <figure className="group relative mr-2 hidden animate-fade-up [animation-delay:350ms] lg:block">
        <span
          className="absolute -left-7 -top-7 h-full w-full rounded-2xl border-stroke border-main shadow-[0_0_24px_-6px_rgb(var(--main-color)/0.6)] transition-transform duration-700 ease-expo group-hover:-translate-x-2 group-hover:-translate-y-2"
          aria-hidden="true"
        />
        <div className="relative aspect-[4/5] w-[20rem] overflow-hidden rounded-2xl bg-sec shadow-[0_30px_70px_rgb(0_0_0/0.55)] xl:w-[23rem]">
          <img
            src={photo}
            alt={profile.name}
            width={768}
            height={768}
            className="h-full w-full object-cover transition-transform duration-1000 ease-expo group-hover:scale-[1.03]"
          />
        </div>
        <figcaption className="absolute -bottom-5 -right-5 flex items-center gap-2.5 rounded-full border border-line/10 bg-bg/85 px-4 py-2 font-mono text-xs shadow-lg backdrop-blur-md xl:text-sm">
          <span className="relative flex h-2 w-2" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-main" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-main" />
          </span>
          {profile.experienceYears}+ years of experience
        </figcaption>
      </figure>
    </div>
  </section>
);

export default HeroSection;

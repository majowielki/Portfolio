import foto from "@/assets/images/MichalMajewski.png";
import Button from "@/components/buttons/Button";
import 'remixicon/fonts/remixicon.css';

const HeroSection = () => {
  return (
    <section
      id="Home"
      className="flex flex-col min-h-screen gap-10 lg:flex-row lg:*:basis-full justify-center"
    >
      <div className="flex flex-col self-center gap-y-8 px-6 sm:px-10 md:px-12 lg:gap-y-12 lg:ml-24 lg:mr-10 xl:ml-32">
        <div className="space-y-2 lg:space-y-4">
          <h6 className="text-md pl-6 uppercase relative before:content-[''] before:h-1 before:w-4 before:bg-main before:absolute before:top-2/4 before:-translate-y-2/4 before:left-0 xl:text-xl">
            Full Stack .NET Developer
          </h6>
          <h1 className="font-bold leading-none text-[length:clamp(3rem,17vw,4.5rem)] sm:text-7xl xl:text-8xl">
            Michał Majewski
          </h1>
        </div>

        <div className="flex flex-col gap-y-8 lg:pl-16 lg:relative lg:before:content-[''] lg:before:h-full lg:before:w-5 lg:before:bg-main lg:before:absolute lg:before:top-0 lg:before:left-0">
          <div className="flex -mb-4 lg:-mb-5 gap-x-4">
            <a
              href="https://www.linkedin.com/in/micha%C5%82-majewski-/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="ri-linkedin-box-fill inline-flex items-center justify-center w-10 h-10 text-main rounded-full [backdrop-filter:brightness(88%)] text-[20px] mr-[17px] shadow-[0_0_20px_transparent] cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgb(var(--main-color))]" />
            </a>
            <a
              href="https://github.com/majowielki"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="ri-github-fill inline-flex items-center justify-center w-10 h-10 text-main rounded-full [backdrop-filter:brightness(88%)] text-[20px] mr-[17px] shadow-[0_0_20px_transparent] cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgb(var(--main-color))]" />
            </a>
            <a
              href="https://www.facebook.com/majo1337"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <i className="ri-facebook-circle-fill inline-flex items-center justify-center w-10 h-10 text-main rounded-full [backdrop-filter:brightness(88%)] text-[20px] mr-[17px] shadow-[0_0_20px_transparent] cursor-pointer transition-all duration-500 hover:scale-110 hover:shadow-[0_0_20px_rgb(var(--main-color))]" />
            </a>
          </div>

          <p className="max-w-lg lg:text-lg xl:text-2xl">
            Hello there! Welcome to my portfolio. Here, you’ll find projects and ideas showcasing my expertise in .NET APIs, modern React SPAs, and cloud-ready architectures.
          </p>

          <div className="flex -mt-2 gap-x-4">
            <Button as="a" href="#Projects">View My Projects</Button>
            <Button as="a" href="/Michal-Majewski-CV.pdf" variant="outline" download>
              Download CV
            </Button>
          </div>
        </div>
      </div>

      <figure className="hidden lg:flex justify-end items-center w-full lg:mr-24 xl:mr-32">
        <div className="relative">
          <span className="absolute lg:-top-10 lg:-left-10 w-96 h-96 lg:border-[16px] xl:-top-12 xl:-left-12 xl:border-[20px] border-main rounded-lg -z-10"></span>
          <img
            src={foto}
            alt="Showcase"
            className="rounded-lg shadow-lg w-96 h-96 object-cover"
          />
        </div>
      </figure>
    </section>
  );
}

export default HeroSection;
  
import Button from "@/components/buttons/Button";
import SectionTitle from "@/components/custom/SectionTitle";
import programmerImage from "@/assets/images/programmer.webp";

const AboutMeSection = () => {
  return (
    <section
      id="AboutMe"
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      {/* About Me Title */}
      <div className="w-full flex justify-center mb-8 md:mb-6">
        <SectionTitle>
          About <span className="text-main">Me</span>
        </SectionTitle>
      </div>

      {/* Content: Image and Experience/Text */}
      <div className="w-full max-w-5xl flex flex-col items-center gap-6">
        {/* Image over info box */}
        <div className="flex justify-center" data-aos="zoom-in-down">
          <img
            src={programmerImage}
            alt="Michał Majewski"
            width={900}
            height={715}
            loading="lazy"
            decoding="async"
            className="h-auto w-auto max-w-[360px] md:max-w-[420px] max-h-[32vh] md:max-h-[36vh] rounded-2xl shadow-lg"
          />
        </div>

        {/* Info card */}
        <div className="w-full" data-aos="zoom-in-up">
          <div className="bg-[#2d343f] rounded-2xl border border-transparent shadow-[0_0_10px_rgb(var(--main-color))] p-6 md:p-8 transition hover:border-main lg:flex lg:flex-col lg:items-center lg:justify-center">
            <h2 className="text-3xl md:text-4xl xl:text-4xl font-semibold mb-6 leading-snug text-center">
              I am{" "}
              <span className="text-main">Full Stack</span>
              <br />React + .NET Developer
            </h2>

            {/* Quick facts */}
            <ul className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <li className="flex items-center gap-3">
                <i className="ri-map-pin-line text-main text-xl" />
                <p className="text-text font-semibold">
                  Address{" "}
                  <span className="text-other font-normal ml-2">
                    Wrocław, Poland
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-terminal-box-line text-main text-xl" />
                <p className="text-text font-semibold">
                  Speciality{" "}
                  <span className="text-other font-normal ml-2">
                    .NET
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-main text-xl" />
                <p className="text-text font-semibold">
                  Phone{" "}
                  <span className="text-other font-normal ml-2">
                    (+48) 537-174-960
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-award-line text-main text-xl" />
                <p className="text-text font-semibold">
                  Experience{" "}
                  <span className="text-other font-normal ml-2">7 Years</span>
                </p>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-mail-line text-main text-xl" />
                <p className="text-text font-semibold">
                  Email{" "}
                  <span className="text-other font-normal ml-2">
                    mmajewski111@gmail.com
                  </span>
                </p>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-translate-2 text-main text-xl" />
                <p className="text-text font-semibold">
                  Languages{" "}
                  <span className="text-other font-normal ml-2">
                    Polish, English
                  </span>
                </p>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 justify-center">
              <Button as="a" href="#Contact">
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
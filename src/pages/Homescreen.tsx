import ParticlesBackground from "@/components/background/ParticlesBackground";
import DesignSwitcher from "@/components/layout/DesignSwitcher";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { useRevealOnScroll } from "@/hooks/useRevealOnScroll";
import AboutMeSection from "@/sections/AboutMeSection";
import ContactMeSection from "@/sections/ContactMeSection";
import HeroSection from "@/sections/HeroSection";
import MyProjectsSection from "@/sections/MyProjectsSection";
import MySkillsSection from "@/sections/MySkillsSection";

const Homescreen = () => {
  useRevealOnScroll();

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-main focus:px-4 focus:py-2 focus:font-semibold focus:text-bg"
      >
        Skip to content
      </a>
      <ParticlesBackground />
      <div className="site-frame">
        <Header />
        <main id="main">
          <HeroSection />
          <AboutMeSection />
          <MySkillsSection />
          <MyProjectsSection />
          <ContactMeSection />
        </main>
        <Footer />
      </div>
      <DesignSwitcher />
    </>
  );
};

export default Homescreen;

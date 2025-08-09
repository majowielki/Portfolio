import ParticlesBackground from "@/components/background/ParticlesBackground";
import Navbar from "@/components/navbar/Navbar";
import HeroSection from "@/sections/HeroSection";
import AboutMeSection from "@/sections/AboutMeSection";
import MyProjectsSection from "@/sections/MyProjectsSection";
import MySkillsSection from "@/sections/MySkillsSection";
import ContactMeSection from "@/sections/ContactMeSection";
import { GlobalStateProvider } from "@/contexts/GlobalStateContext";
import Modal from "@/components/navbar/Modal";
import BurgerMenu from "@/components/navbar/BurgerMenu";
import WebsiteLayoutContainer from "@/components/layout/WebsiteLayoutContainer";
import SectionsBackgroundContainer from "@/components/background/SectionsBackgroundContainer";

const Homescreen = () => {
  return (
    <GlobalStateProvider>
      <ParticlesBackground />
      <WebsiteLayoutContainer>
        <SectionsBackgroundContainer/>
        <Navbar />
        <Modal />
        <BurgerMenu />
        <HeroSection />
        <AboutMeSection />
        <MySkillsSection />
        <MyProjectsSection />
        <ContactMeSection />
      </WebsiteLayoutContainer>
    </GlobalStateProvider>
  );
}

export default Homescreen;

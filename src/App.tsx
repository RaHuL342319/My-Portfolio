import { useState, useEffect } from "react";
import BackgroundPattern from "./components/BackgroundPattern";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import { experience, projects } from "./data/PersonalInfo";

const App = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-300">
      <BackgroundPattern />

      <div className="relative">
        <Header
          isScrolled={isScrolled}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        <div className="lg:flex lg:min-h-screen">
          <LeftSidebar
            activeSection={activeSection}
            scrollToSection={scrollToSection}
          />

          <div className="lg:ml-[50%] lg:w-1/2 px-6 lg:px-12 py-20">
            <AboutSection />
            <ExperienceSection experience={experience} />
            <ProjectsSection projects={projects} />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

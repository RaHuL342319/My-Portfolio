import NavigationMenu from "./NavigationMenu";
import SocialLinks from "./SocialLinks";
import { personalInfo } from "../data/PersonalInfo";

type LeftSidebarProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

// Left Sidebar Component
const LeftSidebar = ({ activeSection, scrollToSection }: LeftSidebarProps) => {
  return (
    <div className="lg:fixed lg:left-0 lg:top-0 lg:w-1/2 lg:h-screen lg:flex lg:flex-col lg:justify-center px-6 lg:px-12 py-20 lg:py-0">
      <div className="max-w-lg">
        <h1 className="text-4xl lg:text-5xl font-bold text-slate-200 mb-4">
          {personalInfo.name}
        </h1>
        <h2 className="text-xl lg:text-2xl font-medium text-slate-400 mb-6">
          {personalInfo.title}
        </h2>
        <p className="text-lg text-slate-400 mb-8 leading-relaxed">
          {personalInfo.description}
        </p>

        <NavigationMenu
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <SocialLinks />
      </div>
    </div>
  );
};

export default LeftSidebar;

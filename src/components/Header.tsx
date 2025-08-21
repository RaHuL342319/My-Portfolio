import { personalInfo } from "../data/PersonalInfo";

// Header Component
type HeaderProps = {
  isScrolled: boolean;
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};
const Header = ({
  isScrolled,
  activeSection,
  scrollToSection,
}: HeaderProps) => {
  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex justify-between items-center">
          <div className="text-emerald-400 font-bold text-xl">
            {personalInfo.name}
          </div>
          <div className="hidden md:flex space-x-8">
            {["about", "experience", "projects"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-colors hover:text-emerald-400 ${
                  activeSection === section ? "text-emerald-400" : ""
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

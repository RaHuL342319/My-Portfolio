// Navigation Menu Component
type NavigationMenuProps = {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
};

const NavigationMenu = ({
  activeSection,
  scrollToSection,
}: NavigationMenuProps) => {
  return (
    <nav className="hidden lg:block mb-8">
      <ul className="space-y-4">
        {["about", "experience", "projects"].map((section) => (
          <li key={section}>
            <button
              onClick={() => scrollToSection(section)}
              className={`group flex items-center py-2 transition-all duration-300 ${
                activeSection === section ? "text-slate-200" : "text-slate-500"
              }`}
            >
              <span
                className={`h-px bg-slate-400 transition-all duration-300 mr-4 ${
                  activeSection === section ? "w-16" : "w-8 group-hover:w-16"
                }`}
              ></span>
              <span className="uppercase text-xs font-bold tracking-widest group-hover:text-slate-200">
                {section}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenu;

import { FC, useState, useEffect } from "react";
import {
  User,
  Award,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Trophy,
} from "lucide-react";

type NavBarProps = {
  scrollToSection: (id: string) => void;
};

const Navbar: FC<NavBarProps> = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);

  const sections = [
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Award },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Trophy },
  ];

  const handleScroll = (sectionId: string) => {
    scrollToSection(sectionId);
    setActiveSection(sectionId);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-content">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              className={`nav-item ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => handleScroll(section.id)}
              title={section.label}
            >
              <Icon size={18} />
              {!isMobile && <span>{section.label}</span>}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

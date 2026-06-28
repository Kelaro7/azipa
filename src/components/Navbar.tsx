import { FC, useState, useEffect, useRef } from "react";
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

const SECTION_IDS = [
  "about",
  "skills",
  "projects",
  "experience",
  "education",
  "certifications",
] as const;

const Navbar: FC<NavBarProps> = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const sections = [
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Award },
    { id: "projects", label: "Projects", icon: FolderGit2 },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "certifications", label: "Certifications", icon: Trophy },
  ];

  const handleNavClick = (sectionId: string) => {
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

  useEffect(() => {
    const container = document.querySelector(".portfolio-page");
    if (!container) return;

    const onScroll = () => {
      const y = container.scrollTop;
      if (y < 80) {
        setNavbarVisible(true);
      } else {
        setNavbarVisible(y < lastScrollY.current);
      }
      lastScrollY.current = y;
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const container = document.querySelector(".portfolio-page");
    if (!container) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        root: container,
        rootMargin: "-40% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      }
    );

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && SECTION_IDS.includes(hash as (typeof SECTION_IDS)[number])) {
      setActiveSection(hash);
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [scrollToSection]);

  return (
    <nav
      className={`navbar ${navbarVisible ? "navbar-visible" : "navbar-hidden"}`}
    >
      <div className="navbar-content">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              className={`nav-item ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => handleNavClick(section.id)}
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

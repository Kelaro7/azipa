import { FC, useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import {
  User,
  Award,
  Briefcase,
  FolderGit2,
  GraduationCap,
  Trophy,
} from "lucide-react";
import { NAV_SECTION_IDS } from "../Sections/utils";
import { getScrollRoot, getScrollY } from "../utils/scroll";

type NavBarProps = {
  scrollToSection: (id: string) => void;
};

const Navbar: FC<NavBarProps> = ({ scrollToSection }) => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState("about");
  const [isMobile, setIsMobile] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  const lastScrollY = useRef(0);

  const sections = [
    { id: "about", labelKey: "nav.about", icon: User },
    { id: "skills", labelKey: "nav.skills", icon: Award },
    { id: "projects", labelKey: "nav.projects", icon: FolderGit2 },
    { id: "experience", labelKey: "nav.experience", icon: Briefcase },
    { id: "education", labelKey: "nav.education", icon: GraduationCap },
    { id: "certifications", labelKey: "nav.certifications", icon: Trophy },
  ] as const;

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
    const container = getScrollRoot();

    const onScroll = () => {
      const y = getScrollY();
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
    const container = getScrollRoot();

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

    NAV_SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (NAV_SECTION_IDS.includes(hash as (typeof NAV_SECTION_IDS)[number])) {
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
          const label = t(section.labelKey);
          return (
            <button
              key={section.id}
              className={`nav-item ${
                activeSection === section.id ? "active" : ""
              }`}
              onClick={() => handleNavClick(section.id)}
              title={label}
            >
              <Icon size={18} />
              {!isMobile && <span>{label}</span>}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;

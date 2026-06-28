import { Analytics } from "@vercel/analytics/react";
import React, { useCallback, useEffect, useState } from "react";
import Footer from "./components/Footer";
import AboutMe from "./Sections/AboutMe";
import Experiences from "./Sections/Experiences";
import Header from "./Sections/Header";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Education from "./Sections/Studies";
import Certifications from "./Sections/Certifications";
import Navbar from "./components/Navbar";
import { scrollToElement } from "./utils/scroll";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const scrollToSection = useCallback((id: string) => {
    scrollToElement(id);
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const bgImage = isMobile ? "url('/mobileBg.webp')" : "url('/desktopBg.webp')";

  return (
    <div
      className={`portfolio-page${isMobile ? " portfolio-page--mobile" : ""}`}
      style={{
        backgroundImage: bgImage,
      }}
    >
      <Navbar scrollToSection={scrollToSection} />

      <div className="portfolio-body">
        <Header />

        <main className="portfolio-main">
        <div id="about">
          <AboutMe />
        </div>

        <div id="skills">
          <Skills />
        </div>

        <div id="projects">
          <Projects />
        </div>

        <div id="experience">
          <Experiences />
        </div>

        <div id="education">
          <Education />
        </div>

        <div id="certifications">
          <Certifications />
        </div>
      </main>
      </div>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;

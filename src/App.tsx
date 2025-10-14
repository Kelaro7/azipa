import { useEffect, useState } from "react";
import AboutMe from "./Sections/AboutMe";
import Experiences from "./Sections/Experiences";
import Header from "./Sections/Header";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Education from "./Sections/Studies";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const bg = isMobile
    ? "#000 url('/mobileBg.webp') center right / cover no-repeat"
    : "#000 url('/desktopBg.webp') center top / cover no-repeat";

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div
      className="portfolio-page"
      style={{
        minHeight: "100vh",
        background: bg,
        backgroundAttachment: "fixed",
        color: "#fff",
        fontFamily: "Inter, Poppins, sans-serif",
        padding: "0 0 4rem 0",
      }}
    >
      <Header />

      <main
        style={{
          maxWidth: 800,
          margin: "40px auto 0 auto",
          background: "rgba(0,0,0,0.7)",
          borderRadius: 24,
          boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
          padding: "1rem 2rem",
        }}
      >
        <AboutMe />

        <Skills />

        <Projects />

        <Experiences />

        <Education />
      </main>
    </div>
  );
}

export default App;

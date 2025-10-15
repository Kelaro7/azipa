import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";
import AboutMe from "./Sections/AboutMe";
import Experiences from "./Sections/Experiences";
import Header from "./Sections/Header";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";
import Education from "./Sections/Studies";

function App() {
  const [isMobile, setIsMobile] = useState(false);

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
      className="portfolio-page"
      style={{
        height: isMobile ? "100dvh" : "100vh",
        backgroundColor: "#000",
        backgroundImage: bgImage,
        backgroundPosition: "center top",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        color: "#fff",
        fontFamily: "Inter, Poppins, sans-serif",
        padding: "0 0 0 0",
      }}
    >
      <Header />

      <main
        style={{
          maxWidth: 800,
          margin: "40px auto 0 auto",
          background: "rgba(0,0,0,0.7)",
          borderRadius: isMobile ? "0" : "24px 24px 0px 0px ",
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
      <Analytics />
    </div>
  );
}

export default App;

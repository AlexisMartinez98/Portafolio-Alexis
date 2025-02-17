import { BrowserRouter as Router } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import MySkill from "./components/MySkill";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/common/CustomCursor";
import ParticlesBackground from "./components/common/ParticlesBackground";

function App() {
  const theme = useSelector((state) => state.theme);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.documentElement.className = theme;
    // Simular tiempo de carga para la animación inicial
    setTimeout(() => setIsLoading(false), 1500);
  }, [theme]);

  if (isLoading) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center ${theme === 'dark' ? 'bg-dark' : 'bg-light'}`}>
        <div className="text-4xl font-bold text-text-color animate-pulse neon-text">
          AM
        </div>
      </div>
    );
  }

  return (
    <div className={`font-font-1 min-h-screen relative ${theme === 'dark' ? 'dark bg-dark' : 'bg-light'}`}>
      <svg className="svg-filters">
        <defs>
          <filter id="distortion">
            <feTurbulence 
              type="turbulence" 
              baseFrequency="0.01 0.01" 
              numOctaves="2" 
              seed="2"
              stitchTiles="stitch"
            >
              <animate 
                attributeName="baseFrequency" 
                from="0.01 0.01" 
                to="0.02 0.02" 
                dur="5s" 
                repeatCount="indefinite" 
              />
            </feTurbulence>
            <feDisplacementMap 
              in="SourceGraphic" 
              scale="10"
            />
          </filter>
        </defs>
      </svg>
      <CustomCursor />
      <ParticlesBackground />
      <div className="relative z-10">
        <Router>
          <NavBar />
          <Header />
          <AboutMe />
          <MySkill />
          <Projects />
          <Contact />
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;

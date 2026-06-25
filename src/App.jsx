import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

import About from "./sections/About";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
 
import Certifications from "./sections/Certifications";
import Achievements from "./sections/Achievements";
import Contact from "./sections/Contact";

import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

import ParticleBackground from "./components/ParticleBackground";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ParticleBackground />

      <div className="glow-one"></div>
      <div className="glow-two"></div>

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Experience />

      <Projects />

       

      <Certifications />

      <Achievements />

      <Contact />

      <Footer />

      <ScrollTop />
    </>
  );
}

export default App;
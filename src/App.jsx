import { useEffect, useState } from "react";
import CursorGlow from "./components/CursorGlow.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import ProjectPanel from "./components/ProjectPanel.jsx";
import { projects } from "./data.js";

const PANEL_CLOSE_DELAY = 250;

export default function App() {
  const [panelProject, setPanelProject] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const openProjectPanel = (projectId) => {
    const project = projects.find((item) => item.id === projectId);
    if (!project) return;

    setPanelProject(project);
    setIsPanelOpen(true);
    document.body.classList.add("panel-open");
  };

  const closeProjectPanel = () => {
    setIsPanelOpen(false);
    document.body.classList.remove("panel-open");
    setTimeout(() => setPanelProject(null), PANEL_CLOSE_DELAY);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeProjectPanel();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <CursorGlow />

      <Header />

      <main>
        <Hero />
        <About />
        <Projects onOpenProject={openProjectPanel} />
        <Skills />
        <Contact />
      </main>

      <Footer />

      <ProjectPanel project={panelProject} isOpen={isPanelOpen} onClose={closeProjectPanel} />
    </>
  );
}

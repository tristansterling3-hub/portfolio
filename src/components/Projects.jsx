import useReveal from "../hooks/useReveal.js";
import ProjectCard from "./ProjectCard.jsx";
import { projects } from "../data.js";

export default function Projects({ onOpenProject }) {
  const { ref, className } = useReveal();

  return (
    <section id="projects" className="section">
      <div className="container">
        <div className={`section-heading ${className}`} ref={ref}>
          <h2 className="section-title">
            Featured <span>Projects</span>
          </h2>
          <div className="section-line" />
          <p>
            A selection of software, game, and interactive projects that show my
            range across engineering, design, and problem solving.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} onOpen={onOpenProject} />
          ))}
        </div>
      </div>
    </section>
  );
}

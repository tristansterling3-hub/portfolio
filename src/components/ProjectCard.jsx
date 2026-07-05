import { useRef } from "react";
import useReveal from "../hooks/useReveal.js";

export default function ProjectCard({ project, index, onOpen }) {
  const { ref: revealRef, className } = useReveal();
  const cardRef = useRef(null);

  const setRefs = (node) => {
    cardRef.current = node;
    revealRef.current = node;
  };

  const handleMouseMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const rotateY = (x / rect.width - 0.5) * 8;
    const rotateX = (y / rect.height - 0.5) * -8;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = "";
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpen(project.id);
    }
  };

  return (
    <article
      className={`project-card ${className}`}
      ref={setRefs}
      tabIndex={0}
      onClick={() => onOpen(project.id)}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="project-image-wrap">
        <img className="project-image" src={project.image} alt={`${project.title} preview image`} />
        <span className="project-category">{project.category}</span>
        <span className="project-number">0{index + 1}</span>
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-tags">
          {project.tech.map((tag) => (
            <span className="tag" key={tag}>
              {tag}
            </span>
          ))}
        </div>

        <button className="project-link" type="button">
          View Project
          <span>→</span>
        </button>
      </div>
    </article>
  );
}

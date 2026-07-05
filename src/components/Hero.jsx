import useReveal from "../hooks/useReveal.js";
import { handleAnchorClick } from "../smoothScroll.js";

export default function Hero() {
  const { ref, className } = useReveal();

  return (
    <section id="home" className="hero">
      <div className={`container hero-inner ${className}`} ref={ref}>
        <span className="hero-pill">👋 Welcome to my portfolio</span>

        <h1 className="hero-title">Tristan Sterling</h1>

        <h2 className="hero-subtitle">Software Engineer &amp; Game Developer</h2>

        <p className="hero-text">
          Building immersive game systems, interactive software, and polished
          projects that blend technical problem-solving with thoughtful user
          experience.
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-primary"
            href="#projects"
            onClick={(e) => handleAnchorClick(e, "#projects")}
          >
            View My Work <span>→</span>
          </a>
          <a
            className="btn btn-secondary"
            href="#contact"
            onClick={(e) => handleAnchorClick(e, "#contact")}
          >
            Get In Touch
          </a>
        </div>

        <div className="hero-socials">
          <a href="https://github.com/tristansterling3-hub" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/tristan-sterling-9a408121a/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="mailto:tristansterling3@gmail.com">Email</a>
        </div>
      </div>
    </section>
  );
}

import useReveal from "../hooks/useReveal.js";
import SkillCard from "./SkillCard.jsx";
import { skills } from "../data.js";

export default function Skills() {
  const { ref, className } = useReveal();

  return (
    <section id="skills" className="section">
      <div className="container">
        <div className={`section-heading ${className}`} ref={ref}>
          <h2 className="section-title">
            Skills &amp; <span>Technologies</span>
          </h2>
          <div className="section-line" />
          <p>
            My technical toolkit for building software, gameplay systems, data
            projects, and responsive web experiences.
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((group) => (
            <SkillCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
}

import useReveal from "../hooks/useReveal.js";
import StatCard from "./StatCard.jsx";
import { stats } from "../data.js";

export default function About() {
  const { ref, className } = useReveal();

  return (
    <section id="about" className="section section-split">
      <div className="container split-grid">
        <div className={`about-copy ${className}`} ref={ref}>
          <h2 className="section-title">
            About <span>Me</span>
          </h2>
          <div className="section-line" />

          <p>
            I'm a software developer with experience across game development,
            web applications, data-driven dashboards, and interactive learning
            projects. I enjoy building systems that are both technically solid
            and engaging to use.
          </p>

          <p>
            My work spans Unity gameplay systems, Java and Python development,
            PHP/MySQL web apps, and interactive tools that combine clean design
            with practical functionality.
          </p>

          <div className="code-chip">
            <span>const</span> focus = <em>"Games, software, and interactive experiences"</em>;
          </div>
        </div>

        <div className="stats-grid">
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
}

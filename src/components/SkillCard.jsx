import useReveal from "../hooks/useReveal.js";

export default function SkillCard({ group }) {
  const { ref, className } = useReveal();

  return (
    <article className={`skill-card ${className}`} ref={ref}>
      <div className="skill-card-header">
        <span className="skill-icon">{group.icon}</span>
        <h3>{group.title}</h3>
      </div>
      <div className="skill-tags">
        {group.items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

import useReveal from "../hooks/useReveal.js";

export default function StatCard({ value, label }) {
  const { ref, className } = useReveal();

  return (
    <article className={`stat-card ${className}`} ref={ref}>
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </article>
  );
}

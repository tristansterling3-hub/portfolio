export function handleAnchorClick(event, targetId) {
  if (!targetId || targetId === "#") return;

  const targetEl = document.querySelector(targetId);
  if (!targetEl) return;

  event.preventDefault();
  targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
}

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${event.clientX - 160}px, ${event.clientY - 160}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="cursor-glow" ref={glowRef} />;
}

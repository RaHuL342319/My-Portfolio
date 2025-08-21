import { useEffect, useRef } from "react";

const BackgroundPattern = () => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    interface MouseMoveEvent extends MouseEvent {
      clientX: number;
      clientY: number;
    }

    const handleMouseMove = (e: MouseMoveEvent) => {
      const { clientX, clientY } = e;
      if (bgRef.current) {
        bgRef.current.style.backgroundImage = `
        radial-gradient(circle at ${clientX}px ${clientY}px, rgba(255,255,255,0.2) 100px, transparent 200px),
        radial-gradient(circle at 25px 25px, rgba(255,255,255,0.1) 2px, transparent 0)
      `;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div
        ref={bgRef}
        className="absolute inset-0 transition-all duration-100 ease-out opacity-30"
        style={{
          backgroundSize: "50px 50px",
        }}
      ></div>
    </div>
  );
};

export default BackgroundPattern;

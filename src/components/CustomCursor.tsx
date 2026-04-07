"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0;
    let mouseY = 0;
    let ringX = 0;
    let ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(animate);
    };

    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    const onEnterLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea")) {
        setHovering(true);
      }
    };
    const onLeaveLink = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button, [role='button'], input, textarea")) {
        setHovering(false);
      }
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mouseover", onEnterLink);
    window.addEventListener("mouseout", onLeaveLink);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mouseover", onEnterLink);
      window.removeEventListener("mouseout", onLeaveLink);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] will-change-transform"
        style={{ position: "fixed" }}
      >
        <div
          className="transition-transform duration-100"
          style={{
            width: clicking ? 6 : 8,
            height: clicking ? 6 : 8,
            borderRadius: "50%",
            background: "#00d4ff",
            boxShadow: "0 0 8px #00d4ff, 0 0 16px rgba(0,212,255,0.5)",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>

      {/* Ring */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] will-change-transform"
        style={{ position: "fixed" }}
      >
        <div
          style={{
            width: hovering ? 48 : clicking ? 28 : 36,
            height: hovering ? 48 : clicking ? 28 : 36,
            borderRadius: "50%",
            border: hovering
              ? "1.5px solid rgba(0,212,255,0.8)"
              : "1.5px solid rgba(0,212,255,0.45)",
            transform: "translate(-50%, -50%)",
            transition: "width 0.2s ease, height 0.2s ease, border-color 0.2s ease",
            boxShadow: hovering ? "0 0 16px rgba(0,212,255,0.25)" : "none",
          }}
        />
      </div>
    </>
  );
}

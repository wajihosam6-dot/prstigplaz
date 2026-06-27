"use client";

import { useEffect, useRef, useState, useCallback } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);

  const mouse = useRef({ x: 0, y: 0 });
  const trail = useRef({ x: 0, y: 0 });

  const [cursorState, setCursorState] = useState<"default" | "hover" | "click" | "text">("default");
  const [isVisible, setIsVisible] = useState(false);

  const animate = useCallback(() => {
    trail.current.x += (mouse.current.x - trail.current.x) * 0.1;
    trail.current.y += (mouse.current.y - trail.current.y) * 0.1;

    if (trailRef.current) {
      trailRef.current.style.transform = `translate(${trail.current.x}px, ${trail.current.y}px) translate(-50%, -50%)`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }

      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setCursorState("click");
    const onMouseUp = () => setCursorState("default");
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const handleHoverIn = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor === "hover"
      ) {
        setCursorState("hover");
      } else if (target.tagName === "P" || target.tagName === "SPAN" || target.tagName === "H1" || target.tagName === "H2" || target.tagName === "H3") {
        setCursorState("text");
      }
    };

    const handleHoverOut = () => setCursorState("default");

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseover", handleHoverIn);
    document.addEventListener("mouseout", handleHoverOut);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseover", handleHoverIn);
      document.removeEventListener("mouseout", handleHoverOut);
      cancelAnimationFrame(rafRef.current);
    };
  }, [animate, isVisible]);

  const cursorSize = {
    default: { dot: "w-3 h-3", ring: "w-10 h-10" },
    hover: { dot: "w-5 h-5", ring: "w-16 h-16" },
    click: { dot: "w-2 h-2", ring: "w-8 h-8" },
    text: { dot: "w-1 h-5", ring: "w-8 h-8" },
  };

  const sizes = cursorSize[cursorState];

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-[9999] will-change-transform"
        style={{ transition: "opacity 0.3s" }}
        aria-hidden="true"
      >
        <div
          className={`
            ${sizes.dot}
            rounded-full
            transition-all duration-300
            ${cursorState === "text"
              ? "bg-gold rounded-sm"
              : cursorState === "hover"
              ? "bg-gold/60"
              : "bg-gold"
            }
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
          style={{
            marginLeft: cursorState === "text" ? "-2px" : `-${cursorState === "hover" ? "10px" : "6px"}`,
            marginTop: cursorState === "text" ? "-10px" : `-${cursorState === "hover" ? "10px" : "6px"}`,
          }}
        />
      </div>

      {/* Trail ring */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 pointer-events-none z-[9998] will-change-transform"
        aria-hidden="true"
      >
        <div
          className={`
            ${sizes.ring}
            rounded-full
            border transition-all duration-500
            ${cursorState === "hover"
              ? "border-gold/60 bg-gold/5"
              : cursorState === "click"
              ? "border-gold/80 scale-75"
              : "border-gold/30"
            }
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
          style={{
            marginLeft: `-${cursorState === "hover" ? "32px" : cursorState === "click" ? "16px" : "20px"}`,
            marginTop: `-${cursorState === "hover" ? "32px" : cursorState === "click" ? "16px" : "20px"}`,
          }}
        />
      </div>
    </>
  );
}

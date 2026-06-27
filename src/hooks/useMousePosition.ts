"use client";

import { useEffect, useState, useCallback } from "react";

export interface MousePosition {
  x: number;
  y: number;
  relX: number; // 0–1 relative to viewport width
  relY: number; // 0–1 relative to viewport height
}

/**
 * useMousePosition — tracks mouse coordinates and relative position
 */
export function useMousePosition(): MousePosition {
  const [pos, setPos] = useState<MousePosition>({ x: 0, y: 0, relX: 0.5, relY: 0.5 });

  const update = useCallback((e: MouseEvent) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
      relX: e.clientX / window.innerWidth,
      relY: e.clientY / window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", update, { passive: true });
    return () => window.removeEventListener("mousemove", update);
  }, [update]);

  return pos;
}

/**
 * useElementMousePosition — mouse position relative to a specific element
 */
export function useElementMousePosition(ref: React.RefObject<HTMLElement | null>) {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    el.addEventListener("mousemove", update, { passive: true });
    return () => el.removeEventListener("mousemove", update);
  }, [ref]);

  return pos;
}

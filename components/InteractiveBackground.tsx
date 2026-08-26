"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "motion/react";

export default function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion) return;

    let rafId: number;
    let targetX = window.innerWidth / 2;
    let targetY = 300;
    let currentX = targetX;
    let currentY = targetY;

    const onPointerMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const updatePosition = () => {
      currentX += (targetX - currentX) * 0.06;
      currentY += (targetY - currentY) * 0.06;

      if (containerRef.current) {
        containerRef.current.style.setProperty("--mouse-x", `${currentX}px`);
        containerRef.current.style.setProperty("--mouse-y", `${currentY}px`);
      }

      rafId = requestAnimationFrame(updatePosition);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    rafId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(rafId);
    };
  }, [reduceMotion]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* 1. Deep Studio Atmospheric Lighting Orbs */}
      <div className="orb orb-a" />
      <div className="orb orb-b" />

      {/* 2. Interactive Ambient Cursor Lighting */}
      <div className="absolute inset-0 bg-cursor-glow opacity-80 dark:opacity-100 transition-opacity duration-700" />

      {/* 3. Tactile Micro-Noise Texture for matte finish */}
      <div className="absolute inset-0 bg-noise opacity-[0.035] dark:opacity-[0.025] mix-blend-overlay" />
    </div>
  );
}

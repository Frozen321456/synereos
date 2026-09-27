"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setProgress(100);
      setDone(true);
      setHidden(true);
      return;
    }

    document.body.style.overflow = "hidden";

    // Animate progress counter
    const duration = 1800;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const p = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const value = Math.round(eased * 100);
      setProgress(value);
      
      if (p < 1) {
        requestAnimationFrame(animate);
      } else {
        setProgress(100);
        setDone(true);
        setTimeout(() => setHidden(true), 600);
      }
    };
    requestAnimationFrame(animate);

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000"
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "auto",
      }}
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-10">
        {/* Brand emblem with GSAP animation */}
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 border-2 border-syn-cyan/30 rounded-full" />
          <div 
            className="absolute inset-0 border-2 border-syn-cyan rounded-full transition-transform duration-1000 ease-out"
            style={{ 
              transform: done ? "scale(1.5)" : "scale(0.5)",
              opacity: done ? 0 : 1
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="mono text-[11px] tracking-[0.35em] text-syn-text transition-all duration-1000"
              style={{ opacity: done ? 0 : 1, transform: done ? "scale(0.8)" : "scale(1)" }}>
              SYNEREOS
            </span>
          </div>
        </div>

        {/* Progress counter */}
        <div className="mono text-6xl font-light tracking-[0.1em] text-syn-text">
          <span ref={counterRef}>{progress}</span><span className="text-2xl">%</span>
        </div>

        {/* Progress bar */}
        <div className="relative h-px w-64 overflow-hidden bg-white/[0.08]">
          <div
            className="absolute inset-y-0 left-0 bg-syn-cyan transition-transform duration-300 ease-out"
            style={{ transform: `scaleX(${progress / 100})`, transformOrigin: "left" }}
          />
        </div>
      </div>

      {/* Curtain exit */}
      <div
        className="absolute inset-0 bg-black transition-all duration-1200 delay-300"
        style={{ 
          clipPath: done ? "polygon(0 0, 100% 0, 100% 100%, 0 100%)" : "polygon(0 0, 0 0, 0 100%, 0 100%)",
          opacity: done ? 1 : 0
        }}
      />
    </div>
  );
}
"use client";

import { useEffect, useState } from "react";

export function Preloader() {
  const [done, setDone] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setDone(true);
      setHidden(true);
      return;
    }

    // Body lock during load
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setDone(true), 1200);
    const t2 = setTimeout(() => {
      setHidden(true);
      document.body.style.overflow = "";
    }, 2400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
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
      <div className="flex flex-col items-center gap-8">
        {/* Logo reveal */}
        <div
          className="mono text-[11px] tracking-[0.35em] text-syn-text-muted transition-transform duration-1000"
          style={{ transform: done ? "scale(1.05)" : "scale(1)" }}
        >
          SYNEREOS
        </div>

        {/* Loading bar */}
        <div className="relative h-px w-48 overflow-hidden bg-white/[0.08]">
          <div
            className="absolute inset-y-0 left-0 bg-syn-cyan transition-transform duration-[1400ms] ease-out"
            style={{ transform: done ? "scaleX(1)" : "scaleX(0)", transformOrigin: "left" }}
          />
        </div>

        {/* Tagline fade */}
        <p
          className="mono text-[10px] tracking-[0.3em] text-syn-text-muted/60 transition-opacity duration-700"
          style={{ opacity: done ? 1 : 0 }}
        >
          LOADING
        </p>
      </div>

      {/* Center gradient fade on exit */}
      <div
        className="absolute inset-0 bg-black transition-opacity duration-1000 delay-300"
        style={{ opacity: done ? 0.3 : 0 }}
      />
    </div>
  );
}

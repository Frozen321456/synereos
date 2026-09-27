"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SplitTextProps {
  text: string;
  tag?: "h1" | "h2" | "h3" | "p" | "span" | "div";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  from?: "lines" | "words" | "chars";
  revealType?: "clip" | "fade" | "slide";
}

export function SplitText({
  text,
  tag = "h1",
  className = "",
  style,
  delay = 0,
  stagger = 0.08,
  duration = 1.2,
  ease = "power3.out",
  from = "lines",
  revealType = "clip",
}: SplitTextProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const splitType = from;
    let innerHTML = text;

    if (splitType === "lines") {
      innerHTML = text
        .split("\n")
        .map((line) => `<div class="split-line" style="overflow:hidden">${line}</div>`)
        .join("");
    } else if (splitType === "words") {
      const words = text.split(" ");
      innerHTML = words
        .map((word) => `<span class="split-word" style="display:inline-block; overflow:hidden">${word}</span>`)
        .join(" ");
    } else if (splitType === "chars") {
      innerHTML = text
        .split("")
        .map((char) => `<span class="split-char" style="display:inline-block; overflow:hidden">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");
    }

    el.innerHTML = innerHTML;

    const targets = splitType === "lines" 
      ? el.querySelectorAll(".split-line") 
      : splitType === "words"
        ? el.querySelectorAll(".split-word")
        : el.querySelectorAll(".split-char");

    gsap.set(targets, { 
      opacity: revealType === "fade" ? 0 : 1,
      y: revealType === "slide" ? 100 : 0,
      clipPath: revealType === "clip" ? "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" : "none"
    });

    gsap.to(targets, {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration,
      ease,
      stagger,
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, [text, delay, stagger, duration, ease, from, revealType]);

  return (
    <div ref={ref} className={className} style={style} aria-hidden="true">
      {text}
    </div>
  );
}

export function SplitTextReveal({
  children,
  className = "",
  style,
  delay = 0,
  stagger = 0.08,
  duration = 1.2,
  ease = "power3.out",
  from = "lines",
  revealType = "clip",
}: {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  from?: "lines" | "words" | "chars";
  revealType?: "clip" | "fade" | "slide";
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const text = el.textContent || "";
    const splitType = from;
    let innerHTML = "";

    if (splitType === "lines") {
      innerHTML = text
        .split("\n")
        .map((line) => `<div class="split-line" style="overflow:hidden">${line.trim()}</div>`)
        .join("");
    } else if (splitType === "words") {
      innerHTML = text
        .split(" ")
        .map((word) => `<span class="split-word" style="display:inline-block; overflow:hidden">${word}</span>`)
        .join(" ");
    } else {
      innerHTML = text
        .split("")
        .map((char) => `<span class="split-char" style="display:inline-block; overflow:hidden">${char === " " ? "&nbsp;" : char}</span>`)
        .join("");
    }

    el.innerHTML = innerHTML;

    const targets = splitType === "lines" 
      ? el.querySelectorAll(".split-line") 
      : splitType === "words"
        ? el.querySelectorAll(".split-word")
        : el.querySelectorAll(".split-char");

    gsap.set(targets, { 
      opacity: revealType === "fade" ? 0 : 1,
      y: revealType === "slide" ? 100 : 0,
      clipPath: revealType === "clip" ? "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)" : "none"
    });

    gsap.to(targets, {
      opacity: 1,
      y: 0,
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      duration,
      ease,
      stagger,
      delay,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none reverse",
      },
    });
  }, [delay, stagger, duration, ease, from, revealType]);

  return (
    <div ref={ref} className={className} style={style} aria-hidden="true">
      {children}
    </div>
  );
}
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type SplitMode = "lines" | "words" | "chars";

function buildSplit(text: string, mode: SplitMode): string {
  if (mode === "lines") {
    return text
      .split("\n")
      .map((line) => `<div class="st-mask"><div class="st-line">${line.trim()}</div></div>`)
      .join("");
  }
  if (mode === "words") {
    return text
      .split(" ")
      .map(
        (w) =>
          `<span class="st-mask"><span class="st-line">${w}</span></span>`
      )
      .join(" ");
  }
  return text
    .split("")
    .map(
      (c) =>
        `<span class="st-mask"><span class="st-line">${c === " " ? "&nbsp;" : c}</span></span>`
    )
    .join("");
}

interface SplitHeadingProps {
  text: string;
  className?: string;
  mode?: SplitMode;
  delay?: number;
  stagger?: number;
  duration?: number;
  as?: "h1" | "h2" | "h3" | "div";
  id?: string;
}

/**
 * Splits visible text into masked lines/words/chars and reveals them with a
 * staggered rise. Accessible text stays intact in SSR HTML — splitting happens
 * after mount and aria-label carries the full text.
 */
export function SplitHeading({
  text,
  className = "",
  mode = "lines",
  delay = 0,
  stagger = 0.09,
  duration = 1.1,
  as = "h2",
  id,
}: SplitHeadingProps) {
  const ref = useRef<HTMLHeadingElement>(null);
  const Tag = as;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const original = el.textContent || "";
    el.innerHTML = buildSplit(original, mode);
    el.setAttribute("aria-label", original);

    const lines = el.querySelectorAll(".st-line");
    gsap.set(lines, { yPercent: 110 });
    gsap.to(lines, {
      yPercent: 0,
      duration,
      ease: "power4.out",
      stagger,
      delay,
      scrollTrigger: { trigger: el, start: "top 88%", once: true },
    });

    return () => {
      el.innerHTML = original;
      el.removeAttribute("aria-label");
    };
  }, [text, mode, delay, stagger, duration]);

  return (
    <Tag ref={ref} className={className} aria-label={text} {...(id ? { id } : {})}>
      {text}
    </Tag>
  );
}

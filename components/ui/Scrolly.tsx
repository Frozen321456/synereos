"use client";

/**
 * Scrolly — Synereos scroll-storytelling toolkit.
 *
 * Wraps @bsmnt/scrollytelling (Root/Animation/Waypoint/Parallax/Pin/Stagger)
 * with Lenis-compatible defaults and TS-strict helpers so every section can
 * adopt immersive scroll storytelling with one import.
 *
 * Exports:
 *  - ScrollStory        : <Root> alias with Lenis-safe defaults
 *  - StoryAnimation    : <Animation> alias
 *  - StoryWaypoint     : <Waypoint> alias
 *  - StoryParallax     : <Parallax> alias
 *  - StoryPin          : <Pin> alias
 *  - StoryStagger      : <Stagger> alias
 *  - ScrollProgressRail: side progress + section labels
 *  - TextScrubReveal   : headline lines reveal tied to scroll
 *  - HorizontalPanels  : vertical scroll -> horizontal panel travel
 *  - useScrollStory    : context hook
 */

import {
  Root,
  Animation,
  Waypoint,
  Parallax,
  Pin,
  Stagger,
  useScrollytelling,
} from "@bsmnt/scrollytelling";
import { useEffect, useRef, useState, type ReactNode } from "react";

export { Root, Animation, Waypoint, Parallax, Pin, Stagger, useScrollytelling };

/* ------------------------------------------------------------------ */
/* ScrollStory — opinionated Root                                       */
/* ------------------------------------------------------------------ */

export function ScrollStory({
  children,
  start = "top top",
  end = "bottom bottom",
  scrub = true,
  debug,
  className,
  id,
}: {
  children?: ReactNode;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  debug?: boolean;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={className}>
      <Root start={start} end={end} scrub={scrub} debug={debug ? { label: id ?? "story" } : undefined}>
        {children}
      </Root>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* TextScrubReveal — line-by-line headline scrub                        */
/* ------------------------------------------------------------------ */

export function TextScrubReveal({
  lines,
  className = "",
  lineClassName = "",
  stagger = 0.08,
}: {
  lines: string[];
  className?: string;
  lineClassName?: string;
  stagger?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready || !ref.current) return;
    const el = ref.current;
    let cleanup: (() => void) | null = null;

    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const targets = el.querySelectorAll<HTMLElement>("[data-line]");
        if (!targets.length) return;

        const tween = gsap.fromTo(
          targets,
          { yPercent: 120, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            stagger,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 35%",
              scrub: 0.6,
            },
          }
        );

        cleanup = () => {
          tween.kill();
        };
      });
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, [ready, stagger, lines]);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      {lines.map((line, i) => (
        <span
          key={`${line}-${i}`}
          data-line
          className={`block will-change-transform ${lineClassName}`}
        >
          {line}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* HorizontalPanels — vertical scroll drives horizontal travel          */
/* ------------------------------------------------------------------ */

export function HorizontalPanels({
  children,
  className = "",
  panelClassName = "",
}: {
  children: ReactNode;
  className?: string;
  panelClassName?: string;
}) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let cleanup: (() => void) | null = null;

    import("gsap").then(({ default: gsap }) => {
      import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
        gsap.registerPlugin(ScrollTrigger);
        const distance = () => track.scrollWidth - wrapper.clientWidth;

        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cleanup = () => {
          tween.kill();
        };
      });
    });

    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <div ref={wrapperRef} className={`relative overflow-hidden ${className}`}>
      <div
        ref={trackRef}
        className={`flex h-full w-max items-stretch gap-0 ${panelClassName}`}
      >
        {children}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* ScrollProgressRail — side progress + labels                         */
/* ------------------------------------------------------------------ */

export function ScrollProgressRail({
  labels,
  className = "",
}: {
  labels: string[];
  className?: string;
}) {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      const p = max > 0 ? h.scrollTop / max : 0;
      setProgress(p);
      const idx = Math.min(
        labels.length - 1,
        Math.floor(p * labels.length)
      );
      setActive(idx);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [labels.length]);

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-3 lg:flex ${className}`}
    >
      <div className="relative h-40 w-px bg-black/10">
        <div
          className="absolute left-0 top-0 w-px bg-syn-cyan transition-[height] duration-150"
          style={{ height: `${progress * 100}%` }}
        />
      </div>
      <ul className="space-y-1 text-right">
        {labels.map((label, i) => (
          <li
            key={label}
            className={`font-mono text-[9px] tracking-[0.2em] transition-colors duration-300 ${
              i === active ? "text-syn-cyan" : "text-black/25"
            }`}
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CountUp — scroll-triggered number count                              */
/* ------------------------------------------------------------------ */

export function CountUp({
  to,
  suffix = "",
  prefix = "",
  className = "",
  duration = 1.4,
}: {
  to: number;
  suffix?: string;
  prefix?: string;
  className?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const t0 = performance.now();
            const tick = (t: number) => {
              const p = Math.min(1, (t - t0) / (duration * 1000));
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.round(to * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
            io.disconnect();
          }
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

/* ------------------------------------------------------------------ */
/* StatusChips — animate-in signal chips                                */
/* ------------------------------------------------------------------ */

export function StatusChips({
  items,
  className = "",
}: {
  items: { text: string; tone: "success" | "error" | "warning" }[];
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {items.map((item, i) => (
        <span
          key={item.text}
          className="inline-flex items-center gap-2 rounded-full border border-black/[0.08] bg-white/60 px-3.5 py-1.5 font-mono text-[10px] tracking-[0.15em] text-syn-text-secondary backdrop-blur-sm"
          style={{ animationDelay: `${i * 120}ms` }}
        >
          <span
            aria-hidden="true"
            className="h-1.5 w-1.5 rounded-full"
            style={{
              background:
                item.tone === "success"
                  ? "var(--color-syn-success, #0284C7)"
                  : item.tone === "error"
                    ? "var(--color-syn-error, #E11D48)"
                    : "var(--color-syn-warning, #D97706)",
            }}
          />
          {item.text}
        </span>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* MagneticButton — cursor-attracted CTA                               */
/* ------------------------------------------------------------------ */

export function MagneticButton({
  children,
  href,
  className = "",
  strength = 24,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.transform = `translate(${dx / strength}px, ${dy / strength}px)`;
    };
    const onLeave = () => {
      el.style.transform = "translate(0, 0)";
    };
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return (
    <a
      ref={ref}
      href={href}
      className={`inline-flex items-center gap-2 rounded-full border border-syn-cyan/40 px-6 py-3 font-mono text-[11px] tracking-[0.18em] text-syn-cyan transition-transform duration-200 ease-out hover:border-syn-cyan hover:bg-syn-cyan hover:text-white ${className}`}
    >
      {children}
    </a>
  );
}

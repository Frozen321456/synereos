"use client";

import { useEffect, useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { NAV_LINKS } from "@/content/navigation";

gsap.registerPlugin(ScrollTrigger);

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastScrollY = useRef(0);
  const navRef = useRef<HTMLHeadElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY.current ? "down" : "up";
      
      if (currentScrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (direction === "down" && currentScrollY > 200) {
        setHidden(true);
      } else if (direction === "up") {
        setHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      ref={navRef}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "bg-syn-bg/90 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
      style={{ willChange: "transform, background-color, box-shadow" }}
    >
      <nav className="container-syn flex h-18 items-center justify-between" aria-label="Primary navigation">
        <a
          href="/"
          className="mono text-sm font-medium tracking-[0.25em] text-syn-text transition-opacity duration-300"
        >
          SYNEREOS
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mono link-line text-[11px] tracking-[0.2em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "CLOSE" : "MENU"}
        </button>
      </nav>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-white/[0.06] bg-syn-bg/95 backdrop-blur-md md:hidden animate-slide-down"
          style={{ animationDuration: "300ms" }}
        >
          <ul className="container-syn flex flex-col gap-6 py-8">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  onClick={() => setOpen(false)}
                  className="mono text-sm tracking-[0.2em] text-syn-text"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
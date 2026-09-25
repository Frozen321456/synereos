"use client";

import { useEffect, useState } from "react";
import { NAV_LINKS } from "@/content/navigation";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/[0.06] bg-syn-bg/80 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <nav
        className="container-syn flex h-16 items-center justify-between"
        aria-label="Primary navigation"
      >
        <a
          href="/"
          className="mono text-sm font-medium tracking-[0.25em] text-syn-text"
        >
          SYNEREOS
        </a>

        <ul className="hidden items-center gap-10 md:flex">
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
          className="border-t border-white/[0.06] bg-syn-bg/95 backdrop-blur-md md:hidden"
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

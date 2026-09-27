"use client";

import { NAV_LINKS } from "@/content/navigation";
import { SITE } from "@/content/site";
import { CONTACT } from "@/content/social";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTop = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      window.scrollTo({ top: 0, behavior: "auto" });
    } else if ((window as any).lenis?.scrollTo) {
      (window as any).lenis.scrollTo(0, { duration: 1.6 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-black" aria-label="Site footer">
      <div className="container-syn py-20">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mono text-sm tracking-[0.3em] text-syn-text">SYNEREOS</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-syn-text-secondary">
              Independent research laboratory investigating new architectures for
              intelligence.
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              {[
                { label: "GITHUB", href: SITE.github, external: true },
                { label: "X", href: SITE.x, external: true },
                { label: "EMAIL", href: `mailto:${CONTACT.email}`, external: false },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  {...(s.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="mono link-line text-[11px] tracking-[0.25em] text-syn-text-secondary transition-colors hover:text-syn-text"
                >
                  {s.label} ↗
                </a>
              ))}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-4 md:grid-cols-3">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary transition-colors hover:text-syn-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/[0.08] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="mono text-[11px] tracking-[0.2em] text-syn-text-muted">
            © {year} SYNEREOS
          </p>
          <p className="mono text-[11px] tracking-[0.2em] text-syn-text-muted">
            EXPERIMENT OVER ASSUMPTION.
          </p>
          <button
            type="button"
            onClick={scrollTop}
            className="mono group inline-flex items-center gap-3 self-start text-[11px] tracking-[0.25em] text-syn-text-secondary transition-colors hover:text-syn-text md:self-auto"
            aria-label="Back to top"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
            BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}

import { SITE } from "@/content/site";
import { NAV_LINKS } from "@/content/navigation";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06]" aria-label="Site footer">
      <div className="container-syn py-16">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mono text-sm tracking-[0.25em] text-syn-text">
              SYNEREOS
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-syn-text-secondary">
              Researching what comes next.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-col gap-4 md:flex-row md:gap-10">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-white/[0.06] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="mono text-[11px] tracking-[0.2em] text-syn-text-muted">
            © 2026 SYNEREOS
          </p>
          <p className="mono text-[11px] tracking-[0.2em] text-syn-text-muted">
            BUILDING BEYOND THE OBVIOUS.
          </p>
        </div>
      </div>
    </footer>
  );
}

'use client';

import Link from 'next/link';
import { homeContent } from '@/content/home';

export function Footer() {
  const { footer } = homeContent;

  return (
    <footer className="relative border-t border-white/[0.08] bg-black" aria-label="Site footer">
      <div className="container-syn py-20">
        <div className="flex flex-col gap-14 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="mono text-sm tracking-[0.3em] text-white">
              {footer.name}
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              {footer.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-6">
              <a
                href={footer.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mono link-line text-[11px] tracking-[0.25em] text-white/60 transition-colors hover:text-white"
              >
                GITHUB<span aria-hidden="true"> ↗</span>
              </a>
              <a
                href={footer.social.x}
                target="_blank"
                rel="noopener noreferrer"
                className="mono link-line text-[11px] tracking-[0.25em] text-white/60 transition-colors hover:text-white"
              >
                X<span aria-hidden="true"> ↗</span>
              </a>
              <a
                href={footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mono link-line text-[11px] tracking-[0.25em] text-white/60 transition-colors hover:text-white"
              >
                INSTAGRAM<span aria-hidden="true"> ↗</span>
              </a>
            </div>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-12 gap-y-4 md:grid-cols-3">
              {footer.nav.research.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="mono text-[11px] tracking-[0.2em] text-white/60 transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
              {footer.nav.projects.map((item) => (
                <li key={item}>
                  <Link href={`/${item.toLowerCase()}`} className="mono text-[11px] tracking-[0.2em] text-white/60 transition-colors hover:text-white">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="mt-20 flex flex-col gap-6 border-t border-white/[0.08] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="mono text-[11px] tracking-[0.2em] text-white/40">
            {footer.copyright}
          </p>
          <p className="mono text-[11px] tracking-[0.2em] text-white/40">
            {footer.motto}
          </p>
          <button
            type="button"
            className="mono group inline-flex items-center gap-3 self-start text-[11px] tracking-[0.25em] text-white/60 transition-colors hover:text-white md:self-auto"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-1">↑</span>
            BACK TO TOP
          </button>
        </div>
      </div>
    </footer>
  );
}
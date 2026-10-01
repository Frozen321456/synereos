'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';
import Link from 'next/link';

/* ---------- Navbar (shared) ---------- */

const NAV = [
  { label: 'Research', href: '/research' },
  { label: 'HEXIM', href: '/hexim' },
  { label: 'Infinity', href: '/infinity' },
  { label: 'Applications', href: '/applications' },
  { label: 'Lab', href: '/lab' },
  { label: 'Projects', href: '/projects' },
  { label: 'Publications', href: '/publications' },
  { label: 'About', href: '/about' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md border-b border-black/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="container-syn flex h-16 items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="font-mono text-sm font-semibold tracking-[0.28em] text-syn-text"
        >
          SYNEREOS
        </Link>
        <ul className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors hover:text-syn-text"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/hexim"
              className="mono rounded-full border border-syn-cyan/40 px-5 py-2 text-[11px] tracking-[0.18em] text-syn-cyan transition-all duration-300 hover:bg-syn-cyan hover:text-white"
            >
              Explore HEXIM →
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'CLOSE' : 'MENU'}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-black/[0.06] bg-white/90 backdrop-blur-md lg:hidden">
          <ul className="container-syn flex flex-col gap-1 py-6">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="mono block py-3 text-sm tracking-[0.18em] text-syn-text-secondary"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

/* ---------- SmoothScroll (Lenis) ---------- */

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    let lenis: { raf: (t: number) => void; destroy: () => void } | null = null;
    let rafId = 0;
    let cancelled = false;

    import('lenis')
      .then(({ default: Lenis }) => {
        if (cancelled) return;
        lenis = new Lenis({ duration: 1.1, smoothWheel: true });
        const raf = (time: number) => {
          lenis?.raf(time);
          rafId = requestAnimationFrame(raf);
        };
        rafId = requestAnimationFrame(raf);
      })
      .catch(() => {}); // graceful: fall back to native scroll

    return () => {
      cancelled = true;
      cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return <>{children}</>;
}

/* ---------- Reveal on scroll (IntersectionObserver, no GSAP needed) ---------- */

export function Reveal({
  children,
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- PageShell: shared layout for every sub-page ---------- */

export function PageShell({
  badge,
  title,
  intro,
  children,
}: {
  badge: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <SmoothScroll>
      <Navbar />
      <main id="main" className="pt-16">
        <section className="syn-section">
          <div className="container-syn">
            <Reveal>
              <p className="mono mb-6 text-[11px] tracking-[0.35em] text-syn-cyan">{badge}</p>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="max-w-5xl text-[clamp(2.5rem,6vw,5.5rem)] font-semibold leading-[1.02] tracking-[-0.03em] text-syn-text">
                {title}
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-syn-text-secondary">{intro}</p>
            </Reveal>
          </div>
        </section>
        {children}
      </main>
    </SmoothScroll>
  );
}

/* ---------- Building blocks for sub-pages ---------- */

export function SectionHeading({ badge, title, intro }: { badge: string; title: string; intro?: string }) {
  return (
    <div className="mb-14">
      <Reveal>
        <p className="mono mb-6 text-[11px] tracking-[0.35em] text-syn-text-muted">{badge}</p>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="max-w-4xl text-[clamp(1.75rem,3.5vw,3rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-syn-text">
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={160}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-syn-text-secondary">{intro}</p>
        </Reveal>
      )}
    </div>
  );
}

export function TextBlock({ items }: { items: { number: string; title: string; desc: string }[] }) {
  return (
    <div className="space-y-10">
      {items.map((item, i) => (
        <Reveal key={item.number} delay={i * 60}>
          <div className="flex gap-6">
            <span className="mono shrink-0 pt-1 text-[11px] tracking-[0.2em] text-syn-cyan">{item.number}</span>
            <div>
              <h3 className="text-xl font-medium tracking-tight text-syn-text">{item.title}</h3>
              <p className="mt-2 leading-relaxed text-syn-text-secondary">{item.desc}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export function Grid({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}

export function Card({ number, title, desc }: { number?: string; title: string; desc: string }) {
  return (
    <article className="group relative rounded-xl border border-black/[0.07] bg-syn-surface/60 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface">
      {number && (
        <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">{number}</span>
      )}
      <h3 className="mt-3 text-lg font-medium tracking-tight text-syn-text group-hover:text-syn-cyan transition-colors">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-syn-text-secondary">{desc}</p>
    </article>
  );
}

export function StatusLine({ items }: { items: { icon: string; tone: string; text: string }[] }) {
  return (
    <div className="flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-black/[0.07] pt-8">
      <span className="mono text-[10px] tracking-[0.3em] text-syn-text-muted">STATUS</span>
      {items.map((s, i) => (
        <span key={i} className="mono text-[11px] tracking-[0.15em] text-syn-text-secondary">
          <span
            aria-hidden="true"
            className="mr-2"
            style={{
              color:
                s.tone === 'success'
                  ? 'var(--color-syn-success)'
                  : s.tone === 'error'
                    ? 'var(--color-syn-error)'
                    : 'var(--color-syn-warning)',
            }}
          >
            {s.icon}
          </span>
          {s.text}
        </span>
      ))}
    </div>
  );
}
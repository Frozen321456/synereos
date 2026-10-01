import {
  Hero,
  QuestionSection,
  ResearchSignals,
  HeximIntro,
  HeximCore,
  HeximArchitecture,
  UnifiedModel,
  HeximInfinity,
  FourGates,
  Timeline,
  Applications,
  Philosophy,
  Footer,
} from '@/components/sections';

export default function HomePage() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out bg-transparent translate-y-0" style={{ willChange: 'transform, background-color, box-shadow' }}>
        <nav className="container-syn flex h-16 items-center justify-between lg:h-18" aria-label="Primary navigation">
          <a href="/" className="mono text-sm font-semibold tracking-[0.28em] text-syn-text transition-opacity duration-300">
            SYNEREOS
          </a>
          <ul className="hidden items-center gap-7 lg:flex">
            <li><a href="/research" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">Research</a></li>
            <li><a href="/hexim" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">HEXIM</a></li>
            <li><a href="/infinity" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">Infinity</a></li>
            <li><a href="/applications" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">Applications</a></li>
            <li><a href="/lab" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">Lab</a></li>
            <li><a href="/projects" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">Projects</a></li>
            <li><a href="/publications" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">Publications</a></li>
            <li><a href="/about" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">About</a></li>
            <li><a href="https://github.com/synereos" target="_blank" rel="noopener noreferrer" className="mono link-line text-[11px] tracking-[0.18em] text-syn-text-secondary transition-colors duration-200 hover:text-syn-text">GitHub</a></li>
            <li><a href="/hexim" className="mono rounded-full border border-syn-cyan/40 px-5 py-2 text-[11px] tracking-[0.18em] text-syn-cyan transition-all duration-300 hover:bg-syn-cyan hover:text-white">Explore HEXIM →</a></li>
          </ul>
          <button type="button" className="mono text-[11px] tracking-[0.2em] text-syn-text-secondary lg:hidden" aria-expanded="false" aria-controls="mobile-menu">MENU</button>
        </nav>
      </header>
      <main id="main">
        <Hero />
        <QuestionSection />
        <ResearchSignals />
        <HeximIntro />
        <HeximCore />
        <HeximArchitecture />
        <UnifiedModel />
        <HeximInfinity />
        <FourGates />
        <Timeline />
        <Applications />
        <Philosophy />
      </main>
      <Footer />
      {/* Preloader overlay */}
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000" style={{ opacity: 1, pointerEvents: 'auto' }} aria-hidden="true">
        <div className="flex flex-col items-center gap-10">
          <div className="relative w-24 h-24">
            <div className="absolute inset-0 border-2 border-syn-cyan/30 rounded-full" />
            <div className="absolute inset-0 border-2 border-syn-cyan rounded-full transition-transform duration-1000 ease-out" style={{ transform: 'scale(0.5)', opacity: 1 }} />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="mono text-[11px] tracking-[0.35em] text-syn-text transition-all duration-1000" style={{ opacity: 1, transform: 'scale(1)' }}>SYNEREOS</span>
            </div>
          </div>
          <div className="mono text-6xl font-light tracking-[0.1em] text-syn-text"><span>0</span><span className="text-2xl">%</span></div>
          <div className="relative h-px w-64 overflow-hidden bg-white/[0.08]"><div className="absolute inset-y-0 left-0 bg-syn-cyan transition-transform duration-300 ease-out" style={{ transform: 'scaleX(0)', transformOrigin: 'left' }} /></div>
        </div>
        <div className="absolute inset-0 bg-black transition-all duration-1200 delay-300" style={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 }} />
      </div>
    </>
  );
}
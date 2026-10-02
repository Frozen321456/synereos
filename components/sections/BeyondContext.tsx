import { homeContent } from '@/content/home';

export function BeyondContext() {
  const { beyondContext } = homeContent;

  return (
    <section
      id="beyond-context"
      className="syn-section relative border-t border-black/[0.06] bg-syn-surface/50 overflow-hidden"
      aria-labelledby="beyond-context-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: 'radial-gradient(ellipse 70% 50% at 50% 0%, rgba(56,189,248,0.06), transparent 50%), radial-gradient(ellipse 50% 40% at 80% 100%, rgba(99,102,241,0.05), transparent 50%)'
        }} />
      </div>
      <div className="container-syn py-28 lg:py-40">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          {beyondContext.badge}
        </p>
        <h2
          id="beyond-context-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          {beyondContext.title}
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          {beyondContext.intro}
        </p>
        <div className="mt-20 grid gap-8 lg:grid-cols-4">
          {beyondContext.pillars.map((pillar, i) => (
            <article key={pillar.title} className="group relative p-6 rounded-xl border border-black/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface">
              <span className="text-3xl">{pillar.icon}</span>
              <h3 className="mt-4 text-xl font-medium tracking-tight text-syn-text group-hover:text-syn-cyan transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-syn-text-secondary">
                {pillar.desc}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-20 p-8 rounded-xl border border-syn-cyan/30 bg-syn-cyan/[0.03]">
          <p className="max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
            {beyondContext.contrast}
          </p>
        </div>
      </div>
    </section>
  );
}

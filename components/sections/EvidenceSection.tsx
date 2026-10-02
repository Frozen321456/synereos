import { homeContent } from '@/content/home';
import { Reveal } from '@/components/ui/PageShell';

type Evidence = {
  id: string;
  title: string;
  hypothesis: string;
  method: string;
  result: string;
  status: 'complete' | 'failed' | 'investigating';
  next?: string;
};

export function EvidenceSection() {
  const { evidence } = homeContent as { evidence: Evidence[] };

  return (
    <section
      id="evidence"
      className="syn-section relative border-t border-black/[0.06] bg-syn-surface/50 overflow-hidden"
      aria-labelledby="evidence-heading"
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, rgba(2,132,199,0.03) 0, rgba(2,132,199,0.03) 1px, transparent 1px, transparent 20px)'
        }} />
      </div>
      <div className="container-syn py-20 lg:py-28">
        <p className="mono mb-8 text-[11px] tracking-[0.35em] text-syn-text-muted">
          EVIDENCE / EXPERIMENTS / SIGNALS
        </p>
        <h2
          id="evidence-heading"
          className="max-w-4xl text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] font-semibold tracking-[-0.02em] text-syn-text"
        >
          Research Signals
        </h2>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-syn-text-secondary">
          Current hypotheses, experiments, and their status — including failed experiments that inform our direction.
        </p>
        <div className="mt-20 space-y-6">
          {evidence.map((exp: Evidence, i: number) => (
            <Reveal key={exp.id} delay={i * 40}>
              <article className="group border rounded-xl p-6 border-black/[0.07] bg-syn-surface/60 transition-all duration-500 hover:-translate-y-1 hover:border-syn-cyan/40 hover:bg-syn-surface">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">
                    <span className={`inline-flex h-2.5 w-2.5 rounded-full ${exp.status === 'complete' ? 'bg-syn-cyan' : exp.status === 'failed' ? 'bg-syn-error' : 'bg-syn-warning'}`} aria-label={exp.status} />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium tracking-tight text-syn-text group-hover:text-syn-cyan transition-colors">
                      {exp.title}
                    </h3>
                    <p className="mt-2 text-base leading-relaxed text-syn-text-secondary">
                      {exp.hypothesis}
                    </p>
                    <dl className="mt-4 space-y-2 text-sm">
                      <div className="grid gap-2 sm:grid-cols-2">
                        <dt className="text-syn-text-muted">Method</dt>
                        <dd className="text-syn-text">{exp.method}</dd>
                        <dt className="text-syn-text-muted">Result</dt>
                        <dd className="text-syn-text">{exp.result}</dd>
                        <dt className="text-syn-text-muted">Status</dt>
                        <dd className={`flex items-center gap-2`}>
                          <span className={`inline-flex h-2.5 w-2.5 rounded-full ${exp.status === 'complete' ? 'bg-syn-cyan' : exp.status === 'failed' ? 'bg-syn-error' : 'bg-syn-warning'}`} />
                          <span className="text-syn-text">{exp.status === 'complete' ? 'Complete' : exp.status === 'failed' ? 'Failed → Analyzed' : 'Investigating'}</span>
                        </dd>
                        {exp.next && (
                          <>
                            <dt className="text-syn-text-muted">Next Step</dt>
                            <dd className="text-syn-text">{exp.next}</dd>
                          </>
                        )}
                      </div>
                    </dl>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <div className="mt-16 p-6 rounded-xl border border-syn-cyan/30 bg-syn-cyan/[0.02]">
          <p className="text-syn-text-secondary">
            <strong>Failed experiments are analyzed, not hidden.</strong> Each '✗' in our public signals is followed by a post-mortem that improves the architecture.
          </p>
        </div>
      </div>
    </section>
  );
}

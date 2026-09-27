export type ResearchStatusState = "ACTIVE" | "COMPLETE" | "FAILED" | "INCONCLUSIVE" | "INVESTIGATING";

export type Measurement =
  | { kind: "measured"; label: string; value: string }
  | { kind: "not-measured"; label: string }
  | { kind: "failed"; label: string; reason: string }
  | { kind: "inconclusive"; label: string; note: string };

export interface Experiment {
  id: string;
  title: string;
  category: string;
  question: string;
  hypothesis?: string;
  results: Measurement[];
  status: ResearchStatusState;
  limitation?: string;
  nextQuestion?: string;
}

export const EXPERIMENTS: Experiment[] = [
  {
    id: "13.2C-1A",
    title: "BLOCK FIDELITY",
    category: "REPRESENTATION",
    question: "Can ternary quantization preserve block-level cosine fidelity?",
    hypothesis: "Ternary representations retain sufficient fidelity at block granularity.",
    results: [{ kind: "measured", label: "cosine sim (block mean)", value: "0.94" }],
    status: "COMPLETE",
    limitation: "Per-block measurement hides deep-layer drift.",
    nextQuestion: "Where does degradation begin?",
  },
  {
    id: "13.2C-2",
    title: "WIKITEXT-2 PERPLEXITY",
    category: "EFFICIENCY",
    question: "Does VQ on ternary states hold perplexity on WikiText-2?",
    results: [{ kind: "measured", label: "baseline PPL delta", value: "1.18x" }],
    status: "COMPLETE",
    limitation: "Single-domain. No cross-lingual probe.",
    nextQuestion: "Does degradation scale with depth?",
  },
  {
    id: "13.2C-3",
    title: "DEEP-LAYER FIDELITY",
    category: "REPRESENTATION",
    question: "Where in the network does representation degrade?",
    results: [{ kind: "failed", label: "representation fidelity", reason: "Layer 26/27 collapsed under ternary quantization" }],
    status: "FAILED",
    limitation: "Failure localized, mechanism unknown.",
    nextQuestion: "Is L26 sensitive to specific activation distributions?",
  },
  {
    id: "ECA-01",
    title: "EXPERIENCE LOOP BASELINE",
    category: "COGNITIVE ARCHITECTURE",
    question: "Can a closed experience loop outperform static prediction on toy tasks?",
    results: [{ kind: "inconclusive", label: "loop vs. static accuracy", note: "Preliminary. Insufficient sample size." }],
    status: "INVESTIGATING",
  },
  {
    id: "MEM-01",
    title: "EPISODIC MEMORY RETENTION",
    category: "MEMORY",
    question: "Does compressed episodic memory preserve retrieval fidelity over long horizons?",
    results: [{ kind: "not-measured", label: "retention @ horizon" }],
    status: "ACTIVE",
  },
];

export interface SignalRow { label: string; value: string; }

export const RESEARCH_SIGNAL: SignalRow[] = [
  { label: "ACTIVE RESEARCH", value: "HEXIM" },
  { label: "CURRENT FOCUS", value: "EXPERIENTIAL INTELLIGENCE" },
  { label: "MODE", value: "EXPERIMENTAL" },
  { label: "STATUS", value: "ITERATING" },
];

export interface ResearchDomain { index: string; title: string; copy: string; }

export const RESEARCH_DOMAINS: ResearchDomain[] = [
  { index: "01", title: "EFFICIENT INTELLIGENCE", copy: "Same or better reasoning under hard memory and compute ceilings." },
  { index: "02", title: "REPRESENTATION", copy: "How state is encoded, compressed, and reconstructed." },
  { index: "03", title: "MEMORY", copy: "Episodic and semantic retention across long horizons." },
  { index: "04", title: "EXPERIENTIAL LEARNING", copy: "Learning from outcomes, not just labels." },
  { index: "05", title: "WORLD MODELS", copy: "Internal simulators for prediction and planning." },
  { index: "06", title: "AUTONOMOUS DISCOVERY", copy: "Systems that generate and test their own hypotheses." },
  { index: "07", title: "ON-DEVICE INTELLIGENCE", copy: "Real inference on real hardware people own." },
];

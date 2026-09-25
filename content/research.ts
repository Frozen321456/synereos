export type ResearchStatusState = "PASS" | "UNLOCKED" | "INVESTIGATING";

export interface ResearchStatus {
  id: string;
  title: string;
  category: string;
  status: ResearchStatusState;
  statusSymbol: string;
  description: string;
  href?: string;
}

export const RESEARCH_STATUS: ResearchStatus[] = [
  {
    id: "13.2C-1A",
    title: "BLOCK FIDELITY",
    category: "COMPRESSION",
    status: "PASS",
    statusSymbol: "✓",
    description:
      "Block-level cosine fidelity evaluation of the ternary backbone. Completed.",
  },
  {
    id: "13.2C-2",
    title: "WIKITEXT-2",
    category: "EVALUATION",
    status: "UNLOCKED",
    statusSymbol: "↗",
    description:
      "WikiText-2 evaluation completed. Next experiment unlocked.",
  },
  {
    id: "13.2C-3",
    title: "DEEP-LAYER FIDELITY",
    category: "COMPRESSION",
    status: "INVESTIGATING",
    statusSymbol: "◌",
    description:
      "Investigating representation fidelity in deeper layers of the experimental backbone.",
  },
];

export interface SignalRow {
  label: string;
  value: string;
}

export const RESEARCH_SIGNAL: SignalRow[] = [
  { label: "ACTIVE RESEARCH", value: "HEXIM" },
  { label: "CURRENT FOCUS", value: "COMPUTATIONAL EFFICIENCY" },
  { label: "MODE", value: "EXPERIMENTAL" },
  { label: "STATUS", value: "ITERATING" },
];

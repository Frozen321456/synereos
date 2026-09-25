export interface TimelineEntry {
  marker: string;
  title: string;
  description: string;
}

export const TIMELINE: TimelineEntry[] = [
  {
    marker: "2026",
    title: "HEXIM",
    description: "Initial architecture hypothesis.",
  },
  {
    marker: "13.2",
    title: "FIDELITY EXPERIMENTS",
    description: "Iterative representation fidelity evaluation.",
  },
  {
    marker: "COMPRESSION",
    title: "TERNARY + VQ",
    description: "Evaluation of ternary backbone with vector quantization.",
  },
  {
    marker: "RUNTIME",
    title: "ON-DEVICE DIRECTION",
    description: "Investigating runtime architecture for constrained hardware.",
  },
  {
    marker: "NEXT",
    title: "ARCHITECTURE EVOLUTION",
    description: "Where the research goes after the current experimental cycle.",
  },
];

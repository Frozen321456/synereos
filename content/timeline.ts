export interface Milestone {
  marker: string;
  title: string;
  thought: string;
  tested: string;
  happened: string;
  changed: string;
}

export const TIMELINE: Milestone[] = [
  {
    marker: "01 / QUESTION",
    title: "Why does scale feel like the only answer?",
    thought: "Bigger models are not the only direction.",
    tested: "Surveyed efficiency and representation literature.",
    happened: "Identified unexplored room between quantization and architecture.",
    changed: "HEXIM becomes the flagship research program.",
  },
  {
    marker: "02 / REPRESENTATION",
    title: "Ternary + VQ evaluation",
    thought: "Post-training quantization may suffice.",
    tested: "13.2C-1A block fidelity, 13.2C-2 WikiText-2 PPL.",
    happened: "Surface-level fidelity holds. Deep-layer signals diverge.",
    changed: "Research focus shifts to internal representation drift.",
  },
  {
    marker: "03 / COMPRESSION",
    title: "Layer-level localization",
    thought: "Degradation is uniform across layers.",
    tested: "Per-layer probing of 13.2C.",
    happened: "Layer 26/27 collapse (13.2C-3 FAILED).",
    changed: "Architecture-level intervention becomes necessary.",
  },
  {
    marker: "04 / MEMORY",
    title: "Long-horizon episodic retention",
    thought: "External memory can be appended without cost.",
    tested: "Retrieval probing on compressed episodic buffers.",
    happened: "Currently active. No published measurements yet.",
    changed: "—",
  },
  {
    marker: "05 / SKILLS",
    title: "Experience → knowledge → capability",
    thought: "Skill evolution can emerge from action-outcome pairs.",
    tested: "Toy environment rollout replay.",
    happened: "Preliminary, inconclusive.",
    changed: "ECA-01 opened.",
  },
  {
    marker: "06 / AUTONOMY",
    title: "Auto-generated hypotheses",
    thought: "Closed-loop systems can pose their own questions.",
    tested: "—",
    happened: "—",
    changed: "—",
  },
];

export const EXPERIENCE_LOOP = [
  "Experience",
  "Prediction",
  "Surprise",
  "Question",
  "Experiment",
  "Learning",
  "Memory",
  "Future prediction",
];

export const RESEARCH_NOTES: { title: string; href: string }[] = [
  { title: "Why Representation Matters", href: "#" },
  { title: "Beyond Parameter Count", href: "#" },
  { title: "When Compression Breaks", href: "#" },
  { title: "What Does Experience Add to AI?", href: "#" },
  { title: "Can Machines Discover New Relationships?", href: "#" },
  { title: "Why Failure Is Data", href: "#" },
];

export interface Program {
  id: string;
  title: string;
  status: "ACTIVE" | "UNDISCLOSED" | "EXPERIMENTAL";
  copy: string;
}

export const PROGRAMS: Program[] = [
  { id: "HEXIM", title: "HEXIM", status: "ACTIVE", copy: "Flagship experiential intelligence architecture." },
  { id: "TFSR", title: "TFSR", status: "EXPERIMENTAL", copy: "Experimental learning and representation research." },
  { id: "JEV-MOBILE", title: "JEV-MOBILE", status: "EXPERIMENTAL", copy: "Compact structured decision intelligence for mobile environments." },
  { id: "FUTURE", title: "FUTURE PROGRAMS", status: "UNDISCLOSED", copy: "Currently undisclosed research programs." },
];

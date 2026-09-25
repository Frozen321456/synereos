export interface Domain {
  index: string;
  title: string;
  copy: string;
}

export const DOMAINS: Domain[] = [
  {
    index: "01",
    title: "COMPUTATIONAL INTELLIGENCE",
    copy: "New approaches to machine intelligence.",
  },
  {
    index: "02",
    title: "EFFICIENT AI",
    copy: "Less memory. Less compute. More accessibility.",
  },
  {
    index: "03",
    title: "RUNTIME SYSTEMS",
    copy: "Intelligence designed for constrained hardware.",
  },
  {
    index: "04",
    title: "AUTONOMOUS SYSTEMS",
    copy: "Systems that reason, act and adapt.",
  },
];

export interface BeyondArea {
  title: string;
  description: string;
}

export const BEYOND_AREAS: BeyondArea[] = [
  {
    title: "COMPUTATIONAL SYSTEMS",
    description:
      "How computation is structured, scheduled, and made efficient beneath the model layer.",
  },
  {
    title: "INTELLIGENT RUNTIMES",
    description:
      "Execution environments where intelligent systems live — small, adaptive, on-device.",
  },
  {
    title: "AUTONOMOUS AGENTS",
    description:
      "Systems that plan, act, and iterate under real constraints rather than demos.",
  },
  {
    title: "MACHINE MEMORY",
    description:
      "How intelligent systems retain, compress, and retrieve what they have learned.",
  },
  {
    title: "HUMAN-CENTERED AI",
    description:
      "Intelligence designed around people first: controllable, inspectable, personal.",
  },
];

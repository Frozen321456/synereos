import { SITE } from "./site";

export const OPEN_RESEARCH = {
  eyebrow: "OPEN RESEARCH",
  headline: "Some experiments belong in the open.",
  copy:
    "Selected experiments, notes, reproducibility information, and public artifacts. Some implementation details remain undisclosed while research is ongoing.",
  cta: { label: "VIEW GITHUB ↗", href: SITE.github },
  items: [
    { label: "Selected experiments", href: SITE.github },
    { label: "Public repositories", href: SITE.github },
    { label: "Reproducibility methodology", href: SITE.github },
    { label: "Benchmark methodology", href: SITE.github },
  ],
} as const;

export const CONTACT = {
  eyebrow: "COLLABORATE",
  email: "research@synereos.com",
  // Web3Forms/Resend/Supabase endpoint; empty = mailto fallback
  endpoint: "",
  interests: [
    "Research Collaboration",
    "Technical Discussion",
    "Open-source Contribution",
    "Experimental Partnership",
    "Media / Research Inquiry",
  ],
} as const;

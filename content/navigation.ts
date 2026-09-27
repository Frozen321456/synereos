import { SITE } from "./site";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "STORY", href: "#story" },
  { label: "PROGRAMS", href: "#programs" },
  { label: "RESEARCH", href: "#research" },
  { label: "CONTACT", href: "#contact" },
  { label: "GITHUB", href: SITE.github, external: true },
];

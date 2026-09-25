import { SITE } from "./site";

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "RESEARCH", href: "/#research" },
  { label: "SYSTEMS", href: "/#systems" },
  { label: "ABOUT", href: "/#about" },
  { label: "GITHUB", href: SITE.github, external: true },
];

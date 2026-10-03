# Synereos — Cinematic Storyboard

## Site-Wide Cinematic Grammar

**"Corridor of revelations"** — one continuous walk through a research vessel. Chambers (pinned sections) alternate with quiet corridors (asymmetric text beats). The visitor earns each revelation.

- **Shell logic**: single-column corridor, max-width 1280px container, generous vertical travel between chambers. Pinned chambers get 200-250% scroll distance.
- **Navigation posture**: top navbar (existing) stays — it's the vessel's instrument panel. Subtle: transparent until 24px scroll, then frosted.
- **Framing discipline**: one-point symmetry broken by a single vertical/horizontal accent line. Every chamber has ONE dominant element; supporting elements subordinate.
- **Density cadence**: spectacle → dense evidence → breathing pause → spectacle. Never two dense sections adjacent.
- **Recurring materials**: 2-4% radial glass gradients (fog), hairline ink rules (6% black), oversized 8% opacity numerals (ink-lines), JetBrains Mono evidence fragments.
- **Allowed to repeat**: mono badges, hairline dividers, cyan accent. Nothing else.

## Page Scenes (homepage = the film; sub-pages = scenes)

### SCENE 1 — Hero: "First Contact" (chamber)
- **Thesis**: particles drift from chaos toward structure — intelligence forming in fog.
- **Signature composition**: full-bleed particle field BEHIND oversized wordmark split; scroll-scrub reveals headline lines.
- **Camera**: slow push-in via particle `progress` on scroll; headline lines scrub in.
- **Entrance**: TextScrubReveal (built). Hero dominance: particle chaos→order visible in first 3s.

### SCENE 2 — The Question: "The Linguist's Doubt" (corridor)
- **Thesis**: one assumption, one turn, then an escalating interrogation.
- **Signature composition**: the turn (question) set at clamp(2.5-6rem) center stage, chain items slide in from left at staggered scroll depths — asymmetric, list-like whiteboard.
- **Camera**: assumption rises → turn scales in → chain slides left-to-right.
- **Entrance**: slide-in stagger (distinct from Hero's scrub).

### SCENE 3 — Research Signals: "The Whiteboard" (dense beat)
- **Thesis**: seven research domains as preserved evidence fragments.
- **Signature composition**: signals strip (4 stats) floats at top like annotations; 7 domains stagger in as irregular grid — NOT uniform cards; the 04 (Experiential Learning) cell spans 2 cols as the thesis domain.
- **Entrance**: staggered clip-path line-draw (top border wipes L→R, content follows).

### SCENE 4 — HEXIM Intro: "The Wordmark" (chamber, spectacle reveal #1)
- **Thesis**: HEXIM enters as THE thing Synereos exists to build.
- **Signature composition**: giant clamp(3rem,8vw,7rem) HEXIM wordmark scale-breathes under scrub; pillars + evolution timeline subordinate below.
- **Entrance**: scale-in wordmark (attention reveal #2 — budget spent).

### SCENE 5 — Experience Loop: "Circular Time" (chamber, heavy interaction 2)
- **Thesis**: the film's circular-time concept, literalized — the loop draws itself as you scroll.
- **Signature composition**: pinned canvas circle; arc progress + nodes light in sequence; stage cards below restate the loop linearly for accessibility.
- **Camera**: pinned, arc scrub.
- **Entrance**: none (pin IS the entrance).

### SCENE 6 — Architecture Layers: "Inside the Vessel" (chamber, heavy interaction 3)
- **Thesis**: six layers, each decides what the next computes — descent INTO the architecture.
- **Signature composition**: layer cards stacked on left, each slides/rotates into frame under scrub; 3D diagram rotates gently on right. Card border wipes in like the pod's gravity reveal.
- **Entrance**: per-layer rotate-in stagger.

### SCENE 7 — Unified Model + Beyond Context: "The Full Picture" (corridor pair)
- **Thesis**: one integrated system; then the context-window abstraction dies.
- **Signature composition**: flow (Experience→Perception→Core→Action↺) as connected diagram with animated connector draws; Beyond Context set as manifesto — 4 pillars fade-hold in sequence (opacity holds, Villeneuve silence beats).
- **Entrance**: connector line-draws (SVG scaleX).

### SCENE 8 — Evidence: "Sacred Fragments" (dense beat)
- **Thesis**: experiments preserved as artifacts — complete, failed, investigating.
- **Signature composition**: each experiment is a ROW with status glyph column — never cards. Method/result/next as mono fragments with hairline separators, like Louise's whiteboard.
- **Entrance**: hairline top-border draw + content hold (no translateY).

### SCENE 9 — HEXIM Infinity: "Emergence" (chamber finale)
- **Thesis**: modules stop being a list; they become an emergent system.
- **Signature composition**: components orbit inward toward center goal statement under scrub — convergence visual.
- **Entrance**: orbit stagger.

### SCENE 10 — Four Gates: "Validation Chambers" (chamber, heavy interaction 4)
- **Thesis**: four gates, each must be passed — stacked like airlock doors.
- **Signature composition**: 4 cards stack-pin over each other (built).
- **Entrance**: card slide-up stack.

### SCENE 11 — Timeline: "Nonlinear Ink" (chamber, heavy 5)
- Horizontal era panels (built) — Arrival's ink-line timeline.
- **Entrance**: horizontal travel.

### SCENE 12 — Applications + Philosophy: "The Stakes / The Creed" (corridor → dark chamber)
- Applications: asymmetric 2-1-2-1 stagger grid (breaks uniform 3-col), icons at different optical sizes.
- Philosophy: full-bleed black chamber (existing) with slow per-principle opacity holds — the film's final dark hold. Particle field behind at 4%.

## Entrance map (per-page, ≥4 distinct, no adjacent repeats)

| Section | Entrance |
|---|---|
| Hero | text-scrub + particle push-in |
| Question | slide-in stagger L→R |
| Research Signals | clip-path border wipe |
| HEXIM Intro | wordmark scale-in |
| Hexim Core/Loop | pin (no entrance) |
| Architecture | per-layer rotate-in |
| Unified/Beyond | connector line-draw |
| Evidence | hairline draw + opacity hold |
| Infinity | orbit stagger |
| Four Gates | stack slide-up |
| Timeline | horizontal travel |
| Applications | asymmetric stagger pop |
| Philosophy | dark-hold opacity |

7 distinct entrance families. fadeUp used 0 times. ✅

## Grid fallback test

- Research Signals as uniform cards? Loses the 2-col thesis cell and whiteboard strip — breaks. ✅
- Evidence as card grid? Loses artifact-row language and status glyph column — breaks. ✅
- Four Gates as 4-col grid? Loses the airlock-stack metaphor entirely — breaks. ✅

## Restraint statement

Removed: uniform card hovers site-wide; repeated border-color hover; any two adjacent sections revealing the same way; fadeUp everywhere. The corridor breathes — sections that do nothing but hold.

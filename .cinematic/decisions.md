# Synereos — Cinematic Decisions

## Start Questionnaire (pre-answered from context)

- How to start: **Step-by-step** — director auto-picked by user's "Best ta koro" (agent's choice)
- Image placeholders: **None** — all visuals are code-driven (GSAP/Three.js/canvas), per user's standing constraint
- Niche: **Independent AI research laboratory** (Synereos — HEXIM flagship architecture)
- Pages: Homepage (15 sections) + /hexim /infinity /research /applications /lab /projects /publications /about

## Director + Film (locked)

- **Director: Denis Villeneuve — Film: Arrival (2016)**
- Chosen by user delegation ("Best ta koro" → agent's recommendation was Villeneuve/Arrival, user accepted)

### Why this fit

- **Slow revelation**: Villeneuve withholds the full picture until the viewer has earned it. Synereos's narrative is exactly this — Question → thesis → architecture → evidence — a gradual disclosure of what HEXIM is.
- **Clinical whitespace, quiet scale**: Arrival's white vessel interiors, fog, and imposed silence map directly onto the locked white/glassmorphism token system (`#FFFFFF` bg, hairline borders, `#0284C7`/`#4338CA` accents).
- **Circular time / nonlinear understanding**: Arrival's central concept — perceiving time as a loop — is literally HEXIM's Experience Loop (Experience → Prediction → Surprise → ... ↺). The film's grammar can be translated 1:1 into the loop diagram's scroll choreography.
- **Evidence as artifact**: Louise's whiteboard markings, the Hassanoff recordings — the film treats evidence fragments as sacred objects. Synereos's Evidence section (13.2C-1A COMPLETE / 13.2C-3 FAILED → ANALYZED) gets the same treatment: each signal is a preserved fragment, not a marketing stat.

### Signature techniques → web translation

1. **The slow push-in** (camera creeps toward the shell/pod) → Pinned sections where the composition inches closer/scale-breathes under scrub. Applied to Hero (particle field drifts toward order) and Experience Loop.
2. **Fog/atmosphere as depth separator** → Layered radial-grlass gradients at 3-6% opacity separating content planes; never decorative gradients, always depth.
3. **The reveal-by-rotation** (the pod's gravity shift scene) → Architecture Layers section: card layers slide/rotate into frame one at a time under pin, ending in the 3D diagram's gentle rotation.
4. **Hannah's timeline as ink-line montage** → Timeline section: horizontal era panels travel like the film's nonlinear ink paintings — each era a full-bleed slab with oversized year typography.
5. **The whiteboard — evidence as sacred fragment** → Evidence/Four Gates: monospace data, status glyphs (✓ ✗ ◌), precise hairline rules — never card-gloss.

## Research Note

Best-effort pass from model knowledge (live web research on Villeneuve interviews not fetched this session — marked as a **weaker research pass**, per skill rule). Core grammar extracted: slow-burn pacing, one-point symmetry broken by single vertical elements, fog-white palette with a single ink accent, silence-as-rhythm (long holds between reveals), circular structure.

## Previous-Work Audit (uniqueness protocol)

Recurring traits in current synereos build most likely to repeat:
- card-matrix sections (Research Signals 4-col, Applications 3-col, HeximIntro pillars 3-col)
- same `hover:-translate-y` + border-color hover on every grid
- badge → title → intro → grid rhythm in every section
- `fadeUp`-style Reveal on nearly everything

### Shell-ban list (forbidden in this transformation)

- ❌ No section may end as a plain 3/4-col card matrix with uniform hover
- ❌ No two adjacent sections with the same entrance pattern
- ❌ No `translateY+fade` on more than 2 sections
- ❌ No generic `Hero → Features → Stats → CTA` feel anywhere
- ❌ No repeated `border-color` hover pattern across grids

### Primary composition family (new)

**"Corridor of revelations"** — the page is a single continuous corridor the visitor walks down; each section is a chamber that reveals one idea. Pinned chambers (Experience Loop, Four Gates, Architecture) are the "rooms"; between them, quiet corridor beats (Question, Beyond Context) with asymmetric text. Nothing is a dashboard; everything is a passage.

## Color/Type/Motion direction

- **Color**: keep locked tokens (`--syn-bg: #FFFFFF` family, cyan `#0284C7`, indigo `#4338CA`) but avoid pure-white dead space — every plane carries 2-4% atmosphere (radial glass gradients, hairline ink rules at 6% black).
- **Type**: Space Grotesk authority-scale headings (already present); JetBrains Mono for evidence artifacts (whiteboard language). Oversized year/stage numerals at 8% opacity as Arrival's ink-line echoes.
- **Motion**: scrub-driven, slow. `scrub: 1` minimum smoothing everywhere. One heavy interaction per page max. Holds (silence beats) between chambers — a section that does nothing but breathe.

## Interaction budget (site-wide)

- Homepage heavy interactions (already built/locked): Hero particle canvas, Experience Loop pinned canvas, Four Gates stacked pin, Timeline horizontal panels. **This is the max — no more.**
- Attention-seeking reveals allowed: 2 (Question's turn-scale-in; HeximIntro's HEXIM wordmark scale)
- Everything else: subordinate entrances (clip-path line-draws, opacity holds, staggered mono-type)

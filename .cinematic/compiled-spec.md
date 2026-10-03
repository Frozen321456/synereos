# Synereos — Compiled Spec

Implementation source of truth. Director language: Villeneuve/Arrival. All existing locked tokens/structure preserved; this spec governs the remaining transformation.

## External Library Decision

- GSAP 3.15 + ScrollTrigger (installed) — pin/scrub/stagger/line-draw. Required: no CSS-only equivalent for pinned scrub.
- @bsmnt/scrollytelling 0.3.3 (installed) — React abstraction, use sparingly (Question section only; other sections use raw ScrollTrigger via `useGsap` hook for control).
- Lenis (installed) — already wired via SmoothScroll; MUST sync with ScrollTrigger (see JS-1).
- Three.js/R3F (installed) — Hero particles, Architecture diagram (existing, retained).

## JS Blocks

### JS-1: Lenis ↔ ScrollTrigger sync (CRITICAL — without this, pins misfire under smooth scroll)

In `SmoothScroll` (PageShell.tsx), after Lenis init:

```js
import('gsap').then(({ default: gsap }) => {
  import('gsap/ScrollTrigger').then(({ ScrollTrigger }) => {
    gsap.registerPlugin(ScrollTrigger);
    lenis.on('scroll', ScrollTrigger.update);
    const raf = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);
  });
});
```
Merge into existing raf loop; destroy on unmount: `gsap.ticker.remove(raf)`.

### JS-2: useGsap hook (Scrolly.tsx — already added)

Dynamic gsap import + gsap.context + auto revert. All new section animations use it.

## Section Specs

### S3 Research Signals — whiteboard (rewrite)
- Signals strip: 4 stats in mono row, floats with `Parallax` movementY {value:-30,unit:'px'} slow drift.
- Domain grid: `lg:grid-cols-4` BUT cell 04 spans 2 cols (`lg:col-span-2`) with taller min-height and 4% cyan radial — the thesis domain.
- Entrance: each cell's top hairline wipes L→R (scaleX 0→1, origin left, 0.8s power2.out, stagger 0.08), then content opacity-holds (no translateY).
- StatusChips (Scrolly.tsx) replaces the old signal row bottom.

### S4 HeximIntro — wordmark chamber (rewrite)
- Pin section for `+=150%`. Wordmark `clamp(3rem,8vw,7rem)` scales 0.92→1 with opacity 0.3→1 under scrub (attention reveal, budget #2).
- Pillars: stagger opacity-hold 0.06 apart, NO translate.
- Evolution timeline: existing list gets line-draw connectors (scaleX) + number wipes.

### S6 Architecture — descent chamber (rewrite)
- Keep 3D diagram right. Layer cards LEFT: each card rotate-in (rotationZ 4→0deg, y 40→0, opacity, stagger via scrub timeline positions).
- Pin for `+=200%`, scrub 1, anticipatePin 1.
- Card borders: wipe-in via inset box-shadow transition, not border-color change.

### S8 Evidence — artifact rows (rewrite)
- Each experiment = full-width row: left status-glyph column (28px, mono ✓✗◌ colored), right content with hairline top border.
- Entrance: top hairline scaleX draw (0.9s, stagger 0.12), content opacity 0→1 (no translate).
- Replace EvidenceSection's card article with row structure. Keep all 5 experiments data.

### S9 Infinity — convergence (rewrite)
- 7 component chips positioned around center goal statement. Under scrub, chips travel from scattered positions (translate 60-120px random) toward tight orbit (translate 0), stagger 0.05 — convergence metaphor.
- Goal statement: opacity hold last.

### S12a Applications — asymmetric grid (rewrite)
- Grid: 2 cols where icons alternate optical scale (text-3xl / text-5xl alternating), and every 3rd cell carries 4% indigo radial. Deliberately uneven.

### S12b Philosophy — dark chamber holds (rewrite)
- Principles: opacity 0→1 sequential holds, 0.35s apart, NO motion — silence beats.
- Add canvas particle field behind at 4% white opacity (reuse Hero's ParticleSystem simplified — 300 particles, no chaos-to-order).

## Interaction budget audit

- Heavy: Hero canvas, Loop pin, Architecture pin, FourGates stack, Timeline horizontal = 5 on homepage. LOCKED — no new heavy interactions. Question uses lightweight scrub; Infinity convergence is light (transform-only).
- Attention reveals: Question turn scale (1), HeximIntro wordmark scale (2). Budget exhausted. ✅
- fadeUp count: 0. ✅

## Verify checklist

- [ ] Lenis-ScrollTrigger sync live
- [ ] No adjacent same-entrance sections
- [ ] Research Signals cell 04 spans 2 cols
- [ ] Evidence rows (no cards)
- [ ] tsc + build pass
- [ ] Deploy + verify live

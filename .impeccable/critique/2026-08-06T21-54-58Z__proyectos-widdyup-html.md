---
target: proyectos/widdyup.html
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
timestamp: 2026-08-06T21-54-58Z
slug: proyectos-widdyup-html
---
Method: dual-agent (A: 48c8e7dd-06c0-4b4b-ad70-f48b4644c9b6 · B: 81e96e4a-7c8b-4c12-a585-80e87be85c89)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Sticky header eats titles; no section progress on long page |
| 2 | Match System / Real World | 3 | Speaks design-lead language; anonymous “Key business insight” |
| 3 | User Control and Freedom | 3 | Skip, back, lightbox OK |
| 4 | Consistency and Standards | 2 | Hardcoded EN chips in ES; mixed module title language |
| 5 | Error Prevention | 3 | Static page; lightbox paths sound |
| 6 | Recognition Rather Than Recall | 2 | Nine sections, no in-page nav |
| 7 | Flexibility and Efficiency | n/a | Experience / portfolio surface |
| 8 | Aesthetic and Minimalist Design | 2 | Meta grid + 8-cell library + long iteration |
| 9 | Error Recovery | 3 | Lightbox focus return |
| 10 | Help and Documentation | n/a | Experience / portfolio surface |
| **Total** | | **20/32** | **Acceptable** |

## Design Specificity Verdict

**LLM assessment:** Authored for WiddyUp — indigo hero, teal result, real product shots, domain copy. Drift: `.wu-library` and thin tool cards feel category-interchangeable.

**Deterministic scan:** CLI exit 0 — 1 advisory `em-dash-overuse` (23). Browser overlay succeeded: 61 runtime findings / 14 rules. Real candidates: low contrast, skipped heading (h2→h4), line length, glowing shadows, side-tab borders, heading crowding. Discount as FP: AI color palette (brand indigo/teal), all-caps short labels, vague occlusion, advisory em-dashes, intentional kickers/numbered tool steps.

**Visual overlays:** Injection succeeded on live page (85 overlay nodes); live-server stopped after capture.

## Overall Impression

Product-authored and process-credible, but the staffing job fails: AI process is buried/thin, mobile first viewport has no artifact, close CTA pushes “more work” over contact.

## What's Working

1. Brand-first Experience open on desktop (`.wu-hero-title` + product phones).
2. Iteration before/after and Portfolio vs Money show real judgment.
3. Communication as quiet violet module makes IA priority visible.

## Priority Issues

### [P1] Mobile first viewport has no product artifact
- **Why:** Experience mode requires work to lead; phones below fold on 375px.
- **Fix:** Put 1–2 phones in first screen; collapse/move `.wu-meta`.
- **Suggested command:** /impeccable layout · /impeccable shape

### [P1] AI-accelerated process underweighted and late
- **Why:** PRODUCT success = understand AI delivery; `#wu-tools` is three thin cards after marathon content.
- **Fix:** Promote concrete AI→validation beat near hero/context without inventing metrics.
- **Suggested command:** /impeccable shape · /impeccable distill

### [P1] Close CTA hierarchy fights hiring goal
- **Why:** Primary = more work; contact secondary.
- **Fix:** Primary Get in touch; secondary more work.
- **Suggested command:** /impeccable polish · /impeccable clarify

### [P2] `.wu-library` cognitive + trust tax
- **Why:** 8 cells; demo numbers near “don’t invent metrics”; EN chips in ES.
- **Fix:** Cut to 3–4 tied components; i18n status labels.
- **Suggested command:** /impeccable distill · /impeccable quieter

### [P2] Orientation + a11y nicks
- **Why:** No scroll-margin for sticky header; teal module white titles ~3:1; skipped heading level; low-contrast kickers/result text (detector).
- **Fix:** scroll-margin-top; deepen teal or dark ink on teal; fix heading outline; contrast pass.
- **Suggested command:** /impeccable audit · /impeccable polish

## Persona Red Flags

**Morgan (agency design lead):** Thin AI pitch late; ends on “See more work” — does not leave wanting to email.
**Alex (impatient skimmer):** No jump links; AI late; library feels like padding.
**Casey (mobile):** First screen text wall; long scroll; contact buried.

## Minor Observations

- Desktop phones peek depends on viewport height.
- Anonymous quote label.
- Duplicate close rituals (`.wu-close` + footer).
- Iteration length dominates; tools feel like appendix.
- Detector: glowing image shadows, side-tab accents, radial glow on result.

## Questions to Consider

1. What dies first: 8-cell library, 4-cell hero meta, or half the iteration prose?
2. Should first mobile screen be ~70% product glass?
3. Why is “See more work” louder than “Get in touch”?
4. Would one annotated AI→screen→check-in beat beat a component zoo?

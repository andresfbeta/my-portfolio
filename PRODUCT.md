# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: agency and studio design leads / staffing decision-makers evaluating Andrés Betancourt for placement on client product-design engagements.

Situation: reviewing a case study (especially WiddyUp) to judge whether he can ship credible product work under tight timelines, including AI-accelerated process, for their clients.

Job: decide whether to staff him on client work and trust his process with real stakeholder / client validation loops.

Secondary audiences (portfolio exists for them, but not primary for WiddyUp page strategy): hiring managers for full-time Principal/Staff roles; founders seeking freelance help.

## Product Purpose

Personal portfolio site for Andrés Felipe Betancourt Collazos (Product / UX-UI Designer, Medellín, Colombia). It presents selected work — home showcase plus deep case studies — so agencies and studios can evaluate craft, process, and AI-accelerated delivery, then contact him.

Success for the WiddyUp case study surface: the visitor understands the AI-accelerated product design process and wants that capability on client work.

## Positioning

Principal-level product designer with a technical edge who uses AI tools to prototype faster, translate designs into handoff-ready specs, and bridge Figma and code — demonstrated on real client products (not fictitious challenges), including design systems at scale and end-to-end modular SaaS design validated before production engineering.

## Operating Context

- Static multi-page site: `index.html` (home) and case studies under `proyectos/` (currently WiddyUp, AllCore360º).
- Bilingual ES/EN via client-side i18n.
- WiddyUp case study narrates a real engagement: school performing-arts fundraising SaaS; modules (Smart Dashboard, Financial, Fundraising, Communication); three roles (admin / student / parent); mid-fi→hi-fi without a wireframe stage; clickable prototype for client validation pre-production code.
- Contact ritual: email (`andres.betancourt.di@outlook.com`) and LinkedIn from footer / close CTAs.
- Case study pages inherit portfolio chrome (back link, logo, language toggle) but theme to the product’s own visual system when the case requires it.

## Capabilities and Constraints

- Confirmed: static HTML/CSS/JS portfolio; case-study pages with lightbox, i18n, and product-themed skins.
- Confirmed constraint: do not invent client quotes, metrics, school counts, or “validated with X…” claims beyond copy already published in the repo.
- Confirmed constraint: on the WiddyUp case study, preserve WiddyUp product brand identity (Indigo/Teal palette, Sora + DM Sans) as binding for that surface.
- Confirmed constraint: WCAG AA is a hard requirement.
- Open: which additional case studies will be deepened next; NDA boundaries beyond “don’t invent claims” are not further specified.

## Brand Commitments

- Name: Andrés Betancourt (portfolio) / Andrés Felipe Betancourt Collazos (legal/CV).
- Voice: direct, process-forward, bilingual ES/EN; case studies speak in first person about design decisions.
- Assets on hand: portrait, logo/favicon set, brand logos for clients shown on home, WiddyUp product screenshots and wordmark under `assets/images/`.
- WiddyUp surface: product brand (Indigo/Teal, Sora + DM Sans) is binding for that page’s skin; portfolio home uses its own identity (separate from WiddyUp).

## Evidence on Hand

- Live copy and structure: `index.html`, `proyectos/widdyup.html`, `proyectos/allcore360.html`.
- i18n: `js/i18n.js`, `js/i18n-widdyup.js`, `js/i18n-allcore360.js`.
- Themes: `css/styles.css`, `css/case-widdyup.css`, `css/case-allcore360.css`.
- Project imagery: `assets/images/projects/widdyup/` (admin, money, messages, mobile shots; before/after admin).
- Internal CV/context reference: `figma-design/02_contexto_cv.md` (experience, clients, WiddyUp as real case in progress).
- Contact: Outlook email and LinkedIn URL already in site footer.
- Must not fabricate: testimonials, press, quantitative validation results, or unnamed school/client endorsements not already in published copy.

## Product Principles

1. Process over decoration — case studies exist to make the AI-accelerated product design method legible and staffable.
2. Real work only — claims stay within published evidence; no invented proof.
3. Product-faithful case studies — when a case has a brand system, the page respects it rather than forcing the portfolio skin.
4. Accessible by default — WCAG AA is non-negotiable on every surface.
5. Bilingual without dilution — ES and EN carry the same product truth.

## Accessibility & Inclusion

WCAG AA is a hard product requirement for the portfolio and case study pages (contrast, focus, keyboard, reduced motion, semantic structure).

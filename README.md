# Om Kadam — Portfolio

**One action this site exists to produce: a coffee chat with someone who could hire me for a Frontend AI Engineering role.**

Every page, every line of copy, and every project on this site is evaluated against that single action. If it doesn't move a hiring-adjacent reader toward "let's talk," it doesn't belong here.

## The claim

I'm a Frontend AI Engineering intern at FlyRank, building production-grade, accessible, AI-assisted web interfaces (React/Next.js/TypeScript) using an AI-first toolchain (Claude Code, Cursor). My focus is making AI-generated UI indistinguishable from hand-crafted, polished work — not just fast prototypes.

> TODO (open, unresolved): the biotech line needs a concrete mechanism before it earns a place on the About page. "Shapes how I approach problems" is not yet a claim — it's a placeholder for one. See CLAUDE.md → Non-negotiables.

> TODO (open, unresolved): "accessible" is asserted in the claim. Confirm whether this is a current, demonstrable practice (axe/Lighthouse audits, keyboard-nav testing, contrast checks — with evidence on the Work page) or an aspiration. Don't let the copy outrun the proof.

## Site scope — four pages, no more

| Page | Job it does against the one action |
|---|---|
| Home | States the claim in one screen. One CTA: book a coffee chat. |
| About | Origin story (citation credibility checker) + why AI-first tooling + craft, not speed. |
| Work | Proof. Right now: one project (citation checker), and it is not yet deployment-ready. Nothing goes here that isn't shipped, live, and discussable in a coffee chat. |
| Contact | Frictionless path to the one action. Not a form maze. |

No blog. No "skills" page. No testimonials section with no testimonials. If a page idea shows up that isn't in this table, it gets rejected until it can justify itself against the claim and the one action — not added "just in case."

## Current status (be honest here, not aspirational)

- Central claim: stabilizing — see TODOs above.
- Proof project (citation credibility checker): runs locally only. No deployed link, no surfaced frontend decisions, no real backend. **Work page has no proof to show until this changes.**
- About page: origin story identified (professor flagged a non-credible source; author lacked field expertise) but not yet tightened — needs the specific class, the specific emotional beat, and the specific leap from "one bad citation" to "built a tool."

Do not publish this site with placeholder proof. A site that asserts a claim its own Work page can't back up actively undermines the coffee-chat ask.

## Tech stack

- React / Next.js / TypeScript
- Claude Code, Cursor (AI-first toolchain — this should be *visible* somewhere on the site, not just asserted in prose; consider a short "how this was built" note)
- Deployment: TBD (Vercel is the default assumption unless you say otherwise)

## 8-week arc (fill in as it firms up)

1–2. Stabilize claim, deploy citation checker, tighten About anecdote
3–4. Build Home/About/Work/Contact against the stabilized claim
5–6. Accessibility pass (if claimed) + polish pass (this is where "indistinguishable from hand-crafted" gets tested)
7–8. Cut anything that doesn't earn its place, ship, start reaching out for coffee chats

## Local dev

```bash
npm install
npm run dev
```
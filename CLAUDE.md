# CLAUDE.md

Instructions for Claude Code (or any AI pair-programmer) working in this repository.

## What this project is for

This is a portfolio site with exactly one job: produce a coffee chat with someone who could hire Om for a Frontend AI Engineering role. It is not a general portfolio, not a design showcase, not a place to demonstrate every skill Om has. Every code change should be traceable to that one action.

## The claim this codebase has to prove

Om is a Frontend AI Engineering intern at FlyRank, building production-grade, accessible, AI-assisted web interfaces (React/Next.js/TypeScript) using an AI-first toolchain (Claude Code, Cursor). The focus is making AI-generated UI indistinguishable from hand-crafted, polished work — not fast prototypes.

This means the bar for any UI Claude Code produces here is: **would a senior frontend engineer mistake this for hand-written, deliberate work?** Default component patterns, unexamined spacing, generic copy, and template-shaped layouts fail that bar even if they're functionally correct.

## Non-negotiables

1. **Four pages only: Home, About, Work, Contact.** Do not propose, scaffold, or suggest additional pages, sections-that-act-like-pages, or "just in case" routes. If a new page seems useful, stop and ask Om to justify it against the claim and the one action before writing any code for it.
2. **No fluff copy.** Don't write filler like "passionate about," "leveraging cutting-edge," or generic mission statements. Every sentence on the site should be specific enough that it couldn't be copy-pasted onto a different person's portfolio.
3. **The biotech line is not resolved.** "Biotech shapes how I approach problems" is currently a placeholder, not a claim. Do not write copy that asserts this connection unless Om has given you the specific mechanism (e.g., a concrete habit or standard from biotech that shows up in how he builds). If asked to draft About-page copy and this hasn't been resolved, flag it rather than papering over it with plausible-sounding language.
4. **Accessibility claims must match reality.** If the site's copy says "accessible," there needs to be actual evidence — semantic HTML, keyboard navigation, contrast that passes WCAG AA, tested with a screen reader or axe/Lighthouse. Don't add the word "accessible" to any copy without a corresponding implementation. If unsure whether current implementation qualifies, say so instead of assuming.
5. **The Work page shows nothing that isn't real.** No mockups presented as if they're deployed. No "coming soon" cards. If the citation checker isn't deployed yet, the Work page should not imply it is. Prefer an honest, smaller Work page over a padded one.
6. **Make the AI-first toolchain visible, not just claimed.** Since the claim includes "using an AI-first toolchain," look for a low-effort way to surface that (e.g., a short "how this was built" note, commit conventions, or a visible artifact of the process) rather than leaving it as an unverifiable assertion in prose.

## Decision filter for any new feature/component/page

Before implementing anything non-trivial, answer:
- Does this help a hiring-adjacent visitor decide to book a coffee chat?
- Does this provide evidence for the claim, or is it decorative?
- Is this one of the four scoped pages, or scope creep?

If any answer is unclear, ask Om rather than proceeding on an assumption. Don't build the "easy" or "impressive-looking" version of something if it isn't the version the claim actually needs.

## Code standards

- React / Next.js / TypeScript, strict typing — no `any` used to move faster.
- Prefer deliberate, custom-considered layout and spacing decisions over default component-library output. If using a UI library, override defaults enough that the result doesn't read as templated.
- Comment *decisions*, not mechanics — e.g., why a layout choice was made, not what `useState` does.
- Keep components small and named for what they represent on the actual site (`CoffeeChatCTA`, not `Button2`).

## What NOT to do

- Don't add testimonials, blog, skills matrix, or timeline pages.
- Don't invent deployment status, metrics, or project details that Om hasn't confirmed.
- Don't smooth over unresolved claim issues (biotech line, accessibility evidence) with confident-sounding copy — surface them.
- Don't treat "it looks polished" as sufficient; polish has to be in service of the claim and the one action, not decoration for its own sake.
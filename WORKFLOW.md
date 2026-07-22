# WORKFLOW.md — Round 1 vs Round 2

## Correctness

Round 1 (`round1-vague`, prompt: "Build me a settings form") produced a working-looking contact form with no server- or client-side checks. Submitting with an empty Name field went straight to a "success" state and rendered `Thanks, .` — a visibly broken confirmation, because the code interpolated `name.split(' ')[0]` without ever confirming `name` was non-empty.

Round 2 added a `validateName`/`validateEmail` pair, blocks `handleSubmit` until both pass, and fixes the interpolation bug directly: `firstName = name.trim().split(' ')[0] || 'there'`. I verified this by clearing the Name field, submitting, and confirming through the running app: Round 1 showed the broken message, Round 2 blocked submission with "Name is required."

## Accessibility

Round 1 had no error text, so nothing was wired up for assistive tech. Round 2 adds `aria-invalid={true}` on failing fields and `aria-describedby` pointing at the matching error `<p>`, plus `role="alert"` on each error message so screen readers announce it immediately instead of silently changing the DOM.

## Edge cases

Round 1 handled exactly one path: everything filled in correctly. Round 2's test suite (`coffee-chat-form.test.tsx`, 12 cases) exercises the ones that actually break real forms: empty name, name under 2 characters, empty email, malformed email ("bad", "not-an-email"), and the specific regression case of submitting empty first and then retrying with valid data — which is exactly the bug Round 1 shipped with.

## Review effort

Round 1 took under two minutes to "finish" but the empty-state bug wasn't caught until I manually tested it — that review time isn't in the git log but it happened. Round 2 took longer up front (writing the constraint-heavy prompt, waiting for the AI to add Jest/RTL config, `package.json` scripts, and 12 tests), but needed almost no manual fixing afterward: the tests passed on the first run I checked. Net review time was lower for Round 2 despite a slower start.

## AI mistake caught

Round 1's biggest issue was the unguarded `name.split(' ')[0]` call producing `Thanks, .` on empty input — a real, reproducible bug I caught by manually testing an empty submission, not something the AI flagged on its own.

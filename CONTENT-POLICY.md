# Content Policy — Nuncio Website

Nuncio is pre-alpha. This site is allowed — encouraged — to sell what Nuncio
**will be**, boldly and without hedging. That is the north star: an
aspirational, confident sales site for a product under active construction.
Ambition is not the problem we're solving for; dishonesty is.

That tradeoff only works if every contributor (human or AI) holds the line on
three hard guardrails. They are not style preferences — they are the
difference between "ambitious" and "fraudulent."

## The three guardrails

### 1. Not available today

Nothing on this site may claim the product can be installed, downloaded, or
run by an end user today, because it cannot. Concretely:

- No **"Download"**, **"Latest Release"**, **"Install now"**, or equivalent
  CTA that implies a shippable build exists for end users.
- Approved CTAs instead: **"Notify me at launch"**, **"Follow the build →
  GitHub"** (linking to <https://github.com/KofTwentyTwo/nuncio>), and **"See
  the roadmap →"** (linking to
  <https://koftwentytwo.github.io/nuncio/roadmap/>).
- It is fine — good, even — to tell a developer they can clone the repo and
  build the daemon (`nunciod`) and reference CLI (`nuncio-cli`) from source
  today. That is real and current. "Download the app" is not.
- See `src/lib/status.ts` for the maintained, typed list of what is genuinely
  available now versus what is vision. Pages should import from there, not
  hard-code availability claims.

### 2. No invented data as real

- Benchmarks, performance numbers, and comparison claims must either cite a
  measurement methodology/source or be omitted entirely. Never present a
  made-up number as a real result.
- Screenshots of the Desktop GUI, TUI, or any other not-yet-built interface
  must be clearly labeled as product previews / mockups / concept renders —
  never presented as captures of a real running build.
- Feature comparison tables (e.g. "vs Superhuman," "vs Gmail") may describe
  Nuncio's target design honestly labeled as such, but must not claim Nuncio
  currently beats a competitor on a capability it doesn't yet have.

### 3. In-development status must be discoverable

- Every route must carry a tasteful, confident signal that Nuncio is under
  active development, linking to the roadmap
  (<https://koftwentytwo.github.io/nuncio/roadmap/>). This is currently
  implemented as a site-wide banner rendered from `src/app/layout.tsx`.
- The signal should read as "we're building something ambitious, come watch
  or help," not as an apology. Confidence and honesty are not in tension.
- `StatusBadge` (`src/components/StatusBadge.tsx`) exists so any page can mark
  an individual claim as `shipped`, `in-progress`, or `planned` (or
  `available-now`) inline, rather than burying the caveat in a footnote.

## How to use this in practice

- When writing new copy: write the ambitious version first, then run it
  against the three guardrails above. If a sentence would mislead a reader
  into thinking they can use the product today, or presents a fabricated
  number/screenshot as real, or hides the project's stage — fix the sentence,
  don't cut the ambition.
- When adding a feature claim to a page, check `src/lib/status.ts` first. If
  the capability isn't listed there as shipped, either add it honestly as
  `planned`/`in-progress`, or don't claim it yet.
- This policy governs page copy, marketing components, comparison pages, and
  any AI-assisted content generation for this repository. It does not
  override licensing, privacy, or legal text, which have their own accuracy
  requirements independent of this document.

# Brand & Design System — Alisha Gonsalves

The one-line strategy this whole system serves:

> **Win on clarity, systems thinking, and adaptability. Carry the personality in the words, not in visual risk.**

Alisha is a senior product designer who connects disciplines and sees the bigger
picture — not a visual-first designer. So the surface stays confident and
restrained (that reads *senior* and *tasteful*), and the bubbly, sassy personality
lives in the **voice**. Visual craft is never put on trial; writing does the
charming.

---

## 1. Brand essence

- **Positioning:** The adaptable designer who connects the dots other people miss.
  Seven years, multiple countries, an engineering + information-management brain —
  equally comfortable in a research readout, a systems review, or a cross-team room.
- **Personality:** Warm, bubbly, a little sassy. Confident without swagger.
  Self-aware without self-deprecation.
- **What we lean on:** adaptability, cross-discipline collaboration, the bigger
  picture, research rigor, shipped outcomes.
- **What we don't fake:** flashy visual craft, invented metrics, borrowed taglines.

---

## 2. Voice & tone

Bubbly and sassy — but senior. The rule of thumb: **sass is seasoning, not the meal.**
One wink per section, not per sentence.

**Principles**
1. **Write like you talk.** First person, contractions, short sentences.
2. **Confident, not braggy.** State impact plainly; let the numbers flex for you.
3. **A little cheeky.** A wink earns warmth — as long as it never costs clarity.
4. **Clear beats clever.** If a joke slows comprehension, cut the joke. (This is the
   senior guardrail. Cleverness that confuses reads *junior*.)
5. **Specific beats vague.** "13.6% activation in 90 days," never "drove impact."
6. **Own strengths, don't apologize for non-strengths.** Adaptability and
   connecting disciplines are the flex. Never write yourself small.

**Do → Don't**

| Do | Don't |
| --- | --- |
| "I make complex tools feel obvious." | "Passionate about crafting delightful experiences." |
| "Seven years and a few time zones in — I connect the dots other people miss." | "Results-driven design professional." |
| "Case study's in the oven — ask me about it." | "Coming soon." |
| "Say hi — I don't bite (much)." | "Please feel free to reach out at your convenience." |

**Tone shifts by context**
- **Hero / about:** most personality — this is where she's allowed to be sassy.
- **Case studies:** dial the sass *down*, the specificity *up*. Substance sells seniority.
- **Buttons / labels:** clear first, charming second. A CTA can wink; it can't confuse.

---

## 3. Typography

A deliberately small, two-family system. Restraint here *is* the taste signal.

| Role | Typeface | Notes |
| --- | --- | --- |
| **Display** — headlines, project titles, big statements | **Newsreader** (variable `opsz`; roman + italic) | Elegant, classical letterforms with clean `f`/`j` and a beautiful italic (used for the marker word). Refined, not wonky. Use it *only* at large sizes. |
| **Text / UI** — body, nav, labels, buttons, metadata | **Inter** | Neutral, legible workhorse. Keeps the whole thing calm and senior. |

**Usage rules**
- **One display moment per section.** Fraunces earns its impact by being rare.
- **Never set long-form text in Newsreader display sizes.** It's a display serif here; body stays Inter.
- **Sentence case, not Title Case.** Warmer, more human, matches the voice.
- **Eyebrow labels:** Inter, uppercase, 0.18em tracking, muted — the quiet counterpoint
  to the big serif.

**Type scale (current)** — display 3rem→5.5rem, section heads ~2rem, body 1rem–1.25rem,
eyebrow 0.72rem. Defined in components + `globals.css`.

---

## 4. Color

Cool, muted, restrained — a warm cream ground under near-black text, with color used
as *structure* (blue = interactive) and *highlight* (sage = "here / matters"), never as
decoration.

| Token | Hex | Role |
| --- | --- | --- |
| `--bg` | `#f0eee7` | Warm cream / greige canvas |
| `--bg-raised` | `#f7f5ef` | Slightly lifted surfaces |
| `--ink` | `#18181b` | Neutral near-black — primary text |
| `--muted` | `#64656b` | Secondary text |
| `--accent` (blue) | `#3a52cf` | Interactive — links, emphasis, hover |
| `--accent-ink` | `#2d3fb0` | Darker blue for text (passes AA on cream) |
| `--sage` | `#dde3cd` | **Highlight surface** — "you are here", featured rows |
| `--sage-ink` | `#55663e` | Darker sage — the status dot, marker, labels |
| `--mist` | `#dde4e7` | Cool grey-blue — secondary surface |

**The system.** Blue does the *interactive* work (links, the accented word, step
numbers). Sage does the *highlight* work (the marker swipe, the "current" card, featured
table rows) — and doubles as the quiet warmth/heritage nod, a soft green instead of a
literal motif. Mist is a neutral surface for grouped cards. Near-black text on cream keeps
it grown-up.

**Usage & guardrails**
- **Blue = interactive, sage = highlight.** Keep the two jobs separate; don't tint a
  highlight surface blue or make a link sage.
- **Accessibility:** `--ink` and `--accent-ink` pass WCAG AA on cream. `--sage` and
  `--sage-ink` are **surface/decoration** tones — fine for fills, dots, and the marker, but
  don't set important body text in them.
- **Restraint test:** if a screen has more than ~2 spots of color, pull one out.

# Brand & Design System: Alisha Gonsalves

> **The source of truth is the brand kit** (the "Alisha Gonsalves" Design System
> artifact in Claude). This file is a working summary for the codebase. If the two
> ever disagree, the brand kit wins.

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

Bubbly and sassy, but senior. The rule of thumb: **sass is seasoning, not the meal.**
One wink per section, not per sentence.

**House style (from the brand kit)**
- British spelling everywhere: *modernising*, *colour*, *learnt*, *organise*.
- **No em dashes.** Use a full stop, comma, colon or brackets. Ranges: "2022 to 2024" or "2022–2024".
- Sentence case for headings and buttons. No emoji.

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
| "Seven years and a few time zones in, I connect the dots other people miss." | "Results-driven design professional." |
| "Case study's in the oven. Ask me about it." | "Coming soon." |
| "Say hi. I don't bite (much)." | "Please feel free to reach out at your convenience." |

**Tone shifts by context**
- **Hero / about:** most personality — this is where she's allowed to be sassy.
- **Case studies:** dial the sass *down*, the specificity *up*. Substance sells seniority.
- **Buttons / labels:** clear first, charming second. A CTA can wink; it can't confuse.

---

## 3. Typography

Two free Google Fonts, loaded with `next/font` in `src/app/layout.tsx`.

| Role | Typeface | Tailwind |
| --- | --- | --- |
| Headings and body | **Inter** (600 for headings, 400 for text) | `font-display` / `font-sans` |
| Labels, captions, dates | **IBM Plex Mono** (500 labels, 400 captions) | `.eyebrow`, `.caption`, `font-mono` |

| Style | Size / line height | Notes |
| --- | --- | --- |
| display | 56 / 60 px | Inter 600, −2% tracking. One per page. |
| metric | 48 / 52 px | Inter 600, `ink` or `slate` |
| heading-1 | 40 / 48 px | Inter 600 |
| heading-2 | 28 / 36 px | Inter 600, section headings |
| heading-3 | 20 / 28 px | Inter 600, card titles and roles |
| body-lg | 18 / 28 px | Intro paragraphs |
| body | 16 / 26 px | Running text |
| label | 12 / 16 px | `.eyebrow`: Plex Mono 500, capitals, +8% tracking |
| caption | 13 / 20 px | `.caption`: Plex Mono 400 |

Plex Mono is never used for paragraphs or headings, with **one exception**: the
accent word in the home page headline ("obvious") is set in Plex Mono Medium
Italic. It's the site's single typographic flourish, so keep it to that one word.

---

## 4. Colour

Tokens live in `src/app/globals.css`. Brand names first; older names are aliases.

| Token | Hex | Use it for | Old alias |
| --- | --- | --- | --- |
| `paper` | `#f4f2ec` | Every page background | `bg`, `bg-raised` |
| `sand` | `#d8d5cb` | Hairlines, card borders, tag fills | `line` |
| `rule` | `#7c7c78` | Stronger rules, axes, icons. Never text. | `line-strong` |
| `ink` | `#0a0a0a` | Headings, display type, metrics | `ink` |
| `ink-soft` | `#1a1a1a` | Body copy | |
| `ink-muted` | `#5a5a56` | Captions, dates, labels (on paper and mist only) | `muted`, `sage-ink` |
| `mist` | `#dce4e9` | Card and callout fills | |
| `mist-deep` | `#b7cad3` | One full-bleed accent section (the contact footer) | |
| `sage` | `#d9e3cc` | A second full-bleed accent, for outcomes | |
| `slate` | `#2c4150` | Links, key numbers, the main button | `accent`, `accent-ink` |
| `on-slate` | `#ffffff` | Text on slate fills | |

**Highlights**
- `sage` is the one highlight colour across the site: the `.marker` swipe behind a
  key word or phrase, highlighted cards and text selection.
- Keep it to one or two highlighted phrases per section, so it still means "look here".

**Rules**
- Nearly everything is `ink` and `ink-soft` on `paper`.
- `slate` marks **one** thing per view: a key number, a link or the main button.
- `mist-deep` and `sage` as full backgrounds once or twice a page, never side by side.
- No gradients, no pure black, no bright saturated colours, no coloured left-border cards.

---

## 5. Shape and spacing

- 4px base. `16` tightest margin, `24` card padding, `64` between major sections, `96` around a hero.
- Radius: 8px (`rounded-lg`) for cards, buttons and case-study images; 4px (`rounded-sm`) for tags; pill (`rounded-full`) for skill chips only.
- Separate with `sand` hairlines first; `shadow-card` only when a card truly needs to lift.

## Retired

The serif display face (Fraunces, then Newsreader), the blue accent (`#3a52cf`), the
faded gradient highlighter swipe and the gradient project covers.

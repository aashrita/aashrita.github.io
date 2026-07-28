# aashrita.github.io

Personal academic site for Aashrita Mangu, Grainger Postdoctoral Fellow at the University of Chicago.

---

## Structure

```
aashrita.github.io/
│
├── index.html               ← about page
├── research.html            ← research & contributions
├── thesis.html              ← thesis page with chapter downloads
├── wiki.html                ← wiki index
│
├── assets/
│   ├── style.css            ← all styles — edit here to change the look
│   ├── nav.js               ← shared nav — edit here to change nav links
│   └── photo.jpg            ← bio photo
│
├── thesis/
│   ├── thesis-amangu-full.pdf
│   ├── front-matter.pdf     ← abstract, dedication, TOC (13 pp)
│   ├── ch1-introduction.pdf (4 pp)
│   ├── ch2-cmb.pdf          (23 pp)
│   ├── ch3-simons-observatory.pdf (13 pp)
│   ├── ch4-small-aperture-telescopes.pdf (31 pp)
│   ├── ch5-detector-arrays.pdf (38 pp)
│   ├── ch6-observing.pdf    (7 pp)
│   ├── ch7-conclusion.pdf   (1 p)
│   └── bibliography.pdf     (12 pp)
│
└── wiki/
    ├── note-template.html   ← copy this to make a new note
    └── your-note.html
```

---

## Design

**Typeface** — DM Sans (clean, modern sans-serif throughout)

**Palette** — cool grey-white ground (`#F2F3F5`), deep indigo text (`#1B1F3B`). Three traditional Indian accent colors used sparingly, one per section:

| Page | Accent | Hex |
|---|---|---|
| about | turmeric | `#C8900A` |
| research | vermillion | `#C0392B` |
| thesis | peacock green | `#1A6B5A` |
| wiki | turmeric | `#C8900A` |

All colors are CSS variables at the top of `assets/style.css`. To change an accent, edit the relevant `body.page-*` rule — the nav active indicator, hover states, links, and accent rule all update automatically.

---

## How the nav works

Every page loads `assets/nav.js`, which injects the nav and marks the active link. To add or rename a nav item, edit the `links` array in that one file — no other files need touching.

```js
const links = [
  { label: "about",    href: root + "index.html" },
  { label: "research", href: root + "research.html" },
  { label: "thesis",   href: root + "thesis.html" },
  { label: "wiki",     href: root + "wiki.html" },
];
```

---

## Adding a wiki note

1. Copy `wiki/note-template.html` → rename it, e.g. `wiki/simons-observatory-scan-strategy.html`
2. Fill in the `<!-- -->` placeholders — title, category, date, body sections
3. Add a card to `wiki.html`:

```html
<a class="wiki-card" href="wiki/simons-observatory-scan-strategy.html">
  <p class="wiki-card-label">instrumentation</p>
  <p class="wiki-card-title">SO scan strategy</p>
  <p>Notes on baseline scan strategy and ongoing calibration work.</p>
</a>
```

---

## Adding a research project

Duplicate a `<div class="project">` block in `research.html`. Fields:

- `project-meta` — collaboration or experiment name (e.g. `Simons Observatory`)
- `h3` — contribution title in lowercase
- `p` — 2–3 sentences for a reader outside your subfield; no publication required
- `tag` spans — topic keywords
- `project-links` — paper, code, or talk links (all optional, commented out by default)

---

## Updating the thesis

If you need to re-split the thesis (e.g. revised version), the chapter page ranges are:

| File | PDF pages |
|---|---|
| front-matter | 1–13 |
| ch1-introduction | 14–17 |
| ch2-cmb | 18–40 |
| ch3-simons-observatory | 41–53 |
| ch4-small-aperture-telescopes | 54–84 |
| ch5-detector-arrays | 85–122 |
| ch6-observing | 123–129 |
| ch7-conclusion | 130 |
| bibliography | 131–142 |

---

## Updating the photo

Replace `assets/photo.jpg`. The CSS crops to `180×240px` from `center 10%` — portrait orientation works best. To adjust the crop, edit `object-position` in `.hero-photo` in `style.css`.

---

## To-do

- [ ] Fill in email in `index.html` (marked with a comment)
- [ ] Add Google Scholar URL in `index.html`
- [ ] Fill in research projects in `research.html`
- [ ] Write wiki intro blurb in `wiki.html`
- [ ] Add first wiki note

---

## Deployment

Push to `main` on `aashrita.github.io`. GitHub Pages serves `index.html` automatically.

**Settings → Pages → Source: Deploy from branch → main → / (root)**

No build step. Edit files directly on GitHub if you prefer.

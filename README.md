# aashrita.github.io

Personal academic site for Aashrita Mangu, Grainger Postdoctoral Fellow at the University of Chicago.

---

## File structure

```
aashrita.github.io/
│
├── index.html               ← about page
├── research.html            ← research & contributions
├── thesis.html              ← thesis index (links to html chapters + pdf downloads)
├── wiki.html                ← wiki index
│
├── assets/
│   ├── style.css            ← all styles — edit here to change the look
│   ├── nav.js               ← shared nav — edit here to change nav links
│   └── photo.jpg            ← bio photo
│
├── thesis-html/             ← HTML versions of each thesis chapter (readable in browser)
│   ├── front-matter.html
│   ├── ch1.html             ← introduction
│   ├── ch2.html             ← the cosmic microwave background
│   ├── ch3.html             ← the simons observatory
│   ├── ch4.html             ← small aperture telescopes
│   ├── ch5.html             ← antenna-coupled detector arrays
│   ├── ch6.html             ← observing the cmb and future work
│   ├── ch7.html             ← conclusion
│   └── figures/             ← all thesis figures (referenced by chapter html files)
│
└── wiki/
    ├── note-template.html   ← copy this to make a new note
    └── your-note.html
```

The PDF versions of each chapter are hosted on **GitHub Releases** (tag: `v1.0-thesis`) due to GitHub Pages' 25MB file size limit. PDF links in `thesis.html` point there directly.

> **Note:** GitHub release assets always trigger a download rather than opening in the browser — this is a GitHub limitation with no workaround. The HTML chapter versions are the primary in-browser reading experience.

---

## Design

**Typeface** — DM Sans throughout (clean, modern sans-serif)

**Palette** — cool grey-white ground (`#F2F3F5`), deep indigo text (`#1B1F3B`). Traditional Indian accent colors, one per section:

| Page | Accent | Hex |
|---|---|---|
| about | turmeric | `#C8900A` |
| research | vermillion | `#C0392B` |
| thesis | peacock green | `#1A6B5A` |
| wiki | turmeric | `#C8900A` |

To change an accent sitewide, edit the `body.page-*` rule in `assets/style.css`. The nav active indicator, hover states, links, and accent rule all update automatically.

---

## How the nav works

Every page loads `assets/nav.js`, which injects the nav and marks the active link. To add or rename a nav item, edit the `links` array in that one file only:

```js
const links = [
  { label: "about",    href: root + "index.html" },
  { label: "research", href: root + "research.html" },
  { label: "thesis",   href: root + "thesis.html" },
  { label: "wiki",     href: root + "wiki.html" },
];
```

---

## Updating PDF links in thesis.html

The PDF hrefs follow this pattern:
```
https://github.com/YOUR_USERNAME/aashrita.github.io/releases/download/v1.0-thesis/FILENAME.pdf
```

To get the exact URL for any file: go to your GitHub release page, right-click a PDF → "Copy link address". Update all `href` values in `thesis.html` accordingly.

Chapter PDF filenames:
- `front-matter.pdf`
- `ch1-introduction.pdf`
- `ch2-cmb.pdf`
- `ch3-simons-observatory.pdf`
- `ch4-small-aperture-telescopes.pdf`
- `ch5-detector-arrays.pdf`
- `ch6-observing.pdf`
- `ch7-conclusion.pdf`
- `bibliography.pdf`
- `thesis-amangu-full.pdf`

---

## Thesis chapter page ranges (for re-splitting if needed)

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

## Adding a wiki note

1. Copy `wiki/note-template.html` → rename it, e.g. `wiki/scan-strategy.html`
2. Fill in the `<!-- -->` placeholders
3. Add a card to `wiki.html`:

```html
<a class="wiki-card" href="wiki/scan-strategy.html">
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

## Updating the photo

Replace `assets/photo.jpg`. CSS crops to `180×240px` from `center 10%` — portrait orientation works best. To adjust the crop, edit `object-position` in `.hero-photo` in `style.css`.

---

## To-do

- [ ] Fix PDF URLs in `thesis.html` — right-click each file in GitHub Releases to get the exact link
- [ ] Add email to `index.html` (marked with a comment)
- [ ] Add Google Scholar URL to `index.html`
- [ ] Fill in research projects in `research.html`
- [ ] Write wiki intro blurb in `wiki.html`
- [ ] Add first wiki note

Already done:
- [x] Bio and background filled in
- [x] Photo uploaded
- [x] Thesis HTML chapters generated with figures and equations
- [x] Thesis PDFs uploaded to GitHub Releases
- [x] Per-page accent colors wired up
- [x] Shared nav across all pages

---

## Deployment

Push to `main` on `aashrita.github.io`. GitHub Pages serves `index.html` automatically.

**Settings → Pages → Source: Deploy from branch → main → / (root)**

No build step. Edit files directly on GitHub if you prefer.

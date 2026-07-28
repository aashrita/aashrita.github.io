# aashrita.github.io

Personal site — about, research, wiki. Indian minimalist aesthetic: cool grey-white ground, deep indigo text, turmeric / vermillion / peacock green as sparse accents.

---

## File structure

```
aashrita.github.io/
├── index.html           ← about page
├── research.html        ← research
├── wiki.html            ← wiki index
├── wiki/
│   ├── note-template.html   ← copy this for each new note
│   └── your-note.html
├── assets/
│   ├── style.css        ← all styles — edit here to change the look
│   ├── nav.js           ← shared nav — edit here to change nav links
│   └── photo.jpg        ← bio photo
├── cv.pdf               ← your CV
└── README.md
```

---

## Palette

All colors are CSS variables at the top of `assets/style.css`.

| Variable | Hex | Use |
|---|---|---|
| `--bg` | `#F2F3F5` | page background (cool grey-white) |
| `--ink` | `#1B1F3B` | primary text (deep indigo) |
| `--ink-soft` | `#4A4F6A` | secondary text |
| `--ink-muted` | `#9298B0` | labels, captions |
| `--turmeric` | `#C8900A` | warm gold accent |
| `--vermillion` | `#C0392B` | red accent |
| `--peacock` | `#1A6B5A` | teal-green accent |
| `--accent` | → `--turmeric` | **active accent — change this one line to shift the whole site** |

To switch the accent color sitewide, change one line in `style.css`:
```css
--accent: var(--vermillion);  /* or --peacock, or --turmeric */
```

---

## Checklist: things still to fill in

- [ ] Add your email in `index.html` (look for the comment `<!-- your email -->`)
- [ ] Add your Google Scholar URL as plain text in `index.html`
- [ ] Upload `cv.pdf` to the repo root if you want it linked
- [ ] Fill in your research projects in `research.html`
- [ ] Write the wiki intro blurb in `wiki.html`
- [ ] Add your first wiki note (see below)

Already done:
- [x] Bio and background filled in
- [x] Photo uploaded (`assets/photo.jpg`)
- [x] Name and title set throughout

---

## Adding a wiki note

1. Copy `wiki/note-template.html` → rename it (e.g. `wiki/simons-observatory.html`)
2. Fill in the `<!-- -->` placeholders
3. Add a card for it in `wiki.html`:

```html
<a class="wiki-card" href="wiki/simons-observatory.html">
  <p class="wiki-card-label">instrumentation</p>
  <p class="wiki-card-title">simons observatory</p>
  <p>Notes on receiver design and detector array architecture.</p>
</a>
```

---

## Adding a research project

Duplicate a `<div class="project">` block in `research.html`. Fields:

- `project-meta` — year and venue (e.g. `2024 · ApJ`)
- `h3` — paper title in lowercase
- `p` — 2–3 sentence description for a reader outside your subfield
- `tag` spans — topic keywords
- `project-links` — paper, code, talk links

---

## Updating the nav

Edit the `links` array in `assets/nav.js`. Every page loads this one file, so the change propagates everywhere automatically. No other files need touching.

---

## Updating the photo

Replace `assets/photo.jpg` with any new image. The CSS crops it to `140×190px` from the top center — portrait orientation works best. To adjust the crop, edit `object-position` in `.hero-photo` in `style.css`.

---

## Deployment

Push to `main` on `aashrita.github.io`. GitHub Pages serves `index.html` automatically.

Settings → Pages → Source: **Deploy from branch** → `main` → `/ (root)`

No build step. No terminal needed. Edit files directly on GitHub if you prefer.

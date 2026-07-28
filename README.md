# aashrita.github.io

Personal site — about, research, wiki. Indian minimalist aesthetic.

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
│   ├── style.css        ← all styles — edit this to change the look
│   └── nav.js           ← shared nav — edit this to change nav links
├── cv.pdf               ← your CV
└── README.md
```

---

## Palette

All colors are CSS variables at the top of `assets/style.css`.

| Variable | Hex | Use |
|---|---|---|
| `--bg` | `#F2F3F5` | page background |
| `--ink` | `#1B1F3B` | primary text (indigo) |
| `--turmeric` | `#C8900A` | warm gold accent |
| `--vermillion` | `#C0392B` | red accent |
| `--peacock` | `#1A6B5A` | teal-green accent |
| `--accent` | points to `--turmeric` | active accent — change this one variable to shift the whole site |

To change the accent color sitewide, change one line in `style.css`:
```css
--accent: var(--vermillion);  /* or --peacock, or --turmeric */
```

---

## Adding a wiki note

1. Copy `wiki/note-template.html` → rename it (e.g. `wiki/bayesian-methods.html`)
2. Fill in the `<!-- -->` placeholders
3. Add a card for it in `wiki.html`:

```html
<a class="wiki-card" href="/wiki/bayesian-methods.html">
  <p class="wiki-card-label">methods</p>
  <p class="wiki-card-title">bayesian inference</p>
  <p>A working note on priors, likelihoods, and posterior computation.</p>
</a>
```

---

## Adding a research project

Duplicate a `<div class="project">` block in `research.html`. Fields:
- `project-meta` — year and venue
- `h3` — paper title (lowercase)
- `p` — 2–3 sentence description
- `tag` spans — topic keywords
- `project-links` — paper, code, talk links

---

## Updating the nav

Edit the `links` array in `assets/nav.js`. Every page loads this file,
so the change propagates everywhere automatically.

---

## Checklist: getting started

- [ ] Fill in bio paragraphs in `index.html`
- [ ] Update email address in `index.html`
- [ ] Add your photo: replace the placeholder div with `<img class="hero-photo" src="/assets/photo.jpg" alt="aashrita mangu">`
- [ ] Upload `cv.pdf` to root
- [ ] Fill in research projects in `research.html`
- [ ] Write the wiki intro blurb in `wiki.html`
- [ ] Add your first note

---

## Deployment

Push to `main` on `aashrita.github.io`. GitHub Pages serves `index.html` automatically.
Settings → Pages → Source: **Deploy from branch** → `main` → `/ (root)`.

No build step. No terminal needed after initial upload. Edit files directly on GitHub.

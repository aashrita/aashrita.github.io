# yourname.github.io

Personal site with an about page, research portfolio, and public wiki.

---

## Structure

```
yourname.github.io/
├── index.html          # Main page (About, Research, Wiki index)
├── README.md           # This file
├── cv.pdf              # Your CV — linked from the About section
├── photo.jpg           # Your headshot — referenced in index.html
└── wiki/
    ├── note-template.html   # Copy this to make a new note
    ├── your-first-note.html
    └── ...
```

---

## Checklist: getting started

- [ ] Replace `Your Name` everywhere (search the file — it appears in the `<title>`, nav, footer, and hero)
- [ ] Fill in the eyebrow line in About (e.g. `PhD Candidate · University of Chicago`)
- [ ] Write your bio paragraphs
- [ ] Update the contact links (email, GitHub, Scholar, CV)
- [ ] Swap in your photo: replace the placeholder `div` with `<img class="hero-photo" src="photo.jpg" alt="Your Name">`
- [ ] Add your research projects (duplicate the project block in `index.html`)
- [ ] Write the wiki intro blurb
- [ ] Add your first wiki note (see below)

---

## Adding a wiki note

1. Copy `wiki/note-template.html` and rename it something descriptive, e.g. `wiki/variational-inference.html`
2. Fill in the `<!-- comment -->` placeholders in the new file
3. Add a card for it in the wiki grid in `index.html`:

```html
<a class="wiki-card" href="wiki/variational-inference.html">
  <p class="wiki-card-label">Methods</p>
  <h3>Variational Inference</h3>
  <p>A primer on ELBO, mean-field approximations, and when VI beats MCMC.</p>
</a>
```

---

## Adding a research project

Duplicate one of the `<div class="project">` blocks in `index.html` and fill it in. The fields are:

- **project-meta** — year and venue (e.g. `2024 · NeurIPS`)
- **h3** — paper or project title
- **p** — 2–3 sentence description of the contribution
- **tags** — topic keywords (duplicate `<span class="tag">` as needed)
- **project-links** — links to paper, code, talk, etc.

---

## Fonts and dependencies

The site loads two Google Fonts families (`DM Serif Display` and `Inter`) and `DM Mono` from Google Fonts CDN. No build step, no npm, no framework. Everything is vanilla HTML and CSS.

---

## Deploying

Push to the `main` branch of a repo named `yourusername.github.io`. GitHub Pages will serve `index.html` automatically. If you're using a project repo instead, go to **Settings → Pages** and set the source branch.

---

## License

Content © [Your Name]. Code structure is yours to use freely.

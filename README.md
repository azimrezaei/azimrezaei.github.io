# Azim Rezaei — academic website

Personal academic site for Azim (Abdolazim) Rezaei, Ph.D. candidate in Computer Science at
Texas A&M University–Corpus Christi. Research in 3D object detection, 3D scene
reconstruction from 2D images, and parameter-efficient multi-modal learning.

Static HTML, CSS and vanilla JavaScript. No build step, no dependencies.

## Pages

| File | Contents |
| --- | --- |
| `index.html` | Home: research agenda, selected publications, news |
| `research.html` | Research statement and five-year agenda |
| `publications.html` | Full publication record with abstracts |
| `teaching.html` | Teaching philosophy, courses, grant writing, service |
| `conferences.html` | Live countdown to AI/ML/vision/NLP/robotics submission deadlines |
| `cv.html` | Web CV; links to the PDF in `files/` |

`style.css` holds the shared styles, with light and dark themes driven by
`prefers-color-scheme` plus a manual toggle in `site.js`.

## Running locally

```
python -m http.server 8080
```

Then open <http://localhost:8080>.

## Updating the deadlines page

Venue data lives in the `VENUES` array at the bottom of `conferences.html`. Each entry sets
`due` (submission deadline), `conf` (conference start), `where`, `cat`
(`vision` | `ml` | `nlp` | `robotics`), `url` and `confirmed`.

- `confirmed: false` marks a date projected from the previous cycle; the card shows an
  "Estimated" flag.
- `due: null` marks a venue with announced conference dates but no deadline yet; the card
  shows "Deadline TBA".

Countdowns and the upcoming/closed split are computed in the browser, so only the dates
themselves need maintaining.

## Deployment

Served by GitHub Pages from the `main` branch.

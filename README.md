# KneeGuard AI

Static course project mockup for **1501418 Selected Topics in Data Science and AI**.

Multimodal decision-support concept site for the
[RSNA Knee Abnormality Detection](https://www.kaggle.com/competitions/rsna-knee-abnormality-detection/overview)
Kaggle competition (HTML · CSS · light JavaScript · no backend / database).

## Live site

After GitHub Pages is enabled:

`https://pnt-comexe.github.io/kneeguard-ai/`

> If the link 404s for a minute after the first push, wait for Pages to finish building.

## Repository layout

```text
.
├── course/                         # Course materials (not published as the site root)
│   └── Project_Guidance_1501418.pdf
├── docs/                           # GitHub Pages site source
│   ├── index.html                  # Problem (Part 1)
│   ├── data.html                   # Dataset & data model (Part 2)
│   ├── model.html                  # Decision model (Part 3)
│   ├── demo.html                   # Proof-of-concept UI
│   └── assets/
│       ├── css/styles.css
│       └── js/main.js
├── .cursor/rules/                  # Agent workflow rules for this project
├── LICENSE
└── README.md
```

## Local preview

Open any page under `docs/` in a browser, for example:

```text
docs/index.html
```

Or serve the folder locally:

```bash
# Python
python -m http.server 8080 --directory docs

# Node
npx serve docs
```

Then visit `http://localhost:8080`.

## GitHub Pages setup

This repo is configured to publish from the **`/docs`** folder on the default branch.

1. Repo **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` · folder: `/docs`
4. Save

## Notes

- Yellow **PLACEHOLDER** / **TBD** markers are intentional until teammate research content arrives.
- The demo page uses simulated probabilities only — not a trained model.
- Course PDF lives in `course/` so it is versioned in git but separate from the published site entry pages.

## Course mapping

| Site page | Project guidance |
|-----------|------------------|
| `docs/index.html` | Part 1 · Problem identification |
| `docs/data.html` | Part 2 · Dataset and data model |
| `docs/model.html` | Part 3 · Proposed decision model |
| `docs/demo.html` | Proof of concept / UI prototype |

## License

MIT — see [LICENSE](LICENSE).

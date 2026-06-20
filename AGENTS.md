# AGENTS.md

## Cursor Cloud specific instructions

This repository is a **GitHub profile README** repo (the special `username/username` repo that renders on a GitHub profile page). It is intentionally not a runnable software project:

- Contents are only `README.md` plus image assets in `assets/*.png`. There is no application code, `package.json`, lockfile, Makefile, docker-compose, services, database, tests, lint config, or build step.
- There is **nothing to install, build, lint, test, or serve** for normal development. Do not add a heavy toolchain unless the task explicitly asks for it.
- The "product" is the rendered profile page. GitHub renders `README.md` (GitHub Flavored Markdown with raw HTML passthrough) at the top of the user's profile.

### Previewing the rendered profile locally

To verify the README renders correctly (the only meaningful "run" for this repo), render it to HTML and serve it so the relative `assets/...` image paths resolve. Example (run from a temp dir, do not commit generated files):

```
mkdir -p /tmp/readme_preview && cp -r assets /tmp/readme_preview/assets
npx --yes marked --gfm -i README.md -o /tmp/readme_preview/body.html
# wrap body.html in an HTML shell if desired, then:
cd /tmp/readme_preview && python3 -m http.server 8765
```

Then open `http://localhost:8765/`. `marked --gfm` matches GitHub closely: it passes raw HTML (`<div align="center">`, `<img>`) through and renders the Markdown tables.

Notes:
- Local `assets/*.png` load over the local server; the shields.io badge images require network access and may not load offline (this does not indicate a problem with the repo).
- Editing this repo means editing Markdown/HTML in `README.md` and swapping/adding PNGs in `assets/`.

# Repository Guidelines

## Project Structure & Module Organization
- Top-level files (`index.html`, `styles.css`, `script.js`) host the current concept. Earlier explorations live under `concepts/`, each folder containing its own trio of files.
- `context/` stores reference material (specs, research imagery). Do not edit unless updating source context.
- Keep new concepts self-contained by duplicating an existing folder (e.g., `cp -R concepts/concept-four-rail concepts/concept-five-newidea`).

## Build, Test, and Development Commands
- `python3 -m http.server 8000` — lightweight preview server for any concept (open `http://localhost:8000/` or append the concept path).
- `npx serve concepts/<folder>` — alternate static server when testing a specific concept in isolation.
- No formal build or bundling step; assets load directly from CDN (React, Tailwind).

## Coding Style & Naming Conventions
- HTML: keep semantic sections (`main`, `header`, `form`). React snippets are written inline in `script.js` with functional components (PascalCase).
- CSS: use custom properties for palette, 2-space indentation, and descriptive class names (e.g., `.iso-wave`, `.center-stack`). Prefer keyframe animations over heavy JS.
- JavaScript: modern ES modules via Babel inline; wrap new UI in functional components and keep state minimal (`useState`).

## Testing Guidelines
- Visual QA drives this repo. Before sharing, preview in the browser and verify responsive breakpoints (~360px, 768px, desktop).
- Manually validate form submission flows (success/error states) since no automated tests exist.

## Commit & Pull Request Guidelines
- Follow concise, action-oriented commit messages (`feat: add isometric wave background`).
- For PRs, include: purpose summary, screenshots/GIFs of the concept, preview instructions (`python3 -m http.server`). Reference relevant concept folders to keep reviews focused.

## Agent Tips
- Archive every major iteration inside `concepts/` before reworking the root files. Update `README.md` with new concept descriptions and preview paths.
- When introducing external assets or libraries, prefer CDN links and document them in the README.

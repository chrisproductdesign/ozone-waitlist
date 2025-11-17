# Ogion waitlist concepts

Two explorations live in `concepts/` so you can flip between themes quickly while refining art direction.

## Concept one – glassy spotlight (static HTML/CSS/JS)
- Files: `concepts/concept-one/index.html`, `styles.css`, `script.js`
- Stack: vanilla HTML + custom CSS + tiny JS helper
- Notes: center-aligned hero, frosted card treatment, floating insight chip, subtle glow + noise background.
- Preview: open `concepts/concept-one/index.html` directly in a browser or run `npx serve concepts/concept-one` for a local web server.

## Concept two – kinetic React + Tailwind concept
- Files: `concepts/concept-two-kinetic/index.html`, `styles.css`, `script.js`
- Stack: React (via CDN) + Tailwind CDN with custom CSS for animated orbs, rings, and grid.
- Notes: responsive hero with looping halos, stat pills, and interactive helper copy.
- Preview: `python3 -m http.server` (from the repo root) then visit `http://localhost:8000/concepts/concept-two-kinetic/`.

## Concept three – minimal halo concept
- Files: `concepts/concept-three-halo/index.html`, `styles.css`, `script.js`
- Stack: React + Tailwind CDN, title/subtitle hero with halo + ribbon motion.
- Preview: `http://localhost:8000/concepts/concept-three-halo/` when the local server is running.

## Concept five – parallax orb study
- Files: `concepts/concept-five-parallax/index.html`, `styles.css`, `script.js`
- Stack: React + Tailwind CDN with vanilla CSS for the background orb animation.
- Notes: reuses the minimal halo copy but removes the foreground badge, enhances the orb loop, and adds a subtle pointer-driven parallax shift.
- Preview: `http://localhost:8000/concepts/concept-five-parallax/`.

## Concept six – refined halo hero (current root)
- Files: `index.html`, `styles.css`, `script.js`
- Stack: React + Tailwind CDN with custom CSS for the ambient halo.
- Notes: distilled typography hierarchy, centered form, and a simplified luminous background ring for a calm premium look.
- Preview: `http://localhost:8000/` (or open `index.html` directly if you're not running the local server).

## Concept four – angular rail concept
- Files: `concepts/concept-four-rail/index.html`, `styles.css`, `script.js`
- Stack: React + Tailwind CDN; asymmetrical layout with grid/rail animations tailored for fintech lending tooling.
- Notes: text remains minimal while the form anchors to a right-aligned rail with subtle cursor/pillar motion.
- Preview: `http://localhost:8000/concepts/concept-four-rail/` when the local server is running.

## Concept gallery – dropdown navigator
- Files: `concepts/concept-gallery/index.html`, `styles.css`, `script.js`
- Stack: vanilla HTML/CSS + lightweight JS for the selector.
- Notes: pick any stored exploration from a dropdown and the built-in iframe updates so you can rapidly compare directions. Use the “Open in new tab” button to pop the current concept out if needed.
- Preview: `http://localhost:8000/concepts/concept-gallery/` when the local server is running.

Iterate on either by editing the respective folder and, if you spawn more riffs, duplicate an existing concept folder to keep the archive growing.

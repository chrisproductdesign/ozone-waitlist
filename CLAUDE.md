# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a waitlist signup page concept repository for "Ogion" — a fintech lending AI product. The project explores multiple visual design directions through self-contained HTML/CSS/JS concepts, all featuring subtle animations, modern typography, and premium light-mode aesthetics.

**Key theme**: "Performance, illuminated" — showcasing depth and clarity in lending intelligence.

## Architecture

### Root vs Concepts Pattern
- **Root files** (`index.html`, `styles.css`, `script.js`): The current production/primary concept (currently concept-six-trendline)
- **`concepts/` directory**: Archive of all design explorations, each self-contained with its own `index.html`, `styles.css`, and `script.js`
- **`context/` directory**: Reference materials and spec content — read-only unless updating source documents
- **`svg/` directory**: Static SVG assets

### Tech Stack (All Concepts)
- **No build process**: Everything runs directly in the browser via CDN
- **React 18**: Loaded via UMD bundle from unpkg.com
- **Tailwind CSS**: Loaded from CDN with inline config in each HTML file
- **Babel Standalone**: Transforms JSX in-browser via `<script type="text/babel">`
- **Custom CSS**: Handles animations (keyframes), CSS custom properties, and theme variables
- **Fonts**: Google Fonts (Space Grotesk for display, Inter for body)

### Concept Structure
Each concept follows identical file organization:
```
concepts/concept-name/
  ├── index.html  # HTML shell + Tailwind config + CDN links
  ├── styles.css  # Custom animations, variables, and overrides
  └── script.js   # React components (functional components with hooks)
```

## Development Commands

### Local Preview Server
```bash
python3 -m http.server 8000
```
Then navigate to:
- Root concept: `http://localhost:8000/`
- Specific concept: `http://localhost:8000/concepts/concept-name/`

### Alternate Server (Single Concept)
```bash
npx serve concepts/concept-name
```

### No Build/Test Commands
- No bundler, transpiler, or test runner
- Visual QA is done manually in-browser
- Test responsive breakpoints: ~360px (mobile), 768px (tablet), 1280px+ (desktop)

## Current State & Git Status

**⚠️ IMPORTANT: Root files contain the LATEST version with animations**

### Active Development Version
The **root files** (`index.html`, `styles.css`, `script.js`) contain the most recent iteration:
- Based on concept-six-trendline layout (refined hero, clean form treatment)
- **NEW**: `AnimatedBackground` React component with:
  - 3 blue gradient ribbons (sweeping animation)
  - 10 particle orbs (pulsing, drifting motion)
  - Layered gradient backgrounds with focus rings
  - Grain overlay texture
- This version has animated ribbons + particle orbs that the archived concepts lack

### Current Git Status (Uncommitted)
```
M  script.js      # Contains AnimatedBackground component
M  styles.css     # Contains ribbon, pulse, and animation keyframes
?? CLAUDE.md      # This documentation file (untracked)
```

**Status**: Latest animated version committed to main (commit 963fae2).

### Git Branch Structure

**Active Branches:**
- `main` - Production branch with latest AnimatedBackground implementation
- `cursor/bg-animation-iter` - Hero card variant (concept-seven-hero-card source, commit 68b3e0f)
- `cursor/bg-animation-sm0c4` - Earlier iteration (commit 75597a7)

**Concept Branches (Historical):**
- `concept-one`, `concept-two-react`, `concept-two-kinetic`
- `concept-three-halo`, `concept-four-rail`, `concept-five-parallax`
- `concept-six-trendline`, `concept-gallery`

**Cursor Exploration Branches (Archived):**
All prefixed with `cursor/` to distinguish from active development:
- `cursor/animated-bg-FWK5h`, `cursor/animated-bg-FtGtk`, `cursor/animated-bg-SzDag`, `cursor/animated-bg-vMD8j`
- `cursor/bg-animation-gA3Eq`
- `cursor/modern-animated-bg-4Z3OK`
- `cursor/waitlist-bg-IQfQ6`, `cursor/waitlist-bg-izFHs`, `cursor/waitlist-bg-loop-tVQQa`

**Note**: Cursor worktrees have been removed. All work is preserved in branches.

### Archived Concepts (Static Snapshots)
- `concepts/concept-six-trendline/` = **older snapshot** (no AnimatedBackground, static blue bg only)
- Other concepts are earlier explorations, each self-contained

**Rule**: Root = active development. Concepts directory = historical archive.

---

## Concept Archive

1. **concept-one** (glassy spotlight): Static HTML/CSS/JS, frosted card, center hero
2. **concept-two-react** & **concept-two-kinetic**: React + Tailwind with animated orbs/halos
3. **concept-three-halo**: Minimal halo with ribbon motion
4. **concept-four-rail**: Asymmetric layout with right-aligned form rail
5. **concept-five-parallax**: Parallax orb study with pointer-driven animation
6. **concept-six-trendline** (archived snapshot): Refined halo hero WITHOUT animations
7. **concept-seven-hero-card**: Luxe animated background with hero surface card treatment
   - 14 particle orbs (vs 10 in root) with variable depth/blur
   - 3 gradients (north, south, west)
   - Center veil + core glow background layers
   - `.hero-surface` glassmorphic card wrapper
   - Originated from Cursor worktree `feat-bg-animation-iter` (commit 68b3e0f)
8. **concept-gallery**: Dropdown navigator with iframe previews of all concepts

## Code Style

### HTML
- Semantic elements: `<main>`, `<section>`, `<form>`, `<label>`
- Tailwind config lives inline in `<script>` tag (before loading Tailwind CDN)
- React renders into `<div id="root"></div>`

### CSS
- **Indentation**: 2 spaces
- **Custom properties**: Define in `:root` (e.g., `--ink`, `--haze`, `--panel`)
- **Naming**: Descriptive class names (`.ribbon-stack`, `.pulse-field`, `.waitlist-shell`)
- **Animations**: Prefer CSS keyframes over JS for performance; use `animation-delay` and `animation-duration` for staggering

### JavaScript
- **Components**: Functional React components in PascalCase (`AnimatedBackground`, `RefinedHero`)
- **Hooks**: Use `useState`, `useMemo` for performance
- **State**: Keep minimal; form validation uses local state only
- **Pattern**: Email validation regex at top of file: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`

## Workflow

### Creating New Concepts
1. Duplicate existing concept folder: `cp -R concepts/concept-four-rail concepts/concept-seven-newname`
2. Edit the new folder's files
3. Update `README.md` with description and preview path
4. Commit with descriptive message: `feat: add concept-seven-newname with <key feature>`

### Promoting Concept to Root
1. Copy concept files to root: `cp concepts/concept-name/* .`
2. Commit: `feat: set concept-name as main root concept`
3. Archive previous root in `concepts/` if not already there

### Git Commit Style
- **Format**: `<type>: <description>` (lowercase, no period)
- **Types**: `feat`, `fix`, `refactor`, `docs`, `chore`
- **Examples**:
  - `feat: add isometric wave background`
  - `fix: correct email validation pattern`
  - `refactor: extract AnimatedBackground component`

## Animation Architecture & Techniques

### AnimatedBackground Component Structure

The `AnimatedBackground` component (in root `script.js`) creates a layered animation system:

**Layer 1: Base Gradients**
- Two rotating/drifting radial gradients for depth
- CSS custom properties passed from React: `--gradient-rotate`, `--gradient-shift-x/y`, `--gradient-scale`
- 26s eased animation (`gradientDrift` keyframes)

**Layer 2: Ribbon Stack**
- 3 blue gradient ribbons generated via `Array.from({ length: 3 })`
- Each ribbon configured with: `delay`, `duration`, `rotation`, `vertical`, `hue`, `glow`
- HSL color manipulation: `hsla(var(--ribbon-hue), 80%, 80%, 0.4)` for programmatic blue variation
- Staggered by 6s (`-index * 6`) for continuous motion
- `mix-blend-mode: multiply` for depth
- Animation: `ribbonLoop` 18-23s with `cubic-bezier(0.52, 0, 0.22, 1)`

**Layer 3: Pulse Field (Particle Orbs)**
- 10 small orbs generated with randomized positions (`Math.random()`)
- Each pulse has: `x`, `y`, `size`, `shiftX`, `shiftY`, `delay`, `duration`
- Radial gradients: `rgba(99, 102, 241, 0.35)` blue tones
- Animation: `pulseMotion` 7-12s with scale + translate3d drift
- Box-shadow glow: `0 0 40px rgba(99, 102, 241, 0.35)`

**Layer 4: Focus Rings**
- Two large blurred radial gradients (left/right)
- `filter: blur(50px)` + `mix-blend-mode: screen`
- 18s breathe animation with position shifts

**Layer 5: Grain Overlay**
- Subtle texture via `background-image: radial-gradient()`
- Animated position shift: `grainShift` 22s
- `mix-blend-mode: soft-light` at 35% opacity

### Key Technical Patterns

**React Performance**
- `React.useMemo` for ribbon/pulse configs (computed once, not per render)
- CSS custom properties bridge React → CSS for dynamic per-element styling
- No inline style recalculation during animation

**CSS Animation Best Practices**
- **GPU acceleration**: Always use `transform: translate3d()` instead of `translate()`
- **Long durations**: 18-26s for subtle, luxurious feel
- **Staggered delays**: `animation-delay: var(--ribbon-delay)` creates continuous motion
- **Easing**: `cubic-bezier(0.52, 0, 0.22, 1)` for smooth deceleration
- **Blend modes**: `multiply` (ribbons), `screen` (focus rings) for depth without opacity stacking issues

**Color Strategy**
- Blue spectrum: HSL values 215-231 (adjustable via `--ribbon-hue`)
- Low opacity layers (0.25-0.75) that blend beautifully
- White accents (`rgba(255, 255, 255, 0.9)`) for highlights

**Glassmorphism Treatment**
- Form container: `backdrop-filter: blur(14px)` + `background: rgba(255, 255, 255, 0.88)`
- Border: `1px solid rgba(15, 21, 39, 0.1)` for subtle definition
- Drop shadows: `0 18px 40px rgba(15, 21, 39, 0.1)` for elevation

### Form Interaction Pattern

**State Management**
```javascript
const [email, setEmail] = useState("");
const [status, setStatus] = useState("idle"); // idle | success | error
```

**Visual Feedback**
- Success: `ring-2 ring-emerald-200` (green ring)
- Error: `ring-2 ring-rose-200` (red ring)
- Idle: `ring-1 ring-slate-200/70` (subtle gray)
- Rings use `ring-offset-2` for breathing room

**Validation**
- Regex: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- Client-side only (demo/concept stage)

### Maintaining the Aesthetic

**DO:**
- Keep animation durations 18s+ for subtlety
- Use `translate3d` for all position animations
- Stagger elements with delays for continuous interest
- Layer with blend modes rather than increasing opacity
- Use HSL for programmatic color variation
- Apply `filter: blur()` generously (35px-90px) for soft depth

**DON'T:**
- Use short/fast animations (breaks premium feel)
- Animate `left`/`top` directly (use `transform`)
- Stack high-opacity layers (creates muddy colors)
- Use pure saturated colors (prefer soft, blended tones)
- Overuse `z-index` (blend modes create natural depth)

## Visual Design Principles

- **Light mode**: Background `#f6f7ff` to `#f7f8ff`, text `#0f1527` to `#04050f`
- **Typography hierarchy**: Eyebrow (uppercase, 0.85rem) → Display title (Space Grotesk, 2.5–3.5rem) → Lede (Inter, 1–1.125rem)
- **Animations**: Subtle, looping (18–26s), using opacity/scale/rotation with `translate3d`
- **Form treatment**: Single email input + button, ring states for success/error feedback
- **Backgrounds**: Layered gradients, grain overlays, animated ribbons/pulses/halos with blend modes

## Reference Files

- **`README.md`**: Concept descriptions and preview instructions
- **`AGENTS.md`**: Repository guidelines, build commands, coding style, and commit conventions
- **`context/spec-content.md`**: Brand copy and style direction (light mode, modern, sleek, subtle animation)

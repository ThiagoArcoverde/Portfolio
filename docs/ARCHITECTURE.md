# Architecture

## Purpose

This is a static personal portfolio built with React and Vite and deployed to GitHub Pages. It should remain quick to load, simple to maintain, accessible, and easy to expand with new portfolio content.

## Source Structure

```text
src/
  assets/       Local optimized images, icons, and other static media
  components/   Reusable presentational UI shared by sections
  data/         Structured content for projects, experience, links, and profile data
  sections/     Page-level content blocks composed by App.jsx
  App.jsx       Page composition and section ordering
  main.jsx      React bootstrap only
  style.css     Global styles, design tokens, reset, and shared layout primitives
```

Create a directory only when its first file belongs there. Avoid generic `utils`, `helpers`, or `common` directories; name modules for their domain instead.

## Design Decisions

- Use React function components and local state. Introduce shared state only for state genuinely used by distant components.
- Keep page copy and repeatable collections in `src/data/`; components receive data through props.
- Use CSS for layout, responsive behavior, and simple transitions. Keep global tokens in `:root` and colocate narrowly scoped component styles when the stylesheet grows enough to need them.
- Keep the portfolio as one page until a second route has a clear user need. Do not add a router preemptively.
- Prefer local, optimized assets. External services must fail gracefully and cannot be required for the first render.

## Guardrails

- Build validation is mandatory: `npm run check` runs the production build and is required by the deployment workflow.
- Accessibility is a release criterion: semantic structure, visible keyboard focus, adequate contrast, descriptive links, and `alt` text for informative images.
- Responsive behavior is required for every section: validate at narrow mobile and desktop widths; no horizontal scrolling or clipped controls.
- Add dependencies only when native React, CSS, or the existing toolchain cannot meet a current requirement. Record the reason in the pull request or change description.
- Never commit credentials, tokens, personal contact data not intended for publication, or unlicensed assets.
- Keep the bundle lean: avoid duplicate libraries and import only the assets and code a page uses.

## Change Boundaries

- Content-only changes belong in `src/data/` when applicable.
- Reusable visual patterns belong in `src/components/`; page-specific layout belongs in `src/sections/`.
- Changes to deployment must preserve the Vite `base` path and validate with `npm run check`.
- When behavior becomes non-trivial, add focused automated tests with the smallest compatible test tooling rather than relying only on manual verification.

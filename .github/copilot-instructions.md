# Portfolio Project Guidelines

## Architecture

- Follow [the architecture guide](../docs/ARCHITECTURE.md) before adding features or dependencies.
- Keep `App.jsx` as the page composition root. Put reusable UI in `src/components/`, page blocks in `src/sections/`, and portfolio content in `src/data/`.
- Use plain React and CSS first. Do not add a routing, state-management, UI, animation, or data-fetching dependency without a current requirement it solves.
- Keep portfolio data separate from rendering. Do not hard-code repeated project or experience content in JSX.

## Code Standards

- Use function components, named exports for reusable components, and PascalCase component filenames.
- Keep components focused, accessible, and responsive. Use semantic HTML, keyboard-operable controls, and meaningful alternative text.
- Preserve the existing CSS-token approach. Add reusable values to `:root`; avoid inline styles, `!important`, and one-off visual values when a token is appropriate.
- Do not introduce secrets, tracking code, remote fonts, or third-party assets without explicit approval.

## Validation

- Run `npm run check` after changes that affect the application or build configuration.
- Update documentation when changing project structure, deployment, or architectural conventions.
- Never change the GitHub Pages base path or workflow triggers without confirming the repository deployment setup.
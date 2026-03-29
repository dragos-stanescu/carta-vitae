# Carta Vitae

Personal CV builder — not a SaaS, no backend, no auth.

## Stack

- Vite + React 19 + TypeScript
- Tailwind CSS for styling
- @react-pdf/renderer for PDF export

## Architecture

```
src/
  components/
    cv-preview/     ← Web preview (Tailwind)
    cv-pdf/         ← PDF version (react-pdf primitives)
  data/
    cv-data.ts      ← Single source of truth for CV content
  App.tsx           ← Toggle between preview & export
```

One data file (`cv-data.ts`) drives both the web preview and the PDF output.

## Conventions

- Functional components only, no class components
- Named exports for components
- Component files use PascalCase (e.g. `CvPreview.tsx`)
- Directories use kebab-case (e.g. `cv-preview/`)
- Tailwind utility classes for styling — no CSS modules, no inline styles
- Types/interfaces live alongside the code that uses them, or in a shared `types.ts` if reused
- Keep components small and focused — split when a component does more than one thing

## Commands

- `npm run dev` — start dev server
- `npm run build` — type-check and build for production
- `npm run lint` — run ESLint

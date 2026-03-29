# Carta Vitae

A personal CV builder built in React, with the ability to export the CV as a PDF.

## Tech Stack

- **Framework:** Vite + React
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **PDF Export:** @react-pdf/renderer

## Setup

```bash
npm install
npm run dev
```

## Architecture

```
src/
  components/
    cv-preview/     ← Web preview (styled with Tailwind)
    cv-pdf/         ← PDF version (react-pdf primitives)
  data/
    cv-data.ts      ← Single source of truth for CV content
  App.tsx           ← Toggle between preview & export
```

## Core Flow

Edit `cv-data.ts` → Live preview in browser → Click "Export PDF" → Done

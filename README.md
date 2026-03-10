# Hackathon — Generali Design System

A React component library built from the **Figma "Hackathon - Generali Library"** design file, with Figma Code Connect mappings for every component.

## Stack

- **React 19** + **TypeScript**
- **Vite** (dev server & bundler)
- **Tailwind CSS v4** (design tokens from Figma)
- **Figma Code Connect** (design-to-code mappings)

## Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the next available port). Vite provides hot module replacement — changes to components are reflected instantly in the browser.

### 3. Build for production

```bash
npm run build
```

The compiled output is written to the `dist/` folder.

### 4. Preview the production build

```bash
npm run preview
```

Serves the `dist/` folder locally so you can verify the production build before deploying.

### 5. Lint the codebase

```bash
npm run lint
```

## Project Structure

```
src/
  components/          # One folder per component
    [Name]/
      [Name].tsx        # React component
      [Name].figma.tsx  # Figma Code Connect mapping
  App.tsx              # Component showcase / dev playground
docs/
  component-inventory.json  # Full Figma component inventory
tailwind.config.js     # Design tokens (colors, typography, spacing)
```

## Figma Code Connect

Code Connect mappings link every React component back to its Figma counterpart. To publish the mappings to Figma, run:

```bash
npx figma connect publish
```

You will need a Figma personal access token with the `code_connect:write` scope. Set it as the `FIGMA_ACCESS_TOKEN` environment variable or pass it with `--token`.

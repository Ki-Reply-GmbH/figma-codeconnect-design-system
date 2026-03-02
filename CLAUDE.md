# Project Context

This is a design system project based on the Figma file "Hackathon - Generali Library" (ID: 21fetEK2ibhq1gwmu2s9SL).

## Stack
- React + Vite + Tailwind CSS
- Figma Code Connect for design-code synchronization

## Key Files
- `docs/component-inventory.json` — full inventory of Figma components
- `tailwind.config.js` — contains design tokens extracted from Figma

## Component Structure
Each component has two files:
- `src/components/[Name]/[Name].tsx` — React component
- `src/components/[Name]/[Name].figma.tsx` — Code Connect mapping

## Code Connect Rules
- Always link to the parent Component Set node ID, not individual variants
- Map Figma properties using figma.enum(), figma.boolean(), figma.string(), figma.instance()
- Use existing Tailwind tokens for styling

## Workflow
1. Read component details from the JSON inventory
2. Inspect the component via Figma MCP server for styling
3. Implement the React component
4. Create the Code Connect mapping
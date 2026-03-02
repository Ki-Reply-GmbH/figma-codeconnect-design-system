# Figma Design System Audit — Action Plan

**Date:** 2026-03-02
**Figma file:** Hackathon - Generali Library (`21fetEK2ibhq1gwmu2s9SL`)
**Inventory baseline:** `docs/component-inventory.json`
**Method:** All 60 component `firstVariantId` values probed via Figma MCP API; page node IDs fetched via REST API (`scripts/fetch-figma-nodes.js` → `scripts/figma-node-ids.json`)

---

## Executive Summary

The design team's restructuring was a **file organisation change only** — no components were added or removed, and no variant properties changed. Every component from the inventory is still present in Figma with the same node IDs. The structural changes that matter for our codebase are:

1. The old single `"Design System (generali)"` page is now named **`"Archive"`** (node `212:560`). The section frames that organised components on that page have been deleted.
2. Each component group now lives on its **own dedicated page** (29 pages total — all node IDs now enumerated, see table below).
3. Two components (**Chat Mockup M** and **Chat Mockup XS**) remain on the Archive page, not on dedicated pages — they may be intentionally archived/deprecated.
4. Only **1 of 60** components has a Code Connect file wired up (`Tag`).

---

## Summary Table

| Component | Section | Status | Has `.figma.tsx`? | Page Node ID | Component Set ID | Notes |
|-----------|---------|--------|-------------------|--------------|------------------|-------|
| CTA Button | Buttons | ✅ UNCHANGED | ❌ | `334:7301` | `223:674` | |
| Circle Button | Floating Buttons | ✅ UNCHANGED | ❌ | `334:8598` | `223:849` | |
| Quick Action FAB | Floating Buttons | ✅ UNCHANGED | ❌ | `334:8598` | `223:865` | |
| Toggle | Toggle Buttons | ✅ UNCHANGED | ❌ | `334:8744` | `223:885` | |
| Basic Link | Links | ✅ UNCHANGED | ❌ | `334:8751` | `223:927` | |
| XS Navigation Link | Links | ✅ UNCHANGED | ❌ | `334:8751` | `223:985` | |
| Footer Link | Links | ✅ UNCHANGED | ❌ | `334:8751` | `223:994` | |
| Header/dropdown/profile | Dropdowns | ✅ UNCHANGED | ❌ | `334:8653` | `225:11372` | Single COMPONENT (not a set) |
| Notification List Element | Dropdowns | ✅ UNCHANGED | ❌ | `334:8653` | `223:1255` | |
| Request Overview | Infographic | ✅ UNCHANGED | ❌ | `334:9499` | `223:1291` | |
| Status Bar | Infographic | ✅ UNCHANGED | ❌ | `334:9499` | `223:1335` | |
| Stepper | Infographic | ✅ UNCHANGED | ❌ | `334:9499` | `223:1359` | |
| Hover Label Right | Infographic | ✅ UNCHANGED | ❌ | `334:9499` | `223:1277` | Single COMPONENT (not a set) |
| Hover Label Left | Infographic | ✅ UNCHANGED | ❌ | `334:9499` | `223:1281` | Single COMPONENT (not a set) |
| Progress Bar | Infographic | ✅ UNCHANGED | ❌ | `334:9499` | `223:1285` | Single COMPONENT (not a set) |
| Chat Block | Chat Items | ✅ UNCHANGED | ❌ | `334:9373` | `223:1526` | |
| List Element | List Elements | ✅ UNCHANGED | ❌ | `334:17190` | `223:1559` | |
| Searchbar | Search Bars | ✅ UNCHANGED | ❌ | `334:9301` | `223:1645` | |
| Searchbar Expandable | Search Bars | ✅ UNCHANGED | ❌ | `334:9301` | `223:1670` | |
| Header | Header | ✅ UNCHANGED | ❌ | `334:7458` | `223:1694` | |
| Hero | Hero | ✅ UNCHANGED | ❌ | `334:14382` | `223:1834` | |
| Calendar Day | Calendar | ✅ UNCHANGED | ❌ | `334:17111` | `249:6985` | |
| Footer | Footer | ✅ UNCHANGED | ❌ | `334:8965` | `225:9678` | |
| Accordion M | Accordion | ✅ UNCHANGED | ❌ | `334:9276` | `223:2348` | |
| Accordion XS | Accordion | ✅ UNCHANGED | ❌ | `334:9276` | `223:2361` | |
| Informative & Operation Icons | Icons | ✅ UNCHANGED | ❌ | `334:7448` | `223:2409` | |
| Control Icons | Icons | ✅ UNCHANGED | ❌ | `334:7448` | `223:2548` | |
| Calendar Date | Calendar | ✅ UNCHANGED | ❌ | `334:17111` | `223:2926` | Single COMPONENT (not a set) |
| Logos | Assets + Illustrations | ✅ UNCHANGED | ❌ | `334:14377` | `223:2936` | |
| Section Illustrations | Assets + Illustrations | ✅ UNCHANGED | ❌ | `334:14377` | `223:3081` | |
| Spot Illustrations | Assets + Illustrations | ✅ UNCHANGED | ❌ | `334:14377` | `223:3915` | |
| Highlight Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:4553` | |
| Simple Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:4645` | |
| Basic Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:4691` | |
| Sized Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:4771` | |
| Card M/S | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:4805` | |
| Content Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:4856` | |
| Tenant Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:5007` | |
| Map Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:5396` | |
| PM View Cards | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `225:12835` | Single COMPONENT (not a set) |
| Request Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:5457` | |
| Community / Announcement Card | Cards | ✅ UNCHANGED | ❌ | `334:12112` | `223:5467` | |
| Mobile Menu | Menu Mobile | ✅ UNCHANGED | ❌ | `334:8831` | `223:6388` | |
| Tab Bar | Menu Mobile | ✅ UNCHANGED | ❌ | `334:8831` | `223:6444` | |
| Input Field / Attachment | Form | ✅ UNCHANGED | ❌ | `334:9427` | `223:6459` | |
| Input Field Simple | Form | ✅ UNCHANGED | ❌ | `334:9427` | `223:6481` | |
| Chip | Chips | ✅ UNCHANGED | ❌ | `334:9476` | `223:6491` | |
| Chat Message | Chat Items | ✅ UNCHANGED | ❌ | `334:9373` | `223:6513` | |
| Chat Profile | Chat Items | ✅ UNCHANGED | ❌ | `334:9373` | `225:12552` | |
| Request Widget | Widget | ✅ UNCHANGED | ❌ | `334:9516` | `223:6541` | |
| Dropdown | Dropdown | ✅ UNCHANGED | ❌ | `334:9439` | `223:6629` | |
| XS Dropdown | Dropdown | ✅ UNCHANGED | ❌ | `334:9439` | `225:12306` | Single COMPONENT (not a set) |
| Paginator | Paginator | ✅ UNCHANGED | ❌ | `334:9454` | `223:6663` | |
| Zoom Element | Google Maps Elements | ✅ UNCHANGED | ❌ | `334:17307` | `223:6681` | Single COMPONENT (not a set) |
| Map Disclaimer | Google Maps Elements | ✅ UNCHANGED | ❌ | `334:17307` | `223:6686` | Single COMPONENT (not a set) |
| Expand | Google Maps Elements | ✅ UNCHANGED | ❌ | `334:17307` | `223:6696` | Single COMPONENT (not a set) |
| **Tag** | **Tags** | ✅ **UNCHANGED** | ✅ **DONE** | `334:9471` | `225:12697` | |
| Table | Table | ✅ UNCHANGED | ❌ | `334:9641` | `228:42337` | |
| Chat Mockup M | Archive | ⚠️ ARCHIVED | ❌ | `212:560` | `223:6896` | Remains on Archive page — possibly deprecated |
| Chat Mockup XS | Archive | ⚠️ ARCHIVED | ❌ | `212:560` | `223:7675` | Remains on Archive page — possibly deprecated |

**Legend:**
- ✅ UNCHANGED — exists in Figma with same IDs and variant properties
- ⚠️ ARCHIVED — still technically valid but located on the "Archive" page rather than a dedicated page; confirm with design team whether these should still be implemented
- ❌ No Code Connect file
- **Single COMPONENT** — this node has only one variant; Figma stores it as a `COMPONENT` rather than a `COMPONENT_SET`. The node ID still works in `figma.connect()` URLs.
- **Component Set ID** — the `node-id` value to use in `figma.connect()` URLs; obtained by calling `get_design_context` on each `firstVariantId` and reading the outer wrapper's `data-node-id`

---

## Key Technical Findings

### 1. Section frames are gone, but component IDs are intact
The `nodeId` values recorded under each `section` in `component-inventory.json` (e.g. `223:654` for Buttons) are no longer valid. Those were container frames on the old single-page layout. However, all `firstVariantId` values are still valid — the components themselves were simply moved, not recreated.

### 2. Component Set IDs differ from Section IDs
Code Connect must link to the **component set** node ID, not the section frame or the firstVariantId.
Example (Tag):
- Section frame (now gone): `223:6699`
- First variant: `223:6702`
- **Component set (used in Code Connect): `225:12697`** ← use this

Finding the component set ID requires calling `get_design_context` for each component's firstVariantId; it appears in the response as a `data-node-id` wrapping the Code Connect snippet.

### 3. File page structure (all 29 pages)
| Page | Node ID | Component Sets |
|------|---------|----------------|
| Cover | `247:10178` | — |
| Text Styles | `334:7419` | — |
| Buttons | `334:7301` | CTA |
| Tags | `334:9471` | Tag |
| Chips | `334:9476` | Chip M, Chip XS |
| Header | `334:7458` | Header M/S/XS |
| Icons | `334:7448` | operation, control, header, informative |
| Search bars | `334:9301` | Hero searchbar, button searchbar |
| Cards | `334:12112` | highlights, building, text+image, only text, text+icon, support detail, community post, location×2, PM request, community |
| Calendar | `334:17111` | Calendar |
| Hero | `334:14382` | Hero M/S/XS |
| Table | `334:9641` | Table M |
| Widget | `334:9516` | widget×3 |
| List elements | `334:17190` | request, B&D |
| Infographic | `334:9499` | infographic×3 |
| Paginator | `334:9454` | black |
| Dropdown | `334:9439` | Dropdown M/XS |
| Form | `334:9427` | Input M/XS |
| Assets + illustrations | `334:14377` | assets, illustrations, hero illustrations |
| Google Maps elements | `334:17307` | — (all single COMPONENTs) |
| Chat items | `334:9373` | Chat XS/M, letters PM, Chat Block |
| Accordion | `334:9276` | Accordion M/XS |
| Footer | `334:8965` | Footer |
| Menu Mobile | `334:8831` | Menu list, Header expanded, subnavigation |
| Links | `334:8751` | Basic links, XS Navigation, Footer links |
| Toggle Buttons | `334:8744` | Toggle |
| Dropdowns | `334:8653` | Notification |
| Floating Buttons | `334:8598` | Circle Button M/XS |
| Archive | `212:560` | Chat Mockup M/XS |

### 4. `component-inventory.json` metadata is stale
- `figmaFile.page`: was `"Design System (generali)"` → now `"Archive"`
- `figmaFile.pageNodeId`: still `"212:560"` (still valid, but the page is renamed)
- All `sections[*].nodeId` values are stale (section frames deleted)

---

## Prioritised Action List

### P0 — Clarify before building anything

- [ ] **Confirm Archive status of Chat Mockup M & XS** with design team: are these deprecated fullscreen mockup screens (not real components) or should they be implemented? The fact they remain on the Archive page and were likely never meant as standalone components suggests they can be skipped.

### P1 — Infrastructure (do once, enables everything else)

- [x] **Action 1 — Enumerate new page IDs**: Done via `scripts/fetch-figma-nodes.js` using Figma REST API. All 29 page node IDs collected and recorded in `scripts/figma-node-ids.json` and the table above.

- [x] **Action 2 — Find all component set IDs**: Done — all 60 component set IDs collected via `get_design_context`. Recorded in the table above.

- [ ] **Action 3 — Update `component-inventory.json` metadata**:
  - Change `figmaFile.page` to `"Archive"` (or the correct active page name)
  - Remove stale `sections[*].nodeId` values or replace with new page node IDs

### P2 — Implement high-priority components (most used in product UI)

Suggested implementation order based on UI frequency (implement React component + Code Connect file for each):

1. **CTA Button** — primary interactive element, highest impact
2. **Chip** — widely used for filtering/selection
3. **Dropdown / XS Dropdown** — form interactions
4. **Input Field / Attachment** — form inputs
5. **Input Field Simple** — form inputs
6. **Searchbar / Searchbar Expandable** — navigation
7. **Toggle** — settings/forms
8. **Header** — layout shell
9. **Footer** — layout shell
10. **Basic Link / XS Navigation Link / Footer Link** — navigation

### P3 — Implement medium-priority components

11. **Tag** — ✅ already done (React + Code Connect)
12. **Highlight Card / Simple Card / Basic Card / Content Card** — content display
13. **List Element** — data display
14. **Paginator** — data navigation
15. **Notification List Element** — header UI
16. **Mobile Menu / Tab Bar** — mobile navigation
17. **Hero** — page headers
18. **Accordion M / Accordion XS** — FAQ/expandable content
19. **Request Widget** — dashboard widget
20. **Community / Announcement Card** — community features

### P4 — Implement lower-priority / complex components

21. **Tenant Card** (33 variants — large)
22. **Map Card**
23. **Highlight Card** (full variant matrix)
24. **Sized Card**
25. **Chat Message / Chat Profile / Chat Block**
26. **Request Card / Request Overview / Status Bar / Stepper**
27. **Table**
28. **Calendar Day**
29. **Circle Button / Quick Action FAB**

### P5 — Asset / utility components (consider if needed)

30. **Informative & Operation Icons** — 68 variants; likely best handled as an icon sprite/font rather than Code Connect
31. **Control Icons** — 89 variants; same as above
32. **Logos / Section Illustrations / Spot Illustrations** — static assets, wrap as simple image components
33. **Google Map Elements** (Zoom Element, Map Disclaimer, Expand) — single variants, low complexity but niche
34. **Header/dropdown/profile** — single variant, complex nested component
35. **Hover Label Right/Left, Progress Bar, Calendar Date** — single-variant infographic sub-components

### Skip / Defer

- **Chat Mockup M / Chat Mockup XS** — pending P0 confirmation; these appear to be full-screen page mockups, not reusable components
- **PM View Cards** — slash-named sub-variants of Tenant Card; implement as part of Tenant Card
- **XS Dropdown** — single variant; implement as part of Dropdown
- **Text Styles** — already implemented as CSS utility classes in `src/index.css`, no Code Connect needed
- **Card M/S** — only 2 variants; assess whether this is a standalone component or a layout helper

---

## Code Connect Pattern Reference

Based on the existing `Tag.figma.tsx`:

```tsx
import figma from "@figma/code-connect/react";
import { ComponentName } from "./ComponentName";

figma.connect(
  ComponentName,
  "https://www.figma.com/design/21fetEK2ibhq1gwmu2s9SL/Hackathon---Generali-Library?node-id=COMPONENT_SET_ID",
  {
    props: {
      // Use figma.enum() for enum properties
      size: figma.enum("Size", { S: "S", M: "M", XS: "XS" }),
      // Use figma.boolean() for boolean properties
      disabled: figma.boolean("Disabled"),
      // Use figma.string() for text content
      label: figma.string("Label"),
      // Use figma.instance() for nested component props
      icon: figma.instance("Icon"),
    },
    example: ({ size, label }) => <ComponentName size={size}>{label}</ComponentName>,
  }
);
```

**Key rule:** The URL `node-id` must be the **component set** node ID (format `XXXXX-YYYYY`), not the section frame or a variant ID. Get this by running `get_design_context` on the firstVariantId and reading the outer wrapper's `data-node-id`.

---

## Files to Create (per component)

```
src/components/[Name]/[Name].tsx        ← React component
src/components/[Name]/[Name].figma.tsx  ← Code Connect mapping
```

Already exists:
- `src/components/Tag/Tag.tsx` ✅
- `src/components/Tag/Tag.figma.tsx` ✅

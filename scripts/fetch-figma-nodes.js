#!/usr/bin/env node
// fetch-figma-nodes.js
// Fetches all pages and component sets from the Figma file defined in .env
// Run with: node --env-file=.env scripts/fetch-figma-nodes.js

import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const BASE_URL = "https://api.figma.com/v1";
const FILE_KEY = process.env.FIGMA_FILE_KEY;
const TOKEN = process.env.FIGMA_ACCESS_TOKEN;

if (!FILE_KEY || !TOKEN) {
  console.error("Missing FIGMA_FILE_KEY or FIGMA_ACCESS_TOKEN in environment.");
  process.exit(1);
}
if (TOKEN === "your_personal_access_token_here") {
  console.error("Please set a real FIGMA_ACCESS_TOKEN in .env");
  process.exit(1);
}

async function figmaGet(path) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { "X-Figma-Token": TOKEN },
  });
  const body = await res.json();
  if (!res.ok) {
    throw new Error(`Figma API error ${res.status}: ${body.err ?? JSON.stringify(body)}`);
  }
  return body;
}

// Recursively find all COMPONENT_SET nodes in a node tree
function findComponentSets(node, results = []) {
  if (node.type === "COMPONENT_SET") {
    results.push({ name: node.name, nodeId: node.id });
  }
  for (const child of node.children ?? []) {
    findComponentSets(child, results);
  }
  return results;
}

async function main() {
  // Step 1: fetch all pages
  console.log(`Fetching file ${FILE_KEY} …`);
  const file = await figmaGet(`/files/${FILE_KEY}?depth=1`);
  const pages = file.document.children.filter((n) => n.type === "CANVAS");
  console.log(`Found ${pages.length} pages: ${pages.map((p) => p.name).join(", ")}\n`);

  const output = { pages: [] };

  // Step 2: for each page, fetch component sets
  for (const page of pages) {
    process.stdout.write(`  Fetching component sets for page "${page.name}" (${page.id}) … `);

    const nodeData = await figmaGet(`/files/${FILE_KEY}/nodes?ids=${encodeURIComponent(page.id)}`);
    const pageNode = nodeData.nodes[page.id]?.document;

    if (!pageNode) {
      console.log("(no data)");
      output.pages.push({ name: page.name, pageNodeId: page.id, componentSets: [] });
      continue;
    }

    const sets = findComponentSets(pageNode);
    console.log(`${sets.length} component set(s)`);

    output.pages.push({
      name: page.name,
      pageNodeId: page.id,
      componentSets: sets,
    });
  }

  // Step 3: write JSON output
  const __dir = dirname(fileURLToPath(import.meta.url));
  const outPath = resolve(__dir, "figma-node-ids.json");
  writeFileSync(outPath, JSON.stringify(output, null, 2));
  console.log(`\nWrote ${outPath}`);

  // Print readable summary
  console.log("\n=== Summary ===");
  for (const page of output.pages) {
    console.log(`\nPage: "${page.name}"  id=${page.pageNodeId}`);
    if (page.componentSets.length === 0) {
      console.log("  (no component sets)");
    } else {
      for (const cs of page.componentSets) {
        console.log(`  • ${cs.name.padEnd(45)} id=${cs.nodeId}`);
      }
    }
  }
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});

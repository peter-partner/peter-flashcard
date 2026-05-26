// One-off check: every unique Chinese char in HSK1 must resolve a stroke-data JSON.
// Runs at the command line. Doesn't ship to the bundle.

import { readFile } from "node:fs/promises";

const src = await readFile(new URL("../lib/flashcards.ts", import.meta.url), "utf8");
const zhFields = src.match(/zh:\s*"([^"]+)"/g) ?? [];
const chars = new Set(
  zhFields.flatMap((m) => {
    const value = m.match(/zh:\s*"([^"]+)"/)[1];
    // Only keep actual Han characters (skip punctuation, ASCII, Thai, etc.).
    return Array.from(value).filter((c) => /\p{Script=Han}/u.test(c));
  }),
);

console.log(`Unique HSK1 Han chars: ${chars.size}`);

const cdn = (c) =>
  `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2/${c}.json`;

const results = await Promise.all(
  [...chars].map(async (c) => {
    const r = await fetch(cdn(c));
    if (!r.ok) return { c, ok: false, status: r.status };
    const data = await r.json();
    return {
      c,
      ok: true,
      strokes: data.strokes?.length ?? 0,
      medians: data.medians?.length ?? 0,
    };
  }),
);

const bad = results.filter((r) => !r.ok || r.strokes === 0);
if (bad.length) {
  console.error("FAILED:", bad);
  process.exit(1);
}

// Also assert stroke / median counts agree — the renderer assumes the
// medians array indexes 1:1 with the strokes array.
const misaligned = results.filter(
  (r) => r.ok && r.strokes !== r.medians,
);
if (misaligned.length) {
  console.error(
    "STROKE/MEDIAN MISMATCH (would break stroke-number badges):",
    misaligned,
  );
  process.exit(1);
}
const totalStrokes = results.reduce((s, r) => s + r.strokes, 0);
console.log(
  `All ${results.length} chars have data. Total strokes across deck: ${totalStrokes}.`,
);
console.log(
  `Stroke-count summary (min/median/max): ${Math.min(
    ...results.map((r) => r.strokes),
  )} / ${
    results.map((r) => r.strokes).sort((a, b) => a - b)[
      Math.floor(results.length / 2)
    ]
  } / ${Math.max(...results.map((r) => r.strokes))}`,
);

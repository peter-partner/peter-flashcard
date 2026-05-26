// End-to-end render test for every HSK1 card. Launches Playwright Chromium
// once, navigates to /card/hsk/<id> for id 1..100, toggles "Show stroke
// guide" on each, and asserts that the actual stroke path count rendered
// in the DOM equals the expected number of strokes for that card's word
// (sum of strokes across each char of word.zh).
//
// Prereqs:   npm i -D playwright && npx playwright install chromium
// Usage:     URL_BASE=http://localhost:3000 node scripts/verify-all-cards-render.mjs

import { readFile } from "node:fs/promises";
import { chromium } from "playwright";

const URL_BASE = process.env.URL_BASE || "http://localhost:3000";

// Parse the outer `zh:` fields (the word for each card) from lib/flashcards.ts.
// Each card has TWO zh fields: the outer word and the inner `ex.zh` example
// sentence. We only want the words, which alternate at even indices.
const src = await readFile(
  new URL("../lib/flashcards.ts", import.meta.url),
  "utf8",
);
const allZh = [...src.matchAll(/zh:\s*"([^"]+)"/g)].map((m) => m[1]);
const cards = allZh.filter((_, i) => i % 2 === 0).slice(0, 100);

if (cards.length !== 100) {
  console.error(`Expected 100 word-cards, got ${cards.length}`);
  process.exit(1);
}
console.log(`Loaded ${cards.length} cards from lib/flashcards.ts`);

// One-shot per-char stroke-count lookup so we know the expected total per card.
const charStrokeCount = new Map();
async function getStrokeCount(c) {
  if (charStrokeCount.has(c)) return charStrokeCount.get(c);
  const url = `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/${encodeURIComponent(
    c,
  )}.json`;
  const r = await fetch(url);
  if (!r.ok) throw new Error(`CDN ${c} -> HTTP ${r.status}`);
  const d = await r.json();
  charStrokeCount.set(c, d.strokes.length);
  return d.strokes.length;
}

const browser = await chromium.launch();

// Use a fresh page per card — repeated page.goto() in one tab caused
// Strict-Mode/HMR state to accumulate and started timing out after a
// few cards. Closing the page each iteration costs ~50ms and is reliable.
const context = await browser.newContext({
  viewport: { width: 412, height: 915 },
});

const results = [];
let failures = 0;
const t0 = Date.now();

for (let i = 0; i < cards.length; i++) {
  const id = i + 1;
  const word = cards[i];
  const hanChars = Array.from(word).filter((c) =>
    /\p{Script=Han}/u.test(c),
  );
  const expected = (
    await Promise.all(hanChars.map((c) => getStrokeCount(c)))
  ).reduce((a, b) => a + b, 0);

  const page = await context.newPage();
  const url = `${URL_BASE}/card/hsk/${id}`;
  try {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30_000 });
    const toggle = page.getByRole("button", { name: /show stroke guide/i });
    await toggle.waitFor({ timeout: 15_000 });
    await toggle.click();

    // page.waitForFunction signature is (fn, arg, options) — passing
    // options as the second arg is a silent footgun (Playwright treats
    // it as the function argument and silently uses the 30s default).
    await page.waitForFunction(
      () => {
        const svgs = Array.from(document.querySelectorAll("svg"));
        const guides = svgs.filter(
          (s) => s.viewBox && s.viewBox.baseVal && s.viewBox.baseVal.width === 100,
        );
        const totalPaths = guides.reduce(
          (sum, s) => sum + s.querySelectorAll("path").length,
          0,
        );
        return totalPaths > 0;
      },
      null,
      { timeout: 20_000 },
    );

    const stats = await page.evaluate(() => {
      const svgs = Array.from(document.querySelectorAll("svg")).filter(
        (s) => s.viewBox && s.viewBox.baseVal && s.viewBox.baseVal.width === 100,
      );
      return {
        guides: svgs.length,
        paths: svgs.reduce(
          (sum, s) => sum + s.querySelectorAll("path").length,
          0,
        ),
      };
    });

    const ok = stats.paths === expected && stats.guides === hanChars.length;
    if (!ok) failures++;
    results.push({
      id,
      word,
      expectedStrokes: expected,
      expectedChars: hanChars.length,
      actualPaths: stats.paths,
      actualGuides: stats.guides,
      ok,
    });

    // Progress log every 10 cards, plus all failures.
    if (id % 10 === 0 || !ok) {
      const elapsed = ((Date.now() - t0) / 1000).toFixed(0);
      console.log(
        `${ok ? "OK " : "FAIL"} card ${String(id).padStart(3, "0")} ${word}  ` +
          `expected=${expected}/${hanChars.length}ch  actual=${stats.paths}/${stats.guides}ch  (t+${elapsed}s)`,
      );
    }
  } catch (e) {
    failures++;
    results.push({
      id,
      word,
      ok: false,
      error: String(e).slice(0, 140),
    });
    console.log(`FAIL card ${id} ${word}  -> ${String(e).slice(0, 120)}`);
  } finally {
    await page.close();
  }
}

await browser.close();

console.log(
  `\n${cards.length - failures} / ${cards.length} cards rendered the expected stroke count.`,
);
if (failures) {
  console.log("\nFailures:");
  for (const r of results.filter((r) => !r.ok)) {
    console.log("  -", JSON.stringify(r));
  }
  process.exit(1);
}

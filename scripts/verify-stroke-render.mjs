// Spins up Playwright, opens /card/hsk/1, clicks "Show stroke guide", and
// asserts that the StrokeGuide SVG actually renders with stroke <path>
// elements. Used as a one-off pre-push verification — not run in CI.
//
// Prereqs:   npm i -D playwright && npx playwright install chromium
// Usage:     URL=http://localhost:3000/card/hsk/1 node scripts/verify-stroke-render.mjs

import { chromium } from "playwright";

const URL = process.env.URL || "http://localhost:3000/card/hsk/1";

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 412, height: 915 }, // Android Chrome size
});

const consoleLogs = [];
page.on("console", (msg) => consoleLogs.push(`[${msg.type()}] ${msg.text()}`));
page.on("pageerror", (err) => consoleLogs.push(`[ERROR] ${err.message}`));
page.on("request", (req) => {
  if (req.url().includes("hanzi-writer-data") || req.url().includes(".json"))
    consoleLogs.push(`[REQ] ${req.url()}`);
});
page.on("requestfailed", (req) =>
  consoleLogs.push(`[REQFAIL] ${req.url()} -> ${req.failure()?.errorText}`),
);
page.on("response", (res) => {
  if (res.url().includes("hanzi-writer-data") || res.url().includes(".json"))
    consoleLogs.push(`[RES] ${res.status()} ${res.url()}`);
});

await page.goto(URL, { waitUntil: "networkidle" });

const toggle = page.getByRole("button", { name: /show stroke guide/i });
await toggle.waitFor({ timeout: 10_000 });
await toggle.click();

// Direct probe inside the page — does fetch() to the CDN actually work here?
const probe = await page.evaluate(async () => {
  try {
    const r = await fetch(
      "https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0.1/%E4%BD%A0.json",
    );
    return { ok: r.ok, status: r.status, bytes: (await r.text()).length };
  } catch (e) {
    return { ok: false, error: String(e) };
  }
});
console.log("Direct in-page fetch probe (post-toggle):", JSON.stringify(probe));

// Wait for any SVG path element under the practice section.
const svgPath = page.locator("section, div").filter({ hasText: "Practice writing" }).locator("svg path").first();

// Allow up to ~25s — first-load includes hanzi-writer dynamic import + CDN
// JSON fetch + state-flush + animation start.
try {
  await svgPath.waitFor({ timeout: 25_000 });
} catch {
  console.log("SVG path did not appear within 8s.");
  console.log("Console:", consoleLogs.slice(-20).join("\n"));
  await browser.close();
  process.exit(1);
}

const stats = await page.evaluate(() => {
  const svgs = Array.from(document.querySelectorAll("svg"));
  const writingSvgs = svgs.filter(
    (s) => s.viewBox && s.viewBox.baseVal && s.viewBox.baseVal.width === 100,
  );
  return {
    totalSvgs: svgs.length,
    strokeGuideSvgs: writingSvgs.length,
    pathsInStrokeGuide: writingSvgs.reduce(
      (sum, s) => sum + s.querySelectorAll("path").length,
      0,
    ),
    digitsRendered: Array.from(document.querySelectorAll("svg text"))
      .map((t) => t.textContent)
      .filter((t) => /^\d+$/.test(t || "")),
  };
});

console.log("Stats:", JSON.stringify(stats, null, 2));

if (stats.pathsInStrokeGuide === 0) {
  console.log("FAIL: stroke-guide SVG mounted but contains no <path>.");
  console.log("All recorded events:\n" + consoleLogs.join("\n"));
  await page.screenshot({ path: "scripts/stroke-fail.png", fullPage: false });
  process.exit(1);
}

// Replay button should also exist now.
const replay = page.getByRole("button", { name: /replay/i });
const replayCount = await replay.count();

// Wait for the stroke-number badge to appear (animation in progress) before
// snapshotting, so the screenshot captures a representative state.
await page.waitForFunction(
  () =>
    Array.from(document.querySelectorAll("svg text"))
      .some((t) => /^\d+$/.test(t.textContent || "")),
  { timeout: 6_000 },
);

await page.screenshot({
  path: "scripts/stroke-render.png",
  fullPage: false,
});

const midStats = await page.evaluate(() => {
  const digits = Array.from(document.querySelectorAll("svg text"))
    .map((t) => t.textContent)
    .filter((t) => /^\d+$/.test(t || ""));
  return { digits };
});
console.log("Mid-animation digits visible:", midStats.digits);

console.log(
  `OK: ${stats.pathsInStrokeGuide} stroke paths rendered; ${stats.digitsRendered.length} stroke-number digit(s) visible at snapshot time; replay button present=${replayCount > 0}.`,
);
console.log("Screenshot: scripts/stroke-render.png");

await browser.close();

#!/usr/bin/env node
/**
 * generate_seed.mjs
 *
 * Generates src/data/review_items.json — the active review items' question
 * content (NOT decisions) — from the canonical upstream sources:
 *
 *   ../../../02.content/review_manifest.yaml           (source of truth: page,
 *                                                        topic, current_working_view,
 *                                                        decision_required, pages_affected)
 *   ../../../03.production/content/review_overrides.yaml (Steve-facing trims already
 *                                                        applied in the
 *                                                        production review PDF — reused
 *                                                        here so the app matches what
 *                                                        Steve already saw on paper)
 *   ../../../03.production/content/pages.yaml           (page titles, by page_number)
 *
 * This is the ONLY place the review questions' content is authored — never
 * hand-edit src/data/review_items.json directly; re-run `npm run generate-seed`
 * instead. claims_affected (ADM-xxx-xx IDs) are deliberately dropped here — the
 * Steve Review App is commercial review, not technical review.
 *
 * Item count is not hard-coded to a specific historical round any more — it
 * simply asserts the seed matches whatever review_manifest.yaml currently
 * contains (including an empty list; 02.content/review_manifest.yaml
 * is the single active version per the project's versioning rule).
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import yaml from "js-yaml";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(__dirname, "..");
const PROJECT_ROOT = path.resolve(APP_ROOT, "..", "..");

const MANIFEST_PATH = path.join(PROJECT_ROOT, "02.content", "review_manifest.yaml");
const OVERRIDES_PATH = path.join(PROJECT_ROOT, "03.production", "content", "review_overrides.yaml");
const PAGES_PATH = path.join(PROJECT_ROOT, "03.production", "content", "pages.yaml");
const OUT_PATH = path.join(APP_ROOT, "src", "data", "review_items.json");

function loadYaml(p) {
  return yaml.load(fs.readFileSync(p, "utf8"));
}

function main() {
  const manifest = loadYaml(MANIFEST_PATH);
  const overrides = loadYaml(OVERRIDES_PATH) || {};
  const pagesDoc = loadYaml(PAGES_PATH);

  const pageTitleByNumber = new Map(
    pagesDoc.pages.map((p) => [p.page_number, p.title])
  );

  const items = manifest.map((entry, index) => {
    const ov = overrides[entry.review_id] || {};
    const current_working_view = (ov.current_working_view || entry.current_working_view).trim();
    const decision_required = (ov.decision_required || entry.decision_required).trim();

    return {
      review_id: entry.review_id,
      order: index + 1,
      page_number: entry.page,
      page_title: pageTitleByNumber.get(entry.page) || null,
      topic: entry.topic,
      current_working_view,
      decision_required,
      pages_affected: Array.isArray(entry.pages_affected) ? entry.pages_affected : [],
      // page_render is filled in relative to /public/page-renders/ by copy_assets.mjs's
      // naming convention (page-NN.png) — computed at render time in the UI, not stored.
    };
  });

  const ids = items.map((i) => i.review_id);
  if (new Set(ids).size !== ids.length) throw new Error("Duplicate review IDs in manifest");

  fs.mkdirSync(path.dirname(OUT_PATH), { recursive: true });
  fs.writeFileSync(OUT_PATH, JSON.stringify(items, null, 2) + "\n", "utf8");
  console.log(`Wrote ${OUT_PATH} (${items.length} review items).`);
}

main();

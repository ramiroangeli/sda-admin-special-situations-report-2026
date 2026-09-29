#!/usr/bin/env node
/**
 * copy_assets.mjs
 *
 * Copies the read-only preview assets this app needs into public/, so the
 * Next.js app is self-contained and 03.production/ / 05.outputs/ are never
 * modified or served directly. Source files are only ever read here.
 *
 *   03.production/out/page_renders/page-NN.png  -> public/page-renders/page-NN.png
 *     (only the pages that currently carry a review item — 6, 17, 18, 20)
 *   05.outputs/public/..._2026.pdf                -> public/report/full-report.pdf
 *     (the published canonical public PDF, for the optional "VIEW FULL REPORT" view)
 *
 * The review-page list is not hard-coded to a specific historical round —
 * update REVIEW_PAGE_NUMBERS here (and re-run `npm run generate-seed`) if
 * review_manifest.yaml's page coverage ever changes.
 */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const APP_ROOT = path.resolve(__dirname, "..");
const PROJECT_ROOT = path.resolve(APP_ROOT, "..", "..");
const ENGINE_ROOT = path.join(PROJECT_ROOT, "03.production");
const OUTPUTS_ROOT = path.join(PROJECT_ROOT, "05.outputs");

const reviewItems = JSON.parse(fs.readFileSync(path.join(APP_ROOT, "src", "data", "review_items.json"), "utf8"));
const REVIEW_PAGE_NUMBERS = [...new Set(reviewItems.map((item) => item.page_number))];

function copyPageRenders() {
  const srcDir = path.join(ENGINE_ROOT, "out", "page_renders");
  const destDir = path.join(APP_ROOT, "public", "page-renders");
  fs.mkdirSync(destDir, { recursive: true });

  for (const file of fs.readdirSync(destDir)) {
    if (/^page-\d+\.png$/.test(file) && !REVIEW_PAGE_NUMBERS.includes(Number(file.match(/\d+/)[0]))) fs.unlinkSync(path.join(destDir, file));
  }
  let copied = 0;
  for (const n of REVIEW_PAGE_NUMBERS) {
    const name = `page-${String(n).padStart(2, "0")}.png`;
    const src = path.join(srcDir, name);
    const dest = path.join(destDir, name);
    if (!fs.existsSync(src)) {
      console.error(`Missing expected page render: ${src} — run the production build's --png step first.`);
      process.exit(1);
    }
    fs.copyFileSync(src, dest);
    copied += 1;
  }
  console.log(`Copied ${copied} page renders to ${destDir}`);
}

function copyFullReportPdf() {
  const src = path.join(OUTPUTS_ROOT, "public", "SDA_Administration_Special_Situations_Report_2026.pdf");
  const destDir = path.join(APP_ROOT, "public", "report");
  fs.mkdirSync(destDir, { recursive: true });
  const dest = path.join(destDir, "full-report.pdf");
  if (!fs.existsSync(src)) {
    console.error(`Missing published public report PDF: ${src} — run the production build's --publish step first.`);
    process.exit(1);
  }
  fs.copyFileSync(src, dest);
  console.log(`Copied full report PDF to ${dest}`);
}

copyPageRenders();
copyFullReportPdf();

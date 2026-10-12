// Node 18+ runner for scripts/build-print.js (cover, Contents, air pages, back cover, print artwork,
// CMYK conversion and 28-page assembly).
//
// Inputs (environment variables, set by 03.production/scripts/build_release.py):
//   INTERIOR_PDF   PDF produced by the WeasyPrint engine (24 pages, printed folios 1-24)   [required]
//   CONTENTS_JSON  Contents data exported from pages.yaml                                  [required]
//   OUT_DIR        output directory (default: ../../05.outputs/release-build)
//   SOURCE_DATE_EPOCH  optional, fixes PDF creation/modification dates for reproducible output
//
// build-print.js is run as the body of an async function; this runner supplies readFile / readFileBinary /
// saveFile / log and the three npm libraries. There are no network fetches and no temporary upload paths.
import { readFile as fsRead, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as otNs from 'opentype.js';
import * as plNs from 'pdf-lib';
import * as pakoNs from 'pako';
import qrcodeNs from 'qrcode-generator';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const need = (k) => { if (!process.env[k]) throw new Error(`${k} is not set (run via 03.production/scripts/build_release.py)`); return path.resolve(process.env[k]); };
const interior = need('INTERIOR_PDF');
const contents = need('CONTENTS_JSON');
const outDir = path.resolve(process.env.OUT_DIR || path.join(root, '../../05.outputs/release-build'));

const INPUTS = { 'interior.pdf': interior, 'contents.json': contents };
const resolveIn = (p) => INPUTS[p] || path.join(root, p);
const readFile = async (p) => fsRead(resolveIn(p), 'utf8');
const readFileBinary = async (p) => new Blob([await fsRead(resolveIn(p))]);
// '+' in logical names is written as '-' so output names match the approved set.
const saveFile = async (p, data) => {
  const target = path.join(outDir, p.replace(/\+/g, '-'));
  await mkdir(path.dirname(target), { recursive: true });
  const buf = typeof data === 'string' ? Buffer.from(data) : Buffer.from(await data.arrayBuffer());
  await writeFile(target, buf);
  console.log('wrote', path.relative(process.cwd(), target));
};
const log = (...a) => console.log(...a);

const ot = otNs.default?.parse ? otNs.default : otNs;
const PL = plNs.PDFDocument ? plNs : plNs.default;
const pako = pakoNs.inflate ? pakoNs : pakoNs.default;

const src = await fsRead(path.join(root, 'scripts/build-print.js'), 'utf8');
const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor;
await new AsyncFunction('readFile', 'readFileBinary', 'saveFile', 'log', 'ot', 'PL', 'pako', 'qrcode', src)(readFile, readFileBinary, saveFile, log, ot, PL, pako, qrcodeNs);
console.log(`Done. Output in ${outDir}`);

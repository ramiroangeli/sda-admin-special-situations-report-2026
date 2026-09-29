# QA Acceptance Test — Steve Review App

Run this before giving Steve his real link. Use the **QA token**
(`QA_ACCESS_TOKEN`, not `REVIEW_ACCESS_TOKEN`) throughout — it maps to
`reviewer_name = "Ramiro QA"`, a row set entirely separate from Steve's real
answers (`reviewer_name = "Steve"`), so nothing here can contaminate his
review. Report version under test: **`SDA-ADMIN-2026`**.

Prerequisites: Supabase migration run (`../supabase/migrations/0001_init.sql`),
`.env.local` (or Vercel env vars) filled in with real `SUPABASE_URL` /
`SUPABASE_SERVICE_ROLE_KEY` / `REVIEW_ACCESS_TOKEN` / `QA_ACCESS_TOKEN`.

Fill in ✅ / ❌ as you go. If anything fails, note it under "Notes" before
proceeding — don't hand this to Steve with an unresolved ❌.

## 1. Open app

- [ ] Visit `https://<your-app>/?token=<QA_ACCESS_TOKEN>` (or `http://localhost:3000/?token=...` locally).
- [ ] Redirects to a clean URL (no `?token=` left in the address bar).
- [ ] Intro screen shows: title "Specialist Disability Accommodation Administration & Special Situations Report 2026", "Internal review — not for distribution" status, the short explanation, "~15–20 minutes", and "Signed in as Ramiro QA".
- [ ] "Start review" is visible and clickable.

## 2. Complete fake decisions across multiple Qs

- [ ] Click "Start review" — lands on the first item (Q2).
- [ ] Active seed and manifest contain zero questions; no retired question appears in navigation.
- [ ] Page preview image loads and matches the stated page number for at least 3 different items.
- [ ] Select a decision (any of the 4) on at least 4 different items using a mix of decision types.
- [ ] Sidebar checkmarks (✓) update immediately for each answered item, and the progress count/bar updates.

## 3. Add/change comments

- [ ] On one item, type a comment and stop typing — confirm the save indicator shows "Saving…" then "Saved ✓" within ~1–2 seconds without clicking any separate save button.
- [ ] On an item with decision = APPROVE, confirm the comment box is usable but not required (no red validation, "(optional)" label visible).
- [ ] On an item with decision = CHANGE/REMOVE/NEEDS_MORE_EVIDENCE, confirm the placeholder text encourages a comment but does not block navigation if left blank.

## 4. Close browser

- [ ] Fully quit the browser (not just the tab) after step 3.

## 5. Reopen browser

- [ ] Open the app URL again (bare URL — no `?token=`, since the cookie should still be set).

## 6. Confirm persistence

- [ ] You land signed in (no redirect to `/login`).
- [ ] Intro screen (or, if you navigate straight to review, the sidebar) shows the same completed count as before closing the browser.
- [ ] Every decision and comment you entered in step 2–3 is still there, unchanged.

## 7. Open from another browser/device (if deployed)

- [ ] On a different browser (or a different device, e.g. phone), visit `https://<your-app>/?token=<QA_ACCESS_TOKEN>`.
- [ ] Confirm the same "Ramiro QA" answers appear — proves persistence is server-side (Supabase), not per-browser `localStorage`.
- [ ] *(Skip this step with a note if testing only `localhost` — there's no second device to test from.)*

## 8. Change an existing answer

- [ ] Reopen an already-answered item (via sidebar or "Reopen" on the completion screen once you get there).
- [ ] Change its decision to a different value and/or edit its comment.
- [ ] Confirm "Saving…" → "Saved ✓" appears again.
- [ ] Reload the page and confirm the new value persisted (not the old one).

## 9. Export JSON

- [ ] Answer all remaining items so the completion screen appears ("Review complete").
- [ ] Click "Export JSON" — a `.json` file downloads.
- [ ] Open it: confirm `report_version` = `SDA-ADMIN-2026`, `reviewer_name` = `Ramiro QA`, `exported_at` is a current timestamp, and `items` contains all 5 review IDs with the decisions/comments you actually entered.

## 10. Export CSV

- [ ] Click "Export CSV" — a `.csv` file downloads.
- [ ] Open it (spreadsheet app or text editor): one header row, 5 data rows, columns include `review_id, page_number, page_title, topic, decision, comment, pages_affected, created_at, updated_at, report_version, reviewer_name`. Commas/quotes inside comments don't break columns.

## 11. Export DECISIONS.md

- [ ] Click "Export DECISIONS.md" — a `.md` file downloads.
- [ ] Open it: starts with `# Steve Review — Specialist Disability Accommodation Administration & Special Situations Report 2026`, a header block with report version / reviewer / export timestamp / summary counts, then one `## Q# — Topic` section per item with Decision, Comment, and (where relevant) Affected pages — human-readable, no raw claim/evidence IDs.

## 12. Verify exported content matches current database state

- [ ] Pick 2–3 items at random. Compare their decision/comment in all three exports (JSON, CSV, DECISIONS.md) against what's currently shown in the app UI for those items. All three must agree with each other and with the UI.
- [ ] (Optional, if you have Supabase dashboard access) Open **Table Editor → review_responses**, filter `reviewer_name = 'Ramiro QA'`, and confirm the same values are there — this is the actual system of record the exports and UI both read from.

## 13. Verify no other report version is affected

- [ ] (Requires Supabase dashboard access, or `../supabase/migrations` knowledge) Confirm `review_responses` has no rows for any `report_version` other than `SDA-ADMIN-2026` that you didn't put there yourself — this app only ever reads/writes the hard-coded current version, so a future `v0.3` (or a differently-versioned test) cannot appear here by accident.
- [ ] Confirm `reviewer_name = 'Steve'` rows (if any already exist from a real review) were **not** modified by anything in this QA pass — QA writes only ever touch `reviewer_name = 'Ramiro QA'`.

## Sign-off

- [ ] All items above pass (or documented exceptions noted below).
- [ ] Ready to issue Steve his real link (`?token=<REVIEW_ACCESS_TOKEN>`).

**Notes / exceptions:**

_(fill in)_

**Tested by:** ______________  **Date:** ______________  **Deployment tested:** ☐ local ☐ Vercel — URL: ______________

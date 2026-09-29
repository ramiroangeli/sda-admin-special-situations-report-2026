// Hard-coded per task requirement — every stored response and every export
// carries this so a future report iteration never silently mixes with or
// overwrites this review's context. Bump this only when a genuinely new
// report version needs its own, separate review pass — and when you do,
// archive the previous version's review_manifest.yaml and app state rather
// than versioning the string in place (see 00.project/changelog.md's
// versioning rule).
export const REPORT_VERSION = "SDA-ADMIN-2026";

export const REPORT_TITLE = "Specialist Disability Accommodation Administration & Special Situations Report 2026";

export const DECISION_VALUES = ["APPROVE", "CHANGE", "REMOVE", "NEEDS_MORE_EVIDENCE"];

export const DECISION_LABELS = {
  APPROVE: "Approve",
  CHANGE: "Change",
  REMOVE: "Remove",
  NEEDS_MORE_EVIDENCE: "Needs more evidence",
};

// Active review order follows the generated manifest seed.
import reviewItems from "../data/review_items.json";
export const REVIEW_ID_ORDER = reviewItems.map((item) => item.review_id);

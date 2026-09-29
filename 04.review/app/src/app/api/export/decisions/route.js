import { NextResponse } from "next/server";
import { getCurrentReviewerName } from "@/lib/reviewer";
import { getExportBundle } from "@/lib/exportData";
import { DECISION_LABELS } from "@/lib/constants";

function titleCase(s) {
  return s.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1));
}

function toMarkdown(bundle) {
  const lines = [];
  lines.push(`# Steve Review — ${bundle.report_title}`);
  lines.push("");
  lines.push(`Report version: ${bundle.report_version}`);
  lines.push(`Reviewer: ${bundle.reviewer_name}`);
  lines.push(`Exported: ${bundle.exported_at}`);
  lines.push(`Answered: ${bundle.answered_items} of ${bundle.total_items}`);
  lines.push(
    `Summary: Approved ${bundle.summary.APPROVE} · Change ${bundle.summary.CHANGE} · ` +
      `Remove ${bundle.summary.REMOVE} · Needs more evidence ${bundle.summary.NEEDS_MORE_EVIDENCE}`
  );
  lines.push("");

  for (const item of bundle.items) {
    lines.push(`## ${item.review_id} — ${titleCase(item.topic)}`);
    lines.push("");
    lines.push(`Page: ${item.page_number} — ${item.page_title ?? ""}`);
    lines.push("");
    lines.push(`Decision: ${item.decision ? DECISION_LABELS[item.decision] : "(not yet answered)"}`);
    lines.push("");
    lines.push("Comment:");
    lines.push(item.comment && item.comment.trim() ? item.comment.trim() : "(none)");
    lines.push("");
    if (item.pages_affected && item.pages_affected.length) {
      lines.push("Affected pages:");
      lines.push(item.pages_affected.join(", "));
      lines.push("");
    }
    lines.push("---");
    lines.push("");
  }

  return lines.join("\n");
}

export async function GET() {
  const reviewer = getCurrentReviewerName();
  if (!reviewer) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const bundle = await getExportBundle(reviewer);
  const md = toMarkdown(bundle);
  const filename = `DECISIONS-${bundle.report_version}-${reviewer.replace(/\s+/g, "-")}.md`;

  return new NextResponse(md, {
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}

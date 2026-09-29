import { NextResponse } from "next/server";
import { getCurrentReviewerName } from "@/lib/reviewer";
import { getExportBundle } from "@/lib/exportData";

function csvEscape(value) {
  const s = value === null || value === undefined ? "" : String(value);
  if (/[",\n]/.test(s)) {
    return `"${s.replace(/"/g, '""')}"`;
  }
  return s;
}

function toCsv(bundle) {
  const headers = [
    "review_id",
    "page_number",
    "page_title",
    "topic",
    "decision",
    "comment",
    "pages_affected",
    "created_at",
    "updated_at",
    "report_version",
    "reviewer_name",
  ];
  const lines = [headers.join(",")];
  for (const item of bundle.items) {
    lines.push(
      [
        item.review_id,
        item.page_number,
        item.page_title,
        item.topic,
        item.decision ?? "",
        item.comment ?? "",
        (item.pages_affected || []).join("; "),
        item.created_at ?? "",
        item.updated_at ?? "",
        bundle.report_version,
        bundle.reviewer_name,
      ]
        .map(csvEscape)
        .join(",")
    );
  }
  return lines.join("\r\n") + "\r\n";
}

export async function GET() {
  const reviewer = getCurrentReviewerName();
  if (!reviewer) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const bundle = await getExportBundle(reviewer);
  const csv = toCsv(bundle);
  const filename = `steve-review-${bundle.report_version}-${reviewer.replace(/\s+/g, "-")}.csv`;

  return new NextResponse(csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}

import { NextResponse } from "next/server";
import { getCurrentReviewerName } from "@/lib/reviewer";
import { getExportBundle } from "@/lib/exportData";

export async function GET() {
  const reviewer = getCurrentReviewerName();
  if (!reviewer) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const bundle = await getExportBundle(reviewer);
  const filename = `steve-review-${bundle.report_version}-${reviewer.replace(/\s+/g, "-")}.json`;

  return new NextResponse(JSON.stringify(bundle, null, 2), {
    headers: {
      "Content-Type": "application/json",
      "Content-Disposition": `attachment; filename="${filename}"`,
    },
  });
}

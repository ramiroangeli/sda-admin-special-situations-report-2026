import { redirect } from "next/navigation";
import { getCurrentReviewerName } from "@/lib/reviewer";

export const dynamic = "force-dynamic";

export default function FullReportPage() {
  if (!getCurrentReviewerName()) redirect("/login");

  return (
    <div>
      <div className="report-toolbar">
        <strong>Full report — for context only</strong>
        <a href="/" className="btn">
          Back to review
        </a>
      </div>
      <iframe src="/report/full-report.pdf" title="Full report" className="report-embed" />
    </div>
  );
}

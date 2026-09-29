import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { REPORT_VERSION, REPORT_TITLE } from "@/lib/constants";
import reviewItems from "@/data/review_items.json";

// Shared by all three export routes (json/csv/decisions) and by the
// completion-screen summary in the UI, so every export reads from exactly
// the same query as what the reviewer sees on screen.
export async function getExportBundle(reviewerName) {
  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("review_responses")
    .select("review_id, page_number, decision, comment, resolved, created_at, updated_at")
    .eq("report_version", REPORT_VERSION)
    .eq("reviewer_name", reviewerName);

  if (error) throw new Error(error.message);

  const responseByReviewId = new Map((data ?? []).map((r) => [r.review_id, r]));

  const items = reviewItems.map((item) => {
    const r = responseByReviewId.get(item.review_id);
    return {
      review_id: item.review_id,
      page_number: item.page_number,
      page_title: item.page_title,
      topic: item.topic,
      current_working_view: item.current_working_view,
      decision_required: item.decision_required,
      pages_affected: item.pages_affected,
      decision: r?.decision ?? null,
      comment: r?.comment ?? "",
      created_at: r?.created_at ?? null,
      updated_at: r?.updated_at ?? null,
    };
  });

  const summary = { APPROVE: 0, CHANGE: 0, REMOVE: 0, NEEDS_MORE_EVIDENCE: 0 };
  let answered = 0;
  for (const item of items) {
    if (item.decision) {
      summary[item.decision] += 1;
      answered += 1;
    }
  }

  return {
    report_title: REPORT_TITLE,
    report_version: REPORT_VERSION,
    reviewer_name: reviewerName,
    exported_at: new Date().toISOString(),
    total_items: items.length,
    answered_items: answered,
    summary,
    items,
  };
}

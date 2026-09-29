import { NextResponse } from "next/server";
import { getSupabaseServerClient } from "@/lib/supabaseServer";
import { getCurrentReviewerName } from "@/lib/reviewer";
import { REPORT_VERSION, DECISION_VALUES, REVIEW_ID_ORDER } from "@/lib/constants";

export async function GET() {
  const reviewer = getCurrentReviewerName();
  if (!reviewer) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("review_responses")
    .select("review_id, page_number, decision, comment, resolved, created_at, updated_at")
    .eq("report_version", REPORT_VERSION)
    .eq("reviewer_name", reviewer);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reviewer, report_version: REPORT_VERSION, responses: data ?? [] });
}

export async function POST(request) {
  const reviewer = getCurrentReviewerName();
  if (!reviewer) {
    return NextResponse.json({ error: "Not authenticated." }, { status: 401 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const { review_id, page_number, decision, comment } = body ?? {};

  if (!REVIEW_ID_ORDER.includes(review_id)) {
    return NextResponse.json({ error: `Unknown review_id: ${review_id}` }, { status: 400 });
  }
  if (!DECISION_VALUES.includes(decision)) {
    return NextResponse.json({ error: `Unknown decision: ${decision}` }, { status: 400 });
  }
  if (typeof page_number !== "number") {
    return NextResponse.json({ error: "page_number must be a number." }, { status: 400 });
  }

  const supabase = getSupabaseServerClient();
  const { data, error } = await supabase
    .from("review_responses")
    .upsert(
      {
        report_version: REPORT_VERSION,
        review_id,
        page_number,
        reviewer_name: reviewer,
        decision,
        comment: typeof comment === "string" ? comment : "",
        resolved: true,
      },
      { onConflict: "report_version,review_id,reviewer_name" }
    )
    .select("review_id, page_number, decision, comment, resolved, created_at, updated_at")
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ reviewer, report_version: REPORT_VERSION, response: data });
}

import { redirect } from "next/navigation";
import { getCurrentReviewerName } from "@/lib/reviewer";
import { isSupabaseConfigured } from "@/lib/supabaseServer";
import ReviewClient from "./ReviewClient";
import reviewItems from "@/data/review_items.json";
import { REPORT_VERSION, REPORT_TITLE } from "@/lib/constants";

export const dynamic = "force-dynamic";

export default function Home() {
  const reviewer = getCurrentReviewerName();
  if (!reviewer) {
    // Middleware should already guarantee this, but fail safe rather than
    // rendering a broken authenticated view if the cookie is somehow gone.
    redirect("/login");
  }

  return (
    <ReviewClient
      reviewer={reviewer}
      reportVersion={REPORT_VERSION}
      reportTitle={REPORT_TITLE}
      items={reviewItems}
      supabaseConfigured={isSupabaseConfigured()}
    />
  );
}

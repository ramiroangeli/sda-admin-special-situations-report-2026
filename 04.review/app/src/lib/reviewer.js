import { cookies } from "next/headers";
import { AUTH_COOKIE_NAME, validTokenReviewerName } from "@/lib/auth";

// Server-only. The reviewer name is always derived from the verified auth
// cookie, never from a client-supplied field — this stops one reviewer from
// spoofing another's identity by editing a request body. Middleware already
// guarantees this cookie is valid for any request that reaches a page or API
// route, but route handlers re-derive it independently rather than trusting
// that invariant blindly.
export function getCurrentReviewerName() {
  const token = cookies().get(AUTH_COOKIE_NAME)?.value;
  return validTokenReviewerName(token);
}

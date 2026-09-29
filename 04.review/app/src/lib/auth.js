// Shared-token access control (see README.md "Access / security").
//
// There is no user account system — Steve gets one private link containing
// a long random token. Visiting it (or entering the token on /login) sets a
// long-lived httpOnly cookie so he is never asked again on that device.
// A separate QA_ACCESS_TOKEN exists so Ramiro's dry-run testing writes to
// reviewer_name "Ramiro QA" instead of "Steve", keeping test data and real
// review data in entirely separate rows (see supabase/migrations/0001_init.sql).

export const AUTH_COOKIE_NAME = "steve_review_token";
export const AUTH_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 180; // ~6 months

export function validTokenReviewerName(token) {
  if (!token) return null;

  const reviewToken = process.env.REVIEW_ACCESS_TOKEN;
  const qaToken = process.env.QA_ACCESS_TOKEN;

  if (reviewToken && token === reviewToken) return "Steve";
  if (qaToken && token === qaToken) return "Ramiro QA";
  // Fall back: if only REVIEW_ACCESS_TOKEN is configured, let it double as
  // the QA token too (documented in .env.example) — but then QA and Steve
  // would collide under the same reviewer_name, so this fallback only kicks
  // in when QA_ACCESS_TOKEN is genuinely unset.
  if (!qaToken && reviewToken && token === reviewToken) return "Steve";

  return null;
}

export function isAuthConfigured() {
  return Boolean(process.env.REVIEW_ACCESS_TOKEN);
}

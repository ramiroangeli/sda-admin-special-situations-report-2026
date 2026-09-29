import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, AUTH_COOKIE_MAX_AGE_SECONDS, validTokenReviewerName } from "@/lib/auth";

const PUBLIC_PATHS = ["/login", "/api/auth"];

export function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  if (PUBLIC_PATHS.some((p) => pathname === p || pathname.startsWith(p + "/"))) {
    return NextResponse.next();
  }

  const cookieToken = request.cookies.get(AUTH_COOKIE_NAME)?.value;
  if (validTokenReviewerName(cookieToken)) {
    return NextResponse.next();
  }

  const queryToken = searchParams.get("token");
  const reviewerFromQuery = validTokenReviewerName(queryToken);
  if (reviewerFromQuery) {
    // Valid token in the URL: set the cookie and redirect to the clean URL
    // (same path, no ?token=...) so it never ends up in browser history,
    // bookmarks, or shared/copied links.
    const cleanUrl = request.nextUrl.clone();
    cleanUrl.searchParams.delete("token");
    const response = NextResponse.redirect(cleanUrl);
    response.cookies.set(AUTH_COOKIE_NAME, queryToken, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: AUTH_COOKIE_MAX_AGE_SECONDS,
      path: "/",
    });
    return response;
  }

  const loginUrl = request.nextUrl.clone();
  loginUrl.pathname = "/login";
  loginUrl.search = "";
  return NextResponse.redirect(loginUrl);
}

// Note: this intentionally also matches /page-renders/* and /report/* (the
// page-preview PNGs and the full report PDF in public/) — those are
// unpublished report content too and must sit behind the same token gate as
// everything else, not be served as unauthenticated static files.
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};

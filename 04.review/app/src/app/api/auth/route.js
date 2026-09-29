import { NextResponse } from "next/server";
import { AUTH_COOKIE_NAME, AUTH_COOKIE_MAX_AGE_SECONDS, validTokenReviewerName } from "@/lib/auth";

export async function POST(request) {
  const form = await request.formData();
  const token = String(form.get("token") || "").trim();

  const reviewer = validTokenReviewerName(token);
  if (!reviewer) {
    const url = new URL("/login?error=1", request.url);
    return NextResponse.redirect(url, { status: 303 });
  }

  const url = new URL("/", request.url);
  const response = NextResponse.redirect(url, { status: 303 });
  response.cookies.set(AUTH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: AUTH_COOKIE_MAX_AGE_SECONDS,
    path: "/",
  });
  return response;
}

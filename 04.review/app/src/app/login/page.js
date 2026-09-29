export const dynamic = "force-dynamic";

export default function LoginPage({ searchParams }) {
  const hasError = searchParams?.error === "1";

  return (
    <div className="auth-screen">
      <div className="auth-card">
        <p className="auth-eyebrow">SDAHC Research — Internal</p>
        <h1 className="auth-title">Steve Review</h1>
        <p className="auth-sub">
          This is a private review link for the SDA Administration &amp; Special
          Situations Report 2026. Enter your access token to continue.
        </p>
        <form method="POST" action="/api/auth" className="auth-form">
          <label htmlFor="token" className="auth-label">
            Access token
          </label>
          <input
            id="token"
            name="token"
            type="password"
            autoComplete="off"
            autoFocus
            className="auth-input"
            placeholder="Paste your token"
          />
          {hasError && (
            <p className="auth-error" role="alert">
              That token wasn&apos;t recognised. Check the link you were given, or
              contact Ramiro.
            </p>
          )}
          <button type="submit" className="btn btn-primary auth-submit">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

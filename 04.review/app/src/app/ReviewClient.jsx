"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { DECISION_LABELS, DECISION_VALUES } from "@/lib/constants";

const SAVE_DEBOUNCE_MS = 700;

function pageRenderSrc(pageNumber) {
  return `/page-renders/page-${String(pageNumber).padStart(2, "0")}.png`;
}

export default function ReviewClient({ reviewer, reportVersion, reportTitle, items, supabaseConfigured }) {
  const [screen, setScreen] = useState("intro"); // intro | review | complete
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({}); // review_id -> { decision, comment }
  const [saveStatus, setSaveStatus] = useState({}); // review_id -> 'saving' | 'saved' | 'error'
  const [loaded, setLoaded] = useState(false);
  const [loadError, setLoadError] = useState(null);

  const timers = useRef({});

  useEffect(() => {
    if (items.length === 0) { setLoaded(true); return; }
    let cancelled = false;
    fetch("/api/responses")
      .then((r) => {
        if (!r.ok) throw new Error(`Failed to load saved responses (${r.status}).`);
        return r.json();
      })
      .then((data) => {
        if (cancelled) return;
        const map = {};
        for (const r of data.responses || []) {
          map[r.review_id] = { decision: r.decision, comment: r.comment || "" };
        }
        setResponses(map);
        setLoaded(true);
      })
      .catch((err) => {
        if (cancelled) return;
        setLoadError(err.message);
        setLoaded(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const answeredCount = useMemo(
    () => items.filter((it) => responses[it.review_id]?.decision).length,
    [items, responses]
  );
  const allAnswered = answeredCount === items.length;

  const persist = useCallback(
    async (reviewId, pageNumber, decision, comment) => {
      if (!decision) return;
      setSaveStatus((s) => ({ ...s, [reviewId]: "saving" }));
      try {
        const res = await fetch("/api/responses", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ review_id: reviewId, page_number: pageNumber, decision, comment }),
        });
        if (!res.ok) throw new Error("save failed");
        setSaveStatus((s) => ({ ...s, [reviewId]: "saved" }));
      } catch {
        setSaveStatus((s) => ({ ...s, [reviewId]: "error" }));
      }
    },
    []
  );

  const setDecision = useCallback(
    (item, decision) => {
      setResponses((prev) => {
        const next = { ...prev, [item.review_id]: { decision, comment: prev[item.review_id]?.comment || "" } };
        persist(item.review_id, item.page_number, decision, next[item.review_id].comment);
        return next;
      });
    },
    [persist]
  );

  const setComment = useCallback(
    (item, comment) => {
      setResponses((prev) => ({
        ...prev,
        [item.review_id]: { decision: prev[item.review_id]?.decision || null, comment },
      }));
      const existing = responses[item.review_id];
      const decision = existing?.decision;
      if (!decision) return; // nothing to save yet — comment is buffered locally until a decision is chosen
      clearTimeout(timers.current[item.review_id]);
      timers.current[item.review_id] = setTimeout(() => {
        persist(item.review_id, item.page_number, decision, comment);
      }, SAVE_DEBOUNCE_MS);
    },
    [persist, responses]
  );

  const retrySave = useCallback(
    (item) => {
      const r = responses[item.review_id];
      if (r?.decision) persist(item.review_id, item.page_number, r.decision, r.comment || "");
    },
    [persist, responses]
  );

  function startReview() {
    if (allAnswered) {
      setScreen("complete");
      return;
    }
    const firstOpen = items.findIndex((it) => !responses[it.review_id]?.decision);
    setCurrentIndex(firstOpen >= 0 ? firstOpen : 0);
    setScreen("review");
  }

  function goToItem(index) {
    setCurrentIndex(index);
    setScreen("review");
  }

  function goNext() {
    if (currentIndex < items.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else if (allAnswered) {
      setScreen("complete");
    }
  }

  function goPrev() {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  }

  if (items.length === 0) {
    return (
      <div className="intro-screen">
        <h1>No outstanding review questions</h1>
        <p>The current report has no unresolved Steve review items.</p>
        <a className="btn btn-primary" href="/report/full-report.pdf">View current report</a>
      </div>
    );
  }

  if (!loaded) {
    return (
      <div className="intro-screen">
        <p style={{ color: "var(--text-muted)" }}>Loading…</p>
      </div>
    );
  }

  if (screen === "intro") {
    return (
      <IntroScreen
        reviewer={reviewer}
        reportTitle={reportTitle}
        onStart={startReview}
        loadError={loadError}
        supabaseConfigured={supabaseConfigured}
        answeredCount={answeredCount}
        total={items.length}
      />
    );
  }

  if (screen === "complete") {
    return (
      <AppShell
        items={items}
        responses={responses}
        currentIndex={currentIndex}
        goToItem={goToItem}
        answeredCount={answeredCount}
        allAnswered={allAnswered}
        reviewer={reviewer}
      >
        <CompleteScreen items={items} responses={responses} onReopen={goToItem} />
      </AppShell>
    );
  }

  const item = items[currentIndex];
  const r = responses[item.review_id] || { decision: null, comment: "" };
  const status = saveStatus[item.review_id];

  return (
    <AppShell
      items={items}
      responses={responses}
      currentIndex={currentIndex}
      goToItem={goToItem}
      answeredCount={answeredCount}
      allAnswered={allAnswered}
      reviewer={reviewer}
    >
      <div className="topbar">
        <span className="topbar-title">
          Item {currentIndex + 1} of {items.length}
        </span>
        <SaveIndicator status={status} decisionPicked={Boolean(r.decision)} onRetry={() => retrySave(item)} />
      </div>

      <div className="item-card">
        <div className="preview-col">
          <div className="preview-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={pageRenderSrc(item.page_number)} alt={`Report page ${item.page_number} preview`} />
          </div>
          <p className="preview-caption">
            Page {item.page_number} — {item.page_title}
          </p>
        </div>

        <div className="form-col">
          <p className="item-kicker">{item.review_id}</p>
          <h1 className="item-title">{item.topic}</h1>
          <p className="item-page">Page {item.page_number} — {item.page_title}</p>

          <div className="field-block">
            <p className="field-label">Current working view</p>
            <p className="field-text">{item.current_working_view}</p>
          </div>

          <div className="field-block">
            <p className="field-label">Decision required</p>
            <p className="field-text">{item.decision_required}</p>
          </div>

          {item.pages_affected?.length > 1 && (
            <div className="field-block">
              <p className="field-label">Also relevant to pages</p>
              <p className="field-text">{item.pages_affected.join(", ")}</p>
            </div>
          )}

          <div className="field-block">
            <p className="field-label">Your decision</p>
            <div className="decision-group">
              {DECISION_VALUES.map((d) => (
                <button
                  key={d}
                  type="button"
                  className={`decision-btn${r.decision === d ? ` selected--${d}` : ""}`}
                  onClick={() => setDecision(item, d)}
                >
                  {DECISION_LABELS[d]}
                </button>
              ))}
            </div>
            {!r.decision && <p className="comment-hint">Pick a decision to enable saving.</p>}
          </div>

          <div className="field-block">
            <p className="field-label">
              Comment {r.decision === "APPROVE" ? "(optional)" : ""}
            </p>
            <textarea
              className="comment-box"
              placeholder={
                r.decision && r.decision !== "APPROVE"
                  ? "A short comment helps — what should change, what's missing, or what evidence is needed?"
                  : "Optional comment"
              }
              value={r.comment}
              onChange={(e) => setComment(item, e.target.value)}
              disabled={!r.decision}
            />
          </div>

          <div className="nav-buttons">
            <button type="button" className="btn" onClick={goPrev} disabled={currentIndex === 0}>
              ← Previous
            </button>
            {currentIndex === items.length - 1 ? (
              <button type="button" className="btn btn-primary" onClick={goNext} disabled={!allAnswered}>
                Finish review
              </button>
            ) : (
              <button type="button" className="btn btn-primary" onClick={goNext}>
                Next →
              </button>
            )}
          </div>
        </div>
      </div>
    </AppShell>
  );
}

function SaveIndicator({ status, decisionPicked, onRetry }) {
  if (!decisionPicked) {
    return <span className="save-indicator" style={{ color: "var(--text-subtle)" }}>Not yet answered</span>;
  }
  if (status === "saving") return <span className="save-indicator save-indicator--saving">Saving…</span>;
  if (status === "error")
    return (
      <span className="save-indicator save-indicator--error">
        Error saving —{" "}
        <button type="button" className="btn-ghost btn" style={{ padding: "2px 8px" }} onClick={onRetry}>
          Retry
        </button>
      </span>
    );
  return <span className="save-indicator save-indicator--saved">Saved ✓</span>;
}

function IntroScreen({ reviewer, reportTitle, onStart, loadError, supabaseConfigured, answeredCount, total }) {
  return (
    <div className="intro-screen">
      <div className="intro-card">
        <p className="intro-eyebrow">SDAHC Research — Internal Review</p>
        <span className="intro-status">Internal review — not for distribution</span>
        <h1 className="intro-title">{reportTitle}</h1>
        <p className="intro-body">
          This first report draft has already been researched, structured and visually
          developed. Your review is focused on nine specific commercial judgement points
          where direct SDAHC experience is more valuable than further desk research.
        </p>
        <div className="intro-meta">
          Estimated review time: approximately 15–20 minutes.
          {answeredCount > 0 && (
            <>
              <br />
              You have {answeredCount} of {total} already answered — picking up where you left off.
            </>
          )}
          <br />
          Signed in as <strong>{reviewer}</strong>.
        </div>
        {!supabaseConfigured && (
          <p style={{ color: "var(--red)", fontSize: 13, marginBottom: 16 }}>
            Warning: Supabase is not configured on this deployment — your answers will not be saved.
            See README.md.
          </p>
        )}
        {loadError && (
          <p style={{ color: "var(--red)", fontSize: 13, marginBottom: 16 }}>
            Couldn&apos;t load previous answers ({loadError}). You can still review, but check your
            connection.
          </p>
        )}
        <button type="button" className="btn btn-primary intro-start" onClick={onStart}>
          Start review
        </button>
      </div>
    </div>
  );
}

function AppShell({ items, responses, currentIndex, goToItem, answeredCount, allAnswered, reviewer, children }) {
  const pct = Math.round((answeredCount / items.length) * 100);
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <p className="sidebar-title">Review progress</p>
        <p className="sidebar-progress">
          {answeredCount} of {items.length} complete
        </p>
        <div className="progress-bar">
          <div className="progress-bar__fill" style={{ width: `${pct}%` }} />
        </div>
        <ul className="nav-list">
          {items.map((it, idx) => {
            const done = Boolean(responses[it.review_id]?.decision);
            return (
              <li key={it.review_id}>
                <button
                  type="button"
                  className={`nav-item${idx === currentIndex ? " active" : ""}`}
                  onClick={() => goToItem(idx)}
                >
                  <span className={`nav-item__mark ${done ? "nav-item__mark--done" : "nav-item__mark--open"}`}>
                    {done ? "✓" : "○"}
                  </span>
                  <span className="nav-item__label">
                    {it.review_id} {it.topic}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="sidebar-footer">
          {allAnswered && (
            <span style={{ fontSize: 12, color: "var(--green)", fontWeight: 600 }}>
              ✓ All 9 answered
            </span>
          )}
          <a href="/report" target="_blank" rel="noreferrer" className="btn">
            View full report
          </a>
          <p style={{ fontSize: 11.5, color: "var(--text-subtle)", margin: "4px 0 0" }}>
            Reviewing as {reviewer}
          </p>
        </div>
      </aside>
      <main className="main-pane">{children}</main>
    </div>
  );
}

function CompleteScreen({ items, responses, onReopen }) {
  const summary = { APPROVE: 0, CHANGE: 0, REMOVE: 0, NEEDS_MORE_EVIDENCE: 0 };
  for (const it of items) {
    const d = responses[it.review_id]?.decision;
    if (d) summary[d] += 1;
  }

  return (
    <div className="complete-card">
      <h1 className="complete-title">Review complete</h1>
      <p className="complete-sub">
        All {items.length} items have a decision. You can still reopen and change any of them —
        nothing is locked.
      </p>

      <div className="summary-grid">
        <div className="summary-stat">
          <div className="summary-stat__num">{summary.APPROVE}</div>
          <div className="summary-stat__label">Approved</div>
        </div>
        <div className="summary-stat">
          <div className="summary-stat__num">{summary.CHANGE}</div>
          <div className="summary-stat__label">Change</div>
        </div>
        <div className="summary-stat">
          <div className="summary-stat__num">{summary.REMOVE}</div>
          <div className="summary-stat__label">Remove</div>
        </div>
        <div className="summary-stat">
          <div className="summary-stat__num">{summary.NEEDS_MORE_EVIDENCE}</div>
          <div className="summary-stat__label">Needs evidence</div>
        </div>
      </div>

      <p className="field-label" style={{ marginBottom: 10 }}>
        Export
      </p>
      <div className="export-row">
        <a className="btn" href="/api/export/json">
          Export JSON
        </a>
        <a className="btn" href="/api/export/csv">
          Export CSV
        </a>
        <a className="btn" href="/api/export/decisions">
          Export DECISIONS.md
        </a>
      </div>

      <p className="field-label" style={{ marginBottom: 10 }}>
        All answers
      </p>
      <ul className="complete-list">
        {items.map((it, idx) => {
          const r = responses[it.review_id];
          return (
            <li key={it.review_id}>
              <span>
                <strong>{it.review_id}</strong> — {it.topic} —{" "}
                {r?.decision ? DECISION_LABELS[r.decision] : "—"}
              </span>
              <button type="button" onClick={() => onReopen(idx)}>
                Reopen
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

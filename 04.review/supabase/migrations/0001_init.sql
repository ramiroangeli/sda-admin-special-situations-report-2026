-- Steve Review App — initial schema
-- SDA Administration & Special Situations Report 2026
-- Run this once against your Supabase project (see README.md "Supabase setup").

-- Supabase projects have this enabled by default, but declared explicitly
-- (idempotent) so this migration doesn't depend on that default silently.
create extension if not exists pgcrypto;

-- ─────────────────────────────────────────────────────────────────────────
-- review_responses: one row per (report_version, review_id, reviewer_name).
-- This is the system of record. updated_at advances on every edit so the
-- same reviewer can reopen and change an answer without losing the audit
-- trail (full history of changes is kept separately, see below).
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists review_responses (
  id uuid primary key default gen_random_uuid(),
  report_version text not null,
  review_id text not null,
  page_number integer not null,
  reviewer_name text not null,
  decision text not null check (decision in ('APPROVE', 'CHANGE', 'REMOVE', 'NEEDS_MORE_EVIDENCE')),
  comment text not null default '',
  resolved boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (report_version, review_id, reviewer_name)
);

comment on table review_responses is
  'Current decision per review item per reviewer per report version. Upserted on (report_version, review_id, reviewer_name).';
comment on column review_responses.report_version is
  'Hard-coded app constant, e.g. SDA-ADMIN-2026-VISUAL-v0.2 — keeps future report iterations from silently overwriting this review context.';
comment on column review_responses.resolved is
  'True once a decision has been recorded for this item; false is reserved for a future "flagged for later" state and is not currently set by the UI.';

create index if not exists review_responses_version_idx on review_responses (report_version);
create index if not exists review_responses_reviewer_idx on review_responses (report_version, reviewer_name);

-- ─────────────────────────────────────────────────────────────────────────
-- review_response_history: append-only audit log. A row is inserted here
-- every time review_responses is inserted or updated, via trigger below —
-- the UI and API never write to this table directly.
-- ─────────────────────────────────────────────────────────────────────────

create table if not exists review_response_history (
  id uuid primary key default gen_random_uuid(),
  response_id uuid not null references review_responses (id) on delete cascade,
  report_version text not null,
  review_id text not null,
  reviewer_name text not null,
  decision text not null,
  comment text not null default '',
  changed_at timestamptz not null default now()
);

comment on table review_response_history is
  'Append-only audit trail — one row per save of review_responses, oldest first. Never updated or deleted by the app.';

create index if not exists review_response_history_response_idx on review_response_history (response_id, changed_at);

create or replace function log_review_response_change()
returns trigger
language plpgsql
as $$
begin
  insert into review_response_history (
    response_id, report_version, review_id, reviewer_name, decision, comment, changed_at
  ) values (
    new.id, new.report_version, new.review_id, new.reviewer_name, new.decision, new.comment, new.updated_at
  );
  return new;
end;
$$;

drop trigger if exists review_responses_audit on review_responses;
create trigger review_responses_audit
  after insert or update on review_responses
  for each row
  execute function log_review_response_change();

-- ─────────────────────────────────────────────────────────────────────────
-- updated_at maintenance
-- ─────────────────────────────────────────────────────────────────────────

create or replace function set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists review_responses_set_updated_at on review_responses;
create trigger review_responses_set_updated_at
  before update on review_responses
  for each row
  execute function set_updated_at();

-- ─────────────────────────────────────────────────────────────────────────
-- Row Level Security: locked down. All access goes through the Next.js API
-- routes using the service_role key (server-side only — see
-- src/lib/supabaseServer.js), which bypasses RLS by design. No anon/public
-- policies are created, so a leaked anon key (there isn't one used by this
-- app, but as a safety net) grants no access at all.
-- ─────────────────────────────────────────────────────────────────────────

alter table review_responses enable row level security;
alter table review_response_history enable row level security;
-- Intentionally no policies: default-deny for anon/authenticated roles.

import { createClient } from "@supabase/supabase-js";

// Server-only Supabase client, using the service_role key. This file must
// never be imported from a "use client" component — it is only used inside
// API routes (src/app/api/**/route.js), which run on the server. The
// service_role key bypasses Row Level Security by design (see
// supabase/migrations/0001_init.sql, which enables RLS with no policies —
// default-deny for anyone using the anon key instead).
let cachedClient = null;

export function getSupabaseServerClient() {
  if (cachedClient) return cachedClient;

  const url = process.env.SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "Supabase is not configured. Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY " +
        "(copy .env.example to .env.local for local dev, or set them in the Vercel " +
        "project's Environment Variables for deployment)."
    );
  }

  cachedClient = createClient(url, serviceRoleKey, {
    auth: { persistSession: false },
  });
  return cachedClient;
}

export function isSupabaseConfigured() {
  return Boolean(process.env.SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

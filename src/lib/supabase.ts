import { createClient, type SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-anon-key";

// Public client (browser + server)
export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Server-only client with service role (bypasses RLS — only use in API routes)
export const supabaseAdmin: SupabaseClient = createClient(
  supabaseUrl,
  process.env.SUPABASE_SERVICE_ROLE_KEY ?? supabaseAnonKey
);

// Helper to check if Supabase is configured
export const isSupabaseConfigured = (): boolean =>
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_URL !== "https://placeholder.supabase.co";

// Types
export interface Lead {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  phone: string;
  company?: string;
  service: string;
  message: string;
  budget?: string;
  locale?: string;
  source?: string;
  status?: "new" | "contacted" | "qualified" | "closed";
}

export interface PageView {
  id?: string;
  created_at?: string;
  page: string;
  locale: string;
  referrer?: string;
  user_agent?: string;
}

export interface BlogPost {
  id?: string;
  created_at?: string;
  slug: string;
  locale: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  category?: string;
  published: boolean;
  published_at?: string;
}

export interface Waitlist {
  id?: string;
  created_at?: string;
  email: string;
  name?: string;
  source?: string;
}

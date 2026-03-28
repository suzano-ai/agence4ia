import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ ok: true }); // Supabase not configured yet
    }

    const { page, locale } = await req.json();
    if (!page) return NextResponse.json({ error: "Missing page" }, { status: 400 });

    await supabaseAdmin.from("page_views").insert({
      page,
      locale: locale ?? "fr",
      referrer: req.headers.get("referer") ?? null,
      user_agent: req.headers.get("user-agent") ?? null,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: true }); // Silent fail
  }
}

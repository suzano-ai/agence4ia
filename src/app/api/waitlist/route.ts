import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";

export async function POST(req: NextRequest) {
  try {
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL) {
      return NextResponse.json({ error: "Supabase not configured" }, { status: 503 });
    }

    const { email, name, source } = await req.json();
    if (!email) return NextResponse.json({ error: "Email required" }, { status: 400 });

    const { error } = await supabaseAdmin.from("waitlist").insert({
      email,
      name: name ?? null,
      source: source ?? "website",
    });

    if (error) {
      if (error.code === "23505") {
        return NextResponse.json({ success: true, already: true }); // Already registered
      }
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function GET() {
  const start = Date.now();

  const checks = {
    status: "ok",
    timestamp: new Date().toISOString(),
    version: process.env.npm_package_version ?? "0.1.0",
    environment: process.env.NODE_ENV ?? "unknown",
    uptime: Math.round(process.uptime()),
    services: {
      resend: process.env.RESEND_API_KEY ? "configured" : "missing",
      notion: process.env.NOTION_API_KEY ? "configured" : "missing",
    },
    latency_ms: Date.now() - start,
  };

  return NextResponse.json(checks, {
    status: 200,
    headers: { "Cache-Control": "no-store" },
  });
}

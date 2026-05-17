import { makeRouteHandler } from "@keystatic/next/route-handler";
import keystaticConfig from "../../../../../keystatic.config";

export const { GET, POST } = makeRouteHandler({ config: keystaticConfig });

// Force Next.js to always render this API route dynamically at runtime.
// This prevents Next.js from prerendering it as a static page during build.
export const dynamic = "force-dynamic";
export const runtime = "nodejs";

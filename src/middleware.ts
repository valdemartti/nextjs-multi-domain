import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const url = req.nextUrl.clone();

	// Skipping public files
	if (/\.(.*)$/.test(url.pathname) || url.pathname.includes("_next")) return;

	const host = req.headers.get("host");
	const domain = getDomain(host);

	if (!domain) return;

	url.pathname = `/${domain}${url.pathname}`;

	return NextResponse.rewrite(url);
}

const getDomain = (host?: string | null) => {
	if (!host || typeof window === "undefined") return null;
	if (!window.location.host) return null;
	if (window.location.host === process.env.APP_HOSTNAME) return null;

	return window.location.host;
};

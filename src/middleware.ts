import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
	const url = req.nextUrl.clone();

	// Skipping public files
	if (/\.(.*)$/.test(url.pathname) || url.pathname.includes("_next")) return;

	console.log(url.host, process.env.APP_HOSTNAME);

	if (url.host === process.env.APP_HOSTNAME) return;

	url.pathname = `/${url.host}${url.pathname}`;

	return NextResponse.rewrite(url);
}

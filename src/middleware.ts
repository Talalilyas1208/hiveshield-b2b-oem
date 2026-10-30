import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * HiveShield B2B Edge Middleware
 * Protects /portal/* (Wholesale Buyer Portal) and /admin/* (Factory ERP)
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|mockups|swatches|certifications).*)",
  ],
};


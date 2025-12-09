import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { ROUTES } from "./lib/constants";

export default clerkMiddleware((auth, req) => {
  const { userId, sessionClaims } = auth();
  const role = sessionClaims?.metadata?.role;
  const pathname = req.nextUrl.pathname;

  // Admin trying to access auth pages → redirect to /admin
  if (
    userId &&
    role === "admin" &&
    (pathname === ROUTES.SIGN_IN || pathname === ROUTES.SIGN_UP)
  ) {
    const adminUrl = req.nextUrl.clone();
    adminUrl.pathname = ROUTES.ADMIN;
    return NextResponse.redirect(adminUrl);
  }

  // Add security headers
  const response = NextResponse.next();
  
  // Prevent clickjacking
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  
  // Prevent MIME type sniffing
  response.headers.set('X-Content-Type-Options', 'nosniff');
  
  return response;
});

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - API routes that don't need auth
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
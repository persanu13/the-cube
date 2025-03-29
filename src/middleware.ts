import authConfig from "@/auth/auth.config";
import NextAuth from "next-auth";
import { authRoutes, publicRoutes } from "./auth/routes";
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const url = process.env.MY_URL;
  const secret = process.env.AUTH_SECRET;
  const token = await getToken({ req, secret });
  const role = token?.role;
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isApiRoute = nextUrl.pathname.includes("/api");
  const isAdminRoute = nextUrl.pathname.includes("/admin");
  const isClientRoute = nextUrl.pathname.includes("/client");

  if (isPublicRoute || isApiRoute) return NextResponse.next();

  if (!isAuthRoute && !isLoggedIn) return NextResponse.redirect(`${url}/auth`);

  if (isAuthRoute && isLoggedIn && role === "ADMIN") {
    console.log("admin");
    return NextResponse.redirect(`${url}/admin`);
  }

  if (!isClientRoute && isLoggedIn && role === "CLIENT")
    return NextResponse.redirect(`${url}/client`);

  if (isAdminRoute && role !== "ADMIN") {
    return NextResponse.redirect(`${url}/`);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

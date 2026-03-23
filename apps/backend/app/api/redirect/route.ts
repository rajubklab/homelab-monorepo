import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const target = searchParams.get("to") || "/";

  const response = NextResponse.redirect(target);

  const session = await auth.api.getSession({ headers: await headers() });

  //   response.headers.set("Access-Control-Allow-Origin", "*");

  //   response.cookies.set("access_token", session?.session?.token ?? "", {
  //     httpOnly: true,
  //     secure: true,
  //     sameSite: "lax",
  //     path: "/",
  //   });
  return response;
};

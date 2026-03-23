import { NextResponse } from "next/server";

export const proxy = () => {
  console.log("Proxying API request");
  const response = NextResponse.next();
  response.headers.set("Access-Control-Allow-Origin", "*");
  return response;
};

export const config = {
  matcher: ["/api/:path*", "/success", "/failed"],
};

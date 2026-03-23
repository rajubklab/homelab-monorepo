import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import prisma from "@/lib/prisma";
import { genericOAuth } from "better-auth/plugins";
import { nextCookies } from "better-auth/next-js";

export const auth = betterAuth({
  baseURL: "https://local.rajubk.com",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  plugins: [
    genericOAuth({
      config: [
        {
          providerId: "authentik",
          clientId: process.env.AUTHENTIK_CLIENT_ID!,
          clientSecret: process.env.AUTHENTIK_CLIENT_SECRET!,
          discoveryUrl:
            "http://localhost:9000/application/o/homelab/.well-known/openid-configuration",
          scopes: ["openid", "profile", "email"],
        },
      ],
    }),
    nextCookies(),
  ],
  trustedOrigins: [
    "http://192.168.1.145:3100",
    "http://localhost:3100",
    "https://local.rajubk.com/backend",
  ],
});

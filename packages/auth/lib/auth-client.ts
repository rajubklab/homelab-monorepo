import { createAuthClient } from "better-auth/react";
import { genericOAuthClient } from "better-auth/client/plugins";

export const { signIn, signUp, signOut, useSession } = createAuthClient({
  baseURL: "http://192.168.1.145:3100",
  plugins: [genericOAuthClient()],
});

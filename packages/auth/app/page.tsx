"use client";

import { signIn } from "@/lib/auth-client";

const Page = () => {
  const handleLogin = async () => {
    await signIn.oauth2({ providerId: "authentik", callbackURL: "/" });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Authentik</button>
    </div>
  );
};

export default Page;

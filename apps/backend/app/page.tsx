"use client";

import { signIn } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";

const Page = () => {
  const searchParams = useSearchParams();
  const handleLogin = async () => {
    await signIn.oauth2({
      providerId: "authentik",
      callbackURL: `/success?${searchParams.toString()}`,
      errorCallbackURL: `/failed`,
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login with Authentik</button>
    </div>
  );
};

export default Page;

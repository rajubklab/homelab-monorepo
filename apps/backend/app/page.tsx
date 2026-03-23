"use client";

import { signIn } from "@/lib/auth-client";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const Page = () => {
  const searchParams = useSearchParams();

  console.log("ksdjfksjdfkjkj");

  useEffect(() => {
    const handleLogin = async () => {
      await signIn.oauth2({
        providerId: "authentik",
        callbackURL: `/success?${searchParams.toString()}`,
        errorCallbackURL: `/failed`,
      });
    };
    if (searchParams.get("pageRedirectUrl")) {
      handleLogin();
    }
  }, [searchParams]);

  return null;
};

export default Page;

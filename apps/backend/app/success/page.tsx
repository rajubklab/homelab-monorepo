"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

const SuccessPage = () => {
  const searchParams = useSearchParams();

  useEffect(() => {
    const redirect = async () => {
      await fetch(`/api/redirect?to=${pageRedirectUrl}`);
    };
    const pageRedirectUrl = searchParams.get("pageRedirectUrl");
    if (pageRedirectUrl) {
      redirect();
    }
  }, [searchParams]);

  return null;
};

export default SuccessPage;

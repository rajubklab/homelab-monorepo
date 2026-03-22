import { redirect } from "next/navigation";

const SuccessPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ pageRedirectUrl: string }>;
}) => {
  const pageRedirectUrl = (await searchParams).pageRedirectUrl;

  if (pageRedirectUrl) {
    redirect(pageRedirectUrl);
  }

  return null;
};

export default SuccessPage;

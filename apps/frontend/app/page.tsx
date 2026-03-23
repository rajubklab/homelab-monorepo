import React from "react";

const Page = () => {
  return (
    <div>
      <a
        href={`https://lb.rajubk.com/backend/signin?pageRedirectUrl=${encodeURIComponent("https://lb.rajubk.com")}`}
      >
        Login
      </a>
    </div>
  );
};

export default Page;

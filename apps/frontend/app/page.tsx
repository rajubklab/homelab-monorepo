import React from "react";

const Page = () => {
  return (
    <div>
      <a
        href={`https://local.rajubk.com/backend?pageRedirectUrl=${encodeURIComponent("https://local.rajubk.com")}`}
      >
        Login
      </a>
    </div>
  );
};

export default Page;

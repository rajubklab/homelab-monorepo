import React from "react";

const Page = () => {
  return (
    <div>
      <a
        href={`http://192.168.1.145:3100?pageRedirectUrl=${encodeURIComponent("http://localhost:3000")}`}
      >
        Login
      </a>
    </div>
  );
};

export default Page;

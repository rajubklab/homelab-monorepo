import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/backend",
  /* config options here */
  allowedDevOrigins: [
    "192.168.20.189",
    "192.168.1.145",
    "localhost",
    "local.rajubk.com",
    "lb.rajubk.com",
  ],
};

export default nextConfig;

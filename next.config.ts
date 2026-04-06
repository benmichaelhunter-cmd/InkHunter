import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.atdw-online.com.au",
      },
    ],
  },
};

export default nextConfig;

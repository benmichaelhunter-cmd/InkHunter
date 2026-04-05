import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "desiaustralia.com",
      },
      {
        protocol: "https",
        hostname: "i0.wp.com",
      },
      {
        protocol: "https",
        hostname: "cms-web.seamuseum.net",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
      {
        protocol: "https",
        hostname: "www.parranews.com.au",
      },
      {
        protocol: "https",
        hostname: "thebigpicturefest.com",
      },
      {
        protocol: "https",
        hostname: "assets.atdw-online.com.au",
      },
      {
        protocol: "https",
        hostname: "www.ecovoice.com.au",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/support/sponsorships",
        destination: "/corporate-partners",
        permanent: true,
      },
      {
        source: "/support/founders-circle",
        destination: "/support",
        permanent: true,
      },
      {
        source: "/donate",
        destination: "/invest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

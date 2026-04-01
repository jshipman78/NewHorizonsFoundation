import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old sponsorship paths → new corporate sponsorship
      {
        source: "/support/sponsorships",
        destination: "/corporate-sponsorship",
        permanent: true,
      },
      {
        source: "/corporate-partners",
        destination: "/corporate-sponsorship",
        permanent: true,
      },
      // Old support/founders paths → new sponsorship hub
      {
        source: "/support/founders-circle",
        destination: "/sponsorship",
        permanent: true,
      },
      {
        source: "/support",
        destination: "/sponsorship",
        permanent: true,
      },
      // Partners shortcut → partnerships
      {
        source: "/partners",
        destination: "/partnerships",
        permanent: true,
      },
      // Donate shortcut
      {
        source: "/donate",
        destination: "/invest",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

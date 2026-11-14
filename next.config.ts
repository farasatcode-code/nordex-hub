import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/service",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/project",
        destination: "/",
        permanent: true,
      },
      {
        source: "/testimonial",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

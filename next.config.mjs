/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "**", // allow all hostnames
      },
      {
        protocol: "https",
        hostname: "**", // allow all secure hostnames
      },
    ],
  },
};

export default nextConfig;

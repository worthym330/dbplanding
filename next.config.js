/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BUILD_ID: Date.now().toString(), // Unique ID for each deployment
  },
};

module.exports = nextConfig;

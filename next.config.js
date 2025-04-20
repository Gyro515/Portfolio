/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // 👈 this disables Turbopack
  },
};

module.exports = nextConfig;

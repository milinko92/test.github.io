/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**.hashnodeusercontent.com' },
      { protocol: 'https', hostname: 'cdn.hashnode.com' },
    ],
  },
};
module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const rewrites = () => {
  return [
    {
      source: "/",
      destination: "http://example.com",
    },
  ];
};

const nextConfig = {
  rewrites,
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.amazonaws.com',
        pathname: '**',
      },
    ],
  },
}

module.exports = nextConfig

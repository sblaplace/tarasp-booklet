/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    urlImports: ['https://cdn.esm.sh/'],
  },
}

module.exports = nextConfig

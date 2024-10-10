/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['placeholder.com'], // Add any external image domains you'll use
    },
    experimental: {
      appDir: true,
    },
    // You can add more custom configurations here
  }
  
module.exports = nextConfig
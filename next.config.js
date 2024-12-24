/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/emergence-studio' : '',
  basePath: process.env.NODE_ENV === 'production' ? '/emergence-studio' : '',
}

module.exports = nextConfig


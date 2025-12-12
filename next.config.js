/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  // Deshabilitar ESLint durante build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Deshabilitar TypeScript check durante build
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig

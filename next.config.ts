// next.config.ts
import type { NextConfig } from 'next'
import { i18n } from './next-i18next.config'  // pull in just the i18n block

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,              // ← only this line for internationalization
  async redirects() {
    return [
      // Redirect app routes to app.sentineltech.eu (fixes old email links)
      {
        source: '/login/:path*',
        destination: 'https://app.sentineltech.eu/login/:path*',
        permanent: true,
      },
      {
        source: '/login',
        destination: 'https://app.sentineltech.eu/login',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://api.sentineltech.eu/api/:path*',
      },
    ];
  },
}

export default nextConfig
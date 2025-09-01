// next.config.ts
import type { NextConfig } from 'next'
import { i18n } from './next-i18next.config'  // pull in just the i18n block

const nextConfig: NextConfig = {
  reactStrictMode: true,
  i18n,              // ← only this line for internationalization
}

export default nextConfig
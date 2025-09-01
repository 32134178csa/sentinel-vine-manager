// src/config.ts
export const API_HOST = process.env.NEXT_PUBLIC_API_HOST || 'https://www.sentineltech.eu'
export const APP_HOST = 'https://www.sentineltech.eu'
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-FPH0N278DE';

export const flags: Record<string, string> = {
    "en":"gb",
    "fr":"fr",
    "es":"es",
    "it":"it",
    "hy":"am",
    "sr":"rs",
    "ro":"ro"
}

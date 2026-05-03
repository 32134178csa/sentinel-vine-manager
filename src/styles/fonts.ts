import { Inter_Tight, JetBrains_Mono, Space_Grotesk } from 'next/font/google';

// Primary body font
export const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-body',
});

// Monospace for labels, CTAs, metadata
export const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-mono',
});

// Wordmark only
export const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['500', '600'],
  display: 'swap',
  variable: '--font-wordmark',
});

// Note: Instrument Serif is not available in next/font/google.
// It is loaded via <link> in _document.tsx from Google Fonts CDN.

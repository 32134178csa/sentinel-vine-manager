// pages/_app.tsx
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import 'bootstrap/dist/css/bootstrap.min.css'
import { interTight, jetbrainsMono, spaceGrotesk } from '@/styles/fonts';
import './globals.css';
import '../styles/productVisuals.css';
import { useEffect, useState } from 'react';
import ReactGA from 'react-ga4';
import { GA_ID } from '@/config';
import Link from 'next/link';

function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('acceptedCookies');
    const gdpr = localStorage.getItem('requiresGDPR');
    // Show if GDPR required and user hasn't decided yet
    if (gdpr === 'yes' && accepted !== 'yes' && accepted !== 'no') {
      setVisible(true);
    }
    // Also listen for GDPR detection (runs async)
    const interval = setInterval(() => {
      const g = localStorage.getItem('requiresGDPR');
      const a = localStorage.getItem('acceptedCookies');
      if (g === 'yes' && a !== 'yes' && a !== 'no') {
        setVisible(true);
        clearInterval(interval);
      } else if (g === 'no' || a === 'yes' || a === 'no') {
        clearInterval(interval);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  if (!visible) return null;

  const handleAccept = () => {
    localStorage.setItem('acceptedCookies', 'yes');
    const gaActive = sessionStorage.getItem('gaActive');
    if (gaActive !== 'yes') {
      ReactGA.initialize(GA_ID);
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
      sessionStorage.setItem('gaActive', 'yes');
    }
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('acceptedCookies', 'no');
    setVisible(false);
  };

  return (
    <div className="cookie-banner-slim">
      <span>We use cookies to improve your experience. <Link href="/privacy">Privacy Policy</Link></span>
      <div className="cookie-banner-actions">
        <button className="btn-primary" onClick={handleAccept}>Accept</button>
        <button className="btn-ghost" onClick={handleReject}>Decline</button>
      </div>
    </div>
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    const updateBodyClass = () => {
      if (typeof window !== 'undefined') {
        document.body.classList.toggle('mobile', window.innerWidth < 768);
      }
    };
    updateBodyClass();
    window.addEventListener('resize', updateBodyClass);
    return () => window.removeEventListener('resize', updateBodyClass);
  }, []);

  return (
    <main className={`${interTight.variable} ${jetbrainsMono.variable} ${spaceGrotesk.variable}`}>
      <Component {...pageProps} />
      <CookieBanner />
    </main>
  );
}

export default appWithTranslation(MyApp);

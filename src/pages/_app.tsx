// pages/_app.tsx
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css';
import { useEffect } from 'react';

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

  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
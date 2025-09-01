// src/services/AnalyticsService.ts
import { GA_ID } from '@/config';

declare global {
  interface Window {
    //eslint-disable-next-line
    gtag?: (...args: any[]) => void;
  }
}

export class AnalyticsService {
    private static measurementId = GA_ID;
  
    static logPageView(pagePath?: string): void {
      const win = typeof window !== 'undefined' ? window : undefined;
      const path = pagePath ?? win?.location.pathname ?? '';
      if (win?.gtag) {
        win.gtag('config', this.measurementId, {
          page_path: path,
        })
      }
    }
  
    static logContactFormView(): void {
      const win = typeof window !== 'undefined' ? window : undefined;
      if (win?.gtag) {
        win.gtag('event', 'contact_form_view', {
          event_category: 'engagement',
          event_label: 'Contact Form Viewed',
        })
      }
    }
  
    static logConversion(): void {
      const win = typeof window !== 'undefined' ? window : undefined;
      if (win?.gtag) {
        win.gtag('event', 'conversion', {
          event_category: 'engagement',
          event_label: 'Contact Form Submitted',
        })
      }
    }
}
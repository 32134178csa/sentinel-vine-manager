import Link from 'next/link';
import { AnalyticsService } from '@/services/AnalyticsService';

interface PreFooterCTAProps {
  source?: string;
}

export default function PreFooterCTA({ source = 'pre_footer' }: PreFooterCTAProps) {
  return (
    <div className="pre-footer-cta">
      <Link href="/blog" className="pre-footer-link">Field Notes Monthly</Link>
      <span className="pre-footer-sep">/</span>
      <Link href="/blog#subscribe" className="pre-footer-link">Subscribe</Link>
      <span className="pre-footer-sep">/</span>
      <Link href="/contact" className="pre-footer-link" onClick={() => AnalyticsService.trackDemoClick(source)}>Schedule a Demo</Link>
      <span className="pre-footer-sep">/</span>
      <Link href="/blog" className="pre-footer-link">All Posts</Link>
    </div>
  );
}

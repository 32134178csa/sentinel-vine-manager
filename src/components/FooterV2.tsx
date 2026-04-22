import Link from 'next/link';
import Image from 'next/image';
import { APP_HOST } from '@/config';

const INSTAGRAM_URL = 'https://instagram.com/sentinelvineyard';

export default function FooterV2() {
  return (
    <footer className="footer-v2">
      <div className="container-lp">
        <div className="foot-grid">
          {/* Brand */}
          <div className="foot-brand">
            <Image
              src="/img/transparent-logo.webp"
              alt="Sentinel Logo"
              width={32}
              height={32}
            />
            <div className="name">Sentinel.</div>
            <p>The patient medical record for your vineyard, built by winegrowers for winegrowers.</p>
          </div>

          {/* Product */}
          <div className="foot-col">
            <h5>Product</h5>
            <ul>
              <li><Link href="/rapidMapping">Vine By Vine&trade;</Link></li>
              <li><Link href="/maturityMonitoring">Maturity Monitoring</Link></li>
              <li><Link href="/diseaseTracking">Pest &amp; Disease</Link></li>
              <li><Link href="/historicalAnalysis">Historical Analysis</Link></li>
              <li><Link href="/workOrders">Work Orders</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="foot-col">
            <h5>Company</h5>
            <ul>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/press">Press</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
            </ul>
          </div>

          {/* Get Started */}
          <div className="foot-col">
            <h5>Get Started</h5>
            <ul>
              <li><Link href="/contact">Schedule a Demo</Link></li>
              <li><a href="https://apps.apple.com/app/sentinel-vine-manager/id1608970406" target="_blank" rel="noreferrer">Download on App Store</a></li>
              <li><a href={APP_HOST + '/login'}>User Login</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="foot-col">
            <h5>Contact</h5>
            <ul>
              <li><a href="mailto:support@sentineltech.eu">support@sentineltech.eu</a></li>
              <li><a href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Instagram</a></li>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <span>&copy; Copyright 2026, Bungee Medical Technologies &middot; Sentinel Vine Manager&trade;</span>
          <div className="ver">
            <span>Build 26.04.019</span>
            <Link href="/cookies">Cookies</Link>
            <Link href="/privacy">Privacy</Link>
            <a href="#">Legal</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

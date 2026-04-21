import { Image } from 'react-bootstrap';
import { ChevronDown, ChevronLeft } from "react-bootstrap-icons";
import { useState } from "react";
import { useRouter } from 'next/router';
import { APP_HOST } from "@/config";
import Link from 'next/link';

export default function Header() {
  const router = useRouter();
  const { pathname } = router;
  const [open, setOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/' ? 'active' : '';
    return pathname.startsWith(path) ? 'active' : '';
  };

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Product', href: '/rapidMapping' },
    { label: 'About', href: '/about' },
    { label: 'FAQs', href: '/faqs' },
    { label: 'Press', href: '/press' },
    { label: 'Blog', href: '/blog' },
  ];

  return (
    <nav className="top">
      <div className="row nav-row-v2">
        {/* Brand */}
        <Link href="/" className="brand">
          <span className="mark">
            <Image
              style={{ width: 32, height: 32 }}
              src="/img/transparent-logo.webp"
              alt="Sentinel"
            />
          </span>
          <span className="name">Sentinel<em>&middot;</em></span>
        </Link>

        {/* Center nav links */}
        <div className="navlinks">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className={`${isActive(href)}`}>
              {label}
            </Link>
          ))}
        </div>

        <div className="navspace" />

        {/* Right CTAs */}
        <div className="nav-ctas">
          <a href={APP_HOST + '/login'} className="cta-ghost">
            User Login
          </a>
          <Link href="/contact" className="cta-solid">
            Schedule a Demo <span className="arrow" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <div className="nav-mobile-toggle" onClick={() => setOpen(!open)}>
          {open
            ? <ChevronDown className="nav-chevron-icon darken" />
            : <ChevronLeft className="nav-chevron-icon darken" />
          }
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mobile-menu-v2">
          {navLinks.map(({ label, href }) => (
            <Link key={href} href={href} className="mobile-menu-item" onClick={() => setOpen(false)}>
              {label}
            </Link>
          ))}
          <a href={APP_HOST + '/login'} className="mobile-menu-item">User Login</a>
          <Link href="/contact" className="mobile-menu-item mobile-menu-cta" onClick={() => setOpen(false)}>
            Schedule a Demo
          </Link>
        </div>
      )}
    </nav>
  );
}

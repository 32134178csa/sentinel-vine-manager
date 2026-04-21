import React, { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/services/BlogService';
import { APP_HOST } from '@/config';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
interface LandingPageProps {
  recommendedBlogPost: BlogPost;
}

/* ------------------------------------------------------------------ */
/*  Inline SVG icons for capability cards                              */
/* ------------------------------------------------------------------ */
const IcoGrid = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <circle cx="4" cy="4" r="2" fill="var(--ink-mute)" />
    <circle cx="11" cy="4" r="2" fill="var(--accent)" />
    <circle cx="18" cy="4" r="2" fill="var(--ink-mute)" />
    <circle cx="4" cy="11" r="2" fill="var(--accent)" />
    <circle cx="11" cy="11" r="2" fill="var(--ink-mute)" />
    <circle cx="18" cy="11" r="2" fill="var(--accent)" />
    <circle cx="4" cy="18" r="2" fill="var(--ink-mute)" />
    <circle cx="11" cy="18" r="2" fill="var(--ink-mute)" />
    <circle cx="18" cy="18" r="2" fill="var(--ink-mute)" />
  </svg>
);

const IcoRing = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="var(--ink-mute)" strokeWidth="1" />
    <circle cx="12" cy="12" r="6" stroke="var(--accent)" strokeWidth="1" />
    <circle cx="12" cy="12" r="2" fill="var(--accent)" />
  </svg>
);

const IcoCross = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="12" y1="0" x2="12" y2="24" stroke="var(--ink-mute)" strokeWidth="1" />
    <line x1="0" y1="12" x2="24" y2="12" stroke="var(--ink-mute)" strokeWidth="1" />
    <rect x="9" y="9" width="6" height="6" stroke="var(--accent)" strokeWidth="1" fill="none" />
  </svg>
);

const IcoBars = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="1" y="16" width="4" height="8" fill="var(--ink-mute)" />
    <rect x="7" y="12" width="4" height="12" fill="var(--ink-mute)" />
    <rect x="13" y="8" width="4" height="16" fill="var(--ink-mute)" />
    <rect x="19" y="4" width="4" height="20" fill="var(--accent)" />
  </svg>
);

const IcoSpray = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <line x1="12" y1="2" x2="12" y2="22" stroke="var(--ink-mute)" strokeWidth="1.5" />
    <line x1="12" y1="6" x2="4" y2="6" stroke="var(--ink-mute)" strokeWidth="1" />
    <line x1="12" y1="10" x2="6" y2="10" stroke="var(--ink-mute)" strokeWidth="1" />
    <line x1="12" y1="14" x2="18" y2="14" stroke="var(--ink-mute)" strokeWidth="1" />
    <circle cx="12" cy="20" r="2.5" fill="var(--accent)" />
  </svg>
);

const IcoBarrel = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="3" width="8" height="18" rx="1" stroke="var(--ink-mute)" strokeWidth="1" fill="none" />
    <line x1="3" y1="9" x2="9" y2="9" stroke="var(--accent)" strokeWidth="1" />
    <line x1="3" y1="13" x2="9" y2="13" stroke="var(--accent)" strokeWidth="1" />
    <rect x="14" y="3" width="8" height="18" rx="1" stroke="var(--ink-mute)" strokeWidth="1" fill="none" />
    <line x1="15" y1="9" x2="21" y2="9" stroke="var(--accent)" strokeWidth="1" />
    <line x1="15" y1="13" x2="21" y2="13" stroke="var(--accent)" strokeWidth="1" />
  </svg>
);

/* ------------------------------------------------------------------ */
/*  Seeded random for stable SSR/client hydration                      */
/* ------------------------------------------------------------------ */
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

/* ------------------------------------------------------------------ */
/*  Vine map placeholder (pure CSS dots)                               */
/* ------------------------------------------------------------------ */
const VINE_STATUSES = ['healthy', 'nominal', 'rootstock', 'miss', 'virus', 'tested', 'dry'] as const;
const VINE_WEIGHTS = [0.48, 0.18, 0.1, 0.06, 0.08, 0.06, 0.04];

function generateDots(rows: number, cols: number, seed: number) {
  const rand = seededRandom(seed);
  const result: string[] = [];
  for (let i = 0; i < rows * cols; i++) {
    const r = rand();
    let cum = 0;
    let status: string = VINE_STATUSES[0];
    for (let j = 0; j < VINE_WEIGHTS.length; j++) {
      cum += VINE_WEIGHTS[j];
      if (r < cum) { status = VINE_STATUSES[j]; break; }
    }
    result.push(status);
  }
  return result;
}

const heroDots = generateDots(14, 40, 42);
const splitDots = generateDots(10, 28, 99);

function VineMapPlaceholder() {
  return (
    <div className="vine-map-placeholder">
      <div className="vine-map-hud-top">
        <span className="vine-map-label">Vineyard <b>Volcanic Ridge</b></span>
        <span className="vine-map-pills">
          <span className="vine-map-pill live"><span className="pulse-dot" /> RTK FIX</span>
          <span className="vine-map-pill">BLOCK 8A</span>
        </span>
      </div>
      <div className="vine-map-dots">
        {heroDots.map((s, i) => (
          <span key={i} className={`vine-dot vine-dot--${s}`} />
        ))}
      </div>
      <div className="vine-map-hud-bottom">
        <span>Scale 1 : 1 200</span>
        <span>NAD83 . UTM 10N</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  NDVI placeholder                                                   */
/* ------------------------------------------------------------------ */
function NdviPlaceholder() {
  return (
    <div className="ndvi-wrap">
      <div className="ndvi-viz" />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Small vine map for the "Sentinel" side of the split panel          */
/* ------------------------------------------------------------------ */
function SmallVineMap() {
  return (
    <div className="split-vine-map">
      <div className="vine-map-dots vine-map-dots--small">
        {splitDots.map((s, i) => (
          <span key={i} className={`vine-dot vine-dot--${s}`} />
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  UTC clock                                                          */
/* ------------------------------------------------------------------ */
function UtcClock() {
  const [time, setTime] = useState('00:00:00');
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(d.toISOString().slice(11, 19));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span>UTC <b>{time}</b></span>;
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function LandingPage({ recommendedBlogPost }: LandingPageProps) {
  useTranslation('common');

  return (
    <div className="landing-v2" data-page="home">

      {/* ============ STATUS STRIP ============ */}
      <div className="status-strip">
        <span><span className="dot" /> FIELD NETWORK . ONLINE</span>
        <span className="sep">|</span>
        <span>VINE . BY . VINE&trade;</span>
        <span className="sep">|</span>
        <span className="country-marquee-wrap">
          <span className="country-marquee">
            CALIFORNIA &middot; OREGON &middot; MEXICO &middot; ITALY &middot; ARMENIA &middot; NEW ZEALAND &middot; PORTUGAL &middot; ARGENTINA &middot; LEBANON &nbsp;&nbsp;&nbsp;
            CALIFORNIA &middot; OREGON &middot; MEXICO &middot; ITALY &middot; ARMENIA &middot; NEW ZEALAND &middot; PORTUGAL &middot; ARGENTINA &middot; LEBANON &nbsp;&nbsp;&nbsp;
          </span>
        </span>
        <span className="spacer" />
        <span>GNSS ACC <b>0.009 m</b></span>
        <span className="sep">|</span>
        <UtcClock />
      </div>

      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-grid container-lp">
          <div className="hero-left">
            <div className="hero-label kicker">
              <span className="tick"><span /></span>
              Sentinel Vine Manager . Vine By Vine&trade;
            </div>

            <h1>
              Capturing the life history of your vineyard, <em>one vine at a time.</em>
            </h1>

            <p className="lede">
              Sentinel creates and maintains a permanent vine record for every vine in your vineyard -- tracking any parameter you define: disease history, production status, vigor, cluster counts, photos, operations, and more. Query, analyze, chart, and report on that data today, next vintage, and for the full life of your vineyard.
            </p>

            <div className="hero-ctas">
              <Link href="/contact" className="cta-solid">
                Schedule a Demo <span className="arrow" />
              </Link>
              <a href="https://apps.apple.com/app/sentinel-vine-manager/id1608970406" className="cta-ghost" target="_blank" rel="noreferrer">
                Download on App Store
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <div className="k">MAPPING ACCURACY</div>
                <div className="v">0.009 <small>m</small></div>
              </div>
              <div>
                <div className="k">100 ACRES / 1 INTERN</div>
                <div className="v">1 <small>week</small></div>
              </div>
              <div>
                <div className="k">COUNTRIES DEPLOYED</div>
                <div className="v">6</div>
              </div>
            </div>
          </div>

          <div className="hero-right">
            <VineMapPlaceholder />
          </div>
        </div>
      </header>

      {/* ============ SECTION 01 -- PRODUCT ============ */}
      <section>
        <div className="section-head container-lp">
          <span className="idx">01 . Product</span>
          <h2>
            Not just a dot map. <em>A permanent record for every vine in your vineyard.</em>
          </h2>
        </div>

        <div className="caps container-lp">
          {/* Card 1 */}
          <Link href="/rapidMapping" className="cap">
            <span className="code">MOD . 001</span>
            <span className="icon"><IcoGrid /></span>
            <h3>Vine By Vine&trade;</h3>
            <p>Map hectares of vineyard in minutes with sub-centimeter accuracy. Each vine becomes a permanent, user-verified record -- no double entry, no re-mapping next season.</p>
            <span className="spacer" />
            <span className="more">Mapping</span>
          </Link>

          {/* Card 2 */}
          <Link href="/maturityMonitoring" className="cap">
            <span className="code">MOD . 002</span>
            <span className="icon"><IcoRing /></span>
            <h3>Maturity Monitoring</h3>
            <p>Vineyards develop greater heterogeneity as they age. Sentinel lets you identify underperforming vines early, quantify the problem, and follow up at the individual vine.</p>
            <span className="spacer" />
            <span className="more">Phenology</span>
          </Link>

          {/* Card 3 */}
          <Link href="/diseaseTracking" className="cap">
            <span className="code">MOD . 003</span>
            <span className="icon"><IcoCross /></span>
            <h3>Pest &amp; Disease Tracking</h3>
            <p>Tag suspected vines, auto-generate lab sample labels, bulk-upload results, and auto-update disease status. Our goal: the medical record-keeping system for the world&apos;s great vineyards.</p>
            <span className="spacer" />
            <span className="more">Triage</span>
          </Link>

          {/* Card 4 */}
          <Link href="/historicalAnalysis" className="cap">
            <span className="code">MOD . 004</span>
            <span className="icon"><IcoBars /></span>
            <h3>Historical Analysis &amp; Work Orders</h3>
            <p>Construct complex queries across vine age, production, and disease status. Operationalize roguing, grafting, planting and harvest -- with statuses that update on completion.</p>
            <span className="spacer" />
            <span className="more">Analytics</span>
          </Link>

          {/* Card 5 */}
          <Link href="/rapidMapping" className="cap">
            <span className="new-tag">NEW</span>
            <span className="code">MOD . 005</span>
            <span className="icon"><IcoSpray /></span>
            <h3>Pesticide Use Reporting</h3>
            <p>Log a spray in Sentinel and the system generates a compliant XML report -- permit number, site coordinates, product, acreage. Submit to county and state directly. No separate tool, no re-entry.</p>
            <span className="spacer" />
            <span className="more">Compliance</span>
          </Link>

          {/* Card 6 */}
          <Link href="/rapidMapping" className="cap">
            <span className="new-tag">NEW</span>
            <span className="code">MOD . 006</span>
            <span className="icon"><IcoBarrel /></span>
            <h3>Cellar Management</h3>
            <p>Track lots from harvest to bottle -- fermentation, Brix/pH/TA/SO2/VA, vessel assignments, barrel inventory. Every lot ties back to the block and vines it came from. Bundled in your subscription.</p>
            <span className="spacer" />
            <span className="more">Vine-to-bottle</span>
          </Link>
        </div>
      </section>

      {/* ============ SECTION 02 -- WHY SENTINEL ============ */}
      <section>
        <div className="section-head container-lp">
          <span className="idx">02 . Why Sentinel</span>
          <h2>
            NDVI tells you <em>where.</em> Sentinel tells you <em>why.</em>
          </h2>
        </div>

        <div className="split container-lp">
          <div className="panel">
            <h4>Exhibit A . Automated Vineyard Imaging</h4>
            <h3>More data <em>isn&apos;t better data.</em></h3>
            <p>Cameras and proprietary models can generate terabytes of imagery -- but the models are black boxes, the outputs need hand-validation, and the response they&apos;re prescribing may not match the scale of problem you actually want to tackle. Sentinel puts that control back in the hands of the people who know the vineyard.</p>
            <NdviPlaceholder />
          </div>

          <div className="panel">
            <h4>Exhibit B . Sentinel</h4>
            <h3>Ground-truthed, <em>vine by vine.</em></h3>
            <p>Mapped once with sub-centimeter GNSS accuracy. Updated continuously with disease status, production history, photos, lab results, and every management decision made in the field. Ground truth that lives as long as your vineyard does.</p>
            <div className="viz">
              <SmallVineMap />
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 03 -- HOW IT WORKS ============ */}
      <section>
        <div className="section-head container-lp">
          <span className="idx">03 . How It Works</span>
          <h2>
            Georeferenced. Interactive. <em>On every phone in your vineyard.</em>
          </h2>
        </div>

        <div className="flow container-lp">
          <div className="flow-label kicker">OPERATIONAL LOOP</div>
          <div className="flow-steps">
            <div className="flow-step">
              <div className="step-n">STEP 01 / MAP</div>
              <h4>Map in 3D</h4>
              <p>One pass. Sub-centimeter accuracy. A permanent 3D base map of every vine in your vineyard -- built with nothing more than an iPhone and a pocket size GNSS receiver.</p>
            </div>
            <div className="flow-step">
              <div className="step-n">STEP 02 / RECORD</div>
              <h4>Build the vine record</h4>
              <p>Walk up to any vine and its record opens automatically via geofence. Attach disease status, production status, cluster counts, captioned photos -- no Excel, no clipboards.</p>
            </div>
            <div className="flow-step">
              <div className="step-n">STEP 03 / DISPATCH</div>
              <h4>Issue work orders</h4>
              <p>Create targeted tasks: rogue all Red-Blotch-positive vines, plant a list of misses, graft a cohort. Vine statuses auto-update as work is completed in the field.</p>
            </div>
            <div className="flow-step">
              <div className="step-n">STEP 04 / ANALYZE</div>
              <h4>Compare vintages</h4>
              <p>Time-series analysis at the vine, block and vineyard level. Did the virus spread? Is production declining? Budget conversations come with a map, not a guess.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 04 -- TESTIMONIAL ============ */}
      <section>
        <div className="quote container-lp">
          <span className="idx kicker">04 . From the field</span>
          <blockquote>
            Flagging tape and Excel maps work until they don&apos;t. As the scale of the problem grew, so did the burden of managing it. With Sentinel, <em>the entire workflow -- tagging, testing, reporting, roguing -- lives in one system that remembers every vine and every action.</em>
          </blockquote>
          <div className="attrib">
            <b>Napa Valley</b>
            Director of Viticulture<br />
            Second-vintage deployment
          </div>
        </div>
      </section>

      {/* ============ SECTION 05 -- GET STARTED ============ */}
      <section id="contact">
        <div className="cta-band container-lp">
          <h3>
            Vine-level farming <em>deserves vine-level data.</em>
          </h3>
          <div className="actions">
            <Link href="/faqs" className="cta-ghost">Read the FAQs</Link>
            <Link href="/contact" className="cta-solid">
              Schedule a Demo <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
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
              <p>The patient medical record for your vineyard. Built by winegrowers, for winegrowers -- from California to six countries worldwide. A product of Spongy Mesophyll Technologies.</p>
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
                <li><a href="#">Buy Now</a></li>
                <li><a href="https://apps.apple.com/app/sentinel-vine-manager/id1608970406" target="_blank" rel="noreferrer">Download on App Store</a></li>
                <li><a href={APP_HOST + '/login'}>User Login</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="foot-col">
              <h5>Contact</h5>
              <ul>
                <li><a href="mailto:support@sentineltech.eu">support@sentineltech.eu</a></li>
                <li><a href="#">Napa . California</a></li>
                <li><a href="#">Instagram</a></li>
                <li><Link href="/privacy">Privacy Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="foot-bottom">
            <span>&copy; 2026 Spongy Mesophyll Technologies . Sentinel Vine Manager&trade;</span>
            <div className="ver">
              <span>Build 26.04.019</span>
              <Link href="/cookies">Cookies</Link>
              <Link href="/privacy">Privacy</Link>
              <a href="#">Legal</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

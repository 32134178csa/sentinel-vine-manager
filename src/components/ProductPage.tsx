import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { AnalyticsService } from '@/services/AnalyticsService';
import FooterV2 from '@/components/FooterV2';
import PreFooterCTA from '@/components/PreFooterCTA';

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
/*  Vine map for pillar visuals                                        */
/* ------------------------------------------------------------------ */
type MapVariant = 'production' | 'unified' | 'disease' | 'irrigation';

function pickStatus(variant: MapVariant, n: number): string {
  if (variant === 'disease') {
    if (n < 0.03) return 'virus';
    if (n < 0.07) return 'tested';
    if (n < 0.10) return 'miss';
    if (n < 0.55) return 'healthy';
    return 'nominal';
  }
  if (variant === 'production') {
    if (n < 0.04) return 'miss';
    if (n < 0.08) return 'rootstock';
    if (n < 0.50) return 'healthy';
    return 'nominal';
  }
  if (variant === 'irrigation') {
    if (n < 0.40) return 'irrig';
    if (n < 0.70) return 'dry';
    return 'nominal';
  }
  // unified
  if (n < 0.02) return 'virus';
  if (n < 0.05) return 'tested';
  if (n < 0.09) return 'rootstock';
  if (n < 0.12) return 'miss';
  if (n < 0.55) return 'healthy';
  return 'nominal';
}

function generatePillarDots(rows: number, cols: number, seed: number, variant: MapVariant) {
  const rand = seededRandom(seed);
  const result: string[] = [];
  for (let i = 0; i < rows * cols; i++) {
    const r = rand();
    result.push(pickStatus(variant, r));
  }
  return result;
}

interface PillarMapProps {
  rows: number;
  cols: number;
  seed: number;
  variant: MapVariant;
}

function PillarVineMap({ rows, cols, seed, variant }: PillarMapProps) {
  const dots = generatePillarDots(rows, cols, seed, variant);
  return (
    <div className="pillar-vine-map">
      <div className="pillar-map-hud tl">
        <span>Vineyard <b>Volcanic Ridge</b></span>
      </div>
      <div className="pillar-map-hud tr">
        <span className="pillar-pill live"><span className="pulse-dot" /> RTK FIX</span>
        <span className="pillar-pill">BLOCK 8A</span>
      </div>
      <div className="pillar-layer-toggle">
        <span className={`seg ${variant === 'production' ? 'active' : ''}`}>Production</span>
        <span className={`seg ${variant === 'irrigation' ? 'active' : ''}`}>Irrigation</span>
        <span className={`seg ${variant === 'disease' ? 'active' : ''}`}>Virus</span>
        <span className={`seg ${variant === 'unified' ? 'active' : ''}`}>Unified</span>
      </div>
      <div
        className="pillar-dots"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {dots.map((s, i) => (
          <span key={i} className={`vine-dot vine-dot--${s}`} />
        ))}
      </div>
      <div className="pillar-map-hud bl">
        <span>Scale 1 : 1 200</span>
        <span>NAD83 &middot; UTM 10N</span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Cellar mock visual                                                 */
/* ------------------------------------------------------------------ */
function CellarMock() {
  return (
    <div className="cellar-mock">
      <div className="cbar">
        <span>Cellar &middot; Vintage 2024</span>
        <span className="live"><span className="pulse-dot" /> Fermenting &middot; 8 lots</span>
      </div>
      <div className="tanks">
        <div className="tank"><span className="id">T-01</span><div className="fill" style={{ height: '78%' }} /><span className="pct">78%</span></div>
        <div className="tank"><span className="id">T-02</span><div className="fill" style={{ height: '92%' }} /><span className="pct">92%</span></div>
        <div className="tank"><span className="id">T-03</span><div className="fill white" style={{ height: '64%' }} /><span className="pct">64%</span></div>
        <div className="tank"><span className="id">T-04</span><div className="fill" style={{ height: '45%' }} /><span className="pct">45%</span></div>
        <div className="tank"><span className="id">T-05</span><div className="fill white" style={{ height: '88%' }} /><span className="pct">88%</span></div>
        <div className="tank"><span className="id">T-06</span><div className="fill" style={{ height: '30%' }} /><span className="pct">30%</span></div>
      </div>
      <div className="lot-row hdr">
        <div>Lot</div><div>Source</div><div>Brix</div><div>pH</div><div>TA</div><div>SO&#x2082;</div>
      </div>
      <div className="lot-row">
        <div className="block">24-CS-01</div><div className="name">Block E-2 &middot; Cab Sauv</div><div>24.8</div><div>3.62</div><div>6.4</div><div>38</div>
      </div>
      <div className="lot-row">
        <div className="block">24-CS-04</div><div className="name">Block W-1 &middot; Cab Sauv</div><div>25.3</div><div>3.71</div><div>5.9</div><div>42</div>
      </div>
      <div className="lot-row">
        <div className="block">24-CH-02</div><div className="name">Block N-3 &middot; Chardonnay</div><div>22.1</div><div>3.28</div><div>7.2</div><div>30</div>
      </div>
      <div className="lot-row">
        <div className="block">24-ME-01</div><div className="name">Block S-4 &middot; Merlot</div><div>23.7</div><div>3.55</div><div>6.1</div><div>35</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  PUR screenshot placeholder                                         */
/* ------------------------------------------------------------------ */
function PurPlaceholder() {
  return (
    <div className="screenshot-placeholder">
      <div className="sp-chrome">
        <span className="sp-dot" /><span className="sp-dot" /><span className="sp-dot" />
        <span className="sp-url">sentinelvine.com / reports / pur</span>
      </div>
      <div className="sp-body">
        <svg viewBox="0 0 120 90" aria-hidden="true">
          <rect x="10" y="10" width="100" height="70" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
          <line x1="10" y1="10" x2="110" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
          <line x1="110" y1="10" x2="10" y2="80" stroke="currentColor" strokeWidth="0.5" opacity="0.35" />
        </svg>
        <div className="sp-label">Screenshot &middot; PUR Form</div>
        <div className="sp-sub">Replace with actual screenshot from the Sentinel app</div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main ProductPage component                                         */
/* ------------------------------------------------------------------ */
export default function ProductPage() {
  useTranslation('common');

  return (
    <div className="product-v2" data-page="product">

      {/* ============ PAGE HERO ============ */}
      <header className="page-hero container-lp">
        <div className="idx">Product &middot; Sentinel Vine Manager</div>
        <h1>
          A complete vineyard management platform, <em>built at the vine level.</em>
        </h1>
        <p className="lede">
          Mapping, monitoring, disease tracking, analytics, work orders -- and now pesticide use reporting and cellar management. All bound to the individual vine, for the entire life of the vineyard, and the wine that comes from it.
        </p>
      </header>

      {/* ============ 01 -- VINE BY VINE ============ */}
      <section className="pillar" id="vine">
        <div className="copy">
          <div className="idx">01 &middot; Vine By Vine&trade;</div>
          <h2>Map every vine, <em>once.</em></h2>
          <p>Leveraging proprietary geospatial technologies, Sentinel&apos;s mobile app enables Vine By Vine&trade; mapping -- precisely recording the location of every vine in a vineyard with sub-centimeter accuracy.</p>
          <p>Vines mapped in Sentinel represent user-verified ground truth, not speculation from drone imagery or AI models. Through proprietary automation, users map hectares in a matter of minutes, delivering full Vine By Vine&trade; coverage across entire blocks.</p>
          <ul>
            <li><div><b>RTK GNSS, sub-2cm accuracy</b><span>Every vine gets a permanent GPS location.</span></div></li>
            <li><div><b>Clone, variety, rootstock, year planted</b><span>Stored per vine alongside production status.</span></div></li>
            <li><div><b>No shapefiles needed</b><span>Map end vines; the system fills in the rest.</span></div></li>
            <li><div><b>Auto-retrieval by geofence</b><span>Walk up to any vine and its record opens on your phone.</span></div></li>
          </ul>
        </div>
        <div className="visual">
          <PillarVineMap rows={18} cols={44} seed={42} variant="production" />
        </div>
      </section>

      {/* ============ 02 -- MATURITY MONITORING ============ */}
      <section className="pillar rev" id="maturity">
        <div className="copy">
          <div className="idx">02 &middot; Maturity Monitoring</div>
          <h2>Vineyards age <em>heterogeneously.</em></h2>
          <p>Disease spread, tractor damage, persistent vigor differences -- many factors contribute to this effect. In time, vine-by-vine interventions or sporadic replanting can extend a vineyard&apos;s lifespan, but introduce their own challenges:</p>
          <ul>
            <li><div><b>Identify early</b><span>Catch damaged, diseased, or underperforming vines before losses compound.</span></div></li>
            <li><div><b>Quantify the problem</b><span>Gather enough detail to make an informed management decision.</span></div></li>
            <li><div><b>Follow up precisely</b><span>Execute efficient vine-by-vine follow-up after roguing or intervention.</span></div></li>
          </ul>
        </div>
        <div className="visual">
          <PillarVineMap rows={16} cols={42} seed={99} variant="unified" />
        </div>
      </section>

      {/* ============ 03 -- PEST & DISEASE TRACKING ============ */}
      <section className="pillar" id="disease">
        <div className="copy">
          <div className="idx">03 &middot; Pest &amp; Disease Tracking</div>
          <h2>The patient medical record <em>for the world&apos;s great vineyards.</em></h2>
          <p>Grapevine pests and diseases are the greatest threats to vineyard longevity, wine quality, and economic viability. Sentinel lets vineyard teams collect the highest quality spatial and historical disease data with the click of a button -- then maintains it indefinitely.</p>
          <ul>
            <li><div><b>User-definable status categories</b><span>Positive, symptomatic but untested, tested negative, and any custom state.</span></div></li>
            <li><div><b>Auto-generate lab labels</b><span>Tag suspected vines, bulk-upload results, auto-update vine disease status.</span></div></li>
            <li><div><b>Year-over-year comparison</b><span>See actual spread vs. what&apos;s stable across vintages.</span></div></li>
            <li><div><b>Visual concentration maps</b><span>Prioritize roguing decisions across sites on one map.</span></div></li>
          </ul>
        </div>
        <div className="visual">
          <PillarVineMap rows={16} cols={44} seed={77} variant="disease" />
        </div>
      </section>

      {/* ============ 04 -- HISTORICAL ANALYSIS ============ */}
      <section className="pillar rev" id="historical">
        <div className="copy">
          <div className="idx">04 &middot; Historical Analysis</div>
          <h2>Powerful insights, <em>from your permanent vine record.</em></h2>
          <p>Sentinel&apos;s web-based analytics platform turns a vineyard&apos;s historical vine database into charts, queries and custom maps. Construct complex cohort queries based on vine age, production status, and disease status. Explore trends at the vine, block and vineyard level.</p>
          <ul>
            <li><div><b>Cohort queries</b><span>Isolate vines by age, rootstock, disease, performance.</span></div></li>
            <li><div><b>Time-series charts</b><span>Vine, block, and vineyard-level trends over vintages.</span></div></li>
            <li><div><b>Custom maps</b><span>Publish ready-to-share maps for ownership or finance teams.</span></div></li>
            <li><div><b>Export to Excel</b><span>Any dataset, any query -- out the door.</span></div></li>
          </ul>
        </div>
        <div className="visual">
          <PillarVineMap rows={14} cols={40} seed={55} variant="irrigation" />
        </div>
      </section>

      {/* ============ 05 -- WORK ORDERS ============ */}
      <section className="pillar" id="workorders">
        <div className="copy">
          <div className="idx">05 &middot; Work Orders</div>
          <h2>Operationalize <em>vine-by-vine activity.</em></h2>
          <p>From roguing, to planting, to grafting, to harvesting and fertilizing -- vineyard managers can record operations at the block and vine level. Because operations change the inherent status of vines, Sentinel auto-updates vine statuses through work-order completion.</p>
          <p><em style={{ color: 'var(--ink)' }}>Need to rogue all diseased vines across your vineyard?</em> Create a Roguing work order pointed at vines with the Positive Disease Status in question. Upon completion, every rogued vine flips from Virus-Positive to No-Virus, and production status changes to Miss -- ready for a Planting work order next spring.</p>
          <ul>
            <li><div><b>Crop estimation &amp; thinning simulator</b><span>Project yield with statistical confidence intervals, block by block.</span></div></li>
            <li><div><b>Pick maps &amp; harvest tracking</b><span>Winemaker pick zones, receive-weight, Brix, bin counts per lot.</span></div></li>
            <li><div><b>Auto-status updates</b><span>Completed work flips vine statuses without a manual pass.</span></div></li>
            <li><div><b>Multi-client management</b><span>Unlimited logins; clients see only theirs, your team sees everything.</span></div></li>
          </ul>
        </div>
        <div className="visual">
          <PillarVineMap rows={16} cols={42} seed={33} variant="unified" />
        </div>
      </section>

      {/* ============ 06 -- PESTICIDE USE REPORTING ============ */}
      <section className="pillar rev" id="pesticide">
        <div className="copy">
          <div className="idx">06 &middot; Pesticide Use Reporting <span style={{ color: 'var(--accent)', marginLeft: '10px' }}>&bull; New</span></div>
          <h2>Spray logs that <em>file themselves.</em></h2>
          <p>Every spray application you record in Sentinel feeds directly into your pesticide use submissions. Log the event in the field, and the system generates a compliant XML report -- county permit number, site coordinates, product details, acreage treated -- ready for local and state submission.</p>
          <p>No separate reporting tool. No end-of-month spreadsheet reconciliation. No re-entering the same data in two places.</p>
          <ul>
            <li><div><b>Compliant XML output</b><span>Matches required submission formats for county agricultural commissioners and state agencies.</span></div></li>
            <li><div><b>Auto-populated from field logs</b><span>Permit, coordinates, product EPA#, rate, acreage and operator -- pulled from the work order.</span></div></li>
            <li><div><b>Operator &amp; REI tracking</b><span>Applicator certification and restricted-entry intervals stored per application.</span></div></li>
            <li><div><b>One-click resubmit</b><span>Amendments and corrections re-export without re-keying the whole record.</span></div></li>
          </ul>
        </div>
        <div className="visual">
          <PurPlaceholder />
        </div>
      </section>

      {/* ============ 07 -- CELLAR MANAGEMENT ============ */}
      <section className="pillar" id="cellar">
        <div className="copy">
          <div className="idx">07 &middot; Cellar Management <span style={{ color: 'var(--accent)', marginLeft: '10px' }}>&bull; New</span></div>
          <h2>From vine <em>to bottle,</em> on one record.</h2>
          <p>Sentinel is the first vineyard-native platform to extend a vine&apos;s record into the cellar. Every lot carries its block -- and every vine in it -- forward through fermentation, lab analysis, vessel assignments, barrel inventory, and bottling.</p>
          <p>Dedicated cellar platforms typically start at <b style={{ color: 'var(--ink)', fontWeight: 500 }}>$10K / year</b>. Sentinel includes cellar management in your existing vineyard subscription.</p>
          <ul>
            <li><div><b>Lot lineage</b><span>Every lot ties back to the specific block and vines it came from.</span></div></li>
            <li><div><b>Lab analysis</b><span>Brix, pH, TA, SO&#x2082;, VA tracked per lot, per time-stamped sample.</span></div></li>
            <li><div><b>Vessel &amp; barrel inventory</b><span>Tanks, barrels, topping schedules, cooperage, age and toast profile -- assigned per lot.</span></div></li>
            <li><div><b>Vine-to-bottle traceability</b><span>First time a grower can trace winegrowing from multi-year vine data through fermentation, aging and bottling.</span></div></li>
          </ul>
        </div>
        <div className="visual">
          <CellarMock />
        </div>
      </section>

      {/* ============ 08 -- CTA BAND ============ */}
      <section className="cta-band" id="contact">
        <div>
          <div className="kicker" style={{ marginBottom: '24px' }}>08 &middot; Get Started</div>
          <h3>See it working <em>on your vineyard.</em></h3>
        </div>
        <div className="actions">
          <Link href="/faqs" className="cta-ghost">FAQs</Link>
          <Link href="/contact" className="cta-solid" onClick={() => AnalyticsService.trackDemoClick('product_cta_band')}>
            Schedule a Demo <span className="arrow" />
          </Link>
        </div>
      </section>

      {/* ============ PRE-FOOTER CTA ============ */}
      <PreFooterCTA source="product_pre_footer" />

      {/* ============ FOOTER ============ */}
      <FooterV2 />
    </div>
  );
}

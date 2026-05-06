import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function About() {
  useTranslation('common');

  return (
    <div className="about-v2" data-page="about">

      {/* ============ PAGE HERO ============ */}
      <header className="page-hero container-lp">
        <div className="idx">About &middot; Spongy Mesophyll Technologies</div>
        <h1>
          Built by vineyard owners <em>for vineyard owners.</em>
        </h1>
        <p className="lede">
          We&apos;re a vineyard technology company working quietly alongside growers in California, Oregon, Mexico, Italy, Armenia and beyond. Our founders grow and make wine; this product is the one we wished existed.
        </p>
      </header>

      {/* ============ SECTION 01—OUR STORY ============ */}
      <section className="story container-lp">
        <div className="idx">01 &middot; Our Story</div>
        <div>
          <h2>Twenty years of spreadsheets, <em>pinned to a wall.</em></h2>
          <p className="first">
            Sentinel was born from a simple observation: the world&apos;s finest vineyards were making critical decisions from clipboards, Excel workbooks, and memory.
          </p>
          <p>
            Our team had spent years walking vineyard rows—scouting for Leafroll, flagging Red Blotch symptoms with plastic tape, guessing at cluster counts, and watching the institutional knowledge walk out the gate every time a crew foreman retired.
          </p>
          <p>
            Drones and satellites promised a solution, but NDVI maps stop at the canopy. A vine with Red Blotch can look identical to a shaded, under-irrigated, or simply young vine from above. The ground truth—the actual condition of the plant—was still trapped in peoples&apos; heads.
          </p>
        </div>
        <div>
          <h2 className="story-sub">What we built.</h2>
          <p>
            Sentinel is an end-to-end vine-level management system. Drop every vine once with sub-centimeter GNSS. Attach disease status, phenology, yield estimates, photos, and lab results. Issue vine-specific work orders that auto-update as work is completed. Analyze trends across vintages.
          </p>
          <p>
            We operate out of Spongy Mesophyll Technologies—named for the layer of leaf tissue where photosynthesis, transpiration, and most pathogens quietly do their work. Invisible, essential, and the foundation of everything above.
          </p>
        </div>
      </section>

      {/* ============ SECTION 02—PRINCIPLES ============ */}
      <div className="section-head container-lp">
        <span className="idx">02 &middot; Principles</span>
        <h2>What we believe <em>about vineyard data.</em></h2>
      </div>

      <section className="principles container-lp">
        <div className="principle">
          <div className="num">01</div>
          <h3>Ground truth beats aerial guesses.</h3>
          <p>A vine&apos;s condition is something a human confirms, not an algorithm. We build tools that make confirming fast—not tools that pretend pixels are plants.</p>
        </div>
        <div className="principle">
          <div className="num">02</div>
          <h3>Data has to live longer than crews.</h3>
          <p>Vineyards outlive employees. The institutional memory of which vine was grafted when, and why, has to survive in a system—not a crew foreman&apos;s head.</p>
        </div>
        <div className="principle">
          <div className="num">03</div>
          <h3>Precision is a practice, not a product.</h3>
          <p>Sub-centimeter accuracy is meaningless if the workflow around it is painful. We obsess over the walk-up loop: the vine, the phone, the record, back to work.</p>
        </div>
      </section>

      {/* ============ SECTION 03—TEAM ============ */}
      <section className="team container-lp">
        <div className="team-head">
          <div className="idx">03 &middot; Leadership</div>
          <h2>Napa meets <em>Silicon Valley.</em></h2>
        </div>
        <div className="team-grid">
          <div>
            <div className="portrait">
              <img src="/img/sdemartino.webp" alt="Shawn DeMartino" />
            </div>
            <div>
              <div className="role">CEO &amp; Co-Founder</div>
              <h4>Shawn DeMartino</h4>
              <p>Shawn is the General Manager of Grace Family Vineyards in St. Helena, with prior viticulture roles at Harlan Estate and Screaming Eagle. As Director of Viticulture he pioneered the development and implementation of Sentinel&apos;s vine mapping technology. Shawn leads the company&apos;s strategic direction, sales and user engagement, as an expert in all things vineyard and wine related. He graduated from Harvard University in 2014.</p>
              <dl>
                <dt>Currently</dt><dd>General Manager &middot; Grace Family Vineyards</dd>
                <dt>Prior</dt><dd>Harlan Estate &middot; Screaming Eagle</dd>
                <dt>Education</dt><dd>Harvard, A.B. &apos;14</dd>
              </dl>
            </div>
          </div>
          <div>
            <div className="portrait">
              <img src="/img/csidak.webp" alt="Christian Sidak" />
            </div>
            <div>
              <div className="role">CTO &amp; Co-Founder</div>
              <h4>Christian Sidak</h4>
              <p>Christian Sidak co-founded Spongy Mesophyll Technologies with Shawn in January 2023. Before, Christian worked as a product manager and engineer at Palantir Technologies, an enterprise software company, developing new AI products in the defense and healthcare sectors. At Spongy Mesophyll Technologies, Christian shapes the technical and engineering decisions of the company and translates user needs into code applications. He graduated from Harvard University in 2017.</p>
              <dl>
                <dt>Prior</dt><dd>Palantir Technologies</dd>
                <dt>Education</dt><dd>Harvard, A.B. &apos;17</dd>
                <dt>Languages</dt><dd>Eleven, and counting</dd>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ============ SECTION 04—CONTACT CTA ============ */}
      <section>
        <div className="cta-band container-lp">
          <div>
            <div className="kicker" style={{ marginBottom: 24 }}>04 &middot; Contact</div>
            <h3>Tell us about <em>your vineyard.</em></h3>
          </div>
          <div className="actions">
            <Link href="/press" className="cta-ghost">Press</Link>
            <Link href="/contact" className="cta-solid">
              Get in Touch <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

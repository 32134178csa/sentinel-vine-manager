import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppPage from '@/components/AppPage'
import { AnalyticsService } from '@/services/AnalyticsService'
import FooterV2 from '@/components/FooterV2'
import PreFooterCTA from '@/components/PreFooterCTA'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const NdviPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>NDVI vs Sentinel | Sentinel Vine Manager</title>
        <meta
          name="description"
          content="Aerial NDVI is beautiful. It's also abstract. Here's what changes when you measure a vineyard from the ground, vine by vine."
        />
        <meta
          name="keywords"
          content="NDVI, vineyard mapping, vine tracking, precision viticulture, remote sensing, Sentinel Vine Manager, ground truth"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        {/* Open Graph */}
        <meta property="og:title" content="NDVI tells you where. Sentinel tells you why." />
        <meta property="og:description" content="Aerial NDVI is beautiful. It's also abstract. Here's what changes when you measure a vineyard from the ground, vine by vine." />
        <meta property="og:type" content="article" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NDVI tells you where. Sentinel tells you why." />
        <meta name="twitter:description" content="Aerial NDVI is beautiful. It's also abstract. Here's what changes when you measure a vineyard from the ground, vine by vine." />
      </Head>
      <AppPage>
        <div className="ndvi-page" data-page="ndvi">

          {/* ============ POST HERO ============ */}
          <header className="post-hero container-lp">
            <div className="crumbs">
              <Link href="/">Sentinel</Link> &middot; <Link href="/blog">Blog</Link> &middot; Field Notes
            </div>
            <div className="tag">Precision Viticulture &middot; 7 min read</div>
            <h1>
              NDVI tells you <em>where.</em>{' '}
              Sentinel tells you <em>why.</em>
            </h1>
            <div className="meta">
              <div>
                <b>Published</b>
                February 14, 2026
              </div>
              <div>
                <b>Author</b>
                Tom M. &middot; Head of Viticulture
              </div>
              <div>
                <b>Topic</b>
                Precision Viticulture &middot; Remote Sensing
              </div>
            </div>
          </header>

          {/* ============ POST BODY ============ */}
          <article className="post-body">

            <p className="lede">
              Aerial NDVI is beautiful. It&apos;s also abstract. It can tell you that a patch of your vineyard is &quot;less green&quot; than another -- and it will stop there. Here&apos;s what changes when you measure a vineyard from the ground, vine by vine.
            </p>

            <p>
              For the past decade, drone and satellite vegetation indices have been marketed to vineyard owners as the future of precision viticulture. The pitch is seductive: a pilot flies your blocks once a month, a machine-learning model classifies pixels, and a beautiful map lands in your inbox showing &quot;problem areas&quot; in warm reds and healthy vines in cool greens.
            </p>

            <p>
              We love the image. We use it ourselves to prioritize where to walk first. But a decade in, we can say with confidence:
            </p>

            <div className="pullquote">
              NDVI is not a vineyard management system.<br />
              It&apos;s a heatmap. And heatmaps have <em>limits.</em>
            </div>

            <h2>What NDVI <em>actually</em> measures.</h2>

            <p>
              The Normalized Difference Vegetation Index compares how much red light a plant absorbs against how much near-infrared light it reflects. Healthy, photosynthesizing canopy shows a strong signal; stressed or sparse canopy shows a weaker one. From 120 meters up, that signal gets bucketed into pixels roughly the size of a picnic table.
            </p>

            <p>
              Each pixel represents a blend of vine canopy, cover crop, shadow, dirt, trellis wire, and whatever else the camera saw. The algorithm then averages all of that, normalizes it, and paints it on a map.
            </p>

            {/* ============ COMPARISON: NDVI vs Ground Truth ============ */}
            <div className="compare">
              <div>
                <h4>Exhibit A &middot; Aerial NDVI</h4>
                <h5>What the <em>map</em> sees.</h5>
                <p>A patch of yellow-red in the south-west corner of Block 7. Inference: stress.</p>
                <div className="viz">
                  <div className="ndvi-bg" />
                </div>
              </div>
              <div>
                <h4>Exhibit B &middot; Ground Truth</h4>
                <h5>What the <em>vines</em> tell us.</h5>
                <p>Seventy-nine individual vines with confirmed Red Blotch, across four non-contiguous rows.</p>
                <div className="viz">
                  <VineGrid />
                </div>
              </div>
            </div>

            <p>
              In this case, the aerial index and the ground truth roughly agree: there&apos;s a problem in the south-west. But they agree at completely different resolutions -- and, crucially, they don&apos;t agree on <strong>what</strong> the problem is. That&apos;s the gap Sentinel exists to close.
            </p>

            <h2>Three things NDVI can&apos;t tell you.</h2>

            <p>We keep a running list. The big three:</p>

            <ul>
              <li>
                <strong>Disease vs. stress.</strong> A Red Blotch-positive vine and an under-irrigated vine can read identically in NDVI during the second half of the season. The management decisions they call for are opposite.
              </li>
              <li>
                <strong>Which vine.</strong> A warm-colored pixel contains five to twelve individual plants. You still have to walk the row to know which ones to tag, test, or rogue. The map doesn&apos;t do that work.
              </li>
              <li>
                <strong>What changed since last year.</strong> NDVI baselines drift with weather, cover-crop height, pruning intensity, and camera calibration. Year-over-year spread of a pathogen -- the single most important number in premium viticulture -- is not directly recoverable from the index.
              </li>
            </ul>

            <div className="pullquote">
              A pixel is not a plant.<br />
              A vineyard is a collection of individual decisions, <em>not a heatmap.</em>
            </div>

            <h2>A worked example.</h2>

            <p>
              Early in 2025 we onboarded a 14-hectare Napa Valley estate already running monthly NDVI flights. Their aerial reports consistently flagged a 0.3-hectare &quot;hot zone&quot; in Block 4 -- warm-colored, persistent, stressful to look at.
            </p>

            <p>
              Their assumption, based on the map alone, was Leafroll. The plan was to rogue the entire zone in winter 2025/26.
            </p>

            <p>
              We mapped every vine in Block 4 with Sentinel -- 3,840 of them -- in a single afternoon. Then their scouting crew walked the block with the Vine By Vine&trade; app, tagging any vine with symptoms consistent with Leafroll or Red Blotch. Samples went to the lab with auto-generated labels. Results came back two weeks later.
            </p>

            {/* ============ CALLOUT FIGURE ============ */}
            <div className="callout-figure">
              <div className="cap">
                <span>Figure 1 &middot; Block 4 &middot; Post-Sample</span>
                <b>Positive &middot; Symptomatic &middot; Healthy</b>
              </div>
              <div className="viz">
                <BlockFourGrid />
              </div>
            </div>

            <p>
              The actual positives: <strong>79 vines</strong>. Not 3,840. Not even half the aerial &quot;hot zone.&quot; And the diagnosis was Red Blotch, not Leafroll.
            </p>

            <p>
              Seventy-nine vines can be rogued and replanted for roughly the cost of two dinners for the Coravin club. The alternative -- rip out the whole zone, lose four vintages while the new vines mature, spend six figures -- was avoidable. The NDVI flight didn&apos;t make that visible. The vine-by-vine record did.
            </p>

            <h2>So... do we still recommend aerial NDVI?</h2>

            <p>
              Yes, for one specific purpose: as a <strong>prioritization layer</strong>. A monthly flight gives your scouting team a reasonable opinion about which blocks to walk first. That&apos;s useful. What it cannot do is replace the walk.
            </p>

            <p>
              The workflow we&apos;ve converged on with our clients looks like this:
            </p>

            <h3>Step 1 -- NDVI</h3>
            <p>identifies blocks that deserve attention.</p>

            <h3>Step 2 -- Sentinel</h3>
            <p>ground-truths each vine in those blocks: disease status, production status, photos, lab results.</p>

            <h3>Step 3 -- Work Orders</h3>
            <p>dispatch roguing, sampling, or irrigation changes at the vine level.</p>

            <h3>Step 4 -- Historical Analysis</h3>
            <p>compares this vintage&apos;s vine-level map to last year&apos;s to measure actual spread.</p>

            <p>
              The aerial index points at an area of the map. The vine record tells you what to do. Both matter. One of them is a permanent asset on your balance sheet; the other is a monthly JPEG.
            </p>

            <h2>Where this is going.</h2>

            <p>
              Our thesis is simple: <strong>every vine in every premium vineyard in the world will, eventually, have a permanent digital record.</strong>
            </p>

            <p>
              That record is a lifetime asset. It survives management changes, ownership changes, and climate shifts. It turns every vintage into training data for the next one.
            </p>

            <p>
              Ground-truth data collected vine-by-vine is how you build that record. NDVI is how you decide where to start collecting it.
            </p>

          </article>

          {/* ============ CTA BAND ============ */}
          <section>
            <div className="cta-band container-lp">
              <div>
                <div className="kicker" style={{ marginBottom: 24 }}>
                  See It In Action
                </div>
                <h3>
                  Want to see how this works <em>on your vineyard?</em>
                </h3>
              </div>
              <div className="actions">
                <Link href="/contact" className="cta-solid" onClick={() => AnalyticsService.trackDemoClick('ndvi_cta_band')}>
                  Schedule a Demo <span className="arrow" />
                </Link>
              </div>
            </div>
          </section>

          {/* ============ NEXT POSTS ============ */}
          <section className="next-posts container-lp">
            <h3>Keep reading</h3>
            <div className="links">
              <Link href="/blog/rtk-gps-vineyard-guide">
                <div className="date">2026.01.14</div>
                <h4>Why sub-centimeter accuracy <em>matters.</em></h4>
              </Link>
              <Link href="/blog/vineyard-work-order-management">
                <div className="date">2025.12.03</div>
                <h4>From clipboard to work order: <em>rethinking the scout loop.</em></h4>
              </Link>
            </div>
          </section>

          {/* ============ PRE-FOOTER CTA ============ */}
          <PreFooterCTA source="ndvi_pre_footer" />

          {/* ============ FOOTER ============ */}
          <FooterV2 />
        </div>
      </AppPage>
    </>
  )
}

export default NdviPage

/* ============================================================
   Inline data-driven visual components
   ============================================================ */

/** Small vine grid for the "Ground Truth" comparison panel */
function VineGrid() {
  // Seeded random for consistent SSR - 20x12 grid, ~10% virus
  const rows = 12
  const cols = 20
  const virusPositions = new Set([
    '2,3','2,4','3,3','3,4','3,5',
    '5,1','5,2','6,1','6,2','6,3',
    '7,14','7,15','8,14','8,15','8,16',
    '9,2','9,3','10,2','10,3','10,4',
    '4,8','4,9','5,8',
  ])

  const dots = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `${r},${c}`
      const isVirus = virusPositions.has(key)
      dots.push(
        <span
          key={key}
          className={`vine-dot ${isVirus ? 'vine-dot--virus' : 'vine-dot--healthy'}`}
          style={{ width: 8, height: 8, borderRadius: '50%', display: 'inline-block' }}
        />
      )
    }
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 3,
      padding: 12,
      height: '100%',
      alignContent: 'center',
    }}>
      {dots}
    </div>
  )
}

/** Larger vine grid for the Block 4 callout figure */
function BlockFourGrid() {
  const rows = 24
  const cols = 32
  // ~2% positive (79/768), small cluster in SW quadrant + scattered
  const positiveSet = new Set([
    '14,3','14,4','14,5','15,3','15,4','15,5','15,6',
    '16,2','16,3','16,4','16,5','16,6','16,7',
    '17,3','17,4','17,5','17,6','17,7',
    '18,4','18,5','18,6','18,7','18,8',
    '19,4','19,5','19,6','19,7',
    '20,5','20,6','20,7',
    // Scattered non-contiguous
    '8,11','8,12','9,11',
    '6,22','6,23','7,22',
    '12,18','12,19','13,18',
    '3,8','3,9',
    '10,26','10,27','11,26',
    '21,12','21,13',
    '15,20','15,21',
    '19,15','19,16',
    '22,8','22,9',
    '5,28','5,29',
    '17,24','17,25',
    '13,6','13,7',
    '9,19',
    '20,21',
    '4,15',
    '11,3',
    '16,28',
    '23,18',
    '2,25',
    '7,6',
    '18,14',
    '21,27',
    '1,12',
    '19,30',
    '22,22',
    '10,1',
    '14,11',
    '6,16',
    '20,3',
    '3,21',
    '8,27',
    '17,1',
  ])
  // Symptomatic halo around some positives
  const symptomaticSet = new Set([
    '13,3','13,4','13,5','14,2','14,6',
    '15,2','15,7','16,1','16,8',
    '17,2','17,8','18,3','18,9',
    '19,3','19,8','20,4','20,8',
    '21,5','21,6','21,7',
  ])

  const dots = []
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const key = `${r},${c}`
      let cls = 'vine-dot vine-dot--healthy'
      if (positiveSet.has(key)) cls = 'vine-dot vine-dot--virus'
      else if (symptomaticSet.has(key)) cls = 'vine-dot vine-dot--rootstock'
      dots.push(
        <span
          key={key}
          className={cls}
          style={{ width: 6, height: 6, borderRadius: '50%', display: 'inline-block' }}
        />
      )
    }
  }

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: `repeat(${cols}, 1fr)`,
      gap: 2,
      padding: 16,
      height: '100%',
      alignContent: 'center',
    }}>
      {dots}
    </div>
  )
}

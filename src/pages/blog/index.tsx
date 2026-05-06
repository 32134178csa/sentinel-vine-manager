import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppPage from '@/components/AppPage'
import VineMap from '@/components/VineMap'
import { useTranslation } from 'next-i18next'
import { formatBlogContent, BlogPostMap } from '@/services/BlogService'
import { useState } from 'react'
import fs from 'fs'
import path from 'path'

interface BlogPageProps {
  posts: BlogPostMap;
}

const TOPICS = ['All', 'Disease', 'Precision Viticulture', 'Geospatial', 'Operations', 'Research'] as const;

/** Simple topic classifier based on post title and content keywords */
function classifyTopic(title: string, content: string): string {
  const text = `${title} ${content}`.toLowerCase();
  if (/red blotch|leafroll|disease|virus|crown gall|esca|mildew|botrytis/.test(text)) return 'Disease';
  if (/gps|rtk|drone|ndvi|mapping|geospatial|satellite/.test(text)) return 'Geospatial';
  if (/precision viticulture|vine.level|vine-by-vine|roi/.test(text)) return 'Precision Viticulture';
  if (/work order|crew|compliance|pesticide|pur|replant|cellar|software|buyer/.test(text)) return 'Operations';
  return 'Research';
}

/** Format date as YYYY.MM.DD from a post key or date string */
function formatPostDate(key: string): string {
  const dateMap: Record<string, string> = {
    'the-red-blotch-dilemma': '2024.08.10',
    'why-excel-is-an-expensive-way-to-map-virus': '2024.09.05',
    'ndvi-vs-sentinel-vine-mapping': '2025.01.20',
    'vine-data-during-a-downturn': '2025.03.14',
    'the-replant-decision': '2025.04.02',
    'the-knowledge-that-walks-out-the-door': '2025.04.08',
    'vineyard-management-software-buyers-guide-2026': '2026.01.15',
    'vine-level-disease-tracking-program': '2026.02.10',
    'rtk-gps-vineyard-guide': '2026.02.28',
    'drone-vineyard-mapping-vs-ground-truth': '2026.03.12',
    'cellar-management-software-winery-guide': '2026.03.20',
    'vineyard-work-orders-crew-management': '2026.03.28',
    'pesticide-use-reporting-vineyard-compliance': '2026.04.02',
    'vineyard-replanting-cost-roi-guide': '2026.04.08',
    'precision-viticulture-roi-vine-level-data': '2026.04.15',
    'what-is-digital-flagging-tape': '2026.04.24',
    'digital-flagging-tape-vineyards': '2026.05.06',
    'vine-level-records-premium-estates': '2026.04.22',
    'satellite-drone-gps-vineyard-accuracy-comparison': '2026.04.20',
    'california-pur-reporting-vineyard-automation': '2025.06.10',
    'leafroll-virus-vineyard-tracking-software': '2025.07.15',
    'red-blotch-in-2025': '2025.05.03',
    'rtk-gps-vineyards-pinpoint-rtk-vs-sentinel': '2025.11.15',
    'should-i-fire-my-farming-company': '2025.05.02',
    'vine-by-vine-tracking-vineyard-gps': '2025.08.20',
    'vineyard-management-company-software': '2025.09.12',
    'vineyard-work-order-management': '2025.10.05',
    'vineyard-management-at-scale-per-vine-records': '2026.04.23',
    'what-vine-level-records-look-like-at-scale': '2026.04.25',
  };
  return dateMap[key] || '2026.01.01';
}

export const getStaticProps: GetStaticProps<BlogPageProps> = async ({ locale }) => {
  let allPosts: BlogPostMap = {};
  try {
    const fileContents = fs.readFileSync(
      path.join(process.cwd(), 'src/data/press', `${locale || 'en'}.json`),
      'utf8'
    );
    allPosts = JSON.parse(fileContents);
  } catch {
    const defaultContents = fs.readFileSync(
      path.join(process.cwd(), 'src/data/press', 'en.json'),
      'utf8'
    );
    allPosts = JSON.parse(defaultContents);
  }

  // Filter to only blog posts (internal content, not external press)
  const blogPosts: BlogPostMap = {};
  for (const [key, post] of Object.entries(allPosts)) {
    if (post.author === 'Sentinel Blog') {
      blogPosts[key] = post;
    }
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['common'])),
      posts: blogPosts,
    },
  };
};

const BlogPage: NextPage<BlogPageProps> = ({ posts }) => {
  useTranslation('common');
  const MAX_EXCERPT = 180;
  const [activeTopic, setActiveTopic] = useState<string>('All');

  const postEntries = Object.entries(posts);
  const [featuredKey, featuredPost] = postEntries[0] || [];
  const remainingPosts = postEntries.slice(1);

  const filteredPosts = activeTopic === 'All'
    ? remainingPosts
    : remainingPosts.filter(([, p]) => classifyTopic(p.title, p.content) === activeTopic);

  // Group into rows of 3
  const rows: typeof filteredPosts[] = [];
  for (let i = 0; i < filteredPosts.length; i += 3) {
    rows.push(filteredPosts.slice(i, i + 3));
  }

  return (
    <>
      <Head>
        <title>Blog | Sentinel Vine Manager</title>
        <meta
          name="description"
          content="Notes from the rows, the lab, and the code. Research, opinion, and product news from the Sentinel team."
        />
        <meta
          name="keywords"
          content="vineyard blog, viticulture, vine management, precision agriculture, vineyard technology"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppPage>
        <div className="press-v2" data-page="blog">

          {/* ============ PAGE HERO ============ */}
          <header className="page-hero container-lp">
            <div className="idx">Blog &middot; Field Notes</div>
            <h1>
              Notes from the rows, <em>the lab, &amp; the code.</em>
            </h1>
            <p className="lede">
              Things we learn running vine-by-vine management systems across
              thousands of acres. Research, opinion, and occasional product news.
            </p>
          </header>

          {/* ============ TOPICS FILTER ============ */}
          <div className="topics">
            <span className="label">Topics</span>
            {TOPICS.map((topic) => (
              <button
                key={topic}
                className={activeTopic === topic ? 'active' : ''}
                onClick={() => setActiveTopic(topic)}
              >
                {topic}
              </button>
            ))}
          </div>

          {/* ============ FEATURED POST ============ */}
          {featuredPost && (
            <section className="featured-post">
              <div className="mono" style={{
                color: 'var(--ink-mute)', fontSize: '11px',
                letterSpacing: '0.18em', textTransform: 'uppercase',
              }}>Featured</div>
              <Link href={featuredPost.url} className="card">
                <div className="copy">
                  <span className="tag">
                    {classifyTopic(featuredPost.title, featuredPost.content)} &middot; 7 min read
                  </span>
                  <h2>{featuredPost.title}</h2>
                  <p className="excerpt">
                    {formatBlogContent(featuredPost.content, 260)}
                  </p>
                  <div className="meta">
                    <span>{formatPostDate(featuredKey)?.replace(/\./g, '/').replace(/^(\d{4})\/(\d{2})\/\d{2}$/, (_, y, m) => {
                      const months = ['','January','February','March','April','May','June','July','August','September','October','November','December'];
                      return `${months[parseInt(m)]} ${y}`;
                    })}</span>
                    <span><b>Sentinel</b> &middot; Field Notes</span>
                  </div>
                </div>
                <div className="visual" aria-hidden="true">
                  <VineMap rows={14} vines={36} variant="disease" hud={false} />
                </div>
              </Link>
            </section>
          )}

          {/* ============ SECTION HEAD ============ */}
          <div className="section-head container-lp">
            <div className="idx">Recent Posts</div>
            <h2>More from <em>the team.</em></h2>
          </div>

          {/* ============ POST CARD GRID ============ */}
          {rows.map((row, ri) => (
            <div className="posts-grid" key={ri}>
              {row.map(([key, post]) => {
                const topic = classifyTopic(post.title, post.content);
                return (
                  <Link key={key} href={post.url} className="post-card">
                    <div className="date">{formatPostDate(key)}</div>
                    <span className="tag">{topic}</span>
                    <h3>{post.title}</h3>
                    <p>{formatBlogContent(post.content, MAX_EXCERPT)}</p>
                    <div className="read">Read</div>
                  </Link>
                );
              })}
            </div>
          ))}

          {/* ============ SUBSCRIBE CTA ============ */}
          <section className="cta-band">
            <div>
              <div className="kicker" style={{ marginBottom: 24 }}>Subscribe</div>
              <h3>Field notes, <em>monthly.</em></h3>
            </div>
            <div className="actions">
              <form
                style={{ display: 'flex', gap: '8px' }}
                onSubmit={(e) => {
                  e.preventDefault();
                  const btn = (e.target as HTMLFormElement).querySelector('button');
                  if (btn) btn.textContent = 'Subscribed \u2713';
                }}
              >
                <input
                  type="email"
                  placeholder="you@winery.com"
                  style={{
                    background: 'transparent',
                    border: '1px solid var(--line)',
                    color: 'var(--ink)',
                    padding: '10px 14px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '12px',
                    minWidth: '260px',
                  }}
                  required
                />
                <button className="cta-solid" type="submit">
                  Subscribe <span className="arrow" />
                </button>
              </form>
            </div>
          </section>

        </div>
      </AppPage>
    </>
  );
};

export default BlogPage;

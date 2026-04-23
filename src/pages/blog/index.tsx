import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppPage from '@/components/AppPage'
import { useTranslation } from 'next-i18next'
import { formatBlogContent, BlogPostMap } from '@/services/BlogService'
import { AnalyticsService } from '@/services/AnalyticsService'
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
  const [, featuredPost] = postEntries[0] || [];
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
              Notes from the rows, the lab, <em>&amp; the code.</em>
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
              <div className="idx">Featured</div>
              <Link href={featuredPost.url} className="card">
                <div className="copy">
                  <span className="tag">{classifyTopic(featuredPost.title, featuredPost.content)}</span>
                  <h2>{featuredPost.title}</h2>
                  <p className="excerpt">
                    {formatBlogContent(featuredPost.content, 260)}
                  </p>
                  <div className="meta">
                    <span><b>Author</b> Sentinel</span>
                    <span><b>Topic</b> {classifyTopic(featuredPost.title, featuredPost.content)}</span>
                  </div>
                </div>
                <div className="visual" aria-hidden="true" />
              </Link>
            </section>
          )}

          {/* ============ SECTION HEAD ============ */}
          <div className="section-head container-lp">
            <div className="idx">Recent</div>
            <h2>More from <em>the team.</em></h2>
          </div>

          {/* ============ POST CARD GRID ============ */}
          {rows.map((row, ri) => (
            <div className="posts-grid" key={ri}>
              {row.map(([key, post]) => {
                const topic = classifyTopic(post.title, post.content);
                return (
                  <Link key={key} href={post.url} className="post-card">
                    <div className="date">2026</div>
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
          <section className="subscribe-band">
            <span className="label">Subscribe</span>
            <div className="inner">
              <h3>Get new posts <em>in your inbox.</em></h3>
              <form onSubmit={(e) => { e.preventDefault(); }}>
                <input type="email" placeholder="you@estate.com" aria-label="Email address" />
                <button type="submit">Subscribe</button>
              </form>
            </div>
          </section>

          {/* ============ CTA BAND ============ */}
          <section>
            <div className="cta-band container-lp">
              <div>
                <div className="kicker" style={{ marginBottom: 24 }}>
                  Get Started
                </div>
                <h3>
                  Ready to see your vineyard <em>vine by vine?</em>
                </h3>
              </div>
              <div className="actions">
                <Link href="/press" className="cta-ghost">
                  Press &amp; Media
                </Link>
                <Link href="/contact" className="cta-solid" onClick={() => AnalyticsService.trackDemoClick('blog_cta_band')}>
                  Schedule a Demo <span className="arrow" />
                </Link>
              </div>
            </div>
          </section>

        </div>
      </AppPage>
    </>
  );
};

export default BlogPage;

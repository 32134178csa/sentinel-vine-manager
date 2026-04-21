import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppPage from '@/components/AppPage'
import { useTranslation } from 'next-i18next'
import { formatBlogContent, BlogPostMap } from '@/services/BlogService'
import { APP_HOST } from '@/config'
import fs from 'fs'
import path from 'path'

interface BlogPageProps {
  posts: BlogPostMap;
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
  const MAX_BLOG_INTRO_LENGTH = 220;
  const postEntries = Object.entries(posts);

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

          {/* ============ SECTION HEAD ============ */}
          <div className="section-head container-lp">
            <div className="idx">Recent</div>
            <h2>From <em>the field.</em></h2>
          </div>

          {/* ============ BLOG POSTS ============ */}
          <section className="press-list container-lp">
            {postEntries.map(([key, post]) => (
              <Link key={key} href={post.url} className="press-item">
                <div className="press-img-wrap">
                  {post.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.image}
                      alt={post.title}
                      className="press-img"
                    />
                  )}
                </div>
                <div>
                  <span className="type">Blog</span>
                </div>
                <div>
                  <h3>{post.title}</h3>
                  <p>{formatBlogContent(post.content, MAX_BLOG_INTRO_LENGTH)}</p>
                </div>
                <div className="pub">{post.author}</div>
                <div className="arrow-r" />
              </Link>
            ))}
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
                <div className="foot-brand">
                  <Image
                    src="/img/transparent-logo.webp"
                    alt="Sentinel Logo"
                    width={32}
                    height={32}
                  />
                  <div className="name">Sentinel.</div>
                  <p>
                    The patient medical record for your vineyard. Built by
                    winegrowers, for winegrowers -- from California to six countries
                    worldwide. A product of Spongy Mesophyll Technologies.
                  </p>
                </div>

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

                <div className="foot-col">
                  <h5>Company</h5>
                  <ul>
                    <li><Link href="/about">About</Link></li>
                    <li><Link href="/blog">Blog</Link></li>
                    <li><Link href="/press">Press</Link></li>
                    <li><Link href="/faqs">FAQs</Link></li>
                  </ul>
                </div>

                <div className="foot-col">
                  <h5>Get Started</h5>
                  <ul>
                    <li><Link href="/contact">Schedule a Demo</Link></li>
                    <li><a href="#">Buy Now</a></li>
                    <li>
                      <a
                        href="https://apps.apple.com/app/sentinel-vine-manager/id1608970406"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Download on App Store
                      </a>
                    </li>
                    <li><a href={APP_HOST + '/login'}>User Login</a></li>
                  </ul>
                </div>

                <div className="foot-col">
                  <h5>Contact</h5>
                  <ul>
                    <li><a href="mailto:support@sentineltech.eu">support@sentineltech.eu</a></li>
                    <li><a href="#">Napa &middot; California</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><Link href="/privacy">Privacy Policy</Link></li>
                  </ul>
                </div>
              </div>

              <div className="foot-bottom">
                <span>&copy; 2026 Spongy Mesophyll Technologies &middot; Sentinel Vine Manager&trade;</span>
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
      </AppPage>
    </>
  );
};

export default BlogPage;

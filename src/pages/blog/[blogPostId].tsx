import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import Link from 'next/link'
import matter from 'gray-matter';
import AppPage from '@/components/AppPage'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PreFooterCTA from '@/components/PreFooterCTA';
import { AnalyticsService } from '@/services/AnalyticsService'
import { BlogPostMap } from '@/services/BlogService'


interface NextPost {
  slug: string;
  title: string;
  date?: string;
}

interface BlogPostProps {
  content: string;
  blogPostId: string;
  frontmatter: {
    title: string;
    description?: string;
    keywords?: string[];
    date?: string;
    author?: string;
    authorTitle?: string;
    topic?: string;
    readTime?: string;
    //eslint-disable-next-line
    [key: string]: any;
  };
  nextPosts: NextPost[];
}

export default function BlogPostPage({ content, blogPostId, frontmatter, nextPosts }: BlogPostProps) {
  const { t } = useTranslation('common')
  AnalyticsService.logPageView();

  if (!frontmatter?.title) {
    console.error(`Missing frontmatter.title during render for blogPostId: ${blogPostId}`);
    console.log(content)
    return <AppPage><div>Error loading blog post.</div></AppPage>;
  }

  return (
    <>
      <Head>
        <title>{`${frontmatter.title} | ${t("companyTitle")}`}</title>
        <meta name="description" content={frontmatter.description || ''} />
        {frontmatter.keywords && (
          <meta name="keywords" content={frontmatter.keywords.join(', ')} />
        )}
        <link rel="canonical" href={`https://site.sentineltech.eu/blog/${blogPostId}`} />
        {/* Open Graph */}
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description || ''} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://site.sentineltech.eu/blog/${blogPostId}`} />
        <meta property="og:site_name" content="Sentinel" />
        {frontmatter.image && (
          <meta property="og:image" content={`https://site.sentineltech.eu${frontmatter.image}`} />
        )}
        {frontmatter.date && (
          <meta property="article:published_time" content={frontmatter.date} />
        )}
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description || ''} />
        {frontmatter.image && (
          <meta name="twitter:image" content={`https://site.sentineltech.eu${frontmatter.image}`} />
        )}
        {/* JSON-LD Article Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              "headline": frontmatter.title,
              "description": frontmatter.description || '',
              "datePublished": frontmatter.date || '',
              "author": {
                "@type": "Person",
                "name": frontmatter.author || "Sentinel"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Sentinel",
                "url": "https://site.sentineltech.eu"
              },
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": `https://site.sentineltech.eu/blog/${blogPostId}`
              },
              ...(frontmatter.image ? { "image": `https://site.sentineltech.eu${frontmatter.image}` } : {}),
              ...(frontmatter.keywords ? { "keywords": frontmatter.keywords.join(', ') } : {})
            })
          }}
        />
      </Head>
      <AppPage>
        <div className="press-v2" data-page="blog">

          {/* ============ POST HERO ============ */}
          <header className="post-hero">
            <nav className="crumbs">
              <Link href="/blog">Blog</Link> / {frontmatter.topic || 'Field Notes'}
            </nav>
            {frontmatter.topic && (
              <span className="tag">{frontmatter.topic}</span>
            )}
            <h1>{frontmatter.title}</h1>
            <div className="meta">
              {frontmatter.date && (
                <div>
                  <b>Published</b>
                  {frontmatter.date}
                </div>
              )}
              <div>
                <b>Author</b>
                {frontmatter.author || 'Sentinel'}
              </div>
              {frontmatter.readTime && (
                <div>
                  <b>Read</b>
                  {frontmatter.readTime}
                </div>
              )}
              {frontmatter.topic && (
                <div>
                  <b>Topic</b>
                  {frontmatter.topic}
                </div>
              )}
            </div>
          </header>

          {/* ============ POST BODY ============ */}
          <div className="post-body">
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>

          {/* ============ KEEP READING ============ */}
          {nextPosts.length > 0 && (
            <div className="next-posts">
              <h3>Keep Reading</h3>
              <div className="links">
                {nextPosts.map((np) => (
                  <Link key={np.slug} href={`/blog/${np.slug}`}>
                    {np.date && <div className="date">{np.date}</div>}
                    <h4>{np.title}</h4>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* ============ CTA ============ */}
          <div style={{ maxWidth: 760, margin: '0 auto', padding: '0 32px 64px' }}>
            <PreFooterCTA source="blog_post" />
          </div>

        </div>
      </AppPage>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['en', 'fr', 'es', 'it']

  const paths: { params: { blogPostId: string }, locale: string }[] = []

  for (const locale of locales) {
    console.log("Rendering localized blog for locale", locale);

    const dirPath = path.join(process.cwd(), 'public', 'markdowns', locale)
    if (fs.existsSync(dirPath)) {
      const files = fs.readdirSync(dirPath)
      files.forEach((filename) => {
        const blogPostId = filename.replace('.md', '')
        console.log("Rendering blogPostId:", blogPostId);

        paths.push({ params: { blogPostId }, locale })
      })
    }
  }

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params, locale }) => {
  const blogPostId = params?.blogPostId as string;
  const language = locale ?? 'en';

  console.log(`Building blogPostId: ${blogPostId}, Locale: ${language}`);

  const getMdFile = (lang: string) =>
    path.join(process.cwd(), 'public', 'markdowns', lang, `${blogPostId}.md`);

  let raw: string = '';

  try {
    raw = fs.readFileSync(getMdFile(language), 'utf8');
  } catch (e1) {
    console.error(e1);
    console.warn(`Missing localized file for ${language}/${blogPostId}.md`);
    try {
      raw = fs.readFileSync(getMdFile('en'), 'utf8');
      console.warn(`Fell back to EN file for ${blogPostId}`);
    } catch (e2) {
      console.error(`Missing fallback file for ${blogPostId}`, e2);
      return { notFound: true };
    }
  }

  if (!raw || raw.trim() === '') {
    console.error(`Markdown file is empty for ${blogPostId}`);
    return { notFound: true };
  }

  const { content, data: frontmatter } = matter(raw);

  if (!frontmatter || !frontmatter.title) {
    console.error(`Missing frontmatter.title for ${blogPostId}`);
    return { notFound: true };
  }

  // Build "Keep Reading" links from other blog posts
  const nextPosts: NextPost[] = [];
  try {
    const pressJson = fs.readFileSync(
      path.join(process.cwd(), 'src/data/press', 'en.json'),
      'utf8'
    );
    const allPosts: BlogPostMap = JSON.parse(pressJson);
    const blogEntries = Object.entries(allPosts).filter(
      ([, p]) => p.author === 'Sentinel Blog' && !p.url.endsWith(blogPostId)
    );
    // Pick up to 2 other blog posts
    const picked = blogEntries.slice(0, 2);
    for (const [, post] of picked) {
      const slug = post.url.replace('/blog/', '');
      nextPosts.push({
        slug,
        title: post.title,
        date: '2026',
      });
    }
  } catch {
    // Non-critical -- skip keep reading section
  }

  const translations = await serverSideTranslations(locale ?? 'en', ['common']);

  return {
    props: {
      ...translations,
      content,
      blogPostId,
      frontmatter,
      nextPosts,
    },
  };
};

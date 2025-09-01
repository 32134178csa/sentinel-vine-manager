import { GetStaticProps, GetStaticPaths } from 'next'
import fs from 'fs'
import path from 'path'
import ReactMarkdown from 'react-markdown'
import Head from 'next/head'
import matter from 'gray-matter';
import AppPage from '@/components/AppPage'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Spacer from '@/components/Spacer';
import { AnalyticsService } from '@/services/AnalyticsService'


interface BlogPostProps {
  content: string;
  blogPostId: string;
  frontmatter: {
    title: string;
    description?: string;
    keywords?: string[];
    //eslint-disable-next-line
    [key: string]: any;
  };
}

export default function BlogPostPage({ content, blogPostId, frontmatter }: BlogPostProps) {
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
        {/* Open Graph */}
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:description" content={frontmatter.description || ''} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://yourdomain.com/blog/${blogPostId}`} />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={frontmatter.title} />
        <meta name="twitter:description" content={frontmatter.description || ''} />
      </Head>
      <AppPage>
        <div className="container">
          <div className="markdown-container">
            <ReactMarkdown>{content}</ReactMarkdown>
            <Spacer height={100}/>
          </div>
        </div>
      </AppPage>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const locales = ['en', 'fr', 'es', 'it'] // Add your locales here manually or dynamically

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
    fallback: false, // or 'blocking'
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

  const translations = await serverSideTranslations(locale ?? 'en', ['common']);

  return {
    props: {
      ...translations,
      content,
      blogPostId,
      frontmatter,
    },
  };
};
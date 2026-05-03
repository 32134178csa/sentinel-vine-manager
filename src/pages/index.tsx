import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import LandingPage from '../components/LandingPage'
import Header from '@/components/Header'
import { BlogPost } from '@/services/BlogService'

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const currentLocale = locale ?? 'en';
  const pressData = await import(`../data/press/${currentLocale}.json`);
  const firstBlogPost = Object.values(pressData.default)[0];

  return {
    props: {
      ...(await serverSideTranslations(currentLocale, ['common'])),
      firstBlogPost,
    },
  };
};

const Home: NextPage<{ firstBlogPost: BlogPost }> = ({ firstBlogPost }) => {
  const { t } = useTranslation('common');
  const pageTitle = t('pageTitle');
  const metaKeywords = t('metaKeywords');
  const metaDescription = t('metaDescription');

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={metaKeywords} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="canonical" href="https://sentineltech.eu" />
        {/* Open Graph */}
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sentineltech.eu" />
        <meta property="og:site_name" content="Sentinel" />
        <meta property="og:image" content="https://sentineltech.eu/img/background.webp" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content="https://sentineltech.eu/img/background.webp" />
        {/* JSON-LD Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Sentinel",
              "url": "https://sentineltech.eu",
              "logo": "https://sentineltech.eu/img/sentinel-logo.svg",
              "description": "Vine-by-vine vineyard management platform using RTK GPS for sub-centimeter accuracy digital records.",
              "sameAs": [
                "https://www.instagram.com/sentinelvinemanager/",
                "https://www.linkedin.com/company/sentinel-vine-manager/"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "christian@sentineltech.eu",
                "contactType": "sales"
              }
            })
          }}
        />
      </Head>
      <Header />
      <LandingPage recommendedBlogPost={firstBlogPost} />
    </>
  );
};

export default Home

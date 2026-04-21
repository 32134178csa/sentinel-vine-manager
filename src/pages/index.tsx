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
      </Head>
      <Header />
      <LandingPage recommendedBlogPost={firstBlogPost} />
    </>
  );
};

export default Home

import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next'
import LandingPage from '../components/LandingPage'
import AppPage from '@/components/AppPage'
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

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="keywords" content={metaKeywords} />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <AppPage>
        <LandingPage recommendedBlogPost={firstBlogPost} />
      </AppPage>
    </>
  );
};

export default Home
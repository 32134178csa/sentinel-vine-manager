import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import About from '../components/About'
import AppPage from '@/components/AppPage'
import { useTranslation } from 'next-i18next';
import { AnalyticsService } from '@/services/AnalyticsService'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const AboutPage: NextPage = () => {
  const { t } = useTranslation('common');
  AnalyticsService.logPageView();
  

  return (
    <>
      <Head>
        {/* Page title */}
        <title>{t('aboutTitle')}</title>
        {/* Meta description */}
        <meta name="description" content={t('aboutDescription')} />
        {/* Keywords */}
        <meta name="keywords" content={t('aboutKeywords')} />
        {/* Viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon (same for all locales) */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppPage>
        <About />
      </AppPage>
    </>
  );
}

export default AboutPage
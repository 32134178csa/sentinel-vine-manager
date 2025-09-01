import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import BookDemo from '@/components/BookDemo';
import AppPage from '@/components/AppPage';
import { AnalyticsService } from '@/services/AnalyticsService'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const BookDemoPage: NextPage = () => {
  const { t } = useTranslation('common')
  AnalyticsService.logPageView();
  AnalyticsService.logContactFormView();

  return (
    <>
      <Head>
        {/* Page title */}
        <title>{t('bookDemoTitle')}</title>
        {/* Meta description */}
        <meta name="description" content={t('bookDemoDescription')} />
        {/* Keywords */}
        <meta name="keywords" content={t('bookDemoKeywords')} />
        {/* Viewport for responsiveness */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppPage>
        <BookDemo />
      </AppPage>
    </>
  )
}

export default BookDemoPage
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import CookieSettings from '@/components/CookieSettings';
import AppPage from '@/components/AppPage'
import { useTranslation } from 'next-i18next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const CookiesPage: NextPage = () => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        {/* Page title */}
        <title>{t('cookiesTitle')}</title>
        {/* Meta description */}
        <meta name="description" content={t('cookiesDescription')} />
        {/* Keywords */}
        <meta name="keywords" content={t('cookiesKeywords')} />
        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppPage>
        <CookieSettings />
      </AppPage>
    </>
  );
}

export default CookiesPage;
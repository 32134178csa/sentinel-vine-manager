import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'next-i18next';
import AppPage from '@/components/AppPage'
import PrivacyPolicy from '@/components/PrivacyPolicy'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const PrivacyPolicyPage: NextPage = () => {
  const { t } = useTranslation('common');
  return (
    <>
      <Head>
        <title>{t('privacyTitle')}</title>
        <meta name="description" content={t('privacyDescription')} />
        <meta name="keywords" content={t('privacyKeywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppPage>
        <PrivacyPolicy />
      </AppPage>
    </>
  );
}

export default PrivacyPolicyPage
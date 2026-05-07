import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppPage from '@/components/AppPage'
import ProductPage from '@/components/ProductPage'
import { useTranslation } from 'next-i18next';

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const RapidMappingProductPage: NextPage = () => {
    const { t } = useTranslation('common');

    return (
      <>
        <Head>
          <title>Product – Sentinel Vine Manager</title>
          <meta name="description" content={t('rapidMappingDescription')} />
          <meta name="keywords" content={t('rapidMappingKeywords')} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="canonical" href="https://sentineltech.eu/product" />
        </Head>
        <AppPage>
          <ProductPage />
        </AppPage>
      </>
    );
}

export default RapidMappingProductPage;

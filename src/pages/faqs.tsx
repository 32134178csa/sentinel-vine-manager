import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import FAQ from '../components/FAQ'
import { useTranslation } from 'next-i18next'
import AppPage from '@/components/AppPage'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const FAQPage: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <Head>
          {/* Page title */}
          <title>{t('faqsTitle')}</title>
          {/* Meta description */}
          <meta name="description" content={t('faqsDescription')} />
          {/* Keywords */}
          <meta name="keywords" content={t('faqsKeywords')} />
          {/* Viewport for responsiveness */}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {/* Favicon */}
          <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppPage>
      <FAQ />
      </AppPage>
    </>
  )
}

export default FAQPage
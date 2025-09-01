import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppPage from '@/components/AppPage'
import SplashPage from '@/components/SplashPage'
import { useTranslation } from 'next-i18next';
import { splashTitles } from '@/data/constants'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const RapidMappingSplashPage: NextPage = () => {
    const { t } = useTranslation('common');
    const id = "rapidMapping";
    const translatedSplashTitles: Record<string, string> = Object.entries(splashTitles).reduce(
      (acc, [key, title]) => {
        if (key !== id) {
          acc[key] = t(title)
        }
        return acc
      },
      {} as Record<string, string>
    );

    return (
      <>
        <Head>
          <title>{t(`CP${id}Title`)}</title>
          <meta name="description" content={t('rapidMappingDescription')} />
          <meta name="keywords" content={t('rapidMappingKeywords')} />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <AppPage>
          <SplashPage
            id={id}
            title={t(`CP${id}Title`)}
            body={t(`CP${id}Body`)}
            imageUrl={`/img/${id}.png`}
            cta={t(`CP${id}CTA`)}
            exploreMoreFeatures={t("exploreMoreFeatures")}
            splashTitles={translatedSplashTitles}
          />
        </AppPage>
      </>
    );
}

export default RapidMappingSplashPage;
import type { NextPage, GetStaticProps } from 'next'
import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppPage from '@/components/AppPage'
import Press from '@/components/Press'
import { useTranslation } from 'next-i18next';
import fs from 'fs';
import path from 'path';

interface PressPageProps {
  //eslint-disable-next-line
  posts: any;
}

export const getStaticProps: GetStaticProps<PressPageProps> = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
    // Load posts JSON
    posts: (() => {
      try {
        const fileContents = fs.readFileSync(path.join(process.cwd(), 'src/data/press', `${locale || 'en'}.json`), 'utf8');
        return JSON.parse(fileContents);
      } catch {
        const defaultContents = fs.readFileSync(path.join(process.cwd(), 'src/data/press', 'en.json'), 'utf8');
        return JSON.parse(defaultContents);
      }
    })(),
  },
})

const PressPage: NextPage<PressPageProps> = ({ posts }) => {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>{t('pressTitle')}</title>
        <meta name="description" content={t('pressDescription')} />
        <meta name="keywords" content={t('pressKeywords')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppPage>
        <Press posts={posts} />
      </AppPage>
    </>
  );
}

export default PressPage
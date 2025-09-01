import type { NextPage, GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import AppPage from '@/components/AppPage'
import NotFound from '@/components/errors/404NotFound'

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', ['common'])),
  },
})

const AboutPage: NextPage = () => (
  <>
    <AppPage>
    <NotFound/>
    </AppPage>
  </>
)

export default AboutPage
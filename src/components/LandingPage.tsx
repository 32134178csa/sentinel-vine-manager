// components/LandingPage.tsx

import React from 'react';
import { Row, Col, Container, Image } from 'react-bootstrap'
import Spacer from './Spacer'
import ImageFadeIn from './ImageFadeIn'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { BlogPost, formatBlogContent } from '@/services/BlogService';


interface LandingPageProps {
  recommendedBlogPost: BlogPost;
}

// Hard-coded mapping of splash page IDs to titles
const splashTitles: Record<string, string> = {
  rapidMapping:       'CPrapidMappingTitle',
  maturityMonitoring: 'CPmaturityMonitoringTitle',
  diseaseTracking:    'CPdiseaseTrackingTitle',
  historicalAnalysis: 'CPhistoricalAnalysisTitle',
  workOrders:         'CPworkOrdersTitle',
}

export default function LandingPage({ recommendedBlogPost }: LandingPageProps) {
  const { t } = useTranslation('common')
  const router = useRouter();
  const imageURL = `/img/phone.png`;
  const MAX_BLOG_INTRO_LENGTH = 200;

  return (
    <Container>
      <Row className="flex-nowrap">
        <Col xs={12} md={8} lg={6}>
          <div className="landing-page-splash">
            <h1 className="company-title">{t('fullProductName')}</h1>
            <hr className="company-title" />
            <h3 className="company-title">{t('companySlogan')}</h3>
          </div>

          <Row className="mobile justify-content-center align-items-center">
            <ImageFadeIn
              src={imageURL}
              altText="sentinel-iphone-mobile"
              imageClassName="mobile-content-picture"
            />
          </Row>

          <Row className="justify-content-center align-items-center">
            <Col md="auto">
              <h3 className="company-text text-center">
                {t('exploreOurTechnology')}
              </h3>
              <hr className="company-title" />
            </Col>
          </Row>


          <Row className="justify-content-center align-items-center">
            {Object.entries(splashTitles).map(([id, title]) => (
              <div
                key={id}
                className="explore-button darken"
                onClick={() => {
                  router.push(`/${id}`);
                }}
              >
                {t(title)}
              </div>
            ))}
          </Row>
          
          <Row className="latest-blog-container">
            <Row className="mt-4 justify-content-center">
              <Col md="auto">
                <h3 className="company-text">{t('checkOutLatestBlogPost')}</h3>
                <hr className="company-title" />
              </Col>
            </Row>
            <Col md="auto">
              <Image src={recommendedBlogPost.image} alt="Blog" className="latest-blog-image" />
            </Col>
            <Col className="company-text">
              <h4>{recommendedBlogPost.title}</h4>
              <p>{recommendedBlogPost.author}</p>
              <p>{formatBlogContent(recommendedBlogPost.content, MAX_BLOG_INTRO_LENGTH)}</p>
              <Link href={recommendedBlogPost.url} className="latest-blog-link">
                {t('readMore')}
              </Link>
            </Col>
          </Row>
        </Col>

        <Col>
          <ImageFadeIn
            src={imageURL}
            altText="sentinel-iphone"
            imageClassName="phone-image"
          />
        </Col>
      </Row>

      <Spacer height={200} />
    </Container>
  )
}
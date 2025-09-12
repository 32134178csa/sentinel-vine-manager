import React from 'react';
import { Row, Col, Container } from 'react-bootstrap'
import Image from 'next/image'
import Spacer from './Spacer'
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
  const imageURL = `/img/phone.webp`;
  const MAX_BLOG_INTRO_LENGTH = 200;
  
  const [isMobile, setIsMobile] = React.useState(false);
  React.useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 900);
    };
    handleResize(); // set on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const splashButtons = React.useMemo(() => (
    Object.entries(splashTitles).map(([id, title]) => (
      <Col key={id} xs="auto" className="d-flex justify-content-center">
        <div
          className="explore-button darken"
          onClick={() => router.push(`/${id}`)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter') router.push(`/${id}`);
          }}
        >
          {t(title)}
        </div>
      </Col>
    ))
  ), [t]);

  return (
    <Container>
      <Row className="flex-nowrap">
        <Col xs={12} md={8} lg={6}>
          <div className="landing-page-splash">
            <h1 className="company-title">{t('fullProductName')}</h1>
            <hr className="company-title" />
            <h3 className="company-title">{t('companySlogan')}</h3>
          </div>

          {isMobile && (
            <Row className="justify-content-center align-items-center">
              <Image
                src={imageURL}
                alt="sentinel-iphone-mobile"
                className="mobile-content-picture"
                width={400}
                height={800}
                priority={false}
              />
            </Row>
          )}

          <Row className="justify-content-center align-items-center">
            <Col md="auto">
              <h3 className="company-text text-center">
                {t('exploreOurTechnology')}
              </h3>
              <hr className="company-title" />
            </Col>
          </Row>


          <Row className="justify-content-center align-items-center flex-wrap">
            {splashButtons}
          </Row>
          
          <Row className="latest-blog-container">
            <Row className="mt-4 justify-content-center">
              <Col md="auto">
                <h3 className="company-text">{t('checkOutLatestBlogPost')}</h3>
                <hr className="company-title" />
              </Col>
            </Row>
            <Col md="auto">
              <Image src={recommendedBlogPost.image} alt="Blog" className="latest-blog-image" width={600} height={400} />
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
          <Image
            src={imageURL}
            alt="sentinel-iphone"
            className="phone-image"
            width={600}
            height={1200}
            loading="lazy"
          />
        </Col>
      </Row>

      <Spacer height={200} />
    </Container>
  )
}
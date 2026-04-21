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
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const splashButtons = React.useMemo(() => (
    Object.entries(splashTitles).map(([id, title]) => (
      <Col key={id} xs="auto" className="d-flex justify-content-center" style={{ marginBottom: 'var(--space-sm)' }}>
        <div
          className="btn-ghost"
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
    <Container style={{ maxWidth: '1200px', padding: 'var(--space-3xl) var(--space-lg)' }}>
      <Row className="flex-nowrap">
        <Col xs={12} md={8} lg={6}>
          {/* Hero Section */}
          <div className="landing-page-splash" style={{ marginBottom: 'var(--space-xl)' }}>
            <p className="overline" style={{ marginBottom: 'var(--space-sm)' }}>Vine-by-vine precision</p>
            <h1 style={{ marginBottom: 'var(--space-md)' }}>{t('fullProductName')}</h1>
            <hr className="section-divider" style={{ margin: 'var(--space-md) 0' }} />
            <h3 style={{ color: 'var(--ink-dim)', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: '1.1rem', lineHeight: 1.7, maxWidth: '50ch' }}>
              {t('companySlogan')}
            </h3>
          </div>

          {/* Mobile image */}
          <Row className="justify-content-center align-items-center">
            <Image
              src={imageURL}
              alt="sentinel-iphone-mobile"
              className="mobile-content-picture d-block d-md-none"
              width={400}
              height={800}
              priority
              fetchPriority="high"
              sizes="(max-width: 900px) 90vw, 400px"
            />
          </Row>

          {/* CTA */}
          <Row className="justify-content-center align-items-center" style={{ marginBottom: 'var(--space-xl)' }}>
            <Col md="auto">
              <div className="btn-primary" onClick={() => router.push('/contact')} role="button" tabIndex={0}>
                {t('bookADemo') || 'Schedule a Demo'}
              </div>
            </Col>
          </Row>

          {/* Explore Features */}
          <hr className="section-divider" />
          <Row className="justify-content-center align-items-center" style={{ marginBottom: 'var(--space-md)' }}>
            <Col md="auto">
              <p className="overline" style={{ textAlign: 'center' }}>
                {t('exploreOurTechnology')}
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center align-items-center flex-wrap" style={{ marginBottom: 'var(--space-xl)' }}>
            {splashButtons}
          </Row>

          {/* Blog section */}
          <hr className="section-divider" />
          <Row className="latest-blog-container" style={{ padding: 'var(--space-lg) 0' }}>
            <Row className="justify-content-center" style={{ marginBottom: 'var(--space-md)' }}>
              <Col md="auto">
                <p className="overline">{t('checkOutLatestBlogPost')}</p>
              </Col>
            </Row>
            <Col md="auto">
              <Image
                src={recommendedBlogPost.image}
                alt="Blog"
                className="latest-blog-image"
                width={600}
                height={400}
                sizes="(max-width: 768px) 100vw, 600px"
                style={{ borderRadius: 'var(--radius-md)' }}
              />
            </Col>
            <Col>
              <Link href={recommendedBlogPost.url} style={{ textDecoration: 'none' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-sm)' }}>{recommendedBlogPost.title}</h3>
              </Link>
              <p className="label" style={{ marginBottom: 'var(--space-sm)' }}>{recommendedBlogPost.author}</p>
              <p style={{ fontSize: '0.9rem' }}>{formatBlogContent(recommendedBlogPost.content, MAX_BLOG_INTRO_LENGTH)}</p>
            </Col>
          </Row>
        </Col>

        <Col>
         {!isMobile && (
          <Image
            src={imageURL}
            alt="sentinel-iphone"
            className="phone-image"
            width={600}
            height={1200}
            priority
            fetchPriority="low"
            sizes="(max-width: 1024px) 90vw, 600px"
          />
        )}
        </Col>
      </Row>

      <Spacer height={200} />
    </Container>
  )
}

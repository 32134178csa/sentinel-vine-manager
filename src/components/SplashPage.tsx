import {Container, Row, Col} from 'react-bootstrap';
import React from 'react';
import Spacer from '@/components/Spacer';
import ImageFadeIn from '@/components/ImageFadeIn';
import { useRouter } from 'next/router';

interface SplashPageProps {
    id: string,
    title: string,
    body: string,
    imageUrl: string,
    cta: string,
    exploreMoreFeatures: string,
    splashTitles: Record<string, string>
  }

export default function SplashPage({
    id,
    title,
    body,
    imageUrl,
    cta,
    exploreMoreFeatures,
    splashTitles
  }: SplashPageProps) {
    const router = useRouter();

    const [isMobile, setIsMobile] = React.useState(false);
      React.useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth < 900);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return(
        <Container style={{ maxWidth: '1200px', padding: 'var(--space-3xl) var(--space-lg)' }}>
            <Row className="flex-nowrap">
                <Col xs={12} md={8} lg={6}>
                    <h1 style={{ marginBottom: 'var(--space-md)' }}>{title}</h1>
                    <hr className="section-divider" />
                    <div style={{ color: 'var(--ink-dim)', lineHeight: 1.7, marginBottom: 'var(--space-lg)' }} dangerouslySetInnerHTML={{ __html: body }} />

                {isMobile && (
                    <Row className="mobile justify-content-center align-items-center" style={{ marginBottom: 'var(--space-lg)' }}>
                        <ImageFadeIn src={imageUrl} altText={id} imageClassName={"mobile-content-picture"}/>
                    </Row>
                )}

                <Row className="justify-content-center align-items-center text-center" style={{ marginBottom: 'var(--space-xl)' }}>
                    <Col xs="auto">
                        <div className="btn-primary" onClick={() => router.push('/contact')} role="button" tabIndex={0}>{cta}</div>
                    </Col>
                </Row>

                <hr className="section-divider" />
                <Row className="justify-content-center align-items-center text-center" style={{ marginBottom: 'var(--space-md)' }}>
                    <p className='overline'>{exploreMoreFeatures}</p>
                </Row>
                <Row className="justify-content-center align-items-center flex-wrap">
                  {Object.entries(splashTitles)
                    .filter(([key]) => key !== id)
                    .map(([key, featureTitle]) => (
                      <Col key={key} xs="auto" className="d-flex justify-content-center" style={{ marginBottom: 'var(--space-sm)' }}>
                        <div
                          className="btn-ghost"
                          onClick={() => router.push(`/${key}`)}
                          role="button"
                          tabIndex={0}
                        >
                          {featureTitle}
                        </div>
                      </Col>
                    ))}
                </Row>
                </Col>
                <Col>
                    <ImageFadeIn src={imageUrl} altText={id} imageClassName={"content-image"}/>
                </Col>
            </Row>
            <Spacer height={200}/>
        </Container>
    )
}

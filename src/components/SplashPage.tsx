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
        handleResize(); // set on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);

    return(
        <Container>
            <Row className="flex-nowrap">
                <Col xs={12} md={8} lg={6}>
                    <h3 className="company-title">{title}</h3>
                    <hr className="company-title"></hr>
                    <div className='company-text' dangerouslySetInnerHTML={{ __html: body }} />
                
                {isMobile && (
                    <Row className="mobile justify-content-center align-items-center">
                        <ImageFadeIn src={imageUrl} altText={id} imageClassName={"mobile-content-picture"}/>
                    </Row>
                )}

                <Row className="justify-content-center align-items-center text-center">
                    <Col xs="auto">
                        <div className="explore-button darken" onClick={() => router.push('/contact')}>{cta}</div>
                    </Col>
                </Row>
                <Spacer height={20}/>
                <Row className="justify-content-center align-items-center text-center">
                    <h3 className='company-text'>{exploreMoreFeatures}</h3>
                </Row>
                <Row className="justify-content-center align-items-center flex-wrap">
                  {Object.entries(splashTitles)
                    .filter(([key]) => key !== id)
                    .map(([key, title]) => (
                      <Col key={key} xs="auto" className="d-flex justify-content-center">
                        <div
                          className="explore-button darken"
                          onClick={() => router.push(`/${key}`)}
                        >
                          {title}
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
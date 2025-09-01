import {Container, Row, Col} from 'react-bootstrap';
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

    return(
        <Container>
            <Row className="flex-nowrap">
                <Col xs={12} md={8} lg={6}>
                    <h3 className="company-title">{title}</h3>
                    <hr className="company-title"></hr>
                    <div className='company-text' dangerouslySetInnerHTML={{ __html: body }} />
                <Row className="mobile justify-content-center align-items-center">
                    <ImageFadeIn src={imageUrl} altText={id} imageClassName={"mobile-content-picture"}/>
                </Row>
                <Row className="justify-content-center align-items-center text-center">
                    <div className="explore-button darken" onClick={() => router.push('/contact')}>{cta}</div>
                </Row>
                <Spacer height={20}/>
                <Row className="justify-content-center align-items-center text-center">
                    <h3 className='company-text'>{exploreMoreFeatures}</h3>
                    {Object.keys(splashTitles).filter(key => key !== id).map(key => 
                            <div key={key} onClick={() => router.push(`/${key}`)} className="explore-button darken">{splashTitles[key]}</div>)}
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
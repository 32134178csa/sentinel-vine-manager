import { Container, Row, Col} from "react-bootstrap";
import Spacer from "./Spacer";
import ImageFadeIn from "./ImageFadeIn";
import { useTranslation } from 'next-i18next';

export default function About() {
    const { t } = useTranslation('common');
    return(
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                {/* Centered Title */}
                <h2 className="company-title">{t('ourTeam')}</h2>
                <hr className="company-title"></hr>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col md="auto">
                    {/* First Picture and Paragraph */}
                    <ImageFadeIn src="/img/sdemartino.png" altText={"sgdemartino"} imageClassName={"about-picture"}/>
                </Col>
                <Col xs={12} md={6} className="mt-4 justify-content-center">
                    <h4 className="company-text">{t('sgdHeading')}</h4>
                    <p className="company-text">{t('sgdBody')}</p>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col md="auto">
                    {/* Second Picture and Paragraph */}
                    <ImageFadeIn src="/img/csidak.jpg" altText={"csidak"} imageClassName={"about-picture"}/>
                </Col>
                <Col xs={12} md={6} className="mt-4 justify-content-center">
                    <h4 className="company-text">{t('cgsHeading')}</h4>
                    <p className="company-text">{t('cgsBody')}</p>
                </Col>
            </Row>
            <Spacer height={200}/>
        </Container>
    )
}
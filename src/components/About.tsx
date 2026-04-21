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
                    <div className="overline" style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}>Team</div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)' }}>{t('ourTeam')}</h2>
                    <hr className="section-divider" />
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col md="auto">
                    <ImageFadeIn src="/img/sdemartino.webp" altText={"sgdemartino"} imageClassName={"about-picture"}/>
                </Col>
                <Col xs={12} md={6} className="mt-4 justify-content-center">
                    <h4 style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{t('sgdHeading')}</h4>
                    <p style={{ color: 'var(--ink-dim)', lineHeight: 1.7 }}>{t('sgdBody')}</p>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center">
                <Col md="auto">
                    <ImageFadeIn src="/img/csidak.webp" altText={"csidak"} imageClassName={"about-picture"}/>
                </Col>
                <Col xs={12} md={6} className="mt-4 justify-content-center">
                    <h4 style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>{t('cgsHeading')}</h4>
                    <p style={{ color: 'var(--ink-dim)', lineHeight: 1.7 }}>{t('cgsBody')}</p>
                </Col>
            </Row>
            <Spacer height={200}/>
        </Container>
    )
}

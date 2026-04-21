import { Container, Row, Col } from "react-bootstrap";
import Spacer from "./Spacer";
import { useTranslation } from 'next-i18next';

export default function FAQ() {

    const { t } = useTranslation('common');
    const faqs = [
        { "question": "FAQmappingSpeedQ", "answer": "FAQmappingSpeedA" },
        { "question": "FAQimportDataQ", "answer": "FAQimportDataA" },
        { "question": "FAQdataTypesQ", "answer": "FAQdataTypesA" },
        { "question": "FAQhardwareNeededQ", "answer": "FAQhardwareNeededA" },
        { "question": "FAQpricingQ", "answer": "FAQpricingA" }
    ]

    return(
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <div className="overline" style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}>Support</div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)' }}>{t('faqs')}</h2>
                    <hr className="section-divider" />
                </Col>
            </Row>

            {faqs.map(i =>
                <Row key={i.question} className="mt-4 justify-content-center">
                    <Col xs={12} md={10} lg={8} className="mt-3">
                        <h4 style={{ color: 'var(--ink)', fontFamily: 'var(--font-body)', fontWeight: 600, marginBottom: 'var(--space-sm)' }}>
                            {t(i.question)}
                        </h4>
                        <div style={{ color: 'var(--ink-dim)', whiteSpace: 'pre-wrap', lineHeight: 1.7 }}>
                            {t(i.answer)}
                        </div>
                        <hr className="section-divider" style={{ margin: 'var(--space-lg) 0' }} />
                    </Col>
                </Row>
            )}
            <Spacer height={300}/>
        </Container>
    )
}

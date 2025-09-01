import { Container, Row, Col } from "react-bootstrap";
import Spacer from "./Spacer";
import { useTranslation } from 'next-i18next';

export default function FAQ() {

    const { t } = useTranslation('common');
    const faqs = [
        {
            "question": "FAQmappingSpeedQ",
            "answer": "FAQmappingSpeedA"
        },
        {
            "question": "FAQimportDataQ",
            "answer": "FAQimportDataA"
        },
        {
            "question": "FAQdataTypesQ",
            "answer": "FAQdataTypesA"
        },
        {
            "question": "FAQhardwareNeededQ",
            "answer": "FAQhardwareNeededA"
        },
        {
            "question": "FAQpricingQ",
            "answer": "FAQpricingA"
        }
    ]
      

    return(
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                {/* Centered Title */}
                <h2 className="company-title">{t('faqs')}</h2>
                <hr className="company-title"></hr>
                </Col>
            </Row>

            {faqs.map(i => 
                <Row key={i.question} className="mt-4 justify-content-center">
                    <Col xs={18} md={13} lg={10} className="mt-4 justify-content-center">
                    <h4 className="company-text">{t(i.question)}</h4>
                    <div className="company-text faq">{t(i.answer)}</div>
                    </Col>
                </Row>
            )}
            <Spacer height={300}/>
        </Container>
    )
}
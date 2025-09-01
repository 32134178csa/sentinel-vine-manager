import { Container, Row, Col, Button } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function CookieSettings() {

    const { t } = useTranslation('common');

    const [accepted, setAccepted] = useState<string | null>(null);

    useEffect(() => {
      setAccepted(localStorage.getItem("acceptedCookies") ?? "yes");
    }, []);

    function handleAccept() {
        localStorage.setItem("acceptedCookies", 'yes')
        setAccepted('yes')
    }

    function handleReject() {
        localStorage.setItem("acceptedCookies", 'no')
        setAccepted('no')
    }

    function getCookieStatus() {
        return accepted === "yes" ? t('enabled') : t('disabled');
    }

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={8} md={6} lg={4}>
                <h2 className="company-title">{t('cookieSettings')}</h2>
                <hr className="company-title"></hr>
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center company-text text-center">
              <Col xs={7} md={5} lg={3}>
                    <p>{t('currentCookieSettings').replace('%s', getCookieStatus())}</p>
                    <Container className="d-flex justify-content-center">
                    <Row>
                    <Col>
                    <Button onClick={()=>handleAccept()}>{t('accept')}</Button>
                    </Col>
                    <Col>
                    <Button onClick={()=>handleReject()} variant="danger">{t('reject')}</Button>
                    </Col>
                    </Row>
                    </Container>
                    <br></br>
                    <p>{t('cookieSettingsP')}</p>
                    <Link href="/privacy" className="company-text">
                        {t('privacyPolicy')}
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
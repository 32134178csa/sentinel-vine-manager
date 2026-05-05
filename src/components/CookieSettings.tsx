import { Container, Row, Col } from "react-bootstrap";
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
        <Container style={{ paddingTop: "80px", paddingBottom: "120px" }}>
            <Row className="justify-content-center">
                <Col xs={8} md={6} lg={4}>
                    <div className="overline" style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}>Preferences</div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)' }}>{t('cookieSettings')}</h2>
                    <hr className="section-divider" />
                </Col>
            </Row>
            <Row className="mt-4 justify-content-center text-center">
              <Col xs={7} md={5} lg={3}>
                    <p style={{ color: 'var(--ink-dim)' }}>{t('currentCookieSettings').replace('%s', getCookieStatus())}</p>
                    <Container className="d-flex justify-content-center" style={{ gap: 'var(--space-md)', marginBottom: 'var(--space-lg)' }}>
                      <button className="btn-primary" onClick={()=>handleAccept()}>{t('accept')}</button>
                      <button className="btn-ghost" onClick={()=>handleReject()}>{t('reject')}</button>
                    </Container>
                    <p style={{ color: 'var(--ink-dim)' }}>{t('cookieSettingsP')}</p>
                    <Link href="/privacy" style={{ color: 'var(--accent)' }}>
                        {t('privacyPolicy')}
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}

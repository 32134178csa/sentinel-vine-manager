// src/components/Footer.tsx
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import ReactGA from 'react-ga4';
import { Container, Row, Col } from 'react-bootstrap';
import { GA_ID } from '@/config';


const Footer: React.FC = () => {
  const { t } = useTranslation('common')
  const [accepted, setAccepted] = useState<string | null>(null)
  const [requiresGDPR, setRequiresGDPR] = useState<string | null>(null)

  useEffect(() => {
    setAccepted(localStorage.getItem('acceptedCookies'))
    setRequiresGDPR(localStorage.getItem('requiresGDPR'))

    const interval = setInterval(() => {
      const newValue = localStorage.getItem('requiresGDPR')
      if (newValue === 'yes' || newValue === 'no') {
        setRequiresGDPR(newValue)
        clearInterval(interval)
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('acceptedCookies', 'yes')
    const gaActive = sessionStorage.getItem('gaActive')
    if (gaActive !== 'yes') {
      ReactGA.initialize(GA_ID)
      ReactGA.send({ hitType: 'pageview', page: '/company/product', title: 'Our Product' })
      sessionStorage.setItem('gaActive', 'yes')
    }
    setAccepted('yes')
  }

  const handleReject = () => {
    localStorage.setItem('acceptedCookies', 'no')
    setAccepted('no')
  }

  const currentYear = new Date().getFullYear().toString();
  const copyrightMessage = t('copyright').replace('%s', currentYear);

  // GDPR banner: show if required and user hasn't accepted/rejected yet
  if (requiresGDPR === 'yes' && accepted !== 'yes' && accepted !== 'no') {
    return (
      <Container fluid>
        <Row className="gdpr-banner" style={{ width: '100%' }}>
          <Col xs>
            <p style={{ color: 'var(--ink-dim)', margin: 0, fontSize: '0.65rem', lineHeight: 1.4 }}>{t('GDPRBannerText')}</p>
          </Col>
          <Col md="auto" className="d-flex gap-2">
            <button className="btn-primary" onClick={handleAccept} style={{ padding: '4px 14px', fontSize: '0.65rem' }}>{t('accept')}</button>
            <button className="btn-ghost" onClick={handleReject} style={{ padding: '4px 14px', fontSize: '0.65rem' }}>{t('reject')}</button>
          </Col>
        </Row>
        <Row className="footer" style={{ width: '100%' }}>
          <Col md="auto">
            <Link href="/privacy" className="footer-link">{t('privacyPolicy')}</Link>
          </Col>
          <Col>
            <Link href="/cookies" className="footer-link">{t('cookieSettings')}</Link>
          </Col>
          <Col md="auto">
            <p className="footer-text" style={{ textAlign: 'right' }}>
              {copyrightMessage}
            </p>
          </Col>
        </Row>
      </Container>
    )
  }

  // Default footer
  return (
    <>
      <Container fluid className="footer">
        <Row style={{ width: '100%' }} className="align-items-center">
          <Col
            xs
            dangerouslySetInnerHTML={{ __html: t('privacyPolicyBanner') }}
            style={{ fontSize: '0.8rem', color: 'var(--ink-mute)' }}
          />
          <Col md="auto">
            <p className="footer-text" style={{ textAlign: 'right', margin: 0 }}>
              {copyrightMessage}
            </p>
          </Col>
        </Row>
      </Container>
      <Container className="footer mobile-footer">
        <Row className="row" style={{ width: '100%' }}>
          <Col>
            <Link href="/cookies" style={{ color: 'var(--ink-dim)', fontSize: '0.8rem' }}>
              {t('cookieSettings')}
            </Link>
          </Col>
          <Col className="ml-auto text-nowrap">
            <Link href="/privacy" style={{ color: 'var(--ink-dim)', fontSize: '0.8rem' }}>
              {t('privacyPolicy')}
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Footer

import Link from 'next/link'
import { useTranslation } from 'next-i18next'
import { Container, Row, Col } from 'react-bootstrap'

export default function NotFound() {
  const { t } = useTranslation('common')

  return (
      <Container className="py-5 text-center">
        <Row className="justify-content-center">
          <Col xs={12} md={8}>
            <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>
              {t('404_title', 'Page Not Found')}
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              {t(
                '404_description',
                'Sorry, the page you are looking for does not exist.'
              )}
            </p>
            <Link href="/">
              <button style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>
                {t('go_home', 'Go to Home')}
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
  )
}
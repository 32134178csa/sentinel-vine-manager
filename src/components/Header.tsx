import {
    Nav,
    NavLogo,
    NavMenu,
    NavItem,
    NavChevron
} from "./Navbar";
import { Container, Row, Col, Image } from 'react-bootstrap';
import { ChevronDown, ChevronLeft } from "react-bootstrap-icons";
import { useState } from "react";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { APP_HOST } from "@/config";


export default function Header() {
    const { t } = useTranslation('common')
    const router = useRouter();
    const { locale, pathname } = router;
    const push = router.push;
    const [open,setOpen] = useState(false);
    const defaultPath = "/product"

    const activeTab = (path: string) => {
      if (pathname === '/') {
        return (path === defaultPath) ? 'active' : ''
      } else {
        return pathname.includes(path) ? 'active' : ''
      }
    };

    const handleExternalLink = (url : string) => {
      window.open(url, '_blank');
    };

    const menuItems =  [
      <NavItem key="product" onClick={() => push('/')} className={activeTab('/product')}>{t("product")}</NavItem>,
      <NavItem key="about" onClick={() => push('/about')} className={activeTab('/about')}>{t("about")}</NavItem>,
      <NavItem key="faq" onClick={() => push('/faqs')} className={activeTab('/faqs')}>{t("faqs")}</NavItem>,
      <NavItem key="press" onClick={() => push('/press')} className={activeTab('/press')}>{t("press")}</NavItem>,
      <NavItem key="login" as="a" href={`${APP_HOST}/login`} className={activeTab('/login')}>{t("userLogin")}</NavItem>,
      <div key="demo" className="btn-primary" onClick={() => push('/contact')} role="button" tabIndex={0}>{t("bookADemo")}</div>,
      <a key="appstore" href="https://apps.apple.com/app/sentinel-vine-manager/id1608970406" target="_blank" rel="noreferrer"><Image alt="sentinel_appstore" className="header-button appstore-button darken" src={`/img/${locale}_appstore.svg`}/></a>,
    ]

    const mobileMenuItems = [
      <NavItem key="product" onClick={() => push('/')} className={activeTab('/product')}>{t("product")}</NavItem>,
      <NavItem key="about" onClick={() => push('/about')} className={activeTab('/about')}>{t("about")}</NavItem>,
      <NavItem key="faq" onClick={() => push('/faqs')} className={activeTab('/faqs')}>{t("faqs")}</NavItem>,
      <NavItem key="press" onClick={() => push('/press')} className={activeTab('/press')}>{t("press")}</NavItem>,
      <NavItem key="login" as="a" href={`${APP_HOST}/login`} className={activeTab('/login')}>{t("userLogin")}</NavItem>,
      <NavItem key="demo" onClick={() => push('/contact')} className={activeTab('/contact')}>{t("bookADemo")}</NavItem>,
      <NavItem key="appstore" onClick={() => handleExternalLink("https://apps.apple.com/app/sentinel-vine-manager/id1608970406")}>{t("downloadOurApp")}</NavItem>,
    ]

    return (
          <Nav className="header w-100">
            <Container fluid style={{ padding: '0 var(--space-lg)' }}>
              <Row className="flex-nowrap align-items-center">

                <Col>
                  <NavLogo onClick={() => push('/')} className="darken">
                    <Image style={{height: "36px", marginRight: "10px"}} src="/img/transparent-logo.webp" alt="Sentinel Vine Manager Logo" />
                    <span className="nav-logo-text">Sentinel</span>
                  </NavLogo>
                </Col>

                <Col md="auto" className='d-flex align-items-center justify-content-center'>
                  <NavMenu>
                    {menuItems}
                  </NavMenu>
                  <NavChevron>
                    <div onClick={() => setOpen(!open)}>
                      { open ?
                      (<ChevronDown className="nav-chevron-icon darken"/>) :
                      (<ChevronLeft className="nav-chevron-icon darken"/>)}
                    </div>
                  </NavChevron>
                </Col>

              </Row>
              {open && mobileMenuItems.map((i, idx) => <Row key={idx} className="mobile-nav-row">{i}</Row>)}
            </Container>
          </Nav>
    );
};

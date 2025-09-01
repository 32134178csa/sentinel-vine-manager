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
        return (path === defaultPath) ? { color: 'grey' } : {}
      } else {
        return pathname.includes(path) ? { color: 'grey' } : {}
      }
    };

    const handleExternalLink = (url : string) => {
      window.open(url, '_blank');
    };

    const menuItems =  [
      <NavItem key="product" onClick={() => push('/')} style={activeTab('/product')}>{t("product")}</NavItem>,
      <NavItem key="about" onClick={() => push('/about')} style={activeTab('/about')}>{t("about")}</NavItem>,
      <NavItem key="faq" onClick={() => push('/faqs')} style={activeTab('/faqs')}>{t("faqs")}</NavItem>,
      <NavItem key="press" onClick={() => push('/press')} style={activeTab('/press')}>{t("press")}</NavItem>,
      <NavItem key="login" as="a" href={`${APP_HOST}/login`} style={activeTab('/login')}>{t("userLogin")}</NavItem>,
      <div key="demo" className="justify-content-center align-items-center d-flex header-button demo-button darken" onClick={() => push('/contact')} style={activeTab('/contact')}><div>{t("bookADemo")}</div></div>,
      <a key="appstore" href="https://apps.apple.com/app/sentinel-vine-manager/id1608970406" target="_blank" rel="noreferrer"><Image alt="sentinel_appstore" className="header-button appstore-button darken" src={`/img/${locale}_appstore.svg`}/></a>,
      <a key="instagram" href="https://www.instagram.com/sentinelvinemanager/" target="_blank" rel="noreferrer"><Image alt="sentinel_instagram_logo" className="header-button instagram-button darken" src="/img/instagram.png"/></a>,
    ]

    const mobileMenuItems = [
      <NavItem key="product" onClick={() => push('/')} style={activeTab('/product')}>{t("product")}</NavItem>,
      <NavItem key="about" onClick={() => push('/about')} style={activeTab('/about')}>{t("about")}</NavItem>,
      <NavItem key="faq" onClick={() => push('/faqs')} style={activeTab('/faqs')}>{t("faqs")}</NavItem>,
      <NavItem key="press" onClick={() => push('/press')} style={activeTab('/press')}>{t("press")}</NavItem>,
      <NavItem key="login" as="a" href={`${APP_HOST}/login`} style={activeTab('/login')}>{t("userLogin")}</NavItem>,
      <NavItem key="demo" onClick={() => push('/contact')} style={activeTab('/contact')}>{t("bookADemo")}</NavItem>,
      <NavItem key="appstore" onClick={() => handleExternalLink("https://apps.apple.com/app/sentinel-vine-manager/id1608970406")}>{t("downloadOurApp")}</NavItem>,
      <NavItem key="instagram" onClick={() => handleExternalLink("https://www.instagram.com/sentinelvinemanager/")}>{t("followUsOnInstagram")}</NavItem>,
    ]

    return (
          <Nav className="header w-100 container-fluid">
            <Container fluid>
              <Row className="flex-nowrap">

                <Col>
                  <NavLogo onClick={() => push('/')} className="flex-nowrap text-nowrap darken">
                    <Image style={{height: "8vh", padding:"3px"}} src="/img/transparent-logo.png" alt="Sentinel Vine Manager Logo" />
                    <div className="nav-logo-text">{t("Sentinel")}</div>
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

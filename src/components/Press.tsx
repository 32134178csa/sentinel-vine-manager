import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import Spacer from "./Spacer";
import ImageFadeIn from "./ImageFadeIn";
import LocaleSwitcher from "./LocaleSwitcher";
import { formatBlogContent, BlogPostMap } from "@/services/BlogService";

interface PressProps {
    posts: BlogPostMap;
}

const Press: React.FC<PressProps> = ({ posts }) => {
    const { t } = useTranslation('common');
    const MAX_BLOG_INTRO_LENGTH = 300;

    return (
        <Container>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <h2 className="company-title">{t("press")}</h2>
                    <hr className="company-title" />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col xs={12} md={8} lg={6}>
                    <LocaleSwitcher/>
                </Col>
            </Row>
            {Object.keys(posts).map((key) => (
                <Row key={key} className="mt-4 justify-content-center">
                    <Col md="auto">
                        <ImageFadeIn src={posts[key].image} altText={"Blog Image"} imageClassName={"about-picture"} />
                    </Col>
                    <Col xs={12} md={6} className="mt-4 justify-content-center">
                        <h4 className="company-text">{posts[key].title}</h4>
                        <h6 className="company-text">{posts[key].author}</h6>
                        <p className="company-text">{formatBlogContent(posts[key].content, MAX_BLOG_INTRO_LENGTH)}</p>
                        <Link href={posts[key].url} target="_blank" rel="noopener noreferrer" className="company-text">
                            {t('readMore')}
                        </Link>
                    </Col>
                </Row>
            ))}
            <Spacer height={200} />
        </Container>
    );
}

export default Press;

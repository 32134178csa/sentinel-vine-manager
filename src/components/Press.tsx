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
                    <div className="overline" style={{ textAlign: 'center', marginBottom: 'var(--space-sm)' }}>Blog</div>
                    <h2 style={{ textAlign: 'center', fontFamily: 'var(--font-display)' }}>{t("press")}</h2>
                    <hr className="section-divider" />
                </Col>
            </Row>
            <Row className="justify-content-center mb-4">
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
                        <Link href={posts[key].url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                            <h4 style={{ color: 'var(--ink)', fontWeight: 600, transition: 'color 0.15s' }}>{posts[key].title}</h4>
                        </Link>
                        <h6 style={{ color: 'var(--ink-mute)', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            {posts[key].author}
                        </h6>
                        <p style={{ color: 'var(--ink-dim)', lineHeight: 1.7 }}>
                            {formatBlogContent(posts[key].content, MAX_BLOG_INTRO_LENGTH)}
                        </p>
                        <hr className="section-divider" />
                    </Col>
                </Row>
            ))}
            <Spacer height={200} />
        </Container>
    );
}

export default Press;

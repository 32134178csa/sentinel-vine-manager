import React from "react";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { formatBlogContent, BlogPostMap } from "@/services/BlogService";
import FooterV2 from '@/components/FooterV2';
import PreFooterCTA from '@/components/PreFooterCTA';

interface PressProps {
    posts: BlogPostMap;
}

const Press: React.FC<PressProps> = ({ posts }) => {
    useTranslation('common');
    const MAX_BLOG_INTRO_LENGTH = 220;

    const postEntries = Object.entries(posts);

    return (
        <div className="press-v2" data-page="press">

            {/* ============ PAGE HERO ============ */}
            <header className="page-hero container-lp">
                <div className="idx">Press &middot; Media</div>
                <h1>
                    Signal, <em>not noise.</em>
                </h1>
                <p className="lede">
                    Coverage, announcements, and downloadable assets for journalists, investors, and industry partners.
                </p>
            </header>

            {/* ============ SECTION HEAD ============ */}
            <div className="section-head container-lp">
                <div className="idx">Blog</div>
                <h2>From <em>the field.</em></h2>
            </div>

            {/* ============ BLOG POSTS ============ */}
            <section className="press-list container-lp">
                {postEntries.map(([key, post]) => {
                    const isExternal = post.url.startsWith('http');
                    return (
                        <Link
                            key={key}
                            href={post.url}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            className="press-item"
                        >
                            <div className="press-img-wrap">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                {post.image && (
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="press-img"
                                    />
                                )}
                            </div>
                            <div>
                                <span className="type">
                                    {post.author === 'Sentinel Blog' ? 'Blog' : 'Press'}
                                </span>
                            </div>
                            <div>
                                <h3>{post.title}</h3>
                                <p>{formatBlogContent(post.content, MAX_BLOG_INTRO_LENGTH)}</p>
                            </div>
                            <div className="pub">
                                {post.author}
                                {isExternal && <span>External link</span>}
                            </div>
                            <div className="arrow-r" />
                        </Link>
                    );
                })}
            </section>

            {/* ============ PRESS KIT ============ */}
            <section className="press-kit container-lp">
                <div
                    className="mono"
                    style={{
                        color: 'var(--ink-mute)',
                        fontSize: '11px',
                        letterSpacing: '0.18em',
                        textTransform: 'uppercase' as const,
                    }}
                >
                    Press Kit
                </div>
                <div>
                    <h3>
                        Logos, photography, <em>and boilerplate.</em>
                    </h3>
                    <p>
                        Everything you need for print, web, and broadcast. For interview
                        requests and custom asks, email{' '}
                        <b style={{ color: 'var(--ink)' }}>press@spongymesophyll.com</b>.
                    </p>
                </div>
                <div className="downloads">
                    <a className="dl" href="#">
                        <span>SENTINEL_LOGOS.ZIP</span>
                        <span className="size">2.1 MB</span>
                    </a>
                    <a className="dl" href="#">
                        <span>FIELD_PHOTOGRAPHY_HIRES.ZIP</span>
                        <span className="size">148 MB</span>
                    </a>
                    <a className="dl" href="#">
                        <span>PRODUCT_SCREENSHOTS.ZIP</span>
                        <span className="size">32 MB</span>
                    </a>
                    <a className="dl" href="#">
                        <span>FOUNDER_BIOS_HEADSHOTS.PDF</span>
                        <span className="size">4.2 MB</span>
                    </a>
                    <a className="dl" href="#">
                        <span>COMPANY_BOILERPLATE.TXT</span>
                        <span className="size">3 KB</span>
                    </a>
                    <a className="dl" href="#">
                        <span>FACT_SHEET_2026.PDF</span>
                        <span className="size">1.1 MB</span>
                    </a>
                </div>
            </section>

            {/* ============ CTA BAND ============ */}
            <section>
                <div className="cta-band container-lp">
                    <div>
                        <div className="kicker" style={{ marginBottom: 24 }}>Contact</div>
                        <h3>
                            Writing about us? <em>We&apos;d love to talk.</em>
                        </h3>
                    </div>
                    <div className="actions">
                        <Link href="/press" className="cta-ghost">Read the Blog</Link>
                        <a href="mailto:press@spongymesophyll.com" className="cta-solid">
                            Email Press <span className="arrow" />
                        </a>
                    </div>
                </div>
            </section>

            {/* ============ PRE-FOOTER CTA ============ */}
            <PreFooterCTA source="press_pre_footer" />

            {/* ============ FOOTER ============ */}
            <FooterV2 />
        </div>
    );
}

export default Press;

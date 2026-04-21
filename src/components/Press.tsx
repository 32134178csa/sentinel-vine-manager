import React from "react";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { formatBlogContent, BlogPostMap } from "@/services/BlogService";
import { APP_HOST } from '@/config';

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

            {/* ============ FOOTER ============ */}
            <footer className="footer-v2">
                <div className="container-lp">
                    <div className="foot-grid">
                        <div className="foot-brand">
                            <Image
                                src="/img/transparent-logo.webp"
                                alt="Sentinel Logo"
                                width={32}
                                height={32}
                            />
                            <div className="name">Sentinel.</div>
                            <p>
                                The patient medical record for your vineyard. Built by
                                winegrowers, for winegrowers -- from California to six countries
                                worldwide. A product of Spongy Mesophyll Technologies.
                            </p>
                        </div>

                        <div className="foot-col">
                            <h5>Product</h5>
                            <ul>
                                <li><Link href="/rapidMapping">Vine By Vine&trade;</Link></li>
                                <li><Link href="/maturityMonitoring">Maturity Monitoring</Link></li>
                                <li><Link href="/diseaseTracking">Pest &amp; Disease</Link></li>
                                <li><Link href="/historicalAnalysis">Historical Analysis</Link></li>
                                <li><Link href="/workOrders">Work Orders</Link></li>
                            </ul>
                        </div>

                        <div className="foot-col">
                            <h5>Company</h5>
                            <ul>
                                <li><Link href="/about">About</Link></li>
                                <li><Link href="/blog">Blog</Link></li>
                                <li><Link href="/press">Press</Link></li>
                                <li><Link href="/faqs">FAQs</Link></li>
                            </ul>
                        </div>

                        <div className="foot-col">
                            <h5>Get Started</h5>
                            <ul>
                                <li><Link href="/contact">Schedule a Demo</Link></li>
                                <li><a href="#">Buy Now</a></li>
                                <li>
                                    <a
                                        href="https://apps.apple.com/app/sentinel-vine-manager/id1608970406"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        Download on App Store
                                    </a>
                                </li>
                                <li><a href={APP_HOST + '/login'}>User Login</a></li>
                            </ul>
                        </div>

                        <div className="foot-col">
                            <h5>Contact</h5>
                            <ul>
                                <li><a href="mailto:support@sentineltech.eu">support@sentineltech.eu</a></li>
                                <li><a href="#">Napa &middot; California</a></li>
                                <li><a href="#">Instagram</a></li>
                                <li><Link href="/privacy">Privacy Policy</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="foot-bottom">
                        <span>&copy; 2026 Spongy Mesophyll Technologies &middot; Sentinel Vine Manager&trade;</span>
                        <div className="ver">
                            <span>Build 26.04.019</span>
                            <Link href="/cookies">Cookies</Link>
                            <Link href="/privacy">Privacy</Link>
                            <a href="#">Legal</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Press;

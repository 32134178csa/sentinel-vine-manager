import React from "react";
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { formatBlogContent, BlogPostMap } from "@/services/BlogService";

interface PressProps {
    posts: BlogPostMap;
}

/** Format date as YYYY.MM.DD -- press items use a consistent date format */
function formatPressDate(key: string): string {
    const dateMap: Record<string, string> = {
        'xchateau-podcast': '2024.06.12',
        'inside-winemaking-podcast': '2024.05.18',
        'sentinels-technological-revolution-in-vineyards-worldwide': '2024.03.22',
        'a-game-changing-new-vineyard-management-technology': '2023.11.15',
        'the-red-blotch-dilemma': '2024.08.10',
        'why-excel-is-an-expensive-way-to-map-virus': '2024.09.05',
        'ndvi-vs-sentinel-vine-mapping': '2025.01.20',
        'vine-data-during-a-downturn': '2025.03.14',
        'the-replant-decision': '2025.04.02',
        'the-knowledge-that-walks-out-the-door': '2025.04.08',
        'vineyard-management-software-buyers-guide-2026': '2026.01.15',
        'vine-level-disease-tracking-program': '2026.02.10',
        'rtk-gps-vineyard-guide': '2026.02.28',
        'drone-vineyard-mapping-vs-ground-truth': '2026.03.12',
        'cellar-management-software-winery-guide': '2026.03.20',
        'vineyard-work-orders-crew-management': '2026.03.28',
        'pesticide-use-reporting-vineyard-compliance': '2026.04.02',
        'vineyard-replanting-cost-roi-guide': '2026.04.08',
        'precision-viticulture-roi-vine-level-data': '2026.04.15',
    };
    return dateMap[key] || '2026.04.01';
}

const Press: React.FC<PressProps> = ({ posts }) => {
    useTranslation('common');
    const MAX_BLOG_INTRO_LENGTH = 220;

    const postEntries = Object.entries(posts);

    // Find the first external press item for the featured section
    const featuredEntry = postEntries.find(([, p]) => p.author !== 'Sentinel Blog');
    const featuredKey = featuredEntry?.[0];
    const remainingEntries = postEntries.filter(([key]) => key !== featuredKey);

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

            {/* ============ FEATURED PRESS ============ */}
            {featuredEntry && featuredKey && (() => {
                const [, featured] = featuredEntry;
                const isExternal = featured.url.startsWith('http');
                return (
                    <section className="press-featured">
                        <div className="idx" style={{
                            fontFamily: 'var(--font-mono)', fontSize: '11px',
                            letterSpacing: '0.18em', textTransform: 'uppercase',
                            color: 'var(--ink-mute)',
                        }}>Featured</div>
                        <a
                            href={featured.url}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            className="feature-card"
                            style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            <div>
                                <h2>{featured.title}</h2>
                                <p className="excerpt">
                                    {formatBlogContent(featured.content, 280)}
                                </p>
                                <div className="meta">
                                    <span><b>{featured.author}</b></span>
                                    <span>{formatPressDate(featuredKey)}</span>
                                </div>
                            </div>
                            <div className="side">
                                <h5>From the article</h5>
                                <blockquote>
                                    &ldquo;{formatBlogContent(featured.content, 120)}&rdquo;
                                </blockquote>
                                <cite>{featured.author}</cite>
                            </div>
                        </a>
                    </section>
                );
            })()}

            {/* ============ SECTION HEAD ============ */}
            <div className="section-head container-lp">
                <div className="idx">Coverage</div>
                <h2>In <em>the press.</em></h2>
            </div>

            {/* ============ PRESS ITEMS ============ */}
            <section className="press-list container-lp">
                {remainingEntries.map(([key, post]) => {
                    const isExternal = post.url.startsWith('http');
                    const itemType = post.author === 'Sentinel Blog' ? 'Blog' : 'Press';
                    return (
                        <Link
                            key={key}
                            href={post.url}
                            target={isExternal ? '_blank' : undefined}
                            rel={isExternal ? 'noopener noreferrer' : undefined}
                            className="press-item"
                        >
                            <div className="date-col">{formatPressDate(key)}</div>
                            <div>
                                <span className="type">{itemType}</span>
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
                        <Link href="/blog" className="cta-ghost">Read the Blog</Link>
                        <a href="mailto:support@sentineltech.eu" className="cta-solid">
                            Email Press <span className="arrow" />
                        </a>
                    </div>
                </div>
            </section>

        </div>
    );
}

export default Press;

import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useState } from 'react';
import { AnalyticsService } from '@/services/AnalyticsService';

interface FAQItem {
  num: string;
  question: string;
  answer: string;
}

interface FAQSection {
  id: string;
  num: string;
  title: string;
  titleEm: string;
  faqs: FAQItem[];
}

const sections: FAQSection[] = [
  {
    id: 'getting-started',
    num: '01',
    title: 'Getting',
    titleEm: 'Started',
    faqs: [
      {
        num: 'Q.01',
        question: 'How long does it take to map a typical vineyard?',
        answer: 'One client with 120 acres mapped 187,000 vines in 10 days, walking or riding the rows with an iPhone and an RTK GNSS receiver.\n\nIn practice, a two-person team can map 15\u201325 acres per day, depending on row spacing, vineyard geometry and GNSS signal conditions.',
      },
      {
        num: 'Q.02',
        question: 'Do we need shapefiles or prior GIS data?',
        answer: 'No. Sentinel\u2019s proprietary automation lets you map end vines and auto-populate the rest of the row. If you already have block polygons or vine-row shapefiles we\u2019ll import them, but it\u2019s not required.',
      },
      {
        num: 'Q.03',
        question: 'Does it work offline in the vineyard?',
        answer: 'Yes. The mobile app caches block data and queues every vine edit locally, syncing when a cellular or Wi-Fi signal returns. GNSS hardware works in the field regardless of cell coverage.',
      },
    ],
  },
  {
    id: 'accuracy',
    num: '02',
    title: 'Accuracy &',
    titleEm: 'Hardware',
    faqs: [
      {
        num: 'Q.04',
        question: 'What\u2019s the actual mapping accuracy?',
        answer: 'With an RTK GNSS receiver and a good correction source, horizontal accuracy is 0.9 cm \u00b1 0.4 cm in open sky conditions. Under heavy canopy or steep hillside blocks, expect 2\u20134 cm \u2014 still an order of magnitude better than consumer GPS.',
      },
      {
        num: 'Q.05',
        question: 'What hardware do I need?',
        answer: 'An iPhone (iOS 16+) and a clip-on RTK GNSS receiver. We recommend specific receiver models depending on your geography and carrier-phase correction service. Total hardware cost is typically $1.5\u20133k per field unit.',
      },
      {
        num: 'Q.06',
        question: 'Does it work on tractors or only on foot?',
        answer: 'Both. The mobile app works on foot, ATV, and tractor. Some clients mount a receiver on a UTV with a phone on a RAM mount; others prefer walking the rows for denser data capture.',
      },
    ],
  },
  {
    id: 'disease',
    num: '03',
    title: 'Disease',
    titleEm: 'Tracking',
    faqs: [
      {
        num: 'Q.07',
        question: 'Which diseases can I track?',
        answer: 'Any \u2014 the disease list is user-configurable. Out of the box we ship templates for Red Blotch, Leafroll (GLRaV-3 and others), Pierce\u2019s Disease, Eutypa, Esca, and Phylloxera, with the user-definable status categories (Positive, Symptomatic but Untested, Tested Negative).',
      },
      {
        num: 'Q.08',
        question: 'Can I auto-generate lab sample labels?',
        answer: 'Yes. Tag suspected vines in the field; Sentinel generates sample labels with vine IDs, block/row/vine coordinates, and a pre-filled lab submission form. Upload results in bulk; vine disease status updates automatically.',
      },
      {
        num: 'Q.09',
        question: 'How is Sentinel different from NDVI drone imagery?',
        answer: 'NDVI measures canopy \u201cgreenness\u201d from above \u2014 it cannot distinguish disease from shade, irrigation failure, or young-vine vigor. Sentinel captures user-verified ground truth per vine. They\u2019re complements, not substitutes. Many clients use aerial imagery to prioritize scouting zones, then Sentinel to ground-truth and act.',
      },
    ],
  },
  {
    id: 'operations',
    num: '04',
    title: 'Operations &',
    titleEm: 'Work Orders',
    faqs: [
      {
        num: 'Q.10',
        question: 'How do work orders update vine statuses?',
        answer: 'Create a Roguing work order pointed at vines with the Positive Disease Status of your choice. When a crew member marks a vine \u201crogued\u201d in the field, Sentinel flips that vine\u2019s disease status to No-Virus and production status to Miss \u2014 ready for a Planting work order next spring.',
      },
      {
        num: 'Q.11',
        question: 'Can Sentinel forecast yield?',
        answer: 'Yes. Our crop estimation and thinning simulator uses your historical cluster counts, cluster weights, and berry weights to project yield with statistical confidence intervals \u2014 block by block and across the vineyard.',
      },
      {
        num: 'Q.12',
        question: 'Does it handle spray and pesticide compliance?',
        answer: 'Yes \u2014 and as of 2026, Sentinel generates the compliance submission itself. See section 06, Compliance & Reporting.',
      },
    ],
  },
  {
    id: 'compliance',
    num: '05',
    title: 'Compliance &',
    titleEm: 'Reporting',
    faqs: [
      {
        num: 'Q.13',
        question: 'Can Sentinel file my pesticide use reports?',
        answer: 'Yes. Every spray you log in the field feeds directly into your pesticide use submission. Sentinel generates a compliant XML report \u2014 county permit number, site coordinates, product EPA registration, rate, acreage treated, operator certification \u2014 ready for local and state submission.\n\nNo separate reporting tool. No end-of-month spreadsheet reconciliation. No re-entering the same data in two places.',
      },
      {
        num: 'Q.14',
        question: 'Which jurisdictions are supported?',
        answer: 'California Department of Pesticide Regulation (CDPR) PUR format is supported out of the box; Oregon, Washington, and the EU (PPP-Directive) templates are rolling out through 2026. Custom jurisdictions are configurable.',
      },
      {
        num: 'Q.15',
        question: 'What about restricted-entry intervals and applicator records?',
        answer: 'REI and PHI are tracked per-application and surface as alerts on the block map. Applicator certifications (QAC/QAL) are stored per operator and stamped onto every relevant work order.',
      },
    ],
  },
  {
    id: 'cellar',
    num: '06',
    title: 'Cellar',
    titleEm: 'Management',
    faqs: [
      {
        num: 'Q.16',
        question: 'What does Cellar Management actually cover?',
        answer: 'Lots tracked from harvest to bottle: fermentation timelines, lab analysis (Brix, pH, TA, SO\u2082, VA), vessel assignments, barrel inventory, topping schedules, and bottling runs. Every lot ties back to the specific block and vines it came from \u2014 so the same permanent record that started with a vine follows the wine into the cellar.',
      },
      {
        num: 'Q.17',
        question: 'How does the pricing compare to dedicated cellar platforms?',
        answer: 'Sentinel offers Cellar Management as an add-on module to the vineyard subscription -- one platform, one login, lot-to-vine traceability built in. Lab results, vessel assignments and barrel inventory are all part of the module.',
      },
      {
        num: 'Q.18',
        question: 'Can I really trace a bottle back to individual vines?',
        answer: 'Yes. Pick maps recorded at harvest link the fruit entering a fermenter to the exact set of vines that produced it. From there, lot-to-lot transfers, blending and bottling are tracked, so a finished bottle carries the lineage of the vines all the way back to year-one mapping.',
      },
      {
        num: 'Q.19',
        question: 'Does it replace my winemaking software?',
        answer: 'For most small and mid-size operations, yes. Larger cellars with very specific compliance or accounting integrations may keep a dedicated platform for a transition period and run Sentinel alongside it. We import historical lot data from InnoVint, Vintrace, and Winemaker\u2019s Database CSV exports.',
      },
    ],
  },
  {
    id: 'pricing',
    num: '07',
    title: 'Pricing &',
    titleEm: 'Onboarding',
    faqs: [
      {
        num: 'Q.20',
        question: 'How is Sentinel priced?',
        answer: 'Annual subscription, priced per acre with volume breaks for larger operations. Hardware is purchased separately (one-time). Cellar Management and pesticide use reporting are available as add-on modules. Schedule a demo and we\u2019ll put together a quote for your specific operation.',
      },
      {
        num: 'Q.21',
        question: 'What does onboarding look like?',
        answer: 'Roughly a week-long process, end-to-end. We train your team on the platform and on mapping in the field. Within a couple of days, most teams are mapping hundreds of acres on their own. We stay engaged through your first full vintage.',
      },
    ],
  },
];

function FAQAccordion({ faq, isOpen, onToggle }: { faq: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <details className="faq-item" open={isOpen}>
      <summary className="faq-summary" onClick={(e) => { e.preventDefault(); onToggle(); }}>
        <span className="faq-num">{faq.num}</span>
        <span className="faq-q">{faq.question}</span>
        <span className={`faq-chevron${isOpen ? ' open' : ''}`} />
      </summary>
      {isOpen && (
        <div className="faq-answer">
          {faq.answer.split('\n\n').map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      )}
    </details>
  );
}

export default function FAQ() {
  useTranslation('common');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggle = (key: string) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="faq-v2" data-page="faqs">

      {/* ============ PAGE HERO ============ */}
      <header className="page-hero container-lp">
        <div className="idx">FAQs &middot; Sentinel Vine Manager</div>
        <h1>
          Questions from the field, <em>answered.</em>
        </h1>
        <p className="lede">
          The things vineyard managers actually ask us — about accuracy, privacy, workflows, pricing, and pests.
        </p>
      </header>

      {/* ============ FAQ BODY: SIDEBAR + MAIN ============ */}
      <div className="faq-body container-lp">

        {/* Sticky sidebar nav */}
        <aside className="faq-sidebar">
          <div className="faq-sidebar-label">On this page</div>
          {sections.map(sec => (
            <a key={sec.id} className="faq-sidebar-link" href={`#${sec.id}`}>
              <span className="faq-sidebar-num">{sec.num}</span>
              {sec.title} {sec.titleEm}
            </a>
          ))}
        </aside>

        {/* Main FAQ content */}
        <main className="faq-main">
          {sections.map(sec => (
            <section key={sec.id} id={sec.id} className="faq-section">
              <h2 className="faq-section-title">
                <span className="faq-section-num">{sec.num}</span>
                {sec.title} <em>{sec.titleEm}</em>
              </h2>
              {sec.faqs.map(faq => (
                <FAQAccordion
                  key={faq.num}
                  faq={faq}
                  isOpen={!!openItems[faq.num]}
                  onToggle={() => toggle(faq.num)}
                />
              ))}
            </section>
          ))}
        </main>
      </div>

      {/* ============ CTA BAND ============ */}
      <section>
        <div className="cta-band container-lp">
          <div>
            <div className="kicker" style={{ marginBottom: 24 }}>09 &middot; Get in Touch</div>
            <h3>Question <em>not answered here?</em></h3>
          </div>
          <div className="actions">
            <a href="mailto:support@sentineltech.eu" className="cta-ghost">Email us</a>
            <Link href="/contact" className="cta-solid" onClick={() => AnalyticsService.trackDemoClick('faq_cta_band')}>
              Schedule a Demo <span className="arrow" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import BrowserFrame from './BrowserFrame';

const years = [
  { y: '2024', stacks: [{ c: 'oklch(0.78 0.11 150)', n: 24529, l: 'Producing' }, { c: 'oklch(0.72 0.14 55)', n: 8603, l: 'Rootstock' }, { c: 'oklch(0.55 0.09 140)', n: 2947, l: 'Non-Prod' }] },
  { y: '2025', stacks: [{ c: 'oklch(0.78 0.11 150)', n: 37330 }, { c: 'oklch(0.72 0.14 55)', n: 10431 }, { c: 'oklch(0.55 0.09 140)', n: 3048 }] },
  { y: '2026', stacks: [{ c: 'oklch(0.78 0.11 150)', n: 38102 }, { c: 'oklch(0.72 0.14 55)', n: 10474 }, { c: 'oklch(0.55 0.09 140)', n: 2530 }] },
];

const savedQueries = ['Red Blotch 2024\u21922026', 'VR Rootstock Cohort', 'Block VR-8 \u00b7 Trunk Dis.', 'VR South mortality'];

function SappTop({ active = 'time' }: { active?: string }) {
  const tabs = [
    ['map', 'Map'], ['chart', 'Chart'], ['time', 'Time'],
    ['crop', 'Crop Estimation'], ['wo', 'Work Orders'], ['settings', 'Settings'],
  ];
  return (
    <div className="sapp-top">
      <a className="brand">
        <span className="mark"><img src="/img/transparent-logo.webp" alt="" /></span>
        <span className="name">Sentinel<em>&middot;</em></span>
      </a>
      <div className="tabs">
        {tabs.map(([k, label]) => (
          <a key={k} className={k === active ? 'active' : ''}>{label}</a>
        ))}
      </div>
      <span className="spacer" style={{ flex: 1 }} />
      <div className="utility">
        <span>guillaume@volcanicridge</span>
      </div>
    </div>
  );
}

export default function DesktopTime() {
  const maxTotal = Math.max(...years.map(y => y.stacks.reduce((a, s) => a + s.n, 0)));

  return (
    <BrowserFrame url="app/time?interval=year">
      <SappTop active="time" />
      <div className="sapp-toolbar">
        <span className="chip active">Property &middot; Volcanic Ridge <span className="x">&times;</span></span>
        <span className="chip">+ Add filter</span>
        <span className="spacer" />
        <span className="btn-ghost">Group by &middot; Production Status</span>
        <span className="btn-primary">Save Query</span>
      </div>
      <div className="dtime-view">
        <div className="dtime-chart">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 8 }}>
            <div>
              <div className="sub">03 &middot; Time</div>
              <h4>Vine counts &middot; <em>vintage by vintage.</em></h4>
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.12em', color: '#5A5D5A', textTransform: 'uppercase' as const }}>
              Interval &middot; Year &middot; 3 vintages
            </div>
          </div>
          <div className="dtime-bars">
            {years.map((y, i) => {
              const total = y.stacks.reduce((a, s) => a + s.n, 0);
              const totalH = (total / maxTotal) * 260;
              return (
                <div key={i} className="bar-col">
                  <div className="stack" style={{ height: totalH }}>
                    {y.stacks.map((s, j) => {
                      const h = (s.n / total) * totalH;
                      return (
                        <div key={j} className="seg" style={{ height: h, background: s.c }}>
                          <span style={{ color: h > 22 ? '#0A0B0D' : 'transparent' }}>{s.n.toLocaleString()}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="year">{y.y}</div>
                </div>
              );
            })}
          </div>
          <div className="dtime-legend">
            <div className="row" style={{ '--c': 'oklch(0.78 0.11 150)' } as React.CSSProperties}><i />Producing</div>
            <div className="row" style={{ '--c': 'oklch(0.72 0.14 55)' } as React.CSSProperties}><i />Rootstock</div>
            <div className="row" style={{ '--c': 'oklch(0.55 0.09 140)' } as React.CSSProperties}><i />Non-Producing</div>
          </div>
        </div>

        <div className="dtime-side">
          <h5>Query &middot; Interval</h5>
          <div className="field">
            <label>Interval Unit</label>
            <div className="val">Year</div>
          </div>
          <div className="field">
            <label>Interval Count</label>
            <div className="val">3</div>
          </div>
          <div className="field">
            <label>Hide Categories</label>
            <div className="val">Miss</div>
          </div>
          <div className="field">
            <label>Show Totals</label>
            <div className="val">On</div>
          </div>
          <button className="apply">Submit Query</button>

          <div className="saved-queries">
            <h5>Saved Queries &middot; 14</h5>
            {savedQueries.map(q => (
              <div key={q} className="q">
                <span>{q}</span>
                <span className="arrow">&rarr;</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

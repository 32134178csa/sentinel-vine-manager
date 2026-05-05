import React from 'react';
import BrowserFrame from './BrowserFrame';

const data = [
  { label: 'Producing', n: 41315, pct: 0.800, c: 'oklch(0.80 0.17 150)' },
  { label: 'Non-Producing', n: 6197, pct: 0.120, c: '#E4252B' },
  { label: 'Rootstock', n: 2582, pct: 0.050, c: 'oklch(0.72 0.17 55)' },
  { label: 'Miss', n: 1549, pct: 0.030, c: 'oklch(0.78 0.015 140)' },
];

function SappTop({ active = 'chart' }: { active?: string }) {
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

export default function DesktopChart() {
  const cx = 220, cy = 220, rO = 180, rI = 120;
  let acc = 0;
  const segs = data.map((d) => {
    const start = acc;
    const end = acc + d.pct * 2 * Math.PI;
    acc = end;
    const x0 = cx + rO * Math.sin(start), y0 = cy - rO * Math.cos(start);
    const x1 = cx + rO * Math.sin(end), y1 = cy - rO * Math.cos(end);
    const xi0 = cx + rI * Math.sin(end), yi0 = cy - rI * Math.cos(end);
    const xi1 = cx + rI * Math.sin(start), yi1 = cy - rI * Math.cos(start);
    const large = d.pct > 0.5 ? 1 : 0;
    return {
      d: `M ${x0} ${y0} A ${rO} ${rO} 0 ${large} 1 ${x1} ${y1} L ${xi0} ${yi0} A ${rI} ${rI} 0 ${large} 0 ${xi1} ${yi1} Z`,
      c: d.c,
    };
  });

  return (
    <BrowserFrame url="app/chart?q=production-status">
      <SappTop active="chart" />
      <div className="sapp-toolbar">
        <span className="chip active">Property &middot; Volcanic Ridge <span className="x">&times;</span></span>
        <span className="chip">Year Planted &middot; &ge; 2014 <span className="x">&times;</span></span>
        <span className="chip">+ Add filter</span>
        <span className="spacer" />
        <span className="btn-ghost">Group by &middot; Production Status</span>
        <span className="btn-primary">Save Query</span>
      </div>
      <div className="dchart-view">
        <div>
          <div className="chart-title">02 &middot; Chart</div>
          <h3>51,644 vines &middot; <em>by production status.</em></h3>
          <div className="donut-wrap">
            <svg viewBox="0 0 440 440">
              {segs.map((s, i) => <path key={i} d={s.d} fill={s.c} />)}
            </svg>
            <div className="donut-center">
              <div className="v">51.6<span>k</span></div>
              <div className="k">Total Vines</div>
            </div>
          </div>
        </div>
        <div>
          <div className="dchart-table">
            <div className="hd">
              <span>Status</span>
              <span style={{ textAlign: 'right' }}>Count</span>
              <span style={{ textAlign: 'right' }}>%</span>
            </div>
            {data.map((d, i) => (
              <div key={i} className="row" style={{ '--swatch': d.c } as React.CSSProperties}>
                <b>{d.label}</b>
                <span className="n">{d.n.toLocaleString()}</span>
                <span className="n">{(d.pct * 100).toFixed(1)}%</span>
              </div>
            ))}
            <div className="row" style={{ '--swatch': 'transparent' } as React.CSSProperties}>
              <b style={{ color: 'var(--ink)' }}>Total</b>
              <span className="n">51,643</span>
              <span className="n"></span>
            </div>
          </div>
          <div className="dchart-table field-note" style={{ marginTop: 16 }}>
            <div className="label">Field Note</div>
            <p>5.0% of Volcanic Ridge is rootstock -- <em>verify budwood counts for spring grafting plan.</em></p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

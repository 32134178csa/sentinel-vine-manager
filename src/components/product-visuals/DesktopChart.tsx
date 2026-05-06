import React from 'react';

export function DesktopChart() {
  const data = [
    { label: 'Producing', n: 41315, pct: 0.800, c: 'oklch(0.80 0.17 150)' },
    { label: 'Non-Producing', n: 6197, pct: 0.120, c: '#E4252B' },
    { label: 'Rootstock', n: 2582, pct: 0.050, c: 'oklch(0.72 0.17 55)' },
    { label: 'Miss', n: 1549, pct: 0.030, c: 'oklch(0.78 0.015 140)' },
  ];
  
  const cx = 220, cy = 220, rO = 180, rI = 120;
  let acc = 0;
  
  const segs = data.map((d) => {
    const start = acc, end = acc + d.pct * 2 * Math.PI;
    acc = end;
    const x0 = cx + rO * Math.sin(start), y0 = cy - rO * Math.cos(start);
    const x1 = cx + rO * Math.sin(end), y1 = cy - rO * Math.cos(end);
    const xi0 = cx + rI * Math.sin(end), yi0 = cy - rI * Math.cos(end);
    const xi1 = cx + rI * Math.sin(start), yi1 = cy - rI * Math.cos(start);
    const large = d.pct > 0.5 ? 1 : 0;
    return {
      d: `M ${x0} ${y0} A ${rO} ${rO} 0 ${large} 1 ${x1} ${y1} L ${xi0} ${yi0} A ${rI} ${rI} 0 ${large} 0 ${xi1} ${yi1} Z`,
      c: d.c,
      label: d.label,
    };
  });
  
  return (
    <div className="desktop-chart-visual">
      <div className="browser-frame">
        <div className="browser-chrome">
          <div className="lights"><i /><i /><i /></div>
          <div className="addr">
            <span>app.sentinelvine.com</span>/app/chart?q=production-status
          </div>
        </div>
        <div className="sapp">
          <div className="sapp-top">
            <a className="brand">
              <span className="mark">
                <img src="/assets/sentinel-mark-transparent.png" alt="" />
              </span>
              <span className="name">Sentinel<em>·</em></span>
            </a>
            <div className="tabs">
              <a>Map</a>
              <a className="active">Chart</a>
              <a>Time</a>
              <a>Crop Estimation</a>
              <a>Work Orders</a>
            </div>
            <span className="spacer" />
            <div className="utility">
              <span>guillaume@volcanicridge</span>
            </div>
          </div>
          
          <div className="sapp-toolbar">
            <span className="chip active">Property · Volcanic Ridge <span className="x">×</span></span>
            <span className="chip">Year Planted · ≥ 2014 <span className="x">×</span></span>
            <span className="spacer" />
            <span className="btn-primary">Save Query</span>
          </div>
          
          <div className="chart-view">
            <div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 8 }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.14em', color: 'oklch(0.78 0.11 150)', textTransform: 'uppercase' }}>
                  02 · Chart
                </div>
              </div>
              <h3 style={{ fontFamily: 'Instrument Serif', fontSize: 44, fontWeight: 400, letterSpacing: -0.01, margin: '0 0 24px', lineHeight: 1.05 }}>
                51,644 vines · <em style={{ fontStyle: 'italic', color: '#9A9C98' }}>by production status.</em>
              </h3>
              
              <div className="donut">
                <svg viewBox="0 0 440 440">
                  {segs.map((s, i) => (
                    <path key={i} d={s.d} fill={s.c} />
                  ))}
                </svg>
                <div className="center">
                  <div className="v">
                    51.6<span style={{ fontSize: 24, letterSpacing: 0, color: '#9A9C98', marginLeft: 6 }}>k</span>
                  </div>
                  <div className="k">Total Vines</div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="dtable">
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
                  <b style={{ color: '#EDEDE8' }}>
                    <span style={{ width: 0, height: 0 }} />Total
                  </b>
                  <span className="n">51,643</span>
                  <span className="n"></span>
                </div>
              </div>
              
              <div style={{ marginTop: 24, padding: 16, border: '1px solid #1A1C20', background: '#0F1013' }}>
                <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.16em', color: '#5A5D5A', textTransform: 'uppercase', marginBottom: 8 }}>
                  Field Note
                </div>
                <div style={{ fontFamily: 'Instrument Serif', fontSize: 17, lineHeight: 1.35, color: '#EDEDE8', letterSpacing: -0.005 }}>
                  5.0% of Volcanic Ridge is rootstock — <em style={{ fontStyle: 'italic', color: '#9A9C98' }}>verify budwood counts for spring grafting plan.</em>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

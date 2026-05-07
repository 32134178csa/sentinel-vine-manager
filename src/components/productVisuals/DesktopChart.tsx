import React from 'react';

export function DesktopChart() {
  const data = [
    { label: 'Producing', n: 41315, pct: 0.800, c: 'oklch(0.80 0.17 150)' },
    { label: 'Non-Producing', n: 6197, pct: 0.120, c: '#E4252B' },
    { label: 'Rootstock', n: 2582, pct: 0.050, c: 'oklch(0.72 0.17 55)' },
    { label: 'Miss', n: 1549, pct: 0.030, c: 'oklch(0.78 0.015 140)' },
  ];
  
  const total = data.reduce((sum, d) => sum + d.n, 0);
  
  // Donut SVG
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
    };
  });

  const COLORS = {
    bg: '#0A0B0D',
    ink: '#EDEDE8',
    inkDim: '#9A9C98',
    accent: 'oklch(0.78 0.11 150)',
  };

  return (
    <div className="product-visual-desktop">
      <div className="browser-window">
        {/* Browser chrome */}
        <div className="browser-chrome">
          <div className="chrome-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="url-bar">app/chart?q=production-status</div>
        </div>
        
        {/* App header */}
        <div style={{
          height: 56,
          background: '#0F1013',
          borderBottom: '1px solid #24272D',
          display: 'flex',
          alignItems: 'center',
          padding: '0 24px',
          gap: 32,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <img src="/images/product/sentinel-mark-transparent.png" alt="Sentinel" style={{ width: 24, height: 24 }} />
            <span style={{ color: COLORS.ink, fontFamily: "'Instrument Serif', serif", fontSize: 18 }}>Sentinel·</span>
          </div>
          <nav style={{ display: 'flex', gap: 24, flex: 1 }}>
            {['Map', 'Chart', 'Time', 'Crop Estimation', 'Work Orders'].map(tab => (
              <button key={tab} style={{
                background: 'none',
                border: 'none',
                borderBottom: tab === 'Chart' ? `2px solid ${COLORS.accent}` : '2px solid transparent',
                color: tab === 'Chart' ? COLORS.accent : COLORS.inkDim,
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                padding: '4px 0',
                cursor: 'pointer',
              }}>
                {tab}
              </button>
            ))}
          </nav>
          <div style={{ color: COLORS.inkDim, fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>
            volcanicridge@volcanicridge
          </div>
        </div>
        
        {/* Toolbar */}
        <div style={{
          padding: '16px 24px',
          background: '#0F1013',
          borderBottom: '1px solid #1B1D21',
          display: 'flex',
          gap: 8,
          alignItems: 'center',
        }}>
          <span className="chip active">Property · Volcanic Ridge <span style={{ marginLeft: 8 }}>×</span></span>
          <span className="chip">Year Planted · ≥ 2014 <span style={{ marginLeft: 8 }}>×</span></span>
          <span className="chip">+ Add filter</span>
          <div style={{ flex: 1 }} />
          <button className="btn-ghost">Group by · Production Status</button>
          <button className="btn-primary">Save Query</button>
        </div>
        
        {/* Chart view */}
        <div style={{ padding: 40, background: '#0F1013', minHeight: 640, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, maxWidth: 1200, margin: '0 auto' }}>
          {/* Left: Donut */}
          <div>
            <div style={{ marginBottom: 8 }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.14em',
                color: COLORS.accent,
                textTransform: 'uppercase',
              }}>
                02 · Chart
              </div>
            </div>
            <h3 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 44,
              fontWeight: 400,
              letterSpacing: -0.01,
              margin: '0 0 24px',
              lineHeight: 1.05,
              color: COLORS.ink,
            }}>
              51,644 vines · <em style={{ fontStyle: 'italic', color: COLORS.inkDim }}>by production status.</em>
            </h3>
            
            <div style={{ position: 'relative', width: 440, height: 440, marginBottom: 24 }}>
              <svg viewBox="0 0 440 440" style={{ width: '100%', height: '100%' }}>
                {segs.map((s, i) => (
                  <path key={i} d={s.d} fill={s.c} />
                ))}
              </svg>
              <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontSize: 56,
                  fontWeight: 400,
                  color: COLORS.ink,
                  lineHeight: 1,
                }}>
                  51.6<span style={{ fontSize: 24, letterSpacing: 0, color: COLORS.inkDim, marginLeft: 6 }}>k</span>
                </div>
                <div style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10,
                  letterSpacing: '0.14em',
                  color: COLORS.inkDim,
                  textTransform: 'uppercase',
                  marginTop: 4,
                }}>
                  Total Vines
                </div>
              </div>
            </div>
            
            {/* Field note */}
            <div style={{
              padding: 16,
              border: '1px solid #1A1C20',
              background: '#0F1013',
            }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.16em',
                color: '#5A5D5A',
                textTransform: 'uppercase',
                marginBottom: 8,
              }}>
                Field Note
              </div>
              <div style={{
                fontFamily: "'Instrument Serif', serif",
                fontSize: 17,
                lineHeight: 1.35,
                color: COLORS.ink,
                letterSpacing: -0.005,
              }}>
                5.0% of Volcanic Ridge is rootstock — <em style={{ fontStyle: 'italic', color: COLORS.inkDim }}>verify budwood counts for spring grafting plan.</em>
              </div>
            </div>
          </div>
          
          {/* Right: Table */}
          <div>
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              padding: '12px 16px',
              background: '#15171B',
              borderRadius: '4px 4px 0 0',
              gap: 16,
            }}>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: COLORS.inkDim,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
              }}>Status</span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: COLORS.inkDim,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                textAlign: 'right',
              }}>Count</span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                color: COLORS.inkDim,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                textAlign: 'right',
              }}>%</span>
            </div>
            
            {data.map((d, i) => (
              <div key={i} style={{
                display: 'grid',
                gridTemplateColumns: '2fr 1fr 1fr',
                padding: 16,
                background: '#15171B',
                marginBottom: 2,
                gap: 16,
                alignItems: 'center',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <span style={{ width: 10, height: 10, borderRadius: '50%', background: d.c, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 15, color: COLORS.ink }}>{d.label}</span>
                </div>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: COLORS.ink,
                  textAlign: 'right',
                }}>{d.n.toLocaleString()}</span>
                <span style={{
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 13,
                  color: COLORS.inkDim,
                  textAlign: 'right',
                }}>{(d.pct * 100).toFixed(1)}%</span>
              </div>
            ))}
            
            {/* Total row */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr',
              padding: 16,
              background: 'rgba(21,23,27,0.5)',
              borderTop: '1px solid #24272D',
              marginTop: 8,
              gap: 16,
              alignItems: 'center',
            }}>
              <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 15, color: COLORS.ink, fontWeight: 600 }}>Total</span>
              <span style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 13,
                color: COLORS.ink,
                textAlign: 'right',
                fontWeight: 600,
              }}>{total.toLocaleString()}</span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

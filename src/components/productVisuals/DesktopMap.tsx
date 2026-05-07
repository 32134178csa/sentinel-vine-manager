import React from 'react';

// Seeded PRNG
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

export function DesktopMap() {
  const W = 1055, H = 1055;
  const colXs = [28,70,112,154,196,238,280,322,364,406,448,490,532,574,616,658,700,742,784,826,868,910,952,994,1036];
  const rowStep = 21;
  const vines = colXs.length;
  const rows = Math.floor((H - 40) / rowStep);
  const padY = (H - (rows - 1) * rowStep) / 2;
  
  let seed = 31;
  const r = seededRandom(seed);
  
  const C = {
    healthy: 'oklch(0.80 0.17 150)',
    nominal: '#E4252B',
    miss: 'oklch(0.78 0.015 140)',
    virus: 'oklch(0.52 0.22 355)',
  };
  
  const selVv = 15, selRr = 26;
  const selX = colXs[selVv], selY = padY + selRr * rowStep;
  const epiVv = selVv, epiRr = selRr;
  const epiRadius = 9;
  
  const dots: JSX.Element[] = [];
  for (let rr = 0; rr < rows; rr++) {
    for (let vv = 0; vv < vines; vv++) {
      const x = colXs[vv], y = padY + rr * rowStep;
      const dx = vv - epiVv, dy = (rr - epiRr) * 0.5;
      const d = Math.sqrt(dx * dx + dy * dy);
      const pAffected = Math.max(0.012, 0.38 * Math.exp(-(d * d) / (2 * epiRadius * epiRadius)));
      const n = r();
      
      let f: string;
      if (vv === epiVv && rr === epiRr) {
        f = C.virus;
      } else if (n < pAffected) {
        const k = r();
        if (k < 0.50) f = C.nominal;
        else if (k < 0.85) f = C.miss;
        else f = C.virus;
      } else {
        f = C.healthy;
      }
      
      dots.push(<circle key={`${rr}-${vv}`} cx={x.toFixed(1)} cy={y.toFixed(1)} r="4.8" fill={f} />);
    }
  }

  const COLORS = {
    bg: '#0A0B0D',
    line: '#24272D',
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
          <div className="url-bar">app/map?block=VR-8A</div>
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
                borderBottom: tab === 'Map' ? `2px solid ${COLORS.accent}` : '2px solid transparent',
                color: tab === 'Map' ? COLORS.accent : COLORS.inkDim,
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
          <span className="chip">Block · VR-8A <span style={{ marginLeft: 8 }}>×</span></span>
          <span className="chip">Disease · Red Blotch = TRUE <span style={{ marginLeft: 8 }}>×</span></span>
          <span className="chip">+ Add filter</span>
          <div style={{ flex: 1 }} />
          <button className="btn-ghost">Save Query</button>
          <button className="btn-primary">Load Region</button>
        </div>
        
        {/* Map area */}
        <div style={{ width: '100%', height: 640, position: 'relative', background: '#0A0B0D', overflow: 'hidden' }}>
          {/* Satellite */}
          <img 
            src="/images/product/vineyard-satellite-v.png"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(0.85) brightness(0.75)',
              zIndex: 1,
            }}
          />
          
          {/* Vignette */}
          <div style={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            pointerEvents: 'none',
            background: `radial-gradient(ellipse 100% 90% at 50% 50%, transparent 45%, rgba(0,0,0,0.45) 100%),
                        linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.32) 100%)`,
          }} />
          
          {/* SVG with dots */}
          <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 2 }}>
            {/* Block divider */}
            <line 
              x1={colXs[Math.round(vines * 0.45)]} 
              y1={30} 
              x2={colXs[Math.round(vines * 0.45)]} 
              y2={H - 30} 
              stroke="rgba(255,255,255,0.18)" 
              strokeDasharray="2 5" 
            />
            
            {dots}
            
            {/* Crosshair */}
            <g transform={`translate(${selX},${selY})`}>
              <circle r="22" fill="none" stroke="#000" strokeOpacity="0.45" strokeWidth="3.2" />
              <circle r="22" fill="none" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.6" />
              <line x1="-30" y1="0" x2="-14" y2="0" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.5" />
              <line x1="14" y1="0" x2="30" y2="0" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.5" />
              <line x1="0" y1="-30" x2="0" y2="-14" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.5" />
              <line x1="0" y1="14" x2="0" y2="30" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.5" />
            </g>
          </svg>
          
          {/* Vine card */}
          <div style={{
            position: 'absolute',
            right: 20,
            bottom: 20,
            width: 340,
            zIndex: 3,
            background: 'rgba(15,16,19,0.95)',
            border: '1px solid #24272D',
            borderRadius: 8,
            padding: 20,
          }}>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.16em',
              color: '#5A5D5A',
              textTransform: 'uppercase',
              marginBottom: 6,
            }}>
              Vine · 1-6-A607
            </div>
            <h5 style={{
              fontFamily: "'Instrument Serif', serif",
              fontSize: 22,
              fontWeight: 400,
              margin: '0 0 16px',
              color: COLORS.ink,
            }}>
              Block VR-8A.1 · R06 · V52
            </h5>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '8px 16px', marginBottom: 16 }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.inkDim }}>Year Planted</span>
              <b style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: COLORS.ink, textAlign: 'right' }}>1994</b>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.inkDim }}>Variety</span>
              <b style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: COLORS.ink, textAlign: 'right' }}>Cabernet</b>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.inkDim }}>Clone · Rootstock</span>
              <b style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: COLORS.ink, textAlign: 'right' }}>6 · St George</b>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, color: COLORS.inkDim }}>Production</span>
              <b style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: COLORS.accent, textAlign: 'right' }}>Producing</b>
            </div>
            <div style={{ borderTop: '1px solid #1B1D21', paddingTop: 12, marginBottom: 12 }}>
              <span style={{
                display: 'inline-block',
                background: 'rgba(228,37,43,0.15)',
                border: '1px solid rgba(228,37,43,0.4)',
                padding: '4px 8px',
                fontSize: 10,
                fontFamily: "'JetBrains Mono', monospace",
                color: '#E4252B',
                marginRight: 8,
              }}>
                Red Blotch
              </span>
              <span style={{
                display: 'inline-block',
                background: 'rgba(154,156,152,0.1)',
                border: '1px solid rgba(154,156,152,0.3)',
                padding: '4px 8px',
                fontSize: 10,
                fontFamily: "'JetBrains Mono', monospace",
                color: COLORS.inkDim,
              }}>
                Primary Irrig.
              </span>
            </div>
            <div style={{ borderTop: '1px solid #1B1D21', paddingTop: 12 }}>
              <div style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 10,
                letterSpacing: '0.1em',
                color: COLORS.inkDim,
                textTransform: 'uppercase',
              }}>
                Last touched · Guillaume · Apr 12
              </div>
            </div>
          </div>
          
          {/* Legend */}
          <div style={{
            position: 'absolute',
            bottom: 20,
            left: 20,
            background: 'rgba(15,16,19,0.95)',
            border: '1px solid #24272D',
            borderRadius: 8,
            padding: 16,
            zIndex: 3,
          }}>
            <h6 style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 10,
              letterSpacing: '0.14em',
              color: COLORS.inkDim,
              textTransform: 'uppercase',
              margin: '0 0 12px',
            }}>
              Production · Virus
            </h6>
            {[
              { label: 'Producing', count: '41 422', color: C.healthy },
              { label: 'Non-Producing', count: '5 178', color: C.nominal },
              { label: 'Miss', count: '3 624', color: C.miss },
              { label: 'Red Blotch', count: '1 553', color: C.virus },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: item.color, flexShrink: 0 }} />
                <span style={{ fontFamily: "'Instrument Serif', serif", fontSize: 13, color: COLORS.ink, flex: 1 }}>{item.label}</span>
                <b style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: COLORS.ink }}>{item.count}</b>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

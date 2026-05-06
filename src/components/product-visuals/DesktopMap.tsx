import React from 'react';

export function DesktopMap() {
  // Desktop console map view with crosshair on red vine
  const W = 1055, H = 1055;
  const colXs = [28,70,112,154,196,238,280,322,364,406,448,490,532,574,616,658,700,742,784,826,868,910,952,994,1036];
  const rowStep = 21;
  const vines = colXs.length;
  const rows = Math.floor((H - 40) / rowStep);
  const padY = (H - (rows - 1) * rowStep) / 2;
  
  // Seeded random for consistent layout
  let seed = 31;
  const r = () => (seed = (seed * 9301 + 49297) % 233280, seed / 233280);
  
  const C = {
    healthy: 'oklch(0.80 0.17 150)',
    nominal: '#E4252B',
    miss: 'oklch(0.78 0.015 140)',
    virus: 'oklch(0.52 0.22 355)',
  };
  
  const DOT_R_D = 4.8;
  const selVv = 15, selRr = 26;
  const selX = colXs[selVv], selY = padY + selRr * rowStep;
  
  const dots = [];
  const epiVv = selVv, epiRr = selRr;
  const epiRadius = 9;
  
  for (let rr = 0; rr < rows; rr++) {
    for (let vv = 0; vv < vines; vv++) {
      const x = colXs[vv], y = padY + rr * rowStep;
      const dx = vv - epiVv, dy = (rr - epiRr) * 0.5;
      const d = Math.sqrt(dx * dx + dy * dy);
      const pAffected = Math.max(0.012, 0.38 * Math.exp(-(d * d) / (2 * epiRadius * epiRadius)));
      const n = r();
      let f;
      
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
      
      dots.push(
        <circle
          key={`${rr}-${vv}`}
          cx={x.toFixed(1)}
          cy={y.toFixed(1)}
          r={DOT_R_D}
          fill={f}
        />
      );
    }
  }
  
  return (
    <div className="desktop-map-visual">
      <div className="browser-frame">
        <div className="browser-chrome">
          <div className="lights"><i /><i /><i /></div>
          <div className="addr">
            <span>app.sentinelvine.com</span>/app/map?block=VR-8A
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
              <a className="active">Map</a>
              <a>Chart</a>
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
            <span className="chip">Block · VR-8A <span className="x">×</span></span>
            <span className="chip">Disease · Red Blotch = TRUE <span className="x">×</span></span>
            <span className="spacer" />
            <span className="btn-primary">Load Region</span>
          </div>
          
          <div className="dmap">
            <img
              src="/assets/vineyard-satellite-v.png"
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
            <div
              style={{
                position: 'absolute',
                inset: 0,
                zIndex: 1,
                pointerEvents: 'none',
                background: `radial-gradient(ellipse 100% 90% at 50% 50%, transparent 45%, rgba(0,0,0,0.45) 100%),
                            linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.32) 100%)`,
              }}
            />
            <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
              <line
                x1={colXs[Math.round(vines * 0.45)]}
                y1={30}
                x2={colXs[Math.round(vines * 0.45)]}
                y2={H - 30}
                stroke="rgba(255,255,255,0.18)"
                strokeDasharray="2 5"
              />
              {dots}
              <g transform={`translate(${selX},${selY})`}>
                <circle r="22" fill="none" stroke="#000" strokeOpacity="0.45" strokeWidth="3.2" />
                <circle r="22" fill="none" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.6" />
                <line x1="-30" y1="0" x2="-14" y2="0" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.5" />
                <line x1="14" y1="0" x2="30" y2="0" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.5" />
                <line x1="0" y1="-30" x2="0" y2="-14" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.5" />
                <line x1="0" y1="14" x2="0" y2="30" stroke="#FFFFFF" strokeOpacity="1" strokeWidth="1.5" />
              </g>
            </svg>
            
            <div className="vine-card" style={{ position: 'absolute', right: 20, bottom: 20, width: 340, zIndex: 3 }}>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.16em', color: '#5A5D5A', textTransform: 'uppercase', marginBottom: 6 }}>
                Vine · 1-6-A607
              </div>
              <h5>Block VR-8A.1 · R06 · V52</h5>
              <div className="kv">
                <span>Year Planted</span><b>1994</b>
                <span>Variety</span><b>Cabernet</b>
                <span>Clone · Rootstock</span><b>6 · St George</b>
                <span>Production</span><b style={{ color: 'oklch(0.78 0.11 150)' }}>Producing</b>
              </div>
              <div className="hr" />
              <div>
                <span className="tag">Red Blotch</span>
                <span className="tag info">Primary Irrig.</span>
              </div>
              <div className="hr" />
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.1em', color: '#9A9C98', textTransform: 'uppercase' }}>
                Last touched · Guillaume · Apr 12
              </div>
            </div>
            
            <div className="legend">
              <h6>Production · Virus</h6>
              <div className="row" style={{ '--c': C.healthy } as React.CSSProperties}>
                <i />Producing<b>41 422</b>
              </div>
              <div className="row" style={{ '--c': C.nominal } as React.CSSProperties}>
                <i />Non-Producing<b>5 178</b>
              </div>
              <div className="row" style={{ '--c': C.miss } as React.CSSProperties}>
                <i />Miss<b>3 624</b>
              </div>
              <div className="row" style={{ '--c': C.virus } as React.CSSProperties}>
                <i />Red Blotch<b>1 553</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

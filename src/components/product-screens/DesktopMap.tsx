import React from 'react';
import BrowserFrame from './BrowserFrame';

function SappTop({ active = 'map' }: { active?: string }) {
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

export default function DesktopMap() {
  // Use the satellite image's native coord system (1055×1055) so SVG slice behaves
  // identically to img object-fit:cover — dots sit on the real dark stripes.
  const W = 1055, H = 1055;
  const colXs = [28,70,112,154,196,238,280,322,364,406,448,490,532,574,616,658,700,742,784,826,868,910,952,994,1036];
  const rowStep = 21; // half the 42px column spacing
  const vines = colXs.length;
  const rows = Math.floor((H - 40) / rowStep);
  const padY = (H - (rows-1)*rowStep) / 2;
  let seed = 31;
  const r = () => (seed = (seed*9301+49297)%233280, seed/233280);
  const C = {
    healthy: 'oklch(0.80 0.17 150)',
    nominal: '#E4252B',
    rootstock: 'oklch(0.72 0.17 55)',
    orange: 'oklch(0.72 0.17 55)',
    miss: 'oklch(0.78 0.015 140)',
    virus: 'oklch(0.52 0.22 355)',
    grey: '#E4252B',
    tested: 'oklch(0.78 0.015 140)',
  };
  const DOT_R_D = 4.8;
  // Pick a specific vine to serve as the selected/crosshair vine
  const selVv = 18, selRr = 26;  // near the hotspot center (73rd column, mid-vertical)
  const selX = colXs[selVv], selY = padY + selRr*rowStep;

  const dots = [];
  // Outbreak epicenter (same as crosshair vine) with a soft density falloff.
  // Inside the hotspot, ~70% of vines are affected; outside falls off quickly.
  const epiVv = selVv, epiRr = selRr;
  const epiRadius = 9; // in vine-column units (tighter => more clustered)
  for (let rr = 0; rr < rows; rr++) {
    for (let vv = 0; vv < vines; vv++) {
      const x = colXs[vv], y = padY + rr * rowStep;
      const dx = vv - epiVv, dy = (rr - epiRr) * 0.5;
      const d = Math.sqrt(dx*dx + dy*dy);
      // probability this vine is "affected" (not producing-green)
      const pAffected = Math.max(0.012, 0.38 * Math.exp(-(d*d)/(2*epiRadius*epiRadius)));
      const n = r();
      let f: string;
      if (vv === epiVv && rr === epiRr) {
        f = C.virus; // the selected vine
      } else if (n < pAffected) {
        // within this 20% target: 10 non-prod / 7 miss / 3 blotch ≈ 50/35/15
        const k = r();
        if (k < 0.50) f = C.nominal;      // Non-Producing (red)
        else if (k < 0.85) f = C.miss;    // Miss (grey)
        else f = C.virus;                 // Red Blotch (purplish)
      } else {
        f = C.healthy;
      }
      dots.push(<circle key={`${rr}-${vv}`} cx={x.toFixed(1)} cy={y.toFixed(1)} r={DOT_R_D} fill={f}/>);
    }
  }

  return (
    <BrowserFrame url="app/map?block=VR-8A">
      <SappTop active="map"/>
      <div className="sapp-toolbar">
        <span className="chip active">Property · Volcanic Ridge <span className="x">×</span></span>
        <span className="chip">Block · VR-8A <span className="x">×</span></span>
        <span className="chip">Disease · Red Blotch = TRUE <span className="x">×</span></span>
        <span className="chip">+ Add filter</span>
        <span className="spacer"/>
        <span className="btn-ghost">Save Query</span>
        <span className="btn-primary">Load Region</span>
      </div>
      <div className="dmap">
        {/* real satellite base — pre-rotated so rows run vertically */}
        <img src="/img/product-screens/vineyard-satellite-v.png" alt="" style={{
          position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',
          filter:'saturate(0.85) brightness(0.75)',zIndex:1,
        }}/>
        {/* vignette for legibility */}
        <div style={{ position:'absolute',inset:0,zIndex:1,pointerEvents:'none',background:
          `radial-gradient(ellipse 100% 90% at 50% 50%, transparent 45%, rgba(0,0,0,0.45) 100%),
           linear-gradient(180deg, rgba(0,0,0,0.25) 0%, transparent 18%, transparent 82%, rgba(0,0,0,0.32) 100%)` }}/>
        <svg viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="xMidYMid slice">
          {/* block divider — between vine columns ~45% */}
          <line x1={colXs[Math.round(vines*0.45)]} y1={30} x2={colXs[Math.round(vines*0.45)]} y2={H-30} stroke="rgba(255,255,255,0.18)" strokeDasharray="2 5"/>
          {dots}
          {/* crosshair — sits on the selected red vine */}
          <g transform={`translate(${selX},${selY})`}>
            <circle r="22" fill="none" stroke="oklch(0.62 0.15 150)" strokeOpacity="0.95" strokeWidth="1.4"/>
            <circle r="22" fill="none" stroke="oklch(0.62 0.15 150)" strokeOpacity="0.35" strokeWidth="4"/>
            <line x1="-30" y1="0" x2="-14" y2="0" stroke="oklch(0.62 0.15 150)" strokeOpacity="0.95" strokeWidth="1.3"/>
            <line x1="14" y1="0" x2="30" y2="0" stroke="oklch(0.62 0.15 150)" strokeOpacity="0.95" strokeWidth="1.3"/>
            <line x1="0" y1="-30" x2="0" y2="-14" stroke="oklch(0.62 0.15 150)" strokeOpacity="0.95" strokeWidth="1.3"/>
            <line x1="0" y1="14" x2="0" y2="30" stroke="oklch(0.62 0.15 150)" strokeOpacity="0.95" strokeWidth="1.3"/>
          </g>
          {/* vine card via foreignObject so it cover-scales with the map */}
          <foreignObject x={selX + 34} y={selY - 110} width="340" height="260">
            <div className="vine-card" style={{position:'static',left:'auto',top:'auto'}}>
              <div style={{fontFamily:'JetBrains Mono',fontSize:10,letterSpacing:'0.16em',color:'#5A5D5A',textTransform:'uppercase',marginBottom:6}}>
                Vine · 1-6-A607
              </div>
              <h5>Block VR-8A.1 · R06 · V52</h5>
              <div className="kv">
                <span>Year Planted</span><b>1994</b>
                <span>Variety</span><b>Cabernet</b>
                <span>Clone · Rootstock</span><b>6 · St George</b>
                <span>Production</span><b style={{color:'oklch(0.78 0.11 150)'}}>Producing</b>
              </div>
              <div className="hr"/>
              <div>
                <span className="tag">Red Blotch</span>
                <span className="tag info">Primary Irrig.</span>
              </div>
              <div className="hr"/>
              <div style={{fontFamily:'JetBrains Mono',fontSize:10,letterSpacing:'0.1em',color:'#9A9C98',textTransform:'uppercase'}}>
                Last touched · Guillaume · Apr 12
              </div>
            </div>
          </foreignObject>
        </svg>

        {/* map tools */}
        <div className="map-tools">
          <button className="active">＋</button>
          <button>−</button>
          <button>⎈</button>
          <button>⟳</button>
          <button>◻</button>
          <button>⌖</button>
        </div>

        {/* legend */}
        <div className="legend">
          <h6>Production · Virus</h6>
          <div className="row" style={{'--c':C.healthy} as React.CSSProperties}><i/>Producing<b>41 422</b></div>
          <div className="row" style={{'--c':C.nominal} as React.CSSProperties}><i/>Non-Producing<b>5 178</b></div>
          <div className="row" style={{'--c':C.miss} as React.CSSProperties}><i/>Miss<b>3 624</b></div>
          <div className="row" style={{'--c':C.virus} as React.CSSProperties}><i/>Red Blotch<b>1 553</b></div>
        </div>
      </div>
    </BrowserFrame>
  );
}

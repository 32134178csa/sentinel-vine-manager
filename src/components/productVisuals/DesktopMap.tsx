import React from 'react';

export function DesktopMap() {
  // Generate vine dots in a 25-column grid
  const columns = 25;
  const rows = 40;
  const colXs = Array.from({length: columns}, (_, i) => 28 + i * 42);
  
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
          <div className="url-bar">sentinelvine.com/console</div>
        </div>
        
        {/* App header */}
        <div className="sapp-top">
          <div className="brand">
            <img src="/images/product/sentinel-mark-transparent.png" alt="Sentinel" className="mark" />
            <span>Sentinel·</span>
          </div>
          <nav className="tabs">
            <button className="tab active">Map</button>
            <button className="tab">Chart</button>
            <button className="tab">Time</button>
            <button className="tab">Crop Estimation</button>
            <button className="tab">Work Orders</button>
          </nav>
          <div className="utility">volcanicridge@volcanicridge</div>
        </div>
        
        {/* Filter chips */}
        <div className="filter-bar">
          <button className="chip">Vineyard: All</button>
          <button className="chip">Block: All</button>
          <button className="chip">Variety: All</button>
          <button className="chip active">Production Status</button>
        </div>
        
        {/* Map area */}
        <div className="dmap">
          <img 
            src="/images/product/vineyard-satellite-v.png" 
            alt="Vineyard satellite"
            className="satellite-bg"
          />
          <svg className="vine-grid" viewBox="0 0 1055 1055" preserveAspectRatio="xMidYMid slice">
            {colXs.map((x, col) => 
              Array.from({length: rows}, (_, row) => {
                const y = 50 + row * 25;
                const centerDist = Math.sqrt(
                  Math.pow(col - 12.5, 2) + Math.pow(row - 20, 2)
                );
                const isNearCenter = centerDist < 8;
                const rand = Math.random();
                
                let fill;
                if (isNearCenter) {
                  if (rand < 0.35) fill = '#E4252B'; // red blotch cluster
                  else if (rand < 0.60) fill = 'oklch(0.78 0.015 140)'; // non-producing
                  else fill = 'oklch(0.80 0.17 150)'; // producing
                } else {
                  if (rand < 0.04) fill = '#E4252B';
                  else if (rand < 0.14) fill = 'oklch(0.78 0.015 140)';
                  else fill = 'oklch(0.80 0.17 150)';
                }
                
                return <circle key={`${col}-${row}`} cx={x} cy={y} r="5" fill={fill} />;
              })
            )}
            
            {/* Crosshair on a red vine */}
            <g className="crosshair" transform="translate(530, 520)">
              <line x1="-20" y1="0" x2="20" y2="0" stroke="oklch(0.78 0.11 150)" strokeWidth="2"/>
              <line x1="0" y1="-20" x2="0" y2="20" stroke="oklch(0.78 0.11 150)" strokeWidth="2"/>
            </g>
            
            {/* Vine card */}
            <foreignObject x="560" y="480" width="240" height="180">
              <div className="vine-card">
                <div className="vine-id">VR-2A-R18-V12</div>
                <div className="vine-meta">
                  <div className="meta-row">
                    <span className="label">Status</span>
                    <span className="value red">Red Blotch</span>
                  </div>
                  <div className="meta-row">
                    <span className="label">Variety</span>
                    <span className="value">Cabernet Sauvignon</span>
                  </div>
                  <div className="meta-row">
                    <span className="label">Clone</span>
                    <span className="value">337</span>
                  </div>
                  <div className="meta-row">
                    <span className="label">Rootstock</span>
                    <span className="value">110R</span>
                  </div>
                  <div className="meta-row">
                    <span className="label">Year</span>
                    <span className="value">2014</span>
                  </div>
                </div>
              </div>
            </foreignObject>
          </svg>
          
          {/* Legend */}
          <div className="legend">
            <div className="legend-item">
              <span className="dot" style={{background: 'oklch(0.80 0.17 150)'}}></span>
              <span>Producing</span>
              <span className="count">41,420</span>
            </div>
            <div className="legend-item">
              <span className="dot" style={{background: '#E4252B'}}></span>
              <span>Red Blotch</span>
              <span className="count">1,553</span>
            </div>
            <div className="legend-item">
              <span className="dot" style={{background: 'oklch(0.78 0.015 140)'}}></span>
              <span>Non-Producing</span>
              <span className="count">6,178</span>
            </div>
            <div className="legend-item">
              <span className="dot" style={{background: 'rgba(237,237,232,0.25)'}}></span>
              <span>Miss</span>
              <span className="count">2,627</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export function DesktopChart() {
  const data = [
    { label: 'Producing', count: 41420, pct: 80, color: 'oklch(0.80 0.17 150)' },
    { label: 'Non-Producing', count: 6219, pct: 12, color: 'oklch(0.78 0.015 140)' },
    { label: 'Rootstock', count: 2591, pct: 5, color: 'oklch(0.72 0.17 55)' },
    { label: 'Miss', count: 1548, pct: 3, color: 'rgba(237,237,232,0.25)' },
  ];
  
  const total = data.reduce((sum, d) => sum + d.count, 0);

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
            <button className="tab">Map</button>
            <button className="tab active">Chart</button>
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
          <button className="chip active">Production Status</button>
        </div>
        
        {/* Chart area */}
        <div className="chart-area">
          <div className="chart-panel">
            {/* Donut chart */}
            <div className="donut-container">
              <svg viewBox="0 0 200 200" className="donut">
                <circle cx="100" cy="100" r="80" fill="none" stroke="#15171B" strokeWidth="40"/>
                {data.map((d, i) => {
                  const prevPct = data.slice(0, i).reduce((sum, x) => sum + x.pct, 0);
                  const circumference = 2 * Math.PI * 80;
                  const offset = circumference * prevPct / 100;
                  const dashArray = `${circumference * d.pct / 100} ${circumference}`;
                  
                  return (
                    <circle
                      key={i}
                      cx="100"
                      cy="100"
                      r="80"
                      fill="none"
                      stroke={d.color}
                      strokeWidth="40"
                      strokeDasharray={dashArray}
                      strokeDashoffset={-offset}
                      transform="rotate(-90 100 100)"
                    />
                  );
                })}
                <text x="100" y="95" textAnchor="middle" fill="#EDEDE8" fontSize="24" fontFamily="Instrument Serif">
                  {total.toLocaleString()}
                </text>
                <text x="100" y="110" textAnchor="middle" fill="#9A9C98" fontSize="10" fontFamily="JetBrains Mono">
                  TOTAL VINES
                </text>
              </svg>
              
              <div className="field-note">
                Non-producing vines clustered in Block VR-2A rows 15-22. 
                Consider targeted replanting or virus screening.
              </div>
            </div>
            
            {/* Table */}
            <div className="chart-table">
              <div className="table-header">
                <div className="th">Status</div>
                <div className="th">Count</div>
                <div className="th">%</div>
              </div>
              {data.map((d, i) => (
                <div key={i} className="table-row">
                  <div className="td status">
                    <span className="status-dot" style={{background: d.color}}></span>
                    {d.label}
                  </div>
                  <div className="td count">{d.count.toLocaleString()}</div>
                  <div className="td pct">{d.pct}%</div>
                </div>
              ))}
              <div className="table-row total-row">
                <div className="td">Total</div>
                <div className="td count">{total.toLocaleString()}</div>
                <div className="td pct"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

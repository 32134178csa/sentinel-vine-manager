import React from 'react';

export function MobileFieldMap() {
  return (
    <div className="product-visual-mobile">
      <div className="phone-frame">
        <div className="phone-screen">
          {/* Phone status bar */}
          <div className="status-bar">
            <span>6:42</span>
          </div>
          
          {/* App bar */}
          <div className="app-bar">
            <button className="back-btn">‹</button>
            <div className="block-pill">
              <span className="block-id">VR-2A</span>
              <span className="block-meta">Cab Sauv · Clone 337 · 2014</span>
            </div>
          </div>
          
          {/* Map viewport with satellite + dots */}
          <div className="map-viewport">
            <img 
              src="/images/product/vineyard-satellite-v.png" 
              alt="Vineyard satellite view"
              className="satellite-bg"
            />
            <svg className="vine-dots" viewBox="0 0 360 740">
              {/* Generate vine dots in columns */}
              {[9,38,67,96,125,154,183,212,241,270,299,328,357].map((x, col) => 
                Array.from({length: 50}, (_, row) => {
                  const y = 20 + row * 14;
                  const isProducing = Math.random() > 0.2;
                  const isVirus = !isProducing && Math.random() > 0.7;
                  const fill = isVirus ? '#E4252B' : 
                               isProducing ? 'oklch(0.80 0.17 150)' : 
                               'oklch(0.78 0.015 140)';
                  return <circle key={`${col}-${row}`} cx={x} cy={y} r="4.4" fill={fill} />;
                })
              )}
            </svg>
            
            {/* RTK accuracy pill */}
            <div className="rtk-pill">
              <span className="rtk-status">RTK FIX</span>
              <span className="rtk-acc">0.009 m</span>
            </div>
            
            {/* Layer toggles */}
            <div className="layer-toggles">
              <button className="layer-btn active">Production</button>
              <button className="layer-btn">Virus</button>
              <button className="layer-btn">Irrigation</button>
            </div>
            
            {/* Bottom controls */}
            <div className="map-controls">
              <button className="control-btn">⊕</button>
              <button className="control-btn">📍</button>
              <button className="control-btn">#</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

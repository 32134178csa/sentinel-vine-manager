import React from 'react';

export function MobileVineDetail() {
  const virusCategories = [
    { name: 'Red Blotch', status: 'Positive', color: '#E4252B' },
    { name: 'Leafroll', status: 'Tested Negative', color: 'oklch(0.78 0.015 140)' },
    { name: 'Fanleaf', status: 'Tested Negative', color: 'oklch(0.78 0.015 140)' },
    { name: 'Crown Gall', status: 'Unknown', color: '#5A5D5A' },
    { name: 'Pierce\'s Disease', status: 'Unknown', color: '#5A5D5A' },
    { name: 'Powdery Mildew', status: 'Unknown', color: '#5A5D5A' },
    { name: 'Downy Mildew', status: 'Unknown', color: '#5A5D5A' },
    { name: 'Botrytis', status: 'Unknown', color: '#5A5D5A' },
  ];
  
  return (
    <div className="mobile-vine-detail">
      <div className="phone-frame">
        <div className="phone-notch" />
        <div className="phone-screen">
          <div className="app-bar">
            <button className="back">←</button>
            <div className="title">Vine Detail</div>
            <button className="menu">⋮</button>
          </div>
          
          <div className="vine-header">
            <div className="vine-id">VR-8A.1 · R06 · V52</div>
            <div className="vine-meta">Block VR-8A · 1994 Planting</div>
          </div>
          
          <div className="tabs">
            <button>Production</button>
            <button className="active">Virus</button>
            <button>Year</button>
          </div>
          
          <div className="tab-content virus-tab">
            <div className="section-header">Disease Status</div>
            {virusCategories.map((virus, i) => (
              <div key={i} className="virus-row">
                <div className="virus-name">{virus.name}</div>
                <div className="virus-status" style={{ color: virus.color }}>
                  {virus.status}
                </div>
              </div>
            ))}
            
            <div className="section-divider" />
            
            <div className="meta-grid">
              <div className="meta-row">
                <span className="label">Variety</span>
                <span className="value">Cabernet Sauvignon</span>
              </div>
              <div className="meta-row">
                <span className="label">Clone</span>
                <span className="value">Clone 6</span>
              </div>
              <div className="meta-row">
                <span className="label">Rootstock</span>
                <span className="value">St George</span>
              </div>
              <div className="meta-row">
                <span className="label">Year Planted</span>
                <span className="value">1994</span>
              </div>
            </div>
            
            <div className="last-updated">
              Last updated · Guillaume · Apr 12
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

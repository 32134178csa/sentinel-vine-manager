import React from 'react';

export function MobileVineVirus() {
  const diseases = [
    { name: 'Red Blotch', status: 'Positive', color: '#E4252B' },
    { name: 'Leafroll', status: 'Negative', color: '#9A9C98' },
    { name: 'Fanleaf', status: 'Negative', color: '#9A9C98' },
    { name: 'Corky Bark', status: 'Negative', color: '#9A9C98' },
    { name: 'Fleck', status: 'Not Tested', color: '#5A5D5A' },
    { name: 'Rupestris Stem Pitting', status: 'Not Tested', color: '#5A5D5A' },
    { name: 'Crown Gall', status: 'Negative', color: '#9A9C98' },
    { name: 'Pierce\'s Disease', status: 'Negative', color: '#9A9C98' },
  ];

  return (
    <div className="product-visual-mobile">
      <div className="phone-frame">
        <div className="phone-screen">
          {/* Status bar */}
          <div className="status-bar">
            <span>6:42</span>
          </div>
          
          {/* App bar */}
          <div className="app-bar">
            <button className="back-btn">‹</button>
            <div className="vine-title">
              <span className="vine-id">VR-2A-R18-V12</span>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="vine-tabs">
            <button className="vine-tab">Production</button>
            <button className="vine-tab active">Virus</button>
            <button className="vine-tab">Year</button>
          </div>
          
          {/* Virus list */}
          <div className="vine-content">
            <div className="disease-list">
              {diseases.map((disease, i) => (
                <div key={i} className="disease-item">
                  <div className="disease-name">{disease.name}</div>
                  <div className="disease-status" style={{color: disease.color}}>
                    {disease.status}
                  </div>
                </div>
              ))}
            </div>
            
            {/* Test info */}
            <div className="test-info">
              <div className="info-row">
                <span className="info-label">Last Tested</span>
                <span className="info-value">2024-08-15</span>
              </div>
              <div className="info-row">
                <span className="info-label">Lab</span>
                <span className="info-value">Foundation Plant Services</span>
              </div>
              <div className="info-row">
                <span className="info-label">Sample ID</span>
                <span className="info-value">FPS-2024-18291</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

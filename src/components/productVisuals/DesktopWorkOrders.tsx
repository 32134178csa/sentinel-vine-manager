import React from 'react';

export function DesktopWorkOrders() {
  const workOrders = [
    { id: 'WO-2024-087', task: 'Prune Block VR-2A', assignee: 'Crew A', due: '2024-11-08', status: 'overdue', progress: 68 },
    { id: 'WO-2024-088', task: 'Leafroll Screening VR-3B', assignee: 'Lab Team', due: '2024-11-12', status: 'active', progress: 42 },
    { id: 'WO-2024-089', task: 'Irrigation Repair VR-1A', assignee: 'Crew B', due: '2024-11-15', status: 'active', progress: 15 },
    { id: 'WO-2024-090', task: 'Replant Miss Vines VR-2C', assignee: 'Crew A', due: '2024-11-20', status: 'pending', progress: 0 },
    { id: 'WO-2024-091', task: 'Canopy Management VR-4A', assignee: 'Crew C', due: '2024-11-22', status: 'pending', progress: 0 },
  ];

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
            <button className="tab">Chart</button>
            <button className="tab">Time</button>
            <button className="tab">Crop Estimation</button>
            <button className="tab active">Work Orders</button>
          </nav>
          <div className="utility">volcanicridge@volcanicridge</div>
        </div>
        
        {/* Work Orders view */}
        <div className="workorders-view">
          {/* Left rail */}
          <div className="wo-rail">
            <div className="rail-section">
              <div className="rail-header">Status</div>
              <button className="rail-item">All Orders (32)</button>
              <button className="rail-item active">Active (12)</button>
              <button className="rail-item">Overdue (3)</button>
              <button className="rail-item">Completed (17)</button>
            </div>
            
            <div className="rail-section">
              <div className="rail-header">Crew</div>
              <button className="rail-item">Crew A</button>
              <button className="rail-item">Crew B</button>
              <button className="rail-item">Crew C</button>
              <button className="rail-item">Lab Team</button>
            </div>
            
            <div className="rail-section">
              <div className="rail-header">Priority</div>
              <button className="rail-item">Urgent</button>
              <button className="rail-item">High</button>
              <button className="rail-item">Normal</button>
            </div>
          </div>
          
          {/* Right table */}
          <div className="wo-table-container">
            <div className="wo-table-header">
              <div className="wo-th id">ID</div>
              <div className="wo-th task">Task</div>
              <div className="wo-th assignee">Assignee</div>
              <div className="wo-th due">Due Date</div>
              <div className="wo-th progress">Progress</div>
            </div>
            
            {workOrders.map((wo, i) => (
              <div key={i} className={`wo-row ${wo.status}`}>
                <div className="wo-td id">{wo.id}</div>
                <div className="wo-td task">{wo.task}</div>
                <div className="wo-td assignee">{wo.assignee}</div>
                <div className="wo-td due">{wo.due}</div>
                <div className="wo-td progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: `${wo.progress}%`}}></div>
                  </div>
                  <span className="progress-pct">{wo.progress}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

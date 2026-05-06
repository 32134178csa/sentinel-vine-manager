import React from 'react';

export function DesktopWorkOrders() {
  const workOrders = [
    { id: 'WO-2024-042', type: 'Roguing', block: 'VR-8A', status: 'Overdue', dueDate: 'Apr 8', vines: 127, color: '#E4252B' },
    { id: 'WO-2024-041', type: 'Grafting', block: 'VR-6B', status: 'In Progress', dueDate: 'Apr 15', vines: 89, color: 'oklch(0.78 0.11 150)' },
    { id: 'WO-2024-040', type: 'Planting', block: 'VR-3C', status: 'Pending', dueDate: 'Apr 20', vines: 245, color: '#9A9C98' },
    { id: 'WO-2024-039', type: 'Fertilizing', block: 'VR-12A', status: 'Pending', dueDate: 'Apr 22', vines: 1840, color: '#9A9C98' },
    { id: 'WO-2024-038', type: 'Harvest', block: 'VR-9D', status: 'Completed', dueDate: 'Apr 2', vines: 2103, color: 'oklch(0.78 0.015 140)' },
  ];
  
  return (
    <div className="desktop-work-orders-visual">
      <div className="browser-frame">
        <div className="browser-chrome">
          <div className="lights"><i /><i /><i /></div>
          <div className="addr">
            <span>app.sentinelvine.com</span>/app/work-orders
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
              <a>Map</a>
              <a>Chart</a>
              <a>Time</a>
              <a>Crop Estimation</a>
              <a className="active">Work Orders</a>
            </div>
            <span className="spacer" />
            <div className="utility">
              <span>guillaume@volcanicridge</span>
            </div>
          </div>
          
          <div className="work-orders-view">
            <div className="wo-rail">
              <div className="rail-header">
                <h6>Actions</h6>
              </div>
              <button className="rail-action primary">+ New Work Order</button>
              <button className="rail-action">Export to CSV</button>
              <button className="rail-action">Filter by Block</button>
              <button className="rail-action">Filter by Type</button>
              
              <div className="rail-divider" />
              
              <div className="rail-section">
                <div className="rail-section-title">Quick Filters</div>
                <button className="rail-filter">Overdue (1)</button>
                <button className="rail-filter active">In Progress (1)</button>
                <button className="rail-filter">Pending (2)</button>
                <button className="rail-filter">Completed</button>
              </div>
              
              <div className="rail-divider" />
              
              <div className="rail-section">
                <div className="rail-section-title">By Type</div>
                <button className="rail-filter">Roguing</button>
                <button className="rail-filter">Grafting</button>
                <button className="rail-filter">Planting</button>
                <button className="rail-filter">Harvest</button>
                <button className="rail-filter">Fertilizing</button>
              </div>
            </div>
            
            <div className="wo-table-container">
              <div className="wo-table-header">
                <h4>Work Orders · <em style={{ fontStyle: 'italic', color: '#9A9C98' }}>5 active.</em></h4>
                <div className="wo-actions">
                  <button className="btn-ghost">Bulk Edit</button>
                  <button className="btn-primary">+ New</button>
                </div>
              </div>
              
              <table className="wo-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Block</th>
                    <th>Status</th>
                    <th>Due Date</th>
                    <th style={{ textAlign: 'right' }}>Vines</th>
                  </tr>
                </thead>
                <tbody>
                  {workOrders.map((wo, i) => (
                    <tr key={i} className={wo.status === 'Overdue' ? 'overdue' : ''}>
                      <td className="wo-id">{wo.id}</td>
                      <td>{wo.type}</td>
                      <td className="block-id">{wo.block}</td>
                      <td>
                        <span className="status-badge" style={{ color: wo.color }}>
                          {wo.status}
                        </span>
                      </td>
                      <td>{wo.dueDate}</td>
                      <td style={{ textAlign: 'right', fontFamily: 'JetBrains Mono' }}>
                        {wo.vines.toLocaleString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import BrowserFrame from './BrowserFrame';

const orders = [
  { t: 'VR Lower Red Blotch Testing Final Final', type: 'Sampling', done: 518, tot: 518, deadline: '\u2014', created: 'Jan 19 2024', tag: 'ok' },
  { t: 'VR Lower RB Testing', type: 'Sampling', done: 0, tot: 538, deadline: '\u2014', created: 'Jan 12 2024', tag: '' },
  { t: 'VR Lower Red Blotch Testing', type: 'Sampling', done: 0, tot: 538, deadline: '\u2014', created: 'Jan 19 2024', tag: '' },
  { t: 'VR-1 Red Blotch Rogue', type: 'Roguing', done: 1, tot: 1, deadline: '\u2014', created: 'Feb 25 2026', tag: 'ok' },
  { t: 'VR Lower Red Blotch Roguing', type: 'Roguing', done: 0, tot: 134, deadline: 'Apr 11 2024', created: 'Apr 12 2024', tag: 'danger' },
  { t: 'Block VR-8A Trunk Disease Survey', type: 'Field Visit', done: 42, tot: 120, deadline: 'May 3 2026', created: 'Apr 03 2026', tag: 'warn' },
];

function SappTop() {
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
          <a key={k} className={k === 'wo' ? 'active' : ''}>{label}</a>
        ))}
      </div>
      <span className="spacer" style={{ flex: 1 }} />
      <div className="utility">
        <span>guillaume@volcanicridge</span>
      </div>
    </div>
  );
}

export default function DesktopWorkOrders() {
  return (
    <BrowserFrame url="app/workOrders">
      <SappTop />
      <div className="dwo-layout">
        <aside className="dwo-side">
          <div className="group">
            <h5>Work Orders</h5>
            <a className="active">Active</a>
            <a>Create New</a>
            <a>Analytics</a>
            <a>Archive</a>
          </div>
          <div className="group">
            <h5>Tagging Options</h5>
            <a>Virus Status</a>
            <a>Production</a>
            <a>Clone &middot; Variety</a>
            <a>Irrigation</a>
          </div>
          <div className="group">
            <h5>Account</h5>
            <a>Users &middot; Crews</a>
            <a>Billing</a>
          </div>
          <div className="group">
            <h5>Support</h5>
            <a>Video Guides</a>
            <a>Email logs</a>
          </div>
        </aside>

        <div className="dwo-main">
          <div className="section-idx">05 &middot; Tasks</div>
          <h3>Active work orders &middot; <em>six open, one overdue.</em></h3>
          <div className="sub" style={{ marginTop: 8 }}>Last sync &middot; 42s ago &middot; Crew connections &middot; 3</div>

          <div className="dwo-tabs">
            <a className="active">All <b>6</b></a>
            <a className="danger">Overdue <b style={{ color: 'oklch(0.62 0.18 25)' }}>1</b></a>
            <a>In Progress <b>1</b></a>
            <a>Pending <b>2</b></a>
            <a>Completed <b>2</b></a>
          </div>

          <div className="dwo-table">
            <div className="hd">
              <span>Title</span>
              <span>Type</span>
              <span>Progress</span>
              <span>Deadline</span>
              <span>Created</span>
            </div>
            {orders.map((o, i) => {
              const pct = Math.round(o.done / o.tot * 100);
              return (
                <div key={i} className="row">
                  <span className="title">{o.t}</span>
                  <span><span className="tag">{o.type}</span></span>
                  <span className="prog">
                    <span className="track"><i style={{ width: `${pct}%` }} /></span>
                    <span className="n">{o.done}/{o.tot}</span>
                  </span>
                  <span>
                    {o.tag === 'danger' ? <span className="tag danger">{o.deadline}</span>
                      : o.tag === 'warn' ? <span className="tag warn">{o.deadline}</span>
                      : <span style={{ color: '#5A5D5A' }}>{o.deadline}</span>}
                  </span>
                  <span>{o.created}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </BrowserFrame>
  );
}

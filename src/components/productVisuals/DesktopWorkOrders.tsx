import React from 'react';

export function DesktopWorkOrders() {
  const colors = {
    bg: '#0A0B0D',
    bg1: '#0F1013',
    bg2: '#15171B',
    line: '#24272D',
    line2: '#1A1C20',
    ink: '#EDEDE8',
    inkDim: '#9A9C98',
    inkMute: '#5A5D5A',
    accent: 'oklch(0.78 0.11 150)',
    warn: 'oklch(0.72 0.14 55)',
    danger: 'oklch(0.62 0.18 25)',
  };

  const fonts = {
    mono: '"JetBrains Mono", ui-monospace, Menlo, monospace',
    serif: '"Instrument Serif", Georgia, serif',
  };

  const orders = [
    { t: 'VR Lower Red Blotch Testing Final Final', type: 'Sampling', done: 518, tot: 518, deadline: '—', created: 'Jan 19 2024', tag: 'ok' },
    { t: 'VR Lower RB Testing', type: 'Sampling', done: 0, tot: 538, deadline: '—', created: 'Jan 12 2024' },
    { t: 'VR Lower Red Blotch Testing', type: 'Sampling', done: 0, tot: 538, deadline: '—', created: 'Jan 19 2024' },
    { t: 'VR-1 Red Blotch Rogue', type: 'Roguing', done: 1, tot: 1, deadline: '—', created: 'Feb 25 2026', tag: 'ok' },
    { t: 'VR Lower Red Blotch Roguing', type: 'Roguing', done: 0, tot: 134, deadline: 'Apr 11 2024', created: 'Apr 12 2024', tag: 'danger' },
    { t: 'Block VR-8A Trunk Disease Survey', type: 'Field Visit', done: 42, tot: 120, deadline: 'May 3 2026', created: 'Apr 03 2026', tag: 'warn' },
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
          <div className="url-bar">app.sentinelvine.com/app/workOrders</div>
        </div>

        {/* App container */}
        <div style={{ background: colors.bg1 }}>
          {/* Top nav */}
          <div style={{
            height: 56,
            background: colors.bg1,
            borderBottom: `1px solid ${colors.line}`,
            display: 'flex',
            alignItems: 'center',
            padding: '0 24px',
            gap: 32,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 24, height: 24 }}>
                {/* Sentinel mark placeholder */}
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: colors.accent,
                  borderRadius: '50%',
                }} />
              </div>
              <span style={{
                color: colors.ink,
                fontFamily: fonts.serif,
                fontSize: 18,
              }}>Sentinel<em style={{ fontStyle: 'normal', color: colors.inkMute }}>·</em></span>
            </div>
            <div style={{ display: 'flex', gap: 24, flex: 1 }}>
              {['Map', 'Chart', 'Time', 'Crop Estimation', 'Work Orders', 'Settings'].map((label, i) => (
                <a key={label} style={{
                  background: 'none',
                  border: 'none',
                  color: i === 4 ? colors.ink : colors.inkDim,
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  padding: '4px 0',
                  cursor: 'pointer',
                  borderBottom: `2px solid ${i === 4 ? colors.accent : 'transparent'}`,
                  textDecoration: 'none',
                }}>{label}</a>
              ))}
            </div>
            <span style={{ flex: '0 0 auto' }} />
            <div style={{
              color: colors.inkDim,
              fontFamily: fonts.mono,
              fontSize: 10,
            }}>guillaume@volcanicridge</div>
          </div>

          {/* Main content: sidebar + work orders */}
          <div style={{ display: 'flex', minHeight: 640 }}>
            {/* Sidebar */}
            <aside style={{
              width: 240,
              background: colors.bg,
              borderRight: `1px solid ${colors.line}`,
              padding: '24px 0',
              display: 'flex',
              flexDirection: 'column',
              gap: 32,
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <h5 style={{
                  padding: '0 24px 8px',
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: colors.inkMute,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  margin: 0,
                }}>Work Orders</h5>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.ink,
                  background: colors.bg2,
                  borderLeft: `3px solid ${colors.accent}`,
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Active</a>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Create New</a>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Analytics</a>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Archive</a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <h5 style={{
                  padding: '0 24px 8px',
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: colors.inkMute,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  margin: 0,
                }}>Tagging Options</h5>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Virus Status</a>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Production</a>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Clone · Variety</a>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Irrigation</a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <h5 style={{
                  padding: '0 24px 8px',
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: colors.inkMute,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  margin: 0,
                }}>Account</h5>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Users · Crews</a>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Billing</a>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, borderBottom: 0, marginBottom: 0 }}>
                <h5 style={{
                  padding: '0 24px 8px',
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: colors.inkMute,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                  margin: 0,
                }}>Support</h5>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Video Guides</a>
                <a style={{
                  padding: '10px 24px',
                  fontFamily: fonts.serif,
                  fontSize: 14,
                  color: colors.inkDim,
                  borderLeft: '3px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Email logs</a>
              </div>
            </aside>

            {/* Work orders content */}
            <div style={{ flex: 1, padding: '40px 48px' }}>
              <div style={{
                fontFamily: fonts.mono,
                fontSize: 10,
                letterSpacing: '0.16em',
                color: colors.accent,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}>05 · Tasks</div>
              <h3 style={{
                fontFamily: fonts.serif,
                fontSize: 28,
                fontWeight: 400,
                color: colors.ink,
                margin: 0,
                marginBottom: 8,
              }}>
                Active work orders · <em style={{ fontStyle: 'italic', color: colors.inkDim }}>six open, one overdue.</em>
              </h3>
              <div style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                color: colors.inkDim,
              }}>Last sync · 42s ago · Crew connections · 3</div>

              {/* Tabs */}
              <div style={{
                marginTop: 32,
                display: 'flex',
                gap: 16,
                borderBottom: `1px solid ${colors.line2}`,
              }}>
                <a style={{
                  padding: '10px 0',
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: colors.ink,
                  borderBottom: `2px solid ${colors.accent}`,
                  textDecoration: 'none',
                  cursor: 'pointer',
                  marginBottom: -1,
                }}>All <b style={{ marginLeft: 6 }}>6</b></a>
                <a style={{
                  padding: '10px 0',
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: colors.inkDim,
                  borderBottom: '2px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Overdue <b style={{ marginLeft: 6, color: colors.danger }}>1</b></a>
                <a style={{
                  padding: '10px 0',
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: colors.inkDim,
                  borderBottom: '2px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>In Progress <b style={{ marginLeft: 6 }}>1</b></a>
                <a style={{
                  padding: '10px 0',
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: colors.inkDim,
                  borderBottom: '2px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Pending <b style={{ marginLeft: 6 }}>2</b></a>
                <a style={{
                  padding: '10px 0',
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  color: colors.inkDim,
                  borderBottom: '2px solid transparent',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}>Completed <b style={{ marginLeft: 6 }}>2</b></a>
              </div>

              {/* Table */}
              <div style={{ marginTop: 24 }}>
                {/* Header */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '2fr 140px 160px 140px 140px',
                  gap: 16,
                  padding: '12px 16px',
                  background: colors.bg2,
                  borderRadius: '4px 4px 0 0',
                }}>
                  <span style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: colors.inkMute,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>Title</span>
                  <span style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: colors.inkMute,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>Type</span>
                  <span style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: colors.inkMute,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>Progress</span>
                  <span style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: colors.inkMute,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>Deadline</span>
                  <span style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    color: colors.inkMute,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}>Created</span>
                </div>

                {/* Rows */}
                {orders.map((o, i) => {
                  const pct = Math.round(o.done / o.tot * 100);
                  return (
                    <div key={i} style={{
                      display: 'grid',
                      gridTemplateColumns: '2fr 140px 160px 140px 140px',
                      gap: 16,
                      padding: '16px',
                      background: colors.bg2,
                      marginTop: 2,
                      alignItems: 'center',
                    }}>
                      <span style={{
                        fontFamily: fonts.serif,
                        fontSize: 14,
                        color: colors.ink,
                      }}>{o.t}</span>
                      <span>
                        <span style={{
                          display: 'inline-block',
                          padding: '4px 8px',
                          background: colors.bg,
                          border: `1px solid ${colors.line}`,
                          borderRadius: 3,
                          fontFamily: fonts.mono,
                          fontSize: 9,
                          color: colors.inkDim,
                          textTransform: 'uppercase',
                          letterSpacing: '0.1em',
                        }}>{o.type}</span>
                      </span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 10,
                      }}>
                        <span style={{
                          position: 'relative',
                          height: 6,
                          flex: 1,
                          background: colors.line,
                          borderRadius: 3,
                          overflow: 'hidden',
                        }}>
                          <i style={{
                            position: 'absolute',
                            left: 0,
                            top: 0,
                            bottom: 0,
                            width: `${pct}%`,
                            background: colors.accent,
                          }} />
                        </span>
                        <span style={{
                          fontFamily: fonts.mono,
                          fontSize: 11,
                          color: colors.inkDim,
                          minWidth: 48,
                        }}>{o.done}/{o.tot}</span>
                      </span>
                      <span>
                        {o.tag === 'danger' ? (
                          <span style={{
                            display: 'inline-block',
                            padding: '4px 8px',
                            background: colors.danger,
                            border: `1px solid ${colors.danger}`,
                            borderRadius: 3,
                            fontFamily: fonts.mono,
                            fontSize: 9,
                            color: colors.ink,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                          }}>{o.deadline}</span>
                        ) : o.tag === 'warn' ? (
                          <span style={{
                            display: 'inline-block',
                            padding: '4px 8px',
                            background: colors.warn,
                            border: `1px solid ${colors.warn}`,
                            borderRadius: 3,
                            fontFamily: fonts.mono,
                            fontSize: 9,
                            color: colors.bg,
                            textTransform: 'uppercase',
                            letterSpacing: '0.1em',
                          }}>{o.deadline}</span>
                        ) : (
                          <span style={{
                            fontFamily: fonts.mono,
                            fontSize: 11,
                            color: colors.inkMute,
                          }}>{o.deadline}</span>
                        )}
                      </span>
                      <span style={{
                        fontFamily: fonts.mono,
                        fontSize: 11,
                        color: colors.inkDim,
                      }}>{o.created}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

export function MobileVineVirus() {
  const COLORS_M = {
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
    purple: 'oklch(0.62 0.13 300)',
  };

  const fonts = {
    mono: '"JetBrains Mono", ui-monospace, Menlo, monospace',
    serif: '"Instrument Serif", Georgia, serif',
    sans: '"Inter Tight", -apple-system, BlinkMacSystemFont, sans-serif',
  };

  const virusOpts = [
    { label: 'Trunk Dis.', c: COLORS_M.purple, active: true },
    { label: "Pierce's", c: 'oklch(0.72 0.14 85)' },
    { label: 'Leaf Roll', c: 'oklch(0.72 0.14 50)' },
    { label: 'None', c: COLORS_M.inkDim },
    { label: 'Red Blotch', c: COLORS_M.danger },
    { label: 'Mother Vine', c: 'oklch(0.6 0.22 330)' },
    { label: 'A-Red Blotch', c: 'oklch(0.78 0.2 140)' },
    { label: 'Vole Damage', c: 'oklch(0.75 0.14 200)' },
  ];

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      background: COLORS_M.bg,
    }}>
      {/* Phone frame */}
      <div style={{
        width: 360,
        height: 740,
        borderRadius: 44,
        overflow: 'hidden',
        position: 'relative',
        background: COLORS_M.bg,
        boxShadow: '0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
        fontFamily: fonts.sans,
        WebkitFontSmoothing: 'antialiased',
        border: '7px solid #0a0a0b',
        boxSizing: 'content-box',
      }}>
        {/* Dynamic island */}
        <div style={{
          position: 'absolute',
          top: 10,
          left: '50%',
          transform: 'translateX(-50%)',
          width: 120,
          height: 34,
          borderRadius: 22,
          background: '#000',
          zIndex: 50,
        }} />

        {/* Status bar */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 40,
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '18px 28px 10px',
            position: 'relative',
            zIndex: 20,
            color: '#fff',
            fontFamily: '-apple-system,system-ui',
            fontSize: 15,
            fontWeight: 600,
          }}>
            <span>6:42</span>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <svg width="17" height="11" viewBox="0 0 17 11">
                <rect x="0" y="7" width="3" height="4" rx="0.5" fill="#fff" />
                <rect x="4.5" y="5" width="3" height="6" rx="0.5" fill="#fff" />
                <rect x="9" y="3" width="3" height="8" rx="0.5" fill="#fff" />
                <rect x="13.5" y="0" width="3" height="11" rx="0.5" fill="#fff" />
              </svg>
              <svg width="25" height="11" viewBox="0 0 25 11">
                <rect x="0.5" y="0.5" width="21" height="10" rx="2.5" fill="none" stroke="#fff" strokeOpacity="0.4" />
                <rect x="2" y="2" width="18" height="7" rx="1" fill="#fff" />
                <path d="M23 3.5V7.5C23.6 7.3 24 6.6 24 6C24 5.4 23.6 4.7 23 4.5Z" fill="#fff" fillOpacity="0.4" />
              </svg>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
          {/* AppBar */}
          <div style={{ paddingTop: 52, borderBottom: `1px solid ${COLORS_M.line2}` }}>
            {/* Top strip: section index + RTK status */}
            <div style={{
              padding: '0 14px',
              height: 22,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              fontFamily: fonts.mono,
              fontSize: 9,
              letterSpacing: '0.1em',
              color: COLORS_M.inkMute,
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              borderBottom: `1px solid ${COLORS_M.line2}`,
            }}>
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>05 · VINE</span>
              <span style={{ flex: 1 }} />
              <span style={{
                width: 5,
                height: 5,
                borderRadius: '50%',
                background: COLORS_M.accent,
                flexShrink: 0,
                boxShadow: `0 0 6px ${COLORS_M.accent}`,
              }} />
              <span>RTK</span>
              <span style={{ fontSize: 8.5, letterSpacing: '0.08em' }}>0.009 m</span>
            </div>
            {/* Title row */}
            <div style={{
              padding: '6px 14px 8px',
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{
                fontSize: 22,
                color: COLORS_M.ink,
                lineHeight: 1,
              }}>‹</span>
              <div style={{
                flex: 1,
                fontFamily: fonts.serif,
                fontSize: 17,
                letterSpacing: -0.005,
                fontWeight: 400,
                color: COLORS_M.ink,
              }}>
                Vine <em style={{ fontStyle: 'italic', color: COLORS_M.inkDim }}>1-6-A607</em>
              </div>
              <div style={{ display: 'flex', gap: 8 }}>
                <button style={{
                  width: 28,
                  height: 28,
                  border: `1px solid ${COLORS_M.line}`,
                  background: COLORS_M.bg1,
                  color: COLORS_M.ink,
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 14,
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 4l2 8h6l2-8M5 4V2h4v2M1 4h12" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
                <button style={{
                  width: 28,
                  height: 28,
                  border: `1px solid ${COLORS_M.accent}`,
                  background: COLORS_M.bg1,
                  color: COLORS_M.accent,
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: 14,
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 9l6-6 3 3-6 6H2V9z" stroke="currentColor" strokeWidth="1.3" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Block meta */}
          <div style={{ padding: '12px 18px 14px', borderBottom: `1px solid ${COLORS_M.line2}` }}>
            <div style={{
              fontFamily: fonts.mono,
              fontSize: 10,
              letterSpacing: '0.12em',
              color: COLORS_M.inkMute,
              textTransform: 'uppercase',
            }}>
              Block VR-8A.1 · Row 06 · Vine 52 (N→S)
            </div>
          </div>

          {/* Meta kv */}
          <div style={{
            padding: '14px 18px',
            borderBottom: `1px solid ${COLORS_M.line2}`,
            display: 'grid',
            gap: 6,
            fontFamily: fonts.mono,
            fontSize: 11,
          }}>
            {[
              ['Year Planted', '1993'],
              ['Variety', 'Cabernet'],
              ['Clone', '337'],
              ['Rootstock', '110R'],
              ['Production', 'Producing'],
              ['Virus', 'None'],
              ['Irrigation', 'Primary'],
            ].map(([k, v], i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{
                  color: COLORS_M.inkMute,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontSize: 9.5,
                }}>{k}</span>
                <span style={{ color: COLORS_M.ink }}>{v}</span>
              </div>
            ))}
          </div>

          {/* Tab switcher */}
          <div style={{
            display: 'flex',
            padding: '12px 18px 14px',
            borderBottom: `1px solid ${COLORS_M.line2}`,
            gap: 0,
            fontFamily: fonts.mono,
            fontSize: 10,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}>
            {['production', 'virus', 'year'].map(t => (
              <div key={t} style={{
                flex: 1,
                padding: '8px 4px',
                textAlign: 'center',
                color: t === 'virus' ? COLORS_M.ink : COLORS_M.inkMute,
                borderBottom: `1px solid ${t === 'virus' ? COLORS_M.accent : COLORS_M.line2}`,
              }}>{t}</div>
            ))}
          </div>

          {/* Option chips */}
          <div style={{ padding: '20px 18px', flex: 1, overflow: 'auto' }}>
            <div style={{
              fontFamily: fonts.mono,
              fontSize: 9.5,
              letterSpacing: '0.14em',
              color: COLORS_M.inkMute,
              textTransform: 'uppercase',
              marginBottom: 16,
            }}>Select status</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
              {virusOpts.map((o, i) => (
                <div key={i} style={{
                  padding: '12px 10px',
                  border: `1px solid ${o.active ? o.c : COLORS_M.line}`,
                  background: o.active ? 'rgba(237,237,232,0.03)' : 'transparent',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                }}>
                  <span style={{
                    width: 10,
                    height: 10,
                    borderRadius: '50%',
                    background: o.c,
                    flex: 'none',
                  }} />
                  <span style={{
                    fontFamily: fonts.mono,
                    fontSize: 11,
                    letterSpacing: '0.04em',
                    color: o.active ? COLORS_M.ink : COLORS_M.inkDim,
                    textTransform: 'uppercase',
                  }}>{o.label}</span>
                  {o.active && <span style={{ marginLeft: 'auto', color: o.c, fontSize: 11 }}>✓</span>}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Home indicator */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          height: 28,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-end',
          paddingBottom: 6,
          pointerEvents: 'none',
        }}>
          <div style={{ width: 120, height: 4, borderRadius: 100, background: 'rgba(255,255,255,0.7)' }} />
        </div>
      </div>
    </div>
  );
}

import React from 'react';

// Seeded PRNG for consistent dot distribution
function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

interface VineDot {
  x: number;
  y: number;
  fill: string;
  r: number;
}

function MapVariantSVG({ variant = 'production', W = 360, H = 740 }) {
  const colXs = [9, 38, 67, 96, 125, 154, 183, 212, 241, 270, 299, 328, 357];
  const rowStep = 14;
  const vines = colXs.length;
  const rows = Math.floor((H - 10) / rowStep) + 1;
  const padY = (H - (rows - 1) * rowStep) / 2;

  const C = {
    healthy: 'oklch(0.80 0.17 150)',
    nominal: 'oklch(0.80 0.17 150)',
    rootstock: 'oklch(0.72 0.17 55)',
    miss: 'rgba(237,237,232,0.25)',
    virus: '#E4252B',
    orange: 'oklch(0.72 0.17 55)',
    grey: 'oklch(0.78 0.015 140)',
    tested: 'oklch(0.78 0.015 140)',
    irrig: 'oklch(0.70 0.12 220)',
    dry: 'oklch(0.55 0.05 240)',
  };

  const seed = variant === 'virus' ? 91 : variant === 'production' ? 33 : variant === 'irrigation' ? 51 : 17;
  const r = seededRandom(seed);
  const diseaseCx = vines * 0.68;
  const diseaseCy = rows * 0.40;
  const diseaseR = Math.max(6, rows * 0.13);
  const DOT_R = 4.4;

  const dots: VineDot[] = [];
  for (let rr = 0; rr < rows; rr++) {
    for (let vv = 0; vv < vines; vv++) {
      const x = colXs[vv];
      const y = padY + rr * rowStep;
      const dx = vv - diseaseCx;
      const dy = rr - diseaseCy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const near = dist < diseaseR;
      const nearer = dist < diseaseR * 0.6;
      const n = r();
      let fill: string;

      if (variant === 'production') {
        if (nearer) {
          if (n < 0.38) fill = C.virus;
          else if (n < 0.66) fill = C.grey;
          else if (n < 0.82) fill = C.orange;
          else fill = C.healthy;
        } else if (near) {
          if (n < 0.20) fill = C.virus;
          else if (n < 0.38) fill = C.grey;
          else if (n < 0.52) fill = C.orange;
          else fill = C.healthy;
        } else {
          if (n < 0.03) fill = C.virus;
          else if (n < 0.07) fill = C.grey;
          else if (n < 0.12) fill = C.orange;
          else if (n < 0.64) fill = C.healthy;
          else fill = C.nominal;
        }
      } else {
        fill = C.healthy;
      }
      dots.push({ x, y, fill, r: DOT_R });
    }
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      {dots.map((d, i) => (
        <circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r={d.r} fill={d.fill} />
      ))}
    </svg>
  );
}

export function MobileFieldMap() {
  const COLORS = {
    bg: '#0A0B0D',
    line: '#24272D',
    ink: '#EDEDE8',
    inkDim: '#9A9C98',
    accent: 'oklch(0.78 0.11 150)',
  };

  const fonts = {
    serif: "'Instrument Serif', serif",
    mono: "'JetBrains Mono', monospace",
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '2rem', background: '#0A0B0D' }}>
      {/* Phone frame */}
      <div style={{
        width: 360,
        height: 740,
        position: 'relative',
        background: '#000',
        borderRadius: 24,
        padding: 8,
        boxShadow: '0 20px 60px rgba(0,0,0,0.6)',
      }}>
        <div style={{
          width: '100%',
          height: '100%',
          borderRadius: 16,
          overflow: 'hidden',
          position: 'relative',
          background: '#0B0C0E',
        }}>
          {/* Satellite base */}
          <img
            src="/images/product/vineyard-satellite-v.png"
            alt=""
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'saturate(0.85) brightness(0.78)',
            }}
          />
          
          {/* Vignette */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: `radial-gradient(ellipse 120% 85% at 50% 50%, transparent 50%, rgba(0,0,0,0.40) 100%),
                        linear-gradient(180deg, rgba(0,0,0,0.28) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.35) 100%)`,
          }} />
          
          {/* Dot grid */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <MapVariantSVG variant="production" />
          </div>

          {/* Block header */}
          <div style={{
            position: 'absolute',
            top: 62,
            left: 14,
            zIndex: 7,
            height: 28,
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(8,10,9,0.88)',
            border: `1px solid ${COLORS.line}`,
            padding: '0 12px',
          }}>
            <div style={{
              fontFamily: fonts.serif,
              fontSize: 15,
              color: COLORS.ink,
              letterSpacing: -0.005,
              fontWeight: 400,
              lineHeight: 1,
            }}>
              Block VR-8A.1
            </div>
          </div>

          {/* Top right buttons */}
          <div style={{ position: 'absolute', top: 62, right: 18, zIndex: 7, display: 'flex', gap: 6 }}>
            <div style={{
              background: 'rgba(8,10,9,0.88)',
              width: 28,
              height: 28,
              display: 'grid',
              placeItems: 'center',
              border: `1px solid ${COLORS.line}`,
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M1 2h10M1 6h10M1 10h10" stroke={COLORS.ink} strokeWidth="1.3" />
              </svg>
            </div>
            <div style={{
              background: 'rgba(8,10,9,0.88)',
              width: 28,
              height: 28,
              display: 'grid',
              placeItems: 'center',
              border: `1px solid ${COLORS.line}`,
            }}>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <circle cx="6" cy="6" r="5" stroke={COLORS.ink} />
                <text x="6" y="8.5" fontSize="7" textAnchor="middle" fill={COLORS.ink} fontFamily="JetBrains Mono">#</text>
              </svg>
            </div>
          </div>

          {/* GPS Accuracy bar */}
          <div style={{
            position: 'absolute',
            top: 108,
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '4px 12px',
            background: 'rgba(8,10,9,0.88)',
            border: '1px solid oklch(0.75 0.12 150 / 0.6)',
            color: COLORS.accent,
            fontFamily: fonts.mono,
            fontSize: 9,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            zIndex: 7,
            display: 'flex',
            alignItems: 'center',
            gap: 8,
          }}>
            <span style={{
              width: 5,
              height: 5,
              borderRadius: '50%',
              background: COLORS.accent,
              boxShadow: `0 0 6px ${COLORS.accent}`,
            }} />
            RTK · 0.009 m
          </div>

          {/* Layer toggles */}
          <div style={{
            position: 'absolute',
            top: 148,
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 4,
            zIndex: 7,
          }}>
            {['Production', 'Irrigation', 'Virus', 'Unified'].map(s => {
              const active = s === 'Production';
              return (
                <span key={s} style={{
                  fontFamily: fonts.mono,
                  fontSize: 9,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '4px 9px',
                  background: active ? COLORS.ink : 'rgba(8,10,9,0.88)',
                  color: active ? COLORS.bg : COLORS.inkDim,
                  border: `1px solid ${active ? COLORS.ink : COLORS.line}`,
                  backdropFilter: 'blur(6px)',
                }}>
                  {s}
                </span>
              );
            })}
          </div>

          {/* Compass */}
          <div style={{
            position: 'absolute',
            bottom: 52,
            left: 14,
            zIndex: 7,
            width: 40,
            height: 40,
            border: `1px solid ${COLORS.line}`,
            background: 'rgba(8,10,9,0.88)',
            display: 'grid',
            placeItems: 'center',
            color: COLORS.ink,
            backdropFilter: 'blur(6px)',
          }}>
            <svg width="28" height="28" viewBox="0 0 22 22" fill="none">
              <circle cx="11" cy="11" r="9.2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
              <path d="M11 3 L11 19 M3 11 L19 11" stroke="currentColor" strokeOpacity="0.3" strokeWidth="1" />
              <path d="M11 2 L9 6 L11 5 L13 6 Z" fill="currentColor" />
            </svg>
          </div>

          {/* Locate button */}
          <div style={{
            position: 'absolute',
            bottom: 52,
            right: 14,
            zIndex: 7,
            width: 40,
            height: 40,
            border: `1px solid ${COLORS.line}`,
            background: 'rgba(8,10,9,0.88)',
            display: 'grid',
            placeItems: 'center',
            color: COLORS.ink,
            backdropFilter: 'blur(6px)',
          }}>
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
              <path d="M9 0.5v3M9 14.5v3M0.5 9h3M14.5 9h3" stroke="currentColor" strokeWidth="1" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from 'react';

interface VineDotProps {
  cx: number;
  cy: number;
  r?: number;
  fill: string;
  ring?: boolean;
}

function VineDot({ cx, cy, r = 3, fill, ring }: VineDotProps) {
  return (
    <>
      {ring && (
        <circle
          cx={cx}
          cy={cy}
          r={r + 3}
          fill="none"
          stroke={fill}
          strokeOpacity="0.4"
        />
      )}
      <circle cx={cx} cy={cy} r={r} fill={fill} />
    </>
  );
}

interface MapVariantSVGProps {
  variant?: 'production' | 'virus' | 'irrigation' | 'unified';
  width?: number;
  height?: number;
}

function MapVariantSVG({ variant = 'production', width = 360, height = 740 }: MapVariantSVGProps) {
  // Vine columns aligned to dark stripes
  const colXs = [9, 38, 67, 96, 125, 154, 183, 212, 241, 270, 299, 328, 357];
  const rowStep = 14;
  const vines = colXs.length;
  const rows = Math.floor((height - 10) / rowStep) + 1;
  const padY = (height - (rows - 1) * rowStep) / 2;

  const COLORS = {
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

  // Seeded random for consistent patterns
  let seed = variant === 'virus' ? 91 : variant === 'production' ? 33 : variant === 'irrigation' ? 51 : 17;
  const random = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  const diseaseCx = vines * 0.68;
  const diseaseCy = rows * 0.40;
  const diseaseR = Math.max(6, rows * 0.13);
  const DOT_R = 4.4;

  const dots: JSX.Element[] = [];
  for (let rr = 0; rr < rows; rr++) {
    for (let vv = 0; vv < vines; vv++) {
      const x = colXs[vv];
      const y = padY + rr * rowStep;
      const dx = vv - diseaseCx;
      const dy = rr - diseaseCy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const near = dist < diseaseR;
      const nearer = dist < diseaseR * 0.6;
      const n = random();
      let fill: string;

      if (variant === 'virus') {
        if (nearer) {
          if (n < 0.45) fill = COLORS.virus;
          else if (n < 0.78) fill = COLORS.grey;
          else fill = COLORS.orange;
        } else if (near) {
          if (n < 0.28) fill = COLORS.virus;
          else if (n < 0.50) fill = COLORS.grey;
          else if (n < 0.62) fill = COLORS.orange;
          else fill = COLORS.healthy;
        } else {
          if (n < 0.04) fill = COLORS.virus;
          else if (n < 0.08) fill = COLORS.grey;
          else if (n < 0.12) fill = COLORS.orange;
          else if (n < 0.60) fill = COLORS.healthy;
          else fill = COLORS.nominal;
        }
      } else if (variant === 'production') {
        if (nearer) {
          if (n < 0.38) fill = COLORS.virus;
          else if (n < 0.66) fill = COLORS.grey;
          else if (n < 0.82) fill = COLORS.orange;
          else fill = COLORS.healthy;
        } else if (near) {
          if (n < 0.20) fill = COLORS.virus;
          else if (n < 0.38) fill = COLORS.grey;
          else if (n < 0.52) fill = COLORS.orange;
          else fill = COLORS.healthy;
        } else {
          if (n < 0.03) fill = COLORS.virus;
          else if (n < 0.07) fill = COLORS.grey;
          else if (n < 0.12) fill = COLORS.orange;
          else if (n < 0.64) fill = COLORS.healthy;
          else fill = COLORS.nominal;
        }
      } else {
        fill = COLORS.nominal;
      }

      dots.push(<VineDot key={`${rr}-${vv}`} cx={x} cy={y} r={DOT_R} fill={fill} />);
    }
  }

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ background: '#15171B' }}
    >
      {dots}
    </svg>
  );
}

export default function MobileFieldMap({ variant = 'production' }: { variant?: 'production' | 'virus' }) {
  return (
    <div className="mobile-field-map" style={{
      width: '375px',
      height: '812px',
      background: '#0A0B0D',
      borderRadius: '40px',
      overflow: 'hidden',
      position: 'relative',
      boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
    }}>
      {/* Status bar */}
      <div style={{
        height: '44px',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        fontSize: '12px',
        color: '#EDEDE8',
      }}>
        <span>9:41</span>
        <div style={{ display: 'flex', gap: '6px' }}>
          {/* Signal/wifi/battery icons */}
          <span>􀙇</span>
          <span>􀙐</span>
          <span>􀛨</span>
        </div>
      </div>

      {/* Index header */}
      <div style={{
        padding: '12px 20px 8px',
        fontFamily: 'JetBrains Mono, monospace',
        fontSize: '9.5px',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: '#9A9A95',
      }}>
        04 · MAP · VOLCANIC RIDGE NORTH
      </div>

      {/* Title */}
      <div style={{ padding: '0 20px 16px' }}>
        <h2 style={{
          fontFamily: 'Instrument Serif, serif',
          fontSize: '26px',
          lineHeight: '1.0',
          color: '#EDEDE8',
          margin: '0 0 8px 0',
        }}>
          Block VR-1A
        </h2>
        <div style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '10.5px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#9A9A95',
        }}>
          Cabernet · 1 731 vines · 3.4 ha
        </div>
      </div>

      {/* GPS accuracy bar */}
      <div style={{
        position: 'absolute',
        top: '96px',
        left: '20px',
        right: '20px',
        height: '32px',
        background: 'rgba(15, 16, 19, 0.95)',
        borderRadius: '4px',
        border: '1px solid #24272D',
        display: 'flex',
        alignItems: 'center',
        padding: '0 12px',
        gap: '8px',
        zIndex: 10,
      }}>
        <div style={{
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: 'oklch(0.80 0.17 150)',
        }} />
        <span style={{
          fontFamily: 'JetBrains Mono, monospace',
          fontSize: '10.5px',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#EDEDE8',
        }}>
          RTK FIX · 0.018 m
        </span>
      </div>

      {/* Map area */}
      <div style={{
        position: 'absolute',
        top: '140px',
        left: '7.5px',
        right: '7.5px',
        bottom: '90px',
        overflow: 'hidden',
      }}>
        <MapVariantSVG variant={variant} width={360} height={582} />
      </div>

      {/* Compass */}
      <div style={{
        position: 'absolute',
        bottom: '110px',
        left: '24px',
        width: '36px',
        height: '36px',
      }}>
        <svg width="36" height="36" viewBox="0 0 36 36">
          <circle cx="18" cy="18" r="17" fill="none" stroke="#9A9A95" strokeWidth="1.5" opacity="0.3" />
          <text x="18" y="13" textAnchor="middle" fontSize="12" fontWeight="700" fill="#EDEDE8">N</text>
        </svg>
      </div>

      {/* Layer toggles */}
      <div style={{
        position: 'absolute',
        bottom: '110px',
        right: '24px',
        display: 'flex',
        gap: '8px',
      }}>
        {['PROD', 'VIRUS', 'YEAR'].map((label, i) => (
          <div
            key={label}
            style={{
              padding: '6px 10px',
              borderRadius: '999px',
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              background: i === 0 ? '#0F1013' : 'transparent',
              color: i === 0 ? '#EDEDE8' : '#6B6B66',
              border: '1px solid #24272D',
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Home indicator */}
      <div style={{
        position: 'absolute',
        bottom: '8px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '134px',
        height: '5px',
        borderRadius: '999px',
        background: 'rgba(237, 237, 232, 0.3)',
      }} />
    </div>
  );
}

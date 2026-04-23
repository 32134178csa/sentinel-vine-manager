import React from 'react';

interface VineMapProps {
  rows?: number;
  vines?: number;
  variant?: 'unified' | 'disease' | 'production' | 'irrigation';
  hud?: boolean;
}

const COLORS = {
  healthy: 'oklch(0.78 0.11 150)',
  nominal: 'oklch(0.55 0.09 140)',
  rootstock: 'oklch(0.72 0.14 55)',
  miss: 'oklch(0.45 0.02 260)',
  virus: 'oklch(0.62 0.18 25)',
  tested: 'oklch(0.62 0.13 300)',
  dry: 'oklch(0.55 0.05 240)',
  irrig: 'oklch(0.70 0.12 220)',
};

/**
 * Renders a product-accurate vineyard map SVG visualization.
 * Ported from Shawn's sentinel.js vine-map renderer.
 */
const VineMap: React.FC<VineMapProps> = ({
  rows = 14,
  vines = 48,
  variant = 'unified',
  hud = true,
}) => {
  const W = 1200, H = 680;
  const padX = 80, padY = 110;
  const usableW = W - padX * 2;
  const usableH = H - padY * 2;
  const stepX = usableW / (vines - 1);
  const stepY = usableH / (rows - 1);

  // Deterministic RNG
  let seed = 17;
  const r = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };

  function pick(): string {
    const n = r();
    if (variant === 'disease') {
      if (n < 0.03) return COLORS.virus;
      if (n < 0.07) return COLORS.tested;
      if (n < 0.10) return COLORS.miss;
      if (n < 0.55) return COLORS.healthy;
      return COLORS.nominal;
    }
    if (variant === 'production') {
      if (n < 0.04) return COLORS.miss;
      if (n < 0.08) return COLORS.rootstock;
      if (n < 0.50) return COLORS.healthy;
      return COLORS.nominal;
    }
    if (variant === 'irrigation') {
      if (n < 0.40) return COLORS.irrig;
      if (n < 0.70) return COLORS.dry;
      return COLORS.nominal;
    }
    // unified
    if (n < 0.02) return COLORS.virus;
    if (n < 0.05) return COLORS.tested;
    if (n < 0.09) return COLORS.rootstock;
    if (n < 0.12) return COLORS.miss;
    if (n < 0.55) return COLORS.healthy;
    return COLORS.nominal;
  }

  const diseaseCx = vines * 0.62;
  const diseaseCy = rows * 0.35;
  const diseaseR = 6;

  const dots: React.ReactElement[] = [];
  for (let rr = 0; rr < rows; rr++) {
    for (let vv = 0; vv < vines; vv++) {
      const x = padX + vv * stepX;
      const y = padY + rr * stepY;
      const dx = vv - diseaseCx;
      const dy = rr - diseaseCy;
      const near = Math.sqrt(dx * dx + dy * dy) < diseaseR;
      const n = r();
      let fill: string;
      if ((variant === 'disease' || variant === 'unified') && near && n < 0.35) {
        fill = n < 0.22 ? COLORS.virus : COLORS.tested;
      } else {
        fill = pick();
      }
      const rad = fill === COLORS.nominal ? 2.4 : 2.8;
      dots.push(
        <circle key={`${rr}-${vv}`} cx={x.toFixed(1)} cy={y.toFixed(1)} r={rad} fill={fill} />
      );
    }
  }

  const rowLabels: React.ReactElement[] = [];
  for (let rr = 0; rr < rows; rr += 2) {
    const y = padY + rr * stepY + 3;
    rowLabels.push(
      <text
        key={`row-${rr}`}
        x={padX - 20}
        y={y}
        fontFamily="JetBrains Mono"
        fontSize="8"
        fill="#5A5D5A"
        textAnchor="end"
        letterSpacing="1"
      >
        R{String(rr + 1).padStart(2, '0')}
      </text>
    );
  }

  const blockDivX = padX + stepX * (vines * 0.45);

  return (
    <div className="prod-map" style={{ width: '100%', height: '100%', position: 'relative' }}>
      <div className="base" />
      <svg
        className="vines"
        viewBox={`0 0 ${W} ${H}`}
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
      >
        <g>{rowLabels}</g>
        <line
          x1={blockDivX}
          y1={padY - 10}
          x2={blockDivX}
          y2={padY + usableH + 10}
          stroke="#24272D"
          strokeDasharray="2 5"
        />
        <text
          x={padX + 6}
          y={padY - 20}
          fontFamily="JetBrains Mono"
          fontSize="9"
          fill="#9A9C98"
          letterSpacing="1.2"
        >
          BLOCK 8A &middot; CAB SAUV &middot; CLONE 337 &middot; PLANTED 2011
        </text>
        <text
          x={blockDivX + 10}
          y={padY - 20}
          fontFamily="JetBrains Mono"
          fontSize="9"
          fill="#9A9C98"
          letterSpacing="1.2"
        >
          BLOCK 8B &middot; MERLOT &middot; CLONE 181 &middot; PLANTED 2014
        </text>
        <g>{dots}</g>
      </svg>
      {hud && (
        <>
          <div className="map-corners">
            <span className="tl" /><span className="tr" /><span className="bl" /><span className="br" />
          </div>
          <div className="map-hud tl">
            <span>Vineyard <b style={{ color: '#EDEDE8' }}>Volcanic Ridge</b></span>
          </div>
          <div className="map-hud tr">
            <span className="pill live">RTK FIX</span>
            <span className="pill">BLOCK 8A</span>
          </div>
          <div className="layer-toggle">
            <span className={`seg ${variant === 'production' ? 'active' : ''}`}>Production</span>
            <span className={`seg ${variant === 'irrigation' ? 'active' : ''}`}>Irrigation</span>
            <span className={`seg ${variant === 'disease' ? 'active' : ''}`}>Virus</span>
            <span className={`seg ${variant === 'unified' ? 'active' : ''}`}>Unified</span>
          </div>
          <div className="gps-bar">GPS Accuracy &middot; 0.009 m</div>
          <div className="map-hud bl">
            <span>Scale 1 : 1 200</span>
            <span>NAD83 &middot; UTM 10N</span>
          </div>
          <div className="scale-bar">
            <div className="track"><i /><i /><i /><i /></div>
            <span>0 &mdash; 20 m</span>
          </div>
        </>
      )}
    </div>
  );
};

export default VineMap;

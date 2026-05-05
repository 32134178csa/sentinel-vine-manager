import React from 'react';
import PhoneFrame from './PhoneFrame';

interface MobileFieldMapProps {
  variant?: 'production' | 'virus' | 'irrigation' | 'unified';
}

function MapVariantSVG({ variant = 'unified' }: { variant: string }) {
  const W = 280, H = 540;
  const colXs = [7, 30, 53, 76, 99, 122, 145, 168, 191, 214, 237, 260, 273];
  const rowStep = 11;
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
  };

  let seed = variant === 'virus' ? 91 : variant === 'production' ? 33 : variant === 'irrigation' ? 51 : 17;
  const r = () => { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; };
  const diseaseCx = vines * 0.68, diseaseCy = rows * 0.40, diseaseR = Math.max(6, rows * 0.13);
  const DOT_R = 3.4;

  const dots: React.ReactElement[] = [];
  for (let rr = 0; rr < rows; rr++) {
    for (let vv = 0; vv < vines; vv++) {
      const x = colXs[vv];
      const y = padY + rr * rowStep;
      const dx = vv - diseaseCx, dy = rr - diseaseCy;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const near = dist < diseaseR;
      const nearer = dist < diseaseR * 0.6;
      const n = r();
      let fill: string;

      if (variant === 'virus') {
        if (nearer) {
          if (n < 0.45) fill = C.virus;
          else if (n < 0.78) fill = C.grey;
          else fill = C.orange;
        } else if (near) {
          if (n < 0.28) fill = C.virus;
          else if (n < 0.50) fill = C.grey;
          else if (n < 0.62) fill = C.orange;
          else fill = C.healthy;
        } else if (n < 0.04) fill = C.virus;
        else if (n < 0.08) fill = C.grey;
        else if (n < 0.12) fill = C.orange;
        else if (n < 0.60) fill = C.healthy;
        else fill = C.nominal;
      } else if (variant === 'production') {
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
        } else if (n < 0.03) fill = C.virus;
        else if (n < 0.07) fill = C.grey;
        else if (n < 0.12) fill = C.orange;
        else if (n < 0.64) fill = C.healthy;
        else fill = C.nominal;
      } else {
        // unified
        if (nearer) {
          if (n < 0.32) fill = C.virus;
          else if (n < 0.60) fill = C.grey;
          else if (n < 0.75) fill = C.orange;
          else fill = C.healthy;
        } else if (near) {
          if (n < 0.18) fill = C.virus;
          else if (n < 0.34) fill = C.grey;
          else if (n < 0.46) fill = C.orange;
          else fill = C.healthy;
        } else if (n < 0.03) fill = C.virus;
        else if (n < 0.07) fill = C.grey;
        else if (n < 0.11) fill = C.orange;
        else if (n < 0.60) fill = C.healthy;
        else fill = C.nominal;
      }

      dots.push(
        <circle key={`${rr}-${vv}`} cx={x.toFixed(1)} cy={y.toFixed(1)} r={DOT_R} fill={fill} />
      );
    }
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}>
      {dots}
    </svg>
  );
}

export default function MobileFieldMap({ variant = 'production' }: MobileFieldMapProps) {
  const layers = ['Production', 'Irrigation', 'Virus', 'Unified'];

  return (
    <PhoneFrame>
      <div className="mfm-container">
        {/* dark satellite-like background */}
        <div className="mfm-satellite" />
        <div className="mfm-vignette" />

        {/* dot grid */}
        <div className="mfm-dots">
          <MapVariantSVG variant={variant} />
        </div>

        {/* block label */}
        <div className="mfm-hud mfm-block-label">
          <span>Block VR-8A.1</span>
        </div>

        {/* icon buttons top-right */}
        <div className="mfm-hud mfm-icons">
          <div className="mfm-icon-btn">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M1 2h10M1 6h10M1 10h10" stroke="currentColor" strokeWidth="1.3" /></svg>
          </div>
          <div className="mfm-icon-btn">
            <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor" /><text x="6" y="8.5" fontSize="7" textAnchor="middle" fill="currentColor" fontFamily="JetBrains Mono">#</text></svg>
          </div>
        </div>

        {/* RTK accuracy bar */}
        <div className="mfm-hud mfm-rtk-bar">
          <span className="dot" />
          RTK &middot; 0.009 m
        </div>

        {/* layer toggles */}
        <div className="mfm-hud mfm-layer-toggles">
          {layers.map(s => (
            <span key={s} className={`mfm-layer-btn${s.toLowerCase() === variant ? ' active' : ''}`}>
              {s}
            </span>
          ))}
        </div>

        {/* compass */}
        <div className="mfm-hud mfm-compass">
          <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9.2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1" />
            <line x1="11" y1="0.8" x2="11" y2="3.2" stroke="currentColor" strokeWidth="1.1" />
            <line x1="11" y1="18.8" x2="11" y2="21.2" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1" />
            <line x1="0.8" y1="11" x2="3.2" y2="11" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1" />
            <line x1="18.8" y1="11" x2="21.2" y2="11" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1" />
            <path d="M11 2.2 L13.1 11 L11 10 L8.9 11 Z" fill="oklch(0.80 0.17 150)" stroke="oklch(0.80 0.17 150)" strokeWidth="0.4" strokeLinejoin="round" />
            <path d="M11 19.8 L13.1 11 L11 12 L8.9 11 Z" fill="currentColor" fillOpacity="0.75" />
            <circle cx="11" cy="11" r="0.9" fill="currentColor" />
          </svg>
        </div>

        {/* locate button */}
        <div className="mfm-hud mfm-locate">
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none"><path d="M7 1l3 12-3-3-3 3z" fill="currentColor" /></svg>
        </div>

        {/* scale bar */}
        <div className="mfm-hud mfm-scale">
          <span className="bar"><i /><i /></span>
          <span>0 — 20 m</span>
        </div>

        {/* coordinate system */}
        <div className="mfm-hud mfm-coord">NAD83 &middot; UTM 10N</div>
      </div>
    </PhoneFrame>
  );
}

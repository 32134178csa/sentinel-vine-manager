import React from 'react';
import PhoneFrame from './PhoneFrame';

// Color constants matching the handoff
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
  wordmark: '"Space Grotesk", "Inter Tight", sans-serif',
};

interface IconBtnProps {
  accent?: boolean;
  children: React.ReactNode;
}

function IconBtn({ accent, children }: IconBtnProps) {
  return (
    <button style={{
      width: 28,
      height: 28,
      border: `1px solid ${accent ? COLORS_M.accent : COLORS_M.line}`,
      color: accent ? COLORS_M.accent : COLORS_M.ink,
      background: 'transparent',
      display: 'grid',
      placeItems: 'center',
    }}>
      {children}
    </button>
  );
}

interface MapVariantSVGProps {
  variant?: 'unified' | 'virus' | 'production' | 'irrigation';
  W?: number;
  H?: number;
}

function MapVariantSVG({ variant = 'unified', W = 360, H = 740 }: MapVariantSVGProps) {
  const colXs = [9,38,67,96,125,154,183,212,241,270,299,328,357];
  const rowStep = 14;
  const vines = colXs.length;
  const rows = Math.floor((H - 10) / rowStep) + 1;
  const padY = (H - (rows-1)*rowStep) / 2;

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

  let seed = variant==='virus'?91:variant==='production'?33:variant==='irrigation'?51:17;
  const r = () => (seed = (seed*9301+49297)%233280, seed/233280);
  const diseaseCx = vines*0.68, diseaseCy = rows*0.40, diseaseR = Math.max(6, rows*0.13);
  const DOT_R = 4.4;

  const dots: Array<{x: number; y: number; fill: string; r: number}> = [];
  for (let rr=0; rr<rows; rr++){
    for (let vv=0; vv<vines; vv++){
      const x = colXs[vv];
      const y = padY + rr*rowStep;
      const dx = vv - diseaseCx, dy = rr - diseaseCy;
      const dist = Math.sqrt(dx*dx+dy*dy);
      const near = dist < diseaseR;
      const nearer = dist < diseaseR*0.6;
      const n = r();
      let fill: string;
      if (variant==='virus'){
        if (nearer) {
          if (n<0.45) fill = C.virus;
          else if (n<0.78) fill = C.grey;
          else fill = C.orange;
        } else if (near) {
          if (n<0.28) fill = C.virus;
          else if (n<0.50) fill = C.grey;
          else if (n<0.62) fill = C.orange;
          else fill = C.healthy;
        } else if (n<0.04) fill = C.virus;
        else if (n<0.08) fill = C.grey;
        else if (n<0.12) fill = C.orange;
        else if (n<0.60) fill = C.healthy;
        else fill = C.nominal;
      } else if (variant==='production'){
        if (nearer) {
          if (n<0.38) fill = C.virus;
          else if (n<0.66) fill = C.grey;
          else if (n<0.82) fill = C.orange;
          else fill = C.healthy;
        } else if (near) {
          if (n<0.20) fill = C.virus;
          else if (n<0.38) fill = C.grey;
          else if (n<0.52) fill = C.orange;
          else fill = C.healthy;
        } else if (n<0.03) fill = C.virus;
        else if (n<0.07) fill = C.grey;
        else if (n<0.12) fill = C.orange;
        else if (n<0.04+0.60) fill = C.healthy;
        else fill = C.nominal;
      } else if (variant==='irrigation'){
        fill = n<0.35?C.irrig : n<0.70?C.dry : C.nominal;
      } else {
        if (nearer) {
          if (n<0.32) fill = C.virus;
          else if (n<0.60) fill = C.grey;
          else if (n<0.75) fill = C.orange;
          else fill = C.healthy;
        } else if (near) {
          if (n<0.18) fill = C.virus;
          else if (n<0.34) fill = C.grey;
          else if (n<0.46) fill = C.orange;
          else fill = C.healthy;
        } else if (n<0.03) fill = C.virus;
        else if (n<0.07) fill = C.grey;
        else if (n<0.11) fill = C.orange;
        else if (n<0.60) fill = C.healthy;
        else fill = C.nominal;
      }
      dots.push({ x, y, fill, r: DOT_R });
    }
  }

  return (
    <svg viewBox={`0 0 ${W} ${H}`} style={{ position:'absolute',inset:0,width:'100%',height:'100%' }}>
      {dots.map((d,i)=><circle key={i} cx={d.x.toFixed(1)} cy={d.y.toFixed(1)} r={d.r} fill={d.fill}/>)}
    </svg>
  );
}

interface MobileFieldMapExactProps {
  variant?: 'unified' | 'virus' | 'production' | 'irrigation';
}

export default function MobileFieldMapExact({ variant = 'production' }: MobileFieldMapExactProps) {
  return (
    <PhoneFrame>
      <div style={{ flex:1,position:'relative',overflow:'hidden',background:'#0B0C0E' }}>
        {/* real satellite base */}
        <img src="/img/product-screens/vineyard-satellite-v.png" alt="" style={{
          position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',
          filter:'saturate(0.85) brightness(0.78)',
        }}/>
        {/* vignette */}
        <div style={{ position:'absolute',inset:0,background:
          `radial-gradient(ellipse 120% 85% at 50% 50%, transparent 50%, rgba(0,0,0,0.40) 100%),
           linear-gradient(180deg, rgba(0,0,0,0.28) 0%, transparent 22%, transparent 78%, rgba(0,0,0,0.35) 100%)` }}/>
        {/* dot grid */}
        <div style={{ position:'absolute',inset:0 }}>
          <MapVariantSVG variant={variant}/>
        </div>

        {/* top-left header */}
        <div style={{ position:'absolute',top:62,left:14,zIndex:7,
          height:28,display:'flex',alignItems:'center',
          background:'rgba(8,10,9,0.88)',
          border:`1px solid ${COLORS_M.line}`,
          padding:'0 12px',
        }}>
          <div style={{ fontFamily:fonts.serif,fontSize:15,color:COLORS_M.ink,letterSpacing:-0.005,fontWeight:400,lineHeight:1 }}>Block VR-8A.1</div>
        </div>
        <div style={{ position:'absolute',top:62,right:18,zIndex:7,display:'flex',gap:6 }}>
          <div style={{ background:'rgba(8,10,9,0.88)',display:'grid' }}>
            <IconBtn>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 2h10M1 6h10M1 10h10" stroke="currentColor" strokeWidth="1.3"/></svg>
            </IconBtn>
          </div>
          <div style={{ background:'rgba(8,10,9,0.88)',display:'grid' }}>
            <IconBtn>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><circle cx="6" cy="6" r="5" stroke="currentColor"/><text x="6" y="8.5" fontSize="7" textAnchor="middle" fill="currentColor" fontFamily="JetBrains Mono">#</text></svg>
            </IconBtn>
          </div>
        </div>

        {/* GPS Accuracy bar */}
        <div style={{
          position:'absolute',top:108,left:'50%',transform:'translateX(-50%)',
          padding:'4px 12px',
          background:'rgba(8,10,9,0.88)',
          border:'1px solid oklch(0.75 0.12 150 / 0.6)',
          color:COLORS_M.accent,fontFamily:fonts.mono,fontSize:9,letterSpacing:'0.12em',
          textTransform:'uppercase',zIndex:7,display:'flex',alignItems:'center',gap:8,
        }}>
          <span style={{ width:5,height:5,borderRadius:'50%',background:COLORS_M.accent,boxShadow:`0 0 6px ${COLORS_M.accent}` }}/>
          RTK · 0.009 m
        </div>

        {/* layer toggles */}
        <div style={{
          position:'absolute',top:148,left:'50%',transform:'translateX(-50%)',
          display:'flex',gap:4,zIndex:7,
        }}>
          {['Production','Irrigation','Virus','Unified'].map(s=>{
            const active = s.toLowerCase() === variant;
            return (
              <span key={s} style={{
                fontFamily:fonts.mono,fontSize:9,letterSpacing:'0.1em',textTransform:'uppercase',
                padding:'4px 9px',
                background: active ? COLORS_M.ink : 'rgba(8,10,9,0.88)',
                color: active ? COLORS_M.bg : COLORS_M.inkDim,
                border:`1px solid ${active?COLORS_M.ink:COLORS_M.line}`,
                backdropFilter:'blur(6px)',
              }}>{s}</span>
            );
          })}
        </div>

        {/* compass + locate */}
        <div style={{ position:'absolute',bottom:52,left:14,zIndex:7,
          width:40,height:40,border:`1px solid ${COLORS_M.line}`,background:'rgba(8,10,9,0.88)',
          display:'grid',placeItems:'center',color:COLORS_M.ink,backdropFilter:'blur(6px)' }}>
          <svg width="28" height="28" viewBox="0 0 22 22" fill="none">
            <circle cx="11" cy="11" r="9.2" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1"/>
            <circle cx="11" cy="11" r="5.4" stroke="currentColor" strokeOpacity="0.3" strokeWidth="0.75"/>
            <line x1="11" y1="0.8" x2="11" y2="3.2" stroke="currentColor" strokeWidth="1.1"/>
            <line x1="11" y1="18.8" x2="11" y2="21.2" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1"/>
            <line x1="0.8" y1="11" x2="3.2" y2="11" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1"/>
            <line x1="18.8" y1="11" x2="21.2" y2="11" stroke="currentColor" strokeOpacity="0.7" strokeWidth="1"/>
            <path d="M11 2.2 L13.1 11 L11 10 L8.9 11 Z" fill={COLORS_M.accent} stroke={COLORS_M.accent} strokeWidth="0.4" strokeLinejoin="round"/>
            <path d="M11 19.8 L13.1 11 L11 12 L8.9 11 Z" fill="currentColor" fillOpacity="0.75"/>
            <path d="M2.2 11 L11 13.1 L10 11 L11 8.9 Z" fill="currentColor" fillOpacity="0.55"/>
            <path d="M19.8 11 L11 13.1 L12 11 L11 8.9 Z" fill="currentColor" fillOpacity="0.55"/>
            <circle cx="11" cy="11" r="0.9" fill="currentColor"/>
          </svg>
          <span style={{
            position:'absolute',top:3,fontFamily:fonts.mono,fontSize:8,fontWeight:700,
            color:COLORS_M.ink,letterSpacing:'0.05em',
          }}>N</span>
        </div>
        <div style={{ position:'absolute',bottom:52,right:14,zIndex:7,
          width:36,height:36,border:`1px solid ${COLORS_M.accent}`,background:'rgba(8,10,9,0.88)',
          display:'grid',placeItems:'center',color:COLORS_M.accent,backdropFilter:'blur(6px)' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M7 1l3 12-3-3-3 3z" fill="currentColor"/></svg>
        </div>

        {/* scale */}
        <div style={{ position:'absolute',bottom:22,left:14,zIndex:7,
          display:'flex',alignItems:'center',gap:6,
          fontFamily:fonts.mono,fontSize:9,color:COLORS_M.inkDim,letterSpacing:'0.1em' }}>
          <span style={{ display:'flex' }}>
            <i style={{ width:18,height:5,background:COLORS_M.ink,border:`1px solid ${COLORS_M.inkDim}` }}/>
            <i style={{ width:18,height:5,background:'transparent',border:`1px solid ${COLORS_M.inkDim}`,borderLeft:0 }}/>
          </span>
          <span>0 — 20 m</span>
        </div>
        <div style={{ position:'absolute',bottom:22,right:14,zIndex:7,fontFamily:fonts.mono,fontSize:8.5,color:COLORS_M.inkMute,letterSpacing:'0.14em',textTransform:'uppercase' }}>
          NAD83 · UTM 10N
        </div>
      </div>
    </PhoneFrame>
  );
}

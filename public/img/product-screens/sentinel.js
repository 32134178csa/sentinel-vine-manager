// Shared nav + footer + map visuals for Sentinel site.
(function(){
  const page = document.body.dataset.page || '';

  // --- STATUS STRIP ---
  const strip = document.createElement('div');
  strip.className = 'status-strip';
  strip.innerHTML = `
    <span><span class="dot"></span>FIELD NETWORK · ONLINE</span>
    <span class="sep">│</span>
    <span>VINE · BY · VINE™</span>
    <span class="sep">│</span>
    <span>CALIFORNIA · OREGON · MEXICO · ITALY · ARMENIA</span>
    <span class="spacer"></span>
    <span>GNSS ACC 0.009 m</span>
    <span class="sep">│</span>
    <span class="utc">UTC 00:00:00</span>
  `;
  document.body.insertBefore(strip, document.body.firstChild);

  // --- NAV ---
  const nav = document.createElement('nav');
  nav.className = 'top';
  const links = [
    ['index.html','Home','home'],
    ['product.html','Product','product'],
    ['about.html','About','about'],
    ['faqs.html','FAQs','faqs'],
    ['press.html','Press','press'],
    ['blog.html','Blog','blog'],
  ];
  nav.innerHTML = `
    <div class="row">
      <a class="brand" href="index.html">
        <div class="mark"><img src="assets/sentinel-mark-transparent.png" alt="Sentinel"/></div>
        <div class="name">Sentinel<em>·</em></div>
      </a>
      <div class="navlinks">
        ${links.map(([h,l,k]) => `<a href="${h}" class="${k===page?'active':''}">${l}</a>`).join('')}
      </div>
      <div class="navspace"></div>
      <a class="cta-ghost" href="#">User Login</a>
      <a class="cta-solid" href="#contact">Schedule a Demo <span class="arrow"></span></a>
    </div>`;
  document.body.insertBefore(nav, strip.nextSibling);

  // --- FOOTER ---
  const foot = document.createElement('footer');
  foot.innerHTML = `
    <div class="foot-grid">
      <div class="foot-brand">
        <div class="brand" style="min-width:0">
          <div class="mark"><img src="assets/sentinel-mark-transparent.png" alt="Sentinel"/></div>
        </div>
        <div class="name">Sentinel·</div>
        <p>The medical record for your vineyard. A vine-level management platform operating in California, Oregon, Mexico, Italy, Armenia and beyond. Built by winemakers and viticulturists. A product of Spongy Mesophyll Technologies.</p>
      </div>
      <div class="foot-col">
        <h5>Product</h5>
        <ul>
          <li><a href="product.html#vine">Vine By Vine™</a></li>
          <li><a href="product.html#maturity">Maturity Monitoring</a></li>
          <li><a href="product.html#disease">Pest &amp; Disease</a></li>
          <li><a href="product.html#historical">Historical Analysis</a></li>
          <li><a href="product.html#workorders">Work Orders</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h5>Company</h5>
        <ul>
          <li><a href="about.html">About</a></li>
          <li><a href="blog.html">Blog</a></li>
          <li><a href="press.html">Press</a></li>
          <li><a href="faqs.html">FAQs</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h5>Get Started</h5>
        <ul>
          <li><a href="#">Schedule a Demo</a></li>
          <li><a href="#">Buy Now</a></li>
          <li><a href="#">Download on App Store</a></li>
          <li><a href="#">User Login</a></li>
        </ul>
      </div>
      <div class="foot-col">
        <h5>Contact</h5>
        <ul>
          <li><a href="#">hello@sentinelvine.com</a></li>
          <li><a href="#">Napa · California</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Privacy Policy</a></li>
        </ul>
      </div>
    </div>
    <div class="foot-bottom">
      <div>© 2026 Spongy Mesophyll Technologies · Sentinel Vine Manager™</div>
      <div class="ver">
        <span>Build 26.04.019</span>
        <span>Cookies</span>
        <span>Privacy</span>
        <span>Legal</span>
      </div>
    </div>`;
  document.body.appendChild(foot);

  // --- UTC clock ---
  const utc = strip.querySelector('.utc');
  function tick(){
    const d = new Date();
    utc.textContent = `UTC ${String(d.getUTCHours()).padStart(2,'0')}:${String(d.getUTCMinutes()).padStart(2,'0')}:${String(d.getUTCSeconds()).padStart(2,'0')}`;
  }
  tick(); setInterval(tick,1000);

  // --- Render any product-style map containers on the page ---
  document.querySelectorAll('[data-vine-map]').forEach(renderVineMap);
})();

/**
 * Render a product-accurate vineyard map into a container.
 * The container should have data attributes describing the layout:
 *   data-vine-map           — presence enables rendering
 *   data-rows               — number of rows (default 14)
 *   data-vines              — vines per row (default 48)
 *   data-variant             — 'unified' | 'disease' | 'production' | 'irrigation'
 */
function renderVineMap(el){
  const rows = parseInt(el.dataset.rows||'14',10);
  const vines = parseInt(el.dataset.vines||'48',10);
  const variant = el.dataset.variant || 'unified';

  // build SVG
  const W = 1200, H = 680;
  const padX = 80, padY = 110;
  const usableW = W - padX*2;
  const usableH = H - padY*2;
  const stepX = usableW / (vines-1);
  const stepY = usableH / (rows-1);

  // deterministic rng
  let seed = 17;
  const r = () => (seed = (seed*9301+49297)%233280, seed/233280);

  // pick a color per vine based on variant
  const COLORS = {
    healthy: 'oklch(0.78 0.11 150)',     // green
    nominal: 'oklch(0.55 0.09 140)',     // dim green
    rootstock:'oklch(0.72 0.14 55)',     // amber
    miss:    'oklch(0.45 0.02 260)',     // dim gray
    virus:   'oklch(0.62 0.18 25)',      // red
    tested:  'oklch(0.62 0.13 300)',     // purple
    dry:     'oklch(0.55 0.05 240)',     // blue-gray
    irrig:   'oklch(0.70 0.12 220)',     // blue
  };

  function pick(){
    const n = r();
    if (variant === 'disease'){
      if (n < 0.03) return COLORS.virus;
      if (n < 0.07) return COLORS.tested;
      if (n < 0.10) return COLORS.miss;
      if (n < 0.55) return COLORS.healthy;
      return COLORS.nominal;
    }
    if (variant === 'production'){
      if (n < 0.04) return COLORS.miss;
      if (n < 0.08) return COLORS.rootstock;
      if (n < 0.50) return COLORS.healthy;
      return COLORS.nominal;
    }
    if (variant === 'irrigation'){
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

  // clustered disease region — one patch pulls extra virus probability
  const diseaseCx = vines*0.62, diseaseCy = rows*0.35, diseaseR = 6;

  let dots = '';
  for (let rr=0; rr<rows; rr++){
    for (let vv=0; vv<vines; vv++){
      const x = padX + vv*stepX;
      const y = padY + rr*stepY;
      const dx = vv - diseaseCx, dy = rr - diseaseCy;
      const near = Math.sqrt(dx*dx + dy*dy) < diseaseR;
      const n = r();
      let fill;
      if ((variant==='disease' || variant==='unified') && near && n<0.35){
        fill = n<0.22 ? COLORS.virus : COLORS.tested;
      } else {
        fill = pick();
      }
      const rad = fill === COLORS.nominal ? 2.4 : 2.8;
      dots += `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${rad}" fill="${fill}"/>`;
    }
  }

  // Row labels on the left — subtle
  let rowLabels = '';
  for (let rr=0; rr<rows; rr+=2){
    const y = padY + rr*stepY + 3;
    rowLabels += `<text x="${padX-20}" y="${y}" font-family="JetBrains Mono" font-size="8" fill="#5A5D5A" text-anchor="end" letter-spacing="1">R${String(rr+1).padStart(2,'0')}</text>`;
  }

  // Block divider + label
  const blockDiv = `
    <line x1="${padX + stepX*(vines*0.45)}" y1="${padY-10}" x2="${padX + stepX*(vines*0.45)}" y2="${padY+usableH+10}" stroke="#24272D" stroke-dasharray="2 5"/>
    <text x="${padX+6}" y="${padY-20}" font-family="JetBrains Mono" font-size="9" fill="#9A9C98" letter-spacing="1.2">BLOCK 8A · CAB SAUV · CLONE 337 · PLANTED 2011</text>
    <text x="${padX + stepX*(vines*0.45) + 10}" y="${padY-20}" font-family="JetBrains Mono" font-size="9" fill="#9A9C98" letter-spacing="1.2">BLOCK 8B · MERLOT · CLONE 181 · PLANTED 2014</text>
  `;

  const svg = `
    <svg class="vines" viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      <g>${rowLabels}</g>
      ${blockDiv}
      <g>${dots}</g>
    </svg>`;

  // Inject base + svg + HUD chrome
  el.classList.add('prod-map');
  const hudHTML = el.dataset.hud !== 'false' ? `
    <div class="map-corners"><span class="tl"></span><span class="tr"></span><span class="bl"></span><span class="br"></span></div>
    <div class="map-hud tl">
      <span>Vineyard <b style="color:#EDEDE8">Sentinel Ridge · Estate</b></span>
    </div>
    <div class="map-hud tr">
      <span class="pill live">RTK FIX</span>
      <span class="pill">BLOCK 8A · 8B</span>
    </div>
    <div class="layer-toggle">
      <span class="seg ${variant==='production'?'active':''}">Production</span>
      <span class="seg ${variant==='irrigation'?'active':''}">Irrigation</span>
      <span class="seg alert ${variant==='disease'?'active':''}">Virus</span>
      <span class="seg ${variant==='unified'?'active':''}">Unified</span>
    </div>
    <div class="gps-bar">GPS Accuracy · 0.009 m</div>
    <div class="map-hud bl">
      <span>Scale 1 : 1 200</span>
      <span>NAD83 · UTM 10N</span>
    </div>
    <div class="scale-bar">
      <div class="track"><i></i><i></i><i></i><i></i></div>
      <span>0 — 20 m</span>
    </div>
  ` : '';

  el.innerHTML = `<div class="base"></div>${svg}${hudHTML}${el.dataset.extra||''}`;
}

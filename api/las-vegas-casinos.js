const VEGAS_CASINOS = [
  { name: 'Bellagio', slug: 'bellagio', desc: 'Iconic luxury resort with 116,000 sq ft of gaming and world-class poker room.', area: 'The Strip' },
  { name: 'MGM Grand Las Vegas', slug: 'mgm-grand-las-vegas', desc: '170,000 sq ft of gaming with a massive poker room and world-class entertainment.', area: 'The Strip' },
  { name: 'Caesars Palace', slug: 'caesars-palace', desc: 'Legendary Roman-themed resort with 124,000 sq ft of gaming and celebrity restaurants.', area: 'The Strip' },
  { name: 'The Venetian Las Vegas', slug: 'venetian-las-vegas', desc: 'Luxury Italian-themed mega-resort with 120,000 sq ft of gaming and gondola rides.', area: 'The Strip' },
  { name: 'Wynn Las Vegas', slug: 'wynn-las-vegas', desc: "One of Vegas's most upscale properties with 110,000 sq ft of gaming.", area: 'The Strip' },
  { name: 'Aria Resort & Casino', slug: 'aria-las-vegas', desc: 'Modern luxury resort with 150,000 sq ft of gaming and one of the most popular poker rooms in Vegas.', area: 'The Strip' },
  { name: 'Cosmopolitan of Las Vegas', slug: 'cosmopolitan-las-vegas', desc: 'Sleek boutique-style resort with 100,000 sq ft of gaming and the best bars on the Strip.', area: 'The Strip' },
  { name: 'Paris Las Vegas', slug: 'paris-las-vegas', desc: 'French-themed casino with 95,000 sq ft of gaming and a replica Eiffel Tower.', area: 'The Strip' },
  { name: "Harrah's Las Vegas", slug: 'harrahs-las-vegas', desc: 'Classic Strip casino with 87,000 sq ft of gaming and affordable table minimums.', area: 'The Strip' },
  { name: 'Planet Hollywood Las Vegas', slug: 'planet-hollywood-las-vegas', desc: 'Lively casino resort with 95,000 sq ft of gaming in the heart of the Strip.', area: 'The Strip' },
  { name: 'Mandalay Bay', slug: 'mandalay-bay', desc: 'Massive resort with 135,000 sq ft of gaming, a beach club, and a large poker room.', area: 'The Strip' },
  { name: 'New York-New York', slug: 'new-york-new-york', desc: 'Fun NYC-themed casino with 84,000 sq ft of gaming and low table minimums.', area: 'The Strip' },
  { name: 'Treasure Island', slug: 'treasure-island-las-vegas', desc: 'Mid-Strip casino known for affordable table minimums and a laid-back atmosphere.', area: 'The Strip' },
  { name: 'Golden Nugget Las Vegas', slug: 'golden-nugget-las-vegas', desc: 'Crown jewel of Downtown with a legendary poker room and famous shark tank pool.', area: 'Downtown' },
  { name: "Binion's Gambling Hall", slug: 'binions', desc: 'Legendary Downtown institution famous for poker history and old-school Vegas vibe.', area: 'Downtown' },
];

export default function handler(req, res) {
  const casinosHtml = VEGAS_CASINOS.map(c => `
    <a href="/${c.slug}" class="casino-card">
      <div class="casino-area">${c.area}</div>
      <div class="casino-name">${c.name}</div>
      <div class="casino-desc">${c.desc}</div>
      <div class="casino-cta">View live conditions →</div>
    </a>`).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Las Vegas Casino Floor Conditions Right Now | Live Reports | CasinoConditions</title>
<meta name="description" content="Is your Las Vegas casino busy right now? Real-time floor reports from players at Bellagio, MGM Grand, Caesars Palace, Aria, Venetian, Wynn and more. See table game availability, poker room wait times, and crowd levels before you go.">
<link rel="canonical" href="https://casinoconditions.com/las-vegas-casinos">
<meta property="og:title" content="Las Vegas Casino Floor Conditions Right Now | CasinoConditions">
<meta property="og:description" content="Real-time floor reports for all major Las Vegas casinos. Know before you go.">
<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Las Vegas Casino Floor Conditions",
  "description": "Real-time floor reports for Las Vegas casinos",
  "url": "https://casinoconditions.com/las-vegas-casinos",
  "breadcrumb": {
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://casinoconditions.com" },
      { "@type": "ListItem", "position": 2, "name": "Las Vegas Casinos", "item": "https://casinoconditions.com/las-vegas-casinos" }
    ]
  }
})}</script>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RYX8RTNPQG"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-RYX8RTNPQG');</script>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f7f7f5;--surface:#fff;--border:#e8e8e4;--text:#1a1a18;--muted:#888880;--accent:#1a6b3c;--accent-light:#edf5f0;--radius:12px}
body.dark{--bg:#0f0f0d;--surface:#161614;--border:#2a2a26;--text:#f0ede8;--muted:#6b6860;--accent:#4caf70;--accent-light:#1a2e1f}
html{overflow-x:hidden}body{overflow-x:hidden;font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);line-height:1.5}
nav{display:flex;align-items:center;justify-content:space-between;padding:0 40px;height:60px;background:var(--surface);border-bottom:1px solid var(--border);position:sticky;top:0;z-index:100}
.logo{display:flex;align-items:center;gap:8px;font-size:16px;font-weight:700;text-decoration:none;color:var(--text)}
.logo-dot{width:8px;height:8px;background:var(--accent);border-radius:50%}
.nav-links{display:flex;gap:24px;align-items:center}
.nav-link{font-size:14px;color:var(--muted);text-decoration:none;transition:color .15s}
.nav-link:hover{color:var(--text)}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 10px;cursor:pointer;font-size:14px;color:var(--text)}
.hero{max-width:800px;margin:60px auto 40px;padding:0 24px;text-align:center}
.hero h1{font-size:36px;font-weight:700;letter-spacing:-1px;line-height:1.2;margin-bottom:16px}
.hero p{font-size:17px;color:var(--muted);max-width:600px;margin:0 auto 8px}
.live-badge{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--accent);background:var(--accent-light);padding:5px 12px;border-radius:20px;margin-bottom:20px;font-family:'DM Mono',monospace}
.live-dot{width:6px;height:6px;background:var(--accent);border-radius:50%;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.area-section{max-width:1100px;margin:0 auto 40px;padding:0 24px}
.area-title{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:16px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.casino-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
.casino-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;text-decoration:none;color:var(--text);transition:border-color .15s,transform .15s;display:block}
.casino-card:hover{border-color:var(--accent);transform:translateY(-2px)}
.casino-area{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--accent);margin-bottom:6px}
.casino-name{font-size:16px;font-weight:600;margin-bottom:6px}
.casino-desc{font-size:13px;color:var(--muted);line-height:1.5;margin-bottom:12px}
.casino-cta{font-size:13px;font-weight:500;color:var(--accent)}
footer{padding:28px 40px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border);background:var(--surface);margin-top:40px}
.footer-logo{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600}
.footer-links{display:flex;gap:20px}
.footer-link{font-size:12px;color:var(--muted);text-decoration:none}
.footer-link:hover{color:var(--text)}
.footer-copy{font-size:12px;color:var(--muted)}
@media(max-width:600px){nav{padding:0 16px}.hero{margin:40px auto 30px}.hero h1{font-size:26px}footer{flex-direction:column;gap:12px;text-align:center}}

.btn{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background .15s}
.btn:hover{background:var(--accent-dim)}
.btn-outline{background:transparent;color:var(--accent);border:1.5px solid var(--accent);border-radius:8px;padding:7px 16px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.btn-outline:hover{background:var(--accent);color:#fff}
</style>
</head>
<body>
<nav>
  <a class="logo" href="/" style="flex-shrink:0">
    <div class="logo-dot"></div>
    <div class="logo-text">Casino<span>Conditions</span></div>
  </a>
  <div class="nav-links">
    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/browse">Browse Casinos</a>
    <a class="nav-link" href="/poker-rooms">Poker Rooms</a>
    <a class="nav-link" href="/las-vegas-casinos" style="color:var(--accent);font-weight:600">Las Vegas</a>
    <a class="nav-link" href="/bookmarks">⭐ Saved</a>
  </div>
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
    <button class="dark-toggle" id="darkToggle" onclick="toggleDark()" title="Toggle dark mode">🌙</button>
    <span id="navProfileBadge" style="display:none;align-items:center;gap:6px;font-size:13px;color:var(--text);cursor:pointer" onclick="window.location=\'/bookmarks\'">
      <span id="navRankEmoji"></span><span id="navUsername" style="font-weight:600"></span>
    </span>
    <button class="btn-outline" id="signInBtn" onclick="showSignInModal()" style="font-size:13px;padding:7px 14px">Sign in</button>
    <button class="btn nav-post-btn" onclick="window.location='/'">+ Post Update</button>
  </div>
</nav>
<div class="mobile-profile-bar" id="mobileProfileBar">
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
    <span style="font-size:28px" id="mpbRankEmoji">🎰</span>
    <div>
      <div style="font-size:14px;font-weight:700;color:var(--text)" id="mpbRankName">Rail Bird</div>
      <div style="font-size:12px;color:var(--muted)"><span id="mpbPoints">0</span> pts · <span id="mpbStreak"></span></div>
    </div>
  </div>
  <div style="text-align:right">
    <div style="font-size:11px;color:var(--muted);margin-bottom:4px" id="mpbNextLabel"></div>
    <div class="rank-bar-wrap" style="width:120px"><div class="rank-bar-fill" id="mpbBar" style="width:0%"></div></div>
    <div style="font-size:11px;color:var(--muted);margin-top:3px" id="mpbMaxLabel"></div>
  </div>
</div>
<div class="hero">
  <div class="live-badge"><div class="live-dot"></div> LIVE FLOOR REPORTS</div>
  <h1>Las Vegas Casino Conditions Right Now</h1>
  <p>Real-time floor reports from players at every major Las Vegas casino. Know how busy the poker room is, which tables are open, and what the crowd looks like before you go.</p>
</div>
<div class="area-section">
  <div class="area-title">The Strip & Downtown — ${VEGAS_CASINOS.length} casinos covered</div>
  <div class="casino-grid">${casinosHtml}</div>
</div>
<footer>
  <div class="footer-logo"><div class="logo-dot" style="animation:none;opacity:.7"></div>Casino<span style="color:var(--accent)">Conditions</span></div>
  <div class="footer-links">
    <a class="footer-link" href="/about">About</a>
    <a class="footer-link" href="/terms">Terms</a>
    <a class="footer-link" href="/privacy">Privacy</a>
  </div>
  <div class="footer-copy">© 2026 CasinoConditions</div>
</footer>
<script>
function toggleDark(){const d=document.body.classList.toggle('dark');localStorage.setItem('theme',d?'dark':'light');document.getElementById('darkToggle').textContent=d?'☀️':'🌙';}
if(localStorage.getItem('theme')==='dark'){document.body.classList.add('dark');document.getElementById('darkToggle').textContent='☀️';}
</script>
<script>
function getNavCookieId(){let id=document.cookie.split(';').map(c=>c.trim()).find(c=>c.startsWith('cc_uid='));if(id)return id.split('=')[1];id='cc_'+Math.random().toString(36).slice(2)+Date.now().toString(36);document.cookie='cc_uid='+id+';max-age=31536000;path=/;SameSite=Lax';return id;}
const NAV_RANKS=[{name:'Rail Bird',min:0,emoji:'\u{1F3B0}'},{name:'Fish',min:50,emoji:'\u{1F41F}'},{name:'Regular',min:150,emoji:'\u2660\uFE0F'},{name:'Floor Regular',min:400,emoji:'\u{1F3B2}'},{name:'High Roller',min:800,emoji:'\u{1F4B0}'},{name:'Whale',min:1500,emoji:'\u{1F451}'}];
function getNavRank(pts){let r=NAV_RANKS[0];for(const rk of NAV_RANKS){if(pts>=rk.min)r=rk;}return r;}
async function loadNavProfile(){
  try{
    const cid=getNavCookieId();
    const em=localStorage.getItem('cc_email')||'';
    let url='/api/profile?cookie_id='+encodeURIComponent(cid);
    if(em)url+='&email='+encodeURIComponent(em);
    const resp=await fetch(url);
    const p=await resp.json();
    if(!p||(!p.email&&!(p.points>0)))return;
    const pts=p.points||0;
    const rank=getNavRank(pts);
    const next=NAV_RANKS.find(r=>r.min>pts);
    const bar=document.getElementById('mobileProfileBar');
    if(bar&&(p.email||pts>0)){
      bar.classList.add('visible');
      const el=function(id){return document.getElementById(id);};
      if(el('mpbRankEmoji'))el('mpbRankEmoji').textContent=rank.emoji;
      if(el('mpbRankName'))el('mpbRankName').textContent=rank.name;
      if(el('mpbPoints'))el('mpbPoints').textContent=pts.toLocaleString();
      if(el('mpbBar'))el('mpbBar').style.width=next?Math.round(((pts-rank.min)/(next.min-rank.min))*100)+'%':'100%';
      if(el('mpbNextLabel'))el('mpbNextLabel').textContent=next?(next.min-pts)+' pts to '+next.emoji+' '+next.name:'Max rank reached';
      if(el('mpbMaxLabel'))el('mpbMaxLabel').textContent=next?next.emoji+' '+next.name:'👑';
    }
    const badge=document.getElementById('navProfileBadge');
    const signInBtn=document.getElementById('signInBtn');
    if(badge&&p.username){
      const e1=document.getElementById('navRankEmoji');
      const e2=document.getElementById('navUsername');
      if(e1)e1.textContent=rank.emoji;
      if(e2)e2.textContent=p.username;
      badge.style.display='flex';
      if(signInBtn)signInBtn.style.display='none';
    }
  }catch(e){}
}
document.addEventListener('DOMContentLoaded',loadNavProfile);
</script>
<script></script>
<script>
function showSignInModal() {
  document.getElementById('globalSignInModal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'globalSignInModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px';
  const box = document.createElement('div');
  box.style.cssText = 'background:var(--surface,#fff);border-radius:16px;padding:28px 24px;max-width:340px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.25)';
  const title = document.createElement('div');
  title.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:16px';
  title.innerHTML = '<div style="font-size:17px;font-weight:700;color:var(--text,#1a1a18)">🎰 Sign in</div>';
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = 'background:none;border:none;font-size:22px;cursor:pointer;color:#888;line-height:1';
  closeBtn.onclick = function() { modal.remove(); };
  title.appendChild(closeBtn);
  box.appendChild(title);
  const desc = document.createElement('p');
  desc.style.cssText = 'font-size:13px;color:var(--muted,#888);margin:0 0 14px;line-height:1.6';
  desc.textContent = 'Enter your email for a magic link \u2014 no password needed.';
  box.appendChild(desc);
  const emailInput = document.createElement('input');
  emailInput.id = 'globalSignInEmail';
  emailInput.type = 'email';
  emailInput.placeholder = 'your@email.com';
  emailInput.style.cssText = 'width:100%;padding:10px 14px;border:1px solid var(--border,#e8e8e4);border-radius:8px;font-size:14px;margin-bottom:10px;box-sizing:border-box;outline:none;background:var(--bg,#fff);color:var(--text,#1a1a18)';
  box.appendChild(emailInput);
  const sendBtn = document.createElement('button');
  sendBtn.id = 'globalSignInSendBtn';
  sendBtn.textContent = '\u2709\uFE0F Send Magic Link';
  sendBtn.style.cssText = 'width:100%;background:#1a6b3c;color:#fff;border:none;border-radius:8px;padding:12px;font-size:14px;font-weight:600;cursor:pointer';
  sendBtn.onclick = sendGlobalMagicLink;
  box.appendChild(sendBtn);
  const status = document.createElement('div');
  status.id = 'globalSignInStatus';
  status.style.cssText = 'font-size:12px;margin-top:10px;text-align:center;display:none';
  box.appendChild(status);
  modal.appendChild(box);
  modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
  setTimeout(function() { emailInput.focus(); }, 100);
}

async function sendGlobalMagicLink() {
  const email = document.getElementById('globalSignInEmail')?.value.trim();
  if (!email || !email.includes('@')) return;
  const status = document.getElementById('globalSignInStatus');
  const btn = document.getElementById('globalSignInSendBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
  if (status) { status.style.display = 'block'; status.style.color = '#888'; status.textContent = 'Sending...'; }
  try {
    const cookieId = document.cookie.split(';').map(function(c){return c.trim();}).find(function(c){return c.startsWith('cc_uid=');})?.split('=')[1] || '';
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ action: 'magic_link', email: email, cookie_id: cookieId })
    });
    const data = await r.json();
    if (status) {
      if (data.success) {
        status.style.color = '#1a6b3c';
        status.textContent = '\u2705 Check your email for the magic link!';
      } else {
        status.style.color = '#e74c3c';
        status.textContent = data.error || 'Something went wrong';
      }
    }
  } catch(e) {
    if (status) { status.style.color = '#e74c3c'; status.textContent = 'Connection error \u2014 please try again'; }
  }
  if (btn) { btn.disabled = false; btn.textContent = '\u2709\uFE0F Send Magic Link'; }
}
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(html);
}

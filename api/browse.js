const CASINOS = [
  { name: 'Mohegan Sun', location: 'Uncasville, CT', state: 'CT', miles: 30, slug: 'mohegan-sun', desc: 'One of the largest casinos in the US with 300,000+ sq ft of gaming, 4,000 slots, 300 table games, and 30 poker tables.' },
  { name: 'Foxwoods Resort Casino', location: 'Mashantucket, CT', state: 'CT', miles: 41, slug: 'foxwoods', desc: 'The second-largest casino in the US featuring 340,000 sq ft of gaming, 3,500 slots, 250 table games, and a 54-table poker room.' },
  { name: "Jake's 58 Casino", location: 'Islandia, NY', state: 'NY', miles: 73, slug: 'jakes-58', desc: "Jake's 58 offers 1,000 slot machines and electronic table games." },
  { name: 'Empire City Casino', location: 'Yonkers, NY', state: 'NY', miles: 90, slug: 'empire-city', desc: 'Empire City Casino features 4,600+ slot machines and electronic table games.' },
  { name: 'Resorts World NYC', location: 'Queens, NY', state: 'NY', miles: 95, slug: 'resorts-world-nyc', desc: 'Resorts World NYC offers 6,500+ gaming machines near JFK Airport.' },
  { name: "Bally's Twin River", location: 'Lincoln, RI', state: 'RI', miles: 100, slug: 'ballys-twin-river', desc: "Rhode Island's largest casino with live table games, slots, and poker." },
  { name: "Bally's Tiverton", location: 'Tiverton, RI', state: 'RI', miles: 110, slug: 'ballys-tiverton', desc: "24-hour gaming with blackjack, roulette, craps, baccarat, and slots." },
  { name: 'Plainridge Park Casino', location: 'Plainville, MA', state: 'MA', miles: 115, slug: 'plainridge-park', desc: 'Plainridge Park features 1,200 slot machines near Providence and Boston.' },
  { name: 'Resorts World Catskills', location: 'Monticello, NY', state: 'NY', miles: 150, slug: 'resorts-world-catskills', desc: 'Full resort casino in the Catskill Mountains with 100,000 sq ft of gaming.' },
  { name: 'MGM Springfield', location: 'Springfield, MA', state: 'MA', miles: 155, slug: 'mgm-springfield', desc: "Western Massachusetts's premier casino resort with slots, tables, poker, and sportsbook." },
  { name: 'Encore Boston Harbor', location: 'Everett, MA', state: 'MA', miles: 160, slug: 'encore-boston-harbor', desc: 'Luxury resort casino on the Mystic River with 210,000 sq ft of gaming.' },
  { name: 'Borgata', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'borgata', desc: "One of Atlantic City's most popular casinos with a massive poker room." },
  { name: 'Hard Rock Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'hard-rock-ac', desc: 'Full gaming with slots, table games, and a poker room on the boardwalk.' },
  { name: 'Caesars Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'caesars-ac', desc: 'Roman-inspired luxury casino with 2,000+ slots and 130+ table games.' },
  { name: "Harrah's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'harrahs-ac', desc: "Waterfront casino resort with extensive gaming and a poker room." },
  { name: "Bally's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'ballys-ac', desc: "Classic boardwalk casino with 800+ slot machines and table games." },
  { name: 'Resorts Casino Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'resorts-casino-ac', desc: "Atlantic City's original casino with 800+ slots and 100 gaming tables." },
  { name: 'Golden Nugget Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'golden-nugget-ac', desc: 'Marina casino with 2,000+ slots, 60+ table games, and poker.' },
  { name: 'Wind Creek Bethlehem', location: 'Bethlehem, PA', state: 'PA', miles: 210, slug: 'wind-creek-bethlehem', desc: 'Open 24/7 with 3,000+ gaming machines, 176 table games, and poker.' },
  { name: 'Parx Casino', location: 'Bensalem, PA', state: 'PA', miles: 240, slug: 'parx-casino', desc: "Pennsylvania's most popular casino with slots, tables, poker, and horse racing." },
  { name: 'Live! Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', miles: 250, slug: 'live-casino-philly', desc: '510,000 sq ft entertainment complex with slots, tables, poker, and sports betting.' },
  { name: 'Mount Airy Casino', location: 'Mount Pocono, PA', state: 'PA', miles: 175, slug: 'mount-airy-casino', desc: 'Pocono Mountains resort with table games, slots, poker, hotel, spa, and golf.' },
];

const STATE_NAMES = { CT: 'Connecticut', NY: 'New York', RI: 'Rhode Island', MA: 'Massachusetts', NJ: 'New Jersey', PA: 'Pennsylvania' };

export default async function handler(req, res) {
  const byState = {};
  for (const c of CASINOS) {
    if (!byState[c.state]) byState[c.state] = [];
    byState[c.state].push(c);
  }

  const statesHtml = Object.entries(byState).map(([state, casinos]) => `
    <div class="state-group">
      <div class="state-label">${STATE_NAMES[state] || state}</div>
      <div class="dir-grid">
        ${casinos.map(c => `
          <a href="/${c.slug}" class="dir-card">
            <div class="dir-card-name">${c.name}</div>
            <div class="dir-card-loc">📍 ${c.location}</div>
            <div class="dir-card-desc">${c.desc}</div>
            <div class="dir-card-footer">
              <span class="dir-card-dist">${c.miles} miles</span>
              <span class="dir-card-posts">View updates →</span>
            </div>
          </a>`).join('')}
      </div>
    </div>`).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Browse Casinos — Real-Time Floor Conditions | CasinoConditions</title>
<meta name="description" content="Browse all casinos covered by CasinoConditions. Real-time floor reports for casinos in Connecticut, New York, New Jersey, Massachusetts, Rhode Island, and Pennsylvania.">
<link rel="canonical" href="https://casinoconditions.com/browse">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RYX8RTNPQG"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-RYX8RTNPQG');</script>
<meta property="og:title" content="Browse Casinos — CasinoConditions">
<meta property="og:description" content="Real-time casino floor reports for ${CASINOS.length} casinos across the Northeast US.">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f7f7f5;--surface:#fff;--border:#e8e8e4;--text:#1a1a18;--muted:#888880;--accent:#1a6b3c;--accent-light:#edf5f0;--accent-dim:#2d8a52;--radius:12px}
body.dark{--bg:#0f0f0d;--surface:#161614;--border:#2a2a26;--text:#f0ede8;--muted:#6b6860;--accent:#4caf70;--accent-light:#1a2e1f;--accent-dim:#3d9960}
body.dark nav{background:rgba(15,15,13,0.95)}
body.dark .dir-card{background:#161614}
body{transition:background .2s,color .2s}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:15px;transition:all .15s}
.dark-toggle:hover{border-color:var(--muted);background:var(--accent-light)}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
nav{background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--text)}
.logo-dot{width:10px;height:10px;background:var(--accent);border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.85)}}
.logo-text{font-size:15px;font-weight:600;letter-spacing:-.3px}
.logo-text span{color:var(--accent)}
.nav-links{display:flex;align-items:center;gap:24px}
.nav-link{font-size:13px;color:var(--muted);text-decoration:none;transition:color .15s}
.nav-link:hover{color:var(--text)}
.btn{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;text-decoration:none}
.page-header{background:#fff;border-bottom:1px solid var(--border);padding:40px 40px 32px}
.page-header-inner{max-width:1100px;margin:0 auto}
.page-title{font-size:32px;font-weight:700;letter-spacing:-1px;margin-bottom:8px}
.page-sub{font-size:15px;color:var(--muted)}
.directory-wrap{max-width:1100px;margin:0 auto;padding:36px 24px}
.state-group{margin-bottom:36px}
.state-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.dir-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.dir-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;cursor:pointer;transition:all .2s;text-decoration:none;display:block}
.dir-card:hover{border-color:var(--accent);box-shadow:0 4px 16px rgba(26,107,60,.08);transform:translateY(-1px)}
.dir-card-name{font-size:14px;font-weight:600;letter-spacing:-.2px;color:var(--text);margin-bottom:3px}
.dir-card-loc{font-size:12px;color:var(--muted);margin-bottom:8px}
.dir-card-desc{font-size:12px;color:var(--muted);line-height:1.5}
.dir-card-footer{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid var(--border)}
.dir-card-dist{font-size:11px;color:var(--muted);font-family:monospace}
.dir-card-posts{font-size:11px;color:var(--accent);font-weight:500}
@media(max-width:768px){.dir-grid{grid-template-columns:1fr}.page-header{padding:24px 20px}nav{padding:0 16px}.nav-links{display:none}}
</style>
</head>
<body>
<nav>
  <a class="logo" href="/"><div class="logo-dot"></div><div class="logo-text">Casino<span>Conditions</span></div></a>
  <div class="nav-links">
    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/browse" style="color:var(--text)">Browse Casinos</a>
  </div>
  <button class="dark-toggle" id="darkToggle" onclick="toggleDark()">🌙</button>
  <a class="btn" href="/">Post Update</a>
</nav>
<div class="page-header">
  <div class="page-header-inner">
    <h1 class="page-title">Browse Casinos</h1>
    <p class="page-sub">Real-time floor conditions for ${CASINOS.length} casinos across the Northeast</p>
  </div>
</div>
<div class="directory-wrap">${statesHtml}</div>
<script>
function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('darkToggle').textContent = isDark ? '☀️' : '🌙';
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('darkToggle').textContent = '☀️';
}
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.status(200).send(html);
}

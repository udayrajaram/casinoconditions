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
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);line-height:1.5}
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
</style>
</head>
<body>
<nav>
  <a href="/" class="logo"><div class="logo-dot"></div>Casino<span style="color:var(--accent)">Conditions</span></a>
  <div class="nav-links">
    <a href="/" class="nav-link">Home</a>
    <a href="/browse" class="nav-link">Browse Casinos</a>
    <a href="/las-vegas-casinos" class="nav-link" style="color:var(--accent)">Las Vegas</a>
    <button class="dark-toggle" onclick="toggleDark()" id="darkToggle">🌙</button>
  </div>
</nav>
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
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(html);
}

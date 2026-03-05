const POKER_CASINOS = [
  { name: 'Bellagio', slug: 'bellagio', location: 'Las Vegas, NV', note: 'Bobby\'s Room for high stakes. One of the most famous poker rooms in the world.' },
  { name: 'Aria Resort & Casino', slug: 'aria-las-vegas', location: 'Las Vegas, NV', note: 'Home of the ARIA High Roller. 24 tables, considered the best room on the Strip.' },
  { name: 'Wynn Las Vegas', slug: 'wynn-las-vegas', location: 'Las Vegas, NV', note: 'Upscale 27-table room. Great action and soft competition.' },
  { name: 'Caesars Palace', slug: 'caesars-palace', location: 'Las Vegas, NV', note: 'Classic room with good tournaments. Popular with tourists and regulars.' },
  { name: 'The Venetian Las Vegas', slug: 'venetian-las-vegas', location: 'Las Vegas, NV', note: '37 tables. One of the softest games on the Strip. Always running.' },
  { name: 'MGM Grand Las Vegas', slug: 'mgm-grand-las-vegas', location: 'Las Vegas, NV', note: 'Large poker room with regular tournaments and cash games.' },
  { name: 'Golden Nugget Las Vegas', slug: 'golden-nugget-las-vegas', location: 'Downtown Las Vegas, NV', note: 'Best poker room Downtown. Great value, serious players.' },
  { name: "Binion's Gambling Hall", slug: 'binions', location: 'Downtown Las Vegas, NV', note: 'Original home of the WSOP. Old school, serious poker.' },
  { name: 'Mohegan Sun', slug: 'mohegan-sun', location: 'Uncasville, CT', note: '30-table poker room. Busy on weekends, great action.' },
  { name: 'Foxwoods Resort Casino', slug: 'foxwoods', location: 'Mashantucket, CT', note: '54-table poker room. One of the largest on the East Coast.' },
  { name: 'Encore Boston Harbor', slug: 'encore-boston-harbor', location: 'Everett, MA', note: '88-table poker room. Best room in New England.' },
  { name: 'Borgata', slug: 'borgata', location: 'Atlantic City, NJ', note: 'Best poker room in Atlantic City. 85 tables, great tournaments.' },
  { name: 'Turning Stone Resort Casino', slug: 'turning-stone-resort', location: 'Verona, NY', note: 'Best poker room in Upstate NY. Serious action.' },
  { name: 'Seminole Hard Rock Hotel & Casino Hollywood', slug: 'seminole-hard-rock-hollywood', location: 'Hollywood, FL', note: 'Largest poker room in Florida. World-class tournaments.' },
  { name: 'Seminole Hard Rock Hotel & Casino Tampa', slug: 'seminole-hard-rock-tampa', location: 'Tampa, FL', note: 'One of Florida\'s best poker rooms. Great cash games.' },
  { name: "Harrah's New Orleans", slug: 'harrahs-new-orleans', location: 'New Orleans, LA', note: 'Best poker room in the Gulf South. Good mix of tourists and regulars.' },
  { name: 'Beau Rivage Resort & Casino', slug: 'beau-rivage-biloxi', location: 'Biloxi, MS', note: 'Best poker room on the Gulf Coast. Hosts major tournaments.' },
  { name: 'WinStar World Casino', slug: 'winstar-world-casino', location: 'Thackerville, OK', note: 'Massive poker room in the world\'s largest casino.' },
  { name: 'Pechanga Resort Casino', slug: 'pechanga-resort', location: 'Temecula, CA', note: 'Best poker room in Southern California. Serious action.' },
  { name: 'MGM Grand Detroit', slug: 'mgm-grand-detroit', location: 'Detroit, MI', note: 'Best poker room in Michigan. World-class facility.' },
  { name: 'Horseshoe Hammond', slug: 'horseshoe-hammond', location: 'Hammond, IN', note: 'Best poker room near Chicago. World Series of Poker events.' },
  { name: 'MGM National Harbor', slug: 'mgm-national-harbor', location: 'Oxon Hill, MD', note: 'Best poker room in the DC area. Very busy on weekends.' },
];

export default function handler(req, res) {
  const casinosHtml = POKER_CASINOS.map(c => `
    <a href="/${c.slug}" class="casino-card">
      <div class="casino-location">📍 ${c.location}</div>
      <div class="casino-name">${c.name}</div>
      <div class="casino-note">${c.note}</div>
      <div class="casino-cta">Check poker room conditions →</div>
    </a>`).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Casino Poker Room Conditions Right Now | Wait Times & Availability | CasinoConditions</title>
<meta name="description" content="Is the poker room busy right now? Real-time wait times and table availability for the best casino poker rooms in the US — Las Vegas, Atlantic City, Connecticut, Florida and more. Updated live by players.">
<link rel="canonical" href="https://casinoconditions.com/poker-rooms">
<meta property="og:title" content="Casino Poker Room Conditions Right Now | CasinoConditions">
<meta property="og:description" content="Real-time poker room wait times and conditions for top US casinos. Know before you go.">
<script type="application/ld+json">${JSON.stringify({
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Casino Poker Room Conditions",
  "description": "Real-time poker room wait times and conditions for top US casinos",
  "url": "https://casinoconditions.com/poker-rooms"
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
.nav-link:hover,.nav-link.active{color:var(--text)}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 10px;cursor:pointer;font-size:14px;color:var(--text)}
.hero{max-width:800px;margin:60px auto 40px;padding:0 24px;text-align:center}
.hero h1{font-size:36px;font-weight:700;letter-spacing:-1px;line-height:1.2;margin-bottom:16px}
.hero p{font-size:17px;color:var(--muted);max-width:600px;margin:0 auto}
.live-badge{display:inline-flex;align-items:center;gap:6px;font-size:12px;font-weight:600;color:var(--accent);background:var(--accent-light);padding:5px 12px;border-radius:20px;margin-bottom:20px;font-family:'DM Mono',monospace}
.live-dot{width:6px;height:6px;background:var(--accent);border-radius:50%;animation:pulse 1.5s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.4}}
.content{max-width:1100px;margin:0 auto 40px;padding:0 24px}
.section-title{font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.08em;color:var(--muted);margin-bottom:16px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.casino-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:16px}
.casino-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px;text-decoration:none;color:var(--text);transition:border-color .15s,transform .15s;display:block}
.casino-card:hover{border-color:var(--accent);transform:translateY(-2px)}
.casino-location{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;color:var(--muted);margin-bottom:6px}
.casino-name{font-size:16px;font-weight:600;margin-bottom:8px}
.casino-note{font-size:13px;color:var(--muted);line-height:1.5;margin-bottom:12px}
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
    <a href="/poker-rooms" class="nav-link active" style="color:var(--accent)">Poker Rooms</a>
    <button class="dark-toggle" onclick="toggleDark()" id="darkToggle">🌙</button>
  </div>
</nav>
<div class="hero">
  <div class="live-badge"><div class="live-dot"></div> LIVE FLOOR REPORTS</div>
  <h1>Casino Poker Room Conditions Right Now</h1>
  <p>Real-time wait times, table availability, and crowd reports from players at the best poker rooms in the US. Know before you drive out.</p>
</div>
<div class="content">
  <div class="section-title">${POKER_CASINOS.length} poker rooms covered nationwide</div>
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

export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>About — CasinoConditions</title>
<meta name="description" content="CasinoConditions is a crowd-sourced platform for real-time casino floor reports. Know before you go.">
<link rel="canonical" href="https://casinoconditions.com/about">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RYX8RTNPQG"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-RYX8RTNPQG');</script>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f7f7f5;--surface:#fff;--border:#e8e8e4;--text:#1a1a18;--muted:#888880;--accent:#1a6b3c;--accent-light:#edf5f0;--accent-dim:#2d8a52;--radius:12px}
body.dark{--bg:#0f0f0d;--surface:#161614;--border:#2a2a26;--text:#f0ede8;--muted:#6b6860;--accent:#4caf70;--accent-light:#1a2e1f;--accent-dim:#3d9960}
body.dark nav{background:rgba(15,15,13,0.95)}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5;transition:background .2s,color .2s}
nav{background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--text)}
.logo-dot{width:10px;height:10px;background:var(--accent);border-radius:50%}
.logo-text{font-size:15px;font-weight:600;letter-spacing:-.3px}
.logo-text span{color:var(--accent)}
.nav-links{display:flex;align-items:center;gap:24px}
.nav-link{font-size:13px;color:var(--muted);text-decoration:none;transition:color .15s}
.nav-link:hover{color:var(--text)}
.btn{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;text-decoration:none;display:inline-block}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:15px}
.page-wrap{max-width:720px;margin:0 auto;padding:60px 24px}
.page-title{font-size:36px;font-weight:700;letter-spacing:-1px;margin-bottom:8px}
.page-sub{font-size:16px;color:var(--muted);margin-bottom:48px;line-height:1.6}
.section{margin-bottom:40px}
.section h2{font-size:20px;font-weight:600;letter-spacing:-.3px;margin-bottom:12px}
.section p{font-size:15px;color:var(--muted);line-height:1.75;margin-bottom:12px}
.feature-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:32px 0}
.feature-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:20px}
.feature-icon{font-size:24px;margin-bottom:10px}
.feature-title{font-size:14px;font-weight:600;margin-bottom:6px}
.feature-desc{font-size:13px;color:var(--muted);line-height:1.6}
.divider{border:none;border-top:1px solid var(--border);margin:40px 0}
footer{border-top:1px solid var(--border);padding:28px 40px;display:flex;align-items:center;justify-content:space-between;background:var(--surface)}
.footer-links{display:flex;gap:20px}
.footer-link{font-size:12px;color:var(--muted);text-decoration:none}
.footer-link:hover{color:var(--text)}
.footer-copy{font-size:12px;color:var(--muted)}
@media(max-width:768px){.feature-grid{grid-template-columns:1fr}nav{padding:0 16px}.nav-links{display:none}footer{flex-direction:column;gap:12px;text-align:center}}
</style>
</head>
<body>
<nav>
  <a class="logo" href="/"><div class="logo-dot"></div><div class="logo-text">Casino<span>Conditions</span></div></a>
  <div class="nav-links">
    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/browse">Browse Casinos</a>
  </div>
  <div style="display:flex;gap:10px;align-items:center">
    <button class="dark-toggle" id="darkToggle" onclick="toggleDark()">🌙</button>
    <a class="btn" href="/">Post Update</a>
  </div>
</nav>

<div class="page-wrap">
  <div style="display:inline-flex;align-items:center;gap:6px;font-size:11px;font-weight:500;color:var(--accent);background:var(--accent-light);padding:5px 12px;border-radius:20px;margin-bottom:20px;font-family:'DM Mono',monospace;letter-spacing:.5px">● ABOUT US</div>
  <h1 class="page-title">Know before you go.</h1>
  <p class="page-sub">CasinoConditions is a crowd-sourced platform where players share real-time floor updates — so you always know what's happening before you walk through the door.</p>

  <div class="feature-grid">
    <div class="feature-card">
      <div class="feature-icon">🎰</div>
      <div class="feature-title">22 Casinos</div>
      <div class="feature-desc">Coverage across CT, NY, NJ, MA, RI, and PA — from Foxwoods to Atlantic City.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">⚡</div>
      <div class="feature-title">Real-Time</div>
      <div class="feature-desc">Posts from real players updated live. Refreshes every 30 seconds automatically.</div>
    </div>
    <div class="feature-card">
      <div class="feature-icon">🏆</div>
      <div class="feature-title">CC Score</div>
      <div class="feature-desc">Our proprietary 0–100 score weighing activity, weather, timing, and community signals.</div>
    </div>
  </div>

  <hr class="divider">

  <div class="section">
    <h2>Why we built this</h2>
    <p>There's nothing worse than driving 45 minutes to a casino and finding the poker room dead, the tables packed beyond reason, or the parking lot a nightmare. We built CasinoConditions to solve that — a simple place where players help each other out.</p>
    <p>The concept is simple: if you're at a casino, spend 10 seconds letting others know what's happening. Is the 1/2 NL game running? Are the tables busy? Is the high limit room worth it tonight? That little bit of info is incredibly valuable to someone deciding whether to make the trip.</p>
  </div>

  <div class="section">
    <h2>How the CC Score works</h2>
    <p>The CC Score (0–100) is our proprietary algorithm that weighs five factors to give you a snapshot of current conditions at any casino:</p>
    <p><strong>Activity (30pts)</strong> — How many updates have been posted in the last 24 hours and 7 days.<br>
    <strong>Community (20pts)</strong> — Engagement signals like helpful votes on posts.<br>
    <strong>Google Rating (25pts)</strong> — The casino's overall Google rating from verified reviews.<br>
    <strong>Weather (15pts)</strong> — Current weather conditions. Bad weather = more people inside = better action.<br>
    <strong>Timing (10pts)</strong> — Time of day and day of week. Weekend nights score higher.</p>
  </div>

  <div class="section">
    <h2>Get in touch</h2>
    <p>Have feedback, a partnership inquiry, or want to report an issue? Reach out at <a href="mailto:hello@casinoconditions.com" style="color:var(--accent)">hello@casinoconditions.com</a>.</p>
  </div>
</div>

<footer>
  <div style="display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600"><div class="logo-dot" style="opacity:.7"></div>Casino<span style="color:var(--accent)">Conditions</span></div>
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
  res.setHeader('Content-Type','text/html');
  res.setHeader('Cache-Control','s-maxage=3600, stale-while-revalidate');
  res.status(200).send(html);
}

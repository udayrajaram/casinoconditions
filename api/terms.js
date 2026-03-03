export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Terms of Service — CasinoConditions</title>
<link rel="canonical" href="https://casinoconditions.com/terms">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RYX8RTNPQG"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-RYX8RTNPQG');</script>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f7f7f5;--surface:#fff;--border:#e8e8e4;--text:#1a1a18;--muted:#888880;--accent:#1a6b3c;--accent-light:#edf5f0;--radius:12px}
body.dark{--bg:#0f0f0d;--surface:#161614;--border:#2a2a26;--text:#f0ede8;--muted:#6b6860;--accent:#4caf70;--accent-light:#1a2e1f}
body.dark nav{background:rgba(15,15,13,0.95)}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5;transition:background .2s,color .2s}
nav{background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--text)}
.logo-dot{width:10px;height:10px;background:var(--accent);border-radius:50%}
.logo-text{font-size:15px;font-weight:600;letter-spacing:-.3px}
.logo-text span{color:var(--accent)}
.nav-links{display:flex;align-items:center;gap:24px}
.nav-link{font-size:13px;color:var(--muted);text-decoration:none}
.nav-link:hover{color:var(--text)}
.btn{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:500;text-decoration:none;display:inline-block}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:15px}
.page-wrap{max-width:720px;margin:0 auto;padding:60px 24px}
.page-title{font-size:36px;font-weight:700;letter-spacing:-1px;margin-bottom:8px}
.last-updated{font-size:13px;color:var(--muted);margin-bottom:48px}
h2{font-size:18px;font-weight:600;margin:32px 0 10px;letter-spacing:-.2px}
p{font-size:15px;color:var(--muted);line-height:1.75;margin-bottom:12px}
ul{padding-left:20px;margin-bottom:12px}
li{font-size:15px;color:var(--muted);line-height:1.75;margin-bottom:4px}
a{color:var(--accent)}
.divider{border:none;border-top:1px solid var(--border);margin:40px 0}
footer{border-top:1px solid var(--border);padding:28px 40px;display:flex;align-items:center;justify-content:space-between;background:var(--surface)}
.footer-link{font-size:12px;color:var(--muted);text-decoration:none;margin-left:20px}
.footer-link:hover{color:var(--text)}
.footer-copy{font-size:12px;color:var(--muted)}
@media(max-width:768px){nav{padding:0 16px}.nav-links{display:none}footer{flex-direction:column;gap:12px;text-align:center}}
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
  <h1 class="page-title">Terms of Service</h1>
  <p class="last-updated">Last updated: March 3, 2026</p>

  <p>Welcome to CasinoConditions. By accessing or using our website at casinoconditions.com, you agree to be bound by these Terms of Service. Please read them carefully.</p>

  <h2>1. Use of the Service</h2>
  <p>CasinoConditions is a crowd-sourced information platform. You may use our service to read and post casino floor updates for personal, non-commercial purposes. You agree not to:</p>
  <ul>
    <li>Post false, misleading, or defamatory content</li>
    <li>Harass, threaten, or abuse other users</li>
    <li>Post spam, advertisements, or promotional content without permission</li>
    <li>Attempt to disrupt or compromise the security of our platform</li>
    <li>Use automated tools to scrape or bulk-post content</li>
    <li>Impersonate casino staff, employees, or other users</li>
  </ul>

  <h2>2. User Content</h2>
  <p>When you post content on CasinoConditions, you grant us a non-exclusive, royalty-free, worldwide license to display and distribute that content as part of our service. You are solely responsible for the accuracy and legality of anything you post.</p>
  <p>We reserve the right to remove any content that violates these terms or that we determine, in our sole discretion, is harmful, offensive, or otherwise inappropriate.</p>

  <h2>3. Accuracy of Information</h2>
  <p>CasinoConditions aggregates user-submitted content and third-party data (including Google ratings and weather). We do not verify the accuracy of user-submitted posts and make no warranty that the information on our platform is current, complete, or accurate. Always verify conditions directly with the casino before making travel decisions.</p>

  <h2>4. Gambling Disclaimer</h2>
  <p>CasinoConditions is an informational platform only. We do not facilitate gambling and are not responsible for any gambling decisions made based on content posted on our site. Gambling involves risk. Please gamble responsibly. If you or someone you know has a gambling problem, call the National Problem Gambling Helpline at 1-800-522-4700.</p>

  <h2>5. Intellectual Property</h2>
  <p>The CasinoConditions name, logo, CC Score algorithm, and all original content on this site are our intellectual property. You may not reproduce or redistribute them without our express written permission.</p>

  <h2>6. Limitation of Liability</h2>
  <p>To the fullest extent permitted by law, CasinoConditions and its operators shall not be liable for any indirect, incidental, or consequential damages arising from your use of the service. Our total liability to you for any claims shall not exceed $100.</p>

  <h2>7. Changes to Terms</h2>
  <p>We may update these terms from time to time. Continued use of the service after changes are posted constitutes your acceptance of the revised terms.</p>

  <h2>8. Contact</h2>
  <p>Questions about these terms? Email us at <a href="mailto:hello@casinoconditions.com">hello@casinoconditions.com</a>.</p>
</div>

<footer>
  <div style="display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600"><div class="logo-dot" style="opacity:.7"></div>Casino<span style="color:var(--accent)">Conditions</span></div>
  <div><a class="footer-link" href="/about">About</a><a class="footer-link" href="/terms">Terms</a><a class="footer-link" href="/privacy">Privacy</a></div>
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

export default function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Privacy Policy — CasinoConditions</title>
<link rel="canonical" href="https://casinoconditions.com/privacy">
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
  <h1 class="page-title">Privacy Policy</h1>
  <p class="last-updated">Last updated: March 3, 2026</p>

  <p>CasinoConditions ("we", "us", or "our") is committed to protecting your privacy. This policy explains what information we collect, how we use it, and your rights.</p>

  <h2>1. Information We Collect</h2>
  <p><strong>Content you post:</strong> When you submit a floor update, we store the post content, selected category, casino, and whether you chose to post anonymously. If you choose not to post anonymously, we also store the display name you provide.</p>
  <p><strong>Usage data:</strong> We use Google Analytics (GA4) to collect anonymized data about how visitors use our site, including pages visited, time on site, and general geographic location (country/region level). This data does not identify you personally.</p>
  <p><strong>No account required:</strong> We do not require you to create an account or provide an email address to use CasinoConditions.</p>

  <h2>2. How We Use Your Information</h2>
  <ul>
    <li>To display your posts to other users on the platform</li>
    <li>To improve the site based on usage patterns</li>
    <li>To detect and prevent abuse or spam</li>
    <li>To calculate the CC Score for each casino</li>
  </ul>

  <h2>3. Third-Party Services</h2>
  <p>We use the following third-party services:</p>
  <ul>
    <li><strong>Supabase</strong> — our database provider, stores post content</li>
    <li><strong>Google Analytics</strong> — anonymized site usage analytics</li>
    <li><strong>Google Places API</strong> — to fetch casino ratings and reviews</li>
    <li><strong>Google Weather API</strong> — to fetch current weather conditions</li>
    <li><strong>Vercel</strong> — our hosting provider</li>
  </ul>
  <p>Each of these services has their own privacy policy. We encourage you to review them.</p>

  <h2>4. Cookies</h2>
  <p>We use a single localStorage key ("theme") to remember your dark/light mode preference. We do not use tracking cookies or advertising cookies. Google Analytics may set its own cookies for analytics purposes.</p>

  <h2>5. Anonymous Posting</h2>
  <p>When you post with the "Post anonymously" toggle enabled, your display name is stored as "Anonymous" in our database. We do not store any other identifying information about anonymous posters. Note that your IP address may be logged by our hosting provider (Vercel) for security purposes.</p>

  <h2>6. Data Retention</h2>
  <p>Posts are retained indefinitely unless removed for violating our terms of service. Seeded/sample posts may be periodically refreshed. You may request deletion of a specific post by contacting us.</p>

  <h2>7. Your Rights</h2>
  <p>You have the right to request access to or deletion of any personal data we hold about you. Since we don't collect accounts or emails, the most relevant right is requesting removal of posts you've made. Contact us at <a href="mailto:hello@casinoconditions.com">hello@casinoconditions.com</a> with details of the post to remove.</p>

  <h2>8. Children's Privacy</h2>
  <p>CasinoConditions is not intended for users under 21 years of age. We do not knowingly collect information from anyone under 21.</p>

  <h2>9. Changes to This Policy</h2>
  <p>We may update this privacy policy from time to time. Changes will be posted on this page with a revised date.</p>

  <h2>10. Contact</h2>
  <p>Privacy questions? Email us at <a href="mailto:hello@casinoconditions.com">hello@casinoconditions.com</a>.</p>
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

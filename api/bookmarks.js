const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export default async function handler(req, res) {
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Saved Casinos | CasinoConditions</title>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f7f7f5;--surface:#fff;--border:#e8e8e4;--text:#1a1a18;--muted:#888880;--accent:#1a6b3c;--accent-light:#edf5f0;--radius:12px}
body.dark{--bg:#0f0f0d;--surface:#161614;--border:#2a2a26;--text:#f0ede8;--muted:#6b6860;--accent:#4caf70;--accent-light:#1a2e1f}
body.dark nav,body.dark .card{background:var(--surface)}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);min-height:100vh}
nav{background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
body.dark nav{background:rgba(15,15,13,0.95)}
.logo{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--text)}
.logo-dot{width:10px;height:10px;background:var(--accent);border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.85)}}
.logo-text{font-size:15px;font-weight:600;letter-spacing:-.3px}
.logo-text span{color:var(--accent)}
.nav-links{display:flex;align-items:center;gap:24px}
.nav-link{font-size:13px;color:var(--muted);text-decoration:none;transition:color .15s}
.nav-link:hover{color:var(--text)}
.btn{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;text-decoration:none;display:inline-flex;align-items:center}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:15px}
.btn-outline{background:transparent;color:var(--text);border:1px solid var(--border);border-radius:8px;padding:7px 14px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif}
.page-header{background:#fff;border-bottom:1px solid var(--border);padding:36px 40px 28px}
body.dark .page-header{background:var(--surface)}
.page-header-inner{max-width:900px;margin:0 auto}
.page-title{font-size:28px;font-weight:700;letter-spacing:-.8px;margin-bottom:6px}
.page-sub{font-size:14px;color:var(--muted)}
.wrap{max-width:900px;margin:0 auto;padding:32px 24px}
.card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:20px 22px;margin-bottom:12px;display:flex;align-items:center;gap:16px;transition:all .2s;text-decoration:none;color:var(--text)}
.card:hover{border-color:var(--accent);box-shadow:0 4px 16px rgba(26,107,60,.08);transform:translateY(-1px)}
.card-emoji{font-size:28px;flex-shrink:0}
.card-body{flex:1;min-width:0}
.card-name{font-size:15px;font-weight:600;letter-spacing:-.2px;margin-bottom:3px}
.card-loc{font-size:12px;color:var(--muted);margin-bottom:6px}
.card-status{font-size:12px;font-weight:500;display:flex;align-items:center;gap:6px}
.dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.dot-busy{background:#1a6b3c}.dot-moderate{background:#e6a817}.dot-quiet{background:#e05c5c}.dot-unknown{background:#ccc}
.card-right{text-align:right;flex-shrink:0}
.card-updates{font-size:12px;color:var(--muted)}
.card-last{font-size:11px;color:var(--muted);margin-top:3px}
.remove-btn{background:none;border:none;cursor:pointer;font-size:16px;color:var(--muted);padding:4px 8px;border-radius:6px;transition:all .15s;margin-top:6px}
.remove-btn:hover{color:#e05c5c;background:#fef2f2}
.empty{text-align:center;padding:80px 24px}
.empty-emoji{font-size:48px;margin-bottom:16px}
.empty h2{font-size:20px;font-weight:700;margin-bottom:8px}
.empty p{font-size:14px;color:var(--muted);margin-bottom:24px}
.spinner{width:28px;height:28px;border:3px solid var(--border);border-top-color:var(--accent);border-radius:50%;animation:spin .7s linear infinite;margin:0 auto}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-wrap{text-align:center;padding:60px 24px}
@media(max-width:768px){nav{padding:0 16px}.nav-links{display:none}.page-header{padding:24px 20px}.card{flex-wrap:wrap}.card-right{width:100%;display:flex;justify-content:space-between;align-items:center}}
</style>
</head>
<body>
<nav>
  <a class="logo" href="/">
    <div class="logo-dot"></div>
    <div class="logo-text">Casino<span>Conditions</span></div>
  </a>
  <div class="nav-links">
    <a class="nav-link" href="/">Home</a>
    <a class="nav-link" href="/browse">Browse Casinos</a>
    <a class="nav-link" href="/poker-rooms">Poker Rooms</a>
    <a class="nav-link" href="/las-vegas-casinos">Las Vegas</a>
    <a class="nav-link" href="/bookmarks" style="color:var(--accent);font-weight:600">⭐ Saved</a>
  </div>
  <div style="display:flex;align-items:center;gap:10px">
    <button class="dark-toggle" id="darkToggle" onclick="toggleDark()" title="Toggle dark mode">🌙</button>
    <span id="navProfileBadge" style="display:none;align-items:center;gap:6px;font-size:13px;color:var(--text);cursor:pointer" onclick="window.location=\'/bookmarks\'">
      <span id="navRankEmoji"></span><span id="navUsername" style="font-weight:600"></span>
    </span>
    <button class="btn-outline" id="signInBtn" onclick="showSignInModal()" style="font-size:13px;padding:7px 14px">Sign in</button>
    <button class="btn nav-post-btn" onclick="window.location='/'">+ Post Update</button>
  </div>
</nav>
<div class="mobile-profile-bar" id="mobileProfileBar">
  <div style="display:flex;align-items:center;gap:10px">
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
<div class="page-header">
  <div class="page-header-inner">
    <h1 class="page-title">⭐ Saved Casinos</h1>
    <p class="page-sub" id="pageSubtitle">Your bookmarked casinos with live floor conditions</p>
  </div>
</div>
<div class="wrap" id="mainWrap">
  <div class="loading-wrap"><div class="spinner"></div></div>
</div>
<script>
const SUPABASE_URL = '${SUPABASE_URL}';
const SUPABASE_KEY = '${SUPABASE_KEY}';

function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('darkToggle').textContent = isDark ? '☀️' : '🌙';
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('darkToggle').textContent = '☀️';
}

// Restore sign-in button
(function() {
  const u = localStorage.getItem('cc_username') || '';
  const e = localStorage.getItem('cc_email') || '';
  if (localStorage.getItem('cc_signed_in') && (u || e)) {
    const btn = document.getElementById('signInBtn');
    if (btn) btn.textContent = '👤 ' + (u || e.split('@')[0]);
  }
})();

const CASINO_DATA = [
  {slug:'mohegan-sun',name:'Mohegan Sun',location:'Uncasville, CT'},
  {slug:'foxwoods',name:'Foxwoods Resort Casino',location:'Mashantucket, CT'},
  {slug:'bellagio',name:'Bellagio',location:'Las Vegas, NV'},
  {slug:'mgm-grand-las-vegas',name:'MGM Grand Las Vegas',location:'Las Vegas, NV'},
  {slug:'caesars-palace',name:'Caesars Palace',location:'Las Vegas, NV'},
  {slug:'venetian-las-vegas',name:'The Venetian Las Vegas',location:'Las Vegas, NV'},
  {slug:'wynn-las-vegas',name:'Wynn Las Vegas',location:'Las Vegas, NV'},
  {slug:'aria-las-vegas',name:'Aria Resort & Casino',location:'Las Vegas, NV'},
  {slug:'cosmopolitan-las-vegas',name:'Cosmopolitan of Las Vegas',location:'Las Vegas, NV'},
  {slug:'borgata',name:'Borgata',location:'Atlantic City, NJ'},
  {slug:'encore-boston-harbor',name:'Encore Boston Harbor',location:'Everett, MA'},
  {slug:'hard-rock-ac',name:'Hard Rock Atlantic City',location:'Atlantic City, NJ'},
  {slug:'mount-airy-casino',name:'Mount Airy Casino',location:'Mount Pocono, PA'},
  {slug:'parx-casino',name:'Parx Casino',location:'Bensalem, PA'},
  {slug:'wind-creek-bethlehem',name:'Wind Creek Bethlehem',location:'Bethlehem, PA'},
  {slug:'mgm-grand-detroit',name:'MGM Grand Detroit',location:'Detroit, MI'},
  {slug:'motorcity-casino',name:'MotorCity Casino Hotel',location:'Detroit, MI'},
  {slug:'seminole-hard-rock-hollywood',name:'Seminole Hard Rock Hollywood',location:'Hollywood, FL'},
  {slug:'rivers-casino-des-plaines',name:'Rivers Casino Des Plaines',location:'Des Plaines, IL'},
  {slug:'golden-nugget-las-vegas',name:'Golden Nugget Las Vegas',location:'Downtown Las Vegas, NV'},
];

function getCasinoInfo(slug) {
  return CASINO_DATA.find(c => c.slug === slug) || { slug, name: slug.replace(/-/g,' ').replace(/\\b\\w/g,l=>l.toUpperCase()), location: '' };
}

async function getRecentActivity(casinoName) {
  try {
    const since = new Date(Date.now() - 24*60*60*1000).toISOString();
    const r = await fetch(\`\${SUPABASE_URL}/rest/v1/reactions?casino=eq.\${encodeURIComponent(casinoName)}&created_at=gte.\${since}&select=reaction&order=created_at.desc&limit=10\`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    });
    const reactions = await r.json();

    const r2 = await fetch(\`\${SUPABASE_URL}/rest/v1/posts?casino=eq.\${encodeURIComponent(casinoName)}&created_at=gte.\${since}&select=created_at&order=created_at.desc&limit=20\`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    });
    const posts = await r2.json();
    const postCount = posts?.length || 0;

    // Tally reactions
    const tally = { Busy: 0, Moderate: 0, Quiet: 0 };
    (reactions || []).forEach(r => { if (tally[r.reaction] !== undefined) tally[r.reaction]++; });
    const total = tally.Busy + tally.Moderate + tally.Quiet;
    let status = 'No reports today', dotClass = 'dot-unknown';
    if (total > 0) {
      const top = Object.entries(tally).sort((a,b) => b[1]-a[1])[0][0];
      status = top;
      dotClass = top === 'Busy' ? 'dot-busy' : top === 'Moderate' ? 'dot-moderate' : 'dot-quiet';
    } else if (postCount > 0) {
      status = postCount + ' post' + (postCount > 1 ? 's' : '') + ' today';
      dotClass = 'dot-moderate';
    }

    let lastReport = '';
    if (posts?.[0]?.created_at) {
      const diff = Math.abs(Date.now() - new Date(posts[0].created_at).getTime());
      const mins = Math.floor(diff / 60000);
      lastReport = mins < 60 ? \`\${mins}m ago\` : mins < 1440 ? \`\${Math.floor(mins/60)}h ago\` : \`\${Math.floor(mins/1440)}d ago\`;
    }

    return { status, dotClass, total, postCount, lastReport };
  } catch(e) {
    return { status: 'Unknown', dotClass: 'dot-unknown', total: 0, lastReport: '' };
  }
}

async function render() {
  const bookmarks = JSON.parse(localStorage.getItem('cc_bookmarks') || '[]');
  const wrap = document.getElementById('mainWrap');

  if (bookmarks.length === 0) {
    wrap.innerHTML = \`<div class="empty">
      <div class="empty-emoji">⭐</div>
      <h2>No saved casinos yet</h2>
      <p>Hit the "Save" button on any casino page to bookmark it here for quick access.</p>
      <a class="btn" href="/browse">Browse Casinos</a>
    </div>\`;
    document.getElementById('pageSubtitle').textContent = 'Save casinos to track them here';
    return;
  }

  document.getElementById('pageSubtitle').textContent = \`\${bookmarks.length} saved casino\${bookmarks.length !== 1 ? 's' : ''} · live conditions\`;

  // Render skeleton first
  wrap.innerHTML = bookmarks.map(slug => {
    const info = getCasinoInfo(slug);
    return \`<div class="card" id="card-\${slug}" onclick="window.location='/\${slug}'" style="cursor:pointer">
      <div class="card-emoji">🎰</div>
      <div class="card-body">
        <div class="card-name">\${info.name}</div>
        <div class="card-loc">📍 \${info.location}</div>
        <div class="card-status"><div class="dot dot-unknown"></div><span>Loading...</span></div>
      </div>
      <div class="card-right" onclick="event.stopPropagation()">
        <div class="card-updates" id="updates-\${slug}">—</div>
        <div class="card-last" id="last-\${slug}"></div>
        <button class="remove-btn" onclick="removeBookmark(event, '\${slug}')" title="Remove bookmark">✕</button>
      </div>
    </div>\`;
  }).join('');

  // Fetch live data for each casino
  await Promise.all(bookmarks.map(async slug => {
    const info = getCasinoInfo(slug);
    const activity = await getRecentActivity(info.name);
    const card = document.getElementById('card-' + slug);
    if (!card) return;
    const statusEl = card.querySelector('.card-status');
    statusEl.innerHTML = \`<div class="dot \${activity.dotClass}"></div><span>\${activity.status}</span>\`;
    const updatesText = activity.total > 0 ? activity.total + ' reactions today' : activity.postCount > 0 ? activity.postCount + ' floor update' + (activity.postCount > 1 ? 's' : '') + ' today' : 'No activity today';
    document.getElementById('updates-' + slug).textContent = updatesText;
    if (activity.lastReport) document.getElementById('last-' + slug).textContent = 'Last report: ' + activity.lastReport;
    // Set emoji based on status
    card.querySelector('.card-emoji').textContent = activity.status === 'Busy' ? '🔥' : activity.status === 'Moderate' ? '🟡' : activity.status === 'Quiet' ? '😴' : '🎰';
  }));
}

function removeBookmark(e, slug) {
  e.preventDefault();
  e.stopPropagation();
  const bookmarks = JSON.parse(localStorage.getItem('cc_bookmarks') || '[]');
  const updated = bookmarks.filter(s => s !== slug);
  localStorage.setItem('cc_bookmarks', JSON.stringify(updated));
  const card = document.getElementById('card-' + slug);
  if (card) { card.style.opacity = '0'; card.style.transform = 'translateX(20px)'; card.style.transition = 'all .3s'; setTimeout(() => render(), 300); }
}

render();
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
  res.status(200).send(html);
}

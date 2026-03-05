const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export default async function handler(req, res) {
  // Handle PKCE code exchange server-side if ?code= is in query params
  const code = req.query.code;

  if (code) {
    try {
      const tokenRes = await fetch(`${SUPABASE_URL}/auth/v1/token?grant_type=pkce`, {
        method: 'POST',
        headers: { 'apikey': SUPABASE_KEY, 'Content-Type': 'application/json' },
        body: JSON.stringify({ auth_code: code })
      });
      const tokenData = await tokenRes.json();
      console.log('PKCE token exchange:', JSON.stringify(tokenData).slice(0,200));
      if (tokenData.access_token) {
        const email = encodeURIComponent(tokenData.user?.email || '');
        return res.redirect(302, `/api/auth-callback#access_token=${tokenData.access_token}&email=${email}`);
      }
      console.error('PKCE failed:', JSON.stringify(tokenData));
    } catch(e) {
      console.error('PKCE exchange error:', e);
    }
  }

  const SUPA_URL = process.env.SUPABASE_URL;
  const SUPA_KEY = process.env.SUPABASE_KEY;

  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Signing you in... | CasinoConditions</title>
<style>
  *{box-sizing:border-box}
  body{font-family:'DM Sans',-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f7f7f5;margin:0}
  .box{text-align:center;padding:48px 40px;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.08);max-width:380px;width:90%}
  .logo{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:28px}
  .logo-dot{width:10px;height:10px;border-radius:50%;background:#1a6b3c}
  .logo-text{font-size:16px;font-weight:600;color:#1a1a18}
  .logo-text span{color:#1a6b3c}
  .emoji{font-size:48px;margin-bottom:16px;display:block}
  h2{font-size:20px;font-weight:700;margin:0 0 8px;color:#1a1a18}
  p{font-size:14px;color:#888;margin:0 0 4px;line-height:1.6}
  .rank{font-size:15px;font-weight:600;color:#1a6b3c;margin-top:16px;padding:10px 16px;background:#edf5f0;border-radius:8px;display:none}
  .debug{font-size:11px;color:#aaa;margin-top:12px;word-break:break-all;text-align:left;background:#f7f7f5;padding:8px;border-radius:6px}
  .spinner{width:32px;height:32px;border:3px solid #e8e8e4;border-top-color:#1a6b3c;border-radius:50%;animation:spin .7s linear infinite;margin:0 auto 20px}
  @keyframes spin{to{transform:rotate(360deg)}}
</style>
</head>
<body>
<div class="box">
  <div class="logo"><div class="logo-dot"></div><div class="logo-text">Casino<span>Conditions</span></div></div>
  <div class="spinner" id="spinner"></div>
  <span class="emoji" id="emoji" style="display:none"></span>
  <h2 id="title">Signing you in...</h2>
  <p id="sub">Linking your account and points</p>
  <div class="rank" id="rankMsg"></div>
  <div class="debug" id="debugMsg">Loading...</div>
</div>
<script>
function getCookieId() {
  let id = document.cookie.split('; ').find(r => r.startsWith('cc_uid='))?.split('=')[1];
  if (!id) {
    id = 'cc_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    document.cookie = 'cc_uid=' + id + ';max-age=31536000;path=/;SameSite=Lax';
  }
  return id;
}
function show(e, t, s) {
  document.getElementById('spinner').style.display = 'none';
  document.getElementById('emoji').style.display = 'block';
  document.getElementById('emoji').textContent = e;
  document.getElementById('title').textContent = t;
  document.getElementById('sub').textContent = s;
}
function dbg(msg) {
  document.getElementById('debugMsg').textContent = msg;
  console.log('[callback]', msg);
}

async function handleCallback() {
  const hash = window.location.hash.slice(1);
  const hp = new URLSearchParams(hash);
  const qp = new URLSearchParams(window.location.search);

  const accessToken = hp.get('access_token') || qp.get('access_token');
  const emailFromUrl = hp.get('email') ? decodeURIComponent(hp.get('email')) : '';
  const error = hp.get('error_description') || hp.get('error') || qp.get('error_description') || qp.get('error');
  const code = qp.get('code');

  dbg('URL: ' + window.location.href.slice(0,100) + ' | token:' + (accessToken?'YES':'NO') + ' code:' + (code?'YES':'NO'));

  if (error) {
    show('❌', 'Sign-in failed', decodeURIComponent(error));
    setTimeout(() => window.location = '/', 4000);
    return;
  }

  if (code && !accessToken) {
    dbg('PKCE code found, exchanging...');
    try {
      const r = await fetch('${SUPA_URL}/auth/v1/token?grant_type=pkce', {
        method: 'POST',
        headers: { 'apikey': '${SUPA_KEY}', 'Content-Type': 'application/json' },
        body: JSON.stringify({ auth_code: code })
      });
      const d = await r.json();
      dbg('PKCE response: ' + JSON.stringify(d).slice(0,120));
      if (d.access_token) {
        return finishSignIn(d.access_token, d.user?.email || '');
      }
      show('❌', 'Sign-in failed', d.error_description || d.msg || 'Code exchange failed');
      setTimeout(() => window.location = '/', 4000);
    } catch(e) {
      dbg('PKCE error: ' + e.message);
      show('❌', 'Connection error', 'Please try again.');
      setTimeout(() => window.location = '/', 4000);
    }
    return;
  }

  if (!accessToken) {
    show('❌', 'Link expired', 'Magic links expire after 1 hour. Please request a new one.');
    dbg('No token/code. Full URL: ' + window.location.href);
    setTimeout(() => window.location = '/', 4000);
    return;
  }

  await finishSignIn(accessToken, emailFromUrl);
}

async function finishSignIn(token, knownEmail) {
  const cookieId = getCookieId();
  dbg('Finishing sign in... cookieId=' + cookieId.slice(0,16));
  try {
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'callback', access_token: token, cookie_id: cookieId })
    });
    const data = await r.json();
    dbg('Profile response: ' + JSON.stringify(data).slice(0,120));

    const email = data.profile?.email || knownEmail;
    if (email) {
      localStorage.setItem('cc_email', email);
      localStorage.setItem('cc_signed_in', '1');
      dbg('Saved to localStorage: ' + email);

      const pts = data.profile?.points || 0;
      const rank = data.profile?.rank || 'Rail Bird';
      const emojis = {'Rail Bird':'🎰','Fish':'🐟','Regular':'♠️','Floor Regular':'🎲','High Roller':'💰','Whale':'👑'};
      show('✅', "You're signed in!", 'Welcome! Your points are linked.');
      const rm = document.getElementById('rankMsg');
      rm.style.display = 'block';
      rm.textContent = (emojis[rank]||'🎰') + ' ' + rank + ' · ' + pts + ' pts';
      setTimeout(() => window.location = '/', 2000);
    } else {
      dbg('No email in response: ' + JSON.stringify(data));
      show('❌', 'Could not load profile', data.error || 'Please try again.');
      setTimeout(() => window.location = '/', 4000);
    }
  } catch(e) {
    dbg('finishSignIn error: ' + e.message);
    show('❌', 'Connection error', e.message);
    setTimeout(() => window.location = '/', 4000);
  }
}

handleCallback();
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}

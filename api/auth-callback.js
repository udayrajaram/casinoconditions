const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export default async function handler(req, res) {
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Signing you in... | CasinoConditions</title>
<style>
  *{box-sizing:border-box}
  body{font-family:'DM Sans',-apple-system,sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f7f7f5;margin:0}
  .box{text-align:center;padding:48px 40px;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.08);max-width:360px;width:90%}
  .logo{display:flex;align-items:center;justify-content:center;gap:8px;margin-bottom:28px}
  .logo-dot{width:10px;height:10px;border-radius:50%;background:#1a6b3c}
  .logo-text{font-size:16px;font-weight:600;color:#1a1a18}
  .logo-text span{color:#1a6b3c}
  .emoji{font-size:48px;margin-bottom:16px;display:block}
  h2{font-size:20px;font-weight:700;margin:0 0 8px;color:#1a1a18}
  p{font-size:14px;color:#888;margin:0 0 4px;line-height:1.6}
  .rank{font-size:15px;font-weight:600;color:#1a6b3c;margin-top:16px;padding:10px 16px;background:#edf5f0;border-radius:8px;display:none}
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
</div>
<script>
async function getCookieId() {
  // Get existing cookie or create new one
  let id = document.cookie.split('; ').find(r => r.startsWith('cc_uid='))?.split('=')[1];
  if (!id) {
    id = 'cc_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    document.cookie = 'cc_uid=' + id + ';max-age=31536000;path=/;SameSite=Lax';
  }
  return id;
}

function show(emoji, title, sub) {
  document.getElementById('spinner').style.display = 'none';
  document.getElementById('emoji').style.display = 'block';
  document.getElementById('emoji').textContent = emoji;
  document.getElementById('title').textContent = title;
  document.getElementById('sub').textContent = sub;
}

async function handleCallback() {
  // Parse hash fragment — Supabase puts access_token here
  const hash = window.location.hash.slice(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get('access_token');
  const errorDesc = params.get('error_description') || params.get('error');

  if (errorDesc) {
    show('❌', 'Sign-in failed', decodeURIComponent(errorDesc));
    setTimeout(() => window.location = '/', 3000);
    return;
  }

  if (!accessToken) {
    show('❌', 'Link expired', 'Magic links expire after 1 hour. Please request a new one from a casino page.');
    setTimeout(() => window.location = '/', 3000);
    return;
  }

  const cookieId = await getCookieId();

  try {
    // Call our auth API to merge the session with the cookie profile
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        action: 'callback',
        access_token: accessToken,
        cookie_id: cookieId
      })
    });

    const data = await r.json();

    if (data.success) {
      const pts = data.profile?.points || 0;
      const rankEmojis = { 'Rail Bird':'🎰','Fish':'🐟','Regular':'♠️','Floor Regular':'🎲','High Roller':'💰','Whale':'👑' };
      const rank = data.profile?.rank || 'Rail Bird';
      const emoji = rankEmojis[rank] || '🎰';

      show('✅', "You're signed in!", 'Your points are now linked to your account.');

      const rankMsg = document.getElementById('rankMsg');
      rankMsg.style.display = 'block';
      rankMsg.textContent = emoji + ' ' + rank + ' · ' + pts + ' pts';

      // Store email in sessionStorage so casino page can read it immediately
      sessionStorage.setItem('cc_email', data.profile?.email || '');
      sessionStorage.setItem('cc_signed_in', '1');

      setTimeout(() => window.location = '/', 2000);
    } else {
      show('❌', 'Something went wrong', data.error || 'Please try again from the casino page.');
      setTimeout(() => window.location = '/', 3000);
    }
  } catch(e) {
    show('❌', 'Connection error', 'Please try again.');
    setTimeout(() => window.location = '/', 3000);
  }
}

handleCallback();
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.status(200).send(html);
}

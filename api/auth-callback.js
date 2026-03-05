const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export default async function handler(req, res) {
  const { cookie_id, access_token, refresh_token, type } = req.query;

  // Supabase sends token via URL hash on client side - we need a small HTML page
  // that reads the hash fragment and calls our API to merge the session
  const html = `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Signing you in... | CasinoConditions</title>
<style>
  body{font-family:'DM Sans',sans-serif;display:flex;align-items:center;justify-content:center;min-height:100vh;background:#f7f7f5;margin:0}
  .box{text-align:center;padding:40px;background:#fff;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.08);max-width:360px;width:90%}
  .emoji{font-size:48px;margin-bottom:16px}
  h2{font-size:20px;font-weight:700;margin-bottom:8px;color:#1a1a18}
  p{font-size:14px;color:#888;margin-bottom:0}
  .rank{font-size:16px;font-weight:600;color:#1a6b3c;margin-top:16px;display:none}
</style>
</head>
<body>
<div class="box">
  <div class="emoji" id="emoji">🎰</div>
  <h2 id="title">Signing you in...</h2>
  <p id="sub">Linking your account and points</p>
  <div class="rank" id="rankMsg"></div>
</div>
<script>
async function handleCallback() {
  // Get cookie ID
  const cookieId = document.cookie.split('; ').find(r => r.startsWith('cc_uid='))?.split('=')[1];
  
  // Get access token from URL hash (Supabase puts it there)
  const hash = window.location.hash.slice(1);
  const params = new URLSearchParams(hash);
  const accessToken = params.get('access_token');
  
  if (!accessToken) {
    document.getElementById('emoji').textContent = '❌';
    document.getElementById('title').textContent = 'Link expired';
    document.getElementById('sub').textContent = 'Magic links expire after 1 hour. Please request a new one.';
    setTimeout(() => window.location = '/', 3000);
    return;
  }

  try {
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'callback', access_token: accessToken, cookie_id: cookieId })
    });
    const data = await r.json();
    
    if (data.success) {
      document.getElementById('emoji').textContent = '✅';
      document.getElementById('title').textContent = 'You\'re in!';
      document.getElementById('sub').textContent = 'Your points are now linked to ' + data.profile.email;
      const rankMsg = document.getElementById('rankMsg');
      rankMsg.style.display = 'block';
      rankMsg.textContent = '🎰 Rail Bird · ' + (data.profile.points || 0) + ' pts';
      setTimeout(() => window.location = '/', 2500);
    } else {
      document.getElementById('emoji').textContent = '❌';
      document.getElementById('title').textContent = 'Something went wrong';
      document.getElementById('sub').textContent = data.error || 'Please try again';
      setTimeout(() => window.location = '/', 3000);
    }
  } catch(e) {
    document.getElementById('emoji').textContent = '❌';
    document.getElementById('title').textContent = 'Connection error';
    document.getElementById('sub').textContent = 'Please try again';
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

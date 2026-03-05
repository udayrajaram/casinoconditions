const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SUPABASE_SERVICE_KEY = process.env.SUPABASE_SERVICE_KEY; // needs service role key for auth admin

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { action, email, cookie_id, username } = req.body || {};

  // SEND MAGIC LINK
  if (action === 'magic_link') {
    if (!email || !cookie_id) return res.status(400).json({ error: 'Missing email or cookie_id' });
    try {
      const r = await fetch(`${SUPABASE_URL}/auth/v1/magiclink`, {
        method: 'POST',
        headers: {
          'apikey': SUPABASE_KEY,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          options: {
            emailRedirectTo: `https://casinoconditions.com/api/auth/callback?cookie_id=${encodeURIComponent(cookie_id)}`
          }
        })
      });
      if (!r.ok) {
        const err = await r.json();
        return res.status(400).json({ error: err.msg || 'Failed to send magic link' });
      }
      return res.status(200).json({ success: true });
    } catch(e) {
      return res.status(500).json({ error: 'Server error' });
    }
  }

  // HANDLE CALLBACK - merge cookie_id with auth user
  if (action === 'callback') {
    const { access_token, cookie_id: cid } = req.body;
    if (!access_token) return res.status(400).json({ error: 'Missing access_token' });
    try {
      // Get user from token
      const userRes = await fetch(`${SUPABASE_URL}/auth/v1/user`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${access_token}` }
      });
      const user = await userRes.json();
      if (!user?.email) return res.status(400).json({ error: 'Invalid token' });

      // Try to find profile by cookie_id first, then by email
      let profile = null;

      if (cid) {
        const bycookie = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?cookie_id=eq.${encodeURIComponent(cid)}&limit=1`, {
          headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
        });
        const cookieProfiles = await bycookie.json();
        profile = cookieProfiles?.[0] || null;
      }

      // Also check if a profile already exists with this email
      const byEmail = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?email=eq.${encodeURIComponent(user.email)}&limit=1`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      const emailProfiles = await byEmail.json();
      const emailProfile = emailProfiles?.[0] || null;

      if (emailProfile) {
        // Already linked — just return it
        return res.status(200).json({ success: true, profile: emailProfile });
      }

      if (profile) {
        // Found by cookie — attach email
        await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?cookie_id=eq.${encodeURIComponent(cid)}`, {
          method: 'PATCH',
          headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: user.email, updated_at: new Date().toISOString() })
        });
        return res.status(200).json({ success: true, profile: { ...profile, email: user.email } });
      }

      // No profile found at all — create one
      const newRes = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles`, {
        method: 'POST',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=representation' },
        body: JSON.stringify({ cookie_id: cid || ('email_' + Date.now()), email: user.email, points: 0, rank: 'Rail Bird' })
      });
      const [newProfile] = await newRes.json();
      return res.status(200).json({ success: true, profile: newProfile });

    } catch(e) {
      console.error('callback error:', e);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  // UPDATE USERNAME
  if (action === 'set_username') {
    if (!cookie_id || !username) return res.status(400).json({ error: 'Missing params' });
    const clean = username.trim().slice(0, 20).replace(/[^a-zA-Z0-9_\- ]/g, '');
    try {
      await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?cookie_id=eq.${encodeURIComponent(cookie_id)}`, {
        method: 'PATCH',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: clean, updated_at: new Date().toISOString() })
      });
      return res.status(200).json({ success: true, username: clean });
    } catch(e) {
      return res.status(500).json({ error: 'Server error' });
    }
  }

  return res.status(400).json({ error: 'Unknown action' });
}

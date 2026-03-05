const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const RANKS = [
  { name: 'Rail Bird', min: 0,    emoji: '🎰' },
  { name: 'Fish',      min: 50,   emoji: '🐟' },
  { name: 'Regular',   min: 150,  emoji: '♠️' },
  { name: 'Floor Regular', min: 400, emoji: '🎲' },
  { name: 'High Roller',   min: 800, emoji: '💰' },
  { name: 'Whale',         min: 1500, emoji: '👑' },
];

function getRank(points) {
  let rank = RANKS[0];
  for (const r of RANKS) { if (points >= r.min) rank = r; }
  return rank;
}

const POINT_VALUES = {
  post_report: 10,
  post_ask: 8,
  helpful_received: 5,
  reaction: 2,
  streak_bonus: 25,
  scratch_bonus: null, // variable
};

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { cookie_id } = req.method === 'GET' ? req.query : (req.body || {});
  if (!cookie_id) return res.status(400).json({ error: 'Missing cookie_id' });

  // GET PROFILE
  if (req.method === 'GET') {
    const email = req.query.email || null;
    try {
      let profile = null;

      // If email is provided (signed-in user), prefer email lookup — always gets the right profile on any device
      if (email) {
        const byEmail = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?email=eq.${encodeURIComponent(email)}&limit=1`, {
          headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
        });
        const emailProfiles = await byEmail.json();
        profile = emailProfiles?.[0] || null;
        // Update cookie_id to current device cookie if different
        if (profile && profile.cookie_id !== cookie_id) {
          // Delete ANY existing profile with this cookie (empty or not, as long as it's not the real one)
          await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?cookie_id=eq.${encodeURIComponent(cookie_id)}&id=neq.${profile.id}`, {
            method: 'DELETE',
            headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
          });
          // Now safe to update real profile's cookie_id
          const patchRes = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?id=eq.${profile.id}`, {
            method: 'PATCH',
            headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ cookie_id, updated_at: new Date().toISOString() })
          });
          if (patchRes.ok) profile.cookie_id = cookie_id;
        }
      }

      // Fall back to cookie lookup
      if (!profile) {
        const byCookie = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?cookie_id=eq.${encodeURIComponent(cookie_id)}&limit=1`, {
          headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
        });
        const cookieProfiles = await byCookie.json();
        profile = cookieProfiles?.[0] || null;
      }

      if (profile) {
        const rank = getRank(profile.points);
        return res.status(200).json({ ...profile, rank: rank.name, rank_emoji: rank.emoji, ranks: RANKS });
      }

      // Brand new visitor — create empty profile
      const newRes = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles`, {
        method: 'POST',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=representation' },
        body: JSON.stringify({ cookie_id, points: 0, rank: 'Rail Bird', streak_days: 0 })
      });
      const [newProfile] = await newRes.json();
      return res.status(200).json({ ...newProfile, rank: 'Rail Bird', rank_emoji: '🎰', ranks: RANKS });
    } catch(e) {
      return res.status(500).json({ error: 'Server error' });
    }
  }

  // ADD POINTS
  if (req.method === 'POST') {
    const { action, scratch_roll } = req.body;
    if (!action) return res.status(400).json({ error: 'Missing action' });

    try {
      // Fetch current profile
      const r = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?cookie_id=eq.${encodeURIComponent(cookie_id)}&limit=1`, {
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
      });
      const profiles = await r.json();
      let profile = profiles?.[0];

      // Create if doesn't exist
      if (!profile) {
        const newRes = await fetch(`${SUPABASE_URL}/rest/v1/user_profiles`, {
          method: 'POST',
          headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=representation' },
          body: JSON.stringify({ cookie_id, points: 0, rank: 'Rail Bird', streak_days: 0 })
        });
        [profile] = await newRes.json();
      }

      let pointsEarned = 0;
      let streakBonus = 0;

      if (action === 'post_report') pointsEarned = 10;
      else if (action === 'post_ask') pointsEarned = 8;
      else if (action === 'helpful_received') pointsEarned = 5;
      else if (action === 'reaction') pointsEarned = 2;
      else if (action === 'scratch') {
        // Variable scratch reward: 80% chance small (5-15), 15% medium (20-50), 5% jackpot (100)
        const roll = scratch_roll || Math.random();
        if (roll < 0.05) pointsEarned = 100;
        else if (roll < 0.20) pointsEarned = Math.floor(Math.random() * 31) + 20; // 20-50
        else pointsEarned = Math.floor(Math.random() * 11) + 5; // 5-15
      }

      // Streak tracking
      const today = new Date().toISOString().split('T')[0];
      const lastPost = profile.last_post_date;
      let newStreak = profile.streak_days || 0;

      if (action === 'post_report' || action === 'post_ask') {
        if (lastPost === today) {
          // Already posted today, no streak change
        } else {
          const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
          if (lastPost === yesterday) {
            newStreak = (profile.streak_days || 0) + 1;
          } else {
            newStreak = 1; // reset
          }
          if (newStreak > 1 && newStreak % 3 === 0) {
            streakBonus = 25;
            pointsEarned += streakBonus;
          }
        }
      }

      const newPoints = (profile.points || 0) + pointsEarned;
      const newRank = getRank(newPoints);
      const rankUp = newRank.name !== profile.rank;

      // Update profile
      const updateData = {
        points: newPoints,
        rank: newRank.name,
        updated_at: new Date().toISOString(),
      };
      if (action === 'post_report' || action === 'post_ask') {
        updateData.last_post_date = today;
        updateData.streak_days = newStreak;
      }

      await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?cookie_id=eq.${encodeURIComponent(cookie_id)}`, {
        method: 'PATCH',
        headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' },
        body: JSON.stringify(updateData)
      });

      return res.status(200).json({
        points: newPoints,
        points_earned: pointsEarned,
        streak_bonus: streakBonus,
        streak_days: newStreak,
        rank: newRank.name,
        rank_emoji: newRank.emoji,
        rank_up: rankUp,
        next_rank: RANKS.find(r => r.min > newPoints) || null,
        ranks: RANKS,
      });
    } catch(e) {
      console.error(e);
      return res.status(500).json({ error: 'Server error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}

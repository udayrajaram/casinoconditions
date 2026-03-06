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

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');

  try {
    // Top 10 by points, must have a username or email to appear
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/user_profiles?points=gt.0&order=points.desc&limit=10`,
      { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
    );
    const profiles = await r.json();

    const leaderboard = profiles.map((p, i) => {
      const rank = getRank(p.points);
      const displayName = p.username || (p.email ? p.email.split('@')[0] : `Player${p.cookie_id.slice(0,4)}`);
      return {
        position: i + 1,
        name: displayName,
        points: p.points,
        rank: rank.name,
        rank_emoji: rank.emoji,
        streak: p.streak_days || 0,
      };
    });

    return res.status(200).json({ leaderboard });
  } catch(e) {
    return res.status(500).json({ error: 'Server error', leaderboard: [] });
  }
}

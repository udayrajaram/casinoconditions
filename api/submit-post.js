const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

// ── FILTER LISTS ────────────────────────────────────────────

const OBSCENITY = [
  'fuck', 'fuck', 'fuk', 'f u c k', 'f*ck', 'f**k',
  'shit', 'sh1t', 'sh!t', 's**t',
  'cunt', 'c**t',
  'nigger', 'nigga', 'n1gger',
  'faggot', 'fag',
  'retard', 'retarded',
  'asshole', 'a**hole', 'a$$hole',
  'bitch', 'b1tch', 'b!tch',
  'cock', 'c0ck', 'dick', 'd1ck',
  'pussy', 'p***y',
  'whore', 'wh0re', 'slut',
  'bastard',
  'motherfucker', 'mofo',
  'kike', 'spic', 'chink', 'wetback', 'cracker',
];

const SPAM_PATTERNS = [
  /https?:\/\//i,                          // URLs
  /www\.[a-z0-9-]+\.[a-z]{2,}/i,          // domain names
  /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/i, // email addresses
  /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/,        // phone numbers
  /buy now|click here|limited offer|act now|free money|earn \$|make money fast/i,
  /casino bonus|free spins|deposit bonus|promo code|discount code/i,
  /whatsapp|telegram|discord\.gg|t\.me\//i,
  /(.)\1{6,}/,                             // same char repeated 7+ times (aaaaaaa)
  /[A-Z]{8,}/,                             // 8+ consecutive caps (SPAMMING)
];

const HACKER_PATTERNS = [
  /<script/i,
  /<\/script/i,
  /javascript:/i,
  /on\w+\s*=/i,                            // onclick=, onload=, etc.
  /<iframe/i,
  /<img[^>]+src/i,
  /SELECT\s+.*\s+FROM/i,                   // SQL injection
  /INSERT\s+INTO/i,
  /DROP\s+TABLE/i,
  /DELETE\s+FROM/i,
  /UNION\s+SELECT/i,
  /OR\s+1\s*=\s*1/i,
  /--\s*$/m,                               // SQL comment
  /;\s*DROP/i,
  /\.\.\//,                                // path traversal
  /base64_decode/i,
  /eval\s*\(/i,
  /document\.cookie/i,
  /window\.location/i,
  /fetch\s*\(/i,
  /xmlhttprequest/i,
  /\$\{.*\}/,                              // template injection
];

const MIN_LENGTH = 10;
const MAX_LENGTH = 500;

function filterPost(body) {
  if (!body || typeof body !== 'string') {
    return { ok: false, reason: 'Post cannot be empty.' };
  }

  const trimmed = body.trim();

  if (trimmed.length < MIN_LENGTH) {
    return { ok: false, reason: 'Post is too short. Tell us more!' };
  }

  if (trimmed.length > MAX_LENGTH) {
    return { ok: false, reason: 'Post is too long. Keep it under 500 characters.' };
  }

  // Hacker/injection check
  for (const pattern of HACKER_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { ok: false, reason: 'Post contains invalid content.' };
    }
  }

  // Spam check
  for (const pattern of SPAM_PATTERNS) {
    if (pattern.test(trimmed)) {
      return { ok: false, reason: 'Post looks like spam. No links, emails, or phone numbers.' };
    }
  }

  // Obscenity check
  const lower = trimmed.toLowerCase().replace(/[^a-z0-9 ]/g, ' ');
  for (const word of OBSCENITY) {
    const regex = new RegExp('\\b' + word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    if (regex.test(lower)) {
      return { ok: false, reason: 'Please keep it clean — no offensive language.' };
    }
  }

  // Gibberish check — ratio of non-alpha chars
  const alphaCount = (trimmed.match(/[a-zA-Z]/g) || []).length;
  if (alphaCount / trimmed.length < 0.3 && trimmed.length > 20) {
    return { ok: false, reason: 'Post doesn\'t look like real text.' };
  }

  return { ok: true };
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { body, casino, category, author, is_anonymous, cookie_id } = req.body || {};

  // Run filter
  const check = filterPost(body);
  if (!check.ok) {
    return res.status(400).json({ error: check.reason });
  }

  // Rate limit: max 10 posts per cookie per hour
  try {
    const oneHourAgo = new Date(Date.now() - 3600000).toISOString();
    const rateRes = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?cookie_id=eq.${encodeURIComponent(cookie_id)}&created_at=gte.${oneHourAgo}&select=id`,
      { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
    );
    const recent = await rateRes.json();
    if (Array.isArray(recent) && recent.length >= 10) {
      return res.status(429).json({ error: 'You\'ve posted a lot recently. Slow down a bit!' });
    }
  } catch(e) {
    // Don't block on rate limit error
  }

  // Submit to Supabase
  try {
    const postRes = await fetch(`${SUPABASE_URL}/rest/v1/posts`, {
      method: 'POST',
      headers: {
        'apikey': SUPABASE_KEY,
        'Authorization': `Bearer ${SUPABASE_KEY}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        body: body.trim(),
        casino,
        category: category || 'General',
        author: is_anonymous ? 'Anonymous' : (author || 'Anonymous'),
        is_anonymous: !!is_anonymous,
        cookie_id,
        helpful_count: 0,
      })
    });

    const [newPost] = await postRes.json();

    // Award points
    if (cookie_id) {
      try {
        const profRes = await fetch(
          `${SUPABASE_URL}/rest/v1/user_profiles?cookie_id=eq.${encodeURIComponent(cookie_id)}&select=id,points`,
          { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
        );
        const [prof] = await profRes.json();
        if (prof) {
          const newPts = (prof.points || 0) + 10;
          const newRank = getrank(newPts);
          await fetch(`${SUPABASE_URL}/rest/v1/user_profiles?id=eq.${prof.id}`, {
            method: 'PATCH',
            headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json' },
            body: JSON.stringify({ points: newPts, rank: newRank.name, rank_emoji: newRank.emoji, updated_at: new Date().toISOString() })
          });
        }
      } catch(e) {}
    }

    return res.status(200).json({ success: true, post: newPost });
  } catch(e) {
    console.error('submit-post error:', e);
    return res.status(500).json({ error: 'Failed to submit post.' });
  }
}

function getrank(pts) {
  const RANKS = [
    { name: 'Rail Bird', min: 0, emoji: '🎰' },
    { name: 'Fish', min: 50, emoji: '🐟' },
    { name: 'Regular', min: 150, emoji: '♠️' },
    { name: 'Floor Regular', min: 400, emoji: '🎲' },
    { name: 'High Roller', min: 800, emoji: '💰' },
    { name: 'Whale', min: 1500, emoji: '👑' },
  ];
  let r = RANKS[0];
  for (const rank of RANKS) { if (pts >= rank.min) r = rank; }
  return r;
}

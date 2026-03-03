const CASINO_COORDS = {
  'Mohegan Sun': [41.4901, -72.0957],
  'Foxwoods Resort Casino': [41.4898, -71.9590],
  'Encore Boston Harbor': [42.3957, -71.0820],
  'MGM Springfield': [42.1015, -72.5898],
  'Borgata': [39.3636, -74.4421],
  'Hard Rock Atlantic City': [39.3611, -74.4229],
  'Caesars Atlantic City': [39.3541, -74.4382],
  'Parx Casino': [40.1012, -74.9480],
  'Wind Creek Bethlehem': [40.6196, -75.3647],
  'Empire City Casino': [40.9312, -73.8988],
  "Jake's 58 Casino": [40.7937, -73.1885],
  'Resorts World NYC': [40.6697, -73.8330],
  "Bally's Twin River": [41.9337, -71.4668],
  "Bally's Tiverton": [41.6354, -71.2120],
  'Plainridge Park Casino': [42.0154, -71.3284],
  'Resorts World Catskills': [41.6537, -74.6910],
  "Harrah's Atlantic City": [39.3604, -74.4274],
  "Bally's Atlantic City": [39.3590, -74.4349],
  'Resorts Casino Atlantic City': [39.3636, -74.4202],
  'Golden Nugget Atlantic City': [39.3766, -74.4418],
  'Live! Casino Philadelphia': [39.9100, -75.1675],
  'Mount Airy Casino': [41.1248, -75.3571],
};

const CASINO_PLACE_IDS = {}; // Always look up dynamically via Places text search

async function getPlaceId(casinoName, casinoLocation, key) {
  try {
    const r = await fetch(`https://places.googleapis.com/v1/places:searchText`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Goog-Api-Key': key,
        'X-Goog-FieldMask': 'places.id',
      },
      body: JSON.stringify({ textQuery: `${casinoName} ${casinoLocation}`, maxResultCount: 1 })
    });
    const data = await r.json();
    console.log('getPlaceId response for', casinoName, ':', JSON.stringify(data).slice(0, 200));
    return data.places?.[0]?.id || null;
  } catch(e) { console.error('getPlaceId error:', e); return null; }
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const CASINOS = [
  { name: 'Mohegan Sun', location: 'Uncasville, CT', state: 'CT', miles: 30, slug: 'mohegan-sun', desc: 'One of the largest casinos in the US with 300,000+ sq ft of gaming, 4,000 slots, 300 table games, and 30 poker tables.' },
  { name: 'Foxwoods Resort Casino', location: 'Mashantucket, CT', state: 'CT', miles: 41, slug: 'foxwoods', desc: 'The second-largest casino in the US featuring 340,000 sq ft of gaming, 3,500 slots, 250 table games, and a 54-table poker room.' },
  { name: "Jake's 58 Casino", location: 'Islandia, NY', state: 'NY', miles: 73, slug: 'jakes-58', desc: "Jake's 58 offers 1,000 slot machines and electronic table games including blackjack, craps, roulette, and baccarat." },
  { name: 'Empire City Casino', location: 'Yonkers, NY', state: 'NY', miles: 90, slug: 'empire-city', desc: 'Empire City Casino at Yonkers Raceway features 4,600+ slot machines and electronic table games.' },
  { name: 'Resorts World NYC', location: 'Queens, NY', state: 'NY', miles: 95, slug: 'resorts-world-nyc', desc: 'Located near JFK Airport, Resorts World NYC offers 6,500+ gaming machines including slots and electronic table games.' },
  { name: "Bally's Twin River", location: 'Lincoln, RI', state: 'RI', miles: 100, slug: 'ballys-twin-river', desc: "Bally's Twin River Lincoln Casino Resort is Rhode Island's largest casino with live table games, slots, and poker." },
  { name: "Bally's Tiverton", location: 'Tiverton, RI', state: 'RI', miles: 110, slug: 'ballys-tiverton', desc: "Bally's Tiverton offers 24-hour gaming with blackjack, roulette, craps, baccarat, and slots." },
  { name: 'Plainridge Park Casino', location: 'Plainville, MA', state: 'MA', miles: 115, slug: 'plainridge-park', desc: 'Plainridge Park Casino features 1,200 slot machines near Providence and Boston.' },
  { name: 'Resorts World Catskills', location: 'Monticello, NY', state: 'NY', miles: 150, slug: 'resorts-world-catskills', desc: 'Resorts World Catskills is a full resort casino in the Catskill Mountains with 100,000 sq ft of gaming.' },
  { name: 'MGM Springfield', location: 'Springfield, MA', state: 'MA', miles: 155, slug: 'mgm-springfield', desc: "MGM Springfield is Western Massachusetts's premier casino resort with slots, table games, poker, and a sportsbook." },
  { name: 'Encore Boston Harbor', location: 'Everett, MA', state: 'MA', miles: 160, slug: 'encore-boston-harbor', desc: 'Encore Boston Harbor is a luxury resort casino on the Mystic River with 210,000 sq ft of gaming and an 88-table poker room.' },
  { name: 'Borgata', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'borgata', desc: "Borgata Hotel Casino & Spa is one of Atlantic City's most popular casinos with a massive poker room and full table game floor." },
  { name: 'Hard Rock Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'hard-rock-ac', desc: 'Hard Rock Hotel & Casino Atlantic City offers full gaming with slots, table games, and a poker room on the boardwalk.' },
  { name: 'Caesars Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'caesars-ac', desc: 'Caesars Atlantic City features a Roman-inspired luxury casino with 2,000+ slots and 130+ table games.' },
  { name: "Harrah's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'harrahs-ac', desc: "Harrah's Atlantic City is a waterfront casino resort with extensive gaming, a poker room, and top dining." },
  { name: "Bally's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'ballys-ac', desc: "Bally's Atlantic City is a classic boardwalk casino with 800+ slot machines and a wide range of table games." },
  { name: 'Resorts Casino Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'resorts-casino-ac', desc: "Atlantic City's original casino featuring 800+ slots, 100 gaming tables, and a vibrant art deco style." },
  { name: 'Golden Nugget Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'golden-nugget-ac', desc: 'Golden Nugget Atlantic City sits on the marina with 2,000+ slots, 60+ table games, and a dedicated poker room.' },
  { name: 'Wind Creek Bethlehem', location: 'Bethlehem, PA', state: 'PA', miles: 210, slug: 'wind-creek-bethlehem', desc: 'Wind Creek Bethlehem is open 24/7 with 3,000+ gaming machines, 176 table games, and a poker room.' },
  { name: 'Parx Casino', location: 'Bensalem, PA', state: 'PA', miles: 240, slug: 'parx-casino', desc: "Pennsylvania's most popular casino with a massive slot floor, live table games, poker room, and horse racing." },
  { name: 'Live! Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', miles: 250, slug: 'live-casino-philly', desc: 'Live! Casino & Hotel Philadelphia is a 510,000 sq ft entertainment complex with slots, tables, poker, and sports betting.' },
  { name: 'Mount Airy Casino', location: 'Mount Pocono, PA', state: 'PA', miles: 175, slug: 'mount-airy-casino', desc: 'Mount Airy Casino Resort in the Pocono Mountains offers table games, slots, poker, a hotel, spa, and golf course.' },
];

function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff/60) + ' min ago';
  if (diff < 86400) return Math.floor(diff/3600) + ' hr ago';
  return Math.floor(diff/86400) + 'd ago';
}

function tagClass(cat) {
  if (cat.includes('Poker')) return 'tag-poker';
  if (cat.includes('Table')) return 'tag-tables';
  if (cat.includes('Slots')) return 'tag-slots';
  return 'tag-general';
}

function renderPost(post) {
  const initials = post.is_anonymous ? '👤' : post.author.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
  const avatarStyle = post.is_anonymous ? 'background:#f0f0ee;color:#888;font-size:14px' : 'background:#edf5f0;color:#1a6b3c';
  return `
  <div class="post-card">
    <div class="post-top">
      <div class="post-meta">
        <div class="avatar" style="${avatarStyle}">${initials}</div>
        <div>
          <div class="post-author">${post.is_anonymous ? 'Anonymous' : post.author}</div>
          <div class="post-time">${timeAgo(post.created_at)}</div>
        </div>
      </div>
    </div>
    <div class="post-body">${post.body}</div>
    <div class="post-bottom">
      <span class="post-tag ${tagClass(post.category)}">${post.category}</span>
      <div class="post-actions">
        <button class="action-btn" onclick="helpful(this, '${post.id}')">👍 ${post.helpful_count || 0}</button>
      </div>
    </div>
  </div>`;
}

export default async function handler(req, res) {
  const slug = req.query.slug;
  const casino = CASINOS.find(c => c.slug === slug);

  if (!casino) {
    return res.status(404).send(`<!DOCTYPE html><html><head><title>404 - CasinoConditions</title></head><body style="font-family:sans-serif;text-align:center;padding:80px"><h1>Casino not found</h1><p><a href="/">← Back to home</a></p></body></html>`);
  }

  const key = process.env.GOOGLE_KEY;
  const coords = CASINO_COORDS[casino.name] || null;
  let placeId = CASINO_PLACE_IDS[casino.name] || null;

  // If no hardcoded place ID, look it up
  if (!placeId && key) {
    placeId = await getPlaceId(casino.name, casino.location, key);
  }

  // Fetch posts, weather, and places all in parallel
  const [postsRes, weatherRes, placesRes] = await Promise.all([
    fetch(`${SUPABASE_URL}/rest/v1/posts?casino=eq.${encodeURIComponent(casino.name)}&order=created_at.desc&limit=50`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    }),
    coords && key ? fetch(`https://weather.googleapis.com/v1/currentConditions:lookup?key=${key}&location.latitude=${coords[0]}&location.longitude=${coords[1]}&unitsSystem=IMPERIAL`) : Promise.resolve(null),
    placeId && key ? fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${key}`) : Promise.resolve(null),
  ]);

  let posts = [], weather = null, places = null;
  try { posts = await postsRes.json(); } catch(e) {}
  try { if (weatherRes) weather = await weatherRes.json(); } catch(e) {}
  try { if (placesRes) places = await placesRes.json(); } catch(e) {}

  // Parse weather
  let weatherHtml = '<div style="color:var(--muted)">Weather unavailable</div>';
  if (weather?.temperature) {
    const temp = Math.round(weather.temperature.degrees);
    const desc = weather.weatherCondition?.description?.text || '';
    const type = weather.weatherCondition?.type || '';
    const isBadWeather = ['RAIN','LIGHT_RAIN','RAIN_SHOWERS','DRIZZLE','SNOW','HEAVY_SNOW','THUNDERSTORM'].includes(type);
    const impact = isBadWeather ? '↑ Great night to be inside' : temp < 35 ? '↑ Cold outside, good for casino' : '→ Neutral impact';
    const impactCls = impact.startsWith('↑') ? 'positive' : 'neutral';
    weatherHtml = `<div style="display:flex;justify-content:space-between;align-items:center">
      <div><div style="font-size:15px;font-weight:600">${desc}</div><div style="font-size:13px;color:var(--muted);margin-top:2px">${temp}°F</div></div>
      <div style="text-align:right"><div style="font-size:11px;color:var(--muted)">Casino impact</div><div class="weather-impact ${impactCls}" style="font-size:13px;font-weight:600;margin-top:2px">${impact}</div></div>
    </div>`;
  }

  // Parse Google rating
  let googleHtml = '<div style="color:var(--muted)">Rating unavailable</div>';
  if (places?.rating) {
    const rating = places.rating.toFixed(1);
    const reviews = places.userRatingCount?.toLocaleString() || '0';
    const stars = '★'.repeat(Math.round(places.rating)) + '☆'.repeat(5 - Math.round(places.rating));
    googleHtml = `<div style="display:flex;align-items:center;gap:10px">
      <div style="font-size:32px;font-weight:700;font-family:'DM Mono',monospace">${rating}</div>
      <div><div style="color:#f39c12;font-size:15px">${stars}</div><div style="font-size:12px;color:var(--muted);margin-top:3px">${reviews} reviews</div></div>
    </div>`;
  }

  const recentCount = posts.filter(p => (Date.now() - new Date(p.created_at)) < 86400000).length;
  const statusText = recentCount > 5 ? 'Busy' : recentCount > 2 ? 'Moderate' : 'Quiet';
  const statusColor = recentCount > 5 ? '#1a6b3c' : recentCount > 2 ? '#b07d2a' : '#888';

  const postsHtml = posts.length
    ? posts.map(renderPost).join('')
    : `<div class="empty-state"><div style="font-size:32px;margin-bottom:12px">📋</div><div style="font-size:16px;font-weight:600;margin-bottom:6px">No updates yet</div><div style="color:#888;font-size:14px">Be the first to post a floor update!</div></div>`;

  const nearbyCasinos = CASINOS.filter(c => c.slug !== slug && c.state === casino.state).slice(0, 4);
  const nearbyHtml = nearbyCasinos.map(c => `
    <a href="/${c.slug}" class="nearby-card">
      <div class="nearby-name">${c.name}</div>
      <div class="nearby-loc">${c.location}</div>
    </a>`).join('');

  const pageTitle = `${casino.name} Casino Floor Conditions — Real-Time Reports | CasinoConditions`;
  const pageDesc = `Live floor reports for ${casino.name} in ${casino.location}. See current table game conditions, poker room wait times, and slot activity from real players. ${casino.desc}`;

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${pageTitle}</title>
<meta name="description" content="${pageDesc}">
<meta property="og:title" content="${pageTitle}">
<meta property="og:description" content="${pageDesc}">
<meta property="og:url" content="https://casinoconditions.com/${slug}">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary">
<meta name="twitter:title" content="${pageTitle}">
<meta name="twitter:description" content="${pageDesc}">
<link rel="canonical" href="https://casinoconditions.com/${slug}">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RYX8RTNPQG"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-RYX8RTNPQG');</script>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f7f7f5;--surface:#fff;--border:#e8e8e4;--text:#1a1a18;--muted:#888880;--accent:#1a6b3c;--accent-light:#edf5f0;--accent-dim:#2d8a52;--radius:12px;--radius-sm:8px}
body.dark{--bg:#0f0f0d;--surface:#161614;--border:#2a2a26;--text:#f0ede8;--muted:#6b6860;--accent:#4caf70;--accent-light:#1a2e1f;--accent-dim:#3d9960}
body.dark nav{background:rgba(15,15,13,0.95)}
body.dark .compose-input,body.dark select{background:#1e1e1b;color:var(--text)}
body.dark .post-card,body.dark .card{background:#161614}
body{transition:background .2s,color .2s}
.dark-toggle{background:none;border:1px solid var(--border);border-radius:8px;padding:6px 10px;cursor:pointer;font-size:15px;transition:all .15s}
.dark-toggle:hover{border-color:var(--muted);background:var(--accent-light)}
body{font-family:'DM Sans',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;line-height:1.5}
nav{background:rgba(255,255,255,0.95);backdrop-filter:blur(12px);border-bottom:1px solid var(--border);padding:0 40px;height:60px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{display:flex;align-items:center;gap:8px;text-decoration:none;color:var(--text)}
.logo-dot{width:10px;height:10px;background:var(--accent);border-radius:50%;animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.85)}}
.logo-text{font-size:15px;font-weight:600;letter-spacing:-.3px}
.logo-text span{color:var(--accent)}
.nav-links{display:flex;align-items:center;gap:24px}
.nav-link{font-size:13px;color:var(--muted);text-decoration:none;transition:color .15s}
.nav-link:hover{color:var(--text)}
.btn{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background .15s}
.btn:hover{background:var(--accent-dim)}
.casino-hero{background:#fff;border-bottom:1px solid var(--border);padding:40px 40px 32px}
.casino-hero-inner{max-width:1100px;margin:0 auto}
.breadcrumb{display:flex;align-items:center;gap:8px;font-size:12px;color:var(--muted);margin-bottom:16px}
.breadcrumb a{color:var(--muted);text-decoration:none}
.breadcrumb a:hover{color:var(--accent)}
.breadcrumb-sep{color:var(--border)}
.casino-name-big{font-size:32px;font-weight:700;letter-spacing:-1px;margin-bottom:4px}
.casino-loc-big{font-size:14px;color:var(--muted);margin-bottom:12px}
.casino-desc{font-size:14px;color:var(--muted);line-height:1.6;max-width:640px;margin-bottom:20px}
.status-badge{display:inline-flex;align-items:center;gap:6px;padding:5px 14px;border-radius:20px;font-size:12px;font-weight:600;background:var(--accent-light);color:var(--accent)}
.main-wrap{max-width:1100px;margin:0 auto;padding:36px 24px;display:grid;grid-template-columns:1fr 300px;gap:24px}
.card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:18px 20px;margin-bottom:16px}
.card-title{font-size:13px;font-weight:600;letter-spacing:-.2px;margin-bottom:14px;display:flex;align-items:center;gap:6px}
.section-title{font-size:16px;font-weight:600;letter-spacing:-.3px;margin-bottom:16px}
.post-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:18px 20px;margin-bottom:10px;transition:border-color .15s}
.post-card:hover{border-color:#d0d0cc;box-shadow:0 2px 12px rgba(0,0,0,.05)}
.post-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
.post-meta{display:flex;align-items:center;gap:10px}
.avatar{width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600;flex-shrink:0}
.post-author{font-size:13px;font-weight:500}
.post-time{font-size:12px;color:var(--muted);font-family:'DM Mono',monospace}
.post-body{font-size:14px;line-height:1.6;margin-bottom:12px}
.post-bottom{display:flex;align-items:center;justify-content:space-between}
.post-tag{font-size:11px;font-weight:500;padding:3px 10px;border-radius:20px}
.tag-poker{color:#1a5276;background:#eaf0f8}
.tag-tables{color:#4a235a;background:#f5eef8}
.tag-slots{color:#784212;background:#fdf2e9}
.tag-general{color:#1a6b3c;background:#edf5f0}
.post-actions{display:flex;gap:8px}
.action-btn{background:none;border:1px solid var(--border);border-radius:6px;padding:4px 10px;font-size:12px;cursor:pointer;font-family:'DM Sans',sans-serif;color:var(--muted);transition:all .15s}
.action-btn:hover{border-color:var(--accent);color:var(--accent)}
.compose-input{width:100%;border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 14px;font-size:14px;font-family:'DM Sans',sans-serif;resize:none;background:var(--bg);color:var(--text);outline:none;transition:border-color .15s;margin-bottom:10px}
.compose-input:focus{border-color:var(--accent);background:#fff}
.compose-input::placeholder{color:var(--muted)}
.compose-bottom{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap}
.compose-select{border:1px solid var(--border);border-radius:6px;padding:6px 10px;font-size:12px;font-family:'DM Sans',sans-serif;color:var(--text);background:var(--bg);outline:none}
.anon-toggle{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--muted);cursor:pointer;user-select:none}
.toggle{width:32px;height:18px;background:var(--border);border-radius:20px;position:relative;transition:background .2s;flex-shrink:0}
.toggle.on{background:var(--accent)}
.toggle::after{content:'';position:absolute;width:14px;height:14px;background:#fff;border-radius:50%;top:2px;left:2px;transition:left .2s}
.toggle.on::after{left:16px}
.filter-tabs{display:flex;gap:6px;margin-bottom:16px;flex-wrap:wrap}
.tab{padding:6px 14px;border-radius:20px;font-size:12px;font-weight:500;cursor:pointer;border:1px solid var(--border);background:#fff;color:var(--muted);transition:all .15s;font-family:'DM Sans',sans-serif}
.tab.active{background:var(--text);color:#fff;border-color:var(--text)}
.tab:hover:not(.active){border-color:var(--text);color:var(--text)}
.score-row{display:flex;align-items:center;justify-content:space-between;margin-bottom:8px}
.score-label{font-size:12px;color:var(--muted)}
.score-bar-wrap{flex:1;height:4px;background:var(--border);border-radius:2px;margin:0 10px;overflow:hidden}
.score-bar-fill{height:100%;border-radius:2px;background:var(--accent);transition:width .5s}
.score-val{font-size:11px;font-family:'DM Mono',monospace;color:var(--muted);width:28px;text-align:right}
.cc-score-big{font-size:48px;font-weight:700;letter-spacing:-2px;color:var(--accent);font-family:'DM Mono',monospace}
.nearby-card{display:block;padding:10px 12px;border:1px solid var(--border);border-radius:var(--radius-sm);text-decoration:none;margin-bottom:8px;transition:all .15s}
.nearby-card:hover{border-color:var(--accent);background:var(--accent-light)}
.nearby-name{font-size:13px;font-weight:500;color:var(--text)}
.nearby-loc{font-size:11px;color:var(--muted);margin-top:2px}
.empty-state{text-align:center;padding:40px 20px;color:var(--muted)}
.live-badge{display:flex;align-items:center;gap:5px;font-size:11px;font-weight:500;color:var(--accent);background:var(--accent-light);padding:4px 10px;border-radius:20px;font-family:'DM Mono',monospace}
.live-dot{width:6px;height:6px;background:var(--accent);border-radius:50%;animation:pulse 1.5s infinite;flex-shrink:0}
@media(max-width:768px){.main-wrap{grid-template-columns:1fr}.sidebar{display:none}.casino-hero{padding:24px 20px}nav{padding:0 16px}.nav-links{display:none}footer{flex-direction:column;gap:12px;text-align:center;padding:20px}}
footer{padding:28px 40px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border);background:var(--surface);margin-top:20px}
.footer-logo{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600}
.footer-links{display:flex;gap:20px}
.footer-link{font-size:12px;color:var(--muted);text-decoration:none}
.footer-link:hover{color:var(--text)}
.footer-copy{font-size:12px;color:var(--muted)}
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
  </div>
  <button class="dark-toggle" id="darkToggle" onclick="toggleDark()" title="Toggle dark mode">🌙</button>
  <button class="btn" onclick="document.getElementById('composeCard').scrollIntoView({behavior:'smooth'})">+ Post Update</button>
</nav>

<div class="casino-hero">
  <div class="casino-hero-inner">
    <div class="breadcrumb">
      <a href="/">Home</a>
      <span class="breadcrumb-sep">›</span>
      <a href="/browse">Casinos</a>
      <span class="breadcrumb-sep">›</span>
      <span>${casino.name}</span>
    </div>
    <div style="display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:12px">
      <div>
        <h1 class="casino-name-big">${casino.name}</h1>
        <div class="casino-loc-big">📍 ${casino.location} · ${casino.miles} miles</div>
        <p class="casino-desc">${casino.desc}</p>
      </div>
      <div style="text-align:right">
        <div class="status-badge" style="color:${statusColor}">● ${statusText}</div>
        <div style="font-size:12px;color:var(--muted);margin-top:6px">${recentCount} update${recentCount !== 1 ? 's' : ''} today</div>
      </div>
    </div>
  </div>
</div>

<div class="main-wrap">
  <div>
    <!-- COMPOSE -->
    <div class="card" id="composeCard">
      <div class="card-title">Share a floor update at ${casino.name}</div>
      <textarea class="compose-input" id="composeBody" rows="3" placeholder="e.g. Poker room is packed, 3 tables of 1/2 NL running. Lots of fish tonight 🐠"></textarea>
      <div class="compose-bottom">
        <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center">
          <select class="compose-select" id="composeCategory">
            <option>📢 General</option>
            <option>🃏 Poker Room</option>
            <option>🎲 Table Games</option>
            <option>🎰 Slots</option>
          </select>
          <label class="anon-toggle" onclick="toggleAnon()">
            <div class="toggle on" id="anonToggle"></div>
            <span id="anonLabel">Post anonymously</span>
          </label>
          <input id="authorName" class="compose-select" placeholder="Your name" style="display:none;width:120px">
        </div>
        <button class="btn" id="postBtn" onclick="submitPost()">Post Update</button>
      </div>
    </div>

    <!-- FEED -->
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px">
      <div class="section-title">Floor Updates</div>
      <div class="live-badge"><div class="live-dot"></div> LIVE</div>
    </div>
    <div class="filter-tabs">
      <button class="tab active" onclick="filterPosts('all', this)">All</button>
      <button class="tab" onclick="filterPosts('poker', this)">🃏 Poker Room</button>
      <button class="tab" onclick="filterPosts('tables', this)">🎲 Table Games</button>
      <button class="tab" onclick="filterPosts('slots', this)">🎰 Slots</button>
      <button class="tab" onclick="filterPosts('general', this)">📢 General</button>
    </div>
    <div id="feed">${postsHtml}</div>
  </div>

  <div class="sidebar">
    <!-- CC SCORE -->
    <div class="card" id="ccScoreCard">
      <div class="card-title">🏆 CC Score</div>
      <div style="text-align:center;padding:12px 0 16px">
        <div class="cc-score-big" id="scoreNum">—</div>
        <div style="font-size:12px;color:var(--muted);margin-top:4px">out of 100</div>
      </div>
      <div id="scoreFactors"></div>
    </div>

    <!-- WEATHER -->
    <div class="card" id="weatherCard">
      <div class="card-title">🌤 Weather Impact</div>
      <div id="weatherContent">${weatherHtml}</div>
    </div>

    <!-- GOOGLE RATING -->
    <div class="card" id="googleCard">
      <div class="card-title">⭐ Google Rating</div>
      <div id="googleContent">${googleHtml}</div>
    </div>

    <!-- NEARBY -->
    ${nearbyHtml ? `<div class="card"><div class="card-title">📍 Nearby in ${casino.state}</div>${nearbyHtml}</div>` : ''}
  </div>
</div>

<script>
const CASINO_NAME = ${JSON.stringify(casino.name)};
const CASINO_SLUG = ${JSON.stringify(casino.slug)};
const SUPABASE_URL = '${SUPABASE_URL}';
const SUPABASE_KEY = '${SUPABASE_KEY}';
let allPosts = ${JSON.stringify(posts)};
let isAnon = true;

function toggleAnon() {
  isAnon = !isAnon;
  document.getElementById('anonToggle').classList.toggle('on', isAnon);
  document.getElementById('anonLabel').textContent = isAnon ? 'Post anonymously' : 'Post as:';
  document.getElementById('authorName').style.display = isAnon ? 'none' : 'inline-block';
}

function filterPosts(type, btn) {
  document.querySelectorAll('.filter-tabs .tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  const filtered = type === 'all' ? allPosts :
    allPosts.filter(p => {
      if (type === 'poker') return p.category.includes('Poker');
      if (type === 'tables') return p.category.includes('Table');
      if (type === 'slots') return p.category.includes('Slots');
      return p.category.includes('General');
    });
  renderFeed(filtered);
}

function timeAgo(dateStr) {
  const diff = (Date.now() - new Date(dateStr)) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff/60) + ' min ago';
  if (diff < 86400) return Math.floor(diff/3600) + ' hr ago';
  return Math.floor(diff/86400) + 'd ago';
}

function renderFeed(posts) {
  const feed = document.getElementById('feed');
  if (!posts.length) {
    feed.innerHTML = '<div class="empty-state"><div style="font-size:32px;margin-bottom:12px">📋</div><div style="font-size:16px;font-weight:600;margin-bottom:6px">No updates yet</div><div style="color:#888;font-size:14px">Be the first to post a floor update!</div></div>';
    return;
  }
  feed.innerHTML = posts.map(p => {
    const initials = p.is_anonymous ? '👤' : p.author.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
    const avatarStyle = p.is_anonymous ? 'background:#f0f0ee;color:#888;font-size:14px' : 'background:#edf5f0;color:#1a6b3c';
    const tagCls = p.category.includes('Poker') ? 'tag-poker' : p.category.includes('Table') ? 'tag-tables' : p.category.includes('Slots') ? 'tag-slots' : 'tag-general';
    return \`<div class="post-card">
      <div class="post-top">
        <div class="post-meta">
          <div class="avatar" style="\${avatarStyle}">\${initials}</div>
          <div>
            <div class="post-author">\${p.is_anonymous ? 'Anonymous' : p.author}</div>
            <div class="post-time">\${timeAgo(p.created_at)}</div>
          </div>
        </div>
      </div>
      <div class="post-body">\${p.body}</div>
      <div class="post-bottom">
        <span class="post-tag \${tagCls}">\${p.category}</span>
        <button class="action-btn" onclick="helpful(this, '\${p.id}')">👍 \${p.helpful_count || 0}</button>
      </div>
    </div>\`;
  }).join('');
}

async function helpful(btn, id) {
  try {
    const post = allPosts.find(p => p.id === id);
    if (!post) return;
    post.helpful_count = (post.helpful_count || 0) + 1;
    btn.textContent = '👍 ' + post.helpful_count;
    await fetch(\`\${SUPABASE_URL}/rest/v1/posts?id=eq.\${id}\`, {
      method: 'PATCH',
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY, 'Content-Type': 'application/json' },
      body: JSON.stringify({ helpful_count: post.helpful_count })
    });
  } catch(e) {}
}

async function submitPost() {
  const body = document.getElementById('composeBody').value.trim();
  if (!body) return;
  const btn = document.getElementById('postBtn');
  btn.disabled = true; btn.textContent = 'Posting...';
  const author = isAnon ? 'Anonymous' : (document.getElementById('authorName').value.trim() || 'Anonymous');
  try {
    const r = await fetch(\`\${SUPABASE_URL}/rest/v1/posts\`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY, 'Content-Type': 'application/json', 'Prefer': 'return=representation' },
      body: JSON.stringify({ body, casino: CASINO_NAME, category: document.getElementById('composeCategory').value, author, is_anonymous: isAnon, helpful_count: 0, is_seeded: false })
    });
    const [newPost] = await r.json();
    allPosts.unshift(newPost);
    renderFeed(allPosts);
    document.getElementById('composeBody').value = '';
  } catch(e) {}
  btn.disabled = false; btn.textContent = 'Post Update';
}

async function loadScore() {
  try {
    const r = await fetch(\`/api/score?casino=\${encodeURIComponent(CASINO_NAME)}\`);
    const s = await r.json();
    document.getElementById('scoreNum').textContent = s.total;
    document.getElementById('scoreNum').style.color = s.total >= 70 ? '#1a6b3c' : s.total >= 40 ? '#b07d2a' : '#888';
    document.getElementById('scoreFactors').innerHTML = [
      ['Activity', s.factors.activity],
      ['Community', s.factors.engagement],
      ['Google', s.factors.google],
      ['Weather', s.factors.weather],
      ['Timing', s.factors.timing],
    ].map(([label, val]) => \`<div class="score-row"><span class="score-label">\${label}</span><div class="score-bar-wrap"><div class="score-bar-fill" style="width:\${val}%"></div></div><span class="score-val">\${val}</span></div>\`).join('');
  } catch(e) {}
}

loadScore();
setInterval(async () => {
  try {
    const r = await fetch(\`\${SUPABASE_URL}/rest/v1/posts?casino=eq.\${encodeURIComponent(CASINO_NAME)}&order=created_at.desc&limit=50\`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    });
    allPosts = await r.json();
    renderFeed(allPosts);
  } catch(e) {}
}, 30000);

function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('darkToggle').textContent = isDark ? '☀️' : '🌙';
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('darkToggle').textContent = '☀️';
}
</script>
<footer>
  <div class="footer-logo"><div class="logo-dot" style="animation:none;opacity:.7"></div>Casino<span style="color:var(--accent)">Conditions</span></div>
  <div class="footer-links">
    <a class="footer-link" href="/about">About</a>
    <a class="footer-link" href="/terms">Terms</a>
    <a class="footer-link" href="/privacy">Privacy</a>
  </div>
  <div class="footer-copy">© 2026 CasinoConditions</div>
</footer>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate');
  res.status(200).send(html);
}

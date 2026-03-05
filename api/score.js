const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { casino, lat, lon, placeId } = req.query;
  if (!casino) return res.status(400).json({ error: 'casino required' });

  const key = process.env.GOOGLE_KEY;

  console.log('score params - casino:', casino, 'lat:', lat, 'lon:', lon, 'placeId:', placeId, 'key exists:', !!key);

  // Fetch all in parallel
  const [postsRes, weatherRes, placesRes] = await Promise.all([
    fetch(`${SUPABASE_URL}/rest/v1/posts?casino=eq.${encodeURIComponent(casino)}&select=created_at,helpful_count&limit=1000`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Range': '0-999' }
    }),
    lat && lon ? fetch(`https://weather.googleapis.com/v1/currentConditions:lookup?key=${key}&location.latitude=${lat}&location.longitude=${lon}&unitsSystem=IMPERIAL`).then(r => { console.log('weather status:', r.status); return r; }).catch(e => { console.error('weather fetch error:', e); return null; }) : Promise.resolve(null),
    placeId ? fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${key}`).then(r => { console.log('places status:', r.status); return r; }).catch(e => { console.error('places fetch error:', e); return null; }) : Promise.resolve(null),
  ]);

  const posts = await postsRes.json();
  const weather = weatherRes ? await weatherRes.json().catch((e) => { console.error('weather parse error', e); return null; }) : null;
  const places = placesRes ? await placesRes.json().catch((e) => { console.error('places parse error', e); return null; }) : null;

  // Log raw responses for debugging
  if (weather) console.log('weather response:', JSON.stringify(weather).slice(0, 300));
  else console.log('weather: null response (weatherRes was', !!weatherRes, ')');
  if (places) console.log('places response:', JSON.stringify(places).slice(0, 300));
  else console.log('places: null response (placesRes was', !!placesRes, ')');

  const now = new Date();
  const last24h = posts.filter(p => (now - new Date(p.created_at)) < 86400000);
  const last7d = posts.filter(p => (now - new Date(p.created_at)) < 604800000);
  const helpfulVotes = posts.reduce((s, p) => s + (p.helpful_count || 0), 0);

  // Factor 1: Recent activity (0-30)
  const activityScore = Math.min(30, last24h.length * 8 + last7d.length * 2);
  // Factor 2: Engagement (0-20)
  const engagementScore = Math.min(20, helpfulVotes * 3);
  // Factor 3: Google rating (0-25)
  const rating = places?.rating;
  const googleScore = rating ? Math.round(((rating - 1) / 4) * 25) : 12;
  // Factor 4: Weather (0-15)
  let weatherScore = 10;
  let weatherMain = null, temp = 60, weatherDesc = null;
  if (weather?.temperature) {
    temp = weather.temperature.degrees;
    const type = weather.weatherCondition?.type || 'CLEAR';
    weatherDesc = weather.weatherCondition?.description?.text;
    const mainMap = { CLEAR:'Clear', CLOUDY:'Clouds', PARTLY_CLOUDY:'Clouds', RAIN:'Rain', LIGHT_RAIN:'Rain', RAIN_SHOWERS:'Rain', DRIZZLE:'Drizzle', SNOW:'Snow', HEAVY_SNOW:'Snow', THUNDERSTORM:'Thunderstorm' };
    weatherMain = mainMap[type] || 'Clear';
    if (['Rain','Drizzle','Snow','Thunderstorm'].includes(weatherMain)) weatherScore = 15;
    else if (weatherMain === 'Clear' && temp > 65) weatherScore = 5;
  }
  // Factor 5: Timing (0-10)
  const hour = now.getHours(), day = now.getDay();
  let timeScore = 5;
  if (day === 0 || day === 6) timeScore += 3;
  if (hour >= 19 || hour <= 2) timeScore += 2;

  const total = Math.min(100, Math.round(activityScore + engagementScore + googleScore + weatherScore + timeScore));

  res.status(200).json({
    total,
    factors: {
      activity: Math.round((activityScore/30)*100),
      engagement: Math.round((engagementScore/20)*100),
      google: Math.round((googleScore/25)*100),
      weather: Math.round((weatherScore/15)*100),
      timing: Math.round((timeScore/10)*100),
    },
    last24h: last24h.length,
    totalPosts: posts.length,
    googleRating: rating || null,
    googleReviews: places?.userRatingCount || null,
    weatherMain, weatherDesc, temp,
  });
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const CASINOS = [
  { name: 'Mohegan Sun', state: 'CT', lat: 41.4901, lon: -72.0957 },
  { name: 'Foxwoods Resort Casino', state: 'CT', lat: 41.4898, lon: -71.9590 },
  { name: "Jake's 58 Casino", state: 'NY', lat: 40.7937, lon: -73.1885 },
  { name: 'Empire City Casino', state: 'NY', lat: 40.9312, lon: -73.8988 },
  { name: 'Resorts World NYC', state: 'NY', lat: 40.6697, lon: -73.8330 },
  { name: "Bally's Twin River", state: 'RI', lat: 41.9337, lon: -71.4668 },
  { name: "Bally's Tiverton", state: 'RI', lat: 41.6354, lon: -71.2120 },
  { name: 'Plainridge Park Casino', state: 'MA', lat: 42.0154, lon: -71.3284 },
  { name: 'Resorts World Catskills', state: 'NY', lat: 41.6537, lon: -74.6910 },
  { name: 'MGM Springfield', state: 'MA', lat: 42.1015, lon: -72.5898 },
  { name: 'Encore Boston Harbor', state: 'MA', lat: 42.3957, lon: -71.0820 },
  { name: 'Borgata', state: 'NJ', lat: 39.3636, lon: -74.4421 },
  { name: 'Hard Rock Atlantic City', state: 'NJ', lat: 39.3611, lon: -74.4229 },
  { name: 'Caesars Atlantic City', state: 'NJ', lat: 39.3541, lon: -74.4382 },
  { name: "Harrah's Atlantic City", state: 'NJ', lat: 39.3604, lon: -74.4274 },
  { name: "Bally's Atlantic City", state: 'NJ', lat: 39.3590, lon: -74.4349 },
  { name: 'Resorts Casino Atlantic City', state: 'NJ', lat: 39.3636, lon: -74.4202 },
  { name: 'Golden Nugget Atlantic City', state: 'NJ', lat: 39.3766, lon: -74.4418 },
  { name: 'Wind Creek Bethlehem', state: 'PA', lat: 40.6196, lon: -75.3647 },
  { name: 'Parx Casino', state: 'PA', lat: 40.1012, lon: -74.9480 },
  { name: 'Live! Casino Philadelphia', state: 'PA', lat: 39.9100, lon: -75.1675 },
  { name: 'Mount Airy Casino', state: 'PA', lat: 41.1248, lon: -75.3571 },
];

const CASINO_VENUES = {
  'Mohegan Sun': {
    bars: ["Bow & Arrow","Lansdowne Pub","Harvest Moon Bar","Star Bar","Taughannick Falls Bar","Vista Lounge","MJ23 Sports Bar","Tom's Watch Bar","Novelle"],
    restaurants: ["Ballo","Michael Jordan's Steak House","SolToro","TAO","Hash House A Go Go","Frank Pepe Pizzeria","The Shed","Tuscany","Comix Roadhouse","Beauty & Essex"],
    slots: ["the high limit room","the main floor","Earth Casino","Sky Casino","the penny slots"],
    poker: ["the poker room","the main poker room"],
  },
  'Foxwoods Resort Casino': {
    bars: ["Spin Bar","Scorpion Bar","Grand Bar","PLAY Bar","Truth Bar","High Rollers Sports Lounge","Live@Atrium Bar"],
    restaurants: ["Guy Fieri's Kitchen + Bar","Hell's Kitchen","Momosan","Hard Rock Cafe","Junior's","David Burke Prime","Alta Strada","Cedars Steaks & Oysters","Sugar Factory","Matches Tavern","Wahlburgers"],
    slots: ["the high limit slots","Great Cedar Casino","Grand Pequot Casino","the main floor","the penny slots"],
    poker: ["the poker room","the main poker room","the high stakes room"],
  },
  'Encore Boston Harbor': {
    bars: ["Overlook Bar","Lobby Bar","Harbor Bar","On Deck Sports Bar"],
    restaurants: ["Rare Steakhouse","Sinatra","Fratelli","Mystique","State Road Restaurant & Tavern"],
    slots: ["the main floor","the high limit room","the slots lounge"],
    poker: ["the poker room"],
  },
  'MGM Springfield': {
    bars: ["TAP Sports Bar","Voltaire","Roar"],
    restaurants: ["Chandler Steakhouse","Wahlburgers","The Rye","Mardi Gras"],
    slots: ["the main floor","the high limit slots","the gaming floor"],
    poker: ["the poker room"],
  },
  'Borgata': {
    bars: ["The Borgata Bar","Gypsy Bar","Izakaya"],
    restaurants: ["Bobby Flay Steak","Wolfgang Puck American Grille","Old Homestead Steakhouse","Fornelletto"],
    slots: ["the high limit room","the main floor","the slots lounge"],
    poker: ["the poker room","the World Poker Tour room"],
  },
  'default': {
    bars: ["the bar","the sports bar","the lounge","the main bar"],
    restaurants: ["the steakhouse","the buffet","the main restaurant","the cafe"],
    slots: ["the slots floor","the high limit room","the main floor"],
    poker: ["the poker room"],
  }
};

const FEMALE_NAMES = ['Ashley','Brittany','Chelsea','Danielle','Emma','Fiona','Grace','Hannah','Isabella','Jamie','Katie','Lauren','Megan','Nicole','Olivia','Paige','Rachel','Samantha','Taylor','Victoria','Amber','Brooke','Cassie','Diana','Elena','Faith','Gina','Holly','Jessica','Kayla','Lisa','Maria','Natalie','Priya','Sara','Tina','Vanessa','Whitney','Zoe'];
const MALE_NAMES = ['Alex','Brian','Carlos','Derek','Eddie','Frank','Greg','Hunter','Jason','Kevin','Luis','Mike','Nathan','Oscar','Pete','Rob','Steve','Tyler','Victor','Will','Zach','Adam','Ben','Cole','Dave','Eric','Felix','Gary','Hank','Ian','Jake','Kyle','Liam','Marco','Nick','Owen','Paul','Ray','Sean','Tom','Vince'];

function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function maybe(p) { return Math.random() < p; }

function getVenues(name) { return CASINO_VENUES[name] || CASINO_VENUES['default']; }

function randomAuthor() {
  if (maybe(0.3)) return { name: 'Anonymous', isAnon: true };
  return { name: pick([...FEMALE_NAMES, ...MALE_NAMES]), isAnon: false };
}

function getWeatherPosts(weatherMain, temp) {
  const posts = [];
  if (!weatherMain) return posts;
  const cold = temp < 35, snowy = weatherMain === 'Snow';
  const rainy = ['Rain','Drizzle'].includes(weatherMain);
  const stormy = weatherMain === 'Thunderstorm';
  const hot = temp > 82;
  const chilly = temp >= 35 && temp < 50;
  if (cold || snowy) posts.push(
    `it is FREEZING out there lol, glad i'm in here`,
    `literally could not feel my face walking from the parking lot 😂`,
    `cold asf outside but nice and warm in here`,
    `my car said ${Math.round(temp)}° when i pulled in... yeah i'm not leaving anytime soon`,
  );
  if (rainy || stormy) posts.push(
    `nasty out there tonight, perfect excuse to be here`,
    `it's pouring out, good night to be inside`,
    `came in soaking wet but worth it lol`,
    `rain brought me in, slots might keep me here 😅`,
  );
  if (chilly) posts.push(`little chilly out tonight, nice in here though`, `needed somewhere warm, ended up here 😄`);
  if (hot) posts.push(`AC in here is everything on a night like this`, `too hot to be outside anyway so here i am`);
  return posts;
}

function buildPool(casino, weatherMain, temp) {
  const v = getVenues(casino.name);
  const pool = [
    { b: `good energy in here tonight`, c: '📢 General' },
    { b: `love this place honestly`, c: '📢 General' },
    { b: `been here since like 7, still going 😅`, c: '📢 General' },
    { b: `my friend dragged me here and now i don't wanna leave lol`, c: '📢 General' },
    { b: `date night turned into a whole thing 😂`, c: '📢 General' },
    { b: `just needed to get out of the house, good call`, c: '📢 General' },
    { b: `pretty decent crowd tonight`, c: '📢 General' },
    { b: `vibes are immaculate rn ngl`, c: '📢 General' },
    { b: `first time back in a while, forgot how fun this is`, c: '📢 General' },
    { b: `came with coworkers, turned into a whole night out 😂`, c: '📢 General' },
    { b: `service has been really solid all night`, c: '📢 General' },
    { b: `this place never disappoints tbh`, c: '📢 General' },
    { b: `parking was smooth tonight, no wait`, c: '📢 General' },
    { b: `not too crowded, easy to move around`, c: '📢 General' },
    { b: `super busy tonight, great atmosphere`, c: '📢 General' },
    { b: `drinks at ${pick(v.bars)} are hitting tonight 🍹`, c: '📢 General' },
    { b: `just ate at ${pick(v.restaurants)}, honestly really good`, c: '📢 General' },
    { b: `bartender at ${pick(v.bars)} is amazing, best service all night`, c: '📢 General' },
    { b: `${pick(v.restaurants)} did not disappoint, would recommend`, c: '📢 General' },
    { b: `cocktails at ${pick(v.bars)} are dangerous rn 😂`, c: '📢 General' },
    { b: `stopped at ${pick(v.restaurants)} before hitting the floor, solid move`, c: '📢 General' },
    { b: `food at ${pick(v.restaurants)} was way better than expected`, c: '📢 General' },
    { b: `happy hour at ${pick(v.bars)} was a great call`, c: '📢 General' },
    { b: `${pick(v.restaurants)} is always a W`, c: '📢 General' },
    { b: `drinks are flowing and the vibes are good 🍸`, c: '📢 General' },
    { b: `slots have been kind to me tonight 🎰`, c: '🎰 Slots' },
    { b: `up a little on slots, calling it a win`, c: '🎰 Slots' },
    { b: `making money at slots rn, don't wanna jinx it 🤫`, c: '🎰 Slots' },
    { b: `hit a nice bonus on ${pick(v.slots)}, great night so far`, c: '🎰 Slots' },
    { b: `${pick(v.slots)} is popping tonight`, c: '🎰 Slots' },
    { b: `found a hot machine on ${pick(v.slots)} 🔥`, c: '🎰 Slots' },
    { b: `down a little but had a blast on the slots tbh`, c: '🎰 Slots' },
    { b: `my friend just hit a nice bonus on ${pick(v.slots)} 🎉`, c: '🎰 Slots' },
    { b: `high limit room is buzzing tonight`, c: '🎰 Slots' },
    { b: `slots feel loose tonight honestly`, c: '🎰 Slots' },
    { b: `blackjack tables have been good to me tonight 🃏`, c: '🎲 Table Games' },
    { b: `dealer's been busting a lot, good table energy`, c: '🎲 Table Games' },
    { b: `craps table is LOUD tonight lol, always a good sign`, c: '🎲 Table Games' },
    { b: `roulette hitting on my numbers tonight 🤑`, c: '🎲 Table Games' },
    { b: `table minimums are reasonable tonight`, c: '🎲 Table Games' },
    { b: `good run at blackjack, up a couple hundred 🙌`, c: '🎲 Table Games' },
    { b: `tables are packed but moving fast`, c: '🎲 Table Games' },
    { b: `found a $10 blackjack table 👍`, c: '🎲 Table Games' },
    { b: `dealer been ice cold tonight, our table is eating 😂`, c: '🎲 Table Games' },
    { b: `baccarat crowd is lively rn`, c: '🎲 Table Games' },
    { b: `poker room is busy tonight, good action 🃏`, c: '🃏 Poker Room' },
    { b: `should i play 1/2 NL tonight or just stick to slots? lol`, c: '🃏 Poker Room' },
    { b: `anyone know if the 2/5 game is running tonight?`, c: '🃏 Poker Room' },
    { b: `1/2 NL is super soft tonight, lots of recreational players 🐟`, c: '🃏 Poker Room' },
    { b: `just sat down at 1/2, table looks fun`, c: '🃏 Poker Room' },
    { b: `should i jump on the 1/2 or wait for a 2/5 seat?`, c: '🃏 Poker Room' },
    { b: `poker room has great energy tonight`, c: '🃏 Poker Room' },
    { b: `wait for 1/2 is pretty short right now fyi`, c: '🃏 Poker Room' },
    { b: `tournament just started, crowd is fired up 🔥`, c: '🃏 Poker Room' },
    { b: `been grinding 1/2 for a few hours, up a buy in 🙌`, c: '🃏 Poker Room' },
    { b: `is the 2/5 worth it tonight or is 1/2 better action?`, c: '🃏 Poker Room' },
    { b: `poker room staff super friendly tonight`, c: '🃏 Poker Room' },
    { b: `just doubled up at 1/2, great table 🃏`, c: '🃏 Poker Room' },
  ];
  getWeatherPosts(weatherMain, temp).forEach(w => pool.push({ b: w, c: '📢 General' }));
  return pool;
}

function randomRecentTime() {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 3);
  const date = new Date(now);
  date.setDate(date.getDate() - daysAgo);
  const hour = 16 + Math.floor(Math.random() * 10);
  date.setHours(hour % 24, Math.floor(Math.random() * 60), 0, 0);
  if (hour >= 24) date.setDate(date.getDate() + 1);
  return date.toISOString();
}

async function sbFetch(path, options = {}) {
  const r = await fetch(`${SUPABASE_URL}/rest/v1${path}`, {
    ...options,
    headers: {
      'apikey': SUPABASE_KEY,
      'Authorization': `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      'Prefer': options.prefer || 'return=minimal',
      ...options.headers,
    },
  });
  if (options.returnData) return r.json();
  return r;
}

async function getWeather(lat, lon) {
  const key = process.env.GOOGLE_KEY;
  try {
    const r = await fetch(`https://weather.googleapis.com/v1/currentConditions:lookup?key=${key}&location.latitude=${lat}&location.longitude=${lon}&unitsSystem=IMPERIAL`);
    const data = await r.json();
    if (!data.temperature) return { weatherMain: null, temp: 60 };
    const type = data.weatherCondition?.type || 'CLEAR';
    const mainMap = { CLEAR:'Clear', CLOUDY:'Clouds', PARTLY_CLOUDY:'Clouds', RAIN:'Rain', LIGHT_RAIN:'Rain', RAIN_SHOWERS:'Rain', DRIZZLE:'Drizzle', SNOW:'Snow', HEAVY_SNOW:'Snow', THUNDERSTORM:'Thunderstorm' };
    return { weatherMain: mainMap[type] || 'Clear', temp: data.temperature.degrees };
  } catch(e) { return { weatherMain: null, temp: 60 }; }
}

async function seedCasino(casino, weatherMain, temp) {
  // Check real post count — don't seed if users are active
  const realPosts = await sbFetch(`/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.false&select=id`, { returnData: true });
  if ((realPosts?.length || 0) >= 5) return 0;

  // Delete seeded posts older than 3 days to keep feed fresh
  const threeDaysAgo = new Date(Date.now() - 3 * 86400000).toISOString();
  await sbFetch(`/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.true&created_at=lt.${threeDaysAgo}`, { method: 'DELETE' });

  // Check remaining seeded posts
  const seededPosts = await sbFetch(`/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.true&select=body`, { returnData: true });
  const seededCount = seededPosts?.length || 0;
  const target = Math.floor(Math.random() * 4) + 5; // 5–8 posts per casino
  if (seededCount >= target) return 0;

  const existingBodies = new Set((seededPosts || []).map(p => p.body));
  const pool = buildPool(casino, weatherMain, temp);
  const toInsert = [];
  let attempts = 0;

  while (toInsert.length < (target - seededCount) && attempts < 80) {
    attempts++;
    const item = pick(pool);
    if (!existingBodies.has(item.b)) {
      existingBodies.add(item.b);
      const { name, isAnon } = randomAuthor();
      toInsert.push({
        body: item.b, casino: casino.name, category: item.c,
        author: name, is_anonymous: isAnon,
        helpful_count: Math.floor(Math.random() * 7),
        is_seeded: true,
        created_at: randomRecentTime(),
      });
    }
  }

  if (toInsert.length > 0) {
    await sbFetch('/posts', { method: 'POST', body: JSON.stringify(toInsert), prefer: 'return=minimal', headers: { 'Prefer': 'return=minimal' } });
  }
  return toInsert.length;
}

export default async function handler(req, res) {
  // Allow manual trigger too
  const total = { seeded: 0, casinos: 0 };

  for (const casino of CASINOS) {
    const { weatherMain, temp } = await getWeather(casino.lat, casino.lon);
    const count = await seedCasino(casino, weatherMain, temp);
    if (count > 0) { total.seeded += count; total.casinos++; }
    await new Promise(r => setTimeout(r, 100));
  }

  res.status(200).json({ success: true, ...total, timestamp: new Date().toISOString() });
}

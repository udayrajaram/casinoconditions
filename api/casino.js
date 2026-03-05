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
  'Bellagio': [36.1129, -115.1765],
  'MGM Grand Las Vegas': [36.1025, -115.1701],
  'Caesars Palace': [36.1162, -115.1745],
  'The Venetian Las Vegas': [36.1210, -115.1697],
  'Wynn Las Vegas': [36.1265, -115.1672],
  'Aria Resort & Casino': [36.1072, -115.1757],
  'Cosmopolitan of Las Vegas': [36.1096, -115.1762],
  'Paris Las Vegas': [36.1124, -115.1706],
  "Harrah's Las Vegas": [36.1151, -115.1719],
  'Planet Hollywood Las Vegas': [36.1092, -115.1714],
  'Mandalay Bay': [36.0908, -115.1762],
  'New York-New York': [36.1023, -115.1745],
  'Treasure Island': [36.1247, -115.1714],
  'Golden Nugget Las Vegas': [36.1706, -115.1422],
  "Binion's Gambling Hall": [36.1697, -115.1440],
  // Reno / Tahoe
  'Peppermill Resort Spa Casino': [39.5114, -119.7817],
  'Grand Sierra Resort': [39.5296, -119.7781],
  'Silver Legacy Resort Casino': [39.5274, -119.8166],
  'Atlantis Casino Resort Spa': [39.4968, -119.7817],
  "Harrah's Lake Tahoe": [38.9597, -119.9438],
  'Harveys Lake Tahoe': [38.9592, -119.9443],
  'Hard Rock Hotel & Casino Lake Tahoe': [38.9601, -119.9445],
  // Detroit
  'MGM Grand Detroit': [42.3314, -83.0499],
  'MotorCity Casino Hotel': [42.3531, -83.0874],
  'Greektown Casino-Hotel': [42.3326, -83.0420],
  // Chicago / IL / IN
  'Rivers Casino Des Plaines': [42.0334, -87.8914],
  'Hollywood Casino Aurora': [41.7569, -88.3201],
  'Horseshoe Hammond': [41.6305, -87.4996],
  'Hard Rock Casino Northern Indiana': [41.5784, -87.3631],
  'Four Winds South Bend': [41.6764, -86.2520],
  // Mississippi
  'Beau Rivage Resort & Casino': [30.3939, -88.8854],
  'Hard Rock Hotel & Casino Biloxi': [30.3957, -88.8745],
  'IP Casino Resort Spa': [30.3914, -88.8800],
  'Scarlet Pearl Casino Resort': [30.4303, -88.9015],
  'Golden Nugget Biloxi': [30.4010, -88.8723],
  'Hollywood Casino Tunica': [34.6482, -90.3673],
  // Louisiana
  "Harrah's New Orleans": [29.9490, -90.0699],
  "L'Auberge Casino Resort Baton Rouge": [30.4151, -91.1637],
  "L'Auberge Casino & Hotel Lake Charles": [30.2115, -93.2174],
  'Coushatta Casino Resort': [30.4817, -92.8451],
  'Boomtown Casino New Orleans': [29.8979, -90.0824],
  // Florida
  'Seminole Hard Rock Hotel & Casino Hollywood': [26.0094, -80.1773],
  'Seminole Casino Coconut Creek': [26.2726, -80.1892],
  'Seminole Hard Rock Hotel & Casino Tampa': [27.9771, -82.4714],
  'Magic City Casino': [25.7771, -80.2284],
  'Isle Casino Racing Pompano Park': [26.2361, -80.1242],
  // Colorado
  'Ameristar Casino Black Hawk': [39.7989, -105.4872],
  'Monarch Casino & Resort': [39.7993, -105.4854],
  'Isle Casino Hotel Black Hawk': [39.7985, -105.4882],
  "Bronco Billy's Casino": [38.7441, -105.1783],
  'Sky Ute Casino Resort': [37.1108, -107.6306],
  // Oklahoma
  'WinStar World Casino': [33.7791, -97.1434],
  'Choctaw Casino Resort Durant': [33.9826, -96.4083],
  'Hard Rock Hotel & Casino Tulsa': [36.2047, -95.8569],
  'Osage Casino Hotel Tulsa': [36.2584, -95.9558],
  'Cherokee Casino & Hotel Roland': [35.4134, -94.5241],
  // Arizona
  'Talking Stick Resort': [33.5726, -111.8910],
  'Wild Horse Pass Hotel & Casino': [33.2855, -111.9353],
  'Casino Arizona': [33.5729, -111.8903],
  'Desert Diamond Casino West Valley': [33.5356, -112.2632],
  'Fort McDowell Casino': [33.6573, -111.6865],
  // California
  'Pechanga Resort Casino': [33.4722, -117.0634],
  'Morongo Casino Resort & Spa': [33.9290, -116.9712],
  'Agua Caliente Casino Cathedral City': [33.7805, -116.4645],
  'Barona Resort & Casino': [32.8705, -116.8627],
  'Sycuan Casino Resort': [32.8218, -116.8053],
  'San Manuel Casino': [34.1481, -117.2626],
  'Thunder Valley Casino Resort': [38.9066, -121.2878],
  'Cache Creek Casino Resort': [38.7926, -122.1558],
  'Graton Resort & Casino': [38.3462, -122.6946],
  'Soboba Casino Resort': [33.8053, -116.9376],
  // Pacific Northwest
  'Tulalip Resort Casino': [48.0587, -122.1152],
  'Snoqualmie Casino': [47.5295, -121.8374],
  'Muckleshoot Casino': [47.3057, -122.1474],
  'Ilani Casino Resort': [45.8357, -122.7487],
  'Spirit Mountain Casino': [45.0637, -123.5720],
  // Midwest
  'Potawatomi Hotel & Casino': [43.0389, -87.9384],
  'Mystic Lake Casino Hotel': [44.7271, -93.4271],
  'Ameristar Casino Kansas City': [39.1053, -94.5808],
  'Hollywood Casino St. Louis': [38.7162, -90.4617],
  'Prairie Band Casino & Resort': [39.4194, -95.7030],
  // Mid-Atlantic
  'MGM National Harbor': [38.7823, -77.0134],
  'Live! Casino & Hotel Maryland': [39.1657, -76.7282],
  'Hollywood Casino Perryville': [39.5634, -76.0728],
  'Rivers Casino Philadelphia': [40.0003, -75.1344],
  'Hollywood Casino at Penn National': [40.3153, -76.6778],
  'Mohegan Sun Pocono': [41.2698, -75.8457],
  'Valley Forge Casino Resort': [40.0912, -75.3824],
  'Presque Isle Downs & Casino': [42.0864, -80.1554],
  // Upstate NY
  'Turning Stone Resort Casino': [43.1024, -75.5957],
  'Rivers Casino & Resort Schenectady': [42.8149, -73.9496],
  'del Lago Resort & Casino': [42.9134, -76.8713],
  'Tioga Downs Casino Resort': [42.0147, -76.5775],
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

// Cache Google rating + weather in Supabase for 1 hour to avoid API costs
async function getCached(casinoName) {
  try {
    const r = await fetch(`${SUPABASE_URL}/rest/v1/casino_cache?casino=eq.${encodeURIComponent(casinoName)}&select=*&limit=1`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    });
    const data = await r.json();
    if (!data?.[0]) return null;
    const age = Date.now() - new Date(data[0].updated_at).getTime();
    if (age > 3600000) return null; // expired after 1 hour
    return data[0];
  } catch(e) { return null; }
}

async function setCached(casinoName, payload) {
  try {
    await fetch(`${SUPABASE_URL}/rest/v1/casino_cache?casino=eq.${encodeURIComponent(casinoName)}`, {
      method: 'DELETE',
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
    });
    await fetch(`${SUPABASE_URL}/rest/v1/casino_cache`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}`, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
      body: JSON.stringify({ casino: casinoName, ...payload, updated_at: new Date().toISOString() })
    });
  } catch(e) {}
}

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
  // Las Vegas
  { name: 'Bellagio', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'bellagio', desc: 'One of the most iconic casinos in the world with 116,000 sq ft of gaming, a world-class poker room, and the famous fountain show.' },
  { name: 'MGM Grand Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'mgm-grand-las-vegas', desc: 'One of the largest hotels in the world with 170,000 sq ft of gaming, a massive poker room, and world-class entertainment.' },
  { name: 'Caesars Palace', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'caesars-palace', desc: 'The legendary Roman-themed resort with 124,000 sq ft of gaming, a renowned poker room, and dozens of celebrity restaurants.' },
  { name: 'The Venetian Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'venetian-las-vegas', desc: 'A luxury Italian-themed mega-resort with 120,000 sq ft of gaming, 37-table poker room, and gondola rides through the casino.' },
  { name: 'Wynn Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'wynn-las-vegas', desc: 'One of Vegas\'s most upscale properties with 110,000 sq ft of gaming, high-limit rooms, and impeccable service.' },
  { name: 'Aria Resort & Casino', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'aria-las-vegas', desc: 'A modern luxury resort on the Strip with 150,000 sq ft of gaming and one of the most popular poker rooms in Vegas.' },
  { name: 'Cosmopolitan of Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'cosmopolitan-las-vegas', desc: 'A sleek boutique-style casino resort with 100,000 sq ft of gaming, a lively casino floor, and some of the best bars on the Strip.' },
  { name: 'Paris Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'paris-las-vegas', desc: 'A French-themed casino with 95,000 sq ft of gaming, a replica Eiffel Tower, and a lively table game floor.' },
  { name: 'Harrah\'s Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'harrahs-las-vegas', desc: 'A classic Strip casino with 87,000 sq ft of gaming, good table minimums, and a fun casual atmosphere.' },
  { name: 'Planet Hollywood Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'planet-hollywood-las-vegas', desc: 'A lively casino resort with 95,000 sq ft of gaming in the heart of the Strip, known for its energetic atmosphere.' },
  { name: 'Mandalay Bay', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'mandalay-bay', desc: 'A massive resort at the south end of the Strip with 135,000 sq ft of gaming, a beach club, and a large poker room.' },
  { name: 'New York-New York', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'new-york-new-york', desc: 'A fun NYC-themed casino with 84,000 sq ft of gaming, low table minimums, and a roller coaster outside.' },
  { name: 'Treasure Island', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'treasure-island-las-vegas', desc: 'A mid-Strip casino known for affordable table minimums, good slots, and a laid-back atmosphere.' },
  { name: 'Golden Nugget Las Vegas', location: 'Downtown Las Vegas, NV', state: 'NV', miles: 2800, slug: 'golden-nugget-las-vegas', desc: 'The crown jewel of Downtown Las Vegas with 75,000 sq ft of gaming, a legendary poker room, and the famous shark tank pool.' },
  { name: 'Binion\'s Gambling Hall', location: 'Downtown Las Vegas, NV', state: 'NV', miles: 2800, slug: 'binions', desc: 'A legendary Downtown Vegas institution famous for its poker history, high-limit action, and old-school Vegas vibe.' },
  // Reno / Lake Tahoe
  { name: 'Peppermill Resort Spa Casino', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'peppermill-reno', desc: "Reno's premier resort casino with 100,000 sq ft of gaming, a world-class spa, and top-tier dining." },
  { name: 'Grand Sierra Resort', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'grand-sierra-resort', desc: "One of Reno's largest casino resorts with 80,000 sq ft of gaming, bowling, and entertainment." },
  { name: 'Silver Legacy Resort Casino', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'silver-legacy-reno', desc: 'Iconic Victorian-themed casino in downtown Reno with 85,000 sq ft of gaming.' },
  { name: 'Atlantis Casino Resort Spa', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'atlantis-reno', desc: "Upscale Reno casino resort with 61,000 sq ft of gaming, a full spa, and award-winning restaurants." },
  { name: "Harrah's Lake Tahoe", location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'harrahs-lake-tahoe', desc: 'Full casino resort on the south shore of Lake Tahoe with 60,000 sq ft of gaming and mountain views.' },
  { name: 'Harveys Lake Tahoe', location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'harveys-lake-tahoe', desc: "Lake Tahoe's original casino resort with 88,000 sq ft of gaming, a rooftop pool, and live entertainment." },
  { name: 'Hard Rock Hotel & Casino Lake Tahoe', location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'hard-rock-lake-tahoe', desc: 'Rock-themed casino on the shores of Lake Tahoe with slots, table games, and a poker room.' },
  // Detroit
  { name: 'MGM Grand Detroit', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'mgm-grand-detroit', desc: "Detroit's premier casino with 100,000 sq ft of gaming, a world-class poker room, and luxury hotel." },
  { name: 'MotorCity Casino Hotel', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'motorcity-casino', desc: 'A Detroit staple with 100,000 sq ft of gaming, great concerts, and a lively table game floor.' },
  { name: 'Greektown Casino-Hotel', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'greektown-casino', desc: "Located in Detroit's Greektown with 100,000 sq ft of gaming and easy downtown access." },
  // Chicago / Illinois / Indiana
  { name: 'Rivers Casino Des Plaines', location: 'Des Plaines, IL', state: 'IL', miles: 800, slug: 'rivers-casino-des-plaines', desc: "The busiest casino in Illinois with 1,100 slots, 60 table games, and a poker room near O'Hare." },
  { name: 'Hollywood Casino Aurora', location: 'Aurora, IL', state: 'IL', miles: 830, slug: 'hollywood-casino-aurora', desc: 'A riverboat casino on the Fox River with 1,100 slots, 50+ table games, and a sports betting lounge.' },
  { name: 'Horseshoe Hammond', location: 'Hammond, IN', state: 'IN', miles: 790, slug: 'horseshoe-hammond', desc: 'One of the largest casinos in the Midwest with 100,000 sq ft of gaming and a renowned poker room just outside Chicago.' },
  { name: 'Hard Rock Casino Northern Indiana', location: 'Gary, IN', state: 'IN', miles: 800, slug: 'hard-rock-northern-indiana', desc: 'Rock-themed casino in Gary with 1,600+ slots, table games, poker, and great dining.' },
  { name: 'Four Winds South Bend', location: 'South Bend, IN', state: 'IN', miles: 750, slug: 'four-winds-south-bend', desc: 'Premier tribal casino near Notre Dame with 3,000+ slots, table games, poker, and a hotel.' },
  // Mississippi / Gulf Coast
  { name: 'Beau Rivage Resort & Casino', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'beau-rivage-biloxi', desc: "MGM's flagship Gulf Coast resort with 85,000 sq ft of gaming, a top poker room, and beachfront views." },
  { name: 'Hard Rock Hotel & Casino Biloxi', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'hard-rock-biloxi', desc: 'Rock-themed beachfront casino in Biloxi with 800+ slots, 60+ table games, and a poker room.' },
  { name: 'IP Casino Resort Spa', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'ip-casino-biloxi', desc: 'Full resort casino in Biloxi with 1,000+ slots, table games, and a spa on the Gulf Coast.' },
  { name: 'Scarlet Pearl Casino Resort', location: "D'Iberville, MS", state: 'MS', miles: 1300, slug: 'scarlet-pearl-casino', desc: 'Modern Gulf Coast casino resort with 900+ slots, table games, and a lively poker room.' },
  { name: 'Golden Nugget Biloxi', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'golden-nugget-biloxi', desc: 'Gulf Coast casino with 1,100+ slots, table games, and a poker room on the Biloxi waterfront.' },
  { name: "Hollywood Casino Tunica", location: 'Tunica, MS', state: 'MS', miles: 1100, slug: 'hollywood-casino-tunica', desc: "A Tunica classic with 1,000+ slots, table games, and a poker room in Mississippi's casino corridor." },
  // Louisiana
  { name: "Harrah's New Orleans", location: 'New Orleans, LA', state: 'LA', miles: 1350, slug: 'harrahs-new-orleans', desc: 'The only land-based casino in New Orleans with 115,000 sq ft of gaming, a poker room, and world-class dining.' },
  { name: "L'Auberge Casino Resort Baton Rouge", location: 'Baton Rouge, LA', state: 'LA', miles: 1350, slug: 'lauberge-baton-rouge', desc: 'Luxury casino resort on the Mississippi River with 1,600+ slots, table games, and a poker room.' },
  { name: "L'Auberge Casino & Hotel Lake Charles", location: 'Lake Charles, LA', state: 'LA', miles: 1450, slug: 'lauberge-lake-charles', desc: "Southwest Louisiana's premier resort casino with 1,600+ slots, 60+ table games, and a full hotel." },
  { name: 'Coushatta Casino Resort', location: 'Kinder, LA', state: 'LA', miles: 1450, slug: 'coushatta-casino-resort', desc: "Louisiana's largest tribal casino with 3,000+ slots, table games, and a full resort." },
  { name: 'Boomtown Casino New Orleans', location: 'Harvey, LA', state: 'LA', miles: 1350, slug: 'boomtown-new-orleans', desc: 'Lively casino just outside New Orleans with 1,500+ slots, table games, and a poker room.' },
  // Florida
  { name: 'Seminole Hard Rock Hotel & Casino Hollywood', location: 'Hollywood, FL', state: 'FL', miles: 1300, slug: 'seminole-hard-rock-hollywood', desc: "Florida's most famous casino with 180,000 sq ft of gaming, a world-class poker room, and a guitar-shaped hotel." },
  { name: 'Seminole Casino Coconut Creek', location: 'Coconut Creek, FL', state: 'FL', miles: 1320, slug: 'seminole-coconut-creek', desc: 'Popular South Florida casino with 2,400+ slots, table games, and a lively poker room.' },
  { name: 'Seminole Hard Rock Hotel & Casino Tampa', location: 'Tampa, FL', state: 'FL', miles: 1150, slug: 'seminole-hard-rock-tampa', desc: "Tampa's premier casino with 5,000+ slots, table games, and one of Florida's best poker rooms." },
  { name: 'Magic City Casino', location: 'Miami, FL', state: 'FL', miles: 1340, slug: 'magic-city-casino', desc: "Miami's premier gaming destination with slots, table games, and live jai-alai." },
  { name: 'Isle Casino Racing Pompano Park', location: 'Pompano Beach, FL', state: 'FL', miles: 1320, slug: 'isle-casino-pompano', desc: 'South Florida gaming with 1,500+ slots, table games, and live harness racing.' },
  // Colorado
  { name: 'Ameristar Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'ameristar-black-hawk', desc: "Colorado's largest casino with 40,000 sq ft of gaming, a hotel, and mountain views." },
  { name: 'Monarch Casino & Resort', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'monarch-casino-black-hawk', desc: 'Upscale Black Hawk casino resort with 1,200+ slots, 40+ table games, spa, and mountain dining.' },
  { name: 'Isle Casino Hotel Black Hawk', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'isle-casino-black-hawk', desc: 'Black Hawk favorite with 900+ slots, table games, and a poker room in the Colorado Rockies.' },
  { name: "Bronco Billy's Casino", location: 'Cripple Creek, CO', state: 'CO', miles: 1820, slug: 'bronco-billys', desc: "Cripple Creek's most popular casino with slots, table games, and classic Old West character." },
  { name: 'Sky Ute Casino Resort', location: 'Ignacio, CO', state: 'CO', miles: 1900, slug: 'sky-ute-casino', desc: 'Southern Colorado tribal casino resort with 700+ slots, table games, golf, and a hotel.' },
  // Oklahoma
  { name: 'WinStar World Casino', location: 'Thackerville, OK', state: 'OK', miles: 1400, slug: 'winstar-world-casino', desc: "The world's largest casino with 600,000+ sq ft of gaming, a massive poker room, and full resort amenities." },
  { name: 'Choctaw Casino Resort Durant', location: 'Durant, OK', state: 'OK', miles: 1380, slug: 'choctaw-casino-durant', desc: "Oklahoma's premier tribal casino resort with 5,000+ slots, table games, poker, and a luxury hotel." },
  { name: 'Hard Rock Hotel & Casino Tulsa', location: 'Catoosa, OK', state: 'OK', miles: 1300, slug: 'hard-rock-tulsa', desc: 'Flagship Hard Rock tribal casino near Tulsa with 2,800+ slots, 90+ tables, and a poker room.' },
  { name: 'Osage Casino Hotel Tulsa', location: 'Tulsa, OK', state: 'OK', miles: 1300, slug: 'osage-casino-tulsa', desc: 'Tulsa-area tribal casino with 2,400+ slots, table games, and a full hotel.' },
  { name: 'Cherokee Casino & Hotel Roland', location: 'Roland, OK', state: 'OK', miles: 1200, slug: 'cherokee-casino-roland', desc: 'Cherokee Nation casino near Fort Smith with 2,000+ slots, table games, and a hotel.' },
  // Arizona
  { name: 'Talking Stick Resort', location: 'Scottsdale, AZ', state: 'AZ', miles: 2400, slug: 'talking-stick-resort', desc: "Scottsdale's premier tribal resort with 240,000 sq ft of gaming, poker, golf, and a luxury hotel." },
  { name: 'Wild Horse Pass Hotel & Casino', location: 'Chandler, AZ', state: 'AZ', miles: 2400, slug: 'wild-horse-pass', desc: 'Upscale Gila River tribal casino with 100,000 sq ft of gaming, slots, table games, and a hotel.' },
  { name: 'Casino Arizona', location: 'Scottsdale, AZ', state: 'AZ', miles: 2400, slug: 'casino-arizona', desc: "One of Arizona's most popular casinos with 900+ slots, table games, poker, and live keno." },
  { name: 'Desert Diamond Casino West Valley', location: 'Glendale, AZ', state: 'AZ', miles: 2400, slug: 'desert-diamond-west-valley', desc: "Tohono O'odham casino near State Farm Stadium with 1,100+ slots, table games, and poker." },
  { name: 'Fort McDowell Casino', location: 'Fountain Hills, AZ', state: 'AZ', miles: 2400, slug: 'fort-mcdowell-casino', desc: 'Yavapai Nation casino northeast of Scottsdale with 950+ slots, table games, and a poker room.' },
  // California
  { name: 'Pechanga Resort Casino', location: 'Temecula, CA', state: 'CA', miles: 2700, slug: 'pechanga-resort', desc: 'One of the largest tribal casinos in the US with 200,000 sq ft of gaming, poker, and a luxury resort.' },
  { name: 'Morongo Casino Resort & Spa', location: 'Cabazon, CA', state: 'CA', miles: 2700, slug: 'morongo-casino', desc: 'Towering desert casino resort near Palm Springs with 2,000+ slots, table games, and a poker room.' },
  { name: 'Agua Caliente Casino Cathedral City', location: 'Cathedral City, CA', state: 'CA', miles: 2700, slug: 'agua-caliente-cathedral-city', desc: 'Palm Springs area tribal casino with 1,600+ slots, table games, poker, and a spa.' },
  { name: 'Barona Resort & Casino', location: 'Lakeside, CA', state: 'CA', miles: 2750, slug: 'barona-resort', desc: "San Diego's premier tribal casino resort with 2,000+ slots, table games, poker, and golf." },
  { name: 'Sycuan Casino Resort', location: 'El Cajon, CA', state: 'CA', miles: 2750, slug: 'sycuan-casino', desc: 'East San Diego County casino with 2,500+ slots, table games, poker, and golf.' },
  { name: 'San Manuel Casino', location: 'Highland, CA', state: 'CA', miles: 2700, slug: 'san-manuel-casino', desc: 'One of Southern California\'s most popular casinos with 4,800+ slots, table games, and a poker room.' },
  { name: 'Thunder Valley Casino Resort', location: 'Lincoln, CA', state: 'CA', miles: 2600, slug: 'thunder-valley-casino', desc: "Northern California's largest tribal casino with 3,000+ slots, table games, poker, and hotel near Sacramento." },
  { name: 'Cache Creek Casino Resort', location: 'Brooks, CA', state: 'CA', miles: 2600, slug: 'cache-creek-casino', desc: 'Popular Northern California tribal casino with 2,200+ slots, table games, poker, and golf.' },
  { name: 'Graton Resort & Casino', location: 'Rohnert Park, CA', state: 'CA', miles: 2600, slug: 'graton-resort', desc: 'Northern California tribal casino resort with 3,000+ slots, 144 table games, and a poker room in Sonoma County.' },
  { name: 'Soboba Casino Resort', location: 'San Jacinto, CA', state: 'CA', miles: 2700, slug: 'soboba-casino', desc: 'Inland Southern California tribal casino with 2,000+ slots, table games, poker, and hotel.' },
  // Pacific Northwest
  { name: 'Tulalip Resort Casino', location: 'Tulalip, WA', state: 'WA', miles: 2800, slug: 'tulalip-resort-casino', desc: "Washington State's premier tribal resort with 4,000+ slots, table games, poker, and luxury hotel." },
  { name: 'Snoqualmie Casino', location: 'Snoqualmie, WA', state: 'WA', miles: 2800, slug: 'snoqualmie-casino', desc: 'Mountaintop tribal casino near Seattle with 1,700+ slots, table games, poker, and stunning views.' },
  { name: 'Muckleshoot Casino', location: 'Auburn, WA', state: 'WA', miles: 2800, slug: 'muckleshoot-casino', desc: "Washington's largest tribal casino with 4,000+ slots, table games, and a poker room near Seattle." },
  { name: 'Ilani Casino Resort', location: 'Ridgefield, WA', state: 'WA', miles: 2900, slug: 'ilani-casino', desc: 'Stunning tribal casino resort near Portland with 100,000 sq ft of gaming, table games, and a poker room.' },
  { name: 'Spirit Mountain Casino', location: 'Grand Ronde, OR', state: 'OR', miles: 2900, slug: 'spirit-mountain-casino', desc: "Oregon's most popular tribal casino with 1,000+ slots, table games, and entertainment near Portland." },
  // Midwest
  { name: 'Potawatomi Hotel & Casino', location: 'Milwaukee, WI', state: 'WI', miles: 800, slug: 'potawatomi-casino-milwaukee', desc: "Milwaukee's premier tribal casino with 3,000+ slots, 100+ table games, bingo, and a hotel." },
  { name: 'Mystic Lake Casino Hotel', location: 'Prior Lake, MN', state: 'MN', miles: 1100, slug: 'mystic-lake-casino', desc: "Minnesota's most popular casino with 4,000+ slots, table games, and entertainment near Minneapolis." },
  { name: 'Ameristar Casino Kansas City', location: 'Kansas City, MO', state: 'MO', miles: 1300, slug: 'ameristar-kansas-city', desc: 'Massive riverboat casino complex in Kansas City with 130,000 sq ft of gaming and a full hotel.' },
  { name: 'Hollywood Casino St. Louis', location: 'Maryland Heights, MO', state: 'MO', miles: 1100, slug: 'hollywood-casino-st-louis', desc: "St. Louis's most popular casino with 120,000 sq ft of gaming on the Missouri River." },
  { name: 'Prairie Band Casino & Resort', location: 'Mayetta, KS', state: 'KS', miles: 1350, slug: 'prairie-band-casino', desc: "Kansas's largest tribal casino with 1,700+ slots, table games, and a hotel near Topeka." },
  // Mid-Atlantic / Southeast
  { name: 'MGM National Harbor', location: 'Oxon Hill, MD', state: 'MD', miles: 400, slug: 'mgm-national-harbor', desc: 'Luxury casino resort just outside Washington DC with 125,000 sq ft of gaming and a world-class poker room.' },
  { name: 'Live! Casino & Hotel Maryland', location: 'Hanover, MD', state: 'MD', miles: 380, slug: 'live-casino-maryland', desc: 'One of the largest casinos on the East Coast with 4,000+ slots, 200+ table games, and a poker room near Baltimore.' },
  { name: 'Hollywood Casino Perryville', location: 'Perryville, MD', state: 'MD', miles: 350, slug: 'hollywood-casino-perryville', desc: "Maryland's first casino with 900+ slots, table games, and live horse racing." },
  { name: 'Rivers Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', miles: 250, slug: 'rivers-casino-philly', desc: "Philadelphia's newest casino with 2,000+ slots, 150+ table games, and a poker room on the Delaware River." },
  { name: 'Hollywood Casino at Penn National', location: 'Grantville, PA', state: 'PA', miles: 200, slug: 'hollywood-casino-penn-national', desc: 'Central Pennsylvania casino with 2,300+ slots, table games, poker, and live horse racing.' },
  { name: 'Mohegan Sun Pocono', location: 'Wilkes-Barre, PA', state: 'PA', miles: 170, slug: 'mohegan-sun-pocono', desc: 'Northeastern Pennsylvania casino with 2,500+ slots, table games, and a poker room near the Poconos.' },
  { name: 'Valley Forge Casino Resort', location: 'King of Prussia, PA', state: 'PA', miles: 260, slug: 'valley-forge-casino', desc: 'Suburban Philadelphia casino with 850+ slots, table games, and a hotel near Valley Forge.' },
  { name: 'Presque Isle Downs & Casino', location: 'Erie, PA', state: 'PA', miles: 400, slug: 'presque-isle-downs', desc: 'Northwestern Pennsylvania casino with 1,600+ slots, table games, and live horse racing in Erie.' },
  // Upstate NY
  { name: 'Turning Stone Resort Casino', location: 'Verona, NY', state: 'NY', miles: 260, slug: 'turning-stone-resort', desc: "Central New York's premier resort casino with 5,000+ slots, table games, poker, golf, and a spa." },
  { name: 'Rivers Casino & Resort Schenectady', location: 'Schenectady, NY', state: 'NY', miles: 170, slug: 'rivers-casino-schenectady', desc: 'Capital Region casino on the Mohawk River with 1,150+ slots, table games, and a poker room.' },
  { name: 'del Lago Resort & Casino', location: 'Waterloo, NY', state: 'NY', miles: 280, slug: 'del-lago-resort', desc: 'Finger Lakes casino resort with 2,000+ slots, table games, a poker room, and hotel.' },
  { name: 'Tioga Downs Casino Resort', location: 'Nichols, NY', state: 'NY', miles: 230, slug: 'tioga-downs', desc: 'Southern Tier NY casino with 1,100+ slots, table games, live harness racing, and a hotel.' },
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

  // Check cache first
  let cached = await getCached(casino.name);

  // If no hardcoded place ID and not cached, look it up
  if (!placeId && !cached?.place_id && key) {
    placeId = await getPlaceId(casino.name, casino.location, key);
  } else if (cached?.place_id) {
    placeId = cached.place_id;
  }

  // Fetch posts always fresh, use cache for expensive Google/weather APIs
  let posts = [], weather = null, places = null;

  const postsRes = await fetch(`${SUPABASE_URL}/rest/v1/posts?casino=eq.${encodeURIComponent(casino.name)}&order=created_at.desc&limit=50`, {
    headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
  });
  try { posts = await postsRes.json(); } catch(e) {}

  if (cached) {
    // Use cached data
    weather = cached.weather_data ? JSON.parse(cached.weather_data) : null;
    places = cached.places_data ? JSON.parse(cached.places_data) : null;
  } else {
    // Fetch fresh from APIs and cache
    const [weatherRes, placesRes] = await Promise.all([
      coords && key ? fetch(`https://weather.googleapis.com/v1/currentConditions:lookup?key=${key}&location.latitude=${coords[0]}&location.longitude=${coords[1]}&unitsSystem=IMPERIAL`) : Promise.resolve(null),
      placeId && key ? fetch(`https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount&key=${key}`) : Promise.resolve(null),
    ]);
    try { if (weatherRes) weather = await weatherRes.json(); } catch(e) {}
    try { if (placesRes) places = await placesRes.json(); } catch(e) {}
    // Cache the results
    await setCached(casino.name, {
      place_id: placeId,
      weather_data: weather ? JSON.stringify(weather) : null,
      places_data: places ? JSON.stringify(places) : null,
    });
  }

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

  const cityName = casino.location.split(',')[0].trim();
  const stateName = casino.location.split(',')[1]?.trim() || '';
  const hasPoker = casino.desc.toLowerCase().includes('poker');

  const pageTitle = `${casino.name} Floor Conditions Right Now | ${cityName} Casino Updates`;
  const pageDesc = `Is ${casino.name} busy right now? See real-time floor reports from players — poker room wait times, table game availability, slot conditions & crowd levels at ${casino.name} in ${casino.location}. Updated live.`;

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "description": pageDesc,
    "url": `https://casinoconditions.com/${slug}`,
    "about": {
      "@type": "Casino",
      "name": casino.name,
      "address": { "@type": "PostalAddress", "addressLocality": cityName, "addressRegion": stateName, "addressCountry": "US" },
      "description": casino.desc,
    },
    "breadcrumb": {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://casinoconditions.com" },
        { "@type": "ListItem", "position": 2, "name": "Browse Casinos", "item": "https://casinoconditions.com/browse" },
        { "@type": "ListItem", "position": 3, "name": casino.name, "item": `https://casinoconditions.com/${slug}` }
      ]
    }
  });

  const faqSchema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": `Is ${casino.name} busy right now?`, "acceptedAnswer": { "@type": "Answer", "text": `Check the live floor reports on CasinoConditions for current crowd levels, table game availability, and poker room wait times at ${casino.name}.` }},
      { "@type": "Question", "name": `What is the best time to visit ${casino.name}?`, "acceptedAnswer": { "@type": "Answer", "text": `${casino.name} tends to be busiest on Friday and Saturday nights. Check the live CC Score on CasinoConditions for current conditions.` }},
      { "@type": "Question", "name": `Does ${casino.name} have a poker room?`, "acceptedAnswer": { "@type": "Answer", "text": `${casino.desc.toLowerCase().includes('poker') ? `Yes, ${casino.name} has a poker room. See live poker room conditions on CasinoConditions.` : `Check CasinoConditions for the latest reports on poker availability at ${casino.name}.`}` }},
    ]
  });

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
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="apple-touch-icon" href="/favicon.svg">
<link rel="canonical" href="https://casinoconditions.com/${slug}">
<script type="application/ld+json">${jsonLd}</script>
<script type="application/ld+json">${faqSchema}</script>
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
.btn-outline{background:transparent;color:var(--text);border:1px solid var(--border);border-radius:8px;padding:7px 18px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.btn-outline:hover{border-color:var(--text)}
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
@media(max-width:768px){.main-wrap{grid-template-columns:1fr}.sidebar{display:none}.mobile-cards{display:flex;flex-direction:column;gap:12px;padding:0 16px 16px}.casino-hero{padding:24px 20px}nav{padding:0 16px}.nav-links{display:none}.nav-post-btn{display:none}footer{flex-direction:column;gap:12px;text-align:center;padding:20px}#casinoSignInBtn{display:inline-flex !important;font-size:12px;padding:6px 12px}}
@media(min-width:769px){.mobile-cards{display:none}}
footer{padding:28px 40px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid var(--border);background:var(--surface);margin-top:20px}
.footer-logo{display:flex;align-items:center;gap:8px;font-size:14px;font-weight:600}
.footer-links{display:flex;gap:20px}
.footer-link{font-size:12px;color:var(--muted);text-decoration:none}
.footer-link:hover{color:var(--text)}
.footer-copy{font-size:12px;color:var(--muted)}
.seo-section{background:var(--surface);border-top:1px solid var(--border);margin-top:40px;padding:48px 24px}
.seo-inner{max-width:1100px;margin:0 auto;display:grid;grid-template-columns:1fr 1fr 1fr;gap:40px}
.seo-block h2{font-size:16px;font-weight:600;margin-bottom:12px;color:var(--text)}
.seo-block p{font-size:14px;color:var(--muted);line-height:1.7}
.seo-block p a{color:var(--accent);text-decoration:none}
.seo-block p a:hover{text-decoration:underline}
.faq-list{display:flex;flex-direction:column;gap:14px}
.faq-item{border-left:2px solid var(--accent-light);padding-left:12px}
.faq-q{font-size:13px;font-weight:600;color:var(--text);margin-bottom:4px}
.faq-a{font-size:13px;color:var(--muted);line-height:1.6}
.tips-list{list-style:none;display:flex;flex-direction:column;gap:8px}
.tips-list li{font-size:13px;color:var(--muted);line-height:1.6;padding-left:16px;position:relative}
.tips-list li::before{content:'→';position:absolute;left:0;color:var(--accent);font-weight:600}
.last-reported{font-size:12px;color:var(--muted);margin-top:8px;font-family:'DM Mono',monospace}
.bookmark-btn{margin-top:10px;background:none;border:1px solid var(--border);border-radius:8px;padding:6px 14px;font-size:12px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif;color:var(--muted);transition:all .15s;display:inline-flex;align-items:center;gap:5px}
.bookmark-btn:hover{border-color:var(--accent);color:var(--accent)}
.bookmark-btn.saved{background:var(--accent-light);border-color:var(--accent);color:var(--accent)}

/* REACTIONS STRIP */
.reactions-strip{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:14px 18px;margin-bottom:16px}
.reactions-label{font-size:12px;font-weight:600;color:var(--muted);margin-bottom:10px;text-transform:uppercase;letter-spacing:.05em}
.reactions-btns{display:flex;gap:8px;margin-bottom:8px}
.reaction-btn{flex:1;padding:8px 4px;border:1px solid var(--border);border-radius:8px;background:var(--bg);font-size:13px;font-weight:500;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;color:var(--text)}
.reaction-btn:hover{border-color:var(--accent);background:var(--accent-light)}
.reaction-btn.reacted{border-color:var(--accent);background:var(--accent-light);font-weight:700}
.reaction-counts{display:flex;gap:12px}
.rx-count{font-size:13px;font-weight:600;color:var(--text)}

/* POST TYPE TOGGLE */
.post-type-toggle{display:flex;gap:6px;margin-bottom:14px}
.post-type-btn{flex:1;padding:7px 12px;border:1px solid var(--border);border-radius:8px;background:var(--bg);font-size:13px;font-weight:500;cursor:pointer;transition:all .15s;font-family:'DM Sans',sans-serif;color:var(--muted)}
.post-type-btn.active{background:var(--text);color:#fff;border-color:var(--text)}
.post-type-btn:hover:not(.active){border-color:var(--muted)}
.points-hint{font-size:11px;color:var(--muted);margin-top:10px;text-align:center}

/* ASK POSTS */
.post-ask{border-left:3px solid #f39c12 !important}
.ask-badge{font-size:10px;font-weight:600;background:#fdf2e9;color:#784212;padding:3px 8px;border-radius:20px}
.question-card{background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:14px;margin-bottom:10px;border-left:3px solid #f39c12}
.question-body{font-size:13px;color:var(--text);line-height:1.5}

/* PROFILE CARD */
.rank-bar-wrap{width:100%;height:6px;background:var(--border);border-radius:3px;overflow:hidden;margin-top:10px}
.rank-bar-fill{height:100%;background:linear-gradient(90deg,var(--accent),#4caf70);border-radius:3px;transition:width .6s ease}

/* SCRATCH TICKET OVERLAY */
.scratch-overlay{position:fixed;inset:0;background:rgba(0,0,0,.7);display:flex;align-items:center;justify-content:center;z-index:9999;opacity:0;transition:opacity .2s}
.scratch-overlay.visible{opacity:1}
.scratch-card{background:var(--surface);border-radius:20px;padding:40px 48px;text-align:center;max-width:320px;width:90%;box-shadow:0 20px 60px rgba(0,0,0,.4);animation:scratchPop .3s ease}
@keyframes scratchPop{from{transform:scale(.8)}to{transform:scale(1)}}
.scratch-label{font-size:11px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;color:var(--muted);margin-bottom:12px}
.scratch-prize{font-size:72px;font-weight:800;font-family:'DM Mono',monospace;color:var(--accent);line-height:1;margin-bottom:4px}
.scratch-prize.medium{color:#f39c12}
.scratch-prize.jackpot{color:#e74c3c;animation:jackpotPulse .4s infinite alternate}
@keyframes jackpotPulse{from{transform:scale(1)}to{transform:scale(1.05)}}
.scratch-unit{font-size:14px;font-weight:700;letter-spacing:.08em;color:var(--muted);margin-bottom:8px}
.scratch-jackpot-label{font-size:20px;font-weight:700;color:#e74c3c;margin-bottom:6px}
.scratch-streak{font-size:14px;color:#f39c12;font-weight:600;margin-bottom:4px}
.scratch-rankup{font-size:14px;color:var(--accent);font-weight:700;margin-bottom:8px}
.scratch-total{font-size:12px;color:var(--muted);margin-bottom:20px}
.scratch-close{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:10px 24px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif}

@media(max-width:768px){.seo-inner{grid-template-columns:1fr}.seo-section{padding:32px 16px}.reactions-btns{gap:6px}.scratch-prize{font-size:56px}}
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
    <a class="nav-link" href="/poker-rooms">Poker Rooms</a>
    <a class="nav-link" href="/las-vegas-casinos">Las Vegas</a>
  </div>
  <button class="dark-toggle" id="darkToggle" onclick="toggleDark()" title="Toggle dark mode">🌙</button>
  <button class="btn-outline" id="casinoSignInBtn" onclick="showCasinoSignIn()" style="font-size:13px;padding:7px 14px">Sign in</button>
  <button class="btn nav-post-btn" onclick="document.getElementById('composeCard').scrollIntoView({behavior:'smooth'})">+ Post Update</button>
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
        ${posts.length > 0 ? `<div class="last-reported">Last report: ${timeAgo(posts[0].created_at)}</div>` : ''}
        <button class="bookmark-btn" id="bookmarkBtn" onclick="toggleBookmark()" title="Bookmark this casino">☆ Save</button>
      </div>
      </div>
    </div>
  </div>
</div>

<!-- MOBILE ONLY: key cards shown below hero -->
<div class="mobile-cards">
  <div class="card" id="ccScoreCardMobile">
    <div class="card-title">🏆 CC Score</div>
    <div style="text-align:center;padding:8px 0 12px">
      <div class="cc-score-big" id="scoreNumMobile">—</div>
      <div style="font-size:12px;color:var(--muted);margin-top:4px">out of 100</div>
    </div>
    <div id="scoreFactorsMobile"></div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px">
    <div class="card">
      <div class="card-title">🌤 Weather</div>
      <div id="weatherContentMobile">${weatherHtml}</div>
    </div>
    <div class="card">
      <div class="card-title">⭐ Google</div>
      <div id="googleContentMobile">${googleHtml}</div>
    </div>
  </div>
</div>

<div class="main-wrap">
  <div>
    <!-- ONE-TAP REACTIONS -->
    <div class="reactions-strip">
      <div class="reactions-label">Quick reaction — how's the floor right now?</div>
      <div class="reactions-btns">
        <button class="reaction-btn" id="rxBusy" onclick="postReaction('busy')">🟢 Busy</button>
        <button class="reaction-btn" id="rxModerate" onclick="postReaction('moderate')">🟡 Moderate</button>
        <button class="reaction-btn" id="rxQuiet" onclick="postReaction('quiet')">🔴 Quiet</button>
      </div>
      <div class="reaction-counts" id="reactionCounts"></div>
    </div>

    <!-- COMPOSE -->
    <div class="card" id="composeCard">
      <!-- POST TYPE TOGGLE -->
      <div class="post-type-toggle">
        <button class="post-type-btn active" id="btnReport" onclick="setPostType('report')">📋 Report</button>
        <button class="post-type-btn" id="btnAsk" onclick="setPostType('ask')">❓ Ask</button>
      </div>
      <div class="card-title" id="composeTitle">Share a floor update at ${casino.name}</div>
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
      <!-- POINTS EARNED for logged-in users -->
      <div class="points-hint" id="pointsHint">✨ Earn <strong>10 pts</strong> for reporting · <strong>8 pts</strong> for asking</div>
    </div>

    <!-- UNANSWERED QUESTIONS -->
    <div id="questionsSection" style="display:none">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px">
        <div class="section-title">❓ Players are asking</div>
      </div>
      <div id="questionsFeed"></div>
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
    <!-- USER PROFILE CARD -->
    <div class="card" id="profileCard">
      <div class="card-title">🎰 Your Profile</div>
      <div id="profileContent">
        <div style="text-align:center;padding:8px 0 12px">
          <div style="font-size:32px" id="profileRankEmoji">🎰</div>
          <div style="font-size:18px;font-weight:700;margin-top:4px" id="profileRankName">Rail Bird</div>
          <div style="font-size:13px;color:var(--muted);margin-top:2px"><span id="profilePoints">0</span> pts</div>
        </div>
        <div class="rank-bar-wrap">
          <div class="rank-bar-fill" id="rankBarFill" style="width:0%"></div>
        </div>
        <div style="font-size:11px;color:var(--muted);margin-top:4px;text-align:center" id="rankProgress">0 pts to next rank</div>
        <div style="margin-top:12px;font-size:12px;color:var(--muted);text-align:center" id="streakDisplay"></div>
        <div id="signInPrompt" style="margin-top:14px;padding-top:12px;border-top:1px solid var(--border)">
          <div style="font-size:12px;color:var(--muted);margin-bottom:8px">🏆 Sign in to appear on the leaderboard</div>
          <input id="magicEmail" class="compose-select" type="email" placeholder="your@email.com" style="width:100%;margin-bottom:8px">
          <button class="btn" style="width:100%;font-size:12px" onclick="sendMagicLink()">✉️ Send Magic Link</button>
          <div id="magicStatus" style="font-size:11px;color:var(--accent);margin-top:6px;display:none"></div>
        </div>
        <div id="signedInBar" style="display:none;margin-top:12px;padding-top:12px;border-top:1px solid var(--border)">
          <div style="font-size:11px;color:var(--muted);margin-bottom:6px">LEADERBOARD NAME</div>
          <div style="display:flex;gap:6px">
            <input id="usernameInput" class="compose-select" placeholder="e.g. PokerGrinder88" style="flex:1;min-width:0">
            <button class="btn" style="font-size:12px;padding:6px 12px;flex-shrink:0" onclick="saveUsername()">Save</button>
          </div>
          <div style="font-size:11px;color:var(--accent);margin-top:6px" id="signedInEmail"></div>
        </div>
      </div>
    </div>

    <!-- LEADERBOARD -->
    <div class="card" id="leaderboardCard">
      <div class="card-title">🥇 Top Reporters</div>
      <div id="leaderboardContent" style="color:var(--muted);font-size:13px">Loading...</div>
    </div>

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

<!-- SEO CONTENT SECTION -->
<div class="seo-section">
  <div class="seo-inner">

    <!-- ABOUT THIS CASINO -->
    <div class="seo-block">
      <h2>About ${casino.name}</h2>
      <p>${casino.desc}</p>
      <p style="margin-top:10px">Located in ${casino.location}, ${casino.name} is one of the most visited casinos in ${stateName}. Whether you're planning a poker session, hitting the table games, or just checking out the slot floor, CasinoConditions shows you real-time reports from players already on the floor — so you know what to expect before you make the drive.</p>
      ${casino.desc.toLowerCase().includes('poker') ? `<p style="margin-top:10px">The poker room at ${casino.name} is tracked separately — check the <strong>🃏 Poker Room</strong> tab in the feed above for the latest wait times, game types running, and seat availability.</p>` : ''}
    </div>

    <!-- FAQ -->
    <div class="seo-block" itemscope itemtype="https://schema.org/FAQPage">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <div class="faq-q" itemprop="name">Is ${casino.name} busy right now?</div>
          <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">Check the live floor reports above — real players at ${casino.name} post updates on crowd levels, table availability, and poker room wait times. The CC Score at the top gives you an instant read: 70+ means it's active, under 40 means it's quiet.</div>
          </div>
        </div>
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <div class="faq-q" itemprop="name">What is the best time to visit ${casino.name}?</div>
          <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">${casino.name} tends to be busiest Friday and Saturday nights and slowest Tuesday and Wednesday mornings. Bad weather tends to drive traffic up. Check the live CC Score above for current conditions before you head out.</div>
          </div>
        </div>
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <div class="faq-q" itemprop="name">Does ${casino.name} have a poker room?</div>
          <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">${casino.desc.toLowerCase().includes('poker') ? `Yes — ${casino.name} has a poker room. Filter the feed above by "Poker Room" to see the latest wait times, what games are running, and current seat availability from players on the floor.` : `Check the live reports above filtered to "Poker Room" for the latest information on poker availability at ${casino.name}.`}</div>
          </div>
        </div>
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <div class="faq-q" itemprop="name">How crowded are the table games at ${casino.name}?</div>
          <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">Filter the feed above by "Table Games" to see current reports on blackjack, craps, roulette, and baccarat availability at ${casino.name}. Players report table minimums, how many tables are open, and crowd levels in real time.</div>
          </div>
        </div>
        <div class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
          <div class="faq-q" itemprop="name">How do I post a floor report for ${casino.name}?</div>
          <div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
            <div itemprop="text">Use the "Share a floor update" box at the top of this page. Posting is completely anonymous — no account needed. Select a category, write your update, and hit Post. Your report goes live instantly and helps other players plan their visit.</div>
          </div>
        </div>
      </div>
    </div>

    <!-- TIPS + NEARBY -->
    <div>
      <div class="seo-block">
        <h2>Tips for Visiting ${casino.name}</h2>
        <ul class="tips-list">
          <li>Check the CC Score before you leave — it updates based on recent player reports</li>
          <li>Filter posts by category to find exactly what you need (poker, tables, slots)</li>
          <li>Bad weather in ${cityName}? That usually means a busier floor and shorter poker room wait times</li>
          <li>Weekday mornings are typically the quietest time to visit ${casino.name}</li>
          <li>Post your own update when you leave — it takes 30 seconds and helps the community</li>
        </ul>
      </div>
      ${nearbyCasinos.length > 0 ? `<div class="seo-block" style="margin-top:24px">
        <h2>Other Casinos in ${stateName}</h2>
        <p>Also check live conditions at these nearby casinos: ${nearbyCasinos.map(c => `<a href="/${c.slug}">${c.name}</a>`).join(', ')}.</p>
      </div>` : ''}
    </div>

  </div>
</div>

<script>
const CASINO_NAME = ${JSON.stringify(casino.name)};
const CASINO_SLUG = ${JSON.stringify(casino.slug)};
const SUPABASE_URL = '${SUPABASE_URL}';
const SUPABASE_KEY = '${SUPABASE_KEY}';
let allPosts = ${JSON.stringify(posts)};
let isAnon = true;
let currentPostType = 'report';
let userProfile = null;
let userCookieId = null;

// ── COOKIE ID ──────────────────────────────────────────────
function getCookieId() {
  let id = document.cookie.split('; ').find(r => r.startsWith('cc_uid='))?.split('=')[1];
  if (!id) {
    id = 'cc_' + Math.random().toString(36).slice(2) + Date.now().toString(36);
    document.cookie = \`cc_uid=\${id};max-age=31536000;path=/;SameSite=Lax\`;
  }
  return id;
}

// ── RANK CONFIG ────────────────────────────────────────────
const RANKS = [
  { name: 'Rail Bird',     min: 0,    emoji: '🎰' },
  { name: 'Fish',          min: 50,   emoji: '🐟' },
  { name: 'Regular',       min: 150,  emoji: '♠️' },
  { name: 'Floor Regular', min: 400,  emoji: '🎲' },
  { name: 'High Roller',   min: 800,  emoji: '💰' },
  { name: 'Whale',         min: 1500, emoji: '👑' },
];
function getRank(pts) {
  let r = RANKS[0];
  for (const rank of RANKS) { if (pts >= rank.min) r = rank; }
  return r;
}
function getNextRank(pts) {
  return RANKS.find(r => r.min > pts) || null;
}

// ── PROFILE ────────────────────────────────────────────────
async function loadProfile() {
  userCookieId = getCookieId();
  try {
    const r = await fetch(\`/api/profile?cookie_id=\${encodeURIComponent(userCookieId)}\`);
    userProfile = await r.json();
    // Always merge localStorage email/username in case DB hasn't propagated
    if (localStorage.getItem('cc_signed_in')) {
      if (!userProfile.email) userProfile.email = localStorage.getItem('cc_email') || '';
      if (!userProfile.username) userProfile.username = localStorage.getItem('cc_username') || '';
    }
    renderProfile();
    updateSignInBtn();
  } catch(e) {
    if (localStorage.getItem('cc_signed_in')) {
      userProfile = { email: localStorage.getItem('cc_email') || '', points: 0 };
      renderProfile();
      updateSignInBtn();
    }
  }
}

function renderProfile() {
  if (!userProfile) return;
  const pts = userProfile.points || 0;
  const rank = getRank(pts);
  const next = getNextRank(pts);
  document.getElementById('profileRankEmoji').textContent = rank.emoji;
  document.getElementById('profileRankName').textContent = rank.name;
  document.getElementById('profilePoints').textContent = pts.toLocaleString();
  const pct = next ? Math.round(((pts - rank.min) / (next.min - rank.min)) * 100) : 100;
  document.getElementById('rankBarFill').style.width = pct + '%';
  document.getElementById('rankProgress').textContent = next
    ? \`\${next.min - pts} pts to \${next.emoji} \${next.name}\`
    : '👑 Max rank achieved!';
  const streak = userProfile.streak_days || 0;
  document.getElementById('streakDisplay').textContent = streak > 1
    ? \`🔥 \${streak} day streak! Keep it up\`
    : streak === 1 ? '🔥 1 day streak — come back tomorrow!' : '';
  const emailToShow = userProfile.email || localStorage.getItem('cc_email') || '';
  if (emailToShow) {
    document.getElementById('signInPrompt').style.display = 'none';
    document.getElementById('signedInBar').style.display = 'block';
    document.getElementById('signedInEmail').textContent = '✅ Signed in as ' + emailToShow;
    if (userProfile.username) {
      document.getElementById('usernameInput').value = userProfile.username;
      localStorage.setItem('cc_username', userProfile.username);
    }
  }
}

async function addPoints(action) {
  if (!userCookieId) return null;
  try {
    const r = await fetch('/api/profile', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cookie_id: userCookieId, action })
    });
    const data = await r.json();
    userProfile = { ...userProfile, ...data };
    renderProfile();
    return data;
  } catch(e) { return null; }
}

// ── SCRATCH TICKET ─────────────────────────────────────────
function showScratchTicket(pointsData) {
  const pts = pointsData?.points_earned || 10;
  const isJackpot = pts >= 100;
  const isMedium = pts >= 20;
  const overlay = document.createElement('div');
  overlay.className = 'scratch-overlay';
  overlay.innerHTML = \`
    <div class="scratch-card">
      <div class="scratch-label">🎰 FLOOR REPORTER BONUS</div>
      <div class="scratch-prize \${isJackpot ? 'jackpot' : isMedium ? 'medium' : ''}">
        +\${pts}
      </div>
      <div class="scratch-unit">CC POINTS</div>
      \${isJackpot ? '<div class="scratch-jackpot-label">🎉 JACKPOT!</div>' : ''}
      \${pointsData?.streak_bonus ? '<div class="scratch-streak">🔥 +' + pointsData.streak_bonus + ' streak bonus!</div>' : ''}
      \${pointsData?.rank_up ? '<div class="scratch-rankup">⬆️ RANK UP: ' + pointsData.rank_emoji + ' ' + pointsData.rank + '!</div>' : ''}
      <div class="scratch-total">Total: \${(userProfile?.points || 0).toLocaleString()} pts · \${getRank(userProfile?.points || 0).emoji} \${getRank(userProfile?.points || 0).name}</div>
      <button class="scratch-close" onclick="this.closest('.scratch-overlay').remove()">Continue →</button>
    </div>
  \`;
  document.body.appendChild(overlay);
  setTimeout(() => overlay.classList.add('visible'), 10);
  setTimeout(() => { if (overlay.parentNode) overlay.remove(); }, 4000);
}

// ── POST TYPE TOGGLE ───────────────────────────────────────
function setPostType(type) {
  currentPostType = type;
  document.getElementById('btnReport').classList.toggle('active', type === 'report');
  document.getElementById('btnAsk').classList.toggle('active', type === 'ask');
  document.getElementById('composeTitle').textContent = type === 'ask'
    ? \`Ask the community about \${CASINO_NAME}\`
    : \`Share a floor update at \${CASINO_NAME}\`;
  document.getElementById('composeBody').placeholder = type === 'ask'
    ? 'e.g. Should I head to Foxwoods tonight? Is the 1/2 NL running?'
    : 'e.g. Poker room is packed, 3 tables of 1/2 NL running. Lots of fish tonight 🐠';
  document.getElementById('postBtn').textContent = type === 'ask' ? 'Ask Question' : 'Post Update';
  document.getElementById('pointsHint').innerHTML = type === 'ask'
    ? '✨ Earn <strong>8 pts</strong> for asking a question'
    : '✨ Earn <strong>10 pts</strong> for reporting + scratch bonus';
}

// ── REACTIONS ──────────────────────────────────────────────
async function loadReactions() {
  try {
    const r = await fetch(\`\${SUPABASE_URL}/rest/v1/reactions?casino=eq.\${encodeURIComponent(CASINO_NAME)}&created_at=gte.\${new Date(Date.now()-86400000).toISOString()}\`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    });
    const reactions = await r.json();
    const counts = { busy: 0, moderate: 0, quiet: 0 };
    reactions.forEach(rx => { if (counts[rx.reaction] !== undefined) counts[rx.reaction]++; });
    const total = counts.busy + counts.moderate + counts.quiet;
    document.getElementById('reactionCounts').innerHTML = total === 0
      ? '<span style="color:var(--muted);font-size:12px">No reactions yet today — be first!</span>'
      : \`<span class="rx-count">🟢 \${counts.busy}</span><span class="rx-count">🟡 \${counts.moderate}</span><span class="rx-count">🔴 \${counts.quiet}</span>\`;
    // Highlight user's previous reaction
    if (userCookieId) {
      const mine = reactions.find(rx => rx.cookie_id === userCookieId);
      if (mine) {
        document.getElementById('rx' + mine.reaction.charAt(0).toUpperCase() + mine.reaction.slice(1))?.classList.add('reacted');
      }
    }
  } catch(e) {}
}

async function postReaction(reaction) {
  if (!userCookieId) userCookieId = getCookieId();
  try {
    await fetch(\`\${SUPABASE_URL}/rest/v1/reactions\`, {
      method: 'POST',
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY, 'Content-Type': 'application/json', 'Prefer': 'return=minimal' },
      body: JSON.stringify({ casino: CASINO_NAME, cookie_id: userCookieId, reaction })
    });
    // Add 2 points for reaction
    addPoints('reaction');
    loadReactions();
    // Visual feedback
    ['rxBusy','rxModerate','rxQuiet'].forEach(id => document.getElementById(id)?.classList.remove('reacted'));
    document.getElementById('rx' + reaction.charAt(0).toUpperCase() + reaction.slice(1))?.classList.add('reacted');
  } catch(e) {}
}

// ── MAGIC LINK AUTH ────────────────────────────────────────
async function sendMagicLink() {
  const email = document.getElementById('magicEmail').value.trim();
  if (!email || !email.includes('@')) return;
  const btn = event.target;
  btn.disabled = true; btn.textContent = 'Sending...';
  try {
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'magic_link', email, cookie_id: userCookieId })
    });
    const data = await r.json();
    const status = document.getElementById('magicStatus');
    status.style.display = 'block';
    if (data.success) {
      status.textContent = '✅ Check your email for the magic link!';
      status.style.color = 'var(--accent)';
    } else {
      status.textContent = '❌ ' + (data.error || 'Something went wrong');
      status.style.color = '#e74c3c';
    }
  } catch(e) {}
  btn.disabled = false; btn.textContent = '✉️ Send Magic Link';
}

async function saveUsername() {
  const username = document.getElementById('usernameInput').value.trim();
  if (!username) return;
  try {
    await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'set_username', cookie_id: userCookieId, username })
    });
    localStorage.setItem('cc_username', username);
    document.getElementById('signedInEmail').textContent = '✅ Saved as: ' + username;
    const btn = document.getElementById('casinoSignInBtn');
    if (btn) btn.textContent = '👤 ' + username;
  } catch(e) {}
}

// ── MISC ───────────────────────────────────────────────────
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
    type === 'questions' ? allPosts.filter(p => p.post_type === 'ask') :
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
    const isAsk = p.post_type === 'ask';
    const initials = p.is_anonymous ? '👤' : p.author.split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
    const avatarStyle = p.is_anonymous ? 'background:#f0f0ee;color:#888;font-size:14px' : 'background:#edf5f0;color:#1a6b3c';
    const tagCls = p.category.includes('Poker') ? 'tag-poker' : p.category.includes('Table') ? 'tag-tables' : p.category.includes('Slots') ? 'tag-slots' : 'tag-general';
    return \`<div class="post-card \${isAsk ? 'post-ask' : ''}">
      <div class="post-top">
        <div class="post-meta">
          <div class="avatar" style="\${avatarStyle}">\${initials}</div>
          <div>
            <div class="post-author">\${p.is_anonymous ? 'Anonymous' : p.author}</div>
            <div class="post-time">\${timeAgo(p.created_at)}</div>
          </div>
        </div>
        \${isAsk ? '<span class="ask-badge">❓ Asking</span>' : ''}
      </div>
      <div class="post-body">\${p.body}</div>
      <div class="post-bottom">
        <span class="post-tag \${tagCls}">\${p.category}</span>
        <button class="action-btn" onclick="helpful(this, '\${p.id}')">👍 \${p.helpful_count || 0}</button>
      </div>
    </div>\`;
  }).join('');

  // Load unanswered questions section
  const questions = allPosts.filter(p => p.post_type === 'ask' && (p.answer_count || 0) === 0);
  const qs = document.getElementById('questionsSection');
  if (questions.length > 0) {
    qs.style.display = 'block';
    document.getElementById('questionsFeed').innerHTML = questions.slice(0,3).map(p => \`
      <div class="question-card">
        <div class="question-body">\${p.body}</div>
        <div style="font-size:11px;color:var(--muted);margin-top:6px">\${timeAgo(p.created_at)} · 0 answers</div>
        <button class="action-btn" style="margin-top:8px;font-size:12px" onclick="document.getElementById('composeBody').focus();setPostType('report')">Answer →</button>
      </div>
    \`).join('');
  } else {
    qs.style.display = 'none';
  }
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
      body: JSON.stringify({
        body,
        casino: CASINO_NAME,
        category: document.getElementById('composeCategory').value,
        author,
        is_anonymous: isAnon,
        helpful_count: 0,
        is_seeded: false,
        post_type: currentPostType,
      })
    });
    const [newPost] = await r.json();
    allPosts.unshift(newPost);
    renderFeed(allPosts);
    document.getElementById('composeBody').value = '';

    // Award points + show scratch ticket
    const action = currentPostType === 'ask' ? 'post_ask' : 'post_report';
    const pointsData = await addPoints(action);
    // Scratch roll for reports only
    if (currentPostType === 'report') {
      const scratchData = await addPoints('scratch');
      showScratchTicket({ ...pointsData, points_earned: scratchData?.points_earned || 10 });
    } else {
      showScratchTicket(pointsData);
    }
  } catch(e) {}
  btn.disabled = false;
  btn.textContent = currentPostType === 'ask' ? 'Ask Question' : 'Post Update';
}

async function loadScore() {
  try {
    const r = await fetch(\`/api/score?casino=\${encodeURIComponent(CASINO_NAME)}\`);
    const s = await r.json();
    const scoreColor = s.total >= 70 ? '#1a6b3c' : s.total >= 40 ? '#b07d2a' : '#888';
    const factorsHtml = [
      ['Activity', s.factors.activity],
      ['Community', s.factors.engagement],
      ['Google', s.factors.google],
      ['Weather', s.factors.weather],
      ['Timing', s.factors.timing],
    ].map(([label, val]) => \`<div class="score-row"><span class="score-label">\${label}</span><div class="score-bar-wrap"><div class="score-bar-fill" style="width:\${val}%"></div></div><span class="score-val">\${val}</span></div>\`).join('');
    document.getElementById('scoreNum').textContent = s.total;
    document.getElementById('scoreNum').style.color = scoreColor;
    document.getElementById('scoreFactors').innerHTML = factorsHtml;
    document.getElementById('scoreNumMobile').textContent = s.total;
    document.getElementById('scoreNumMobile').style.color = scoreColor;
    document.getElementById('scoreFactorsMobile').innerHTML = factorsHtml;
  } catch(e) {}
}

function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('darkToggle').textContent = isDark ? '☀️' : '🌙';
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('darkToggle').textContent = '☀️';
}

// ── BOOKMARK ───────────────────────────────────────────────
function toggleBookmark() {
  const bookmarks = JSON.parse(localStorage.getItem('cc_bookmarks') || '[]');
  const idx = bookmarks.indexOf(CASINO_SLUG);
  if (idx === -1) {
    bookmarks.push(CASINO_SLUG);
    localStorage.setItem('cc_bookmarks', JSON.stringify(bookmarks));
    renderBookmark(true);
  } else {
    bookmarks.splice(idx, 1);
    localStorage.setItem('cc_bookmarks', JSON.stringify(bookmarks));
    renderBookmark(false);
  }
}
function renderBookmark(saved) {
  const btn = document.getElementById('bookmarkBtn');
  if (!btn) return;
  btn.textContent = saved ? '★ Saved' : '☆ Save';
  btn.classList.toggle('saved', saved);
}
// Init bookmark state
(function() {
  const bookmarks = JSON.parse(localStorage.getItem('cc_bookmarks') || '[]');
  renderBookmark(bookmarks.includes(CASINO_SLUG));
})();

// ── LEADERBOARD ────────────────────────────────────────────
async function loadLeaderboard() {
  try {
    const r = await fetch('/api/leaderboard');
    const data = await r.json();
    const el = document.getElementById('leaderboardContent');
    if (!el) return;
    if (!data.leaderboard?.length) {
      el.innerHTML = '<div style="font-size:13px;color:var(--muted)">No reporters yet — be first! 🎰</div>';
      return;
    }
    el.innerHTML = data.leaderboard.map((p, i) => \`
      <div style="display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:1px solid var(--border)">
        <div style="display:flex;align-items:center;gap:8px">
          <span style="font-size:12px;font-weight:700;color:var(--muted);width:16px">\${i+1}</span>
          <span style="font-size:13px">\${p.rank_emoji}</span>
          <div>
            <div style="font-size:13px;font-weight:600">\${p.name}</div>
            <div style="font-size:11px;color:var(--muted)">\${p.rank}\${p.streak > 1 ? ' · 🔥'+p.streak : ''}</div>
          </div>
        </div>
        <span style="font-size:12px;font-weight:700;color:var(--accent);font-family:'DM Mono',monospace">\${p.points.toLocaleString()}</span>
      </div>
    \`).join('');
  } catch(e) {}
}

// ── CASINO SIGN IN (mobile) ────────────────────────────────
function showCasinoSignIn() {
  // On desktop just scroll to profile card
  if (window.innerWidth > 768) {
    document.getElementById('profileCard')?.scrollIntoView({behavior:'smooth'});
    return;
  }
  // On mobile — show modal with current state
  if (userProfile?.email) {
    // Already signed in — show toast with rank
    const rank = userProfile.rank || 'Rail Bird';
    const pts = userProfile.points || 0;
    const rankEmojis = {'Rail Bird':'🎰','Fish':'🐟','Regular':'♠️','Floor Regular':'🎲','High Roller':'💰','Whale':'👑'};
    showToast(\`\${rankEmojis[rank] || '🎰'} \${userProfile.username || rank} · \${pts} pts\`);
    const btn = document.getElementById('casinoSignInBtn');
    if (btn) btn.textContent = '👤 ' + (userProfile.username || rank);
  } else {
    // Not signed in — show inline sign-in modal
    showMobileSignInModal();
  }
}

function showMobileSignInModal() {
  // Remove existing modal if any
  document.getElementById('mobileSignInModal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'mobileSignInModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px';
  modal.innerHTML = \`
    <div style="background:#fff;border-radius:16px;padding:28px 24px;max-width:340px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.2)">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">
        <div style="font-size:17px;font-weight:700;color:#1a1a18">🎰 Sign in</div>
        <button onclick="document.getElementById('mobileSignInModal').remove()" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;line-height:1">×</button>
      </div>
      <p style="font-size:13px;color:#888;margin:0 0 14px;line-height:1.6">Enter your email for a magic link — no password needed. Your points stay linked.</p>
      <input id="mobileSignInEmail" type="email" placeholder="your@email.com" style="width:100%;padding:10px 14px;border:1px solid #e8e8e4;border-radius:8px;font-size:14px;font-family:'DM Sans',sans-serif;margin-bottom:10px;box-sizing:border-box;outline:none">
      <button onclick="sendMobileSignInLink()" style="width:100%;background:#1a6b3c;color:#fff;border:none;border-radius:8px;padding:12px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif">✉️ Send Magic Link</button>
      <div id="mobileSignInStatus" style="font-size:12px;margin-top:10px;text-align:center;display:none"></div>
    </div>
  \`;
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
  setTimeout(() => document.getElementById('mobileSignInEmail')?.focus(), 100);
}

async function sendMobileSignInLink() {
  const email = document.getElementById('mobileSignInEmail')?.value.trim();
  if (!email || !email.includes('@')) return;
  const status = document.getElementById('mobileSignInStatus');
  status.style.display = 'block';
  status.style.color = '#888';
  status.textContent = 'Sending...';
  try {
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'magic_link', email, cookie_id: userCookieId })
    });
    const data = await r.json();
    if (data.success) {
      status.style.color = '#1a6b3c';
      status.textContent = '✅ Check your email!';
    } else {
      status.style.color = '#e74c3c';
      status.textContent = '❌ ' + (data.error || 'Something went wrong');
    }
  } catch(e) {
    status.style.color = '#e74c3c';
    status.textContent = '❌ Connection error';
  }
}

// Update sign in button once profile loads
function updateSignInBtn() {
  const btn = document.getElementById('casinoSignInBtn');
  if (!btn) return;
  if (userProfile?.email) {
    const displayName = userProfile.username || localStorage.getItem('cc_username') || userProfile.email.split('@')[0];
    btn.textContent = '👤 ' + displayName;
  }
}

// ── INIT ───────────────────────────────────────────────────
// ── MAGIC LINK TOKEN DETECTION ────────────────────────────
// Catch Supabase token if redirected back to any page with #access_token
(async function detectMagicLinkToken() {
  const hash = window.location.hash.slice(1);
  const hp = new URLSearchParams(hash);
  const token = hp.get('access_token');
  const error = hp.get('error_description') || hp.get('error');
  if (error) {
    console.warn('Auth error in hash:', error);
    window.location.hash = '';
    return;
  }
  if (!token) return;
  // Clear hash immediately so it doesn't show in URL
  history.replaceState(null, '', window.location.pathname);
  try {
    const cookieId = getCookieId();
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'callback', access_token: token, cookie_id: cookieId })
    });
    const data = await r.json();
    const email = data.profile?.email || '';
    if (email) {
      localStorage.setItem('cc_email', email);
      localStorage.setItem('cc_signed_in', '1');
    }
  } catch(e) { console.error('token detection error:', e); }
})();

loadProfile();
loadScore();
loadReactions();
loadLeaderboard();
renderFeed(allPosts);

setInterval(async () => {
  try {
    const r = await fetch(\`\${SUPABASE_URL}/rest/v1/posts?casino=eq.\${encodeURIComponent(CASINO_NAME)}&order=created_at.desc&limit=50\`, {
      headers: { 'apikey': SUPABASE_KEY, 'Authorization': 'Bearer ' + SUPABASE_KEY }
    });
    allPosts = await r.json();
    renderFeed(allPosts);
  } catch(e) {}
}, 30000);
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

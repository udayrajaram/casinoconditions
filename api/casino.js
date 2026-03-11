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
  'JACK Cleveland Casino': [41.4994, -81.6954],
  'Hollywood Casino Columbus': [39.9612, -82.9988],
  'Hollywood Casino Toledo': [41.6528, -83.5379],
  'Hard Rock Rocksino Northfield Park': [41.3436, -81.5307],
  'MGM Northfield Park': [41.3442, -81.5318],
  'Hard Rock Hotel Casino Cincinnati': [39.1031, -84.512],
  'Mountaineer Casino Racetrack Resort': [40.4934, -80.6073],
  'Hollywood Casino at Charles Town Races': [39.2851, -77.8597],
  'Mardi Gras Casino Resort': [38.4018, -81.7926],
  'Wheeling Island Hotel Casino Racetrack': [40.064, -80.7209],
  'Harrahs Cherokee Casino Resort': [35.4776, -83.3077],
  'Harrahs Cherokee Valley River Casino': [35.0654, -84.0196],
  'Rivers Casino Portsmouth': [36.8354, -76.3683],
  'Hard Rock Hotel Casino Bristol': [36.5951, -82.1887],
  'Ameristar Casino Council Bluffs': [41.2619, -95.8608],
  'Horseshoe Council Bluffs': [41.2453, -95.873],
  'Prairie Meadows Casino': [41.6569, -93.4696],
  'Isle Casino Hotel Bettendorf': [41.5245, -90.4749],
  'Wild Rose Casino Resort': [43.1119, -94.6819],
  'Sandia Resort Casino': [35.1448, -106.5241],
  'Route 66 Casino Hotel': [35.0529, -107.176],
  'Inn of the Mountain Gods Resort Casino': [33.1568, -105.7891],
  'Buffalo Thunder Resort Casino': [35.794, -105.9869],
  'Fire Rock Navajo Casino': [35.5281, -108.7476],
  'Deadwood Mountain Grand': [44.3764, -103.7296],
  'Cadillac Jacks Gaming Resort': [44.3767, -103.7279],
  'Dakota Sioux Casino Hotel': [44.9044, -97.1114],
  'Grand River Casino Resort': [45.5335, -100.4371],
  'Sky Dancer Hotel Casino': [48.8381, -99.9534],
  'Spirit Lake Casino Resort': [47.9613, -99.0388],
  '4 Bears Casino Lodge': [47.9897, -102.4925],
  'KwaTaqNuk Resort Casino': [47.6841, -114.1633],
  'Charging Horse Casino': [45.5941, -106.6574],
  'Coeur dAlene Casino': [47.4563, -116.918],
  'Clearwater River Casino Lodge': [46.4165, -117.0177],
  'Shoshone-Bannock Casino Hotel': [43.026, -112.4263],
  'Wind Creek Casino Hotel Wetumpka': [32.5432, -86.2127],
  'Wind Creek Casino Hotel Atmore': [31.0235, -87.4942],
  'Wind Creek Casino Hotel Montgomery': [32.3792, -86.268],
  'WarHorse Casino Lincoln': [40.8081, -96.7142],
  'WarHorse Casino Omaha': [41.2565, -96.0034],
  'Circus Circus Reno': [39.5296, -119.8161],
  'Eldorado Resort Casino Reno': [39.5274, -119.8163],
  'Harrahs Reno': [39.5271, -119.8155],
  'Nugget Casino Resort Sparks': [39.5349, -119.7523],
  'Caesars Palace Lake Tahoe': [38.9603, -119.944],
  'Eureka Casino Resort Mesquite': [36.8057, -114.0673],
  'Virgin Hotels Las Vegas': [36.1052, -115.1448],
  'Durango Casino Resort Las Vegas': [36.0522, -115.2879],
  'Fontainebleau Las Vegas': [36.1339, -115.1677],
  'Resorts World Las Vegas': [36.1354, -115.164],
  'Circa Resort Casino Downtown': [36.1696, -115.1441],
  'Fantasy Springs Resort Casino': [33.7212, -116.2736],
  'Morongo Casino Resort Spa': [33.9272, -116.9615],
  'Viejas Casino Resort': [32.8427, -116.7077],
  'Harrahs Resort Southern California': [33.2341, -117.0851],
  'Chumash Casino Resort': [34.5977, -120.0794],
  'Jackson Rancheria Casino Resort': [38.344, -120.7697],
  'Wild Horse Pass Hotel Casino': [33.288, -111.9318],
  'Downstream Casino Resort': [36.8483, -94.8574],
  'Hard Rock Hotel Casino Tulsa': [36.2659, -95.8698],
  'Choctaw Casino Durant': [33.9858, -96.4053],
  'WinStar World Casino Resort': [33.939, -97.0549],
  'Muckleshoot Casino Resort': [47.3057, -122.1474],
  'Emerald Queen Casino': [47.2296, -122.4314],
  'Lucky Eagle Casino Hotel': [46.8854, -123.0296],
  'Monarch Casino Resort Black Hawk': [39.6889, -105.4932],
  'Saratoga Casino Black Hawk': [39.6881, -105.4919],
  'Ameristar Casino East Chicago': [41.6364, -87.4559],
  'Grand Victoria Casino Elgin': [42.0354, -88.2901],
  'Harrahs Joliet': [41.525, -88.0817],
  'Soaring Eagle Casino Resort': [43.5817, -84.7838],
  'Four Winds New Buffalo': [41.7983, -86.7478],
  'FireKeepers Casino Hotel': [42.2817, -85.3116],
  'Oxford Casino Hotel': [44.1334, -70.4892],
  'Seminole Hard Rock Hotel Casino Hollywood': [26.0065, -80.1495],
  'Seminole Hard Rock Hotel Casino Tampa': [27.9726, -82.5068],
  'Seminole Casino Coconut Creek': [26.2687, -80.1786],
  'Magic City Casino': [25.7742, -80.2284],
  'Miccosukee Resort Gaming': [25.7591, -80.5932],
  'Isle Casino Racing Pompano Park': [26.2379, -80.1243],
  'Seminole Casino Brighton': [27.1832, -81.0698],
  'Seminole Casino Hotel Immokalee': [26.4274, -81.414],
  'Mystic Lake Casino Hotel': [44.7455, -93.4685],
  'Grand Casino Hinckley': [46.0116, -92.8927],
  'Grand Casino Mille Lacs': [46.0827, -93.6555],
  'Treasure Island Resort Casino': [44.5875, -92.7218],
  'Black Bear Casino Resort': [46.6527, -92.4707],
  'Shooting Star Casino Hotel': [47.3147, -95.9608],
  'Jackpot Junction Casino Hotel': [44.3525, -94.9851],
  'Potawatomi Hotel Casino': [43.0254, -87.9368],
  'Ho-Chunk Gaming Wisconsin Dells': [43.49, -89.806],
  'Oneida Casino': [44.5328, -88.0596],
  'Menominee Casino Resort': [44.8833, -88.6358],
  'Lake of the Torches Resort Casino': [45.9522, -89.8697],
  'Ho-Chunk Gaming Madison': [43.1566, -89.2763],
  'Northwoods Casino': [45.5494, -88.9009],
  'Harrahs New Orleans': [29.9498, -90.0701],
  'L\'Auberge Casino Resort Lake Charles': [30.2017, -93.2154],
  'Golden Nugget Lake Charles': [30.2098, -93.2071],
  'Horseshoe Bossier City': [32.5243, -93.735],
  'Margaritaville Resort Casino Bossier City': [32.5274, -93.7451],
  'Boomtown Casino New Orleans': [29.8894, -90.0978],
  'Coushatta Casino Resort': [30.4843, -92.8508],
  'Beau Rivage Resort Casino': [30.393, -88.8853],
  'Hard Rock Hotel Casino Biloxi': [30.3927, -88.8805],
  'IP Casino Resort Spa Biloxi': [30.3934, -88.8774],
  'Scarlet Pearl Casino Resort': [30.4472, -88.9027],
  'Harrahs Gulf Coast': [30.3928, -88.8856],
  'Hollywood Casino Tunica': [34.6418, -90.3829],
  'Gold Strike Casino Resort Tunica': [34.6385, -90.3762],
  'Hollywood Casino St Louis': [38.7221, -90.4598],
  'Ameristar Casino Resort St Charles': [38.8041, -90.5423],
  'Harrahs North Kansas City': [39.1418, -94.5751],
  'Argosy Casino Hotel Spa': [39.1693, -94.6228],
  'Lumiere Place Casino': [38.6298, -90.1987],
  'Isle of Capri Casino Hotel Boonville': [38.9776, -92.738],
  'MGM National Harbor': [38.7843, -77.0124],
  'Live Casino Hotel Maryland': [39.1627, -76.7282],
  'Horseshoe Casino Baltimore': [39.2756, -76.6355],
  'Hollywood Casino Perryville': [39.5612, -76.0682],
  'Rocky Gap Casino Resort': [39.6965, -78.6548],
  'Dover Downs Hotel Casino': [39.1582, -75.5244],
  'Delaware Park Casino': [39.6527, -75.5965],
  'Harrington Raceway Casino': [38.9237, -75.5774],
  'Kickapoo Lucky Eagle Casino Hotel': [28.7132, -100.4954],
  'Naskila Gaming': [30.8388, -94.938],
  'Speaking Rock Entertainment Center': [31.652, -106.2871],
  'Ysleta del Sur Pueblo Casino': [31.6501, -106.2856],
  'Running Aces Casino Hotel': [45.2847, -93.1533],
  'Prairie\'s Edge Casino Resort': [44.8097, -95.5358],
  'Fond-du-Luth Casino': [46.7867, -92.1005],
  'Palace Casino Resort': [47.3797, -94.6044],
  'Rivers Casino Des Plaines': [41.9075, -87.882],
  'Hollywood Casino Aurora': [41.7619, -88.3159],
  'Par-A-Dice Hotel Casino': [40.6947, -89.5409],
  'Casino Queen': [38.6318, -90.1491],
  'Hollywood Casino Joliet': [41.525, -88.0817],
  'Horseshoe Hammond': [41.631, -87.5007],
  'Blue Chip Casino Hotel Spa': [41.7108, -86.895],
  'Four Winds South Bend': [41.6764, -86.252],
  'Belterra Casino Resort': [38.8124, -84.9563],
  'Mohegan Sun Casino': [41.4901, -72.0957],
  'Foxwoods Resort Casino Main': [41.4898, -71.959],
  'Boot Hill Casino Resort': [37.7528, -100.0171],
  'Kansas Star Casino': [37.4756, -97.2176],
  'Hollywood Casino at Kansas Speedway': [39.1147, -94.831],
  'Hard Rock Hotel Casino Sioux City': [42.4974, -96.3956],
  'WarHorse Casino Grand Island': [40.925, -98.342],
  'Ilani Casino Resort': [45.8249, -122.7412],
  'Chinook Winds Casino Resort': [44.976, -124.0171],
  'Seven Feathers Casino Resort': [42.9238, -123.2735],
  'Wildhorse Resort Casino': [45.5708, -118.7827],
  'Catawba Two Kings Casino': [35.249, -81.3412],
  'Harrahs Cherokee Valley River': [35.0654, -84.0196],
  'Rivers Casino Portsmouth VA': [36.8354, -76.3683],
  'Hard Rock Hotel Casino Bristol VA': [36.5951, -82.1887],
  'Hollywood Casino Hotel Raceway Bangor': [44.8012, -68.7789],
  'Passamaquoddy Tribe Casino': [45.204, -67.5623],
  'Glacier Peaks Casino': [48.556, -113.0097],
  'Little Big Horn Casino': [45.568, -107.4287],
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
  { name: 'Mohegan Sun', location: 'Uncasville, CT', state: 'CT', miles: 30, slug: 'mohegan-sun', desc: "One of the largest casinos in the US with 300,000+ sq ft of gaming, 4,000 slots, 300 table games, and 30 poker tables." },
  { name: 'Foxwoods Resort Casino', location: 'Mashantucket, CT', state: 'CT', miles: 41, slug: 'foxwoods', desc: "The second-largest casino in the US featuring 340,000 sq ft of gaming, 3,500 slots, 250 table games, and a 54-table poker room." },
  { name: "Jake's 58 Casino", location: 'Islandia, NY', state: 'NY', miles: 73, slug: 'jakes-58', desc: "Jake's 58 features 1,000+ slot machines and electronic table games including blackjack, craps, roulette, and baccarat on Long Island." },
  { name: 'Empire City Casino', location: 'Yonkers, NY', state: 'NY', miles: 90, slug: 'empire-city', desc: "Empire City Casino at Yonkers Raceway features 4,600+ slot machines and 150+ electronic table games just north of NYC." },
  { name: 'Resorts World NYC', location: 'Queens, NY', state: 'NY', miles: 95, slug: 'resorts-world-nyc', desc: "Located near JFK Airport, Resorts World NYC offers 6,500+ gaming machines including 170+ electronic table games." },
  { name: "Bally's Twin River", location: 'Lincoln, RI', state: 'RI', miles: 100, slug: 'ballys-twin-river', desc: "Bally's Twin River in Lincoln, RI is Rhode Island's largest casino with 4,200+ slots, 100+ table games, and a poker room." },
  { name: "Bally's Tiverton", location: 'Tiverton, RI', state: 'RI', miles: 110, slug: 'ballys-tiverton', desc: "Bally's Tiverton features 1,000+ slots and 34 table games in southern Rhode Island near the MA border." },
  { name: 'Plainridge Park Casino', location: 'Plainville, MA', state: 'MA', miles: 115, slug: 'plainridge-park', desc: "Plainridge Park Casino features 1,250+ slot machines and 30+ table games near Providence and Boston." },
  { name: 'Resorts World Catskills', location: 'Monticello, NY', state: 'NY', miles: 150, slug: 'resorts-world-catskills', desc: "Resorts World Catskills is a full resort casino in the Catskill Mountains with 1,800+ slots, 150+ table games, and a poker room." },
  { name: 'MGM Springfield', location: 'Springfield, MA', state: 'MA', miles: 155, slug: 'mgm-springfield', desc: "MGM Springfield features 2,550+ slots, 120+ table games, and a poker room in Western Massachusetts." },
  { name: 'Encore Boston Harbor', location: 'Everett, MA', state: 'MA', miles: 160, slug: 'encore-boston-harbor', desc: "Encore Boston Harbor is a luxury resort casino with 3,158 slots, 232 table games, and a 44-table poker room on the Mystic River." },
  { name: 'Borgata', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'borgata', desc: "Borgata Hotel Casino & Spa in Atlantic City features 3,400+ slots, 200+ table games, and a 50-table poker room." },
  { name: 'Hard Rock Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'hard-rock-ac', desc: "Hard Rock Hotel & Casino Atlantic City features 2,200+ slots, 120+ table games, and a poker room on the boardwalk." },
  { name: 'Caesars Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'caesars-ac', desc: "Caesars Atlantic City features 2,000+ slots and 130+ table games in a Roman-inspired luxury casino." },
  { name: "Harrah's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'harrahs-ac', desc: "Harrah's Atlantic City features 2,500+ slots, 110+ table games, and a poker room on the marina." },
  { name: "Bally's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'ballys-ac', desc: "Bally's Atlantic City features 2,100+ slots and 130+ table games as one of the original boardwalk casinos." },
  { name: 'Resorts Casino Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'resorts-casino-ac', desc: "Atlantic City's first legal casino features 1,700+ slots and 70+ table games on the boardwalk." },
  { name: 'Golden Nugget Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'golden-nugget-ac', desc: "Golden Nugget Atlantic City sits on the marina with 2,000+ slots, 60+ table games, and a dedicated poker room." },
  { name: 'Wind Creek Bethlehem', location: 'Bethlehem, PA', state: 'PA', miles: 210, slug: 'wind-creek-bethlehem', desc: "Wind Creek Bethlehem is open 24/7 with 3,000+ gaming machines, 176 table games, and a poker room." },
  { name: 'Parx Casino', location: 'Bensalem, PA', state: 'PA', miles: 240, slug: 'parx-casino', desc: "Parx Casino is Pennsylvania's highest-grossing casino with 3,500+ slots, 180+ table games, and a 43-table poker room." },
  { name: 'Live! Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', miles: 250, slug: 'live-casino-philly', desc: "Live! Casino & Hotel Philadelphia features 2,200+ slots, 150+ table games, and a poker room in South Philadelphia." },
  { name: 'Mount Airy Casino', location: 'Mount Pocono, PA', state: 'PA', miles: 175, slug: 'mount-airy-casino', desc: "Mount Airy Casino Resort in the Pocono Mountains offers 1,600+ slots, 80+ table games, a poker room, hotel, and spa." },
  // Las Vegas
  { name: 'Bellagio', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'bellagio', desc: "One of the most iconic casinos in the world with 116,000 sq ft of gaming, 2,300+ slots, 165 table games, a 40-table poker room, and the famous fountain show." },
  { name: 'MGM Grand Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'mgm-grand-las-vegas', desc: "One of the largest hotels in the world with 170,000 sq ft of gaming, 2,500+ slots, 139 table games, and a 13-table poker room." },
  { name: 'Caesars Palace', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'caesars-palace', desc: "The legendary Roman-themed resort with 124,000 sq ft of gaming, 1,500+ slots, 185 table games, a 57-table poker room, and dozens of celebrity restaurants." },
  { name: 'The Venetian Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'venetian-las-vegas', desc: "A luxury Italian-themed mega-resort with 120,000 sq ft of gaming, 2,000+ slots, 225 table games, and a 37-table poker room." },
  { name: 'Wynn Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'wynn-las-vegas', desc: "One of Vegas' most luxurious casinos with 110,000 sq ft of gaming, 1,800+ slots, 232 table games, and a 27-table poker room." },
  { name: 'Aria Resort & Casino', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'aria-las-vegas', desc: "A modern luxury resort on the Strip with 150,000 sq ft of gaming, 1,900+ slots, 215 table games, and a 24-table poker room." },
  { name: 'Cosmopolitan of Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'cosmopolitan-las-vegas', desc: "A sleek boutique-style casino resort with 100,000 sq ft of gaming, 1,300+ slots, 132 table games, and some of the best bars on the Strip." },
  { name: 'Paris Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'paris-las-vegas', desc: "A French-themed casino with 95,000 sq ft of gaming, 1,700+ slots, 105 table games, and a replica Eiffel Tower." },
  { name: 'Harrah\'s Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'harrahs-las-vegas', desc: "A classic Strip casino with 87,000 sq ft of gaming, 1,500+ slots, 95 table games, and a fun, approachable atmosphere." },
  { name: 'Planet Hollywood Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'planet-hollywood-las-vegas', desc: "A lively casino resort with 95,000 sq ft of gaming, 1,300+ slots, 110 table games, in the heart of the Strip." },
  { name: 'Mandalay Bay', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'mandalay-bay', desc: "A massive resort at the south end of the Strip with 135,000 sq ft of gaming, 1,700+ slots, 122 table games, a 26-table poker room, and a beach club." },
  { name: 'New York-New York', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'new-york-new-york', desc: "A fun NYC-themed casino with 84,000 sq ft of gaming, 2,000+ slots, 67 table games, and low table minimums." },
  { name: 'Treasure Island', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'treasure-island-las-vegas', desc: "A mid-Strip casino with 95,000 sq ft of gaming, 1,400+ slots, 60+ table games, and affordable minimums." },
  { name: 'Golden Nugget Las Vegas', location: 'Downtown Las Vegas, NV', state: 'NV', miles: 2800, slug: 'golden-nugget-las-vegas', desc: "The crown jewel of Downtown Las Vegas with 75,000 sq ft of gaming, 1,100+ slots, 63 table games, a 13-table poker room, and the famous shark tank pool." },
  { name: 'Binion\'s Gambling Hall', location: 'Downtown Las Vegas, NV', state: 'NV', miles: 2800, slug: 'binions', desc: "A legendary Downtown Vegas institution with 1,000+ slots, 50+ table games, and famous poker history on Fremont Street." },
  // Reno / Lake Tahoe
  { name: 'Peppermill Resort Spa Casino', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'peppermill-reno', desc: "Reno's premier casino resort with 80,000 sq ft of gaming, 1,700+ slots, 55+ table games, a spa, and award-winning restaurants." },
  { name: 'Grand Sierra Resort', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'grand-sierra-resort', desc: "One of Reno's largest casinos with 100,000 sq ft of gaming, 1,600+ slots, 60+ table games, and a full resort." },
  { name: 'Silver Legacy Resort Casino', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'silver-legacy-reno', desc: "Iconic Victorian-themed casino in downtown Reno with 85,000 sq ft of gaming, 1,700+ slots, 60+ table games, and a 10-table poker room." },
  { name: 'Atlantis Casino Resort Spa', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'atlantis-reno', desc: "Upscale Reno casino resort with 61,000 sq ft of gaming, 1,400+ slots, 47 table games, a full spa, and award-winning restaurants." },
  { name: "Harrah's Lake Tahoe", location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'harrahs-lake-tahoe', desc: "Full casino resort on the south shore of Lake Tahoe with 60,000 sq ft of gaming, 1,000+ slots, 65 table games, and a poker room." },
  { name: 'Harveys Lake Tahoe', location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'harveys-lake-tahoe', desc: "Lake Tahoe's largest casino with 88,000 sq ft of gaming, 1,600+ slots, 80+ table games, and a poker room at Stateline." },
  { name: 'Hard Rock Hotel & Casino Lake Tahoe', location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'hard-rock-lake-tahoe', desc: "Rock-themed casino on the shores of Lake Tahoe with 700+ slots, 20+ table games, and a poker room at Stateline." },
  // Detroit
  { name: 'MGM Grand Detroit', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'mgm-grand-detroit', desc: "Detroit's flagship casino with 100,000 sq ft of gaming, 3,500+ slots, 110 table games, and a 24-table poker room." },
  { name: 'MotorCity Casino Hotel', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'motorcity-casino', desc: "A Detroit staple with 100,000 sq ft of gaming, 2,700+ slots, 70+ table games, great concerts, and a lively atmosphere." },
  { name: 'Greektown Casino-Hotel', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'greektown-casino', desc: "Located in Detroit's Greektown district with 100,000 sq ft of gaming, 2,800+ slots, 60+ table games, and a poker room." },
  // Chicago / Illinois / Indiana
  { name: 'Rivers Casino Des Plaines', location: 'Des Plaines, IL', state: 'IL', miles: 800, slug: 'rivers-casino-des-plaines', desc: "The busiest casino in Illinois with 1,100 slots, 60 table games, and a poker room near O'Hare." },
  { name: 'Hollywood Casino Aurora', location: 'Aurora, IL', state: 'IL', miles: 830, slug: 'hollywood-casino-aurora', desc: 'A riverboat casino on the Fox River with 1,100 slots, 50+ table games, and a sports betting lounge.' },
  { name: 'Horseshoe Hammond', location: 'Hammond, IN', state: 'IN', miles: 790, slug: 'horseshoe-hammond', desc: "One of the largest casinos in the Midwest with 100,000 sq ft of gaming, 2,900+ slots, 130+ table games, and a 23-table poker room." },
  { name: 'Hard Rock Casino Northern Indiana', location: 'Gary, IN', state: 'IN', miles: 800, slug: 'hard-rock-northern-indiana', desc: 'Rock-themed casino in Gary with 1,600+ slots, table games, poker, and great dining.' },
  { name: 'Four Winds South Bend', location: 'South Bend, IN', state: 'IN', miles: 750, slug: 'four-winds-south-bend', desc: 'Premier tribal casino near Notre Dame with 3,000+ slots, table games, poker, and a hotel.' },
  // Mississippi / Gulf Coast
  { name: 'Beau Rivage Resort & Casino', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'beau-rivage-biloxi', desc: "MGM's Gulf Coast flagship with 85,000 sq ft of gaming, 1,750+ slots, 90+ table games, and a 17-table poker room in Biloxi." },
  { name: 'Hard Rock Hotel & Casino Biloxi', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'hard-rock-biloxi', desc: 'Rock-themed beachfront casino in Biloxi with 800+ slots, 60+ table games, and a poker room.' },
  { name: 'IP Casino Resort Spa', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'ip-casino-biloxi', desc: 'Full resort casino in Biloxi with 1,000+ slots, table games, and a spa on the Gulf Coast.' },
  { name: 'Scarlet Pearl Casino Resort', location: "D'Iberville, MS", state: 'MS', miles: 1300, slug: 'scarlet-pearl-casino', desc: 'Modern Gulf Coast casino resort with 900+ slots, table games, and a lively poker room.' },
  { name: 'Golden Nugget Biloxi', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'golden-nugget-biloxi', desc: 'Gulf Coast casino with 1,100+ slots, table games, and a poker room on the Biloxi waterfront.' },
  { name: "Hollywood Casino Tunica", location: 'Tunica, MS', state: 'MS', miles: 1100, slug: 'hollywood-casino-tunica', desc: "A Tunica classic with 1,000+ slots, table games, and a poker room in Mississippi's casino corridor." },
  // Louisiana
  { name: "Harrah's New Orleans", location: 'New Orleans, LA', state: 'LA', miles: 1350, slug: 'harrahs-new-orleans', desc: "The only land-based casino in New Orleans with 115,000 sq ft of gaming, 1,500+ slots, 100+ table games, and a poker room." },
  { name: "L'Auberge Casino Resort Baton Rouge", location: 'Baton Rouge, LA', state: 'LA', miles: 1350, slug: 'lauberge-baton-rouge', desc: 'Luxury casino resort on the Mississippi River with 1,600+ slots, table games, and a poker room.' },
  { name: "L'Auberge Casino & Hotel Lake Charles", location: 'Lake Charles, LA', state: 'LA', miles: 1450, slug: 'lauberge-lake-charles', desc: "Southwest Louisiana's premier casino resort with 70,000 sq ft of gaming, 1,600+ slots, 60+ table games, and a poker room." },
  { name: 'Coushatta Casino Resort', location: 'Kinder, LA', state: 'LA', miles: 1450, slug: 'coushatta-casino-resort', desc: "Louisiana's largest casino resort with 2,800+ slots, 100+ table games, and a poker room in Kinder." },
  { name: 'Boomtown Casino New Orleans', location: 'Harvey, LA', state: 'LA', miles: 1350, slug: 'boomtown-new-orleans', desc: 'Lively casino just outside New Orleans with 1,500+ slots, table games, and a poker room.' },
  // Florida
  { name: 'Seminole Hard Rock Hotel & Casino Hollywood', location: 'Hollywood, FL', state: 'FL', miles: 1300, slug: 'seminole-hard-rock-hollywood', desc: "Florida's top casino with 240,000 sq ft of gaming, 3,000+ slots, 175+ table games, and a 40-table poker room." },
  { name: 'Seminole Casino Coconut Creek', location: 'Coconut Creek, FL', state: 'FL', miles: 1320, slug: 'seminole-coconut-creek', desc: 'Popular South Florida casino with 2,400+ slots, table games, and a lively poker room.' },
  { name: 'Seminole Hard Rock Hotel & Casino Tampa', location: 'Tampa, FL', state: 'FL', miles: 1150, slug: 'seminole-hard-rock-tampa', desc: "Tampa's premier casino with 250,000 sq ft of gaming, 5,000+ slots, 200+ table games, and a 47-table poker room." },
  { name: 'Magic City Casino', location: 'Miami, FL', state: 'FL', miles: 1340, slug: 'magic-city-casino', desc: "Miami casino with 1,000+ slots and 40+ table games at the Flagler Street racetrack in Miami." },
  { name: 'Isle Casino Racing Pompano Park', location: 'Pompano Beach, FL', state: 'FL', miles: 1320, slug: 'isle-casino-pompano', desc: 'South Florida gaming with 1,500+ slots, table games, and live harness racing.' },
  // Colorado
  { name: 'Ameristar Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'ameristar-black-hawk', desc: "Colorado's largest casino with 56,000 sq ft of gaming, 1,400+ slots, 50+ table games, and a hotel in Black Hawk." },
  { name: 'Monarch Casino & Resort', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'monarch-casino-black-hawk', desc: "Upscale Colorado casino with 1,100+ slots, 50+ table games, and a full-service hotel in Black Hawk." },
  { name: 'Isle Casino Hotel Black Hawk', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'isle-casino-black-hawk', desc: 'Black Hawk favorite with 900+ slots, table games, and a poker room in the Colorado Rockies.' },
  { name: "Bronco Billy's Casino", location: 'Cripple Creek, CO', state: 'CO', miles: 1820, slug: 'bronco-billys', desc: "Cripple Creek's most popular casino with 700+ slots and 20+ table games across multiple gaming floors." },
  { name: 'Sky Ute Casino Resort', location: 'Ignacio, CO', state: 'CO', miles: 1900, slug: 'sky-ute-casino', desc: 'Southern Colorado tribal casino resort with 700+ slots, table games, golf, and a hotel.' },
  // Oklahoma
  { name: 'WinStar World Casino', location: 'Thackerville, OK', state: 'OK', miles: 1400, slug: 'winstar-world-casino', desc: "The world's largest casino with 600,000 sq ft of gaming, 8,500+ slots, 100+ table games, and a poker room in Thackerville." },
  { name: 'Choctaw Casino Resort Durant', location: 'Durant, OK', state: 'OK', miles: 1380, slug: 'choctaw-casino-durant', desc: "Oklahoma's top gaming destination with 180,000 sq ft of gaming, 5,000+ slots, 90+ table games, and a poker room in Durant." },
  { name: 'Hard Rock Hotel & Casino Tulsa', location: 'Catoosa, OK', state: 'OK', miles: 1300, slug: 'hard-rock-tulsa', desc: 'Flagship Hard Rock tribal casino near Tulsa with 2,800+ slots, 90+ tables, and a poker room.' },
  { name: 'Osage Casino Hotel Tulsa', location: 'Tulsa, OK', state: 'OK', miles: 1300, slug: 'osage-casino-tulsa', desc: 'Tulsa-area tribal casino with 2,400+ slots, table games, and a full hotel.' },
  { name: 'Cherokee Casino & Hotel Roland', location: 'Roland, OK', state: 'OK', miles: 1200, slug: 'cherokee-casino-roland', desc: 'Cherokee Nation casino near Fort Smith with 2,000+ slots, table games, and a hotel.' },
  // Arizona
  { name: 'Talking Stick Resort', location: 'Scottsdale, AZ', state: 'AZ', miles: 2400, slug: 'talking-stick-resort', desc: "Scottsdale's premier casino resort with 240,000 sq ft of gaming, 900+ slots, 50+ table games, and a poker room." },
  { name: 'Wild Horse Pass Hotel & Casino', location: 'Chandler, AZ', state: 'AZ', miles: 2400, slug: 'wild-horse-pass', desc: "Upscale Gila River tribal casino with 100,000 sq ft of gaming, 800+ slots, 50+ table games, and a hotel near Phoenix." },
  { name: 'Casino Arizona', location: 'Scottsdale, AZ', state: 'AZ', miles: 2400, slug: 'casino-arizona', desc: "One of Arizona's busiest casinos with 700+ slots, 50+ table games, and a poker room in Scottsdale." },
  { name: 'Desert Diamond Casino West Valley', location: 'Glendale, AZ', state: 'AZ', miles: 2400, slug: 'desert-diamond-west-valley', desc: "Tohono O'odham tribal casino in the West Valley with 700+ slots and 20+ table games near Glendale." },
  { name: 'Fort McDowell Casino', location: 'Fountain Hills, AZ', state: 'AZ', miles: 2400, slug: 'fort-mcdowell-casino', desc: 'Yavapai Nation casino northeast of Scottsdale with 950+ slots, table games, and a poker room.' },
  // California
  { name: 'Pechanga Resort Casino', location: 'Temecula, CA', state: 'CA', miles: 2700, slug: 'pechanga-resort', desc: "One of the largest tribal casinos in the US with 200,000 sq ft of gaming, 5,000+ slots, 154 table games, and a poker room." },
  { name: 'Morongo Casino Resort & Spa', location: 'Cabazon, CA', state: 'CA', miles: 2700, slug: 'morongo-casino', desc: 'Towering desert casino resort near Palm Springs with 2,000+ slots, table games, and a poker room.' },
  { name: 'Agua Caliente Casino Cathedral City', location: 'Cathedral City, CA', state: 'CA', miles: 2700, slug: 'agua-caliente-cathedral-city', desc: 'Palm Springs area tribal casino with 1,600+ slots, table games, poker, and a spa.' },
  { name: 'Barona Resort & Casino', location: 'Lakeside, CA', state: 'CA', miles: 2750, slug: 'barona-resort', desc: "San Diego's premier tribal casino with 2,000+ slots, 80+ table games, and a golf course in Lakeside." },
  { name: 'Sycuan Casino Resort', location: 'El Cajon, CA', state: 'CA', miles: 2750, slug: 'sycuan-casino', desc: 'East San Diego County casino with 2,500+ slots, table games, poker, and golf.' },
  { name: 'San Manuel Casino', location: 'Highland, CA', state: 'CA', miles: 2700, slug: 'san-manuel-casino', desc: "One of Southern California's biggest casinos with 7,000+ slots, 130+ table games, and a 33-table poker room." },
  { name: 'Thunder Valley Casino Resort', location: 'Lincoln, CA', state: 'CA', miles: 2600, slug: 'thunder-valley-casino', desc: "Northern California tribal casino with 3,000+ slots, 130+ table games, and a poker room near Sacramento." },
  { name: 'Cache Creek Casino Resort', location: 'Brooks, CA', state: 'CA', miles: 2600, slug: 'cache-creek-casino', desc: 'Popular Northern California tribal casino with 2,200+ slots, table games, poker, and golf.' },
  { name: 'Graton Resort & Casino', location: 'Rohnert Park, CA', state: 'CA', miles: 2600, slug: 'graton-resort', desc: 'Northern California tribal casino resort with 3,000+ slots, 144 table games, and a poker room in Sonoma County.' },
  { name: 'Soboba Casino Resort', location: 'San Jacinto, CA', state: 'CA', miles: 2700, slug: 'soboba-casino', desc: 'Inland Southern California tribal casino with 2,000+ slots, table games, poker, and hotel.' },
  // Pacific Northwest
  { name: 'Tulalip Resort Casino', location: 'Tulalip, WA', state: 'WA', miles: 2800, slug: 'tulalip-resort-casino', desc: "Washington State's top tribal casino with 2,000+ slots, 50+ table games, and a poker room north of Seattle." },
  { name: 'Snoqualmie Casino', location: 'Snoqualmie, WA', state: 'WA', miles: 2800, slug: 'snoqualmie-casino', desc: 'Mountaintop tribal casino near Seattle with 1,700+ slots, table games, poker, and stunning views.' },
  { name: 'Muckleshoot Casino', location: 'Auburn, WA', state: 'WA', miles: 2800, slug: 'muckleshoot-casino', desc: "Washington's largest tribal casino with 3,500+ slots, 75+ table games, and a poker room south of Seattle." },
  { name: 'Ilani Casino Resort', location: 'Ridgefield, WA', state: 'WA', miles: 2900, slug: 'ilani-casino', desc: "Stunning tribal casino resort near Portland with 100,000 sq ft of gaming, 2,500+ slots, 75+ table games, and a poker room." },
  { name: 'Spirit Mountain Casino', location: 'Grand Ronde, OR', state: 'OR', miles: 2900, slug: 'spirit-mountain-casino', desc: "Oregon's largest casino with 1,200+ slots, 40+ table games, and bingo near Grand Ronde." },
  // Midwest
  { name: 'Potawatomi Hotel & Casino', location: 'Milwaukee, WI', state: 'WI', miles: 800, slug: 'potawatomi-casino-milwaukee', desc: "Milwaukee's premier casino with 2,900+ slots, 100+ table games, and a 22-table poker room." },
  { name: 'Mystic Lake Casino Hotel', location: 'Prior Lake, MN', state: 'MN', miles: 1100, slug: 'mystic-lake-casino', desc: "Minnesota's largest casino with 4,000+ slots, 100+ table games, a poker room, and a hotel in Prior Lake." },
  { name: 'Ameristar Casino Kansas City', location: 'Kansas City, MO', state: 'MO', miles: 1300, slug: 'ameristar-kansas-city', desc: "Massive riverboat casino complex in Kansas City with 130,000 sq ft of gaming, 2,900+ slots, 100+ table games, and a poker room." },
  { name: 'Hollywood Casino St. Louis', location: 'Maryland Heights, MO', state: 'MO', miles: 1100, slug: 'hollywood-casino-st-louis', desc: "St. Louis' top casino with 2,100+ slots, 100+ table games, and a poker room." },
  { name: 'Prairie Band Casino & Resort', location: 'Mayetta, KS', state: 'KS', miles: 1350, slug: 'prairie-band-casino', desc: "Kansas tribal casino with 1,600+ slots, 40+ table games, and a hotel north of Topeka." },
  // Mid-Atlantic / Southeast
  { name: 'MGM National Harbor', location: 'Oxon Hill, MD', state: 'MD', miles: 400, slug: 'mgm-national-harbor', desc: "Luxury casino resort just outside Washington DC with 125,000 sq ft of gaming, 3,300+ slots, 140+ table games, and a poker room." },
  { name: 'Live! Casino & Hotel Maryland', location: 'Hanover, MD', state: 'MD', miles: 380, slug: 'live-casino-maryland', desc: 'One of the largest casinos on the East Coast with 4,000+ slots, 200+ table games, and a poker room near Baltimore.' },
  { name: 'Hollywood Casino Perryville', location: 'Perryville, MD', state: 'MD', miles: 350, slug: 'hollywood-casino-perryville', desc: "Maryland's first casino with 1,100+ slots and 30+ table games in Perryville." },
  { name: 'Rivers Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', miles: 250, slug: 'rivers-casino-philly', desc: "Rivers Casino Philadelphia features 2,200+ slots, 125+ table games, and a 30-table poker room on the Schuylkill River." },
  { name: 'Hollywood Casino at Penn National', location: 'Grantville, PA', state: 'PA', miles: 200, slug: 'hollywood-casino-penn-national', desc: "Central Pennsylvania casino with 2,300+ slots, 75+ table games, a poker room, and live horse racing in Grantville." },
  { name: 'Mohegan Sun Pocono', location: 'Wilkes-Barre, PA', state: 'PA', miles: 170, slug: 'mohegan-sun-pocono', desc: "Northeastern Pennsylvania casino with 2,500+ slots, 90+ table games, and a poker room near the Poconos." },
  { name: 'Valley Forge Casino Resort', location: 'King of Prussia, PA', state: 'PA', miles: 260, slug: 'valley-forge-casino', desc: "Suburban Philadelphia casino with 850+ slots, 50+ table games, and a hotel near Valley Forge." },
  { name: 'Presque Isle Downs & Casino', location: 'Erie, PA', state: 'PA', miles: 400, slug: 'presque-isle-downs', desc: "Northwestern Pennsylvania casino with 1,600+ slots, 30+ table games, and live horse racing in Erie." },
  // Upstate NY
  { name: 'Turning Stone Resort Casino', location: 'Verona, NY', state: 'NY', miles: 260, slug: 'turning-stone-resort', desc: "Central New York's premier casino resort with 2,400+ slots, 80+ table games, a poker room, and a hotel in Verona." },
  { name: 'Rivers Casino & Resort Schenectady', location: 'Schenectady, NY', state: 'NY', miles: 170, slug: 'rivers-casino-schenectady', desc: "Rivers Casino & Resort in Schenectady features 1,100+ slots, 60+ table games, and a poker room on the Mohawk River." },
  { name: 'del Lago Resort & Casino', location: 'Waterloo, NY', state: 'NY', miles: 280, slug: 'del-lago-resort', desc: "Del Lago Resort & Casino in Waterloo, NY features 2,000+ slots, 90+ table games, and a poker room." },
  { name: 'Tioga Downs Casino Resort', location: 'Nichols, NY', state: 'NY', miles: 230, slug: 'tioga-downs', desc: "Tioga Downs Casino Resort features 850+ slots and 20+ table games with live harness racing in Nichols, NY." },
  { name: 'JACK Cleveland Casino', location: 'Cleveland, OH', state: 'OH', miles: 450, slug: 'jack-cleveland-casino', desc: "Downtown Cleveland casino with 100,000 sq ft of gaming, 1,700+ slots, 100+ table games, and a poker room." },
  { name: 'Hollywood Casino Columbus', location: 'Columbus, OH', state: 'OH', miles: 500, slug: 'hollywood-casino-columbus', desc: 'Columbus largest casino with 2,200+ slots, 100+ table games, and a poker room near downtown.' },
  { name: 'Hollywood Casino Toledo', location: 'Toledo, OH', state: 'OH', miles: 550, slug: 'hollywood-casino-toledo', desc: 'Northwest Ohio casino with 2,000+ slots, table games, a poker room, and live entertainment.' },
  { name: 'Hard Rock Rocksino Northfield Park', location: 'Northfield, OH', state: 'OH', miles: 450, slug: 'hard-rock-rocksino-northfield', desc: "Hard Rock-branded Ohio racino with 2,300+ VLTs, 75+ table games, live entertainment, and dining near Cleveland." },
  { name: 'MGM Northfield Park', location: 'Northfield, OH', state: 'OH', miles: 450, slug: 'mgm-northfield-park', desc: 'MGM-operated Ohio casino with 2,500+ slots, table games, and a poker room southeast of Cleveland.' },
  { name: 'Hard Rock Hotel Casino Cincinnati', location: 'Cincinnati, OH', state: 'OH', miles: 600, slug: 'hard-rock-cincinnati', desc: 'Hard Rock Cincinnati casino with 2,000+ slots, 85+ table games, a poker room, and luxury hotel.' },
  { name: 'Mountaineer Casino Racetrack Resort', location: 'New Cumberland, WV', state: 'WV', miles: 350, slug: 'mountaineer-casino', desc: 'Historic WV casino resort on the Ohio River with 1,500+ slots, table games, poker, and horse racing.' },
  { name: 'Hollywood Casino at Charles Town Races', location: 'Charles Town, WV', state: 'WV', miles: 380, slug: 'hollywood-casino-charles-town', desc: 'Northern WV casino with 3,500+ slots, table games, poker, and live horse racing.' },
  { name: 'Mardi Gras Casino Resort', location: 'Cross Lanes, WV', state: 'WV', miles: 500, slug: 'mardi-gras-casino-wv', desc: 'West Virginia casino near Charleston with 900+ slots, table games, and dog racing.' },
  { name: 'Wheeling Island Hotel Casino Racetrack', location: 'Wheeling, WV', state: 'WV', miles: 380, slug: 'wheeling-island-casino', desc: 'Northern WV island casino with 1,400+ slots, table games, and greyhound racing.' },
  { name: 'Harrahs Cherokee Casino Resort', location: 'Cherokee, NC', state: 'NC', miles: 800, slug: 'harrahs-cherokee', desc: "The Southeast's top tribal casino with 3,000+ slots, 150+ table games, and a 27-table poker room in Cherokee, NC." },
  { name: 'Harrahs Cherokee Valley River Casino', location: 'Murphy, NC', state: 'NC', miles: 850, slug: 'harrahs-cherokee-valley-river', desc: 'Western NC casino with 1,000+ slots, table games, and a hotel near the Georgia border.' },
  { name: 'Rivers Casino Portsmouth', location: 'Portsmouth, VA', state: 'VA', miles: 500, slug: 'rivers-casino-portsmouth', desc: "Virginia's first casino with 1,300+ slots, 75+ table games, and a poker room on the Elizabeth River in Portsmouth." },
  { name: 'Hard Rock Hotel Casino Bristol', location: 'Bristol, VA', state: 'VA', miles: 700, slug: 'hard-rock-bristol', desc: 'Southwest Virginia casino in a historic train station with 1,400+ slots, table games, and entertainment.' },
  { name: 'Ameristar Casino Council Bluffs', location: 'Council Bluffs, IA', state: 'IA', miles: 1300, slug: 'ameristar-council-bluffs', desc: 'Major Iowa casino across from Omaha with 38,000 sq ft of gaming, 1,600+ slots, and a hotel.' },
  { name: 'Horseshoe Council Bluffs', location: 'Council Bluffs, IA', state: 'IA', miles: 1300, slug: 'horseshoe-council-bluffs', desc: 'Caesars-owned Iowa casino with 1,100+ slots, table games, a poker room, and hotel.' },
  { name: 'Prairie Meadows Casino', location: 'Altoona, IA', state: 'IA', miles: 1200, slug: 'prairie-meadows-casino', desc: 'Central Iowa casino and racetrack with 1,600+ slots, table games, poker, and live horse racing near Des Moines.' },
  { name: 'Isle Casino Hotel Bettendorf', location: 'Bettendorf, IA', state: 'IA', miles: 950, slug: 'isle-casino-bettendorf', desc: 'Quad Cities Iowa casino with 1,100+ slots, table games, a poker room, and hotel on the Mississippi River.' },
  { name: 'Wild Rose Casino Resort', location: 'Emmetsburg, IA', state: 'IA', miles: 1200, slug: 'wild-rose-emmetsburg', desc: 'Northwest Iowa casino resort with 700+ slots, table games, and a hotel.' },
  { name: 'Sandia Resort Casino', location: 'Albuquerque, NM', state: 'NM', miles: 1900, slug: 'sandia-resort-casino', desc: 'Albuquerque top casino resort with 2,100+ slots, table games, poker, golf, and a luxury hotel at the base of the Sandia Mountains.' },
  { name: 'Route 66 Casino Hotel', location: 'Albuquerque, NM', state: 'NM', miles: 1900, slug: 'route-66-casino', desc: 'West Albuquerque tribal casino with 1,500+ slots, table games, bingo, and a hotel on Historic Route 66.' },
  { name: 'Inn of the Mountain Gods Resort Casino', location: 'Mescalero, NM', state: 'NM', miles: 2000, slug: 'inn-of-the-mountain-gods', desc: 'Stunning lakeside resort casino in the Sacramento Mountains with 1,000+ slots, table games, and a golf course.' },
  { name: 'Buffalo Thunder Resort Casino', location: 'Santa Fe, NM', state: 'NM', miles: 1950, slug: 'buffalo-thunder-casino', desc: 'Upscale Pojoaque Pueblo casino resort near Santa Fe with 1,000+ slots, table games, and a luxury hotel.' },
  { name: 'Fire Rock Navajo Casino', location: 'Church Rock, NM', state: 'NM', miles: 2000, slug: 'fire-rock-navajo-casino', desc: 'Navajo Nation casino near Gallup with 500+ slots and table games in northwest New Mexico.' },
  { name: 'Deadwood Mountain Grand', location: 'Deadwood, SD', state: 'SD', miles: 1600, slug: 'deadwood-mountain-grand', desc: "One of Deadwood's finest casinos with 400+ slots, 20+ table games, and a hotel in the heart of the Black Hills." },
  { name: 'Cadillac Jacks Gaming Resort', location: 'Deadwood, SD', state: 'SD', miles: 1600, slug: 'cadillac-jacks-deadwood', desc: 'Popular Deadwood casino resort with 300+ slots, table games, and a hotel in the Black Hills.' },
  { name: 'Dakota Sioux Casino Hotel', location: 'Watertown, SD', state: 'SD', miles: 1400, slug: 'dakota-sioux-casino', desc: 'Northeast South Dakota tribal casino with 300+ slots, table games, and a hotel.' },
  { name: 'Grand River Casino Resort', location: 'Mobridge, SD', state: 'SD', miles: 1500, slug: 'grand-river-casino', desc: 'Standing Rock Sioux casino on the Missouri River with 300+ slots, table games, and a resort.' },
  { name: 'Sky Dancer Hotel Casino', location: 'Belcourt, ND', state: 'ND', miles: 1500, slug: 'sky-dancer-casino', desc: "Turtle Mountain Band casino in north-central North Dakota with 400+ slots and 10+ table games." },
  { name: 'Spirit Lake Casino Resort', location: 'St. Michael, ND', state: 'ND', miles: 1400, slug: 'spirit-lake-casino', desc: 'Eastern North Dakota tribal casino with 900+ slots, table games, bingo, and a hotel.' },
  { name: '4 Bears Casino Lodge', location: 'New Town, ND', state: 'ND', miles: 1600, slug: '4-bears-casino', desc: "MHA Nation casino on Lake Sakakawea with 600+ slots, 20+ table games, and a lodge in western North Dakota." },
  { name: 'KwaTaqNuk Resort Casino', location: 'Polson, MT', state: 'MT', miles: 2000, slug: 'kwataqnuk-casino', desc: "Confederated Salish and Kootenai Tribes casino on Flathead Lake with 200+ slots and table games in Polson, MT." },
  { name: 'Charging Horse Casino', location: 'Lame Deer, MT', state: 'MT', miles: 1800, slug: 'charging-horse-casino', desc: "Northern Cheyenne tribal casino in southeastern Montana with 200+ slots and gaming in Lame Deer." },
  { name: 'Coeur dAlene Casino', location: 'Worley, ID', state: 'ID', miles: 2200, slug: 'coeur-dalene-casino', desc: 'Idaho premier tribal casino resort with 1,600+ slots, table games, bingo, golf, and a luxury spa near Coeur dAlene.' },
  { name: 'Clearwater River Casino Lodge', location: 'Lewiston, ID', state: 'ID', miles: 2200, slug: 'clearwater-river-casino', desc: 'Nez Perce tribal casino in Lewiston with 700+ slots, table games, and a lodge.' },
  { name: 'Shoshone-Bannock Casino Hotel', location: 'Fort Hall, ID', state: 'ID', miles: 2100, slug: 'shoshone-bannock-casino', desc: 'Eastern Idaho tribal casino with 700+ slots, table games, and a hotel near Pocatello.' },
  { name: 'Wind Creek Casino Hotel Wetumpka', location: 'Wetumpka, AL', state: 'AL', miles: 900, slug: 'wind-creek-wetumpka', desc: "Alabama's largest casino with 3,000+ electronic bingo machines, 85+ table games, and a hotel in Wetumpka." },
  { name: 'Wind Creek Casino Hotel Atmore', location: 'Atmore, AL', state: 'AL', miles: 950, slug: 'wind-creek-atmore', desc: "Poarch Band tribal casino with 2,200+ machines, 80+ table games, and a hotel in southern Alabama." },
  { name: 'Wind Creek Casino Hotel Montgomery', location: 'Montgomery, AL', state: 'AL', miles: 900, slug: 'wind-creek-montgomery', desc: "Central Alabama tribal casino with 1,700+ machines, 60+ table games, and a hotel in Montgomery." },
  { name: 'WarHorse Casino Lincoln', location: 'Lincoln, NE', state: 'NE', miles: 1200, slug: 'warhorse-casino-lincoln', desc: 'Nebraska newest casino at Lincoln historic racetrack with 1,500+ slots and table games.' },
  { name: 'WarHorse Casino Omaha', location: 'Omaha, NE', state: 'NE', miles: 1300, slug: 'warhorse-casino-omaha', desc: 'New Omaha casino with 1,000+ slots and table games.' },
  { name: 'Atlantis Casino Resort Spa', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'atlantis-casino-reno', desc: "Upscale Reno casino resort with 61,000 sq ft of gaming, 1,400+ slots, 47 table games, excellent dining, and a spa." },
  { name: 'Circus Circus Reno', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'circus-circus-reno', desc: "Classic Reno casino with 60,000+ sq ft of gaming, 1,400+ slots, 45+ table games, affordable rooms, and family entertainment." },
  { name: 'Eldorado Resort Casino Reno', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'eldorado-reno', desc: "Downtown Reno casino resort with 78,000 sq ft of gaming, 1,800+ slots, 55 table games, and a poker room on Virginia Street." },
  { name: 'Harrahs Reno', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'harrahs-reno', desc: "Classic downtown Reno casino with 50,000+ sq ft of gaming, 1,100+ slots, 50+ table games, and a hotel on Virginia Street." },
  { name: 'Nugget Casino Resort Sparks', location: 'Sparks, NV', state: 'NV', miles: 2700, slug: 'nugget-casino-sparks', desc: "Sparks casino resort with 70,000 sq ft of gaming, 1,400+ slots, 45+ table games, and a hotel near Reno." },
  { name: 'Caesars Palace Lake Tahoe', location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'caesars-lake-tahoe', desc: "Lake Tahoe casino resort with 45,000 sq ft of gaming, 700+ slots, 45+ table games, poker, and ski resort access." },
  { name: 'Eureka Casino Resort Mesquite', location: 'Mesquite, NV', state: 'NV', miles: 2600, slug: 'eureka-casino-mesquite', desc: "Mesquite casino resort with 38,000 sq ft of gaming, 700+ slots, 30+ table games, golf, and a hotel near the Utah border." },
  { name: 'Virgin Hotels Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'virgin-hotels-las-vegas', desc: "Off-Strip Las Vegas casino hotel with 60,000 sq ft of gaming, 900+ slots, 40+ table games, and stylish amenities." },
  { name: 'Durango Casino Resort Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'durango-casino-las-vegas', desc: "Station Casinos newest Las Vegas property with 83,000 sq ft of gaming, 1,600+ slots, 60+ table games, and a poker room." },
  { name: 'Fontainebleau Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'fontainebleau-las-vegas', desc: "Las Vegas newest mega-resort with 150,000 sq ft of gaming, 1,700+ slots, 112 table games, a massive poker room, and world-class nightlife on the north Strip." },
  { name: 'Resorts World Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'resorts-world-las-vegas', desc: "Las Vegas first new Strip megaresort in over a decade with 117,000 sq ft of gaming, 1,400+ slots, 117 table games, and the largest sportsbook on the Strip." },
  { name: 'Circa Resort Casino Downtown', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'circa-resort-las-vegas', desc: "Downtown Las Vegas adults-only resort with 45,000 sq ft of gaming, 1,000+ slots, 49 table games, a massive sportsbook, and the world's largest pool amphitheater." },
  { name: 'Pechanga Resort Casino', location: 'Temecula, CA', state: 'CA', miles: 2750, slug: 'pechanga-resort-casino', desc: 'One of the largest casinos in the US with 200,000 sq ft of gaming, 5,000+ slots, a world-class poker room, and a luxury resort.' },
  { name: 'Agua Caliente Casino Cathedral City', location: 'Cathedral City, CA', state: 'CA', miles: 2750, slug: 'agua-caliente-casino', desc: 'Palm Springs area casino with 1,000+ slots, table games, poker, and a luxury hotel near the desert.' },
  { name: 'Fantasy Springs Resort Casino', location: 'Indio, CA', state: 'CA', miles: 2750, slug: 'fantasy-springs-casino', desc: 'Cahuilla casino resort near Palm Springs with 2,000+ slots, table games, poker, bowling, and a hotel.' },
  { name: 'Viejas Casino Resort', location: 'Alpine, CA', state: 'CA', miles: 2750, slug: 'viejas-casino', desc: 'East San Diego County tribal casino with 2,000+ slots, table games, poker, an outlet mall, and a hotel.' },
  { name: 'Harrahs Resort Southern California', location: 'Valley Center, CA', state: 'CA', miles: 2750, slug: 'harrahs-southern-california', desc: 'North San Diego County casino resort with 1,700+ slots, table games, poker, and a luxury hotel.' },
  { name: 'Chumash Casino Resort', location: 'Santa Ynez, CA', state: 'CA', miles: 2800, slug: 'chumash-casino', desc: 'Santa Barbara area tribal casino resort with 2,000+ slots, table games, poker, and a hotel in the wine country.' },
  { name: 'Jackson Rancheria Casino Resort', location: 'Jackson, CA', state: 'CA', miles: 2700, slug: 'jackson-rancheria-casino', desc: 'Gold Country tribal casino resort with 2,300+ slots, table games, and a hotel in the Sierra Nevada foothills.' },
  { name: 'Wild Horse Pass Hotel Casino', location: 'Chandler, AZ', state: 'AZ', miles: 2400, slug: 'wild-horse-pass-casino', desc: 'Gila River tribal casino resort near Phoenix with 1,100+ slots, table games, a poker room, and a luxury hotel.' },
  { name: 'Downstream Casino Resort', location: 'Quapaw, OK', state: 'OK', miles: 1400, slug: 'downstream-casino', desc: 'Quapaw Nation casino at the corner of three states with 2,000+ slots, table games, poker, and a hotel.' },
  { name: 'Emerald Queen Casino', location: 'Tacoma, WA', state: 'WA', miles: 2800, slug: 'emerald-queen-casino', desc: 'Tacoma tribal casino with 2,000+ slots, table games, poker, and entertainment.' },
  { name: 'Lucky Eagle Casino Hotel', location: 'Rochester, WA', state: 'WA', miles: 2800, slug: 'lucky-eagle-casino', desc: 'Chehalis tribal casino south of Olympia with 1,500+ slots, table games, and a hotel.' },
  { name: 'Saratoga Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', miles: 1700, slug: 'saratoga-casino-black-hawk', desc: "Colorado mountain casino with 600+ slots, 20+ table games, and dining in historic Black Hawk." },
  { name: 'Ameristar Casino East Chicago', location: 'East Chicago, IN', state: 'IN', miles: 700, slug: 'ameristar-east-chicago', desc: "Lake Michigan casino with 2,100+ slots, 60+ table games, and a hotel in East Chicago, Indiana." },
  { name: 'Grand Victoria Casino Elgin', location: 'Elgin, IL', state: 'IL', miles: 750, slug: 'grand-victoria-casino', desc: 'Fox River casino west of Chicago with 900+ slots, table games, and riverboat dining.' },
  { name: 'Harrahs Joliet', location: 'Joliet, IL', state: 'IL', miles: 750, slug: 'harrahs-joliet', desc: 'Southwest Chicago suburb casino with 900+ slots, table games, poker, and a hotel on the Des Plaines River.' },
  { name: 'Spirit Mountain Casino', location: 'Grand Ronde, OR', state: 'OR', miles: 2900, slug: 'spirit-mountain-casino-oregon', desc: 'Grand Ronde tribal casino southwest of Portland with 2,000+ slots, table games, bingo, and a hotel.' },
  { name: 'Ilani Casino Resort', location: 'Ridgefield, WA', state: 'WA', miles: 2900, slug: 'ilani-casino-resort', desc: "Cowlitz tribal casino just north of Portland with 100,000 sq ft of gaming, 2,500+ slots, 75+ table games, and a poker room." },
  { name: 'Soaring Eagle Casino Resort', location: 'Mount Pleasant, MI', state: 'MI', miles: 600, slug: 'soaring-eagle-casino', desc: 'Central Michigan tribal casino resort with 4,800+ slots, table games, poker, bingo, and a hotel.' },
  { name: 'Four Winds New Buffalo', location: 'New Buffalo, MI', state: 'MI', miles: 650, slug: 'four-winds-new-buffalo', desc: 'Southwest Michigan casino with 3,000+ slots, table games, poker, and a hotel near Indiana border.' },
  { name: 'FireKeepers Casino Hotel', location: 'Battle Creek, MI', state: 'MI', miles: 650, slug: 'firekeepers-casino', desc: 'Nottawaseppi Huron Band casino in Battle Creek with 3,000+ slots, table games, a poker room, and hotel.' },
  { name: 'Oxford Casino Hotel', location: 'Oxford, ME', state: 'ME', miles: 350, slug: 'oxford-casino', desc: 'Maine only full-service casino with 850+ slots, table games, poker, and a hotel in Oxford County.' },
  // ── Florida ──────────────────────────────────────────────────────
  { name: 'Seminole Casino Coconut Creek', location: 'Coconut Creek, FL', state: 'FL', miles: 1270, slug: 'seminole-casino-coconut-creek', desc: 'Seminole Casino Coconut Creek features 2,400+ slots, 70+ table games, and a 26-table poker room near Fort Lauderdale.' },
  { name: 'Miccosukee Resort Gaming', location: 'Miami, FL', state: 'FL', miles: 1340, slug: 'miccosukee-resort-gaming', desc: 'Miccosukee Resort Gaming offers 1,900+ slots and a poker room on the edge of the Florida Everglades near Miami.' },
  { name: 'Seminole Casino Brighton', location: 'Okeechobee, FL', state: 'FL', miles: 1180, slug: 'seminole-casino-brighton', desc: "Seminole Casino Brighton features 400+ slots and bingo in Okeechobee, FL." },
  { name: 'Seminole Casino Hotel Immokalee', location: 'Immokalee, FL', state: 'FL', miles: 1210, slug: 'seminole-casino-immokalee', desc: 'Seminole Casino Hotel Immokalee offers 1,300+ slots and table games in southwest Florida near Naples.' },

  // ── Minnesota ─────────────────────────────────────────────────────
  { name: 'Grand Casino Hinckley', location: 'Hinckley, MN', state: 'MN', miles: 1300, slug: 'grand-casino-hinckley', desc: "Grand Casino Hinckley features 2,100+ slot machines, 40+ table games, and bingo about an hour north of Minneapolis." },
  { name: 'Grand Casino Mille Lacs', location: 'Onamia, MN', state: 'MN', miles: 1310, slug: 'grand-casino-mille-lacs', desc: 'Grand Casino Mille Lacs offers 1,600+ slots, table games, and bingo on the shores of Lake Mille Lacs.' },
  { name: 'Treasure Island Resort Casino', location: 'Red Wing, MN', state: 'MN', miles: 1240, slug: 'treasure-island-resort-mn', desc: 'Treasure Island Resort Casino features 2,700+ slots, table games, bingo, and a poker room along the Mississippi River near Red Wing.' },
  { name: 'Black Bear Casino Resort', location: 'Carlton, MN', state: 'MN', miles: 1420, slug: 'black-bear-casino', desc: "Black Bear Casino Resort offers 2,000+ slot machines, 30+ table games, and bingo near Duluth, MN." },
  { name: 'Shooting Star Casino Hotel', location: 'Mahnomen, MN', state: 'MN', miles: 1520, slug: 'shooting-star-casino', desc: 'Shooting Star Casino Hotel features 1,200+ slots and table games in the White Earth Nation in northwestern Minnesota.' },
  { name: 'Jackpot Junction Casino Hotel', location: 'Morton, MN', state: 'MN', miles: 1310, slug: 'jackpot-junction-casino', desc: 'Jackpot Junction Casino Hotel offers 1,500+ slots, table games, and bingo in southwestern Minnesota.' },

  // ── Wisconsin ─────────────────────────────────────────────────────
  { name: 'Potawatomi Hotel Casino', location: 'Milwaukee, WI', state: 'WI', miles: 860, slug: 'potawatomi-hotel-casino', desc: 'Potawatomi Hotel Casino in Milwaukee features 3,000+ slots, 130+ table games, a 25-table poker room, and multiple restaurants.' },
  { name: 'Ho-Chunk Gaming Wisconsin Dells', location: 'Baraboo, WI', state: 'WI', miles: 920, slug: 'ho-chunk-gaming-wisconsin-dells', desc: 'Ho-Chunk Gaming Wisconsin Dells offers 2,100+ slots, table games, and poker near the Wisconsin Dells resort area.' },
  { name: 'Oneida Casino', location: 'Green Bay, WI', state: 'WI', miles: 1010, slug: 'oneida-casino', desc: 'Oneida Casino in Green Bay features 3,000+ slots, table games, and multiple gaming facilities across the Green Bay area.' },
  { name: 'Menominee Casino Resort', location: 'Keshena, WI', state: 'WI', miles: 1000, slug: 'menominee-casino-resort', desc: 'Menominee Casino Resort features 900+ slots and table games in the Menominee Indian Reservation in northeastern Wisconsin.' },
  { name: 'Lake of the Torches Resort Casino', location: 'Lac du Flambeau, WI', state: 'WI', miles: 1110, slug: 'lake-of-the-torches-casino', desc: 'Lake of the Torches Resort Casino offers 800+ slots and table games in the heart of Wisconsin lake country.' },
  { name: 'Ho-Chunk Gaming Madison', location: 'Madison, WI', state: 'WI', miles: 890, slug: 'ho-chunk-gaming-madison', desc: "Ho-Chunk Gaming Madison features 750+ slot machines and 20+ table games near Madison, WI." },
  { name: 'Northwoods Casino', location: 'Carter, WI', state: 'WI', miles: 1050, slug: 'northwoods-casino', desc: 'Forest County Potawatomi tribal casino featuring 400+ slots and gaming in Crandon, Wisconsin.' },

  // ── Louisiana ─────────────────────────────────────────────────────
  { name: 'Golden Nugget Lake Charles', location: 'Lake Charles, LA', state: 'LA', miles: 1435, slug: 'golden-nugget-lake-charles', desc: 'Golden Nugget Lake Charles features 1,700+ slots, 70+ table games, a poker room, and a full resort along the lake.' },
  { name: 'Horseshoe Bossier City', location: 'Bossier City, LA', state: 'LA', miles: 1470, slug: 'horseshoe-bossier-city', desc: 'Horseshoe Bossier City offers 1,500+ slots and 50+ table games on a riverboat casino in the Shreveport-Bossier area.' },
  { name: 'Margaritaville Resort Casino Bossier City', location: 'Bossier City, LA', state: 'LA', miles: 1465, slug: 'margaritaville-bossier-city', desc: 'Margaritaville Resort Casino Bossier City features 1,400+ slots, table games, and a full resort in Bossier City.' },
  { name: 'Boomtown Casino New Orleans', location: 'Harvey, LA', state: 'LA', miles: 1205, slug: 'boomtown-casino-new-orleans', desc: 'Boomtown Casino New Orleans offers 1,500+ slots and 50+ table games just across the river from downtown New Orleans.' },

  // ── Mississippi ───────────────────────────────────────────────────
  { name: 'Harrahs Gulf Coast', location: 'Biloxi, MS', state: 'MS', miles: 1221, slug: 'harrahs-gulf-coast', desc: 'Harrahs Gulf Coast features 1,000+ slots, table games, and a hotel on the Biloxi waterfront.' },
  { name: 'Gold Strike Casino Resort Tunica', location: 'Tunica, MS', state: 'MS', miles: 1048, slug: 'gold-strike-tunica', desc: 'Gold Strike Casino Resort in Tunica offers 1,100+ slots, 50+ table games, and a 32-story hotel in the heart of Tunica casino country.' },

  // ── Missouri ──────────────────────────────────────────────────────
  { name: 'Ameristar Casino Resort St Charles', location: 'St Charles, MO', state: 'MO', miles: 955, slug: 'ameristar-casino-st-charles', desc: 'Ameristar Casino Resort St Charles offers 3,000+ slots, 130+ table games, a poker room, and a full resort on the Missouri River.' },
  { name: 'Harrahs North Kansas City', location: 'North Kansas City, MO', state: 'MO', miles: 1220, slug: 'harrahs-north-kansas-city', desc: 'Harrahs North Kansas City features 2,000+ slots, 60+ table games, and a poker room on the Missouri River north of Kansas City.' },
  { name: 'Argosy Casino Hotel Spa', location: 'Riverside, MO', state: 'MO', miles: 1225, slug: 'argosy-casino-riverside', desc: 'Argosy Casino Hotel Spa in Riverside offers 1,600+ slots, 40+ table games, and a spa resort along the Missouri River.' },
  { name: 'Lumiere Place Casino', location: 'St Louis, MO', state: 'MO', miles: 952, slug: 'lumiere-place-casino', desc: 'Lumiere Place Casino in downtown St Louis features 2,000+ slots, 70+ table games, and a poker room along the Mississippi riverfront.' },
  { name: 'Isle of Capri Casino Hotel Boonville', location: 'Boonville, MO', state: 'MO', miles: 1050, slug: 'isle-of-capri-boonville', desc: 'Isle of Capri Casino Hotel Boonville offers 900+ slots and table games on the Missouri River in central Missouri.' },

  // ── Maryland ──────────────────────────────────────────────────────
  { name: 'Horseshoe Casino Baltimore', location: 'Baltimore, MD', state: 'MD', miles: 360, slug: 'horseshoe-casino-baltimore', desc: 'Horseshoe Casino Baltimore features 2,200+ slots, 150+ table games, and a poker room in the heart of Baltimore.' },
  { name: 'Rocky Gap Casino Resort', location: 'Flintstone, MD', state: 'MD', miles: 450, slug: 'rocky-gap-casino-resort', desc: 'Rocky Gap Casino Resort features 650+ slots and table games in a scenic mountain resort setting in western Maryland.' },

  // ── Delaware ──────────────────────────────────────────────────────
  { name: 'Dover Downs Hotel Casino', location: 'Dover, DE', state: 'DE', miles: 280, slug: 'dover-downs-casino', desc: 'Dover Downs Hotel Casino features 2,200+ slots, table games, and a poker room near the Dover International Speedway.' },
  { name: 'Delaware Park Casino', location: 'Wilmington, DE', state: 'DE', miles: 310, slug: 'delaware-park-casino', desc: 'Delaware Park Casino offers 2,500+ slots and table games with live thoroughbred horse racing near Wilmington.' },
  { name: 'Harrington Raceway Casino', location: 'Harrington, DE', state: 'DE', miles: 290, slug: 'harrington-raceway-casino', desc: 'Harrington Raceway Casino features 2,000+ slots and table games with live harness racing in central Delaware.' },
  // ── Texas ─────────────────────────────────────────────────────────
  { name: 'Kickapoo Lucky Eagle Casino Hotel', location: 'Eagle Pass, TX', state: 'TX', miles: 1850, slug: 'kickapoo-lucky-eagle-casino', desc: 'Kickapoo Lucky Eagle Casino Hotel is the largest casino in Texas, featuring 3,000+ slots, bingo, and a full hotel in Eagle Pass near the Mexico border.' },
  { name: 'Naskila Gaming', location: 'Livingston, TX', state: 'TX', miles: 1600, slug: 'naskila-gaming', desc: "Naskila Gaming near Livingston, TX features 1,000+ Class II gaming machines operated by the Alabama-Coushatta Tribe." },
  { name: 'Speaking Rock Entertainment Center', location: 'El Paso, TX', state: 'TX', miles: 1900, slug: 'speaking-rock-el-paso', desc: 'Speaking Rock Entertainment Center is a Tigua tribal facility in El Paso featuring 500+ bingo and electronic gaming machines.' },
  { name: 'Ysleta del Sur Pueblo Casino', location: 'El Paso, TX', state: 'TX', miles: 1900, slug: 'ysleta-del-sur-casino', desc: "Ysleta del Sur Pueblo operates tribal gaming in El Paso with 400+ electronic games and bingo." },

  // ── Minnesota expand ───────────────────────────────────────────────
  { name: 'Running Aces Casino Hotel', location: 'Columbus, MN', state: 'MN', miles: 1195, slug: 'running-aces-casino', desc: 'Running Aces Casino Hotel features 900+ slots, table games, and live harness racing north of Minneapolis-St. Paul.' },
  { name: "Prairie's Edge Casino Resort", location: 'Granite Falls, MN', state: 'MN', miles: 1340, slug: 'prairies-edge-casino', desc: "Prairie's Edge Casino Resort offers 700+ slots, 20+ table games, and bingo on the Upper Sioux Community in southwestern Minnesota." },
  { name: 'Fond-du-Luth Casino', location: 'Duluth, MN', state: 'MN', miles: 1380, slug: 'fond-du-luth-casino', desc: 'Fond-du-Luth Casino is a downtown Duluth tribal casino featuring 400+ slots and table games operated by the Fond du Lac Band.' },
  { name: 'Palace Casino Resort', location: 'Cass Lake, MN', state: 'MN', miles: 1450, slug: 'palace-casino-resort-mn', desc: 'Palace Casino Resort features 700+ slots and table games on the Leech Lake Indian Reservation in northern Minnesota.' },

  // ── Illinois expand ────────────────────────────────────────────────
  { name: 'Rivers Casino Des Plaines', location: 'Des Plaines, IL', state: 'IL', miles: 845, slug: 'rivers-casino-des-plaines-il', desc: "Rivers Casino Des Plaines is one of the busiest casinos in the US featuring 1,100+ slots, 75+ table games, and a poker room near O'Hare Airport." },
  { name: 'Par-A-Dice Hotel Casino', location: 'East Peoria, IL', state: 'IL', miles: 970, slug: 'par-a-dice-casino', desc: 'Par-A-Dice Hotel Casino in East Peoria features 1,000+ slots, 30+ table games, and a hotel on the Illinois River.' },
  { name: 'Casino Queen', location: 'East St Louis, IL', state: 'IL', miles: 955, slug: 'casino-queen-east-st-louis', desc: 'Casino Queen in East St. Louis features 1,000+ slots and 30+ table games directly across from the St. Louis Gateway Arch.' },
  { name: 'Hollywood Casino Joliet', location: 'Joliet, IL', state: 'IL', miles: 880, slug: 'hollywood-casino-joliet', desc: 'Hollywood Casino Joliet offers 1,100+ slots and 50+ table games on the Des Plaines River in Joliet, Illinois.' },

  // ── Indiana expand ─────────────────────────────────────────────────
  { name: 'Horseshoe Hammond', location: 'Hammond, IN', state: 'IN', miles: 850, slug: 'horseshoe-hammond-in', desc: 'Horseshoe Hammond is the busiest casino in the Chicago area with 2,900+ slots, 130+ table games, and a 23-table poker room on Lake Michigan.' },
  { name: 'Blue Chip Casino Hotel Spa', location: 'Michigan City, IN', state: 'IN', miles: 835, slug: 'blue-chip-casino-michigan-city', desc: 'Blue Chip Casino Hotel Spa in Michigan City features 1,600+ slots, 50+ table games, and a full resort near Lake Michigan.' },
  { name: 'Four Winds South Bend', location: 'South Bend, IN', state: 'IN', miles: 840, slug: 'four-winds-south-bend-in', desc: "Four Winds South Bend offers 3,000+ slots, 90+ table games, and a poker room in South Bend near Notre Dame." },
  { name: 'Belterra Casino Resort', location: 'Florence, IN', state: 'IN', miles: 900, slug: 'belterra-casino-resort', desc: 'Belterra Casino Resort on the Ohio River in Florence, Indiana features 1,500+ slots, 50+ table games, and a full resort.' },

  // ── Connecticut expand ─────────────────────────────────────────────

  // ── Kansas expand ──────────────────────────────────────────────────
  { name: 'Boot Hill Casino Resort', location: 'Dodge City, KS', state: 'KS', miles: 1380, slug: 'boot-hill-casino', desc: 'Boot Hill Casino Resort in Dodge City features 600+ slots, table games, and a resort in the heart of Kansas cattle country.' },
  { name: 'Kansas Star Casino', location: 'Mulvane, KS', state: 'KS', miles: 1270, slug: 'kansas-star-casino', desc: 'Kansas Star Casino in Mulvane offers 1,700+ slots, 40+ table games, and a poker room near Wichita.' },
  { name: 'Hollywood Casino at Kansas Speedway', location: 'Kansas City, KS', state: 'KS', miles: 1220, slug: 'hollywood-casino-kansas-speedway', desc: 'Hollywood Casino at Kansas Speedway features 2,000+ slots, 50+ table games, and is located at the NASCAR speedway in Kansas City.' },

  // ── Nebraska expand ────────────────────────────────────────────────
  { name: 'Hard Rock Hotel Casino Sioux City', location: 'Sioux City, NE', state: 'NE', miles: 1310, slug: 'hard-rock-sioux-city', desc: 'Hard Rock Hotel Casino Sioux City features 1,000+ slots, 30+ table games, and a poker room along the Missouri River.' },
  { name: 'WarHorse Casino Grand Island', location: 'Grand Island, NE', state: 'NE', miles: 1400, slug: 'warhorse-casino-grand-island', desc: "WarHorse Casino Grand Island features 300+ slot machines and electronic table games in central Nebraska." },

  // ── Oregon expand ──────────────────────────────────────────────────
  { name: 'Chinook Winds Casino Resort', location: 'Lincoln City, OR', state: 'OR', miles: 2990, slug: 'chinook-winds-casino', desc: 'Chinook Winds Casino Resort on the Oregon coast features 1,200+ slots, table games, bingo, and ocean views in Lincoln City.' },
  { name: 'Seven Feathers Casino Resort', location: 'Canyonville, OR', state: 'OR', miles: 3100, slug: 'seven-feathers-casino', desc: 'Seven Feathers Casino Resort in Canyonville offers 1,300+ slots, table games, and a full resort in southern Oregon.' },
  { name: 'Wildhorse Resort Casino', location: 'Pendleton, OR', state: 'OR', miles: 2870, slug: 'wildhorse-resort-casino', desc: 'Wildhorse Resort Casino near Pendleton features 1,100+ slots, table games, bingo, an RV park, and a golf course.' },

  // ── North Carolina expand ──────────────────────────────────────────
  { name: 'Catawba Two Kings Casino', location: 'Kings Mountain, NC', state: 'NC', miles: 750, slug: 'catawba-two-kings-casino', desc: 'Catawba Two Kings Casino in Kings Mountain features 1,300+ slots and table games operated by the Catawba Indian Nation near Charlotte.' },
  { name: 'Harrahs Cherokee Valley River', location: 'Murphy, NC', state: 'NC', miles: 900, slug: 'harrahs-cherokee-valley-river-nc', desc: 'Harrahs Cherokee Valley River Casino in Murphy offers 1,000+ slots, table games, and poker in the Great Smoky Mountains foothills.' },

  // ── Virginia expand ────────────────────────────────────────────────
  { name: 'Rivers Casino Portsmouth VA', location: 'Portsmouth, VA', state: 'VA', miles: 410, slug: 'rivers-casino-portsmouth-va', desc: 'Rivers Casino Portsmouth features 1,400+ slots, 75+ table games, and a poker room on the Elizabeth River in Portsmouth, Virginia.' },
  { name: 'Hard Rock Hotel Casino Bristol VA', location: 'Bristol, VA', state: 'VA', miles: 670, slug: 'hard-rock-bristol-va', desc: 'Hard Rock Hotel Casino Bristol features 2,700+ slots, 90+ table games, and a poker room in the twin cities of Bristol on the VA/TN border.' },

  // ── Maine expand ───────────────────────────────────────────────────
  { name: 'Hollywood Casino Hotel Raceway Bangor', location: 'Bangor, ME', state: 'ME', miles: 310, slug: 'hollywood-casino-bangor', desc: 'Hollywood Casino Hotel and Raceway in Bangor features 950+ slots, table games, and live harness racing in central Maine.' },
  { name: 'Passamaquoddy Tribe Casino', location: 'Princeton, ME', state: 'ME', miles: 370, slug: 'passamaquoddy-tribe-casino', desc: "The Passamaquoddy Tribe operates gaming in Princeton, Maine with 200+ electronic gaming machines." },

  // ── Montana expand ─────────────────────────────────────────────────
  { name: 'Glacier Peaks Casino', location: 'Browning, MT', state: 'MT', miles: 2150, slug: 'glacier-peaks-casino', desc: "Glacier Peaks Casino on the Blackfeet Indian Reservation offers 200+ slot machines near Glacier National Park." },
  { name: 'Little Big Horn Casino', location: 'Crow Agency, MT', state: 'MT', miles: 1730, slug: 'little-big-horn-casino', desc: "Little Big Horn Casino on the Crow Reservation features 200+ slots and gaming near the Little Bighorn Battlefield." },
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
  const initials = post.is_anonymous ? '👤' : (post.author || '?').split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
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

const STATE_TZ = {
  'CT':'America/New_York','NY':'America/New_York','NJ':'America/New_York','PA':'America/New_York',
  'MA':'America/New_York','RI':'America/New_York','NH':'America/New_York','VT':'America/New_York',
  'ME':'America/New_York','MD':'America/New_York','DE':'America/New_York','VA':'America/New_York',
  'NC':'America/New_York','SC':'America/New_York','GA':'America/New_York','FL':'America/New_York',
  'OH':'America/New_York','MI':'America/New_York','IN':'America/Indiana/Indianapolis',
  'KY':'America/New_York','WV':'America/New_York',
  'IL':'America/Chicago','WI':'America/Chicago','MN':'America/Chicago','IA':'America/Chicago',
  'MO':'America/Chicago','AR':'America/Chicago','LA':'America/Chicago','MS':'America/Chicago',
  'AL':'America/Chicago','TN':'America/Chicago',
  'TX':'America/Chicago','OK':'America/Chicago','KS':'America/Chicago','NE':'America/Chicago',
  'SD':'America/Chicago','ND':'America/Chicago',
  'MT':'America/Denver','WY':'America/Denver','CO':'America/Denver','NM':'America/Denver',
  'UT':'America/Denver','ID':'America/Denver','AZ':'America/Phoenix',
  'NV':'America/Los_Angeles','CA':'America/Los_Angeles','OR':'America/Los_Angeles',
  'WA':'America/Los_Angeles','HI':'Pacific/Honolulu','AK':'America/Anchorage'
};
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
    googleHtml = `<div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
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
html{overflow-x:hidden}body{overflow-x:hidden;transition:background .2s,color .2s}
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
.bt-day-grid{display:grid;grid-template-columns:repeat(7,1fr);gap:4px;margin:10px 0}
.bt-day{display:flex;flex-direction:column;align-items:center;gap:3px}
.bt-day-label{font-size:10px;color:var(--muted);font-weight:500}
.bt-day-bar{width:100%;border-radius:3px;min-height:4px;transition:height .4s ease}
.bt-day-score{font-size:10px;color:var(--muted);font-family:'DM Mono',monospace}
.bt-slot-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin:10px 0}
.bt-slot{background:var(--bg);border-radius:8px;padding:8px 10px;text-align:center}
.bt-slot-icon{font-size:18px;margin-bottom:2px}
.bt-slot-label{font-size:11px;font-weight:600;color:var(--text)}
.bt-slot-hours{font-size:10px;color:var(--muted)}
.bt-slot-bar-wrap{height:4px;background:var(--border);border-radius:2px;margin:5px 0 3px;overflow:hidden}
.bt-slot-bar{height:100%;border-radius:2px;transition:width .5s}
.bt-badge{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:600;padding:3px 8px;border-radius:12px;margin-top:8px}
.bt-badge-busy{background:#edf5f0;color:#1a6b3c}
.bt-badge-quiet{background:#fef3e2;color:#b07d2a}
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
.mobile-profile-bar{display:none;background:var(--surface);border-bottom:1px solid var(--border);padding:10px 16px;align-items:center;justify-content:space-between;gap:12px;position:sticky;top:60px;z-index:99}
body.dark .mobile-profile-bar{background:#1a1a18}
@media(max-width:768px){.mobile-profile-bar.visible{display:flex}.main-wrap{grid-template-columns:1fr}.sidebar{display:none}.mobile-cards{display:flex;flex-direction:column;gap:12px;padding:0 16px 16px}.casino-hero{padding:24px 20px}nav{padding:0 16px}.nav-links{display:none}.nav-post-btn{display:none}footer{flex-direction:column;gap:12px;text-align:center;padding:20px}#casinoSignInBtn{display:inline-flex !important;font-size:12px;padding:6px 12px}}
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
    <a class="nav-link" href="/bookmarks">⭐ Saved</a>
  </div>
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
    <button class="dark-toggle" id="darkToggle" onclick="toggleDark()" title="Toggle dark mode">🌙</button>
    <span id="navProfileBadge" style="display:none;align-items:center;gap:6px;font-size:13px;color:var(--text);cursor:pointer" onclick="window.location=\'/bookmarks\'">
      <span id="navRankEmoji"></span><span id="navUsername" style="font-weight:600"></span>
    </span>
    <button class="btn-outline" id="casinoSignInBtn" onclick="showCasinoSignIn()" style="font-size:13px;padding:7px 14px">Sign in</button>
    <button class="btn nav-post-btn" onclick="document.getElementById(\'composeCard\').scrollIntoView({behavior:\'smooth\'})">+ Post Update</button>
  </div>
</nav>
<div class="mobile-profile-bar" id="mobileProfileBar">
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
    <span style="font-size:28px" id="mpbRankEmoji">🎰</span>
    <div>
      <div style="font-size:14px;font-weight:700;color:var(--text)" id="mpbRankName">Rail Bird</div>
      <div style="font-size:12px;color:var(--muted)"><span id="mpbPoints">0</span> pts · <span id="mpbStreak"></span></div>
    </div>
  </div>
  <div style="text-align:right">
    <div style="font-size:11px;color:var(--muted);margin-bottom:4px" id="mpbNextLabel"></div>
    <div class="rank-bar-wrap" style="width:120px"><div class="rank-bar-fill" id="mpbBar" style="width:0%"></div></div>
    <div style="font-size:11px;color:var(--muted);margin-top:3px" id="mpbMaxLabel"></div>
  </div>
</div>
<script>
(function(){
  const u = localStorage.getItem('cc_username') || '';
  const e = localStorage.getItem('cc_email') || '';
  if (localStorage.getItem('cc_signed_in') && (u || e)) {
    const b = document.getElementById('casinoSignInBtn');
    if (b) b.textContent = '👤 ' + (u || e.split('@')[0]);
  }
})();
</script>

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
  <!-- MOBILE PROFILE CARD -->
  <div class="card" id="mobileProfileCard" style="display:none">
    <div class="card-title">🎰 Your Profile</div>
    <div style="display:flex;align-items:center;gap:14px;padding:4px 0 8px">
      <div style="font-size:36px" id="mobileRankEmoji">🎰</div>
      <div style="flex:1">
        <div style="font-size:17px;font-weight:700" id="mobileRankName">Rail Bird</div>
        <div style="font-size:13px;color:var(--muted);margin-top:2px"><span id="mobilePoints">0</span> pts</div>
        <div class="rank-bar-wrap" style="margin-top:8px">
          <div class="rank-bar-fill" id="mobileRankBar" style="width:0%"></div>
        </div>
        <div style="font-size:11px;color:var(--muted);margin-top:4px" id="mobileRankProgress"></div>
      </div>
    </div>
    <div style="font-size:12px;color:var(--accent);font-weight:600" id="mobileStreakDisplay"></div>
  </div>
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
        <div id="postStatus" style="display:none;font-size:12px;color:#c0392b;margin-top:6px;text-align:center"></div>
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
    <div class="card" id="bestTimeCard" style="display:none">
      <div class="card-title">🕐 Best Time to Visit</div>
      <div id="bestTimeContent"><div style="color:var(--muted);font-size:13px">Loading...</div></div>
    </div>
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
const CASINO_TZ = ${JSON.stringify(STATE_TZ[casino.state] || 'America/New_York')};
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
    const email = localStorage.getItem('cc_email') || '';
    const emailParam = email ? '&email=' + encodeURIComponent(email) : '';
    const r = await fetch(\`/api/profile?cookie_id=\${encodeURIComponent(userCookieId)}\` + emailParam);
    userProfile = await r.json();
    // If we got Rail Bird (0 pts) but are signed in, try fetching by email directly
    if (email && localStorage.getItem('cc_signed_in') && (!userProfile.points || userProfile.points === 0)) {
      try {
        const r2 = await fetch(\`/api/profile?cookie_id=\${encodeURIComponent(userCookieId)}&email=\${encodeURIComponent(email)}\`);
        const p2 = await r2.json();
        if (p2.points > 0 || p2.email) {
          userProfile = p2;
          renderProfile();
          updateSignInBtn();
        }
      } catch(e2) {}
    }
    // Always merge localStorage email/username in case DB hasn't propagated
    if (localStorage.getItem('cc_signed_in')) {
      if (!userProfile.email) userProfile.email = email;
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
  // Update nav badge
  const pts = userProfile.points || 0;
  // Update nav badge
  const RNKS = [{name:'Rail Bird',min:0,emoji:'🎰'},{name:'Fish',min:50,emoji:'🐟'},{name:'Regular',min:150,emoji:'♠️'},{name:'Floor Regular',min:400,emoji:'🎲'},{name:'High Roller',min:800,emoji:'💰'},{name:'Whale',min:1500,emoji:'👑'}];
  let curRank = RNKS[0]; for(const r of RNKS){if(pts>=r.min)curRank=r;}
  const nextRank = RNKS.find(r=>r.min>pts);
  const badge = document.getElementById('navProfileBadge');
  const signInBtn = document.getElementById('casinoSignInBtn');
  if(badge && userProfile.username){
    const e1=document.getElementById('navRankEmoji'); const e2=document.getElementById('navUsername');
    if(e1)e1.textContent=curRank.emoji; if(e2)e2.textContent=userProfile.username;
    badge.style.display='flex'; if(signInBtn)signInBtn.style.display='none';
  }
  // Update mobile profile bar
  const mbar=document.getElementById('mobileProfileBar');
  if(mbar&&pts>0){
    mbar.classList.add('visible');
    const el=id=>document.getElementById(id);
    if(el('mpbRankEmoji'))el('mpbRankEmoji').textContent=curRank.emoji;
    if(el('mpbRankName'))el('mpbRankName').textContent=curRank.name;
    if(el('mpbPoints'))el('mpbPoints').textContent=pts.toLocaleString();
    if(el('mpbBar'))el('mpbBar').style.width=nextRank?Math.round(((pts-curRank.min)/(nextRank.min-curRank.min))*100)+'%':'100%';
    if(el('mpbNextLabel'))el('mpbNextLabel').textContent=nextRank?(nextRank.min-pts)+' pts to '+nextRank.emoji+' '+nextRank.name:'Max rank reached';
    if(el('mpbMaxLabel'))el('mpbMaxLabel').textContent=nextRank?nextRank.emoji+' '+nextRank.name:'👑';
  }
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
    // Show mobile profile card when signed in
    const mpc = document.getElementById('mobileProfileCard');
    if (mpc) mpc.style.display = 'block';
  }
  // Update mobile profile card
  const mRankEmoji = document.getElementById('mobileRankEmoji');
  if (mRankEmoji) {
    mRankEmoji.textContent = rank.emoji;
    document.getElementById('mobileRankName').textContent = rank.name;
    document.getElementById('mobilePoints').textContent = pts.toLocaleString();
    const mpct = next ? Math.round(((pts - rank.min) / (next.min - rank.min)) * 100) : 100;
    document.getElementById('mobileRankBar').style.width = mpct + '%';
    document.getElementById('mobileRankProgress').textContent = next ? (next.min - pts) + ' pts to ' + next.emoji + ' ' + next.name : '👑 Max rank!';
    const mStreak = document.getElementById('mobileStreakDisplay');
    if (mStreak) mStreak.textContent = streak > 1 ? '🔥 ' + streak + ' day streak!' : '';
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
    const initials = p.is_anonymous ? '👤' : (p.author || '?').split(' ').map(w=>w[0]).join('').toUpperCase().slice(0,2);
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

// Time-aware post validation
function getCasinoLocalHour() {
  // Use casino's timezone offset from IANA if available, else estimate from state
  const tz = CASINO_TZ || 'America/New_York';
  try {
    const now = new Date();
    const parts = new Intl.DateTimeFormat('en-US', { hour: 'numeric', hour12: false, timeZone: tz }).formatToParts(now);
    return parseInt(parts.find(p => p.type === 'hour').value);
  } catch(e) { return new Date().getHours(); }
}

function checkTimeConflict(body) {
  const hour = getCasinoLocalHour();
  const lower = body.toLowerCase();
  const isDay = hour >= 7 && hour < 17;
  const isNight = hour >= 20 || hour < 4;
  const dayWords = ['tonight', 'last night', 'this evening', 'evening crowd'];
  const nightWords = ['this morning', 'afternoon', 'today at lunch'];
  if (isDay && dayWords.some(function(w){ return lower.includes(w); })) {
    return 'Heads up: it looks like daytime at this casino. Double-check your timing!';
  }
  if (isNight && nightWords.some(function(w){ return lower.includes(w); })) {
    return 'Heads up: it looks like nighttime at this casino. Double-check your timing!';
  }
  return null;
}

async function submitPost() {
  const body = document.getElementById('composeBody').value.trim();
  if (!body) return;

  // Time conflict check
  const timeWarning = checkTimeConflict(body);
  if (timeWarning) {
    const proceed = confirm(timeWarning + ' Post anyway?');
    if (!proceed) return;
  }

  const btn = document.getElementById('postBtn');
  btn.disabled = true; btn.textContent = 'Posting...';
  const author = isAnon ? 'Anonymous' : (document.getElementById('authorName').value.trim() || 'Anonymous');
  try {
    const r = await fetch('/api/submit-post', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        body,
        casino: CASINO_NAME,
        category: document.getElementById('composeCategory').value,
        author,
        is_anonymous: isAnon,
        cookie_id: getCookieId(),
        post_type: currentPostType,
      })
    });
    const data = await r.json();
    if (!r.ok) {
      btn.disabled = false;
      btn.textContent = currentPostType === 'ask' ? 'Ask Question' : 'Post Update';
      const status = document.getElementById('postStatus');
      if (status) { status.textContent = data.error || 'Failed to post.'; status.style.display = 'block'; setTimeout(() => status.style.display = 'none', 4000); }
      else alert(data.error || 'Failed to post.');
      return;
    }
    const newPost = data.post;
    if (newPost) allPosts.unshift(newPost);
    renderFeed(allPosts);
    document.getElementById('composeBody').value = '';

    // Award points + show scratch ticket
    const action = currentPostType === 'ask' ? 'post_ask' : 'post_report';
    const pointsData = await addPoints(action);
    if (currentPostType === 'report') {
      const scratchData = await addPoints('scratch');
      showScratchTicket({ ...pointsData, points_earned: scratchData?.points_earned || 10 });
    } else {
      showScratchTicket(pointsData);
    }
  } catch(e) { console.error('submit error:', e); }
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
  // If already signed in, show toast
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
// ── BEST TIME TO VISIT ─────────────────────────────────────
async function loadBestTime() {
  try {
    const r = await fetch(\`/api/best-time?casino=\${encodeURIComponent(CASINO_NAME)}\`);
    const data = await r.json();
    const card = document.getElementById('bestTimeCard');
    const el = document.getElementById('bestTimeContent');
    if (!data.hasData || !card) return;
    card.style.display = 'block';

    const maxScore = Math.max(...data.dayScores.filter(d => d.score !== null).map(d => d.score), 1);

    const dayBars = data.dayScores.map(d => {
      const color = d.score === null ? 'var(--border)' : d.score >= 66 ? '#1a6b3c' : d.score >= 33 ? '#e6a817' : '#e05c5c';
      const height = d.score !== null ? Math.max(8, Math.round((d.score / maxScore) * 40)) : 4;
      const tip = d.score !== null ? d.dayFull + ': ' + d.topReaction + ' (' + d.score + '% busy score)' : d.dayFull + ': no data';
      return '<div class="bt-day" title="' + tip + '">'
        + '<div class="bt-day-bar" style="height:' + height + 'px;background:' + color + '"></div>'
        + '<div class="bt-day-label">' + d.day + '</div>'
        + '</div>';
    }).join('');

    const slotCards = data.slotScores.map(s => {
      const pct = s.score !== null ? s.score : 0;
      const color = pct >= 66 ? '#1a6b3c' : pct >= 33 ? '#e6a817' : '#e05c5c';
      return '<div class="bt-slot">'
        + '<div class="bt-slot-icon">' + s.icon + '</div>'
        + '<div class="bt-slot-label">' + s.label + '</div>'
        + '<div class="bt-slot-hours">' + s.hours + '</div>'
        + '<div class="bt-slot-bar-wrap"><div class="bt-slot-bar" style="width:' + pct + '%;background:' + color + '"></div></div>'
        + '<div style="font-size:10px;color:var(--muted)">' + (s.score !== null ? s.topReaction : '—') + '</div>'
        + '</div>';
    }).join('');

    const bestBadge = data.bestDay ? '<div class="bt-badge bt-badge-busy">🔥 Busiest: ' + data.bestDay.dayFull + '</div>' : '';
    const quietBadge = data.worstDay ? '<div class="bt-badge bt-badge-quiet">😴 Quietest: ' + data.worstDay.dayFull + '</div>' : '';

    el.innerHTML = '<div class="bt-day-grid">' + dayBars + '</div>'
      + '<div style="display:flex;gap:6px;flex-wrap:wrap">' + bestBadge + quietBadge + '</div>'
      + '<div style="margin-top:12px;margin-bottom:4px;font-size:11px;font-weight:600;color:var(--muted);text-transform:uppercase;letter-spacing:.5px">By time of day</div>'
      + '<div class="bt-slot-grid">' + slotCards + '</div>'
      + (data.summary ? '<div style="font-size:12px;color:var(--muted);margin-top:8px;line-height:1.5">' + data.summary + '</div>' : '')
      + '<div style="font-size:10px;color:var(--muted);margin-top:8px">Based on ' + data.totalReactions + ' reports in the last 90 days</div>';
  } catch(e) {
    console.error('best-time error:', e);
  }
}

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
    const username = data.profile?.username || '';
    if (email) {
      localStorage.setItem('cc_email', email);
      localStorage.setItem('cc_signed_in', '1');
      if (username) localStorage.setItem('cc_username', username);
      // Update nav button immediately with correct name
      const btn = document.getElementById('casinoSignInBtn');
      if (btn) btn.textContent = '👤 ' + (username || email.split('@')[0]);
    }
  } catch(e) { console.error('token detection error:', e); }
})();

loadProfile();
loadScore();
loadReactions();
loadLeaderboard();
loadBestTime();
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

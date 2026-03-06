// ═══════════════════════════════════════════════════════════════
//  CasinoConditions — Seed API
//  Browser: /api/seed.js
//  Options (query params):
//    ?force=true      Delete all seeded posts first, then re-seed
//    ?casino=slug     Only seed one specific casino
//    ?secret=xxx      Required secret to prevent abuse
// ═══════════════════════════════════════════════════════════════

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const SEED_SECRET  = process.env.SEED_SECRET || 'casino2024';

// ─────────────────────────────────────────────
//  ALL CASINOS  (193 total, pulled from casino.js)
// ─────────────────────────────────────────────
const CASINOS = [
  { name: 'Mohegan Sun', location: 'Uncasville, CT', state: 'CT', slug: 'mohegan-sun', lat: 41.4901, lon: -72.0957 },
  { name: 'Foxwoods Resort Casino', location: 'Mashantucket, CT', state: 'CT', slug: 'foxwoods', lat: 41.4898, lon: -71.959 },
  { name: 'Empire City Casino', location: 'Yonkers, NY', state: 'NY', slug: 'empire-city', lat: 40.9312, lon: -73.8988 },
  { name: 'Resorts World NYC', location: 'Queens, NY', state: 'NY', slug: 'resorts-world-nyc', lat: 40.6697, lon: -73.833 },
  { name: 'Plainridge Park Casino', location: 'Plainville, MA', state: 'MA', slug: 'plainridge-park', lat: 42.0154, lon: -71.3284 },
  { name: 'Resorts World Catskills', location: 'Monticello, NY', state: 'NY', slug: 'resorts-world-catskills', lat: 41.6537, lon: -74.691 },
  { name: 'MGM Springfield', location: 'Springfield, MA', state: 'MA', slug: 'mgm-springfield', lat: 42.1015, lon: -72.5898 },
  { name: 'Encore Boston Harbor', location: 'Everett, MA', state: 'MA', slug: 'encore-boston-harbor', lat: 42.3957, lon: -71.082 },
  { name: 'Borgata', location: 'Atlantic City, NJ', state: 'NJ', slug: 'borgata', lat: 39.3636, lon: -74.4421 },
  { name: 'Hard Rock Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', slug: 'hard-rock-ac', lat: 39.3611, lon: -74.4229 },
  { name: 'Caesars Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', slug: 'caesars-ac', lat: 39.3541, lon: -74.4382 },
  { name: 'Resorts Casino Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', slug: 'resorts-casino-ac', lat: 39.3636, lon: -74.4202 },
  { name: 'Golden Nugget Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', slug: 'golden-nugget-ac', lat: 39.3766, lon: -74.4418 },
  { name: 'Wind Creek Bethlehem', location: 'Bethlehem, PA', state: 'PA', slug: 'wind-creek-bethlehem', lat: 40.6196, lon: -75.3647 },
  { name: 'Parx Casino', location: 'Bensalem, PA', state: 'PA', slug: 'parx-casino', lat: 40.1012, lon: -74.948 },
  { name: 'Live! Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', slug: 'live-casino-philly', lat: 39.91, lon: -75.1675 },
  { name: 'Mount Airy Casino', location: 'Mount Pocono, PA', state: 'PA', slug: 'mount-airy-casino', lat: 41.1248, lon: -75.3571 },
  { name: 'Bellagio', location: 'Las Vegas, NV', state: 'NV', slug: 'bellagio', lat: 36.1129, lon: -115.1765 },
  { name: 'MGM Grand Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'mgm-grand-las-vegas', lat: 36.1025, lon: -115.1701 },
  { name: 'Caesars Palace', location: 'Las Vegas, NV', state: 'NV', slug: 'caesars-palace', lat: 36.1162, lon: -115.1745 },
  { name: 'The Venetian Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'venetian-las-vegas', lat: 36.121, lon: -115.1697 },
  { name: 'Wynn Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'wynn-las-vegas', lat: 36.1265, lon: -115.1672 },
  { name: 'Aria Resort & Casino', location: 'Las Vegas, NV', state: 'NV', slug: 'aria-las-vegas', lat: 36.1072, lon: -115.1757 },
  { name: 'Cosmopolitan of Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'cosmopolitan-las-vegas', lat: 36.1096, lon: -115.1762 },
  { name: 'Paris Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'paris-las-vegas', lat: 36.1124, lon: -115.1706 },
  { name: 'Planet Hollywood Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'planet-hollywood-las-vegas', lat: 36.1092, lon: -115.1714 },
  { name: 'Mandalay Bay', location: 'Las Vegas, NV', state: 'NV', slug: 'mandalay-bay', lat: 36.0908, lon: -115.1762 },
  { name: 'New York-New York', location: 'Las Vegas, NV', state: 'NV', slug: 'new-york-new-york', lat: 36.1023, lon: -115.1745 },
  { name: 'Treasure Island', location: 'Las Vegas, NV', state: 'NV', slug: 'treasure-island-las-vegas', lat: 36.1247, lon: -115.1714 },
  { name: 'Golden Nugget Las Vegas', location: 'Downtown Las Vegas, NV', state: 'NV', slug: 'golden-nugget-las-vegas', lat: 36.1706, lon: -115.1422 },
  { name: 'Peppermill Resort Spa Casino', location: 'Reno, NV', state: 'NV', slug: 'peppermill-reno', lat: 39.5114, lon: -119.7817 },
  { name: 'Grand Sierra Resort', location: 'Reno, NV', state: 'NV', slug: 'grand-sierra-resort', lat: 39.5296, lon: -119.7781 },
  { name: 'Silver Legacy Resort Casino', location: 'Reno, NV', state: 'NV', slug: 'silver-legacy-reno', lat: 39.5274, lon: -119.8166 },
  { name: 'Atlantis Casino Resort Spa', location: 'Reno, NV', state: 'NV', slug: 'atlantis-reno', lat: 39.4968, lon: -119.7817 },
  { name: 'Harveys Lake Tahoe', location: 'Stateline, NV', state: 'NV', slug: 'harveys-lake-tahoe', lat: 38.9592, lon: -119.9443 },
  { name: 'Hard Rock Hotel & Casino Lake Tahoe', location: 'Stateline, NV', state: 'NV', slug: 'hard-rock-lake-tahoe', lat: 38.9601, lon: -119.9445 },
  { name: 'MGM Grand Detroit', location: 'Detroit, MI', state: 'MI', slug: 'mgm-grand-detroit', lat: 42.3314, lon: -83.0499 },
  { name: 'MotorCity Casino Hotel', location: 'Detroit, MI', state: 'MI', slug: 'motorcity-casino', lat: 42.3531, lon: -83.0874 },
  { name: 'Greektown Casino-Hotel', location: 'Detroit, MI', state: 'MI', slug: 'greektown-casino', lat: 42.3326, lon: -83.042 },
  { name: 'Rivers Casino Des Plaines', location: 'Des Plaines, IL', state: 'IL', slug: 'rivers-casino-des-plaines', lat: 42.0334, lon: -87.8914 },
  { name: 'Hollywood Casino Aurora', location: 'Aurora, IL', state: 'IL', slug: 'hollywood-casino-aurora', lat: 41.7569, lon: -88.3201 },
  { name: 'Horseshoe Hammond', location: 'Hammond, IN', state: 'IN', slug: 'horseshoe-hammond', lat: 41.6305, lon: -87.4996 },
  { name: 'Hard Rock Casino Northern Indiana', location: 'Gary, IN', state: 'IN', slug: 'hard-rock-northern-indiana', lat: 41.5784, lon: -87.3631 },
  { name: 'Four Winds South Bend', location: 'South Bend, IN', state: 'IN', slug: 'four-winds-south-bend', lat: 41.6764, lon: -86.252 },
  { name: 'Beau Rivage Resort & Casino', location: 'Biloxi, MS', state: 'MS', slug: 'beau-rivage-biloxi', lat: 30.3939, lon: -88.8854 },
  { name: 'Hard Rock Hotel & Casino Biloxi', location: 'Biloxi, MS', state: 'MS', slug: 'hard-rock-biloxi', lat: 30.3957, lon: -88.8745 },
  { name: 'IP Casino Resort Spa', location: 'Biloxi, MS', state: 'MS', slug: 'ip-casino-biloxi', lat: 30.3914, lon: -88.88 },
  { name: 'Golden Nugget Biloxi', location: 'Biloxi, MS', state: 'MS', slug: 'golden-nugget-biloxi', lat: 30.401, lon: -88.8723 },
  { name: 'Hollywood Casino Tunica', location: 'Tunica, MS', state: 'MS', slug: 'hollywood-casino-tunica', lat: 34.6482, lon: -90.3673 },
  { name: 'Coushatta Casino Resort', location: 'Kinder, LA', state: 'LA', slug: 'coushatta-casino-resort', lat: 30.4817, lon: -92.8451 },
  { name: 'Boomtown Casino New Orleans', location: 'Harvey, LA', state: 'LA', slug: 'boomtown-new-orleans', lat: 29.8979, lon: -90.0824 },
  { name: 'Seminole Hard Rock Hotel & Casino Hollywood', location: 'Hollywood, FL', state: 'FL', slug: 'seminole-hard-rock-hollywood', lat: 26.0094, lon: -80.1773 },
  { name: 'Seminole Casino Coconut Creek', location: 'Coconut Creek, FL', state: 'FL', slug: 'seminole-coconut-creek', lat: 26.2726, lon: -80.1892 },
  { name: 'Seminole Hard Rock Hotel & Casino Tampa', location: 'Tampa, FL', state: 'FL', slug: 'seminole-hard-rock-tampa', lat: 27.9771, lon: -82.4714 },
  { name: 'Magic City Casino', location: 'Miami, FL', state: 'FL', slug: 'magic-city-casino', lat: 25.7771, lon: -80.2284 },
  { name: 'Isle Casino Racing Pompano Park', location: 'Pompano Beach, FL', state: 'FL', slug: 'isle-casino-pompano', lat: 26.2361, lon: -80.1242 },
  { name: 'Ameristar Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'ameristar-black-hawk', lat: 39.7989, lon: -105.4872 },
  { name: 'Monarch Casino & Resort', location: 'Black Hawk, CO', state: 'CO', slug: 'monarch-casino-black-hawk', lat: 39.7993, lon: -105.4854 },
  { name: 'Isle Casino Hotel Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'isle-casino-black-hawk', lat: 39.7985, lon: -105.4882 },
  { name: 'Sky Ute Casino Resort', location: 'Ignacio, CO', state: 'CO', slug: 'sky-ute-casino', lat: 37.1108, lon: -107.6306 },
  { name: 'WinStar World Casino', location: 'Thackerville, OK', state: 'OK', slug: 'winstar-world-casino', lat: 33.7791, lon: -97.1434 },
  { name: 'Choctaw Casino Resort Durant', location: 'Durant, OK', state: 'OK', slug: 'choctaw-casino-durant', lat: 33.9826, lon: -96.4083 },
  { name: 'Hard Rock Hotel & Casino Tulsa', location: 'Catoosa, OK', state: 'OK', slug: 'hard-rock-tulsa', lat: 36.2047, lon: -95.8569 },
  { name: 'Osage Casino Hotel Tulsa', location: 'Tulsa, OK', state: 'OK', slug: 'osage-casino-tulsa', lat: 36.2584, lon: -95.9558 },
  { name: 'Cherokee Casino & Hotel Roland', location: 'Roland, OK', state: 'OK', slug: 'cherokee-casino-roland', lat: 35.4134, lon: -94.5241 },
  { name: 'Talking Stick Resort', location: 'Scottsdale, AZ', state: 'AZ', slug: 'talking-stick-resort', lat: 33.5726, lon: -111.891 },
  { name: 'Wild Horse Pass Hotel & Casino', location: 'Chandler, AZ', state: 'AZ', slug: 'wild-horse-pass', lat: 33.2855, lon: -111.9353 },
  { name: 'Casino Arizona', location: 'Scottsdale, AZ', state: 'AZ', slug: 'casino-arizona', lat: 33.5729, lon: -111.8903 },
  { name: 'Desert Diamond Casino West Valley', location: 'Glendale, AZ', state: 'AZ', slug: 'desert-diamond-west-valley', lat: 33.5356, lon: -112.2632 },
  { name: 'Fort McDowell Casino', location: 'Fountain Hills, AZ', state: 'AZ', slug: 'fort-mcdowell-casino', lat: 33.6573, lon: -111.6865 },
  { name: 'Pechanga Resort Casino', location: 'Temecula, CA', state: 'CA', slug: 'pechanga-resort', lat: 33.4722, lon: -117.0634 },
  { name: 'Morongo Casino Resort & Spa', location: 'Cabazon, CA', state: 'CA', slug: 'morongo-casino', lat: 33.929, lon: -116.9712 },
  { name: 'Agua Caliente Casino Cathedral City', location: 'Cathedral City, CA', state: 'CA', slug: 'agua-caliente-cathedral-city', lat: 33.7805, lon: -116.4645 },
  { name: 'Barona Resort & Casino', location: 'Lakeside, CA', state: 'CA', slug: 'barona-resort', lat: 32.8705, lon: -116.8627 },
  { name: 'Sycuan Casino Resort', location: 'El Cajon, CA', state: 'CA', slug: 'sycuan-casino', lat: 32.8218, lon: -116.8053 },
  { name: 'San Manuel Casino', location: 'Highland, CA', state: 'CA', slug: 'san-manuel-casino', lat: 34.1481, lon: -117.2626 },
  { name: 'Thunder Valley Casino Resort', location: 'Lincoln, CA', state: 'CA', slug: 'thunder-valley-casino', lat: 38.9066, lon: -121.2878 },
  { name: 'Cache Creek Casino Resort', location: 'Brooks, CA', state: 'CA', slug: 'cache-creek-casino', lat: 38.7926, lon: -122.1558 },
  { name: 'Graton Resort & Casino', location: 'Rohnert Park, CA', state: 'CA', slug: 'graton-resort', lat: 38.3462, lon: -122.6946 },
  { name: 'Soboba Casino Resort', location: 'San Jacinto, CA', state: 'CA', slug: 'soboba-casino', lat: 33.8053, lon: -116.9376 },
  { name: 'Tulalip Resort Casino', location: 'Tulalip, WA', state: 'WA', slug: 'tulalip-resort-casino', lat: 48.0587, lon: -122.1152 },
  { name: 'Snoqualmie Casino', location: 'Snoqualmie, WA', state: 'WA', slug: 'snoqualmie-casino', lat: 47.5295, lon: -121.8374 },
  { name: 'Muckleshoot Casino', location: 'Auburn, WA', state: 'WA', slug: 'muckleshoot-casino', lat: 47.3057, lon: -122.1474 },
  { name: 'Ilani Casino Resort', location: 'Ridgefield, WA', state: 'WA', slug: 'ilani-casino', lat: 45.8357, lon: -122.7487 },
  { name: 'Spirit Mountain Casino', location: 'Grand Ronde, OR', state: 'OR', slug: 'spirit-mountain-casino', lat: 45.0637, lon: -123.572 },
  { name: 'Potawatomi Hotel & Casino', location: 'Milwaukee, WI', state: 'WI', slug: 'potawatomi-casino-milwaukee', lat: 43.0389, lon: -87.9384 },
  { name: 'Mystic Lake Casino Hotel', location: 'Prior Lake, MN', state: 'MN', slug: 'mystic-lake-casino', lat: 44.7271, lon: -93.4271 },
  { name: 'Ameristar Casino Kansas City', location: 'Kansas City, MO', state: 'MO', slug: 'ameristar-kansas-city', lat: 39.1053, lon: -94.5808 },
  { name: 'Hollywood Casino St. Louis', location: 'Maryland Heights, MO', state: 'MO', slug: 'hollywood-casino-st-louis', lat: 38.7162, lon: -90.4617 },
  { name: 'Prairie Band Casino & Resort', location: 'Mayetta, KS', state: 'KS', slug: 'prairie-band-casino', lat: 39.4194, lon: -95.703 },
  { name: 'MGM National Harbor', location: 'Oxon Hill, MD', state: 'MD', slug: 'mgm-national-harbor', lat: 38.7823, lon: -77.0134 },
  { name: 'Live! Casino & Hotel Maryland', location: 'Hanover, MD', state: 'MD', slug: 'live-casino-maryland', lat: 39.1657, lon: -76.7282 },
  { name: 'Hollywood Casino Perryville', location: 'Perryville, MD', state: 'MD', slug: 'hollywood-casino-perryville', lat: 39.5634, lon: -76.0728 },
  { name: 'Rivers Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', slug: 'rivers-casino-philly', lat: 40.0003, lon: -75.1344 },
  { name: 'Hollywood Casino at Penn National', location: 'Grantville, PA', state: 'PA', slug: 'hollywood-casino-penn-national', lat: 40.3153, lon: -76.6778 },
  { name: 'Mohegan Sun Pocono', location: 'Wilkes-Barre, PA', state: 'PA', slug: 'mohegan-sun-pocono', lat: 41.2698, lon: -75.8457 },
  { name: 'Valley Forge Casino Resort', location: 'King of Prussia, PA', state: 'PA', slug: 'valley-forge-casino', lat: 40.0912, lon: -75.3824 },
  { name: 'Presque Isle Downs & Casino', location: 'Erie, PA', state: 'PA', slug: 'presque-isle-downs', lat: 42.0864, lon: -80.1554 },
  { name: 'Turning Stone Resort Casino', location: 'Verona, NY', state: 'NY', slug: 'turning-stone-resort', lat: 43.1024, lon: -75.5957 },
  { name: 'Rivers Casino & Resort Schenectady', location: 'Schenectady, NY', state: 'NY', slug: 'rivers-casino-schenectady', lat: 42.8149, lon: -73.9496 },
  { name: 'del Lago Resort & Casino', location: 'Waterloo, NY', state: 'NY', slug: 'del-lago-resort', lat: 42.9134, lon: -76.8713 },
  { name: 'Tioga Downs Casino Resort', location: 'Nichols, NY', state: 'NY', slug: 'tioga-downs', lat: 42.0147, lon: -76.5775 },
  { name: 'JACK Cleveland Casino', location: 'Cleveland, OH', state: 'OH', slug: 'jack-cleveland-casino', lat: 41.4994, lon: -81.6954 },
  { name: 'Hollywood Casino Columbus', location: 'Columbus, OH', state: 'OH', slug: 'hollywood-casino-columbus', lat: 39.9612, lon: -82.9988 },
  { name: 'Hollywood Casino Toledo', location: 'Toledo, OH', state: 'OH', slug: 'hollywood-casino-toledo', lat: 41.6528, lon: -83.5379 },
  { name: 'Hard Rock Rocksino Northfield Park', location: 'Northfield, OH', state: 'OH', slug: 'hard-rock-rocksino-northfield', lat: 41.3436, lon: -81.5307 },
  { name: 'MGM Northfield Park', location: 'Northfield, OH', state: 'OH', slug: 'mgm-northfield-park', lat: 41.3442, lon: -81.5318 },
  { name: 'Hard Rock Hotel Casino Cincinnati', location: 'Cincinnati, OH', state: 'OH', slug: 'hard-rock-cincinnati', lat: 39.1031, lon: -84.512 },
  { name: 'Mountaineer Casino Racetrack Resort', location: 'New Cumberland, WV', state: 'WV', slug: 'mountaineer-casino', lat: 40.4934, lon: -80.6073 },
  { name: 'Hollywood Casino at Charles Town Races', location: 'Charles Town, WV', state: 'WV', slug: 'hollywood-casino-charles-town', lat: 39.2851, lon: -77.8597 },
  { name: 'Mardi Gras Casino Resort', location: 'Cross Lanes, WV', state: 'WV', slug: 'mardi-gras-casino-wv', lat: 38.4018, lon: -81.7926 },
  { name: 'Wheeling Island Hotel Casino Racetrack', location: 'Wheeling, WV', state: 'WV', slug: 'wheeling-island-casino', lat: 40.064, lon: -80.7209 },
  { name: 'Harrahs Cherokee Casino Resort', location: 'Cherokee, NC', state: 'NC', slug: 'harrahs-cherokee', lat: 35.4776, lon: -83.3077 },
  { name: 'Harrahs Cherokee Valley River Casino', location: 'Murphy, NC', state: 'NC', slug: 'harrahs-cherokee-valley-river', lat: 35.0654, lon: -84.0196 },
  { name: 'Rivers Casino Portsmouth', location: 'Portsmouth, VA', state: 'VA', slug: 'rivers-casino-portsmouth', lat: 36.8354, lon: -76.3683 },
  { name: 'Hard Rock Hotel Casino Bristol', location: 'Bristol, VA', state: 'VA', slug: 'hard-rock-bristol', lat: 36.5951, lon: -82.1887 },
  { name: 'Ameristar Casino Council Bluffs', location: 'Council Bluffs, IA', state: 'IA', slug: 'ameristar-council-bluffs', lat: 41.2619, lon: -95.8608 },
  { name: 'Horseshoe Council Bluffs', location: 'Council Bluffs, IA', state: 'IA', slug: 'horseshoe-council-bluffs', lat: 41.2453, lon: -95.873 },
  { name: 'Prairie Meadows Casino', location: 'Altoona, IA', state: 'IA', slug: 'prairie-meadows-casino', lat: 41.6569, lon: -93.4696 },
  { name: 'Isle Casino Hotel Bettendorf', location: 'Bettendorf, IA', state: 'IA', slug: 'isle-casino-bettendorf', lat: 41.5245, lon: -90.4749 },
  { name: 'Wild Rose Casino Resort', location: 'Emmetsburg, IA', state: 'IA', slug: 'wild-rose-emmetsburg', lat: 43.1119, lon: -94.6819 },
  { name: 'Sandia Resort Casino', location: 'Albuquerque, NM', state: 'NM', slug: 'sandia-resort-casino', lat: 35.1448, lon: -106.5241 },
  { name: 'Route 66 Casino Hotel', location: 'Albuquerque, NM', state: 'NM', slug: 'route-66-casino', lat: 35.0529, lon: -107.176 },
  { name: 'Inn of the Mountain Gods Resort Casino', location: 'Mescalero, NM', state: 'NM', slug: 'inn-of-the-mountain-gods', lat: 33.1568, lon: -105.7891 },
  { name: 'Buffalo Thunder Resort Casino', location: 'Santa Fe, NM', state: 'NM', slug: 'buffalo-thunder-casino', lat: 35.794, lon: -105.9869 },
  { name: 'Fire Rock Navajo Casino', location: 'Church Rock, NM', state: 'NM', slug: 'fire-rock-navajo-casino', lat: 35.5281, lon: -108.7476 },
  { name: 'Deadwood Mountain Grand', location: 'Deadwood, SD', state: 'SD', slug: 'deadwood-mountain-grand', lat: 44.3764, lon: -103.7296 },
  { name: 'Cadillac Jacks Gaming Resort', location: 'Deadwood, SD', state: 'SD', slug: 'cadillac-jacks-deadwood', lat: 44.3767, lon: -103.7279 },
  { name: 'Dakota Sioux Casino Hotel', location: 'Watertown, SD', state: 'SD', slug: 'dakota-sioux-casino', lat: 44.9044, lon: -97.1114 },
  { name: 'Grand River Casino Resort', location: 'Mobridge, SD', state: 'SD', slug: 'grand-river-casino', lat: 45.5335, lon: -100.4371 },
  { name: 'Sky Dancer Hotel Casino', location: 'Belcourt, ND', state: 'ND', slug: 'sky-dancer-casino', lat: 48.8381, lon: -99.9534 },
  { name: 'Spirit Lake Casino Resort', location: 'St. Michael, ND', state: 'ND', slug: 'spirit-lake-casino', lat: 47.9613, lon: -99.0388 },
  { name: '4 Bears Casino Lodge', location: 'New Town, ND', state: 'ND', slug: '4-bears-casino', lat: 47.9897, lon: -102.4925 },
  { name: 'KwaTaqNuk Resort Casino', location: 'Polson, MT', state: 'MT', slug: 'kwataqnuk-casino', lat: 47.6841, lon: -114.1633 },
  { name: 'Charging Horse Casino', location: 'Lame Deer, MT', state: 'MT', slug: 'charging-horse-casino', lat: 45.5941, lon: -106.6574 },
  { name: 'Coeur dAlene Casino', location: 'Worley, ID', state: 'ID', slug: 'coeur-dalene-casino', lat: 47.4563, lon: -116.918 },
  { name: 'Clearwater River Casino Lodge', location: 'Lewiston, ID', state: 'ID', slug: 'clearwater-river-casino', lat: 46.4165, lon: -117.0177 },
  { name: 'Shoshone-Bannock Casino Hotel', location: 'Fort Hall, ID', state: 'ID', slug: 'shoshone-bannock-casino', lat: 43.026, lon: -112.4263 },
  { name: 'Wind Creek Casino Hotel Wetumpka', location: 'Wetumpka, AL', state: 'AL', slug: 'wind-creek-wetumpka', lat: 32.5432, lon: -86.2127 },
  { name: 'Wind Creek Casino Hotel Atmore', location: 'Atmore, AL', state: 'AL', slug: 'wind-creek-atmore', lat: 31.0235, lon: -87.4942 },
  { name: 'Wind Creek Casino Hotel Montgomery', location: 'Montgomery, AL', state: 'AL', slug: 'wind-creek-montgomery', lat: 32.3792, lon: -86.268 },
  { name: 'WarHorse Casino Lincoln', location: 'Lincoln, NE', state: 'NE', slug: 'warhorse-casino-lincoln', lat: 40.8081, lon: -96.7142 },
  { name: 'WarHorse Casino Omaha', location: 'Omaha, NE', state: 'NE', slug: 'warhorse-casino-omaha', lat: 41.2565, lon: -96.0034 },
  { name: 'Atlantis Casino Resort Spa', location: 'Reno, NV', state: 'NV', slug: 'atlantis-casino-reno', lat: 39.4968, lon: -119.7817 },
  { name: 'Circus Circus Reno', location: 'Reno, NV', state: 'NV', slug: 'circus-circus-reno', lat: 39.5296, lon: -119.8161 },
  { name: 'Eldorado Resort Casino Reno', location: 'Reno, NV', state: 'NV', slug: 'eldorado-reno', lat: 39.5274, lon: -119.8163 },
  { name: 'Harrahs Reno', location: 'Reno, NV', state: 'NV', slug: 'harrahs-reno', lat: 39.5271, lon: -119.8155 },
  { name: 'Nugget Casino Resort Sparks', location: 'Sparks, NV', state: 'NV', slug: 'nugget-casino-sparks', lat: 39.5349, lon: -119.7523 },
  { name: 'Caesars Palace Lake Tahoe', location: 'Stateline, NV', state: 'NV', slug: 'caesars-lake-tahoe', lat: 38.9603, lon: -119.944 },
  { name: 'Eureka Casino Resort Mesquite', location: 'Mesquite, NV', state: 'NV', slug: 'eureka-casino-mesquite', lat: 36.8057, lon: -114.0673 },
  { name: 'Virgin Hotels Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'virgin-hotels-las-vegas', lat: 36.1052, lon: -115.1448 },
  { name: 'Durango Casino Resort Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'durango-casino-las-vegas', lat: 36.0522, lon: -115.2879 },
  { name: 'Fontainebleau Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'fontainebleau-las-vegas', lat: 36.1339, lon: -115.1677 },
  { name: 'Resorts World Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'resorts-world-las-vegas', lat: 36.1354, lon: -115.164 },
  { name: 'Circa Resort Casino Downtown', location: 'Las Vegas, NV', state: 'NV', slug: 'circa-resort-las-vegas', lat: 36.1696, lon: -115.1441 },
  { name: 'Pechanga Resort Casino', location: 'Temecula, CA', state: 'CA', slug: 'pechanga-resort-casino', lat: 33.4722, lon: -117.0634 },
  { name: 'Agua Caliente Casino Cathedral City', location: 'Cathedral City, CA', state: 'CA', slug: 'agua-caliente-casino', lat: 33.7805, lon: -116.4645 },
  { name: 'Fantasy Springs Resort Casino', location: 'Indio, CA', state: 'CA', slug: 'fantasy-springs-casino', lat: 33.7212, lon: -116.2736 },
  { name: 'Morongo Casino Resort Spa', location: 'Cabazon, CA', state: 'CA', slug: 'morongo-casino', lat: 33.9272, lon: -116.9615 },
  { name: 'Viejas Casino Resort', location: 'Alpine, CA', state: 'CA', slug: 'viejas-casino', lat: 32.8427, lon: -116.7077 },
  { name: 'Harrahs Resort Southern California', location: 'Valley Center, CA', state: 'CA', slug: 'harrahs-southern-california', lat: 33.2341, lon: -117.0851 },
  { name: 'Chumash Casino Resort', location: 'Santa Ynez, CA', state: 'CA', slug: 'chumash-casino', lat: 34.5977, lon: -120.0794 },
  { name: 'Cache Creek Casino Resort', location: 'Brooks, CA', state: 'CA', slug: 'cache-creek-casino', lat: 38.7926, lon: -122.1558 },
  { name: 'Jackson Rancheria Casino Resort', location: 'Jackson, CA', state: 'CA', slug: 'jackson-rancheria-casino', lat: 38.344, lon: -120.7697 },
  { name: 'Thunder Valley Casino Resort', location: 'Lincoln, CA', state: 'CA', slug: 'thunder-valley-casino', lat: 38.9066, lon: -121.2878 },
  { name: 'Talking Stick Resort', location: 'Scottsdale, AZ', state: 'AZ', slug: 'talking-stick-resort', lat: 33.5726, lon: -111.891 },
  { name: 'Casino Arizona', location: 'Scottsdale, AZ', state: 'AZ', slug: 'casino-arizona', lat: 33.5729, lon: -111.8903 },
  { name: 'Wild Horse Pass Hotel Casino', location: 'Chandler, AZ', state: 'AZ', slug: 'wild-horse-pass-casino', lat: 33.288, lon: -111.9318 },
  { name: 'Fort McDowell Casino', location: 'Fountain Hills, AZ', state: 'AZ', slug: 'fort-mcdowell-casino', lat: 33.6573, lon: -111.6865 },
  { name: 'Downstream Casino Resort', location: 'Quapaw, OK', state: 'OK', slug: 'downstream-casino', lat: 36.8483, lon: -94.8574 },
  { name: 'Hard Rock Hotel Casino Tulsa', location: 'Catoosa, OK', state: 'OK', slug: 'hard-rock-tulsa', lat: 36.2659, lon: -95.8698 },
  { name: 'Choctaw Casino Durant', location: 'Durant, OK', state: 'OK', slug: 'choctaw-casino-durant', lat: 33.9858, lon: -96.4053 },
  { name: 'WinStar World Casino Resort', location: 'Thackerville, OK', state: 'OK', slug: 'winstar-world-casino', lat: 33.939, lon: -97.0549 },
  { name: 'Tulalip Resort Casino', location: 'Tulalip, WA', state: 'WA', slug: 'tulalip-resort-casino', lat: 48.0587, lon: -122.1152 },
  { name: 'Muckleshoot Casino Resort', location: 'Auburn, WA', state: 'WA', slug: 'muckleshoot-casino', lat: 47.3057, lon: -122.1474 },
  { name: 'Emerald Queen Casino', location: 'Tacoma, WA', state: 'WA', slug: 'emerald-queen-casino', lat: 47.2296, lon: -122.4314 },
  { name: 'Lucky Eagle Casino Hotel', location: 'Rochester, WA', state: 'WA', slug: 'lucky-eagle-casino', lat: 46.8854, lon: -123.0296 },
  { name: 'Ameristar Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'ameristar-black-hawk', lat: 39.7989, lon: -105.4872 },
  { name: 'Isle Casino Hotel Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'isle-casino-black-hawk', lat: 39.7985, lon: -105.4882 },
  { name: 'Monarch Casino Resort Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'monarch-casino-black-hawk', lat: 39.6889, lon: -105.4932 },
  { name: 'Saratoga Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'saratoga-casino-black-hawk', lat: 39.6881, lon: -105.4919 },
  { name: 'Horseshoe Hammond', location: 'Hammond, IN', state: 'IN', slug: 'horseshoe-hammond', lat: 41.6305, lon: -87.4996 },
  { name: 'Ameristar Casino East Chicago', location: 'East Chicago, IN', state: 'IN', slug: 'ameristar-east-chicago', lat: 41.6364, lon: -87.4559 },
  { name: 'Four Winds South Bend', location: 'South Bend, IN', state: 'IN', slug: 'four-winds-south-bend', lat: 41.6764, lon: -86.252 },
  { name: 'Rivers Casino Des Plaines', location: 'Des Plaines, IL', state: 'IL', slug: 'rivers-casino-des-plaines', lat: 42.0334, lon: -87.8914 },
  { name: 'Grand Victoria Casino Elgin', location: 'Elgin, IL', state: 'IL', slug: 'grand-victoria-casino', lat: 42.0354, lon: -88.2901 },
  { name: 'Harrahs Joliet', location: 'Joliet, IL', state: 'IL', slug: 'harrahs-joliet', lat: 41.525, lon: -88.0817 },
  { name: 'Spirit Mountain Casino', location: 'Grand Ronde, OR', state: 'OR', slug: 'spirit-mountain-casino-oregon', lat: 45.0637, lon: -123.572 },
  { name: 'Ilani Casino Resort', location: 'Ridgefield, WA', state: 'WA', slug: 'ilani-casino-resort', lat: 45.8357, lon: -122.7487 },
  { name: 'Soaring Eagle Casino Resort', location: 'Mount Pleasant, MI', state: 'MI', slug: 'soaring-eagle-casino', lat: 43.5817, lon: -84.7838 },
  { name: 'Four Winds New Buffalo', location: 'New Buffalo, MI', state: 'MI', slug: 'four-winds-new-buffalo', lat: 41.7983, lon: -86.7478 },
  { name: 'FireKeepers Casino Hotel', location: 'Battle Creek, MI', state: 'MI', slug: 'firekeepers-casino', lat: 42.2817, lon: -85.3116 },
  { name: 'Oxford Casino Hotel', location: 'Oxford, ME', state: 'ME', slug: 'oxford-casino', lat: 44.1334, lon: -70.4892 },
];

// ─────────────────────────────────────────────
//  VENUE DATA  (named bars/restaurants per casino)
// ─────────────────────────────────────────────
const VENUES = {
  'Mohegan Sun': {
    bars: ['Bow & Arrow', 'Lansdowne Pub', 'Harvest Moon Bar', 'Star Bar', 'Vista Lounge', 'MJ23 Sports Bar'],
    restaurants: ['Ballo', "Michael Jordan's Steak House", 'SolToro', 'TAO', 'Hash House A Go Go', 'Frank Pepe Pizzeria'],
    slots: ['the high limit room', 'the main floor', 'Earth Casino', 'Sky Casino'],
    poker: ['the poker room', 'the main poker room'],
  },
  'Foxwoods Resort Casino': {
    bars: ['Spin Bar', 'Scorpion Bar', 'Grand Bar', 'PLAY Bar', 'High Rollers Sports Lounge'],
    restaurants: ["Guy Fieri's Kitchen + Bar", "Hell's Kitchen", 'Momosan', 'David Burke Prime', 'Wahlburgers'],
    slots: ['the high limit slots', 'Great Cedar Casino', 'Grand Pequot Casino', 'the main floor'],
    poker: ['the poker room', 'the high stakes room'],
  },
  'Encore Boston Harbor': {
    bars: ['Overlook Bar', 'Lobby Bar', 'Harbor Bar', 'On Deck Sports Bar'],
    restaurants: ['Rare Steakhouse', 'Sinatra', 'Fratelli', 'Mystique'],
    slots: ['the main floor', 'the high limit room'],
    poker: ['the poker room'],
  },
  'Borgata': {
    bars: ['The Borgata Bar', 'Gypsy Bar', 'Izakaya'],
    restaurants: ['Bobby Flay Steak', 'Wolfgang Puck American Grille', 'Old Homestead Steakhouse'],
    slots: ['the high limit room', 'the main floor'],
    poker: ['the poker room', 'the World Poker Tour room'],
  },
  'Bellagio': {
    bars: ['Petrossian Bar', 'Baccarat Bar', 'Bank Nightclub', 'Lily Bar & Lounge'],
    restaurants: ['Prime Steakhouse', 'Le Cirque', 'Picasso', "Sadelle's", 'Harvest'],
    slots: ['the high limit salon', 'the main casino floor'],
    poker: ["the poker room", "Bobby's Room"],
  },
  'MGM Grand Las Vegas': {
    bars: ['Lobby Bar', 'Centrifuge Bar', 'Hakkasan Nightclub', 'Sports Bar'],
    restaurants: ['Joel Robuchon', "Tom Colicchio's Craftsteak", "Emeril's", 'Wolfgang Puck Bar & Grill'],
    slots: ['the high limit slots', 'the main floor'],
    poker: ['the poker room'],
  },
  'Caesars Palace': {
    bars: ['Omnia Nightclub', "Cleopatra's Barge", 'Alto Bar', 'Shadow Bar'],
    restaurants: ["Gordon Ramsay Hell's Kitchen", 'Nobu', 'Old Homestead Steakhouse', 'Bacchanal Buffet', 'Guy Savoy'],
    slots: ['the Forum Casino floor', 'the high limit room'],
    poker: ['the poker room', 'the high stakes area'],
  },
  'The Venetian Las Vegas': {
    bars: ['Dorsey Cocktail Bar', 'Electra Cocktail Club', 'Aquabar'],
    restaurants: ['Bouchon', 'B&B Burger & Beer', "Matteo's", 'Black Tap'],
    slots: ['the main casino floor', 'the high limit salon'],
    poker: ['the poker room'],
  },
  'Wynn Las Vegas': {
    bars: ['Encore Beach Club', 'Parasol Up', 'Parasol Down', 'Overlook Lounge'],
    restaurants: ['SW Steakhouse', 'Wing Lei', 'Lakeside', 'Costa di Mare', 'Delilah'],
    slots: ['the high limit room', 'the main floor', 'the Encore casino floor'],
    poker: ['the poker room'],
  },
  'Aria Resort & Casino': {
    bars: ['Jewel Nightclub', 'Alibi Ultra Lounge', 'Lobby Bar'],
    restaurants: ['Jean-Georges Steakhouse', 'Carbone', 'Catch', 'Bardot Brasserie'],
    slots: ['the main casino floor', 'the high limit room'],
    poker: ['the poker room', 'the high stakes area'],
  },
  'Cosmopolitan of Las Vegas': {
    bars: ['The Chandelier Bar', 'Marquee Nightclub', 'Vesper Bar'],
    restaurants: ['Eggslut', 'Secret Pizza', 'Zuma', 'STK Steakhouse'],
    slots: ['the main casino floor', 'the high limit slots'],
    poker: ['the poker room'],
  },
  'Peppermill Resort Spa Casino': {
    bars: ['Fireside Lounge', 'Romanza', 'Sports Bar', 'Edge Nightclub'],
    restaurants: ['Oceano', "Biscotti's", 'White Orchid'],
    slots: ['the high limit room', 'the main floor'],
    poker: ['the poker room'],
  },
  'Grand Sierra Resort': {
    bars: ['Brew Brothers', 'Grand Entertainment Complex bar', 'Splash Pool Bar'],
    restaurants: ['Charlie Palmer Steak', 'Riva', 'Grand Buffet'],
    slots: ['the main floor', 'the high limit room'],
    poker: ['the poker room'],
  },
  'MGM Grand Detroit': {
    bars: ['TAP at MGM Grand', 'Detroit Sports Bar', 'V Lounge'],
    restaurants: ['Wolfgang Puck Steak', 'Saltwater', 'Breeze'],
    slots: ['the high limit room', 'the main floor'],
    poker: ['the poker room'],
  },
  'Seminole Hard Rock Hotel & Casino Hollywood': {
    bars: ['Kuro bar', 'Council Oak bar', 'Guitar Bar', 'Daer Nightclub'],
    restaurants: ['Council Oak Steaks & Seafood', 'Kuro', 'Cipresso'],
    slots: ['the high limit lounge', 'the main casino floor'],
    poker: ['the poker room', 'the high stakes area'],
  },
  'Seminole Hard Rock Hotel & Casino Tampa': {
    bars: ['Hard Rock Cafe bar', 'Council Oak bar', 'Intermezzo Lounge'],
    restaurants: ['Council Oak Steaks & Seafood', 'Hard Rock Cafe', 'Cipresso'],
    slots: ['the main casino floor', 'the high limit room'],
    poker: ['the poker room'],
  },
  'WinStar World Casino and Resort': {
    bars: ['Global Event Center bar', 'the casino bar', 'the lounge'],
    restaurants: ["Hunt Club Steakhouse", "Toby Keith's I Love This Bar", 'the buffet'],
    slots: ['the main casino floor', 'the high limit room', 'the World City slots'],
    poker: ['the poker room', 'the tournament area'],
  },
  'Pechanga Resort Casino': {
    bars: ['Great Oak Bar', "Kelsey's Bar", 'the casino bar'],
    restaurants: ['Great Oak Steakhouse', 'Blazze', "Paisano's Italian", 'Pechanga Buffet'],
    slots: ['the high limit room', 'the main floor'],
    poker: ['the poker room', 'the high stakes area'],
  },
  'Turning Stone Resort Casino': {
    bars: ['Turquoise Tiger', 'Point After Sports Bar', 'the casino bar'],
    restaurants: ['Wildflowers', 'Pino Bianco', 'Lava', 'the buffet'],
    slots: ['the main floor', 'the high limit room'],
    poker: ['the poker room', 'the high stakes area'],
  },
  'MGM National Harbor': {
    bars: ['the casino bar', 'Vida Cantina bar', 'TAP Sports Bar'],
    restaurants: ['Voltaggio Brothers Steak House', 'Felt', 'Hakkasan'],
    slots: ['the high limit room', 'the main floor'],
    poker: ['the poker room'],
  },
  'Rivers Casino Des Plaines': {
    bars: ['Sidelines Sports Bar', 'Pour 24', 'Star Lounge'],
    restaurants: ['Firecreek', '80 Below', 'Fairview', 'Iron & Grain'],
    slots: ['the main floor', 'the high limit room'],
    poker: ['the poker room'],
  },
  'Horseshoe Hammond': {
    bars: ['Booze Brothers', 'Spectators Sports Bar', 'the casino bar'],
    restaurants: ["Jack Binion's Steak", 'Spread Restaurant', 'Café Horseshoe'],
    slots: ['the main floor', 'the high limit room'],
    poker: ['the poker room', 'the WSOP room'],
  },
  'Potawatomi Hotel & Casino': {
    bars: ['Wild Earth Lounge', 'Locavore Bar', 'the casino bar'],
    restaurants: ['Dream Dance Steak', 'Locavore', 'Stone Bowl'],
    slots: ['the main floor', 'the high limit room'],
    poker: ['the poker room'],
  },
  'default': {
    bars: ['the bar', 'the sports bar', 'the lounge', 'the main bar'],
    restaurants: ['the steakhouse', 'the buffet', 'the main restaurant', 'the cafe'],
    slots: ['the slots floor', 'the high limit room', 'the main floor'],
    poker: ['the poker room'],
  },
};

// ─────────────────────────────────────────────
//  SEED LEADERBOARD PROFILES
// ─────────────────────────────────────────────
const SEED_USERS = [
  { cookie_id: 'seed_001', username: 'PokerShark_Vegas',  points: 2400, rank: 'Whale',         rank_emoji: '👑' },
  { cookie_id: 'seed_002', username: 'SlotQueen88',       points: 1650, rank: 'Whale',         rank_emoji: '👑' },
  { cookie_id: 'seed_003', username: 'TableTalk_Mike',    points: 950,  rank: 'High Roller',   rank_emoji: '💰' },
  { cookie_id: 'seed_004', username: 'CasinoNomad',       points: 820,  rank: 'High Roller',   rank_emoji: '💰' },
  { cookie_id: 'seed_005', username: 'FloorReporter',     points: 720,  rank: 'High Roller',   rank_emoji: '💰' },
  { cookie_id: 'seed_006', username: 'CrapsShoooter',     points: 560,  rank: 'Floor Regular', rank_emoji: '🎲' },
  { cookie_id: 'seed_007', username: 'NightOwl_BJ',       points: 430,  rank: 'Floor Regular', rank_emoji: '🎲' },
  { cookie_id: 'seed_008', username: 'WheelSpinner',      points: 290,  rank: 'Regular',       rank_emoji: '♠️' },
  { cookie_id: 'seed_009', username: 'FishFinder_NJ',     points: 180,  rank: 'Regular',       rank_emoji: '♠️' },
  { cookie_id: 'seed_010', username: 'NewToThis2025',     points: 90,   rank: 'Fish',          rank_emoji: '🐟' },
];

const NAMES = ['Alex','Brian','Carlos','Derek','Eddie','Frank','Greg','Hunter','Jason','Kevin',
  'Luis','Mike','Nathan','Pete','Rob','Steve','Tyler','Will','Adam','Ben','Cole','Dave','Jake',
  'Ashley','Brittany','Chelsea','Danielle','Emma','Grace','Hannah','Isabella','Jamie','Katie',
  'Lauren','Megan','Nicole','Olivia','Rachel','Samantha','Taylor','Victoria','Amber','Maria'];

// ─────────────────────────────────────────────
//  HELPERS
// ─────────────────────────────────────────────
function pick(arr) { return arr[Math.floor(Math.random() * arr.length)]; }
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function getVenues(name) { return VENUES[name] || VENUES['default']; }

function randomUser() {
  if (Math.random() < 0.2) return { username: null, cookie_id: 'anon_' + Math.random().toString(36).slice(2) };
  return { username: pick(NAMES), cookie_id: pick(SEED_USERS).cookie_id };
}

function timeOfDay() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'morning';
  if (h >= 12 && h < 17) return 'afternoon';
  if (h >= 17 && h < 21) return 'evening';
  return 'night';
}

// ─────────────────────────────────────────────
//  POST POOL
// ─────────────────────────────────────────────
function buildPool(casino, weather = null) {
  const v   = getVenues(casino.name);
  const n   = casino.name;
  const tod = timeOfDay();
  const tn  = tod === 'morning' ? 'this morning' : tod === 'afternoon' ? 'this afternoon' : 'tonight';
  const isVegas   = casino.state === 'NV';
  const isAC      = casino.state === 'NJ';
  const isCT      = casino.state === 'CT';
  const isMidwest = ['IL','IN','MI','WI','MN','MO','IA','KS'].includes(casino.state);
  const isSouth   = ['MS','LA','FL','AL','NC','VA','WV','OK'].includes(casino.state);

  const general = [
    { b: 'good energy in here tonight', c: '📢 General' },
    { b: 'love this place honestly', c: '📢 General' },
    { b: 'been here since like 7, still going 😅', c: '📢 General' },
    { b: 'my friend dragged me here and now i dont wanna leave lol', c: '📢 General' },
    { b: 'date night turned into a whole thing 😂', c: '📢 General' },
    { b: 'just needed to get out of the house, good call', c: '📢 General' },
    { b: 'pretty decent crowd tonight', c: '📢 General' },
    { b: 'vibes are immaculate rn ngl', c: '📢 General' },
    { b: 'first time back in a while, forgot how fun this is', c: '📢 General' },
    { b: 'service has been really solid all night', c: '📢 General' },
    { b: 'this place never disappoints tbh', c: '📢 General' },
    { b: 'parking was smooth tonight, no wait', c: '📢 General' },
    { b: 'not too crowded, easy to move around', c: '📢 General' },
    { b: 'super busy tonight, great atmosphere', c: '📢 General' },
    { b: `drinks at ${pick(v.bars)} are hitting tonight 🍹`, c: '📢 General' },
    { b: `just ate at ${pick(v.restaurants)}, honestly really good`, c: '📢 General' },
    { b: `bartender at ${pick(v.bars)} is amazing, best service all night`, c: '📢 General' },
    { b: `${pick(v.restaurants)} did not disappoint, would recommend`, c: '📢 General' },
    { b: 'floor is hopping right now, good turnout', c: '📢 General' },
    { b: `surprisingly not too crowded for a ${pick(['Friday','Saturday','Sunday'])}`, c: '📢 General' },
    { b: 'valet took like 3 mins, super smooth tonight', c: '📢 General' },
    { b: 'just cashed out, great run tonight 💰', c: '📢 General' },
    { b: `been here ${rand(2,5)} hours and still not ready to leave`, c: '📢 General' },
    { b: 'staff are super friendly tonight', c: '📢 General' },
    { b: 'brought my parents for their anniversary, they are having a blast 🥰', c: '📢 General' },
    { b: 'bachelorette party on the floor making it fun lol', c: '📢 General' },
    { b: 'live entertainment tonight is actually really good', c: '📢 General' },
    { b: 'loyalty card is paying off tonight, got comped dinner', c: '📢 General' },
    { b: 'came for an hour, stayed for four, you know how it goes 😂', c: '📢 General' },
    { b: 'place is packed but the vibe is great', c: '📢 General' },
    ...(isVegas ? [
      { b: 'classic Vegas night, loving every second', c: '📢 General' },
      { b: `flew in just for the weekend, ${n} never disappoints`, c: '📢 General' },
      { b: 'Vegas energy in here is insane 🎰', c: '📢 General' },
      { b: 'Strip is absolutely packed tonight', c: '📢 General' },
    ] : []),
    ...(isAC ? [
      { b: `AC weekend trip, ${n} is the move as always`, c: '📢 General' },
      { b: 'drove down from Philly, totally worth it tonight', c: '📢 General' },
    ] : []),
    ...(isCT ? [
      { b: `CT casino night, ${n} still the best in the state imo`, c: '📢 General' },
      { b: 'made the drive out and it was worth it', c: '📢 General' },
    ] : []),
    ...(isMidwest ? [
      { b: 'great Midwest casino night, solid spot', c: '📢 General' },
    ] : []),
    ...(isSouth ? [
      { b: 'Southern hospitality on the casino floor tonight 🙌', c: '📢 General' },
    ] : []),
  ];

  const slots = [
    { b: 'slots have been kind to me tonight 🎰', c: '🎰 Slots' },
    { b: 'up a little on slots, calling it a win', c: '🎰 Slots' },
    { b: 'making money at slots rn, dont wanna jinx it 🤫', c: '🎰 Slots' },
    { b: `hit a nice bonus on ${pick(v.slots)}, great night so far`, c: '🎰 Slots' },
    { b: `${pick(v.slots)} is popping tonight`, c: '🎰 Slots' },
    { b: `found a hot machine on ${pick(v.slots)} 🔥`, c: '🎰 Slots' },
    { b: 'down a little but had a blast on the slots tbh', c: '🎰 Slots' },
    { b: `my friend just hit a nice bonus on ${pick(v.slots)} 🎉`, c: '🎰 Slots' },
    { b: 'high limit room is buzzing tonight', c: '🎰 Slots' },
    { b: 'slots feel loose tonight honestly', c: '🎰 Slots' },
    { b: `just hit $${pick([200,350,500,750,1200])} on a bonus round 🎉`, c: '🎰 Slots' },
    { b: 'Buffalo is everywhere tonight on the floor', c: '🎰 Slots' },
    { b: 'Dragon Link is packed on both sides, popular tonight', c: '🎰 Slots' },
    { b: 'Lightning Link hitting for a few people near me 👀', c: '🎰 Slots' },
    { b: `had a great run on ${pick(v.slots)}, calling it before it turns around lol`, c: '🎰 Slots' },
    { b: 'high limit room feels different tonight, more energy', c: '🎰 Slots' },
    { b: `${pick(v.slots)} machine is NOT hitting for me tonight 😩`, c: '🎰 Slots' },
  ];

  const tables = [
    { b: 'blackjack tables have been good to me tonight 🃏', c: '🎲 Table Games' },
    { b: 'dealer been busting a lot, good table energy', c: '🎲 Table Games' },
    { b: 'craps table is LOUD tonight lol, always a good sign', c: '🎲 Table Games' },
    { b: 'roulette hitting on my numbers tonight 🤑', c: '🎲 Table Games' },
    { b: 'table minimums are reasonable tonight', c: '🎲 Table Games' },
    { b: 'good run at blackjack, up a couple hundred 🙌', c: '🎲 Table Games' },
    { b: 'tables are packed but moving fast', c: '🎲 Table Games' },
    { b: `found a $${pick([10,15,25])} blackjack table 👍`, c: '🎲 Table Games' },
    { b: 'dealer been ice cold tonight, our table is eating 😂', c: '🎲 Table Games' },
    { b: '6:5 blackjack tables are brutal, hunting for a 3:2 game', c: '🎲 Table Games' },
    { b: 'found a good 3:2 BJ table with low min, staying here all night', c: '🎲 Table Games' },
    { b: 'craps table went on a 20 min run, place went CRAZY 🎲', c: '🎲 Table Games' },
    { b: 'three blackjacks in the last hour, running hot 🔥', c: '🎲 Table Games' },
    { b: 'three card poker is a trap but i keep playing it lol', c: '🎲 Table Games' },
    { b: `$${pick([25,50,100])} min at most tables tonight, its busy`, c: '🎲 Table Games' },
    { b: 'great run on craps, shooter held the dice for like 15 minutes', c: '🎲 Table Games' },
    { b: 'Spanish 21 table open if anyone is looking', c: '🎲 Table Games' },
    { b: 'baccarat crowd is lively rn', c: '🎲 Table Games' },
  ];

  const poker = [
    { b: 'poker room is busy tonight, good action 🃏', c: '🃏 Poker Room' },
    { b: '1/2 NL is super soft tonight, lots of recreational players 🐟', c: '🃏 Poker Room' },
    { b: 'just sat down at 1/2, table looks fun', c: '🃏 Poker Room' },
    { b: 'wait for 1/2 is pretty short right now fyi', c: '🃏 Poker Room' },
    { b: 'tournament just started, crowd is fired up 🔥', c: '🃏 Poker Room' },
    { b: 'been grinding 1/2 for a few hours, up a buy in 🙌', c: '🃏 Poker Room' },
    { b: 'just doubled up at 1/2, great table 🃏', c: '🃏 Poker Room' },
    { b: `2/5 game is running, ${rand(1,3)} tables going right now`, c: '🃏 Poker Room' },
    { b: '1/2 game has some real fish tonight 🐟 easy table', c: '🃏 Poker Room' },
    { b: `waiting for a seat at 1/2, list is about ${rand(2,6)} deep`, c: '🃏 Poker Room' },
    { b: `bad beat jackpot is up to $${rand(60,100)}k, playing scared poker lol`, c: '🃏 Poker Room' },
    { b: `sat down with $${pick([200,300,500])}, already almost doubled up`, c: '🃏 Poker Room' },
    { b: `tournament has ${rand(40,120)} runners, good field tonight`, c: '🃏 Poker Room' },
    { b: '5/10 is running if anyone wants that action', c: '🃏 Poker Room' },
    { b: 'late night poker is always the best here, looser play', c: '🃏 Poker Room' },
    { b: 'table is super fun tonight, great mix of players', c: '🃏 Poker Room' },
  ];

  const asks = [
    { b: `is the 1/2 NL running right now at ${n}?`, c: '🃏 Poker Room', t: 'ask' },
    { b: `what are the blackjack minimums ${tn}?`, c: '🎲 Table Games', t: 'ask' },
    { b: `should i bother driving out to ${n} ${tn} or is it dead?`, c: '📢 General', t: 'ask' },
    { b: `how crowded is ${n} right now? worth heading out?`, c: '📢 General', t: 'ask' },
    { b: `anyone at ${n} right now? how is the floor looking?`, c: '📢 General', t: 'ask' },
    { b: `are the slots hitting at all ${tn}?`, c: '🎰 Slots', t: 'ask' },
    { b: 'craps table still running? whats the min?', c: '🎲 Table Games', t: 'ask' },
    { b: `any $10 blackjack tables open or all $25 min ${tn}?`, c: '🎲 Table Games', t: 'ask' },
    { b: `is ${pick(v.restaurants)} busy ${tn}? trying to get a table`, c: '📢 General', t: 'ask' },
    { b: `worth making the drive out ${tn}? thinking about heading over`, c: '📢 General', t: 'ask' },
  ];

  const answers = [
    { b: `just walked by, poker room has ${rand(2,6)} tables of 1/2 running`, c: '🃏 Poker Room' },
    { b: 'yeah its going, sat down about 20 min ago, game is good', c: '🃏 Poker Room' },
    { b: `floor looks maybe ${pick([60,70,80])}% capacity right now, not packed`, c: '📢 General' },
    { b: `parking was easy when I got here around ${pick(['6pm','7pm','8pm','9pm'])}`, c: '📢 General' },
    { b: `BJ tables are $${pick([10,15,25])} min on the main floor`, c: '🎲 Table Games' },
    { b: 'yeah slots are decent tonight, hit a couple bonuses already', c: '🎰 Slots' },
    { b: 'floor is pretty active, good night to come out', c: '📢 General' },
    { b: 'parking garage has plenty of space rn fyi', c: '📢 General' },
  ];

  return { general, slots, tables, poker, asks, answers };
}

// ─────────────────────────────────────────────
//  SUPABASE HELPERS
// ─────────────────────────────────────────────
async function sbFetch(path, opts = {}) {
  const url = `${SUPABASE_URL}/rest/v1${path}`;
  const res = await fetch(url, {
    method: opts.method || 'GET',
    headers: {
      apikey: SUPABASE_KEY,
      Authorization: `Bearer ${SUPABASE_KEY}`,
      'Content-Type': 'application/json',
      ...(opts.headers || {}),
    },
    body: opts.body,
  });
  if (opts.returnData) {
    try { return await res.json(); } catch { return []; }
  }
  return res;
}

// ─────────────────────────────────────────────
//  SEED ONE CASINO
// ─────────────────────────────────────────────
async function seedCasino(casino) {
  const sevenDaysAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();

  // Skip if real posts exist
  const realPosts = await sbFetch(
    `/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.false&select=id`,
    { returnData: true }
  );
  if (realPosts?.length > 0) {
    console.log(`  ⏭  ${casino.name} — ${realPosts.length} real posts, skipping`);
    return 0;
  }

  // Delete stale seeds
  await sbFetch(
    `/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.true&created_at=lt.${sevenDaysAgo}`,
    { method: 'DELETE' }
  );

  // Count existing seeds
  const existing = await sbFetch(
    `/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.true&select=body`,
    { returnData: true }
  );
  const existingBodies = new Set((existing || []).map(p => p.body));
  const target = rand(4, 7);

  if (existingBodies.size >= target) {
    console.log(`  ✓  ${casino.name} — already seeded (${existingBodies.size} posts)`);
    return 0;
  }

  const weather = await getWeather(casino);
  const pool = buildPool(casino, weather);
  const weatherPosts = getWeatherPosts(weather);
  const weighted = [
    ...pool.general, ...pool.general,   // 40% general
    ...pool.slots,                        // 25% slots
    ...pool.tables,                       // 20% tables
    ...pool.poker,                        // 15% poker
    ...pool.asks.slice(0, 2),
    ...pool.answers.slice(0, 2),
    ...weatherPosts,                      // weather-aware if available
  ].sort(() => Math.random() - 0.5);

  const needed = target - existingBodies.size;
  const toPost = [];
  const used = new Set(existingBodies);

  for (const post of weighted) {
    if (toPost.length >= needed) break;
    if (used.has(post.b)) continue;
    used.add(post.b);
    toPost.push(post);
  }

  if (toPost.length === 0) return 0;

  const now = Date.now();
  const rows = toPost.map((p, i) => {
    const user = randomUser();
    return {
      casino:    casino.name,
      body:      p.b,
      category:  p.c,
      post_type: p.t || 'update',
      is_seeded: true,
      username:  user.username,
      cookie_id: user.cookie_id,
      created_at: new Date(now - rand(5, 360 - i * 40) * 60000).toISOString(),
    };
  });

  await sbFetch('/posts', {
    method: 'POST',
    body: JSON.stringify(rows),
    headers: { Prefer: 'return=minimal' },
  });

  console.log(`  ✅ ${casino.name} — seeded ${rows.length} posts`);
  return rows.length;
}

// ─────────────────────────────────────────────
//  SEED LEADERBOARD
// ─────────────────────────────────────────────
async function seedLeaderboard() {
  console.log('\n👥 Seeding leaderboard profiles...');
  for (const profile of SEED_USERS) {
    const existing = await sbFetch(
      `/user_profiles?cookie_id=eq.${profile.cookie_id}&select=id`,
      { returnData: true }
    );
    if (existing?.length > 0) {
      console.log(`  ✓  ${profile.username} already exists`);
      continue;
    }
    if (DRY_RUN) {
      console.log(`  🔍 Would create: ${profile.username} (${profile.rank})`);
      continue;
    }
    await sbFetch('/user_profiles', {
      method: 'POST',
      body: JSON.stringify({ ...profile, last_post_date: new Date().toISOString().split('T')[0] }),
      headers: { Prefer: 'return=minimal' },
    });
    console.log(`  ✅ Created: ${profile.username}`);
  }
}


// ─────────────────────────────────────────────
//  WEATHER  (reads from Supabase cache, falls back to API)
// ─────────────────────────────────────────────
const GOOGLE_KEY = process.env.GOOGLE_KEY;

async function getWeather(casino) {
  if (!casino.lat || !casino.lon) return null;
  try {
    // Try Supabase cache first (same cache casino pages use)
    const cacheRes = await sbFetch(
      `/casino_cache?casino=eq.${encodeURIComponent(casino.name)}&select=weather_data,updated_at&limit=1`,
      { returnData: true }
    );
    const cached = cacheRes?.[0];
    if (cached?.weather_data) {
      const age = Date.now() - new Date(cached.updated_at).getTime();
      if (age < 3600000) { // under 1 hour
        const w = JSON.parse(cached.weather_data);
        if (w?.temperature) return w;
      }
    }
    // Fetch fresh from Google Weather API
    if (!GOOGLE_KEY) return null;
    const r = await fetch(
      `https://weather.googleapis.com/v1/currentConditions:lookup?key=${GOOGLE_KEY}&location.latitude=${casino.lat}&location.longitude=${casino.lon}&unitsSystem=IMPERIAL`
    );
    const w = await r.json();
    return w?.temperature ? w : null;
  } catch(e) { return null; }
}

function getWeatherPosts(weather) {
  if (!weather?.temperature) return [];
  const temp = Math.round(weather.temperature.degrees || 60);
  const type = weather.weatherCondition?.type || 'CLEAR';
  const cold  = temp < 35;
  const chilly = temp >= 35 && temp < 50;
  const hot   = temp > 88;
  const rainy = ['RAIN','DRIZZLE','LIGHT_RAIN','RAIN_SHOWERS'].includes(type);
  const snowy = ['SNOW','HEAVY_SNOW','BLIZZARD'].includes(type);
  const stormy = ['THUNDERSTORM'].includes(type);

  const posts = [];
  if (cold || snowy)  posts.push(
    { b: 'brutal outside tonight, perfect excuse to stay in 😂', c: '📢 General' },
    { b: `${temp}°F out there, not going anywhere lol — floor is packed tonight`, c: '📢 General' },
  );
  if (rainy || stormy) posts.push(
    { b: 'rain keeping people inside tonight — floor is busier than usual', c: '📢 General' },
    { b: 'drove through some nasty weather to get here, worth it though', c: '📢 General' },
  );
  if (chilly) posts.push(
    { b: 'little chilly out tonight, nice and warm in here though', c: '📢 General' },
    { b: 'good night to be inside, weather is not it out there', c: '📢 General' },
  );
  if (hot) posts.push(
    { b: 'AC in here is everything on a night like this 🥵', c: '📢 General' },
    { b: `too hot to be outside anyway so here I am 😂`, c: '📢 General' },
  );
  return posts;
}

// ─────────────────────────────────────────────
//  API HANDLER
// ─────────────────────────────────────────────
export default async function handler(req, res) {
  const secret    = req.query.secret || '';
  const force     = req.query.force === 'true';
  const onlySlug  = req.query.casino || '';

  // Simple secret check to prevent random people triggering seeds
  if (secret !== SEED_SECRET) {
    return res.status(401).json({ error: 'Invalid secret. Pass ?secret=your_secret' });
  }

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    return res.status(500).json({ error: 'Missing SUPABASE_URL or SUPABASE_KEY env vars' });
  }

  const started = Date.now();

  try {
    if (force) {
      await sbFetch('/posts?is_seeded=eq.true', { method: 'DELETE' });
    }

    await seedLeaderboard();

    const toSeed = onlySlug ? CASINOS.filter(c => c.slug === onlySlug) : CASINOS;

    if (onlySlug && toSeed.length === 0) {
      return res.status(404).json({ error: `No casino found with slug: ${onlySlug}` });
    }

    let totalPosts = 0;
    let casinoCount = 0;
    const BATCH = 8;

    for (let i = 0; i < toSeed.length; i += BATCH) {
      const batch = toSeed.slice(i, i + BATCH);
      const counts = await Promise.all(batch.map(c => seedCasino(c)));
      totalPosts  += counts.reduce((a, b) => a + b, 0);
      casinoCount += counts.filter(c => c > 0).length;
    }

    const elapsed = ((Date.now() - started) / 1000).toFixed(1);

    return res.status(200).json({
      success: true,
      mode: force ? 'force' : 'normal',
      casinos_total: toSeed.length,
      casinos_seeded: casinoCount,
      posts_added: totalPosts,
      elapsed_seconds: elapsed,
      timestamp: new Date().toISOString(),
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

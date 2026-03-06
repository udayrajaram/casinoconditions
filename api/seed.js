#!/usr/bin/env node
// ═══════════════════════════════════════════════════════════════
//  CasinoConditions — Seed Script
//  Run:  SUPABASE_URL=xxx SUPABASE_KEY=xxx node seed.js
//  Flags:
//    --force          Delete all seeded posts first, then re-seed
//    --casino=slug    Only seed one specific casino
//    --dry-run        Print what would be posted, write nothing
// ═══════════════════════════════════════════════════════════════

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

if (!SUPABASE_URL || !SUPABASE_KEY) {
  console.error('❌  Missing env vars. Usage:');
  console.error('    SUPABASE_URL=https://xxx.supabase.co SUPABASE_KEY=eyJxxx node seed.js');
  process.exit(1);
}

const args     = process.argv.slice(2);
const FORCE    = args.includes('--force');
const DRY_RUN  = args.includes('--dry-run');
const ONLY_SLUG = (args.find(a => a.startsWith('--casino=')) || '').replace('--casino=', '');

// ─────────────────────────────────────────────
//  ALL CASINOS  (193 total, pulled from casino.js)
// ─────────────────────────────────────────────
const CASINOS = [
  // Northeast
  { name: 'Mohegan Sun', location: 'Uncasville, CT', state: 'CT', slug: 'mohegan-sun' },
  { name: 'Foxwoods Resort Casino', location: 'Mashantucket, CT', state: 'CT', slug: 'foxwoods' },
  { name: "Jake's 58 Casino", location: 'Islandia, NY', state: 'NY', slug: 'jakes-58' },
  { name: 'Empire City Casino', location: 'Yonkers, NY', state: 'NY', slug: 'empire-city' },
  { name: 'Resorts World NYC', location: 'Jamaica, NY', state: 'NY', slug: 'resorts-world-nyc' },
  { name: "Bally's Twin River", location: 'Lincoln, RI', state: 'RI', slug: 'ballys-twin-river' },
  { name: "Bally's Tiverton", location: 'Tiverton, RI', state: 'RI', slug: 'ballys-tiverton' },
  { name: 'Plainridge Park Casino', location: 'Plainville, MA', state: 'MA', slug: 'plainridge-park' },
  { name: 'Resorts World Catskills', location: 'Monticello, NY', state: 'NY', slug: 'resorts-world-catskills' },
  { name: 'MGM Springfield', location: 'Springfield, MA', state: 'MA', slug: 'mgm-springfield' },
  { name: 'Encore Boston Harbor', location: 'Everett, MA', state: 'MA', slug: 'encore-boston-harbor' },
  { name: 'Borgata', location: 'Atlantic City, NJ', state: 'NJ', slug: 'borgata' },
  { name: 'Hard Rock Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', slug: 'hard-rock-ac' },
  { name: 'Caesars Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', slug: 'caesars-ac' },
  { name: "Harrah's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', slug: 'harrahs-ac' },
  { name: "Bally's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', slug: 'ballys-ac' },
  { name: 'Resorts Casino Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', slug: 'resorts-casino-ac' },
  { name: 'Golden Nugget Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', slug: 'golden-nugget-ac' },
  { name: 'Wind Creek Bethlehem', location: 'Bethlehem, PA', state: 'PA', slug: 'wind-creek-bethlehem' },
  { name: 'Parx Casino', location: 'Bensalem, PA', state: 'PA', slug: 'parx-casino' },
  { name: 'Live! Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', slug: 'live-casino-philly' },
  { name: 'Mount Airy Casino', location: 'Mount Pocono, PA', state: 'PA', slug: 'mount-airy-casino' },
  { name: 'Rivers Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', slug: 'rivers-casino-philly' },
  { name: 'Hollywood Casino at Penn National', location: 'Grantville, PA', state: 'PA', slug: 'hollywood-casino-penn-national' },
  { name: 'Mohegan Sun Pocono', location: 'Wilkes-Barre, PA', state: 'PA', slug: 'mohegan-sun-pocono' },
  { name: 'Valley Forge Casino Resort', location: 'King of Prussia, PA', state: 'PA', slug: 'valley-forge-casino' },
  { name: 'Presque Isle Downs & Casino', location: 'Erie, PA', state: 'PA', slug: 'presque-isle-downs' },
  { name: 'Turning Stone Resort Casino', location: 'Verona, NY', state: 'NY', slug: 'turning-stone-resort' },
  { name: 'Rivers Casino & Resort Schenectady', location: 'Schenectady, NY', state: 'NY', slug: 'rivers-casino-schenectady' },
  { name: 'del Lago Resort & Casino', location: 'Waterloo, NY', state: 'NY', slug: 'del-lago-resort' },
  { name: 'Tioga Downs Casino Resort', location: 'Nichols, NY', state: 'NY', slug: 'tioga-downs' },
  // Las Vegas Strip
  { name: 'Bellagio', location: 'Las Vegas, NV', state: 'NV', slug: 'bellagio' },
  { name: 'MGM Grand Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'mgm-grand-las-vegas' },
  { name: 'Caesars Palace', location: 'Las Vegas, NV', state: 'NV', slug: 'caesars-palace' },
  { name: 'The Venetian Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'venetian-las-vegas' },
  { name: 'Wynn Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'wynn-las-vegas' },
  { name: 'Aria Resort & Casino', location: 'Las Vegas, NV', state: 'NV', slug: 'aria-las-vegas' },
  { name: 'Cosmopolitan of Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'cosmopolitan-las-vegas' },
  { name: 'Paris Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'paris-las-vegas' },
  { name: "Harrah's Las Vegas", location: 'Las Vegas, NV', state: 'NV', slug: 'harrahs-las-vegas' },
  { name: 'Planet Hollywood Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'planet-hollywood-las-vegas' },
  { name: 'Mandalay Bay', location: 'Las Vegas, NV', state: 'NV', slug: 'mandalay-bay' },
  { name: 'New York-New York', location: 'Las Vegas, NV', state: 'NV', slug: 'new-york-new-york' },
  { name: 'Treasure Island', location: 'Las Vegas, NV', state: 'NV', slug: 'treasure-island-las-vegas' },
  { name: 'Golden Nugget Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'golden-nugget-las-vegas' },
  { name: "Binion's Gambling Hall", location: 'Las Vegas, NV', state: 'NV', slug: 'binions' },
  { name: 'Fontainebleau Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'fontainebleau-las-vegas' },
  { name: 'Resorts World Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'resorts-world-las-vegas' },
  { name: 'Circa Resort & Casino Downtown', location: 'Las Vegas, NV', state: 'NV', slug: 'circa-resort-las-vegas' },
  { name: 'Virgin Hotels Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'virgin-hotels-las-vegas' },
  { name: 'Durango Casino Resort Las Vegas', location: 'Las Vegas, NV', state: 'NV', slug: 'durango-casino-las-vegas' },
  // Reno / Tahoe
  { name: 'Peppermill Resort Spa Casino', location: 'Reno, NV', state: 'NV', slug: 'peppermill-reno' },
  { name: 'Grand Sierra Resort', location: 'Reno, NV', state: 'NV', slug: 'grand-sierra-resort' },
  { name: 'Silver Legacy Resort Casino', location: 'Reno, NV', state: 'NV', slug: 'silver-legacy-reno' },
  { name: 'Atlantis Casino Resort Spa', location: 'Reno, NV', state: 'NV', slug: 'atlantis-casino-reno' },
  { name: 'Circus Circus Reno', location: 'Reno, NV', state: 'NV', slug: 'circus-circus-reno' },
  { name: 'Eldorado Resort Casino Reno', location: 'Reno, NV', state: 'NV', slug: 'eldorado-reno' },
  { name: 'Harrahs Reno', location: 'Reno, NV', state: 'NV', slug: 'harrahs-reno' },
  { name: 'Nugget Casino Resort Sparks', location: 'Sparks, NV', state: 'NV', slug: 'nugget-casino-sparks' },
  { name: "Harrah's Lake Tahoe", location: 'Stateline, NV', state: 'NV', slug: 'harrahs-lake-tahoe' },
  { name: 'Harveys Lake Tahoe', location: 'Stateline, NV', state: 'NV', slug: 'harveys-lake-tahoe' },
  { name: 'Hard Rock Hotel & Casino Lake Tahoe', location: 'Stateline, NV', state: 'NV', slug: 'hard-rock-lake-tahoe' },
  { name: 'Caesars Palace Lake Tahoe', location: 'Stateline, NV', state: 'NV', slug: 'caesars-lake-tahoe' },
  { name: 'Eureka Casino Resort Mesquite', location: 'Mesquite, NV', state: 'NV', slug: 'eureka-casino-mesquite' },
  // Detroit
  { name: 'MGM Grand Detroit', location: 'Detroit, MI', state: 'MI', slug: 'mgm-grand-detroit' },
  { name: 'MotorCity Casino Hotel', location: 'Detroit, MI', state: 'MI', slug: 'motorcity-casino' },
  { name: 'Greektown Casino-Hotel', location: 'Detroit, MI', state: 'MI', slug: 'greektown-casino' },
  { name: 'Soaring Eagle Casino Resort', location: 'Mount Pleasant, MI', state: 'MI', slug: 'soaring-eagle-casino' },
  { name: 'Four Winds New Buffalo', location: 'New Buffalo, MI', state: 'MI', slug: 'four-winds-new-buffalo' },
  { name: 'FireKeepers Casino Hotel', location: 'Battle Creek, MI', state: 'MI', slug: 'firekeepers-casino' },
  // Illinois / Indiana
  { name: 'Rivers Casino Des Plaines', location: 'Des Plaines, IL', state: 'IL', slug: 'rivers-casino-des-plaines' },
  { name: 'Hollywood Casino Aurora', location: 'Aurora, IL', state: 'IL', slug: 'hollywood-casino-aurora' },
  { name: 'Grand Victoria Casino Elgin', location: 'Elgin, IL', state: 'IL', slug: 'grand-victoria-casino' },
  { name: 'Harrahs Joliet', location: 'Joliet, IL', state: 'IL', slug: 'harrahs-joliet' },
  { name: 'Horseshoe Hammond', location: 'Hammond, IN', state: 'IN', slug: 'horseshoe-hammond' },
  { name: 'Hard Rock Casino Northern Indiana', location: 'Gary, IN', state: 'IN', slug: 'hard-rock-northern-indiana' },
  { name: 'Four Winds South Bend', location: 'South Bend, IN', state: 'IN', slug: 'four-winds-south-bend' },
  { name: 'Ameristar Casino East Chicago', location: 'East Chicago, IN', state: 'IN', slug: 'ameristar-east-chicago' },
  // Ohio
  { name: 'JACK Cleveland Casino', location: 'Cleveland, OH', state: 'OH', slug: 'jack-cleveland-casino' },
  { name: 'Hollywood Casino Columbus', location: 'Columbus, OH', state: 'OH', slug: 'hollywood-casino-columbus' },
  { name: 'Hollywood Casino Toledo', location: 'Toledo, OH', state: 'OH', slug: 'hollywood-casino-toledo' },
  { name: 'Hard Rock Rocksino Northfield Park', location: 'Northfield, OH', state: 'OH', slug: 'hard-rock-rocksino-northfield' },
  { name: 'MGM Northfield Park', location: 'Northfield, OH', state: 'OH', slug: 'mgm-northfield-park' },
  { name: 'Hard Rock Hotel Casino Cincinnati', location: 'Cincinnati, OH', state: 'OH', slug: 'hard-rock-cincinnati' },
  // Mississippi
  { name: 'Beau Rivage Resort & Casino', location: 'Biloxi, MS', state: 'MS', slug: 'beau-rivage-biloxi' },
  { name: 'Hard Rock Hotel & Casino Biloxi', location: 'Biloxi, MS', state: 'MS', slug: 'hard-rock-biloxi' },
  { name: 'IP Casino Resort Spa', location: 'Biloxi, MS', state: 'MS', slug: 'ip-casino-biloxi' },
  { name: 'Scarlet Pearl Casino Resort', location: "D'Iberville, MS", state: 'MS', slug: 'scarlet-pearl-casino' },
  { name: 'Golden Nugget Biloxi', location: 'Biloxi, MS', state: 'MS', slug: 'golden-nugget-biloxi' },
  { name: 'Hollywood Casino Tunica', location: 'Tunica, MS', state: 'MS', slug: 'hollywood-casino-tunica' },
  // Louisiana
  { name: "Harrah's New Orleans", location: 'New Orleans, LA', state: 'LA', slug: 'harrahs-new-orleans' },
  { name: "L'Auberge Casino Resort Baton Rouge", location: 'Baton Rouge, LA', state: 'LA', slug: 'lauberge-baton-rouge' },
  { name: "L'Auberge Casino & Hotel Lake Charles", location: 'Lake Charles, LA', state: 'LA', slug: 'lauberge-lake-charles' },
  { name: 'Coushatta Casino Resort', location: 'Kinder, LA', state: 'LA', slug: 'coushatta-casino-resort' },
  { name: 'Boomtown Casino New Orleans', location: 'Harvey, LA', state: 'LA', slug: 'boomtown-new-orleans' },
  // Florida
  { name: 'Seminole Hard Rock Hotel & Casino Hollywood', location: 'Hollywood, FL', state: 'FL', slug: 'seminole-hard-rock-hollywood' },
  { name: 'Seminole Casino Coconut Creek', location: 'Coconut Creek, FL', state: 'FL', slug: 'seminole-coconut-creek' },
  { name: 'Seminole Hard Rock Hotel & Casino Tampa', location: 'Tampa, FL', state: 'FL', slug: 'seminole-hard-rock-tampa' },
  { name: 'Magic City Casino', location: 'Miami, FL', state: 'FL', slug: 'magic-city-casino' },
  { name: 'Isle Casino Racing Pompano Park', location: 'Pompano Beach, FL', state: 'FL', slug: 'isle-casino-pompano' },
  // Colorado
  { name: 'Ameristar Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'ameristar-black-hawk' },
  { name: 'Isle Casino Hotel Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'isle-casino-black-hawk' },
  { name: 'Monarch Casino Resort Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'monarch-casino-black-hawk' },
  { name: 'Saratoga Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', slug: 'saratoga-casino-black-hawk' },
  { name: "Bronco Billy's Casino", location: 'Cripple Creek, CO', state: 'CO', slug: 'bronco-billys' },
  { name: 'Sky Ute Casino Resort', location: 'Ignacio, CO', state: 'CO', slug: 'sky-ute-casino' },
  // Oklahoma
  { name: 'WinStar World Casino and Resort', location: 'Thackerville, OK', state: 'OK', slug: 'winstar-world-casino' },
  { name: 'Choctaw Casino Durant', location: 'Durant, OK', state: 'OK', slug: 'choctaw-casino-durant' },
  { name: 'Hard Rock Hotel Casino Tulsa', location: 'Catoosa, OK', state: 'OK', slug: 'hard-rock-tulsa' },
  { name: 'Osage Casino Hotel Tulsa', location: 'Tulsa, OK', state: 'OK', slug: 'osage-casino-tulsa' },
  { name: 'Cherokee Nation Casino Roland', location: 'Roland, OK', state: 'OK', slug: 'cherokee-nation-roland' },
  { name: 'Downstream Casino Resort', location: 'Quapaw, OK', state: 'OK', slug: 'downstream-casino' },
  // Arizona
  { name: 'Talking Stick Resort', location: 'Scottsdale, AZ', state: 'AZ', slug: 'talking-stick-resort' },
  { name: 'Casino Arizona', location: 'Scottsdale, AZ', state: 'AZ', slug: 'casino-arizona' },
  { name: 'Wild Horse Pass Hotel Casino', location: 'Chandler, AZ', state: 'AZ', slug: 'wild-horse-pass-casino' },
  { name: 'Desert Diamond Casino West Valley', location: 'Glendale, AZ', state: 'AZ', slug: 'desert-diamond-west-valley' },
  { name: 'Fort McDowell Casino', location: 'Fountain Hills, AZ', state: 'AZ', slug: 'fort-mcdowell-casino' },
  { name: 'Harrahs Ak-Chin Casino', location: 'Maricopa, AZ', state: 'AZ', slug: 'harrahs-ak-chin' },
  // California
  { name: 'Pechanga Resort Casino', location: 'Temecula, CA', state: 'CA', slug: 'pechanga-resort-casino' },
  { name: 'Morongo Casino Resort Spa', location: 'Cabazon, CA', state: 'CA', slug: 'morongo-casino' },
  { name: 'Agua Caliente Casino Cathedral City', location: 'Cathedral City, CA', state: 'CA', slug: 'agua-caliente-casino' },
  { name: 'Fantasy Springs Resort Casino', location: 'Indio, CA', state: 'CA', slug: 'fantasy-springs-casino' },
  { name: 'Viejas Casino Resort', location: 'Alpine, CA', state: 'CA', slug: 'viejas-casino' },
  { name: 'Harrahs Resort Southern California', location: 'Valley Center, CA', state: 'CA', slug: 'harrahs-southern-california' },
  { name: 'Barona Resort & Casino', location: 'Lakeside, CA', state: 'CA', slug: 'barona-resort' },
  { name: 'Sycuan Casino Resort', location: 'El Cajon, CA', state: 'CA', slug: 'sycuan-casino' },
  { name: 'San Manuel Casino', location: 'Highland, CA', state: 'CA', slug: 'san-manuel-casino' },
  { name: 'Thunder Valley Casino Resort', location: 'Lincoln, CA', state: 'CA', slug: 'thunder-valley-casino' },
  { name: 'Cache Creek Casino Resort', location: 'Brooks, CA', state: 'CA', slug: 'cache-creek-casino' },
  { name: 'Graton Resort & Casino', location: 'Rohnert Park, CA', state: 'CA', slug: 'graton-resort' },
  { name: 'Soboba Casino Resort', location: 'San Jacinto, CA', state: 'CA', slug: 'soboba-casino' },
  { name: 'Chumash Casino Resort', location: 'Santa Ynez, CA', state: 'CA', slug: 'chumash-casino' },
  { name: 'Jackson Rancheria Casino Resort', location: 'Jackson, CA', state: 'CA', slug: 'jackson-rancheria-casino' },
  // Pacific Northwest
  { name: 'Tulalip Resort Casino', location: 'Tulalip, WA', state: 'WA', slug: 'tulalip-resort-casino' },
  { name: 'Muckleshoot Casino Resort', location: 'Auburn, WA', state: 'WA', slug: 'muckleshoot-casino' },
  { name: 'Emerald Queen Casino', location: 'Tacoma, WA', state: 'WA', slug: 'emerald-queen-casino' },
  { name: 'Lucky Eagle Casino Hotel', location: 'Rochester, WA', state: 'WA', slug: 'lucky-eagle-casino' },
  { name: 'Snoqualmie Casino', location: 'Snoqualmie, WA', state: 'WA', slug: 'snoqualmie-casino' },
  { name: 'Ilani Casino Resort', location: 'Ridgefield, WA', state: 'WA', slug: 'ilani-casino-resort' },
  { name: 'Spirit Mountain Casino', location: 'Grand Ronde, OR', state: 'OR', slug: 'spirit-mountain-casino-oregon' },
  // Midwest
  { name: 'Potawatomi Hotel & Casino', location: 'Milwaukee, WI', state: 'WI', slug: 'potawatomi-casino-milwaukee' },
  { name: 'Mystic Lake Casino Hotel', location: 'Prior Lake, MN', state: 'MN', slug: 'mystic-lake-casino' },
  { name: 'Ameristar Casino Kansas City', location: 'Kansas City, MO', state: 'MO', slug: 'ameristar-kansas-city' },
  { name: 'Hollywood Casino St. Louis', location: 'Maryland Heights, MO', state: 'MO', slug: 'hollywood-casino-st-louis' },
  { name: 'Prairie Band Casino & Resort', location: 'Mayetta, KS', state: 'KS', slug: 'prairie-band-casino' },
  // Mid-Atlantic
  { name: 'MGM National Harbor', location: 'Oxon Hill, MD', state: 'MD', slug: 'mgm-national-harbor' },
  { name: 'Live! Casino & Hotel Maryland', location: 'Hanover, MD', state: 'MD', slug: 'live-casino-maryland' },
  { name: 'Hollywood Casino Perryville', location: 'Perryville, MD', state: 'MD', slug: 'hollywood-casino-perryville' },
  // West Virginia
  { name: 'Mountaineer Casino Racetrack Resort', location: 'New Cumberland, WV', state: 'WV', slug: 'mountaineer-casino' },
  { name: 'Hollywood Casino at Charles Town Races', location: 'Charles Town, WV', state: 'WV', slug: 'hollywood-casino-charles-town' },
  { name: 'Mardi Gras Casino Resort', location: 'Cross Lanes, WV', state: 'WV', slug: 'mardi-gras-casino-wv' },
  { name: 'Wheeling Island Hotel Casino Racetrack', location: 'Wheeling, WV', state: 'WV', slug: 'wheeling-island-casino' },
  // North Carolina
  { name: 'Harrahs Cherokee Casino Resort', location: 'Cherokee, NC', state: 'NC', slug: 'harrahs-cherokee' },
  { name: 'Harrahs Cherokee Valley River Casino', location: 'Murphy, NC', state: 'NC', slug: 'harrahs-cherokee-valley-river' },
  // Virginia
  { name: 'Rivers Casino Portsmouth', location: 'Portsmouth, VA', state: 'VA', slug: 'rivers-casino-portsmouth' },
  { name: 'Hard Rock Hotel Casino Bristol', location: 'Bristol, VA', state: 'VA', slug: 'hard-rock-bristol' },
  // Iowa
  { name: 'Ameristar Casino Council Bluffs', location: 'Council Bluffs, IA', state: 'IA', slug: 'ameristar-council-bluffs' },
  { name: 'Horseshoe Council Bluffs', location: 'Council Bluffs, IA', state: 'IA', slug: 'horseshoe-council-bluffs' },
  { name: 'Prairie Meadows Casino', location: 'Altoona, IA', state: 'IA', slug: 'prairie-meadows-casino' },
  { name: 'Isle Casino Hotel Bettendorf', location: 'Bettendorf, IA', state: 'IA', slug: 'isle-casino-bettendorf' },
  { name: 'Wild Rose Casino Resort', location: 'Emmetsburg, IA', state: 'IA', slug: 'wild-rose-emmetsburg' },
  // New Mexico
  { name: 'Sandia Resort Casino', location: 'Albuquerque, NM', state: 'NM', slug: 'sandia-resort-casino' },
  { name: 'Route 66 Casino Hotel', location: 'Albuquerque, NM', state: 'NM', slug: 'route-66-casino' },
  { name: 'Inn of the Mountain Gods Resort Casino', location: 'Mescalero, NM', state: 'NM', slug: 'inn-of-the-mountain-gods' },
  { name: 'Buffalo Thunder Resort Casino', location: 'Santa Fe, NM', state: 'NM', slug: 'buffalo-thunder-casino' },
  { name: 'Fire Rock Navajo Casino', location: 'Church Rock, NM', state: 'NM', slug: 'fire-rock-navajo-casino' },
  // South Dakota
  { name: 'Deadwood Mountain Grand', location: 'Deadwood, SD', state: 'SD', slug: 'deadwood-mountain-grand' },
  { name: 'Cadillac Jacks Gaming Resort', location: 'Deadwood, SD', state: 'SD', slug: 'cadillac-jacks-deadwood' },
  { name: 'Dakota Sioux Casino Hotel', location: 'Watertown, SD', state: 'SD', slug: 'dakota-sioux-casino' },
  { name: 'Grand River Casino Resort', location: 'Mobridge, SD', state: 'SD', slug: 'grand-river-casino' },
  // North Dakota
  { name: 'Sky Dancer Hotel Casino', location: 'Belcourt, ND', state: 'ND', slug: 'sky-dancer-casino' },
  { name: 'Spirit Lake Casino Resort', location: 'St. Michael, ND', state: 'ND', slug: 'spirit-lake-casino' },
  { name: '4 Bears Casino Lodge', location: 'New Town, ND', state: 'ND', slug: '4-bears-casino' },
  // Montana
  { name: 'KwaTaqNuk Resort Casino', location: 'Polson, MT', state: 'MT', slug: 'kwataqnuk-casino' },
  { name: 'Charging Horse Casino', location: 'Lame Deer, MT', state: 'MT', slug: 'charging-horse-casino' },
  // Idaho
  { name: 'Coeur dAlene Casino', location: 'Worley, ID', state: 'ID', slug: 'coeur-dalene-casino' },
  { name: 'Clearwater River Casino Lodge', location: 'Lewiston, ID', state: 'ID', slug: 'clearwater-river-casino' },
  { name: 'Shoshone-Bannock Casino Hotel', location: 'Fort Hall, ID', state: 'ID', slug: 'shoshone-bannock-casino' },
  // Alabama
  { name: 'Wind Creek Casino Hotel Wetumpka', location: 'Wetumpka, AL', state: 'AL', slug: 'wind-creek-wetumpka' },
  { name: 'Wind Creek Casino Hotel Atmore', location: 'Atmore, AL', state: 'AL', slug: 'wind-creek-atmore' },
  { name: 'Wind Creek Casino Hotel Montgomery', location: 'Montgomery, AL', state: 'AL', slug: 'wind-creek-montgomery' },
  // Nebraska
  { name: 'WarHorse Casino Lincoln', location: 'Lincoln, NE', state: 'NE', slug: 'warhorse-casino-lincoln' },
  { name: 'WarHorse Casino Omaha', location: 'Omaha, NE', state: 'NE', slug: 'warhorse-casino-omaha' },
  // Maine
  { name: 'Oxford Casino Hotel', location: 'Oxford, ME', state: 'ME', slug: 'oxford-casino' },
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
function buildPool(casino) {
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

  const pool = buildPool(casino);
  const weighted = [
    ...pool.general, ...pool.general,   // 40% general
    ...pool.slots,                        // 25% slots
    ...pool.tables,                       // 20% tables
    ...pool.poker,                        // 15% poker
    ...pool.asks.slice(0, 2),
    ...pool.answers.slice(0, 2),
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

  if (DRY_RUN) {
    console.log(`  🔍 ${casino.name} — would post ${rows.length}:`);
    rows.forEach(r => console.log(`     [${r.category}] ${r.body}`));
    return rows.length;
  }

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
//  MAIN
// ─────────────────────────────────────────────
async function main() {
  console.log('🎰 CasinoConditions Seed Script');
  console.log(`   Casinos : ${CASINOS.length}`);
  console.log(`   Force   : ${FORCE}`);
  console.log(`   Dry run : ${DRY_RUN}`);
  console.log(`   Filter  : ${ONLY_SLUG || 'all'}`);
  console.log('');

  if (FORCE && !DRY_RUN) {
    console.log('🗑  Deleting all seeded posts...');
    await sbFetch('/posts?is_seeded=eq.true', { method: 'DELETE' });
    console.log('   Done.\n');
  }

  await seedLeaderboard();

  const toSeed = ONLY_SLUG ? CASINOS.filter(c => c.slug === ONLY_SLUG) : CASINOS;

  if (ONLY_SLUG && toSeed.length === 0) {
    console.error(`\n❌ No casino found with slug: ${ONLY_SLUG}`);
    process.exit(1);
  }

  console.log(`\n🃏 Seeding ${toSeed.length} casino(s)...\n`);

  let totalPosts = 0;
  let casinoCount = 0;
  const BATCH = 8;

  for (let i = 0; i < toSeed.length; i += BATCH) {
    const batch = toSeed.slice(i, i + BATCH);
    const counts = await Promise.all(batch.map(c => seedCasino(c)));
    totalPosts  += counts.reduce((a, b) => a + b, 0);
    casinoCount += counts.filter(c => c > 0).length;
  }

  console.log(`\n✨ Done! ${totalPosts} posts seeded across ${casinoCount} casinos.`);
  if (DRY_RUN) console.log('   (Dry run — nothing written to database)');
}

main().catch(err => {
  console.error('\n❌ Fatal error:', err.message);
  process.exit(1);
});

const CASINOS = [
  { name: 'Mohegan Sun', location: 'Uncasville, CT', state: 'CT', miles: 30, slug: 'mohegan-sun', desc: 'One of the largest casinos in the US with 300,000+ sq ft of gaming, 4,000 slots, 300 table games, and 30 poker tables.' },
  { name: 'Foxwoods Resort Casino', location: 'Mashantucket, CT', state: 'CT', miles: 41, slug: 'foxwoods', desc: 'The second-largest casino in the US featuring 340,000 sq ft of gaming, 3,500 slots, 250 table games, and a 54-table poker room.' },
  { name: "Jake's 58 Casino", location: 'Islandia, NY', state: 'NY', miles: 73, slug: 'jakes-58', desc: "Jake's 58 offers 1,000 slot machines and electronic table games." },
  { name: 'Empire City Casino', location: 'Yonkers, NY', state: 'NY', miles: 90, slug: 'empire-city', desc: 'Empire City Casino features 4,600+ slot machines and electronic table games.' },
  { name: 'Resorts World NYC', location: 'Queens, NY', state: 'NY', miles: 95, slug: 'resorts-world-nyc', desc: 'Resorts World NYC offers 6,500+ gaming machines near JFK Airport.' },
  { name: "Bally's Twin River", location: 'Lincoln, RI', state: 'RI', miles: 100, slug: 'ballys-twin-river', desc: "Rhode Island's largest casino with live table games, slots, and poker." },
  { name: "Bally's Tiverton", location: 'Tiverton, RI', state: 'RI', miles: 110, slug: 'ballys-tiverton', desc: "24-hour gaming with blackjack, roulette, craps, baccarat, and slots." },
  { name: 'Plainridge Park Casino', location: 'Plainville, MA', state: 'MA', miles: 115, slug: 'plainridge-park', desc: 'Plainridge Park features 1,200 slot machines near Providence and Boston.' },
  { name: 'Resorts World Catskills', location: 'Monticello, NY', state: 'NY', miles: 150, slug: 'resorts-world-catskills', desc: 'Full resort casino in the Catskill Mountains with 100,000 sq ft of gaming.' },
  { name: 'MGM Springfield', location: 'Springfield, MA', state: 'MA', miles: 155, slug: 'mgm-springfield', desc: "Western Massachusetts's premier casino resort with slots, tables, poker, and sportsbook." },
  { name: 'Encore Boston Harbor', location: 'Everett, MA', state: 'MA', miles: 160, slug: 'encore-boston-harbor', desc: 'Luxury resort casino on the Mystic River with 210,000 sq ft of gaming.' },
  { name: 'Borgata', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'borgata', desc: "One of Atlantic City's most popular casinos with a massive poker room." },
  { name: 'Hard Rock Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'hard-rock-ac', desc: 'Full gaming with slots, table games, and a poker room on the boardwalk.' },
  { name: 'Caesars Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'caesars-ac', desc: 'Roman-inspired luxury casino with 2,000+ slots and 130+ table games.' },
  { name: "Harrah's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'harrahs-ac', desc: "Waterfront casino resort with extensive gaming and a poker room." },
  { name: "Bally's Atlantic City", location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'ballys-ac', desc: "Classic boardwalk casino with 800+ slot machines and table games." },
  { name: 'Resorts Casino Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'resorts-casino-ac', desc: "Atlantic City's original casino with 800+ slots and 100 gaming tables." },
  { name: 'Golden Nugget Atlantic City', location: 'Atlantic City, NJ', state: 'NJ', miles: 175, slug: 'golden-nugget-ac', desc: 'Marina casino with 2,000+ slots, 60+ table games, and poker.' },
  { name: 'Wind Creek Bethlehem', location: 'Bethlehem, PA', state: 'PA', miles: 210, slug: 'wind-creek-bethlehem', desc: 'Open 24/7 with 3,000+ gaming machines, 176 table games, and poker.' },
  { name: 'Parx Casino', location: 'Bensalem, PA', state: 'PA', miles: 240, slug: 'parx-casino', desc: "Pennsylvania's most popular casino with slots, tables, poker, and horse racing." },
  { name: 'Live! Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', miles: 250, slug: 'live-casino-philly', desc: '510,000 sq ft entertainment complex with slots, tables, poker, and sports betting.' },
  { name: 'Mount Airy Casino', location: 'Mount Pocono, PA', state: 'PA', miles: 175, slug: 'mount-airy-casino', desc: 'Pocono Mountains resort with table games, slots, poker, hotel, spa, and golf.' },
  { name: 'Bellagio', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'bellagio', desc: 'One of the most iconic casinos in the world with 116,000 sq ft of gaming and a legendary poker room.' },
  { name: 'MGM Grand Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'mgm-grand-las-vegas', desc: 'One of the largest hotels in the world with 170,000 sq ft of gaming and a massive poker room.' },
  { name: 'Caesars Palace', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'caesars-palace', desc: 'The legendary Roman-themed resort with 124,000 sq ft of gaming and a renowned poker room.' },
  { name: 'The Venetian Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'venetian-las-vegas', desc: 'Luxury Italian-themed mega-resort with 120,000 sq ft of gaming and a 37-table poker room.' },
  { name: 'Wynn Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'wynn-las-vegas', desc: "One of Vegas's most upscale properties with 110,000 sq ft of gaming and high-limit rooms." },
  { name: 'Aria Resort & Casino', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'aria-las-vegas', desc: 'Modern luxury resort on the Strip with 150,000 sq ft of gaming and one of the most popular poker rooms in Vegas.' },
  { name: 'Cosmopolitan of Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'cosmopolitan-las-vegas', desc: 'Sleek boutique-style resort with 100,000 sq ft of gaming and some of the best bars on the Strip.' },
  { name: 'Paris Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'paris-las-vegas', desc: 'French-themed casino with 95,000 sq ft of gaming and a replica Eiffel Tower.' },
  { name: "Harrah's Las Vegas", location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'harrahs-las-vegas', desc: 'Classic Strip casino with 87,000 sq ft of gaming, good table minimums, and a fun casual atmosphere.' },
  { name: 'Planet Hollywood Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'planet-hollywood-las-vegas', desc: 'Lively casino resort with 95,000 sq ft of gaming in the heart of the Strip.' },
  { name: 'Mandalay Bay', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'mandalay-bay', desc: 'Massive resort at the south end of the Strip with 135,000 sq ft of gaming and a beach club.' },
  { name: 'New York-New York', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'new-york-new-york', desc: 'Fun NYC-themed casino with 84,000 sq ft of gaming and low table minimums.' },
  { name: 'Treasure Island', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'treasure-island-las-vegas', desc: 'Mid-Strip casino known for affordable table minimums and a laid-back atmosphere.' },
  { name: 'Golden Nugget Las Vegas', location: 'Downtown Las Vegas, NV', state: 'NV', miles: 2800, slug: 'golden-nugget-las-vegas', desc: 'Crown jewel of Downtown Las Vegas with a legendary poker room and the famous shark tank pool.' },
  { name: "Binion's Gambling Hall", location: 'Downtown Las Vegas, NV', state: 'NV', miles: 2800, slug: 'binions', desc: 'Legendary Downtown Vegas institution famous for poker history and old-school Vegas vibe.' },
  // Reno / Tahoe
  { name: 'Peppermill Resort Spa Casino', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'peppermill-reno', desc: "Reno's premier resort casino with 100,000 sq ft of gaming, a world-class spa, and top-tier dining." },
  { name: 'Grand Sierra Resort', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'grand-sierra-resort', desc: "One of Reno's largest casino resorts with 80,000 sq ft of gaming, bowling, and entertainment." },
  { name: 'Silver Legacy Resort Casino', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'silver-legacy-reno', desc: 'Iconic Victorian-themed casino in downtown Reno with 85,000 sq ft of gaming.' },
  { name: 'Atlantis Casino Resort Spa', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'atlantis-reno', desc: 'Upscale Reno casino resort with 61,000 sq ft of gaming, a full spa, and award-winning restaurants.' },
  { name: "Harrah's Lake Tahoe", location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'harrahs-lake-tahoe', desc: 'Full casino resort on the south shore of Lake Tahoe with 60,000 sq ft of gaming.' },
  { name: 'Harveys Lake Tahoe', location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'harveys-lake-tahoe', desc: "Lake Tahoe's original casino resort with 88,000 sq ft of gaming and a rooftop pool." },
  { name: 'Hard Rock Hotel & Casino Lake Tahoe', location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'hard-rock-lake-tahoe', desc: 'Rock-themed casino on the shores of Lake Tahoe with slots, table games, and poker.' },
  // Detroit
  { name: 'MGM Grand Detroit', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'mgm-grand-detroit', desc: "Detroit's premier casino with 100,000 sq ft of gaming, a poker room, and luxury hotel." },
  { name: 'MotorCity Casino Hotel', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'motorcity-casino', desc: 'A Detroit staple with 100,000 sq ft of gaming, great concerts, and a lively table game floor.' },
  { name: 'Greektown Casino-Hotel', location: 'Detroit, MI', state: 'MI', miles: 600, slug: 'greektown-casino', desc: "Located in Detroit's Greektown with 100,000 sq ft of gaming and easy downtown access." },
  // Chicago / IL / IN
  { name: 'Rivers Casino Des Plaines', location: 'Des Plaines, IL', state: 'IL', miles: 800, slug: 'rivers-casino-des-plaines', desc: "The busiest casino in Illinois with 1,100 slots, 60 table games, and a poker room near O'Hare." },
  { name: 'Hollywood Casino Aurora', location: 'Aurora, IL', state: 'IL', miles: 830, slug: 'hollywood-casino-aurora', desc: 'Riverboat casino on the Fox River with 1,100 slots, 50+ table games, and sports betting.' },
  { name: 'Horseshoe Hammond', location: 'Hammond, IN', state: 'IN', miles: 790, slug: 'horseshoe-hammond', desc: 'One of the largest casinos in the Midwest with 100,000 sq ft of gaming just outside Chicago.' },
  { name: 'Hard Rock Casino Northern Indiana', location: 'Gary, IN', state: 'IN', miles: 800, slug: 'hard-rock-northern-indiana', desc: 'Rock-themed casino in Gary with 1,600+ slots, table games, poker, and great dining.' },
  { name: 'Four Winds South Bend', location: 'South Bend, IN', state: 'IN', miles: 750, slug: 'four-winds-south-bend', desc: 'Premier tribal casino near Notre Dame with 3,000+ slots, table games, and poker.' },
  // Mississippi
  { name: 'Beau Rivage Resort & Casino', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'beau-rivage-biloxi', desc: "MGM's flagship Gulf Coast resort with 85,000 sq ft of gaming and a top poker room." },
  { name: 'Hard Rock Hotel & Casino Biloxi', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'hard-rock-biloxi', desc: 'Rock-themed beachfront casino in Biloxi with 800+ slots, 60+ tables, and poker.' },
  { name: 'IP Casino Resort Spa', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'ip-casino-biloxi', desc: 'Full resort casino in Biloxi with 1,000+ slots, table games, and a spa.' },
  { name: 'Scarlet Pearl Casino Resort', location: "D'Iberville, MS", state: 'MS', miles: 1300, slug: 'scarlet-pearl-casino', desc: 'Modern Gulf Coast casino resort with 900+ slots, table games, and poker.' },
  { name: 'Golden Nugget Biloxi', location: 'Biloxi, MS', state: 'MS', miles: 1300, slug: 'golden-nugget-biloxi', desc: 'Gulf Coast casino with 1,100+ slots, table games, and poker on the Biloxi waterfront.' },
  { name: 'Hollywood Casino Tunica', location: 'Tunica, MS', state: 'MS', miles: 1100, slug: 'hollywood-casino-tunica', desc: "Tunica classic with 1,000+ slots, table games, and poker in Mississippi's casino corridor." },
  // Louisiana
  { name: "Harrah's New Orleans", location: 'New Orleans, LA', state: 'LA', miles: 1350, slug: 'harrahs-new-orleans', desc: 'The only land-based casino in New Orleans with 115,000 sq ft of gaming and a poker room.' },
  { name: "L'Auberge Casino Resort Baton Rouge", location: 'Baton Rouge, LA', state: 'LA', miles: 1350, slug: 'lauberge-baton-rouge', desc: 'Luxury casino resort on the Mississippi River with 1,600+ slots, table games, and poker.' },
  { name: "L'Auberge Casino & Hotel Lake Charles", location: 'Lake Charles, LA', state: 'LA', miles: 1450, slug: 'lauberge-lake-charles', desc: "Southwest Louisiana's premier resort casino with 1,600+ slots and 60+ table games." },
  { name: 'Coushatta Casino Resort', location: 'Kinder, LA', state: 'LA', miles: 1450, slug: 'coushatta-casino-resort', desc: "Louisiana's largest tribal casino with 3,000+ slots, table games, and a full resort." },
  { name: 'Boomtown Casino New Orleans', location: 'Harvey, LA', state: 'LA', miles: 1350, slug: 'boomtown-new-orleans', desc: 'Lively casino just outside New Orleans with 1,500+ slots, table games, and poker.' },
  // Florida
  { name: 'Seminole Hard Rock Hotel & Casino Hollywood', location: 'Hollywood, FL', state: 'FL', miles: 1300, slug: 'seminole-hard-rock-hollywood', desc: "Florida's most famous casino with 180,000 sq ft of gaming and a guitar-shaped hotel." },
  { name: 'Seminole Casino Coconut Creek', location: 'Coconut Creek, FL', state: 'FL', miles: 1320, slug: 'seminole-coconut-creek', desc: 'Popular South Florida casino with 2,400+ slots, table games, and poker.' },
  { name: 'Seminole Hard Rock Hotel & Casino Tampa', location: 'Tampa, FL', state: 'FL', miles: 1150, slug: 'seminole-hard-rock-tampa', desc: "Tampa's premier casino with 5,000+ slots, table games, and one of Florida's best poker rooms." },
  { name: 'Magic City Casino', location: 'Miami, FL', state: 'FL', miles: 1340, slug: 'magic-city-casino', desc: "Miami's premier gaming destination with slots, table games, and live jai-alai." },
  { name: 'Isle Casino Racing Pompano Park', location: 'Pompano Beach, FL', state: 'FL', miles: 1320, slug: 'isle-casino-pompano', desc: 'South Florida gaming with 1,500+ slots, table games, and live harness racing.' },
  // Colorado
  { name: 'Ameristar Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'ameristar-black-hawk', desc: "Colorado's largest casino with 40,000 sq ft of gaming and mountain views." },
  { name: 'Monarch Casino & Resort', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'monarch-casino-black-hawk', desc: 'Upscale Black Hawk casino resort with 1,200+ slots, 40+ table games, and a spa.' },
  { name: 'Isle Casino Hotel Black Hawk', location: 'Black Hawk, CO', state: 'CO', miles: 1800, slug: 'isle-casino-black-hawk', desc: 'Black Hawk favorite with 900+ slots, table games, and poker in the Colorado Rockies.' },
  { name: "Bronco Billy's Casino", location: 'Cripple Creek, CO', state: 'CO', miles: 1820, slug: 'bronco-billys', desc: "Cripple Creek's most popular casino with slots, table games, and Old West character." },
  { name: 'Sky Ute Casino Resort', location: 'Ignacio, CO', state: 'CO', miles: 1900, slug: 'sky-ute-casino', desc: 'Southern Colorado tribal casino resort with 700+ slots, table games, and a hotel.' },
  // Oklahoma
  { name: 'WinStar World Casino', location: 'Thackerville, OK', state: 'OK', miles: 1400, slug: 'winstar-world-casino', desc: "The world's largest casino with 600,000+ sq ft of gaming and a massive poker room." },
  { name: 'Choctaw Casino Resort Durant', location: 'Durant, OK', state: 'OK', miles: 1380, slug: 'choctaw-casino-durant', desc: "Oklahoma's premier tribal casino resort with 5,000+ slots, table games, and poker." },
  { name: 'Hard Rock Hotel & Casino Tulsa', location: 'Catoosa, OK', state: 'OK', miles: 1300, slug: 'hard-rock-tulsa', desc: 'Flagship Hard Rock tribal casino near Tulsa with 2,800+ slots, 90+ tables, and poker.' },
  { name: 'Osage Casino Hotel Tulsa', location: 'Tulsa, OK', state: 'OK', miles: 1300, slug: 'osage-casino-tulsa', desc: 'Tulsa-area tribal casino with 2,400+ slots, table games, and a full hotel.' },
  { name: 'Cherokee Casino & Hotel Roland', location: 'Roland, OK', state: 'OK', miles: 1200, slug: 'cherokee-casino-roland', desc: 'Cherokee Nation casino near Fort Smith with 2,000+ slots and table games.' },
  // Arizona
  { name: 'Talking Stick Resort', location: 'Scottsdale, AZ', state: 'AZ', miles: 2400, slug: 'talking-stick-resort', desc: "Scottsdale's premier tribal resort with 240,000 sq ft of gaming, poker, golf, and a luxury hotel." },
  { name: 'Wild Horse Pass Hotel & Casino', location: 'Chandler, AZ', state: 'AZ', miles: 2400, slug: 'wild-horse-pass', desc: 'Gila River tribal casino with 100,000 sq ft of gaming, slots, tables, and a hotel.' },
  { name: 'Casino Arizona', location: 'Scottsdale, AZ', state: 'AZ', miles: 2400, slug: 'casino-arizona', desc: "One of Arizona's most popular casinos with 900+ slots, table games, and poker." },
  { name: 'Desert Diamond Casino West Valley', location: 'Glendale, AZ', state: 'AZ', miles: 2400, slug: 'desert-diamond-west-valley', desc: "Tohono O'odham casino near State Farm Stadium with 1,100+ slots and poker." },
  { name: 'Fort McDowell Casino', location: 'Fountain Hills, AZ', state: 'AZ', miles: 2400, slug: 'fort-mcdowell-casino', desc: 'Yavapai Nation casino northeast of Scottsdale with 950+ slots, table games, and poker.' },
  // California
  { name: 'Pechanga Resort Casino', location: 'Temecula, CA', state: 'CA', miles: 2700, slug: 'pechanga-resort', desc: 'One of the largest tribal casinos in the US with 200,000 sq ft of gaming and a poker room.' },
  { name: 'Morongo Casino Resort & Spa', location: 'Cabazon, CA', state: 'CA', miles: 2700, slug: 'morongo-casino', desc: 'Towering desert casino resort near Palm Springs with 2,000+ slots and poker.' },
  { name: 'Agua Caliente Casino Cathedral City', location: 'Cathedral City, CA', state: 'CA', miles: 2700, slug: 'agua-caliente-cathedral-city', desc: 'Palm Springs area tribal casino with 1,600+ slots, table games, and poker.' },
  { name: 'Barona Resort & Casino', location: 'Lakeside, CA', state: 'CA', miles: 2750, slug: 'barona-resort', desc: "San Diego's premier tribal casino resort with 2,000+ slots, poker, and golf." },
  { name: 'Sycuan Casino Resort', location: 'El Cajon, CA', state: 'CA', miles: 2750, slug: 'sycuan-casino', desc: 'East San Diego County casino with 2,500+ slots, table games, and poker.' },
  { name: 'San Manuel Casino', location: 'Highland, CA', state: 'CA', miles: 2700, slug: 'san-manuel-casino', desc: "Southern California's most popular casino with 4,800+ slots, tables, and poker." },
  { name: 'Thunder Valley Casino Resort', location: 'Lincoln, CA', state: 'CA', miles: 2600, slug: 'thunder-valley-casino', desc: "Northern California's largest tribal casino with 3,000+ slots and poker near Sacramento." },
  { name: 'Cache Creek Casino Resort', location: 'Brooks, CA', state: 'CA', miles: 2600, slug: 'cache-creek-casino', desc: 'Popular Northern California tribal casino with 2,200+ slots, poker, and golf.' },
  { name: 'Graton Resort & Casino', location: 'Rohnert Park, CA', state: 'CA', miles: 2600, slug: 'graton-resort', desc: 'Northern California tribal casino resort with 3,000+ slots and a poker room in Sonoma County.' },
  { name: 'Soboba Casino Resort', location: 'San Jacinto, CA', state: 'CA', miles: 2700, slug: 'soboba-casino', desc: 'Inland Southern California tribal casino with 2,000+ slots, table games, and poker.' },
  // Pacific Northwest
  { name: 'Tulalip Resort Casino', location: 'Tulalip, WA', state: 'WA', miles: 2800, slug: 'tulalip-resort-casino', desc: "Washington State's premier tribal resort with 4,000+ slots, table games, and poker." },
  { name: 'Snoqualmie Casino', location: 'Snoqualmie, WA', state: 'WA', miles: 2800, slug: 'snoqualmie-casino', desc: 'Mountaintop tribal casino near Seattle with 1,700+ slots, table games, and stunning views.' },
  { name: 'Muckleshoot Casino', location: 'Auburn, WA', state: 'WA', miles: 2800, slug: 'muckleshoot-casino', desc: "Washington's largest tribal casino with 4,000+ slots and poker near Seattle." },
  { name: 'Ilani Casino Resort', location: 'Ridgefield, WA', state: 'WA', miles: 2900, slug: 'ilani-casino', desc: 'Tribal casino resort near Portland with 100,000 sq ft of gaming, table games, and poker.' },
  { name: 'Spirit Mountain Casino', location: 'Grand Ronde, OR', state: 'OR', miles: 2900, slug: 'spirit-mountain-casino', desc: "Oregon's most popular tribal casino with 1,000+ slots and entertainment near Portland." },
  // Midwest
  { name: 'Potawatomi Hotel & Casino', location: 'Milwaukee, WI', state: 'WI', miles: 800, slug: 'potawatomi-casino-milwaukee', desc: "Milwaukee's premier tribal casino with 3,000+ slots, 100+ table games, and poker." },
  { name: 'Mystic Lake Casino Hotel', location: 'Prior Lake, MN', state: 'MN', miles: 1100, slug: 'mystic-lake-casino', desc: "Minnesota's most popular casino with 4,000+ slots and entertainment near Minneapolis." },
  { name: 'Ameristar Casino Kansas City', location: 'Kansas City, MO', state: 'MO', miles: 1300, slug: 'ameristar-kansas-city', desc: 'Massive riverboat casino complex in Kansas City with 130,000 sq ft of gaming.' },
  { name: 'Hollywood Casino St. Louis', location: 'Maryland Heights, MO', state: 'MO', miles: 1100, slug: 'hollywood-casino-st-louis', desc: "St. Louis's most popular casino with 120,000 sq ft of gaming on the Missouri River." },
  { name: 'Prairie Band Casino & Resort', location: 'Mayetta, KS', state: 'KS', miles: 1350, slug: 'prairie-band-casino', desc: "Kansas's largest tribal casino with 1,700+ slots, table games, and a hotel." },
  // Mid-Atlantic
  { name: 'MGM National Harbor', location: 'Oxon Hill, MD', state: 'MD', miles: 400, slug: 'mgm-national-harbor', desc: 'Luxury casino resort just outside DC with 125,000 sq ft of gaming and a poker room.' },
  { name: 'Live! Casino & Hotel Maryland', location: 'Hanover, MD', state: 'MD', miles: 380, slug: 'live-casino-maryland', desc: 'One of the largest casinos on the East Coast with 4,000+ slots and a poker room.' },
  { name: 'Hollywood Casino Perryville', location: 'Perryville, MD', state: 'MD', miles: 350, slug: 'hollywood-casino-perryville', desc: "Maryland's first casino with 900+ slots, table games, and live horse racing." },
  { name: 'Rivers Casino Philadelphia', location: 'Philadelphia, PA', state: 'PA', miles: 250, slug: 'rivers-casino-philly', desc: "Philadelphia's newest casino with 2,000+ slots, 150+ tables, and poker." },
  { name: 'Hollywood Casino at Penn National', location: 'Grantville, PA', state: 'PA', miles: 200, slug: 'hollywood-casino-penn-national', desc: 'Central Pennsylvania casino with 2,300+ slots, table games, and live horse racing.' },
  { name: 'Mohegan Sun Pocono', location: 'Wilkes-Barre, PA', state: 'PA', miles: 170, slug: 'mohegan-sun-pocono', desc: 'Northeastern Pennsylvania casino with 2,500+ slots, table games, and poker.' },
  { name: 'Valley Forge Casino Resort', location: 'King of Prussia, PA', state: 'PA', miles: 260, slug: 'valley-forge-casino', desc: 'Suburban Philadelphia casino with 850+ slots, table games, and a hotel.' },
  { name: 'Presque Isle Downs & Casino', location: 'Erie, PA', state: 'PA', miles: 400, slug: 'presque-isle-downs', desc: 'Northwestern Pennsylvania casino with 1,600+ slots, tables, and live horse racing.' },
  // Upstate NY
  { name: 'Turning Stone Resort Casino', location: 'Verona, NY', state: 'NY', miles: 260, slug: 'turning-stone-resort', desc: "Central New York's premier resort casino with 5,000+ slots, table games, poker, and golf." },
  { name: 'Rivers Casino & Resort Schenectady', location: 'Schenectady, NY', state: 'NY', miles: 170, slug: 'rivers-casino-schenectady', desc: 'Capital Region casino on the Mohawk River with 1,150+ slots, tables, and poker.' },
  { name: 'del Lago Resort & Casino', location: 'Waterloo, NY', state: 'NY', miles: 280, slug: 'del-lago-resort', desc: 'Finger Lakes casino resort with 2,000+ slots, table games, poker, and hotel.' },
  { name: 'Tioga Downs Casino Resort', location: 'Nichols, NY', state: 'NY', miles: 230, slug: 'tioga-downs', desc: 'Southern Tier NY casino with 1,100+ slots, table games, and live harness racing.' },
];

const STATE_NAMES = { CT: 'Connecticut', NY: 'New York', RI: 'Rhode Island', MA: 'Massachusetts', NJ: 'New Jersey', PA: 'Pennsylvania', NV: 'Nevada (Las Vegas & Reno)', MI: 'Michigan', IL: 'Illinois', IN: 'Indiana', MS: 'Mississippi', LA: 'Louisiana', FL: 'Florida', CO: 'Colorado', OK: 'Oklahoma', AZ: 'Arizona', CA: 'California', WA: 'Washington', OR: 'Oregon', WI: 'Wisconsin', MN: 'Minnesota', MO: 'Missouri', KS: 'Kansas', MD: 'Maryland' };

export default async function handler(req, res) {
  const byState = {};
  for (const c of CASINOS) {
    if (!byState[c.state]) byState[c.state] = [];
    byState[c.state].push(c);
  }

  const statesHtml = Object.entries(byState).map(([state, casinos]) => `
    <div class="state-group">
      <div class="state-label">${STATE_NAMES[state] || state}</div>
      <div class="dir-grid">
        ${casinos.map(c => `
          <a href="/${c.slug}" class="dir-card" id="card-${c.slug}">
            <div class="dir-card-name">${c.name}</div>
            <div class="dir-card-loc">📍 ${c.location}</div>
            <div class="dir-card-desc">${c.desc}</div>
            <div class="dir-card-footer">
              <span class="dir-card-dist">${c.miles} miles</span>
              <div style="display:flex;align-items:center;gap:10px">
                <button class="dir-card-star" id="star-${c.slug}" onclick="toggleStar(event, '${c.slug}')" title="Save casino">☆</button>
                <span class="dir-card-posts">View updates →</span>
              </div>
            </div>
          </a>`).join('')}
      </div>
    </div>`).join('');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Browse Casinos — Real-Time Floor Conditions | CasinoConditions</title>
<meta name="description" content="Browse all casinos covered by CasinoConditions. Real-time floor reports for casinos in Las Vegas, Connecticut, New York, New Jersey, Massachusetts, Rhode Island, and Pennsylvania.">
<link rel="canonical" href="https://casinoconditions.com/browse">
<script async src="https://www.googletagmanager.com/gtag/js?id=G-RYX8RTNPQG"></script>
<script>window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','G-RYX8RTNPQG');</script>
<meta property="og:title" content="Browse Casinos — CasinoConditions">
<meta property="og:description" content="Real-time casino floor reports for ${CASINOS.length} casinos across the Northeast US.">
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--bg:#f7f7f5;--surface:#fff;--border:#e8e8e4;--text:#1a1a18;--muted:#888880;--accent:#1a6b3c;--accent-light:#edf5f0;--accent-dim:#2d8a52;--radius:12px}
body.dark{--bg:#0f0f0d;--surface:#161614;--border:#2a2a26;--text:#f0ede8;--muted:#6b6860;--accent:#4caf70;--accent-light:#1a2e1f;--accent-dim:#3d9960}
body.dark nav{background:rgba(15,15,13,0.95)}
body.dark .dir-card{background:#161614}
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
.btn{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;text-decoration:none}
.page-header{background:#fff;border-bottom:1px solid var(--border);padding:40px 40px 32px}
.page-header-inner{max-width:1100px;margin:0 auto}
.page-title{font-size:32px;font-weight:700;letter-spacing:-1px;margin-bottom:8px}
.page-sub{font-size:15px;color:var(--muted)}
.directory-wrap{max-width:1100px;margin:0 auto;padding:36px 24px}
.state-group{margin-bottom:36px}
.state-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1px;color:var(--muted);margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--border)}
.dir-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px}
.dir-card{background:#fff;border:1px solid var(--border);border-radius:var(--radius);padding:16px 18px;cursor:pointer;transition:all .2s;text-decoration:none;display:block}
.dir-card:hover{border-color:var(--accent);box-shadow:0 4px 16px rgba(26,107,60,.08);transform:translateY(-1px)}
.dir-card-name{font-size:14px;font-weight:600;letter-spacing:-.2px;color:var(--text);margin-bottom:3px}
.dir-card-loc{font-size:12px;color:var(--muted);margin-bottom:8px}
.dir-card-desc{font-size:12px;color:var(--muted);line-height:1.5}
.dir-card-footer{display:flex;align-items:center;justify-content:space-between;margin-top:10px;padding-top:10px;border-top:1px solid var(--border)}
.dir-card-dist{font-size:11px;color:var(--muted);font-family:monospace}
.dir-card-posts{font-size:11px;color:var(--accent);font-weight:500}
.dir-card-star{background:none;border:none;cursor:pointer;font-size:16px;padding:2px 4px;border-radius:6px;transition:all .15s;line-height:1;flex-shrink:0}
.dir-card-star:hover{transform:scale(1.2)}
.dir-card-star.saved{filter:drop-shadow(0 0 3px rgba(255,200,0,.6))}
.dir-card{position:relative}
@media(max-width:768px){.dir-grid{grid-template-columns:1fr}.page-header{padding:24px 20px}nav{padding:0 16px}.nav-links{display:none}}

.btn{background:var(--accent);color:#fff;border:none;border-radius:8px;padding:8px 18px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:background .15s}
.btn:hover{background:var(--accent-dim)}
.btn-outline{background:transparent;color:var(--accent);border:1.5px solid var(--accent);border-radius:8px;padding:7px 16px;font-size:13px;font-weight:500;cursor:pointer;font-family:'DM Sans',sans-serif;transition:all .15s}
.btn-outline:hover{background:var(--accent);color:#fff}
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
    <a class="nav-link" href="/browse" style="color:var(--accent);font-weight:600">Browse Casinos</a>
    <a class="nav-link" href="/poker-rooms">Poker Rooms</a>
    <a class="nav-link" href="/las-vegas-casinos">Las Vegas</a>
    <a class="nav-link" href="/bookmarks">⭐ Saved</a>
  </div>
  <div style="display:flex;align-items:center;gap:10px">
    <button class="dark-toggle" id="darkToggle" onclick="toggleDark()" title="Toggle dark mode">🌙</button>
    <span id="navProfileBadge" style="display:none;align-items:center;gap:6px;font-size:13px;color:var(--text);cursor:pointer" onclick="window.location=\'/bookmarks\'">
      <span id="navRankEmoji"></span><span id="navUsername" style="font-weight:600"></span>
    </span>
    <button class="btn-outline" id="signInBtn" onclick="showSignInModal()" style="font-size:13px;padding:7px 14px">Sign in</button>
    <button class="btn nav-post-btn" onclick="window.location='/'">+ Post Update</button>
  </div>
</nav>
<div class="mobile-profile-bar" id="mobileProfileBar">
  <div style="display:flex;align-items:center;gap:10px">
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
<div class="page-header">
  <div class="page-header-inner">
    <h1 class="page-title">Browse Casinos</h1>
    <p class="page-sub">Real-time floor conditions for ${CASINOS.length} casinos across the Northeast</p>
  </div>
</div>
<div class="directory-wrap">${statesHtml}</div>
<script>
function toggleDark() {
  const isDark = document.body.classList.toggle('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  document.getElementById('darkToggle').textContent = isDark ? '☀️' : '🌙';
}
if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark');
  document.getElementById('darkToggle').textContent = '☀️';
}

function getBookmarks() { return JSON.parse(localStorage.getItem('cc_bookmarks') || '[]'); }

function toggleStar(e, slug) {
  e.preventDefault();
  e.stopPropagation();
  const bookmarks = getBookmarks();
  const idx = bookmarks.indexOf(slug);
  const isSaved = idx === -1;
  if (isSaved) bookmarks.push(slug);
  else bookmarks.splice(idx, 1);
  localStorage.setItem('cc_bookmarks', JSON.stringify(bookmarks));
  renderStar(slug, isSaved);
  // Flash feedback
  const btn = document.getElementById('star-' + slug);
  if (btn) {
    btn.style.transform = 'scale(1.4)';
    setTimeout(() => btn.style.transform = '', 200);
  }
}

function renderStar(slug, saved) {
  const btn = document.getElementById('star-' + slug);
  if (!btn) return;
  btn.textContent = saved ? '⭐' : '☆';
  btn.classList.toggle('saved', saved);
  btn.title = saved ? 'Remove from saved' : 'Save casino';
}

// Init all stars on load
(function() {
  const bookmarks = getBookmarks();
  bookmarks.forEach(slug => renderStar(slug, true));
})();
</script>
<script>
function getNavCookieId(){let id=document.cookie.split(';').map(c=>c.trim()).find(c=>c.startsWith('cc_uid='));if(id)return id.split('=')[1];id='cc_'+Math.random().toString(36).slice(2)+Date.now().toString(36);document.cookie='cc_uid='+id+';max-age=31536000;path=/;SameSite=Lax';return id;}
const NAV_RANKS=[{name:'Rail Bird',min:0,emoji:'\u{1F3B0}'},{name:'Fish',min:50,emoji:'\u{1F41F}'},{name:'Regular',min:150,emoji:'\u2660\uFE0F'},{name:'Floor Regular',min:400,emoji:'\u{1F3B2}'},{name:'High Roller',min:800,emoji:'\u{1F4B0}'},{name:'Whale',min:1500,emoji:'\u{1F451}'}];
function getNavRank(pts){let r=NAV_RANKS[0];for(const rk of NAV_RANKS){if(pts>=rk.min)r=rk;}return r;}
async function loadNavProfile(){
  try{
    const cid=getNavCookieId();
    const em=localStorage.getItem('cc_email')||'';
    let url='/api/profile?cookie_id='+encodeURIComponent(cid);
    if(em)url+='&email='+encodeURIComponent(em);
    const resp=await fetch(url);
    const p=await resp.json();
    if(!p||(!p.points&&!p.email))return;
    const pts=p.points||0;
    const rank=getNavRank(pts);
    const next=NAV_RANKS.find(r=>r.min>pts);
    const bar=document.getElementById('mobileProfileBar');
    if(bar){
      bar.classList.add('visible');
      const el=function(id){return document.getElementById(id);};
      if(el('mpbRankEmoji'))el('mpbRankEmoji').textContent=rank.emoji;
      if(el('mpbRankName'))el('mpbRankName').textContent=rank.name;
      if(el('mpbPoints'))el('mpbPoints').textContent=pts.toLocaleString();
      if(el('mpbBar'))el('mpbBar').style.width=next?Math.round(((pts-rank.min)/(next.min-rank.min))*100)+'%':'100%';
      if(el('mpbNextLabel'))el('mpbNextLabel').textContent=next?(next.min-pts)+' pts to '+next.emoji+' '+next.name:'Max rank reached';
      if(el('mpbMaxLabel'))el('mpbMaxLabel').textContent=next?next.emoji+' '+next.name:'👑';
    }
    const badge=document.getElementById('navProfileBadge');
    const signInBtn=document.getElementById('signInBtn');
    if(badge&&p.username){
      const e1=document.getElementById('navRankEmoji');
      const e2=document.getElementById('navUsername');
      if(e1)e1.textContent=rank.emoji;
      if(e2)e2.textContent=p.username;
      badge.style.display='flex';
      if(signInBtn)signInBtn.style.display='none';
    }
  }catch(e){}
}
document.addEventListener('DOMContentLoaded',loadNavProfile);
</script>
<script>
function showSignInModal() {
  document.getElementById('globalSignInModal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'globalSignInModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px';
  modal.innerHTML = '<div style="background:var(--surface,#fff);border-radius:16px;padding:28px 24px;max-width:340px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.25)">'
    + '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px">'
    + '<div style="font-size:17px;font-weight:700;color:var(--text,#1a1a18)">&#127920; Sign in</div>'
    + '<button onclick="document.getElementById('globalSignInModal').remove()" style="background:none;border:none;font-size:22px;cursor:pointer;color:#888;line-height:1">&#215;</button>'
    + '</div>'
    + '<p style="font-size:13px;color:var(--muted,#888);margin:0 0 14px;line-height:1.6">Enter your email for a magic link &mdash; no password needed.</p>'
    + '<input id="globalSignInEmail" type="email" placeholder="your@email.com" style="width:100%;padding:10px 14px;border:1px solid var(--border,#e8e8e4);border-radius:8px;font-size:14px;font-family:'DM Sans',sans-serif;margin-bottom:10px;box-sizing:border-box;outline:none;background:var(--bg,#fff);color:var(--text,#1a1a18)">'
    + '<button id="globalSignInSendBtn" onclick="sendGlobalMagicLink()" style="width:100%;background:#1a6b3c;color:#fff;border:none;border-radius:8px;padding:12px;font-size:14px;font-weight:600;cursor:pointer;font-family:'DM Sans',sans-serif">&#9993;&#65039; Send Magic Link</button>'
    + '<div id="globalSignInStatus" style="font-size:12px;margin-top:10px;text-align:center;display:none"></div>'
    + '</div>';
  modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
  setTimeout(function() { document.getElementById('globalSignInEmail')?.focus(); }, 100);
}

async function sendGlobalMagicLink() {
  const email = document.getElementById('globalSignInEmail')?.value.trim();
  if (!email || !email.includes('@')) return;
  const status = document.getElementById('globalSignInStatus');
  const btn = document.getElementById('globalSignInSendBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
  status.style.display = 'block'; status.style.color = '#888'; status.textContent = 'Sending...';
  try {
    const cookieId = document.cookie.split(';').map(function(c){return c.trim();}).find(function(c){return c.startsWith('cc_uid=');})?.split('=')[1] || '';
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ action: 'magic_link', email: email, cookie_id: cookieId })
    });
    const data = await r.json();
    if (data.success) {
      status.style.color = '#1a6b3c';
      status.textContent = 'Check your email for the magic link!';
    } else {
      status.style.color = '#e74c3c';
      status.textContent = (data.error || 'Something went wrong');
    }
  } catch(e) {
    status.style.color = '#e74c3c';
    status.textContent = 'Connection error — please try again';
  }
  if (btn) { btn.disabled = false; btn.textContent = 'Send Magic Link'; }
}
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.status(200).send(html);
}

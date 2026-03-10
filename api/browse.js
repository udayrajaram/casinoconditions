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
  { name: 'JACK Cleveland Casino', location: 'Cleveland, OH', state: 'OH', miles: 450, slug: 'jack-cleveland-casino', desc: 'Downtown Cleveland casino with 100,000 sq ft of gaming, table games, and a poker room.' },
  { name: 'Hollywood Casino Columbus', location: 'Columbus, OH', state: 'OH', miles: 500, slug: 'hollywood-casino-columbus', desc: 'Columbus largest casino with 2,200+ slots, 100+ table games, and a poker room near downtown.' },
  { name: 'Hollywood Casino Toledo', location: 'Toledo, OH', state: 'OH', miles: 550, slug: 'hollywood-casino-toledo', desc: 'Northwest Ohio casino with 2,000+ slots, table games, a poker room, and live entertainment.' },
  { name: 'Hard Rock Rocksino Northfield Park', location: 'Northfield, OH', state: 'OH', miles: 450, slug: 'hard-rock-rocksino-northfield', desc: 'Hard Rock-branded Ohio racino with 2,300+ VLTs, live entertainment, and dining near Cleveland.' },
  { name: 'MGM Northfield Park', location: 'Northfield, OH', state: 'OH', miles: 450, slug: 'mgm-northfield-park', desc: 'MGM-operated Ohio casino with 2,500+ slots, table games, and a poker room southeast of Cleveland.' },
  { name: 'Hard Rock Hotel Casino Cincinnati', location: 'Cincinnati, OH', state: 'OH', miles: 600, slug: 'hard-rock-cincinnati', desc: 'Hard Rock Cincinnati casino with 2,000+ slots, 85+ table games, a poker room, and luxury hotel.' },
  { name: 'Mountaineer Casino Racetrack Resort', location: 'New Cumberland, WV', state: 'WV', miles: 350, slug: 'mountaineer-casino', desc: 'Historic WV casino resort on the Ohio River with 1,500+ slots, table games, poker, and horse racing.' },
  { name: 'Hollywood Casino at Charles Town Races', location: 'Charles Town, WV', state: 'WV', miles: 380, slug: 'hollywood-casino-charles-town', desc: 'Northern WV casino with 3,500+ slots, table games, poker, and live horse racing.' },
  { name: 'Mardi Gras Casino Resort', location: 'Cross Lanes, WV', state: 'WV', miles: 500, slug: 'mardi-gras-casino-wv', desc: 'West Virginia casino near Charleston with 900+ slots, table games, and dog racing.' },
  { name: 'Wheeling Island Hotel Casino Racetrack', location: 'Wheeling, WV', state: 'WV', miles: 380, slug: 'wheeling-island-casino', desc: 'Northern WV island casino with 1,400+ slots, table games, and greyhound racing.' },
  { name: 'Harrahs Cherokee Casino Resort', location: 'Cherokee, NC', state: 'NC', miles: 800, slug: 'harrahs-cherokee', desc: 'The Southeast\'s largest casino resort with 150,000 sq ft of gaming, a world-class poker room, and luxury hotel in the Smoky Mountains.' },
  { name: 'Harrahs Cherokee Valley River Casino', location: 'Murphy, NC', state: 'NC', miles: 850, slug: 'harrahs-cherokee-valley-river', desc: 'Western NC casino with 1,000+ slots, table games, and a hotel near the Georgia border.' },
  { name: 'Rivers Casino Portsmouth', location: 'Portsmouth, VA', state: 'VA', miles: 500, slug: 'rivers-casino-portsmouth', desc: 'Virginia\'s first casino with 1,300+ slots, 75+ table games, and a poker room in the Hampton Roads area.' },
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
  { name: 'Deadwood Mountain Grand', location: 'Deadwood, SD', state: 'SD', miles: 1600, slug: 'deadwood-mountain-grand', desc: 'One of Deadwood\'s largest casinos with 400+ slots, table games, and a hotel in the historic Black Hills.' },
  { name: 'Cadillac Jacks Gaming Resort', location: 'Deadwood, SD', state: 'SD', miles: 1600, slug: 'cadillac-jacks-deadwood', desc: 'Popular Deadwood casino resort with 300+ slots, table games, and a hotel in the Black Hills.' },
  { name: 'Dakota Sioux Casino Hotel', location: 'Watertown, SD', state: 'SD', miles: 1400, slug: 'dakota-sioux-casino', desc: 'Northeast South Dakota tribal casino with 300+ slots, table games, and a hotel.' },
  { name: 'Grand River Casino Resort', location: 'Mobridge, SD', state: 'SD', miles: 1500, slug: 'grand-river-casino', desc: 'Standing Rock Sioux casino on the Missouri River with 300+ slots, table games, and a resort.' },
  { name: 'Sky Dancer Hotel Casino', location: 'Belcourt, ND', state: 'ND', miles: 1500, slug: 'sky-dancer-casino', desc: 'Turtle Mountain Band casino in north-central North Dakota with slots, table games, and a hotel.' },
  { name: 'Spirit Lake Casino Resort', location: 'St. Michael, ND', state: 'ND', miles: 1400, slug: 'spirit-lake-casino', desc: 'Eastern North Dakota tribal casino with 900+ slots, table games, bingo, and a hotel.' },
  { name: '4 Bears Casino Lodge', location: 'New Town, ND', state: 'ND', miles: 1600, slug: '4-bears-casino', desc: 'MHA Nation casino on Lake Sakakawea with slots, table games, and a lodge in western North Dakota.' },
  { name: 'KwaTaqNuk Resort Casino', location: 'Polson, MT', state: 'MT', miles: 2000, slug: 'kwataqnuk-casino', desc: 'Confederated Salish and Kootenai Tribes casino on Flathead Lake with slots and table games in northwest Montana.' },
  { name: 'Charging Horse Casino', location: 'Lame Deer, MT', state: 'MT', miles: 1800, slug: 'charging-horse-casino', desc: 'Northern Cheyenne tribal casino in southeastern Montana with slots and gaming.' },
  { name: 'Coeur dAlene Casino', location: 'Worley, ID', state: 'ID', miles: 2200, slug: 'coeur-dalene-casino', desc: 'Idaho premier tribal casino resort with 1,600+ slots, table games, bingo, golf, and a luxury spa near Coeur dAlene.' },
  { name: 'Clearwater River Casino Lodge', location: 'Lewiston, ID', state: 'ID', miles: 2200, slug: 'clearwater-river-casino', desc: 'Nez Perce tribal casino in Lewiston with 700+ slots, table games, and a lodge.' },
  { name: 'Shoshone-Bannock Casino Hotel', location: 'Fort Hall, ID', state: 'ID', miles: 2100, slug: 'shoshone-bannock-casino', desc: 'Eastern Idaho tribal casino with 700+ slots, table games, and a hotel near Pocatello.' },
  { name: 'Wind Creek Casino Hotel Wetumpka', location: 'Wetumpka, AL', state: 'AL', miles: 900, slug: 'wind-creek-wetumpka', desc: 'Alabama largest casino with 3,000+ electronic bingo machines, table games, and a hotel near Montgomery.' },
  { name: 'Wind Creek Casino Hotel Atmore', location: 'Atmore, AL', state: 'AL', miles: 950, slug: 'wind-creek-atmore', desc: 'Poarch Band tribal casino with 2,200+ machines, table games, and a hotel in southern Alabama.' },
  { name: 'Wind Creek Casino Hotel Montgomery', location: 'Montgomery, AL', state: 'AL', miles: 900, slug: 'wind-creek-montgomery', desc: 'Central Alabama tribal casino with 1,700+ machines, table games, and a hotel in downtown Montgomery.' },
  { name: 'WarHorse Casino Lincoln', location: 'Lincoln, NE', state: 'NE', miles: 1200, slug: 'warhorse-casino-lincoln', desc: 'Nebraska newest casino at Lincoln historic racetrack with 1,500+ slots and table games.' },
  { name: 'WarHorse Casino Omaha', location: 'Omaha, NE', state: 'NE', miles: 1300, slug: 'warhorse-casino-omaha', desc: 'New Omaha casino with 1,000+ slots and table games.' },
  { name: 'Atlantis Casino Resort Spa', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'atlantis-casino-reno', desc: 'Upscale Reno casino resort with 61,000 sq ft of gaming, excellent dining, a spa, and luxury hotel.' },
  { name: 'Circus Circus Reno', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'circus-circus-reno', desc: 'Classic Reno casino with 60,000+ sq ft of gaming, affordable rooms, and family entertainment.' },
  { name: 'Eldorado Resort Casino Reno', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'eldorado-reno', desc: 'Downtown Reno casino resort with 78,000 sq ft of gaming, 1,800+ slots, table games, and a poker room.' },
  { name: 'Harrahs Reno', location: 'Reno, NV', state: 'NV', miles: 2700, slug: 'harrahs-reno', desc: 'Classic downtown Reno casino with 50,000+ sq ft of gaming, table games, and a hotel on Virginia Street.' },
  { name: 'Nugget Casino Resort Sparks', location: 'Sparks, NV', state: 'NV', miles: 2700, slug: 'nugget-casino-sparks', desc: 'Sparks casino resort with 70,000 sq ft of gaming, 1,400+ slots, table games, and a hotel near Reno.' },
  { name: 'Caesars Palace Lake Tahoe', location: 'Stateline, NV', state: 'NV', miles: 2650, slug: 'caesars-lake-tahoe', desc: 'Lake Tahoe casino resort with 45,000 sq ft of gaming, table games, poker, and ski resort access.' },
  { name: 'Eureka Casino Resort Mesquite', location: 'Mesquite, NV', state: 'NV', miles: 2600, slug: 'eureka-casino-mesquite', desc: 'Mesquite casino resort with 38,000 sq ft of gaming, golf, and a hotel near the Utah border.' },
  { name: 'Virgin Hotels Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'virgin-hotels-las-vegas', desc: 'Off-Strip Las Vegas casino hotel with 60,000 sq ft of gaming, table games, and stylish amenities.' },
  { name: 'Durango Casino Resort Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'durango-casino-las-vegas', desc: 'Station Casinos newest Las Vegas property with 83,000 sq ft of gaming, table games, and a luxury hotel in the southwest valley.' },
  { name: 'Fontainebleau Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'fontainebleau-las-vegas', desc: 'Las Vegas newest mega-resort with 150,000 sq ft of gaming, a massive poker room, luxury hotel, and world-class nightlife on the north Strip.' },
  { name: 'Resorts World Las Vegas', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'resorts-world-las-vegas', desc: 'Las Vegas first new Strip megaresort in over a decade with 117,000 sq ft of gaming, three hotel brands, and the largest sportsbook on the Strip.' },
  { name: 'Circa Resort Casino Downtown', location: 'Las Vegas, NV', state: 'NV', miles: 2800, slug: 'circa-resort-las-vegas', desc: 'Downtown Las Vegas adults-only resort with 45,000 sq ft of gaming, a massive sportsbook, and the world largest pool amphitheater.' },
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
  { name: 'Saratoga Casino Black Hawk', location: 'Black Hawk, CO', state: 'CO', miles: 1700, slug: 'saratoga-casino-black-hawk', desc: 'Colorado mountain casino with slots, table games, and dining in historic Black Hawk.' },
  { name: 'Ameristar Casino East Chicago', location: 'East Chicago, IN', state: 'IN', miles: 700, slug: 'ameristar-east-chicago', desc: 'Northwest Indiana casino with 53,000 sq ft of gaming, 1,600+ slots, table games, and a hotel near Chicago.' },
  { name: 'Grand Victoria Casino Elgin', location: 'Elgin, IL', state: 'IL', miles: 750, slug: 'grand-victoria-casino', desc: 'Fox River casino west of Chicago with 900+ slots, table games, and riverboat dining.' },
  { name: 'Harrahs Joliet', location: 'Joliet, IL', state: 'IL', miles: 750, slug: 'harrahs-joliet', desc: 'Southwest Chicago suburb casino with 900+ slots, table games, poker, and a hotel on the Des Plaines River.' },
  { name: 'Spirit Mountain Casino', location: 'Grand Ronde, OR', state: 'OR', miles: 2900, slug: 'spirit-mountain-casino-oregon', desc: 'Grand Ronde tribal casino southwest of Portland with 2,000+ slots, table games, bingo, and a hotel.' },
  { name: 'Ilani Casino Resort', location: 'Ridgefield, WA', state: 'WA', miles: 2900, slug: 'ilani-casino-resort', desc: 'Cowlitz tribal casino just north of Portland with 100,000 sq ft of gaming, table games, poker, and a hotel.' },
  { name: 'Soaring Eagle Casino Resort', location: 'Mount Pleasant, MI', state: 'MI', miles: 600, slug: 'soaring-eagle-casino', desc: 'Central Michigan tribal casino resort with 4,800+ slots, table games, poker, bingo, and a hotel.' },
  { name: 'Four Winds New Buffalo', location: 'New Buffalo, MI', state: 'MI', miles: 650, slug: 'four-winds-new-buffalo', desc: 'Southwest Michigan casino with 3,000+ slots, table games, poker, and a hotel near Indiana border.' },
  { name: 'FireKeepers Casino Hotel', location: 'Battle Creek, MI', state: 'MI', miles: 650, slug: 'firekeepers-casino', desc: 'Nottawaseppi Huron Band casino in Battle Creek with 3,000+ slots, table games, a poker room, and hotel.' },
  { name: 'Oxford Casino Hotel', location: 'Oxford, ME', state: 'ME', miles: 350, slug: 'oxford-casino', desc: 'Maine only full-service casino with 850+ slots, table games, poker, and a hotel in Oxford County.' },
  // ── Florida ──────────────────────────────────────────────────────
  { name: 'Seminole Casino Coconut Creek', location: 'Coconut Creek, FL', state: 'FL', miles: 1270, slug: 'seminole-casino-coconut-creek', desc: 'Seminole Casino Coconut Creek features 2,400+ slots, 70+ table games, and a 26-table poker room near Fort Lauderdale.' },
  { name: 'Miccosukee Resort Gaming', location: 'Miami, FL', state: 'FL', miles: 1340, slug: 'miccosukee-resort-gaming', desc: 'Miccosukee Resort Gaming offers 1,900+ slots and a poker room on the edge of the Florida Everglades near Miami.' },
  { name: 'Seminole Casino Brighton', location: 'Okeechobee, FL', state: 'FL', miles: 1180, slug: 'seminole-casino-brighton', desc: 'Seminole Casino Brighton is a smaller tribal casino featuring slots and bingo in rural Okeechobee County.' },
  { name: 'Seminole Casino Hotel Immokalee', location: 'Immokalee, FL', state: 'FL', miles: 1210, slug: 'seminole-casino-immokalee', desc: 'Seminole Casino Hotel Immokalee offers 1,300+ slots and table games in southwest Florida near Naples.' },

  // ── Minnesota ─────────────────────────────────────────────────────
  { name: 'Grand Casino Hinckley', location: 'Hinckley, MN', state: 'MN', miles: 1300, slug: 'grand-casino-hinckley', desc: 'Grand Casino Hinckley features 2,100+ slot machines, table games, and bingo about 90 minutes north of Minneapolis.' },
  { name: 'Grand Casino Mille Lacs', location: 'Onamia, MN', state: 'MN', miles: 1310, slug: 'grand-casino-mille-lacs', desc: 'Grand Casino Mille Lacs offers 1,600+ slots, table games, and bingo on the shores of Lake Mille Lacs.' },
  { name: 'Treasure Island Resort Casino', location: 'Red Wing, MN', state: 'MN', miles: 1240, slug: 'treasure-island-resort-mn', desc: 'Treasure Island Resort Casino features 2,700+ slots, table games, bingo, and a poker room along the Mississippi River near Red Wing.' },
  { name: 'Black Bear Casino Resort', location: 'Carlton, MN', state: 'MN', miles: 1420, slug: 'black-bear-casino', desc: 'Black Bear Casino Resort offers 2,000+ slot machines, table games, and bingo near Duluth in northern Minnesota.' },
  { name: 'Shooting Star Casino Hotel', location: 'Mahnomen, MN', state: 'MN', miles: 1520, slug: 'shooting-star-casino', desc: 'Shooting Star Casino Hotel features 1,200+ slots and table games in the White Earth Nation in northwestern Minnesota.' },
  { name: 'Jackpot Junction Casino Hotel', location: 'Morton, MN', state: 'MN', miles: 1310, slug: 'jackpot-junction-casino', desc: 'Jackpot Junction Casino Hotel offers 1,500+ slots, table games, and bingo in southwestern Minnesota.' },

  // ── Wisconsin ─────────────────────────────────────────────────────
  { name: 'Potawatomi Hotel Casino', location: 'Milwaukee, WI', state: 'WI', miles: 860, slug: 'potawatomi-hotel-casino', desc: 'Potawatomi Hotel Casino in Milwaukee features 3,000+ slots, 130+ table games, a 25-table poker room, and multiple restaurants.' },
  { name: 'Ho-Chunk Gaming Wisconsin Dells', location: 'Baraboo, WI', state: 'WI', miles: 920, slug: 'ho-chunk-gaming-wisconsin-dells', desc: 'Ho-Chunk Gaming Wisconsin Dells offers 2,100+ slots, table games, and poker near the Wisconsin Dells resort area.' },
  { name: 'Oneida Casino', location: 'Green Bay, WI', state: 'WI', miles: 1010, slug: 'oneida-casino', desc: 'Oneida Casino in Green Bay features 3,000+ slots, table games, and multiple gaming facilities across the Green Bay area.' },
  { name: 'Menominee Casino Resort', location: 'Keshena, WI', state: 'WI', miles: 1000, slug: 'menominee-casino-resort', desc: 'Menominee Casino Resort features 900+ slots and table games in the Menominee Indian Reservation in northeastern Wisconsin.' },
  { name: 'Lake of the Torches Resort Casino', location: 'Lac du Flambeau, WI', state: 'WI', miles: 1110, slug: 'lake-of-the-torches-casino', desc: 'Lake of the Torches Resort Casino offers 800+ slots and table games in the heart of Wisconsin lake country.' },
  { name: 'Ho-Chunk Gaming Madison', location: 'Madison, WI', state: 'WI', miles: 890, slug: 'ho-chunk-gaming-madison', desc: 'Ho-Chunk Gaming Madison features 750+ slot machines and electronic table games near the Wisconsin state capital.' },
  { name: 'Northwoods Casino', location: 'Carter, WI', state: 'WI', miles: 1050, slug: 'northwoods-casino', desc: 'Northwoods Casino is a Forest County Potawatomi tribal casino featuring slots and table games in northern Wisconsin.' },

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
  { name: 'Naskila Gaming', location: 'Livingston, TX', state: 'TX', miles: 1600, slug: 'naskila-gaming', desc: 'Naskila Gaming is a tribal casino near Livingston, TX featuring Class II electronic gaming machines operated by the Alabama-Coushatta Tribe.' },
  { name: 'Speaking Rock Entertainment Center', location: 'El Paso, TX', state: 'TX', miles: 1900, slug: 'speaking-rock-el-paso', desc: 'Speaking Rock Entertainment Center is a Tigua tribal gaming facility in El Paso featuring bingo and electronic gaming.' },
  { name: 'Ysleta del Sur Pueblo Casino', location: 'El Paso, TX', state: 'TX', miles: 1900, slug: 'ysleta-del-sur-casino', desc: 'Ysleta del Sur Pueblo operates tribal gaming in El Paso with bingo and electronic games near the Texas-New Mexico border.' },

  // ── Minnesota expand ───────────────────────────────────────────────
  { name: 'Running Aces Casino Hotel', location: 'Columbus, MN', state: 'MN', miles: 1195, slug: 'running-aces-casino', desc: 'Running Aces Casino Hotel features 900+ slots, table games, and live harness racing north of Minneapolis-St. Paul.' },
  { name: "Prairie's Edge Casino Resort", location: 'Granite Falls, MN', state: 'MN', miles: 1340, slug: 'prairies-edge-casino', desc: "Prairie's Edge Casino Resort offers 700+ slots, table games, and bingo on the Upper Sioux Community in southwestern Minnesota." },
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
  { name: 'WarHorse Casino Grand Island', location: 'Grand Island, NE', state: 'NE', miles: 1400, slug: 'warhorse-casino-grand-island', desc: 'WarHorse Casino Grand Island is a newer Nebraska gaming facility featuring slot machines and electronic table games.' },

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
  { name: 'Passamaquoddy Tribe Casino', location: 'Princeton, ME', state: 'ME', miles: 370, slug: 'passamaquoddy-tribe-casino', desc: 'The Passamaquoddy Tribe operates gaming in Princeton, Maine with electronic gaming machines on the Pleasant Point Reservation.' },

  // ── Montana expand ─────────────────────────────────────────────────
  { name: 'Glacier Peaks Casino', location: 'Browning, MT', state: 'MT', miles: 2150, slug: 'glacier-peaks-casino', desc: 'Glacier Peaks Casino on the Blackfeet Indian Reservation in Browning offers slot machines near Glacier National Park.' },
  { name: 'Little Big Horn Casino', location: 'Crow Agency, MT', state: 'MT', miles: 1730, slug: 'little-big-horn-casino', desc: 'Little Big Horn Casino on the Crow Reservation features slots and gaming near the Little Bighorn Battlefield in southeastern Montana.' },
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
              <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
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
html{overflow-x:hidden}body{overflow-x:hidden;transition:background .2s,color .2s}
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
@media(max-width:768px){#signInBtn{font-size:12px;padding:5px 10px}.nav-post-btn{display:none}.dir-grid{grid-template-columns:1fr}.page-header{padding:24px 20px}nav{padding:0 16px}.nav-links{display:none}}

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
  <div style="display:flex;align-items:center;gap:8px;flex-shrink:0">
    <button class="dark-toggle" id="darkToggle" onclick="toggleDark()" title="Toggle dark mode">🌙</button>
    <span id="navProfileBadge" style="display:none;align-items:center;gap:6px;font-size:13px;color:var(--text);cursor:pointer" onclick="window.location=\'/bookmarks\'">
      <span id="navRankEmoji"></span><span id="navUsername" style="font-weight:600"></span>
    </span>
    <button class="btn-outline" id="signInBtn" onclick="showSignInModal()" style="font-size:13px;padding:7px 14px">Sign in</button>
    <button class="btn nav-post-btn" onclick="window.location='/'">+ Post Update</button>
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
    if(!p||(!p.email&&!(p.points>0)))return;
    const pts=p.points||0;
    const rank=getNavRank(pts);
    const next=NAV_RANKS.find(r=>r.min>pts);
    const bar=document.getElementById('mobileProfileBar');
    if(bar&&(p.email||pts>0)){
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
<script></script>
<script>
function showSignInModal() {
  document.getElementById('globalSignInModal')?.remove();
  const modal = document.createElement('div');
  modal.id = 'globalSignInModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9999;display:flex;align-items:center;justify-content:center;padding:20px';
  const box = document.createElement('div');
  box.style.cssText = 'background:var(--surface,#fff);border-radius:16px;padding:28px 24px;max-width:340px;width:100%;box-shadow:0 20px 60px rgba(0,0,0,.25)';
  const title = document.createElement('div');
  title.style.cssText = 'display:flex;align-items:center;justify-content:space-between;margin-bottom:16px';
  title.innerHTML = '<div style="font-size:17px;font-weight:700;color:var(--text,#1a1a18)">🎰 Sign in</div>';
  const closeBtn = document.createElement('button');
  closeBtn.innerHTML = '&times;';
  closeBtn.style.cssText = 'background:none;border:none;font-size:22px;cursor:pointer;color:#888;line-height:1';
  closeBtn.onclick = function() { modal.remove(); };
  title.appendChild(closeBtn);
  box.appendChild(title);
  const desc = document.createElement('p');
  desc.style.cssText = 'font-size:13px;color:var(--muted,#888);margin:0 0 14px;line-height:1.6';
  desc.textContent = 'Enter your email for a magic link \u2014 no password needed.';
  box.appendChild(desc);
  const emailInput = document.createElement('input');
  emailInput.id = 'globalSignInEmail';
  emailInput.type = 'email';
  emailInput.placeholder = 'your@email.com';
  emailInput.style.cssText = 'width:100%;padding:10px 14px;border:1px solid var(--border,#e8e8e4);border-radius:8px;font-size:14px;margin-bottom:10px;box-sizing:border-box;outline:none;background:var(--bg,#fff);color:var(--text,#1a1a18)';
  box.appendChild(emailInput);
  const sendBtn = document.createElement('button');
  sendBtn.id = 'globalSignInSendBtn';
  sendBtn.textContent = '\u2709\uFE0F Send Magic Link';
  sendBtn.style.cssText = 'width:100%;background:#1a6b3c;color:#fff;border:none;border-radius:8px;padding:12px;font-size:14px;font-weight:600;cursor:pointer';
  sendBtn.onclick = sendGlobalMagicLink;
  box.appendChild(sendBtn);
  const status = document.createElement('div');
  status.id = 'globalSignInStatus';
  status.style.cssText = 'font-size:12px;margin-top:10px;text-align:center;display:none';
  box.appendChild(status);
  modal.appendChild(box);
  modal.addEventListener('click', function(e) { if (e.target === modal) modal.remove(); });
  document.body.appendChild(modal);
  setTimeout(function() { emailInput.focus(); }, 100);
}

async function sendGlobalMagicLink() {
  const email = document.getElementById('globalSignInEmail')?.value.trim();
  if (!email || !email.includes('@')) return;
  const status = document.getElementById('globalSignInStatus');
  const btn = document.getElementById('globalSignInSendBtn');
  if (btn) { btn.disabled = true; btn.textContent = 'Sending...'; }
  if (status) { status.style.display = 'block'; status.style.color = '#888'; status.textContent = 'Sending...'; }
  try {
    const cookieId = document.cookie.split(';').map(function(c){return c.trim();}).find(function(c){return c.startsWith('cc_uid=');})?.split('=')[1] || '';
    const r = await fetch('/api/auth', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({ action: 'magic_link', email: email, cookie_id: cookieId })
    });
    const data = await r.json();
    if (status) {
      if (data.success) {
        status.style.color = '#1a6b3c';
        status.textContent = '\u2705 Check your email for the magic link!';
      } else {
        status.style.color = '#e74c3c';
        status.textContent = data.error || 'Something went wrong';
      }
    }
  } catch(e) {
    if (status) { status.style.color = '#e74c3c'; status.textContent = 'Connection error \u2014 please try again'; }
  }
  if (btn) { btn.disabled = false; btn.textContent = '\u2709\uFE0F Send Magic Link'; }
}
</script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate');
  res.status(200).send(html);
}

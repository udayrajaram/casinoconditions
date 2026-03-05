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
  { name: 'Bellagio', state: 'NV', lat: 36.1129, lon: -115.1765 },
  { name: 'MGM Grand Las Vegas', state: 'NV', lat: 36.1025, lon: -115.1701 },
  { name: 'Caesars Palace', state: 'NV', lat: 36.1162, lon: -115.1745 },
  { name: 'The Venetian Las Vegas', state: 'NV', lat: 36.1210, lon: -115.1697 },
  { name: 'Wynn Las Vegas', state: 'NV', lat: 36.1265, lon: -115.1672 },
  { name: 'Aria Resort & Casino', state: 'NV', lat: 36.1072, lon: -115.1757 },
  { name: 'Cosmopolitan of Las Vegas', state: 'NV', lat: 36.1096, lon: -115.1762 },
  { name: 'Paris Las Vegas', state: 'NV', lat: 36.1124, lon: -115.1706 },
  { name: "Harrah's Las Vegas", state: 'NV', lat: 36.1151, lon: -115.1719 },
  { name: 'Planet Hollywood Las Vegas', state: 'NV', lat: 36.1092, lon: -115.1714 },
  { name: 'Mandalay Bay', state: 'NV', lat: 36.0908, lon: -115.1762 },
  { name: 'New York-New York', state: 'NV', lat: 36.1023, lon: -115.1745 },
  { name: 'Treasure Island', state: 'NV', lat: 36.1247, lon: -115.1714 },
  { name: 'Golden Nugget Las Vegas', state: 'NV', lat: 36.1706, lon: -115.1422 },
  { name: "Binion's Gambling Hall", state: 'NV', lat: 36.1697, lon: -115.1440 },
  // Reno / Tahoe
  { name: 'Peppermill Resort Spa Casino', state: 'NV', lat: 39.5114, lon: -119.7817 },
  { name: 'Grand Sierra Resort', state: 'NV', lat: 39.5296, lon: -119.7781 },
  { name: 'Silver Legacy Resort Casino', state: 'NV', lat: 39.5274, lon: -119.8166 },
  { name: 'Atlantis Casino Resort Spa', state: 'NV', lat: 39.4968, lon: -119.7817 },
  { name: "Harrah's Lake Tahoe", state: 'NV', lat: 38.9597, lon: -119.9438 },
  { name: 'Harveys Lake Tahoe', state: 'NV', lat: 38.9592, lon: -119.9443 },
  { name: 'Hard Rock Hotel & Casino Lake Tahoe', state: 'NV', lat: 38.9601, lon: -119.9445 },
  // Detroit
  { name: 'MGM Grand Detroit', state: 'MI', lat: 42.3314, lon: -83.0499 },
  { name: 'MotorCity Casino Hotel', state: 'MI', lat: 42.3531, lon: -83.0874 },
  { name: 'Greektown Casino-Hotel', state: 'MI', lat: 42.3326, lon: -83.0420 },
  // Chicago / IL / IN
  { name: 'Rivers Casino Des Plaines', state: 'IL', lat: 42.0334, lon: -87.8914 },
  { name: 'Hollywood Casino Aurora', state: 'IL', lat: 41.7569, lon: -88.3201 },
  { name: 'Horseshoe Hammond', state: 'IN', lat: 41.6305, lon: -87.4996 },
  { name: 'Hard Rock Casino Northern Indiana', state: 'IN', lat: 41.5784, lon: -87.3631 },
  { name: 'Four Winds South Bend', state: 'IN', lat: 41.6764, lon: -86.2520 },
  // Mississippi
  { name: 'Beau Rivage Resort & Casino', state: 'MS', lat: 30.3939, lon: -88.8854 },
  { name: 'Hard Rock Hotel & Casino Biloxi', state: 'MS', lat: 30.3957, lon: -88.8745 },
  { name: 'IP Casino Resort Spa', state: 'MS', lat: 30.3914, lon: -88.8800 },
  { name: 'Scarlet Pearl Casino Resort', state: 'MS', lat: 30.4303, lon: -88.9015 },
  { name: 'Golden Nugget Biloxi', state: 'MS', lat: 30.4010, lon: -88.8723 },
  { name: 'Hollywood Casino Tunica', state: 'MS', lat: 34.6482, lon: -90.3673 },
  // Louisiana
  { name: "Harrah's New Orleans", state: 'LA', lat: 29.9490, lon: -90.0699 },
  { name: "L'Auberge Casino Resort Baton Rouge", state: 'LA', lat: 30.4151, lon: -91.1637 },
  { name: "L'Auberge Casino & Hotel Lake Charles", state: 'LA', lat: 30.2115, lon: -93.2174 },
  { name: 'Coushatta Casino Resort', state: 'LA', lat: 30.4817, lon: -92.8451 },
  { name: 'Boomtown Casino New Orleans', state: 'LA', lat: 29.8979, lon: -90.0824 },
  // Florida
  { name: 'Seminole Hard Rock Hotel & Casino Hollywood', state: 'FL', lat: 26.0094, lon: -80.1773 },
  { name: 'Seminole Casino Coconut Creek', state: 'FL', lat: 26.2726, lon: -80.1892 },
  { name: 'Seminole Hard Rock Hotel & Casino Tampa', state: 'FL', lat: 27.9771, lon: -82.4714 },
  { name: 'Magic City Casino', state: 'FL', lat: 25.7771, lon: -80.2284 },
  { name: 'Isle Casino Racing Pompano Park', state: 'FL', lat: 26.2361, lon: -80.1242 },
  // Colorado
  { name: 'Ameristar Casino Black Hawk', state: 'CO', lat: 39.7989, lon: -105.4872 },
  { name: 'Monarch Casino & Resort', state: 'CO', lat: 39.7993, lon: -105.4854 },
  { name: 'Isle Casino Hotel Black Hawk', state: 'CO', lat: 39.7985, lon: -105.4882 },
  { name: "Bronco Billy's Casino", state: 'CO', lat: 38.7441, lon: -105.1783 },
  { name: 'Sky Ute Casino Resort', state: 'CO', lat: 37.1108, lon: -107.6306 },
  // Oklahoma
  { name: 'WinStar World Casino', state: 'OK', lat: 33.7791, lon: -97.1434 },
  { name: 'Choctaw Casino Resort Durant', state: 'OK', lat: 33.9826, lon: -96.4083 },
  { name: 'Hard Rock Hotel & Casino Tulsa', state: 'OK', lat: 36.2047, lon: -95.8569 },
  { name: 'Osage Casino Hotel Tulsa', state: 'OK', lat: 36.2584, lon: -95.9558 },
  { name: 'Cherokee Casino & Hotel Roland', state: 'OK', lat: 35.4134, lon: -94.5241 },
  // Arizona
  { name: 'Talking Stick Resort', state: 'AZ', lat: 33.5726, lon: -111.8910 },
  { name: 'Wild Horse Pass Hotel & Casino', state: 'AZ', lat: 33.2855, lon: -111.9353 },
  { name: 'Casino Arizona', state: 'AZ', lat: 33.5729, lon: -111.8903 },
  { name: 'Desert Diamond Casino West Valley', state: 'AZ', lat: 33.5356, lon: -112.2632 },
  { name: 'Fort McDowell Casino', state: 'AZ', lat: 33.6573, lon: -111.6865 },
  // California
  { name: 'Pechanga Resort Casino', state: 'CA', lat: 33.4722, lon: -117.0634 },
  { name: 'Morongo Casino Resort & Spa', state: 'CA', lat: 33.9290, lon: -116.9712 },
  { name: 'Agua Caliente Casino Cathedral City', state: 'CA', lat: 33.7805, lon: -116.4645 },
  { name: 'Barona Resort & Casino', state: 'CA', lat: 32.8705, lon: -116.8627 },
  { name: 'Sycuan Casino Resort', state: 'CA', lat: 32.8218, lon: -116.8053 },
  { name: 'San Manuel Casino', state: 'CA', lat: 34.1481, lon: -117.2626 },
  { name: 'Thunder Valley Casino Resort', state: 'CA', lat: 38.9066, lon: -121.2878 },
  { name: 'Cache Creek Casino Resort', state: 'CA', lat: 38.7926, lon: -122.1558 },
  { name: 'Graton Resort & Casino', state: 'CA', lat: 38.3462, lon: -122.6946 },
  { name: 'Soboba Casino Resort', state: 'CA', lat: 33.8053, lon: -116.9376 },
  // Pacific Northwest
  { name: 'Tulalip Resort Casino', state: 'WA', lat: 48.0587, lon: -122.1152 },
  { name: 'Snoqualmie Casino', state: 'WA', lat: 47.5295, lon: -121.8374 },
  { name: 'Muckleshoot Casino', state: 'WA', lat: 47.3057, lon: -122.1474 },
  { name: 'Ilani Casino Resort', state: 'WA', lat: 45.8357, lon: -122.7487 },
  { name: 'Spirit Mountain Casino', state: 'OR', lat: 45.0637, lon: -123.5720 },
  // Midwest
  { name: 'Potawatomi Hotel & Casino', state: 'WI', lat: 43.0389, lon: -87.9384 },
  { name: 'Mystic Lake Casino Hotel', state: 'MN', lat: 44.7271, lon: -93.4271 },
  { name: 'Ameristar Casino Kansas City', state: 'MO', lat: 39.1053, lon: -94.5808 },
  { name: 'Hollywood Casino St. Louis', state: 'MO', lat: 38.7162, lon: -90.4617 },
  { name: 'Prairie Band Casino & Resort', state: 'KS', lat: 39.4194, lon: -95.7030 },
  // Mid-Atlantic
  { name: 'MGM National Harbor', state: 'MD', lat: 38.7823, lon: -77.0134 },
  { name: 'Live! Casino & Hotel Maryland', state: 'MD', lat: 39.1657, lon: -76.7282 },
  { name: 'Hollywood Casino Perryville', state: 'MD', lat: 39.5634, lon: -76.0728 },
  { name: 'Rivers Casino Philadelphia', state: 'PA', lat: 40.0003, lon: -75.1344 },
  { name: 'Hollywood Casino at Penn National', state: 'PA', lat: 40.3153, lon: -76.6778 },
  { name: 'Mohegan Sun Pocono', state: 'PA', lat: 41.2698, lon: -75.8457 },
  { name: 'Valley Forge Casino Resort', state: 'PA', lat: 40.0912, lon: -75.3824 },
  { name: 'Presque Isle Downs & Casino', state: 'PA', lat: 42.0864, lon: -80.1554 },
  // Upstate NY
  { name: 'Turning Stone Resort Casino', state: 'NY', lat: 43.1024, lon: -75.5957 },
  { name: 'Rivers Casino & Resort Schenectady', state: 'NY', lat: 42.8149, lon: -73.9496 },
  { name: 'del Lago Resort & Casino', state: 'NY', lat: 42.9134, lon: -76.8713 },
  { name: 'Tioga Downs Casino Resort', state: 'NY', lat: 42.0147, lon: -76.5775 },
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
  'Peppermill Resort Spa Casino': {
    bars: ["Fireside Lounge","Romanza","Sports Bar","Edge Nightclub"],
    restaurants: ["Oceano","Biscotti's","Café Espresso","White Orchid"],
    slots: ["the high limit room","the main casino floor","the Reno Belle slots"],
    poker: ["the poker room"],
  },
  'Grand Sierra Resort': {
    bars: ["Brew Brothers","Grand Entertainment Complex bar","Splash Pool Bar"],
    restaurants: ["Charlie Palmer Steak","Riva","Grand Buffet","Crafted Grill"],
    slots: ["the main casino floor","the high limit room","the slots lounge"],
    poker: ["the poker room"],
  },
  'Silver Legacy Resort Casino': {
    bars: ["Silver Baron Lounge","Sports Book Bar","the main bar"],
    restaurants: ["Fortuna Buffet","El Dorado Sushi","Sweetwater Grille"],
    slots: ["the main casino floor","the high limit slots","under the dome"],
    poker: ["the poker room"],
  },
  'Atlantis Casino Resort Spa': {
    bars: ["Toucan Charlie's Bar","Purple Parrot Bar","Spa bar"],
    restaurants: ["Bistro Napa","Toucan Charlie's Buffet","Oyster Bar","Sushi Bar"],
    slots: ["the main casino floor","the high limit room","the slots area"],
    poker: ["the poker room"],
  },
  "Harrah's Lake Tahoe": {
    bars: ["Cabo Wabo Cantina bar","Reflections Bar","South Shore Room bar"],
    restaurants: ["Cabo Wabo Cantina","Friday's Station","Forest Buffet"],
    slots: ["the main casino floor","the high limit area","the slots lounge"],
    poker: ["the poker room"],
  },
  'Harveys Lake Tahoe': {
    bars: ["Cabo Wabo Cantina bar","19 Bar & Grill","the casino bar"],
    restaurants: ["Sage Room Steak House","Llewellyn's","Hard Rock Cafe"],
    slots: ["the main casino floor","the high limit room","the rooftop slots"],
    poker: ["the poker room"],
  },
  'Hard Rock Hotel & Casino Lake Tahoe': {
    bars: ["Center Bar","the casino bar","the pool bar"],
    restaurants: ["Hard Rock Cafe","Fuel","the buffet"],
    slots: ["the main casino floor","the high limit room"],
    poker: ["the poker room"],
  },
  'MGM Grand Detroit': {
    bars: ["TAP at MGM Grand","Detroit Sports Bar","V Lounge"],
    restaurants: ["Wolfgang Puck Steak","Saltwater","Breeze","Extra Innings"],
    slots: ["the high limit room","the main casino floor","the slots lounge"],
    poker: ["the poker room"],
  },
  'MotorCity Casino Hotel': {
    bars: ["Spectators Sports Bar","Assembly Line Bar","the casino bar"],
    restaurants: ["Iridescence","The Assembly Line Burgers","Nico's Pizza"],
    slots: ["the main casino floor","the high limit room","the slots area"],
    poker: ["the poker room"],
  },
  'Greektown Casino-Hotel': {
    bars: ["Asteria Bar","Sports Lounge","the main bar"],
    restaurants: ["Fishbones","The Promenade","Monroe Street Cafe"],
    slots: ["the main casino floor","the high limit slots","the gaming floor"],
    poker: ["the poker room"],
  },
  'Rivers Casino Des Plaines': {
    bars: ["Sidelines Sports Bar","Pour 24","Star Lounge"],
    restaurants: ["Firecreek","80 Below","Fairview","Iron & Grain"],
    slots: ["the main casino floor","the high limit room","the slots lounge"],
    poker: ["the poker room"],
  },
  'Hollywood Casino Aurora': {
    bars: ["Octane Bar","Sports Bar","the casino bar"],
    restaurants: ["Final Cut Steakhouse","Epic Buffet","The Spread"],
    slots: ["the main casino floor","the high limit room","the riverboat slots"],
    poker: ["the poker room"],
  },
  'Horseshoe Hammond': {
    bars: ["Booze Brothers","Spectators Sports Bar","the casino bar"],
    restaurants: ["Jack Binion's Steak","Spread Restaurant","Café Horseshoe"],
    slots: ["the main casino floor","the high limit room","the slots area"],
    poker: ["the poker room","the World Series of Poker room"],
  },
  'Hard Rock Casino Northern Indiana': {
    bars: ["Center Bar","Rock Spa bar","the casino bar"],
    restaurants: ["Council Oak Steaks & Seafood","Hard Rock Cafe","Asylum","the buffet"],
    slots: ["the main casino floor","the high limit room","the Hard Rock slots"],
    poker: ["the poker room"],
  },
  'Four Winds South Bend': {
    bars: ["Copper Rock Coffee","the casino bar","Pokagon Lounge"],
    restaurants: ["Copper Rock Steak","The Buffet","Silver Creek Grille"],
    slots: ["the main casino floor","the high limit room","the slots area"],
    poker: ["the poker room"],
  },
  'Beau Rivage Resort & Casino': {
    bars: ["BR Prime bar","Jia bar","Coast Bar & Grill"],
    restaurants: ["BR Prime","Coast","Coastal Kitchen","Lé Café"],
    slots: ["the high limit salon","the main casino floor","the slots lounge"],
    poker: ["the poker room"],
  },
  'Hard Rock Hotel & Casino Biloxi': {
    bars: ["Center Bar","Hard Rock Live bar","the casino bar"],
    restaurants: ["Hard Rock Cafe","Half Shell Oyster House","Ruth's Chris Steak House"],
    slots: ["the main casino floor","the high limit room","the beachfront slots"],
    poker: ["the poker room"],
  },
  'IP Casino Resort Spa': {
    bars: ["Neon Bar","Studio Lounge","the casino bar"],
    restaurants: ["Flying Fish","Bacini's","Coral Reef Buffet"],
    slots: ["the main casino floor","the high limit room","the IP slots"],
    poker: ["the poker room"],
  },
  'Scarlet Pearl Casino Resort': {
    bars: ["the casino bar","Topaz Lounge","the sports bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit slots","the gaming floor"],
    poker: ["the poker room"],
  },
  'Golden Nugget Biloxi': {
    bars: ["Vic & Anthony's Bar","the casino bar","Pool Bar"],
    restaurants: ["Vic & Anthony's Steakhouse","Grotto Italian","Chart House"],
    slots: ["the main casino floor","the high limit room","the Gold slots"],
    poker: ["the poker room"],
  },
  'Hollywood Casino Tunica': {
    bars: ["the casino bar","Sports Bar","the lounge"],
    restaurants: ["Final Cut Steakhouse","Epic Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Delta slots"],
    poker: ["the poker room"],
  },
  "Harrah's New Orleans": {
    bars: ["Fulton Street Bar","the casino bar","Masquerade Bar"],
    restaurants: ["Ruth's Chris Steak House","Café Harrah's","GW Fins","Manning's"],
    slots: ["the main casino floor","the high limit room","the Mardi Gras slots"],
    poker: ["the poker room"],
  },
  "L'Auberge Casino Resort Baton Rouge": {
    bars: ["Landry's Seafood bar","the casino bar","Pool Bar"],
    restaurants: ["Morton's The Steakhouse","Landry's Seafood","Grill Room"],
    slots: ["the main casino floor","the high limit room","the Louisiana slots"],
    poker: ["the poker room"],
  },
  "L'Auberge Casino & Hotel Lake Charles": {
    bars: ["the casino bar","SugarCane Bar","Pool Bar"],
    restaurants: ["Jack Daniel's Steakhouse","Ingredients","the buffet"],
    slots: ["the main casino floor","the high limit room","the slots lounge"],
    poker: ["the poker room"],
  },
  'Coushatta Casino Resort': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["Coushatta Steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Coushatta slots"],
    poker: ["the poker room"],
  },
  'Boomtown Casino New Orleans': {
    bars: ["the casino bar","Sportsbook Bar","the lounge"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Boomtown slots"],
    poker: ["the poker room"],
  },
  'Seminole Hard Rock Hotel & Casino Hollywood': {
    bars: ["Kuro bar","Council Oak bar","Guitar Bar","Daer Nightclub"],
    restaurants: ["Council Oak Steaks & Seafood","Kuro","Cipresso","Robert Is Here"],
    slots: ["the high limit lounge","the main casino floor","the gaming floor"],
    poker: ["the poker room","the high stakes area"],
  },
  'Seminole Casino Coconut Creek': {
    bars: ["the casino bar","Sportsbook Bar","the lounge"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Seminole slots"],
    poker: ["the poker room"],
  },
  'Seminole Hard Rock Hotel & Casino Tampa': {
    bars: ["Hard Rock Cafe bar","Council Oak bar","Intermezzo Lounge"],
    restaurants: ["Council Oak Steaks & Seafood","Hard Rock Cafe","Cipresso"],
    slots: ["the main casino floor","the high limit room","the Seminole slots"],
    poker: ["the poker room","the high stakes area"],
  },
  'Magic City Casino': {
    bars: ["the casino bar","Sportsbook Bar","the lounge"],
    restaurants: ["the steakhouse","the café","Magic City Eatery"],
    slots: ["the main casino floor","the high limit room","the Magic City slots"],
    poker: ["the poker room"],
  },
  'Isle Casino Racing Pompano Park': {
    bars: ["the casino bar","the track bar","Sports Lounge"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit slots","the racing floor"],
    poker: ["the poker room"],
  },
  'Ameristar Casino Black Hawk': {
    bars: ["Mystique Lounge","Sports Bar","the casino bar"],
    restaurants: ["Unity Buffet","Cravings","Bobby's Burgers"],
    slots: ["the main casino floor","the high limit room","the mountain slots"],
    poker: ["the poker room"],
  },
  'Monarch Casino & Resort': {
    bars: ["the casino bar","the lounge","the sports bar"],
    restaurants: ["the steakhouse","Monarch Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Rocky Mountain slots"],
    poker: ["the poker room"],
  },
  'Isle Casino Hotel Black Hawk': {
    bars: ["the casino bar","the sports bar","the lounge"],
    restaurants: ["the steakhouse","Epic Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the mountain slots"],
    poker: ["the poker room"],
  },
  "Bronco Billy's Casino": {
    bars: ["the casino bar","Billy's Bar","the saloon"],
    restaurants: ["Bronco Billy's Steakhouse","the café","Billy's Buffet"],
    slots: ["the main casino floor","the high limit room","the Old West slots"],
    poker: ["the poker room"],
  },
  'Sky Ute Casino Resort': {
    bars: ["the casino bar","the lounge","Sky Ute Bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Sky Ute slots"],
    poker: ["the poker room"],
  },
  'WinStar World Casino': {
    bars: ["Global Event Center bar","the casino bar","the lounge"],
    restaurants: ["Hunt Club Steakhouse","Toby Keith's I Love This Bar","the buffet","Roberto's"],
    slots: ["the main casino floor","the high limit room","the World City slots"],
    poker: ["the poker room","the tournament area"],
  },
  'Choctaw Casino Resort Durant': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["Choctaw Club Steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Choctaw slots"],
    poker: ["the poker room"],
  },
  'Hard Rock Hotel & Casino Tulsa': {
    bars: ["Center Bar","the casino bar","Icon Lounge"],
    restaurants: ["Council Oak Steaks & Seafood","Hard Rock Cafe","the buffet"],
    slots: ["the main casino floor","the high limit room","the Rock slots"],
    poker: ["the poker room"],
  },
  'Osage Casino Hotel Tulsa': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Osage slots"],
    poker: ["the poker room"],
  },
  'Cherokee Casino & Hotel Roland': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Cherokee slots"],
    poker: ["the poker room"],
  },
  'Talking Stick Resort': {
    bars: ["Blue Coyote Bar","casino bar","the lounge"],
    restaurants: ["Orange Sky","Wandering Horse Buffet","Deseo"],
    slots: ["the high limit room","the main casino floor","the desert slots"],
    poker: ["the poker room"],
  },
  'Wild Horse Pass Hotel & Casino': {
    bars: ["the casino bar","the lounge","the sports bar"],
    restaurants: ["Kou'sin","Wild Horse Pass Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Gila River slots"],
    poker: ["the poker room"],
  },
  'Casino Arizona': {
    bars: ["the casino bar","Sports Lounge","the lounge"],
    restaurants: ["Cholla Prime Steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Arizona slots"],
    poker: ["the poker room"],
  },
  'Desert Diamond Casino West Valley': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Desert Diamond slots"],
    poker: ["the poker room"],
  },
  'Fort McDowell Casino': {
    bars: ["the casino bar","the lounge","Fort Bar"],
    restaurants: ["the steakhouse","the buffet","Toasted Frog"],
    slots: ["the main casino floor","the high limit room","the Fort McDowell slots"],
    poker: ["the poker room"],
  },
  'Pechanga Resort Casino': {
    bars: ["Great Oak Bar","the casino bar","Kelsey's Bar"],
    restaurants: ["Great Oak Steakhouse","Blazze","Paisano's Italian","Pechanga Buffet"],
    slots: ["the high limit room","the main casino floor","the Temecula slots"],
    poker: ["the poker room","the high stakes area"],
  },
  'Morongo Casino Resort & Spa': {
    bars: ["the casino bar","the lounge","Pool Bar"],
    restaurants: ["Cielo","Tuul","the buffet"],
    slots: ["the main casino floor","the high limit room","the desert slots"],
    poker: ["the poker room"],
  },
  'Agua Caliente Casino Cathedral City': {
    bars: ["the casino bar","the lounge","Agua Caliente Bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Palm Springs slots"],
    poker: ["the poker room"],
  },
  'Barona Resort & Casino': {
    bars: ["Barona Bar","the casino bar","the sports bar"],
    restaurants: ["Barona Oaks Steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Barona slots"],
    poker: ["the poker room"],
  },
  'Sycuan Casino Resort': {
    bars: ["the casino bar","the sports bar","the lounge"],
    restaurants: ["Emerald Grill","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Sycuan slots"],
    poker: ["the poker room"],
  },
  'San Manuel Casino': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["Rock & Brews","Serrano Buffet","the steakhouse"],
    slots: ["the main casino floor","the high limit room","the San Manuel slots"],
    poker: ["the poker room"],
  },
  'Thunder Valley Casino Resort': {
    bars: ["the casino bar","the lounge","Thunder Sports Bar"],
    restaurants: ["Thunder Valley Buffet","Beachside","the steakhouse"],
    slots: ["the main casino floor","the high limit room","the NorCal slots"],
    poker: ["the poker room"],
  },
  'Cache Creek Casino Resort': {
    bars: ["the casino bar","the lounge","the sports bar"],
    restaurants: ["Cache Creek Buffet","Harvest Buffet","the steakhouse"],
    slots: ["the main casino floor","the high limit room","the Northern California slots"],
    poker: ["the poker room"],
  },
  'Graton Resort & Casino': {
    bars: ["the casino bar","the lounge","Sonoma Bar"],
    restaurants: ["DoveTail","Vinegrowers Buffet","the steakhouse"],
    slots: ["the main casino floor","the high limit room","the Wine Country slots"],
    poker: ["the poker room"],
  },
  'Soboba Casino Resort': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Soboba slots"],
    poker: ["the poker room"],
  },
  'Tulalip Resort Casino': {
    bars: ["Canoes Cabaret","Draft Sports Bar","the casino bar"],
    restaurants: ["Blackfish","Blazing Paddles","Eagles Buffet"],
    slots: ["the main casino floor","the high limit room","the PNW slots"],
    poker: ["the poker room"],
  },
  'Snoqualmie Casino': {
    bars: ["the casino bar","the lounge","the mountain bar"],
    restaurants: ["Atabel","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the mountain view slots"],
    poker: ["the poker room"],
  },
  'Muckleshoot Casino': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["the steakhouse","Muckleshoot Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Muckleshoot slots"],
    poker: ["the poker room"],
  },
  'Ilani Casino Resort': {
    bars: ["the casino bar","the lounge","ilani Sports Bar"],
    restaurants: ["Cowiche Kitchen","the buffet","Eagle's Nest"],
    slots: ["the main casino floor","the high limit room","the Pacific NW slots"],
    poker: ["the poker room"],
  },
  'Spirit Mountain Casino': {
    bars: ["the casino bar","the lounge","the sports bar"],
    restaurants: ["the steakhouse","Spirit Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Oregon slots"],
    poker: ["the poker room"],
  },
  'Potawatomi Hotel & Casino': {
    bars: ["Wild Earth Lounge","Locavore Bar","the casino bar"],
    restaurants: ["Dream Dance Steak","Locavore","Stone Bowl"],
    slots: ["the main casino floor","the high limit room","the Milwaukee slots"],
    poker: ["the poker room"],
  },
  'Mystic Lake Casino Hotel': {
    bars: ["the casino bar","Mystic Bar","the sports bar"],
    restaurants: ["Mystic Lake Buffet","Harvest Moon","the steakhouse"],
    slots: ["the main casino floor","the high limit room","the Minnesota slots"],
    poker: ["the poker room"],
  },
  'Ameristar Casino Kansas City': {
    bars: ["the casino bar","Bottleneck Lounge","the sports bar"],
    restaurants: ["Frontier Steakhouse","the buffet","Pearl's Oyster Bar"],
    slots: ["the main casino floor","the high limit room","the KC slots"],
    poker: ["the poker room"],
  },
  'Hollywood Casino St. Louis': {
    bars: ["the casino bar","the lounge","Sportsbook Bar"],
    restaurants: ["Final Cut Steakhouse","Epic Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the STL slots"],
    poker: ["the poker room"],
  },
  'Prairie Band Casino & Resort': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Kansas slots"],
    poker: ["the poker room"],
  },
  'MGM National Harbor': {
    bars: ["the casino bar","Vida Cantina bar","TAP Sports Bar"],
    restaurants: ["Voltaggio Brothers Steak House","Felt","Hakkasan","National Pastime Sports Bar"],
    slots: ["the high limit room","the main casino floor","the DC slots"],
    poker: ["the poker room"],
  },
  'Live! Casino & Hotel Maryland': {
    bars: ["Sports & Social","the casino bar","the lounge"],
    restaurants: ["Prime Rib","David's","PBR Baltimore","the buffet"],
    slots: ["the main casino floor","the high limit room","the Maryland slots"],
    poker: ["the poker room"],
  },
  'Hollywood Casino Perryville': {
    bars: ["the casino bar","the sports bar","the lounge"],
    restaurants: ["Final Cut Steakhouse","Epic Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Perryville slots"],
    poker: ["the poker room"],
  },
  'Rivers Casino Philadelphia': {
    bars: ["the casino bar","Draft Sports Bar","the lounge"],
    restaurants: ["Scores","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Philly slots"],
    poker: ["the poker room"],
  },
  'Hollywood Casino at Penn National': {
    bars: ["the casino bar","the sports bar","the lounge"],
    restaurants: ["Final Cut Steakhouse","Epic Buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Penn National slots"],
    poker: ["the poker room"],
  },
  'Mohegan Sun Pocono': {
    bars: ["Breakers Bar","the casino bar","the sports bar"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Pocono slots"],
    poker: ["the poker room"],
  },
  'Valley Forge Casino Resort': {
    bars: ["the casino bar","BetRivers Sportsbook bar","the lounge"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Valley Forge slots"],
    poker: ["the poker room"],
  },
  'Presque Isle Downs & Casino': {
    bars: ["the casino bar","the sports bar","the lounge"],
    restaurants: ["1800 Prime","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Erie slots"],
    poker: ["the poker room"],
  },
  'Turning Stone Resort Casino': {
    bars: ["Turquoise Tiger","Point After Sports Bar","the casino bar"],
    restaurants: ["Wildflowers","Pino Bianco","Lava","the buffet"],
    slots: ["the main casino floor","the high limit room","the Central NY slots"],
    poker: ["the poker room","the high stakes area"],
  },
  'Rivers Casino & Resort Schenectady': {
    bars: ["the casino bar","the sports bar","the lounge"],
    restaurants: ["Dukes Chophouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Capital Region slots"],
    poker: ["the poker room"],
  },
  'del Lago Resort & Casino': {
    bars: ["the casino bar","the lounge","Sports Bar"],
    restaurants: ["Portico","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Finger Lakes slots"],
    poker: ["the poker room"],
  },
  'Tioga Downs Casino Resort': {
    bars: ["the casino bar","the sports bar","the lounge"],
    restaurants: ["the steakhouse","the buffet","the café"],
    slots: ["the main casino floor","the high limit room","the Southern Tier slots"],
    poker: ["the poker room"],
  },
  'default': {
    bars: ["the bar","the sports bar","the lounge","the main bar"],
    restaurants: ["the steakhouse","the buffet","the main restaurant","the cafe"],
    slots: ["the slots floor","the high limit room","the main floor"],
    poker: ["the poker room"],
  },
  'Bellagio': {
    bars: ["Petrossian Bar","Baccarat Bar","Bank Nightclub","Lily Bar & Lounge"],
    restaurants: ["Prime Steakhouse","Le Cirque","Picasso","Sadelle's","Harvest","Noodles"],
    slots: ["the high limit salon","the main casino floor","the slots lounge"],
    poker: ["the poker room","the Bobby's Room high stakes area"],
  },
  'MGM Grand Las Vegas': {
    bars: ["Lobby Bar","Centrifuge Bar","Hakkasan Nightclub","Sports Bar"],
    restaurants: ["Joel Robuchon","Tom Colicchio's Craftsteak","Emeril's","Morimoto","Wolfgang Puck Bar & Grill"],
    slots: ["the high limit slots","the main floor","the casino lobby"],
    poker: ["the poker room"],
  },
  'Caesars Palace': {
    bars: ["Omnia Nightclub","Cleopatra's Barge","Alto Bar","Shadow Bar"],
    restaurants: ["Gordon Ramsay Hell's Kitchen","Nobu","Old Homestead Steakhouse","Bacchanal Buffet","Guy Savoy"],
    slots: ["the Forum Casino floor","the high limit room","the Palace Tower slots"],
    poker: ["the poker room","the high stakes area"],
  },
  'The Venetian Las Vegas': {
    bars: ["Dorsey Cocktail Bar","Electra Cocktail Club","Aquabar","Casino Bar"],
    restaurants: ["Bouchon","B&B Burger & Beer","Matteo's","Mercato della Pescheria","Black Tap"],
    slots: ["the main casino floor","the high limit salon","the slots area near the gondolas"],
    poker: ["the poker room"],
  },
  'Wynn Las Vegas': {
    bars: ["Encore Beach Club","Parasol Up","Parasol Down","Overlook Lounge"],
    restaurants: ["SW Steakhouse","Wing Lei","Lakeside","Costa di Mare","Delilah"],
    slots: ["the high limit room","the main casino floor","the Encore casino"],
    poker: ["the poker room"],
  },
  'Aria Resort & Casino': {
    bars: ["Jewel Nightclub","Alibi Ultra Lounge","Lobby Bar","High Limit Lounge"],
    restaurants: ["Jean-Georges Steakhouse","Carbone","Catch","Bardot Brasserie","Skyfall Lounge"],
    slots: ["the main casino floor","the high limit room","the slots lounge"],
    poker: ["the poker room","the high stakes area"],
  },
  'Cosmopolitan of Las Vegas': {
    bars: ["The Chandelier Bar","Marquee Nightclub","Vesper Bar","Wicked Spoon"],
    restaurants: ["Eggslut","Secret Pizza","Zuma","STK Steakhouse","China Poblano"],
    slots: ["the main casino floor","the high limit slots","the hipster slots area"],
    poker: ["the poker room"],
  },
  'Paris Las Vegas': {
    bars: ["Chateau Nightclub","Le Bar du Sport","Gustav Mauler's","Mon Ami Gabi bar"],
    restaurants: ["Gordon Ramsay Steak","Mon Ami Gabi","Eiffel Tower Restaurant","Le Village Buffet"],
    slots: ["the main casino floor","La Cour de Chance slots","the high limit room"],
    poker: ["the poker room"],
  },
  "Harrah's Las Vegas": {
    bars: ["Carnaval Court","Piano Bar","VooDoo Rooftop Nightclub"],
    restaurants: ["Ruth's Chris Steak House","Asia","Fresh Market Square Buffet"],
    slots: ["the main floor","the high limit room","the slots lounge"],
    poker: ["the poker room"],
  },
  'Planet Hollywood Las Vegas': {
    bars: ["Koi Lounge","Spice Market Lounge","Vanity Nightclub"],
    restaurants: ["Gordon Ramsay Burger","KOI Restaurant","Strip House","Earl of Sandwich"],
    slots: ["the Miracle Mile slots","the main casino floor","the high limit room"],
    poker: ["the poker room"],
  },
  'Mandalay Bay': {
    bars: ["Eyecandy Sound Lounge","Foundation Room","House of Blues bar","Beach Bar"],
    restaurants: ["Aureole","Border Grill","Charlie Palmer Steak","Michael Mina's Stripsteak"],
    slots: ["the main casino floor","the high limit room","the slots near the beach"],
    poker: ["the poker room"],
  },
  'New York-New York': {
    bars: ["Bar at Times Square","Nine Fine Irishmen","Coyote Ugly","Rok Vegas Nightclub"],
    restaurants: ["Tom's Urban","Il Fornaio","Gonzalez Y Gonzalez","Village Eateries"],
    slots: ["the main casino floor","the high limit room","the Greenwich Village slots"],
    poker: ["the poker room"],
  },
  'Treasure Island': {
    bars: ["Gilley's Saloon","Christian Audigier Nightclub","Gilley's Bar"],
    restaurants: ["Gilley's BBQ","Canter's Deli","Phil's Italian Grille","Kahunaville"],
    slots: ["the main casino floor","the high limit slots","the slots near the entrance"],
    poker: ["the poker room"],
  },
  'Golden Nugget Las Vegas': {
    bars: ["Rush Lounge","Chart House Bar","Cadillac Mexican Kitchen bar"],
    restaurants: ["Chart House","Grotto","Vic & Anthony's Steakhouse","Lillie's Asian Cuisine"],
    slots: ["the main casino floor","the high limit room","the slots near the shark tank"],
    poker: ["the poker room","the Gold Diggers area"],
  },
  "Binion's Gambling Hall": {
    bars: ["Binion's Bar","Whiskey Licker Up","the main bar"],
    restaurants: ["Binion's Ranch Steakhouse","the coffee shop","Snack Bar"],
    slots: ["the main floor","the high limit room","the classic slots"],
    poker: ["the poker room","the legendary poker area"],
  },
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

function getTimeOfDay() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return 'morning';
  if (h >= 12 && h < 17) return 'afternoon';
  if (h >= 17 && h < 21) return 'evening';
  return 'night';
}

function buildPool(casino, weatherMain, temp) {
  const v = getVenues(casino.name);
  const name = casino.name;
  const isVegas = casino.state === 'NV';
  const isAC = casino.state === 'NJ';
  const isCT = casino.state === 'CT';

  // GENERAL posts — varied, realistic, casino-specific where possible
  const general = [
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
    { b: `floor is hopping right now, good turnout`, c: '📢 General' },
    { b: `surprisingly not too crowded for a ${['Friday','Saturday','Sunday'][Math.floor(Math.random()*3)]}`, c: '📢 General' },
    { b: `security was quick at the door, no wait to get in`, c: '📢 General' },
    { b: `valet took like 3 mins, super smooth tonight`, c: '📢 General' },
    { b: `just cashed out, great run tonight 💰`, c: '📢 General' },
    { b: `been here ${Math.floor(Math.random()*4)+2} hours and still not ready to leave`, c: '📢 General' },
    { b: `staff are super friendly tonight, shoutout to everyone working`, c: '📢 General' },
    { b: `AC is perfect in here, much better than outside rn`, c: '📢 General' },
    { b: `brought my parents for their anniversary, they're having a blast 🥰`, c: '📢 General' },
    { b: `bachelorette party on the floor making it fun lol`, c: '📢 General' },
    { b: `live entertainment tonight is actually really good`, c: '📢 General' },
    { b: `hit the floor right as it opened up, perfect timing`, c: '📢 General' },
    { b: `loyalty card is paying off tonight, got comped dinner`, c: '📢 General' },
    { b: `came for an hour, stayed for four, you know how it goes 😂`, c: '📢 General' },
    { b: `place is packed but the vibe is great`, c: '📢 General' },
    { b: `surprisingly easy to find a machine or table tonight`, c: '📢 General' },
    ...(isVegas ? [
      { b: `classic Vegas night, loving every second`, c: '📢 General' },
      { b: `flew in just for the weekend, ${name} never disappoints`, c: '📢 General' },
      { b: `this is my 4th time at ${name}, still my favorite stop on the Strip`, c: '📢 General' },
      { b: `Vegas is fully back, energy in here is insane 🎰`, c: '📢 General' },
    ] : []),
    ...(isAC ? [
      { b: `AC weekend trip, ${name} is the move as always`, c: '📢 General' },
      { b: `drove down from Philly, totally worth it tonight`, c: '📢 General' },
      { b: `AC never gets old honestly, great night here`, c: '📢 General' },
    ] : []),
    ...(isCT ? [
      { b: `CT casino night, ${name} still the best in the state imo`, c: '📢 General' },
      { b: `made the drive out and it was worth it, busy night`, c: '📢 General' },
    ] : []),
  ];

  // SLOTS posts
  const slots = [
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
    { b: `hit a free spins bonus on ${pick(v.slots)}, paid out really well`, c: '🎰 Slots' },
    { b: `lost track of time on the slots lol, been here way too long 😂`, c: '🎰 Slots' },
    { b: `${pick(v.slots)} machines are not hitting for me tonight 😩`, c: '🎰 Slots' },
    { b: `just hit $${[200,350,500,750,1200][Math.floor(Math.random()*5)]} on a bonus round 🎉`, c: '🎰 Slots' },
    { b: `high limit room feels different, more energy than usual`, c: '🎰 Slots' },
    { b: `penny slots on ${pick(v.slots)} aren't hitting tonight, moving on`, c: '🎰 Slots' },
    { b: `had a great run on ${pick(v.slots)}, calling it before it turns around lol`, c: '🎰 Slots' },
    { b: `Buffalo is everywhere tonight on the floor, everyone playing it`, c: '🎰 Slots' },
    { b: `Dragon Link is packed on both sides, popular tonight`, c: '🎰 Slots' },
    { b: `Lightning Link hitting for a few people near me 👀`, c: '🎰 Slots' },
  ];

  // TABLE GAMES posts
  const tables = [
    { b: `blackjack tables have been good to me tonight 🃏`, c: '🎲 Table Games' },
    { b: `dealer's been busting a lot, good table energy`, c: '🎲 Table Games' },
    { b: `craps table is LOUD tonight lol, always a good sign`, c: '🎲 Table Games' },
    { b: `roulette hitting on my numbers tonight 🤑`, c: '🎲 Table Games' },
    { b: `table minimums are reasonable tonight`, c: '🎲 Table Games' },
    { b: `good run at blackjack, up a couple hundred 🙌`, c: '🎲 Table Games' },
    { b: `tables are packed but moving fast`, c: '🎲 Table Games' },
    { b: `found a $${[10,15,25][Math.floor(Math.random()*3)]} blackjack table 👍`, c: '🎲 Table Games' },
    { b: `dealer been ice cold tonight, our table is eating 😂`, c: '🎲 Table Games' },
    { b: `baccarat crowd is lively rn`, c: '🎲 Table Games' },
    { b: `6:5 blackjack tables are brutal, hunting for a 3:2 game`, c: '🎲 Table Games' },
    { b: `found a good 3:2 BJ table with low min, staying here all night`, c: '🎲 Table Games' },
    { b: `craps table went on a 20 min run, place went CRAZY 🎲`, c: '🎲 Table Games' },
    { b: `three blackjacks in the last hour, running hot 🔥`, c: '🎲 Table Games' },
    { b: `roulette wheel hitting red like 6 times in a row, wild`, c: '🎲 Table Games' },
    { b: `table games floor is packed, might be a wait for BJ`, c: '🎲 Table Games' },
    { b: `Spanish 21 table open if anyone is looking`, c: '🎲 Table Games' },
    { b: `three card poker is a trap but i keep playing it lol`, c: '🎲 Table Games' },
    { b: `$${[25,50,100][Math.floor(Math.random()*3)]} min at most tables tonight, it's busy`, c: '🎲 Table Games' },
    { b: `great run on craps, shooter held the dice for like 15 minutes`, c: '🎲 Table Games' },
  ];

  // POKER posts
  const poker = [
    { b: `poker room is busy tonight, good action 🃏`, c: '🃏 Poker Room' },
    { b: `1/2 NL is super soft tonight, lots of recreational players 🐟`, c: '🃏 Poker Room' },
    { b: `just sat down at 1/2, table looks fun`, c: '🃏 Poker Room' },
    { b: `poker room has great energy tonight`, c: '🃏 Poker Room' },
    { b: `wait for 1/2 is pretty short right now fyi`, c: '🃏 Poker Room' },
    { b: `tournament just started, crowd is fired up 🔥`, c: '🃏 Poker Room' },
    { b: `been grinding 1/2 for a few hours, up a buy in 🙌`, c: '🃏 Poker Room' },
    { b: `poker room staff super friendly tonight`, c: '🃏 Poker Room' },
    { b: `just doubled up at 1/2, great table 🃏`, c: '🃏 Poker Room' },
    { b: `${pick(v.poker)} is running great games tonight`, c: '🃏 Poker Room' },
    { b: `2/5 game is running, maybe ${Math.floor(Math.random()*3)+1} tables going right now`, c: '🃏 Poker Room' },
    { b: `1/2 game has some real fish tonight 🐟 easy table`, c: '🃏 Poker Room' },
    { b: `waiting for a seat at 1/2, list is about ${Math.floor(Math.random()*4)+2} deep`, c: '🃏 Poker Room' },
    { b: `bad beat jackpot is up to $${Math.floor(Math.random()*40+60)}k, playing scared poker out here lol`, c: '🃏 Poker Room' },
    { b: `straddle game going on at my table, action is great 🎰`, c: '🃏 Poker Room' },
    { b: `just got moved to a new table, this one is way better action`, c: '🃏 Poker Room' },
    { b: `sat down with $${[200,300,500][Math.floor(Math.random()*3)]}, already almost doubled up`, c: '🃏 Poker Room' },
    { b: `tournament has ${Math.floor(Math.random()*80+40)} runners, good field tonight`, c: '🃏 Poker Room' },
    { b: `5/10 is running if anyone wants that action`, c: '🃏 Poker Room' },
    { b: `${pick(v.poker)} has about ${Math.floor(Math.random()*6+4)} tables of 1/2 running rn`, c: '🃏 Poker Room' },
    { b: `late night poker is always the best here, looser play`, c: '🃏 Poker Room' },
    { b: `ran a bluff and got looked up, lesson learned 😂`, c: '🃏 Poker Room' },
    { b: `table is super fun tonight, great mix of players`, c: '🃏 Poker Room' },
  ];

  // ASK / QUESTION posts (post_type: 'ask')
  const asks = [
    { b: `is the 1/2 NL running right now at ${name}?`, c: '🃏 Poker Room', t: 'ask' },
    { b: `what's the poker room wait like tonight?`, c: '🃏 Poker Room', t: 'ask' },
    { b: `anyone know if the 2/5 game is going tonight?`, c: '🃏 Poker Room', t: 'ask' },
    { b: `should i bother driving out to ${name} tonight or is it dead?`, c: '📢 General', t: 'ask' },
    { b: `how crowded is ${name} right now? worth heading out?`, c: '📢 General', t: 'ask' },
    { b: `what are the blackjack minimums tonight?`, c: '🎲 Table Games', t: 'ask' },
    { b: `anyone at ${name} right now? how's the floor looking?`, c: '📢 General', t: 'ask' },
    { b: `is parking a nightmare tonight or pretty normal?`, c: '📢 General', t: 'ask' },
    { b: `are the slots hitting at all tonight or should i go somewhere else lol`, c: '🎰 Slots', t: 'ask' },
    { b: `how's the high limit room tonight?`, c: '🎰 Slots', t: 'ask' },
    { b: `worth making the drive out tonight? thinking about heading over`, c: '📢 General', t: 'ask' },
    { b: `craps table still running? what's the min?`, c: '🎲 Table Games', t: 'ask' },
    { b: `anyone know if there's a tournament going on tonight?`, c: '🃏 Poker Room', t: 'ask' },
    { b: `how long is the poker room waitlist right now?`, c: '🃏 Poker Room', t: 'ask' },
    { b: `is ${pick(v.restaurants)} busy tonight? trying to get a table`, c: '📢 General', t: 'ask' },
    { b: `anyone playing 1/2 tonight? table any good?`, c: '🃏 Poker Room', t: 'ask' },
    { b: `how's the vibe tonight compared to last weekend?`, c: '📢 General', t: 'ask' },
    { b: `any $10 blackjack tables open or all $25 min tonight?`, c: '🎲 Table Games', t: 'ask' },
    { b: `is the floor busy enough to make it worth coming out tonight?`, c: '📢 General', t: 'ask' },
    { b: `what time does it usually start picking up on a ${['Friday','Saturday','Sunday','Thursday'][Math.floor(Math.random()*4)]}?`, c: '📢 General', t: 'ask' },
  ];

  const pool = [...general, ...slots, ...tables, ...poker, ...asks];
  getWeatherPosts(weatherMain, temp).forEach(w => pool.push({ b: w, c: '📢 General' }));
  return pool;
}

function randomRecentTime() {
  const now = new Date();
  const daysAgo = Math.floor(Math.random() * 7); // spread over a week
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
  const realPosts = await sbFetch(`/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.false&select=id`, { returnData: true });
  if ((realPosts?.length || 0) >= 20) return 0;

  const sevenDaysAgo = new Date(Date.now() - 7 * 86400000).toISOString();
  await sbFetch(`/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.true&created_at=lt.${sevenDaysAgo}`, { method: 'DELETE' });

  const existingPosts = await sbFetch(`/posts?casino=eq.${encodeURIComponent(casino.name)}&is_seeded=eq.true&select=body`, { returnData: true });
  const existingBodies = new Set((existingPosts || []).map(p => p.body));
  const pool = buildPool(casino, weatherMain, temp);
  const toAdd = Math.floor(Math.random() * 3) + 2;
  const toInsert = [];
  let attempts = 0;

  while (toInsert.length < toAdd && attempts < 100) {
    attempts++;
    const item = pick(pool);
    if (!existingBodies.has(item.b)) {
      existingBodies.add(item.b);
      const { name, isAnon } = randomAuthor();
      toInsert.push({
        body: item.b,
        casino: casino.name,
        category: item.c,
        post_type: item.t || 'report',
        author: name,
        is_anonymous: isAnon,
        helpful_count: item.t === 'ask' ? 0 : Math.floor(Math.random() * 12),
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

// Seed fake leaderboard profiles so the board isn't empty
const LEADERBOARD_SEEDS = [
  { cookie_id: 'seed_001', username: 'PokerGrinder88', points: 2840, rank: 'Whale', streak_days: 12 },
  { cookie_id: 'seed_002', username: 'SlotQueenNV', points: 1920, rank: 'Whale', streak_days: 7 },
  { cookie_id: 'seed_003', username: 'TableKing_AC', points: 1340, rank: 'High Roller', streak_days: 4 },
  { cookie_id: 'seed_004', username: 'VegasRegular', points: 980, rank: 'High Roller', streak_days: 3 },
  { cookie_id: 'seed_005', username: 'FloorReporter', points: 720, rank: 'High Roller', streak_days: 5 },
  { cookie_id: 'seed_006', username: 'CrapsShoooter', points: 560, rank: 'Floor Regular', streak_days: 2 },
  { cookie_id: 'seed_007', username: 'NightOwl_BJ', points: 430, rank: 'Floor Regular', streak_days: 1 },
  { cookie_id: 'seed_008', username: 'WheelSpinner', points: 290, rank: 'Regular', streak_days: 0 },
  { cookie_id: 'seed_009', username: 'FishFinder_NJ', points: 180, rank: 'Regular', streak_days: 2 },
  { cookie_id: 'seed_010', username: 'NewToThis2025', points: 90, rank: 'Fish', streak_days: 1 },
];

async function seedLeaderboard() {
  for (const profile of LEADERBOARD_SEEDS) {
    // Check if already exists
    const existing = await sbFetch(`/user_profiles?cookie_id=eq.${profile.cookie_id}&select=id`, { returnData: true });
    if (existing?.length > 0) continue;
    await sbFetch('/user_profiles', {
      method: 'POST',
      body: JSON.stringify({ ...profile, last_post_date: new Date().toISOString().split('T')[0] }),
      headers: { 'Prefer': 'return=minimal' },
    });
  }
}

export default async function handler(req, res) {
  const force = req.query.force === 'true';
  const total = { seeded: 0, casinos: 0 };

  if (force) {
    await sbFetch('/posts?is_seeded=eq.true', { method: 'DELETE' });
  }

  // Seed leaderboard profiles on every run (idempotent — skips if already exists)
  await seedLeaderboard();

  const batchSize = 10;
  for (let i = 0; i < CASINOS.length; i += batchSize) {
    const batch = CASINOS.slice(i, i + batchSize);
    await Promise.all(batch.map(async casino => {
      const count = await seedCasino(casino, null, 60);
      if (count > 0) { total.seeded += count; total.casinos++; }
    }));
  }

  res.status(200).json({ success: true, mode: force ? 'force' : 'normal', ...total, timestamp: new Date().toISOString() });
}

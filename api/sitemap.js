// AUTO-GENERATED from casino.js CASINOS array — 254 casino pages
// Static pages
const STATIC_PAGES = [
  { loc: '/', priority: '1.0', changefreq: 'hourly' },
  { loc: '/browse', priority: '0.9', changefreq: 'daily' },
  { loc: '/las-vegas-casinos', priority: '0.9', changefreq: 'daily' },
  { loc: '/poker-rooms', priority: '0.9', changefreq: 'daily' },
  { loc: '/bookmarks', priority: '0.5', changefreq: 'daily' },
  { loc: '/about', priority: '0.4', changefreq: 'monthly' },
  { loc: '/terms', priority: '0.3', changefreq: 'monthly' },
  { loc: '/privacy', priority: '0.3', changefreq: 'monthly' },
];

// All casino slugs — keep in sync with CASINOS array in casino.js
const CASINO_SLUGS = [
  'mohegan-sun', 'foxwoods', 'jakes-58', 'empire-city', 'resorts-world-nyc', 'ballys-twin-river',
  'ballys-tiverton', 'plainridge-park', 'resorts-world-catskills', 'mgm-springfield', 'encore-boston-harbor', 'borgata',
  'hard-rock-ac', 'caesars-ac', 'harrahs-ac', 'ballys-ac', 'resorts-casino-ac', 'golden-nugget-ac',
  'wind-creek-bethlehem', 'parx-casino', 'live-casino-philly', 'mount-airy-casino', 'bellagio', 'mgm-grand-las-vegas',
  'caesars-palace', 'venetian-las-vegas', 'wynn-las-vegas', 'aria-las-vegas', 'cosmopolitan-las-vegas', 'paris-las-vegas',
  'harrahs-las-vegas', 'planet-hollywood-las-vegas', 'mandalay-bay', 'new-york-new-york', 'treasure-island-las-vegas', 'golden-nugget-las-vegas',
  'binions', 'peppermill-reno', 'grand-sierra-resort', 'silver-legacy-reno', 'atlantis-reno', 'harrahs-lake-tahoe',
  'harveys-lake-tahoe', 'hard-rock-lake-tahoe', 'mgm-grand-detroit', 'motorcity-casino', 'greektown-casino', 'rivers-casino-des-plaines',
  'hollywood-casino-aurora', 'horseshoe-hammond', 'hard-rock-northern-indiana', 'four-winds-south-bend', 'beau-rivage-biloxi', 'hard-rock-biloxi',
  'ip-casino-biloxi', 'scarlet-pearl-casino', 'golden-nugget-biloxi', 'hollywood-casino-tunica', 'harrahs-new-orleans', 'lauberge-baton-rouge',
  'lauberge-lake-charles', 'coushatta-casino-resort', 'boomtown-new-orleans', 'seminole-hard-rock-hollywood', 'seminole-coconut-creek', 'seminole-hard-rock-tampa',
  'magic-city-casino', 'isle-casino-pompano', 'ameristar-black-hawk', 'monarch-casino-black-hawk', 'isle-casino-black-hawk', 'bronco-billys',
  'sky-ute-casino', 'winstar-world-casino', 'choctaw-casino-durant', 'hard-rock-tulsa', 'osage-casino-tulsa', 'cherokee-casino-roland',
  'talking-stick-resort', 'wild-horse-pass', 'casino-arizona', 'desert-diamond-west-valley', 'fort-mcdowell-casino', 'pechanga-resort',
  'morongo-casino', 'agua-caliente-cathedral-city', 'barona-resort', 'sycuan-casino', 'san-manuel-casino', 'thunder-valley-casino',
  'cache-creek-casino', 'graton-resort', 'soboba-casino', 'tulalip-resort-casino', 'snoqualmie-casino', 'muckleshoot-casino',
  'ilani-casino', 'spirit-mountain-casino', 'potawatomi-casino-milwaukee', 'mystic-lake-casino', 'ameristar-kansas-city', 'hollywood-casino-st-louis',
  'prairie-band-casino', 'mgm-national-harbor', 'live-casino-maryland', 'hollywood-casino-perryville', 'rivers-casino-philly', 'hollywood-casino-penn-national',
  'mohegan-sun-pocono', 'valley-forge-casino', 'presque-isle-downs', 'turning-stone-resort', 'rivers-casino-schenectady', 'del-lago-resort',
  'tioga-downs', 'jack-cleveland-casino', 'hollywood-casino-columbus', 'hollywood-casino-toledo', 'hard-rock-rocksino-northfield', 'mgm-northfield-park',
  'hard-rock-cincinnati', 'mountaineer-casino', 'hollywood-casino-charles-town', 'mardi-gras-casino-wv', 'wheeling-island-casino', 'harrahs-cherokee',
  'harrahs-cherokee-valley-river', 'rivers-casino-portsmouth', 'hard-rock-bristol', 'ameristar-council-bluffs', 'horseshoe-council-bluffs', 'prairie-meadows-casino',
  'isle-casino-bettendorf', 'wild-rose-emmetsburg', 'sandia-resort-casino', 'route-66-casino', 'inn-of-the-mountain-gods', 'buffalo-thunder-casino',
  'fire-rock-navajo-casino', 'deadwood-mountain-grand', 'cadillac-jacks-deadwood', 'dakota-sioux-casino', 'grand-river-casino', 'sky-dancer-casino',
  'spirit-lake-casino', '4-bears-casino', 'kwataqnuk-casino', 'charging-horse-casino', 'coeur-dalene-casino', 'clearwater-river-casino',
  'shoshone-bannock-casino', 'wind-creek-wetumpka', 'wind-creek-atmore', 'wind-creek-montgomery', 'warhorse-casino-lincoln', 'warhorse-casino-omaha',
  'atlantis-casino-reno', 'circus-circus-reno', 'eldorado-reno', 'harrahs-reno', 'nugget-casino-sparks', 'caesars-lake-tahoe',
  'eureka-casino-mesquite', 'virgin-hotels-las-vegas', 'durango-casino-las-vegas', 'fontainebleau-las-vegas', 'resorts-world-las-vegas', 'circa-resort-las-vegas',
  'pechanga-resort-casino', 'agua-caliente-casino', 'fantasy-springs-casino', 'viejas-casino', 'harrahs-southern-california', 'chumash-casino',
  'jackson-rancheria-casino', 'wild-horse-pass-casino', 'downstream-casino', 'emerald-queen-casino', 'lucky-eagle-casino', 'saratoga-casino-black-hawk',
  'ameristar-east-chicago', 'grand-victoria-casino', 'harrahs-joliet', 'spirit-mountain-casino-oregon', 'ilani-casino-resort', 'soaring-eagle-casino',
  'four-winds-new-buffalo', 'firekeepers-casino', 'oxford-casino', 'seminole-casino-coconut-creek', 'miccosukee-resort-gaming', 'seminole-casino-brighton',
  'seminole-casino-immokalee', 'grand-casino-hinckley', 'grand-casino-mille-lacs', 'treasure-island-resort-mn', 'black-bear-casino', 'shooting-star-casino',
  'jackpot-junction-casino', 'potawatomi-hotel-casino', 'ho-chunk-gaming-wisconsin-dells', 'oneida-casino', 'menominee-casino-resort', 'lake-of-the-torches-casino',
  'ho-chunk-gaming-madison', 'northwoods-casino', 'golden-nugget-lake-charles', 'horseshoe-bossier-city', 'margaritaville-bossier-city', 'boomtown-casino-new-orleans',
  'harrahs-gulf-coast', 'gold-strike-tunica', 'ameristar-casino-st-charles', 'harrahs-north-kansas-city', 'argosy-casino-riverside', 'lumiere-place-casino',
  'isle-of-capri-boonville', 'horseshoe-casino-baltimore', 'rocky-gap-casino-resort', 'dover-downs-casino', 'delaware-park-casino', 'harrington-raceway-casino',
  'kickapoo-lucky-eagle-casino', 'naskila-gaming', 'speaking-rock-el-paso', 'ysleta-del-sur-casino', 'running-aces-casino', 'prairies-edge-casino',
  'fond-du-luth-casino', 'palace-casino-resort-mn', 'rivers-casino-des-plaines-il', 'par-a-dice-casino', 'casino-queen-east-st-louis', 'hollywood-casino-joliet',
  'horseshoe-hammond-in', 'blue-chip-casino-michigan-city', 'four-winds-south-bend-in', 'belterra-casino-resort', 'boot-hill-casino', 'kansas-star-casino',
  'hollywood-casino-kansas-speedway', 'hard-rock-sioux-city', 'warhorse-casino-grand-island', 'chinook-winds-casino', 'seven-feathers-casino', 'wildhorse-resort-casino',
  'catawba-two-kings-casino', 'harrahs-cherokee-valley-river-nc', 'rivers-casino-portsmouth-va', 'hard-rock-bristol-va', 'hollywood-casino-bangor', 'passamaquoddy-tribe-casino',
  'glacier-peaks-casino', 'little-big-horn-casino',
];

export default function handler(req, res) {
  const base = 'https://casinoconditions.com';
  const today = new Date().toISOString().split('T')[0];

  const staticUrls = STATIC_PAGES.map(p => `  <url>
    <loc>${base}${p.loc}</loc>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
    <lastmod>${today}</lastmod>
  </url>`);

  const casinoUrls = CASINO_SLUGS.map(slug => `  <url>
    <loc>${base}/${slug}</loc>
    <changefreq>hourly</changefreq>
    <priority>0.8</priority>
    <lastmod>${today}</lastmod>
  </url>`);

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${[...staticUrls, ...casinoUrls].join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(xml);
}

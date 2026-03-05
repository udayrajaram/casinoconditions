const CASINOS = [
  // Northeast
  'mohegan-sun', 'foxwoods', 'jakes-58', 'empire-city', 'resorts-world-nyc',
  'ballys-twin-river', 'ballys-tiverton', 'plainridge-park', 'resorts-world-catskills',
  'mgm-springfield', 'encore-boston-harbor', 'borgata', 'hard-rock-ac', 'caesars-ac',
  'harrahs-ac', 'ballys-ac', 'resorts-casino-ac', 'golden-nugget-ac',
  'wind-creek-bethlehem', 'parx-casino', 'live-casino-philly', 'mount-airy-casino',
  'turning-stone-resort', 'rivers-casino-schenectady', 'del-lago-resort', 'tioga-downs',
  'mohegan-sun-pocono', 'valley-forge-casino', 'presque-isle-downs',
  'rivers-casino-philly', 'hollywood-casino-penn-national',
  // Las Vegas
  'bellagio', 'mgm-grand-las-vegas', 'caesars-palace', 'venetian-las-vegas',
  'wynn-las-vegas', 'aria-las-vegas', 'cosmopolitan-las-vegas', 'paris-las-vegas',
  'harrahs-las-vegas', 'planet-hollywood-las-vegas', 'mandalay-bay',
  'new-york-new-york', 'treasure-island-las-vegas', 'golden-nugget-las-vegas', 'binions',
  // Reno / Tahoe
  'peppermill-reno', 'grand-sierra-resort', 'silver-legacy-reno', 'atlantis-reno',
  'harrahs-lake-tahoe', 'harveys-lake-tahoe', 'hard-rock-lake-tahoe',
  // Detroit
  'mgm-grand-detroit', 'motorcity-casino', 'greektown-casino',
  // Chicago / Midwest
  'rivers-casino-des-plaines', 'hollywood-casino-aurora', 'horseshoe-hammond',
  'hard-rock-northern-indiana', 'four-winds-south-bend',
  'potawatomi-casino-milwaukee', 'mystic-lake-casino',
  'ameristar-kansas-city', 'hollywood-casino-st-louis', 'prairie-band-casino',
  // Mississippi
  'beau-rivage-biloxi', 'hard-rock-biloxi', 'ip-casino-biloxi',
  'scarlet-pearl-casino', 'golden-nugget-biloxi', 'hollywood-casino-tunica',
  // Louisiana
  'harrahs-new-orleans', 'lauberge-baton-rouge', 'lauberge-lake-charles',
  'coushatta-casino-resort', 'boomtown-new-orleans',
  // Florida
  'seminole-hard-rock-hollywood', 'seminole-coconut-creek', 'seminole-hard-rock-tampa',
  'magic-city-casino', 'isle-casino-pompano',
  // Colorado / Oklahoma
  'ameristar-black-hawk', 'monarch-casino-black-hawk', 'isle-casino-black-hawk',
  'bronco-billys', 'sky-ute-casino',
  'winstar-world-casino', 'choctaw-casino-durant', 'hard-rock-tulsa',
  'osage-casino-tulsa', 'cherokee-casino-roland',
  // Arizona / California
  'talking-stick-resort', 'wild-horse-pass', 'casino-arizona',
  'desert-diamond-west-valley', 'fort-mcdowell-casino',
  'pechanga-resort', 'morongo-casino', 'agua-caliente-cathedral-city',
  'barona-resort', 'sycuan-casino', 'san-manuel-casino',
  'thunder-valley-casino', 'cache-creek-casino', 'graton-resort', 'soboba-casino',
  // Pacific Northwest
  'tulalip-resort-casino', 'snoqualmie-casino', 'muckleshoot-casino',
  'ilani-casino', 'spirit-mountain-casino',
  // Mid-Atlantic
  'mgm-national-harbor', 'live-casino-maryland', 'hollywood-casino-perryville',
];

export default function handler(req, res) {
  const base = 'https://casinoconditions.com';
  const urls = [
    { loc: base, priority: '1.0', changefreq: 'hourly' },
    { loc: `${base}/browse`, priority: '0.8', changefreq: 'daily' },
    { loc: `${base}/las-vegas-casinos`, priority: '0.9', changefreq: 'daily' },
    { loc: `${base}/poker-rooms`, priority: '0.9', changefreq: 'daily' },
    ...CASINOS.map(slug => ({
      loc: `${base}/${slug}`,
      priority: '0.9',
      changefreq: 'hourly',
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.loc}</loc>
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
  res.status(200).send(xml);
}

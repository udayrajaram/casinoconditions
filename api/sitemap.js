const CASINOS = [
  'mohegan-sun', 'foxwoods', 'jakes-58', 'empire-city', 'resorts-world-nyc',
  'ballys-twin-river', 'ballys-tiverton', 'plainridge-park', 'resorts-world-catskills',
  'mgm-springfield', 'encore-boston-harbor', 'borgata', 'hard-rock-ac', 'caesars-ac',
  'harrahs-ac', 'ballys-ac', 'resorts-casino-ac', 'golden-nugget-ac',
  'wind-creek-bethlehem', 'parx-casino', 'live-casino-philly', 'mount-airy-casino',
];

export default function handler(req, res) {
  const base = 'https://casinoconditions.com';
  const urls = [
    { loc: base, priority: '1.0', changefreq: 'hourly' },
    { loc: `${base}/browse`, priority: '0.8', changefreq: 'daily' },
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

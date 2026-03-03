export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { lat, lon } = req.query;
  if (!lat || !lon) return res.status(400).json({ error: 'lat and lon required' });

  const key = process.env.GOOGLE_KEY;
  try {
    const r = await fetch(
      `https://weather.googleapis.com/v1/currentConditions:lookup?key=${key}&location.latitude=${lat}&location.longitude=${lon}&unitsSystem=IMPERIAL`
    );
    const data = await r.json();
    if (!data.temperature) return res.status(200).json(null);

    const type = data.weatherCondition?.type || 'CLEAR';
    const mainMap = {
      CLEAR:'Clear', CLOUDY:'Clouds', PARTLY_CLOUDY:'Clouds',
      RAIN:'Rain', LIGHT_RAIN:'Rain', RAIN_SHOWERS:'Rain',
      DRIZZLE:'Drizzle', SNOW:'Snow', HEAVY_SNOW:'Snow',
      THUNDERSTORM:'Thunderstorm', FOG:'Fog', MIST:'Mist',
    };
    res.status(200).json({
      weather: [{ main: mainMap[type] || 'Clear', description: data.weatherCondition?.description?.text || 'Clear' }],
      main: { temp: data.temperature?.degrees || 60 },
    });
  } catch(e) {
    res.status(200).json(null);
  }
}

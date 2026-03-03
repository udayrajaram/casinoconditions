export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { placeId } = req.query;
  if (!placeId) return res.status(400).json({ error: 'placeId required' });

  const key = process.env.GOOGLE_KEY;
  try {
    const r = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}?fields=rating,userRatingCount,currentOpeningHours,regularOpeningHours&key=${key}`
    );
    const data = await r.json();
    res.status(200).json({
      rating: data.rating || null,
      user_ratings_total: data.userRatingCount || null,
      open_now: data.currentOpeningHours?.openNow ?? null,
    });
  } catch(e) {
    res.status(200).json(null);
  }
}

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;

const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const DAY_FULL = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');

  const { casino } = req.query;
  if (!casino) return res.status(400).json({ error: 'Missing casino' });

  try {
    // Fetch last 90 days of reactions
    const since = new Date(Date.now() - 90 * 86400000).toISOString();
    const r = await fetch(
      `${SUPABASE_URL}/rest/v1/reactions?casino=eq.${encodeURIComponent(casino)}&created_at=gte.${since}&select=reaction,created_at&limit=2000`,
      { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
    );
    const reactions = await r.json();

    if (!reactions?.length) {
      return res.status(200).json({ hasData: false });
    }

    // Bucket by day of week (0=Sun..6=Sat) and time slot (morning/afternoon/evening/night)
    const byDay = Array.from({ length: 7 }, () => ({ busy: 0, moderate: 0, quiet: 0, total: 0 }));
    const bySlot = { morning: { busy:0,moderate:0,quiet:0,total:0 }, afternoon: { busy:0,moderate:0,quiet:0,total:0 }, evening: { busy:0,moderate:0,quiet:0,total:0 }, night: { busy:0,moderate:0,quiet:0,total:0 } };

    reactions.forEach(({ reaction, created_at }) => {
      const d = new Date(created_at);
      const dow = d.getDay();
      const hour = d.getHours();
      const slot = hour >= 5 && hour < 12 ? 'morning' : hour >= 12 && hour < 17 ? 'afternoon' : hour >= 17 && hour < 21 ? 'evening' : 'night';
      const key = reaction?.toLowerCase();
      if (byDay[dow] && key) {
        byDay[dow][key] = (byDay[dow][key] || 0) + 1;
        byDay[dow].total++;
      }
      if (bySlot[slot] && key) {
        bySlot[slot][key] = (bySlot[slot][key] || 0) + 1;
        bySlot[slot].total++;
      }
    });

    // Score each day (higher = busier): busy=2, moderate=1, quiet=0
    const dayScores = byDay.map((d, i) => ({
      day: DAYS[i],
      dayFull: DAY_FULL[i],
      score: d.total > 0 ? Math.round(((d.busy * 2 + d.moderate) / (d.total * 2)) * 100) : null,
      total: d.total,
      topReaction: d.total > 0 ? (d.busy >= d.moderate && d.busy >= d.quiet ? 'Busy' : d.moderate >= d.quiet ? 'Moderate' : 'Quiet') : null
    }));

    // Score each time slot
    const slotScores = Object.entries(bySlot).map(([slot, d]) => ({
      slot,
      label: slot.charAt(0).toUpperCase() + slot.slice(1),
      icon: slot === 'morning' ? '🌅' : slot === 'afternoon' ? '☀️' : slot === 'evening' ? '🌆' : '🌙',
      hours: slot === 'morning' ? '5am–12pm' : slot === 'afternoon' ? '12–5pm' : slot === 'evening' ? '5–9pm' : '9pm–5am',
      score: d.total > 0 ? Math.round(((d.busy * 2 + d.moderate) / (d.total * 2)) * 100) : null,
      total: d.total,
      topReaction: d.total > 0 ? (d.busy >= d.moderate && d.busy >= d.quiet ? 'Busy' : d.moderate >= d.quiet ? 'Moderate' : 'Quiet') : null
    }));

    // Best and worst day
    const scoredDays = dayScores.filter(d => d.score !== null);
    const bestDay = scoredDays.length ? scoredDays.reduce((a,b) => b.score > a.score ? b : a) : null;
    const worstDay = scoredDays.length ? scoredDays.reduce((a,b) => b.score < a.score ? b : a) : null;

    // Best slot (most active evening/night = good action)
    const scoredSlots = slotScores.filter(s => s.score !== null);
    const bestSlot = scoredSlots.length ? scoredSlots.reduce((a,b) => b.score > a.score ? b : a) : null;
    const quietestSlot = scoredSlots.length ? scoredSlots.reduce((a,b) => b.score < a.score ? b : a) : null;

    return res.status(200).json({
      hasData: true,
      totalReactions: reactions.length,
      dayScores,
      slotScores,
      bestDay,
      worstDay,
      bestSlot,
      quietestSlot,
      summary: scoredDays.length >= 3
        ? `Busiest on ${bestDay?.dayFull || 'weekends'}, quietest on ${worstDay?.dayFull || 'weekdays'}. Best action ${bestSlot?.label?.toLowerCase() || 'evenings'}.`
        : null
    });
  } catch(e) {
    console.error('best-time error:', e);
    return res.status(500).json({ error: 'Server error' });
  }
}

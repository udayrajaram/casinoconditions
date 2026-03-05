// Weekly digest — call via cron or manually at /api/digest
// Sends a "most active casinos this week" email to all signed-up users
// Set up a weekly cron in vercel.json or call manually

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY;
const RESEND_API_KEY = process.env.RESEND_API_KEY; // sign up free at resend.com
const DIGEST_SECRET = process.env.DIGEST_SECRET;   // set any random string, pass as ?secret= to prevent abuse

export default async function handler(req, res) {
  // Basic auth to prevent random people triggering mass emails
  if (req.query.secret !== DIGEST_SECRET) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  try {
    // 1. Get top 5 most active casinos this week
    const weekAgo = new Date(Date.now() - 7 * 86400000).toISOString();
    const postsRes = await fetch(
      `${SUPABASE_URL}/rest/v1/posts?created_at=gte.${weekAgo}&select=casino,body,category,created_at,is_anonymous,author&order=created_at.desc&limit=200`,
      { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
    );
    const posts = await postsRes.json();

    // Count posts per casino
    const casinoCounts = {};
    posts.forEach(p => {
      if (!casinoCounts[p.casino]) casinoCounts[p.casino] = { count: 0, posts: [] };
      casinoCounts[p.casino].count++;
      if (casinoCounts[p.casino].posts.length < 2) casinoCounts[p.casino].posts.push(p);
    });

    const topCasinos = Object.entries(casinoCounts)
      .sort((a, b) => b[1].count - a[1].count)
      .slice(0, 5)
      .map(([name, data]) => ({ name, ...data }));

    if (topCasinos.length === 0) {
      return res.status(200).json({ success: true, message: 'No activity this week, digest skipped' });
    }

    // 2. Get all users with emails
    const usersRes = await fetch(
      `${SUPABASE_URL}/rest/v1/user_profiles?email=not.is.null&select=email,username,points,rank`,
      { headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` } }
    );
    const users = await usersRes.json();
    const realUsers = users.filter(u => u.email && !u.email.includes('seed_'));

    if (realUsers.length === 0) {
      return res.status(200).json({ success: true, message: 'No subscribers yet' });
    }

    // 3. Build email HTML
    const weekStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    const totalPosts = posts.filter(p => !p.is_seeded).length;

    function slugify(name) {
      return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    }

    function categoryEmoji(cat) {
      if (cat?.includes('Poker')) return '🃏';
      if (cat?.includes('Table')) return '🎲';
      if (cat?.includes('Slots')) return '🎰';
      return '📢';
    }

    const casinoRowsHtml = topCasinos.map((casino, i) => {
      const medal = ['🥇','🥈','🥉','4️⃣','5️⃣'][i];
      const recentPost = casino.posts[0];
      const slug = slugify(casino.name);
      return `
        <tr>
          <td style="padding:16px 0;border-bottom:1px solid #e8e8e4">
            <table cellpadding="0" cellspacing="0" width="100%">
              <tr>
                <td style="vertical-align:top;padding-right:12px;font-size:20px;width:32px">${medal}</td>
                <td>
                  <a href="https://casinoconditions.com/${slug}" style="font-size:15px;font-weight:600;color:#1a1a18;text-decoration:none">
                    ${casino.name}
                  </a>
                  <span style="font-size:12px;color:#888;margin-left:8px">${casino.count} report${casino.count !== 1 ? 's' : ''} this week</span>
                  ${recentPost ? `
                  <div style="margin-top:6px;background:#f7f7f5;border-radius:8px;padding:10px 12px;font-size:13px;color:#555;line-height:1.5">
                    ${categoryEmoji(recentPost.category)} "${recentPost.body}"
                    <span style="color:#aaa;font-size:11px;display:block;margin-top:4px">
                      — ${recentPost.is_anonymous ? 'Anonymous' : recentPost.author}
                    </span>
                  </div>` : ''}
                  <a href="https://casinoconditions.com/${slug}" style="font-size:12px;color:#1a6b3c;text-decoration:none;margin-top:6px;display:inline-block">
                    See all reports →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>`;
    }).join('');

    const emailHtml = (recipientName) => `<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0"></head>
<body style="margin:0;padding:0;background:#f7f7f5;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f7f7f5;padding:40px 20px">
    <tr><td align="center">
      <table width="520" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,.08)">

        <!-- HEADER -->
        <tr>
          <td style="background:#1a1a18;padding:24px 40px">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#1a6b3c;width:9px;height:9px;border-radius:50%"></td>
                <td style="padding-left:8px;font-size:16px;font-weight:600;color:#fff">
                  Casino<span style="color:#4caf70">Conditions</span>
                </td>
                <td style="padding-left:16px;font-size:11px;color:#666;text-transform:uppercase;letter-spacing:.08em">
                  Weekly Digest
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- BODY -->
        <tr>
          <td style="padding:32px 40px 8px">
            <h1 style="margin:0 0 6px;font-size:22px;font-weight:700;color:#1a1a18;letter-spacing:-.5px">
              Most active casinos this week 🎰
            </h1>
            <p style="margin:0 0 24px;font-size:14px;color:#888;line-height:1.6">
              Week of ${weekStr} · ${totalPosts} real player report${totalPosts !== 1 ? 's' : ''} submitted
            </p>

            <table cellpadding="0" cellspacing="0" width="100%">
              ${casinoRowsHtml}
            </table>
          </td>
        </tr>

        <!-- CTA -->
        <tr>
          <td style="padding:24px 40px 32px">
            <table cellpadding="0" cellspacing="0">
              <tr>
                <td style="background:#1a6b3c;border-radius:10px;padding:12px 28px">
                  <a href="https://casinoconditions.com" style="color:#fff;font-size:14px;font-weight:600;text-decoration:none">
                    Check live conditions now →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- FOOTER -->
        <tr>
          <td style="background:#f7f7f5;padding:20px 40px;border-top:1px solid #e8e8e4">
            <p style="margin:0;font-size:11px;color:#aaa;text-align:center;line-height:1.8">
              You're receiving this because you signed up at CasinoConditions.<br>
              <a href="https://casinoconditions.com" style="color:#1a6b3c;text-decoration:none">casinoconditions.com</a>
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

    // 4. Send via Resend
    let sent = 0;
    let failed = 0;

    for (const user of realUsers) {
      const name = user.username || user.email.split('@')[0];
      try {
        const r = await fetch('https://api.resend.com/emails', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${RESEND_API_KEY}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            from: 'CasinoConditions <digest@casinoconditions.com>',
            to: [user.email],
            subject: `🎰 Most active casinos this week — ${topCasinos[0]?.name} is #1`,
            html: emailHtml(name),
          }),
        });
        if (r.ok) sent++;
        else failed++;
      } catch(e) {
        failed++;
      }

      // Small delay to avoid rate limits
      await new Promise(r => setTimeout(r, 100));
    }

    return res.status(200).json({
      success: true,
      sent,
      failed,
      subscribers: realUsers.length,
      top_casino: topCasinos[0]?.name,
      week: weekStr,
    });

  } catch(e) {
    console.error('Digest error:', e);
    return res.status(500).json({ error: 'Server error', details: e.message });
  }
}

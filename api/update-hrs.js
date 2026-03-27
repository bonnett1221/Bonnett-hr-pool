export default async function handler(req, res) {
  try {
    let body = req.body;

    if (typeof body === "string") {
      try {
        body = JSON.parse(body);
      } catch {
        body = {};
      }
    }

    const players = Array.isArray(body?.players) ? body.players : [];

    if (!players.length) {
      return res.status(200).json({ ok: false, error: "No players received" });
    }

    const results = {};

    for (const name of players) {
      try {
        const search = encodeURIComponent(name);
        const searchRes = await fetch(
          `https://statsapi.mlb.com/api/v1/people/search?names=${search}`
        );
        const searchData = await searchRes.json();

        if (!searchData.people || !searchData.people.length) {
          results[name] = 0;
          continue;
        }

        const id = searchData.people[0].id;

        const statsRes = await fetch(
          `https://statsapi.mlb.com/api/v1/people/${id}/stats?stats=season&group=hitting`
        );
        const statsData = await statsRes.json();

        const hr = statsData?.stats?.[0]?.splits?.[0]?.stat?.homeRuns ?? 0;
        results[name] = hr;
      } catch (err) {
        results[name] = 0;
      }
    }

    return res.status(200).json({ ok: true, results });
  } catch (err) {
    return res.status(500).json({
      ok: false,
      error: err.message || "Server error"
    });
  }
}

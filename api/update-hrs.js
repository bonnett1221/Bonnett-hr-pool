export default async function handler(req, res) {
  const players = req.body.players || [];

  const results = {};

  for (const name of players) {
    try {
      const search = encodeURIComponent(name);
      const searchRes = await fetch(
        `https://statsapi.mlb.com/api/v1/people/search?names=${search}`
      );
      const searchData = await searchRes.json();

      if (!searchData.people || searchData.people.length === 0) {
        results[name] = 0;
        continue;
      }

      const id = searchData.people[0].id;

      const statsRes = await fetch(
        `https://statsapi.mlb.com/api/v1/people/${id}/stats?stats=season&group=hitting`
      );
      const statsData = await statsRes.json();

      const hr = statsData.stats?.[0]?.splits?.[0]?.stat?.homeRuns || 0;

      results[name] = hr;
    } catch {
      results[name] = 0;
    }
  }

  res.status(200).json(results);
}

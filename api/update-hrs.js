export default async function handler(req, res) {
  try {
    const response = await fetch("https://statsapi.mlb.com/api/v1/stats?stats=season&group=hitting&season=2024");
    const data = await response.json();

    const players = data.stats[0].splits;

    const hrMap = {};

    players.forEach(p => {
      const name = p.player.fullName;
      const hr = parseInt(p.stat.homeRuns || 0);
      hrMap[name] = hr;
    });

    res.status(200).json(hrMap);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch MLB data" });
  }
}

export default async function handler(req, res) {
  const ip = req.query.ip || '8.8.8.8';
  const apiKey = process.env.GEO_API_KEY;

  const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch IP data' });
  }
}

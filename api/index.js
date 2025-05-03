export default async function handler(req, res) {
  const { keyword } = req.query;

  if (!keyword) {
    return res.status(400).json({ error: 'Missing keyword' });
  }

  try {
    const response = await fetch(`https://api.keywordseverywhere.com/v1/get_keyword_data?keyword=${encodeURIComponent(keyword)}&metrics=1&volume=1&cpc=1&competition=1&format=json`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer 96010292639157dcb024',
        'Content-Type': 'application/json'
      }
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "API call failed", details: err.message });
  }
}

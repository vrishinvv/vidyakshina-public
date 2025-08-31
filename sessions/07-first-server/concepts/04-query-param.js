/* --------------------------------------------------
   07_query_params.js
   Demonstrate query parameters with Express
   -----------------------------------------
   ▸ Endpoint:  GET /dadjoke?term=<word>
   ▸ If `term` is provided, we search the Dad‑Joke API for that word.
   ▸ If not, we return a random joke (same as 06).
-------------------------------------------------- */

const express = require('express');
const fetch   = require('node-fetch'); // polyfill for Node 14

const app  = express();
const PORT = 3000;

app.get('/dadjoke', async (req, res) => {
  const { term } = req.query;              // ① Read query param(s)

  // Decide which URL to hit
  const apiURL = term
    ? `https://icanhazdadjoke.com/search?term=${encodeURIComponent(term)}`
    : 'https://icanhazdadjoke.com/';

  try {
    const apiRes = await fetch(apiURL, {
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!apiRes.ok) {
      return res.status(apiRes.status).json({ error: 'Upstream error' });
    }

    const data = await apiRes.json(); // ② data is an *object*

    // ③ Shape the response for our client
    if (term) {
      // Search endpoint returns an array − pick first (or send all)
      const first = data.results?.[0];
      if (!first) {
        return res.json({ message: `No jokes found for "${term}"` });
      }
      return res.json({ joke: first.joke });
    }

    // Random endpoint → { joke: "..." }
    res.json({ joke: data.joke });
  } catch (err) {
    console.error('Query param demo error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`🌐  Query‑Param demo → http://localhost:${PORT}/dadjoke?term=cat`);
});
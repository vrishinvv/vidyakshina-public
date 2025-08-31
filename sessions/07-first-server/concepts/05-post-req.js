/* --------------------------------------------------
   08_post_body_joke.js
   Simple POST example with JSON body parsing
   -----------------------------------------
   ▸ Endpoint:  POST /dadjoke
   ▸ Body shape: { "wantJoke": true }
   ▸ If `wantJoke` is true → fetch joke, else polite message.
-------------------------------------------------- */

const express = require('express');
const fetch   = require('node-fetch');

const app  = express();
const PORT = 3000;

app.use(express.json()); // ① Built‑in JSON body parser

app.post('/dadjoke', async (req, res) => {
  const { wantJoke } = req.body;          // ② Extract from body

  if (!wantJoke) {
    return res.json({ message: 'Okay! No joke today 😊' });
  }

  try {
    // ③ Fetch a random dad joke
    const apiRes = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json',
      }
    });

    if (!apiRes.ok) {
      return res.status(apiRes.status).json({ error: 'Upstream error' });
    }

    const data = await apiRes.json();      // ④ Parse JSON
    res.json({ joke: data.joke });         // ⑤ Return to client
  } catch (err) {
    console.error('POST body demo error:', err);
    res.status(500).json({ error: 'Server error' });
  }
});

app.listen(PORT, () => {
  console.log(`🌐  POST‑body demo → http://localhost:${PORT}/dadjoke  (send JSON)`);
});
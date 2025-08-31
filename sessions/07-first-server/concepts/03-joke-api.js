/* --------------------------------------------------
   03_joke_api.js
   Combine Express + fetch() to serve a Dad Joke
   ---------------------------------------------
   • We’ll hit the public "Dad Joke" API (https://icanhazdadjoke.com)
   • Then return the joke in *our* JSON response.
   • Demonstrates async/await, basic error handling, and res.json().
-------------------------------------------------- */

const express = require('express');
const fetch = require('node-fetch'); // ← polyfills `fetch()` in Node 14

const app = express();
const PORT = 3000;

/*
  GET /dadjoke
  -------------
  1. Make an outgoing HTTP request to fetch a random dad joke.
  2. If the upstream API is OK (status 200‑299), parse the JSON.
  3. Return just the `joke` string to our client.
*/
app.get('/dadjoke', async (req, res) => {
  try {
    // 1️⃣  Call the public API
    const apiRes = await fetch('https://icanhazdadjoke.com/', {
      headers: {
        'Accept': 'application/json',      // Ask for JSON back
      }
    });

    // 2️⃣  Check if the call succeeded
    if (!apiRes.ok) {
      // Pass through the same status code we got from the API
      return res.status(apiRes.status).json({ error: 'Failed to fetch joke' });
    }

    // 3️⃣  Parse JSON –> returns an *object*
    const data = await apiRes.json();
    // Example shape → { id: 'R7UfaahVfFd', joke: '...', status: 200 }

    // 4️⃣  Send our own response
    res.json({ joke: data.joke });
  } catch (err) {
    // Network error, JSON parse error, etc.
    console.error('Error fetching dad joke:', err);
    res.status(500).json({ error: 'Server error while fetching joke' });
  }
});

app.listen(PORT, () => {
  console.log(`🌐  Dad‑Joke proxy at http://localhost:${PORT}/dadjoke`);
});
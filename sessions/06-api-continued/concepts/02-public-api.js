/* --------------------------------------------------
   02_public_api.js  – Joke of the Day (async/await)
-------------------------------------------------- */

// const fetch = require('node-fetch');

import fetch from 'node-fetch';

async function main() {
  try {
    const url = 'https://icanhazdadjoke.com/';

    // “icanhazdadjoke” returns plain‑text by default; ask for JSON ✨
    const res = await fetch(url, {
      headers: { Accept: 'application/json' },
    });

    const data = await res.json();
    console.log('😄  Random dad joke:', data.joke);
  } catch (err) {
    console.error('Error talking to Joke API:', err);
  }
}

main();
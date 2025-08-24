/* --------------------------------------------------
   04_error_codes.js  – Basic status‑code handling
-------------------------------------------------- */

const fetch = require('node-fetch');

async function main() {
  try {
    // Intentionally request a non‑existent resource to trigger 404
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/999999');

    if (res.status === 200) {
      console.log('🟢  Success!');
      const data = await res.json();
      console.log(data);
      return;
    }

    if (res.status === 404) {
      console.warn('🔍  Not found (404)');
      return;
    }

    if (res.status === 500) {
      console.error('💥  Server error (500)');
      return;
    }

    // Fallback for any other status
    console.error('Unexpected status code:', res.status);
  } catch (err) {
    console.error('Network / fetch error:', err);
  }
}

main();
/* --------------------------------------------------
   01_fetch_basic.js  – Your first async/await fetch()
-------------------------------------------------- */

// const fetch = require('node-fetch');
import fetch from 'node-fetch';

async function main() {
  try {
    // 1️⃣  Make the request
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

    // 2️⃣  Quick health‑check
    // res.ok === true for status codes 200‑299
    console.log('✔️ Request success?', res.ok);
    console.log('Status code:', res.status);

    // 3️⃣  Parse the JSON body → JS object
    const todo = await res.json(); // res.json() returns a *Promise*

    // 4️⃣  Use the data
    console.log('TODO title:', todo.title);
  } catch (err) {
    // Network errors (DNS failure, no internet, etc.) land here
    console.error('Network / fetch error:', err);
  }
}

main();
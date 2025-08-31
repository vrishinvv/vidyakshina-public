/* --------------------------------------------------
   02_routes_basic.js  – Multiple routes & params
-------------------------------------------------- */

import express from 'express'
const app = express();
const PORT = 3000;

// Root route
app.get('/', (req, res) => {
  res.send('Welcome! Try /hello/yourname or /search?term=node');
});

// Route *parameter* → /hello/Alice
app.get('/hello/:name', (req, res) => {
  const name = req.params.name; // ← "Alice"
  res.send(`👋  Hello, ${name}!`);
});

// Query parameter → /search?term=node&name=vrishin&age=24
app.get('/search', (req, res) => {
  const { term, name, age } = req.query; // ← "node"
  res.json({ message: `You searched for: ${term}, ${name}, ${age}` });
});

app.listen(PORT, () => {
  console.log(`🌐  Express examples at http://localhost:${PORT}`);
});
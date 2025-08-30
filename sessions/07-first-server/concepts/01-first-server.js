/* --------------------------------------------------
   01_first_express_server.js  – Hello World in Express
-------------------------------------------------- */

// const express = require('express');
import express from 'express';
const app = express(); // 1️⃣  Create an Express *app*

// http://localhost:3000
// 2️⃣  Define a single *route* – GET /

app.get('/', (req, res) => {
  console.log("im doing something")
  res.send('👋  Hello World from Express!');
});

app.get('/something', (req, res) => {
  console.log("im doing something else")
  res.send('👋  Hello World from Expressssssss!');
})


// 3️⃣  Start the server
const PORT = 8001
app.listen(PORT, () => {
  console.log(`🌐  Express server listening on http://localhost:${PORT}`);
})

//https://some_url_name.com/. -> unique
//https://some_url_name.com/path1. -> unique
//https://some_url_name.com/path2. -> unique
//https://some_url_name.com/path3/paath4. -> unique
//https://some_url_name.com/path3/paath5/path6. -> unique

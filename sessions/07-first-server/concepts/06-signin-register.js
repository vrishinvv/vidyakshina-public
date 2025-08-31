const express = require('express');
const app = express();
app.use(express.json());

let users = []; // in-memory store

// Register
app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (users.find(u => u.username === username)) {
    return res.status(400).json({ error: "User already exists" });
  }
  users.push({ username, password });
  res.json({ message: "Registered successfully" });
});

// Sign In
app.post('/signin', (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if (!user) return res.status(401).json({ error: "Invalid credentials" });
  res.json({ message: "Signed in successfully" });
});

app.listen(3000, () => console.log("Server running on 3000"));


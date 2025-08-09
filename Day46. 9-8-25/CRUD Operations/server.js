const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = 8080;
const DB_PATH = './config/db.json';

app.use(bodyParser.json());

//  read db
function readDB() {
  const data = fs.readFileSync(DB_PATH, 'utf8');
  return JSON.parse(data);
}

// Write db
function writeDB(data) {
  fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
}

//  READ all users
app.get('/users', (req, res) => {
  const db = readDB();
  res.json(db.users);
});

// READ single user
app.get('/users/:id', (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id === parseInt(req.params.id));
  if (user) res.json(user);
  else res.status(404).json({ message: 'User not found' });
});

// CREATE new user
app.post('/users', (req, res) => {
  const db = readDB();
  const newUser = {
    id: db.users.length ? db.users[db.users.length - 1].id + 1 : 1,
      ...req.body
  };
  db.users.push(newUser);
  writeDB(db);
  res.status(201).json("User created", newUser);
});

// ✏️ UPDATE user (PUT)
app.put('/users/:id', (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(u => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'User not found' });

  db.users[index] = { id: parseInt(req.params.id), ...req.body };
  writeDB(db);
  res.json(db.users[index]);
});

// UPDATE user (PATCH)
app.patch('/users/:id', (req, res) => {
  const db = readDB();
  const user = db.users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: 'User not found' });

  Object.assign(user, req.body);
  writeDB(db);
  res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const db = readDB();
  const updatedUsers = db.users.filter(u => u.id !== parseInt(req.params.id));
  if (updatedUsers.length === db.users.length)
    return res.status(404).json({ message: 'User not found' });

  db.users = updatedUsers;
  writeDB(db);
  res.json({ message: 'User deleted' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

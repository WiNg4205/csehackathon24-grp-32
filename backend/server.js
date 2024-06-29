import databaseHandler from './data.js'
import express, { json } from 'express'
import { login, register } from './auth.js'

const PORT = 3000
const HOST = 'localhost'


const app = express()

app.use(json())

// test request
app.get('/test', (req, res, next) => {
  try {
    return res.json('Hello Browser');
  } catch (err) {
    next(err);
  }
});

// register request
app.put('/register', (req, res) => {
  const { email, password, username, nameFirst, nameLast } = req.body;
  res.json(register(email, password, username, nameFirst, nameLast));
});

const server = app.listen(PORT, HOST, () => {
  console.log(`⚡️ Server listening on port ${PORT} at ${HOST}`);
  databaseHandler.connect()

})

process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
  databaseHandler.disconnect()
});

// register request
app.put('/register', (req, res) => {
  try {
    const { firstName, lastName, email, username, password } = req.body
    databaseHandler.addUser(firstName, lastName, email, username, password)
    return res.json('User added');
  } catch (err) {
    next(err);
  }
});

// login request
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  console.log(email, password)
  res.json(login(email, password));
});

app.post('/addHabit', (req, res, next) => {
  try {
    const { name, description, users } = req.body
    databaseHandler.addHabit(name, description, users)
    return res.json('Habit added');
  } catch (err) {
    next(err);
  }
});

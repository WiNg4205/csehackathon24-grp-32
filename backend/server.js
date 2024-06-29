import express from 'express'

import { login, register } from './auth'

const PORT = 3000
const HOST = 'localhost'


const app = express()

// test request
app.get('/test', (req, res, next) => {
  try {
    return res.json('Hello Browser');
  } catch (err) {
    next(err);
  }
});

// login request
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  res.json(login(email, password));
});

// register request
app.put('/register', (req, res) => {
  const { email, password, username, nameFirst, nameLast } = req.body;
  res.json(register(email, password, username, nameFirst, nameLast));
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on port ${PORT} at ${HOST}`);
})

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
});



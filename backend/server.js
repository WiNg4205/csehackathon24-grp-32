import databaseHandler from './data.js'
import express, { json } from 'express'
import cors from 'cors'

const PORT = 3000
const HOST = 'localhost'


const app = express()

app.use(json())
app.use(cors())

// test request
app.get('/test', (req, res, next) => {
  try {
    return res.json('Hello Browser');
  } catch (err) {
    next(err);
  }
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
app.post('/register', (req, res) => {
  try {
    
    const { firstName, lastName, email, username, password } = req.body
    
    databaseHandler.addUser(firstName, lastName, email, username, password).then((ret) => {
      if (ret) {
        return res.status(201).json('User added');
      } else {
        return res.status(409).json('Username already used');
      }
    })} catch (error) {
      return res.status(500).json('Internal Server Error');
  }
});

// login request
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const userId = await databaseHandler.auth(email, password);
    if (userId) {
      return res.status(200).json(userId);
    } else {
      return res.status(401).json('Login failed');
    }
  } catch (error) {
    console.err('Error during login:', err);
    return res.status(500).json('Internal Server Error');
  }
});

app.get('/userDetails', (req, res) => {
  const { userId } = req.query;
  const user = databaseHandler.getUser(userId);
  return res.status(200).json(user);
});

app.get('/friends', (req, res) => {
  const { userId } = req.query;
  const user = databaseHandler.getUser(userId);
  return res.status(200).json(user.friends);
});

app.post('/addFriend', (req, res) => {
  const { userId, friendUsername } = req.body;
  const user = databaseHandler.addFriend(userId, friendUsername);
  return res.status(200).json(user.friends);
});

app.post('/uploadStreak', (req, res) => {
  const { userId, habitId, image } = req.body;
  const hasUploadedStreak = databaseHandler.uploadStreak(userId, habitId, image);
  return res.status(200).json(hasUploadedStreak);
});

app.get('/hasUploadedStreak', (req, res) => {
  const { userId, habitId } = req.query;
  const user = databaseHandler.hasUploadedStreak(userId, habitId);

  return res.status(200).json(user.uploadedStreak);
});

app.post('/addUserHabit', (req, res) => {
  const { userId, habitId } = req.body;
  databaseHandler.addUserHabit(userId, habitId);
  return res.status(200).json('User habit added');
});

app.post('/addHabit', (req, res) => {
  const { name, description, users } = req.body
  databaseHandler.addHabit(name, description, users)
  return res.status(200).json('Habit added')
});

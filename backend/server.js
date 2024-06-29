import databaseHandler from './data.js'
import express, { json } from 'express'
import cors from 'cors'
import multer from 'multer'
import bodyParser from 'body-parser'

const PORT = 3000
const HOST = 'localhost'


const app = express();

app.use(json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

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

app.get('/userDetails', async (req, res) => {
  const { userId } = req.query;
  try {
    const user = await databaseHandler.getUser(userId);
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/habitDetails', async (req, res) => {
  const { habitId } = req.query;
  try {
    const habit = await databaseHandler.getHabit(habitId);
    return res.status(200).json(habit);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
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

app.post('/uploadStreak', upload.single('file'), (req, res) => {
  try {
    const { userId, habitId } = req.body;
    const image = req.file;    
    const hasUploadedStreak = databaseHandler.uploadStreak(userId, habitId, image);
    return res.status(200).json({ success: hasUploadedStreak });
  } catch (error) {
    console.error('Error uploading streak:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
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

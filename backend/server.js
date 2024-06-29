import databaseHandler from './data.js'
import express, { json } from 'express'

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
    databaseHandler.addUser(firstName, lastName, email, username, password)
    if (ret) {
      return res.status(201).json('User added');
    } else {
      return res.status(409).json('Username already used');
    }
  } catch (err) {
    console.err('Error during register:', err);
    return res.status(500).json('Internal Server Error');
  }
});

// login request
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const ret = await databaseHandler.auth(email, password);
    if (ret) {
      return res.status(200).json('Login successful');
    } else {
      return res.status(401).json('Login failed');
    }
  } catch (error) {
    console.err('Error during login:', err);
    return res.status(500).json('Internal Server Error');
  }
});

app.post('/addHabit', (req, res) => {
  const { name, description, users } = req.body
  databaseHandler.addHabit(name, description, users)
  return res.status(200).json('Habit added')
});

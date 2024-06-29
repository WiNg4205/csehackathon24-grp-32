import express from 'express'
import databaseHandler from './data.js'

const PORT = 3000
const HOST = 'localhost'


const app = express()

const server = app.listen(PORT, HOST, () => {
  // DO NOT CHANGE THIS LINE
  console.log(`⚡️ Server listening on port ${PORT} at ${HOST}`);
  databaseHandler.connect()

})

// For coverage, handle Ctrl+C gracefully
process.on('SIGINT', () => {
  server.close(() => console.log('Shutting down server gracefully.'));
  databaseHandler.disconnect()
});

// Example get request
app.post('/test', (req, res, next) => {
  try {
    // const { a } = req.body;
    console.log(req.body);
    return res.json('Hello Browser');
  } catch (err) {
    next(err);
  }
});

app.post('/addUser', (req, res, next) => {
  try {
    console.log(req.body)
    const { userId, firstName, lastName, username, password } = req.body
    databaseHandler.addUser(userId, firstName, lastName, username, password)
    return res.json('User added');
  } catch (err) {
    next(err);
  }
});


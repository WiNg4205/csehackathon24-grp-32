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
});

// Example get request
app.get('/test', (req, res, next) => {
  try {
    return res.json('Hello Browser');
  } catch (err) {
    next(err);
  }
});


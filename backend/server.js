import express from 'express'

const PORT = 3000
const HOST = 'localhost'


const app = express()

const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on port ${PORT} at ${HOST}`);
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


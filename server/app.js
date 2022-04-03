const { join } = require('path');
require('dotenv').config();
const express = require('express');
const compression = require('compression');
const cors = require('cors');
const router = require('./routes');

const app = express();
const { env: { PORT, NODE_ENV } } = process;

app.disable('x-powered-by');
app.set('port', PORT || 5000);
app.use([
  compression(),
  cors(),
  express.json(),
  express.urlencoded({ extended: true }),
]);

app.use('/api/v1/', router);

if (NODE_ENV === 'development' || NODE_ENV === 'test') {
  app.get('/', (req, res) => {
    res.json({ message: 'Server Is Running' });
  });
} else if (NODE_ENV === 'production') {
  app.use(express.static(join(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

module.exports = app;

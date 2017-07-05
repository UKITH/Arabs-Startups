const mongoose = require('mongoose');
const testCollection = require('../database/schema.js');
const app = require('./server.js');
require('env2')('./config.env');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  app.listen(4040);
})

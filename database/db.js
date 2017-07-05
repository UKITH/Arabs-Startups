const mongoose = require('mongoose');
require('env2')('./config.env');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // We are connected
});

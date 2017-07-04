const app = require('./server.js');

const mongoose = require('mongoose');

mongoose.connect('mongodb://suha:shukran1@ds139082.mlab.com:39082/arab-startups');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // We are connected
  console.log('connected to db');
  app.listen(4040);
});

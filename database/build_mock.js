const mongoose = require('mongoose');
const mockData = require('../src/mock_data.js');
const { mockCollection } = require('./schema.js');
require('env2')('./config.env');

mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  // We are connected
  const startup = new mockCollection(mockData.data[0])
  startup.save((error, res) => {
    if(error) console.log(error);
    console.log('startup added');
  })
});

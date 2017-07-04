const mongoose = require('mongoose');
const mockData = require('../src/mock_data.js');
const { mockCollection } = require('./schema.js');

mongoose.connect('mongodb://suha:shukran1@ds139082.mlab.com:39082/arab-startups');

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

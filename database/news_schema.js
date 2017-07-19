const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  newsTitle: {type: String, required: true},
  subhead: {type: String, required: true},
  newsDescription: {type: String, required: true},
  author: {type: String, required: true},
  newsDate: {type: Date, default: Date.now}
})

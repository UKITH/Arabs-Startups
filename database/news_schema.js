const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
  newsTitle: {type: String, required: true},
  subhead: {type: String, required: true},
  newsDescription: {type: String, required: true},
  author: {type: String, required: true},
  newsDate: {type: Date, default: Date.now}
});

const mockNews = mongoose.model('News Mock Data', newsSchema);
const news = mongoose.model('All News Collection', newsSchema);

module.exports = {
  news,
  mockNews
};

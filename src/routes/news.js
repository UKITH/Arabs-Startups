const getNews = require('../actions/get_news.js');

module.exports = (req, res) => {
  getNews(req.params.id, 'news', res);
}

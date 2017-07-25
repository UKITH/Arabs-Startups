const findNews = require('../actions/find_news.js');

module.exports = (req, res) => {
  findNews(req.params.id, 'news', res);
}

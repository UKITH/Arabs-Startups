const findNews = require('../actions/get_news.js');

module.exports = (req, res) => {
  findNews(req.params.id, 'news', res);
}

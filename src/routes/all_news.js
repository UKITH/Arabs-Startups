const findNews = require('../actions/find_all_news');

module.exports = (req, res) => {
  findNews('all_news', res)
}

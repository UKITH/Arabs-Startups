const getNews = require('../actions/get_all_news');

module.exports = (req, res) => {
  getNews(res)
}

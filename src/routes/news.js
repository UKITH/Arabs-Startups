const { mockNews } = require('../../database/news_schema.js');

module.exports = (req, res) => {
  const id = req.params.id;
  mockNews.findOne({_id:id}, (error, news) => {
    if (error) res.render('not_found')
    else {
      res.render('news', {
        news: news
      })
    }
  })
}

const { mockNews } = require('../../database/news_schema.js');

const findNews = (id, hbs, res) => {
  mockNews.findOne({_id:id}, (error, news) => {
    if (error) res.render('not_found')
    else {
      res.render(hbs, {
        news: news
      })
    }
  })
}

module.exports = findNews;

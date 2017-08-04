const { mockNews } = require('../../database/news_schema.js');

const getNews = (id, hbs, res) => {
  mockNews.findOne({_id:id}, (error, news) => {
    if (error) res.render('not_found')
    else {
      res.render(hbs, {
        news: news
      })
    }
  })
}

module.exports = getNews;

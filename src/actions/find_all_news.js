const { mockNews } = require('../../database/news_schema.js');

const findAllNews = (hbs, response) => {
  mockNews.find((error, news) => {
    if (error) response.render('not_found')
    else {
      response.render('all_news', {
        SingleNews: news.shift(),
        news: news
      })
    }
  })
}

module.exports = findAllNews

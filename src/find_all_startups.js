const { mockCollection } = require('../database/schema.js');

const findAllStartupsStartups = (options, hbs, response) => {
  mockCollection.find(options, (error, startups) => {
    if (error) response.render('not_found')
    else {
      response.render(hbs, {
        startups: startups
      })
    }
  })
}

module.exports = findAllStartupsStartups;

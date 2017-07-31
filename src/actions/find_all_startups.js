const { mockCollection } = require('../../database/startup_schema.js');

const findAllStartups = (options, hbs, response) => {
  mockCollection.find(options, (error, startups) => {
    if (error) response.render('not_found')
    else {
      response.render(hbs, {
        startups: startups
      })
    }
  })
}


module.exports = findAllStartups;

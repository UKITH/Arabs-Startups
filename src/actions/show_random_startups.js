const { mockCollection } = require('../../database/startup_schema.js');
const random = require('mongoose-simple-random');

const showRandomStartups = (hbs, response) => {
  let limitResults = { limit: 10 };
  mockCollection.findRandom({}, {}, limitResults, (error, startups) => {
    if (error) response.render('not_found')
    else {
      response.render(hbs, {
        startups: startups
      })
    }
  })
}


module.exports = showRandomStartups;

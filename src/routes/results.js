const { mockCollection } = require('../../database/schema.js');

module.exports = (req, res) => {
  searchWord = req.query.search;
  stage = Object.keys(req.query)[1];

  if (searchWord) {
    mockCollection.find({"startupName": searchWord}, (error, startupFound) => {
      if (error) res.render('not_found')
      else {
        res.render('search_results', {
          startups: startupFound
        })
      }
    })
  }

  if(stage) {
    mockCollection.find({"fundingStage": stage}, (error, startups) => {
      if (error) res.render('not_found')
      else {
        res.render('search_results', {
          startups: startups
        })
      }
    })
  }

  // this is here so ican test the results page
  // when we have the search engine i'll remove it
  if(!searchWord && !stage){
    res.render('search_results')
  }
}

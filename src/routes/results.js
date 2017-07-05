const { mockCollection } = require('../../database/schema.js');

module.exports = (req, res) => {
  searchWord = req.query.search;
  stage = Object.keys(req.query)[1];
  console.log(stage);
  // delete the 3 lines under here
  // console.log(searchWord);
  // if(!searchWord || stage === 'none') {
  //   res.render('search_results')
  // }
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
      console.log('THIS OONE', startups);
      if (error) res.render('not_found')
      else {
        res.render('search_results', {
          startups: startups
        })
      }
    })
  }

  // if (stage && searchWord) {
  //   mockCollection.find({
  //     startupName: searchWord,
  //     fundingStage: stage
  //   })
  // }
  if(!searchWord && !stage){
    res.render('search_results')
  }
}

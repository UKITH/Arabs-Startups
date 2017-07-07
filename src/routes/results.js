const { mockCollection } = require('../../database/schema.js');

module.exports = (req, res) => {
  var options = {};
  const filterArray = [
    req.query.search ? 'search' : 0,
    req.query.stage ? 'stage' : 0,
    req.query.sector ? 'sector' : 0
  ].join('')

  function findAll(options) {
    mockCollection.find(options, (error, startups) => {
      if (error) res.render('not_found')
      else {
        res.render('search_results', {
          startups: startups
        })
      }
    })
  }

  switch (filterArray) {
    case 'searchstagesector':
       options = {
        startupName: req.query.search,
        startupSector: req.query.sector,
        fundingStage: req.query.stage
      }
      findAll(options);
    break;

    case 'searchstage0':
       options = {
        startupName: req.query.search,
        fundingStage: req.query.stage
      }
      findAll(options);
    break;

    case '00sector':
       options =  {
        startupSector: req.query.sector,
      }
      findAll(options);
    break;
    // there needs to be validation for the search input in the front end so this would fully work without any bugs
    case 'search00':
       options = {
        startupName: req.query.search,
      }
      findAll(options);
    break;

    case '0stagesector':
       options = {
        fundingStage: req.query.stage,
        startupSector: req.query.sector
      }
      findAll(options);
    break;

    case 'search0sector':
      options = {
        startupName: req.query.search,
        startupSector: req.query.sector
      }
      findAll(options);
    break;

    case '0stage0':
      options = {
        fundingStage: req.query.stage,
      }
      findAll(options);
    break;

    default: res.render('search_results')
  }
}

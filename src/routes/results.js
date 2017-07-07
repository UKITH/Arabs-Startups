const { mockCollection } = require('../../database/schema.js');

module.exports = (req, res) => {
  let options = {};
  const filterArray = [
    req.query.search ? 'search-' : 'null-',
    req.query.stage ? 'stage-' : 'null-',
    req.query.sector ? 'sector' : 'null'
  ].join('')

  const findAll = options => {
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
    case 'search-stage-sector':
       options = {
        startupName: req.query.search,
        startupSector: req.query.sector,
        fundingStage: req.query.stage
      }
      findAll(options);
    break;

    case 'search-stage-null':
       options = {
        startupName: req.query.search,
        fundingStage: req.query.stage
      }
      findAll(options);
    break;

    case 'null-null-sector':
       options =  {
        startupSector: req.query.sector,
      }
      findAll(options);
    break;
    // there needs to be validation for the search input in the front end so this would fully work without any bugs
    case 'search-null-null':
       options = {
        startupName: req.query.search,
      }
      findAll(options);
    break;

    case 'null-stage-sector':
       options = {
        fundingStage: req.query.stage,
        startupSector: req.query.sector
      }
      findAll(options);
    break;

    case 'search-null-sector':
      options = {
        startupName: req.query.search,
        startupSector: req.query.sector
      }
      findAll(options);
    break;

    case 'null-stage-null':
      options = {
        fundingStage: req.query.stage,
      }
      findAll(options);
    break;

    default: res.render('search_results')
  }
}

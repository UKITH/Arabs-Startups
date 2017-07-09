const findAll = require('../find_all.js');

module.exports = (req, res) => {
  let options = {};
  const filtersArray = [
    req.query.search ? 'search-' : 'noSearch-',
    req.query.stage ? 'stage-' : 'noStage-',
    req.query.sector ? 'sector' : 'noSector'
  ].join('')

  switch (filtersArray) {
    case 'search-stage-sector':
       options = {
        startupName: req.query.search,
        startupSector: req.query.sector,
        fundingStage: req.query.stage
      }
      findAll(options, 'search_results', res);
    break;

    case 'search-stage-noSector':
       options = {
        startupName: req.query.search,
        fundingStage: req.query.stage
      }
      findAll(options, 'search_results', res);
    break;

    case 'noSearch-noStage-sector':
       options =  {
        startupSector: req.query.sector,
      }
      findAll(options, 'search_results', res);
    break;
    // there needs to be validation for the search input in the front end so this would fully work without any bugs
    case 'search-noStage-noSector':
       options = {
        startupName: req.query.search,
      }
      findAll(options, 'search_results', res);
    break;

    case 'noSearch-stage-sector':
       options = {
        fundingStage: req.query.stage,
        startupSector: req.query.sector
      }
      findAll(options, 'search_results', res);
    break;

    case 'search-noStage-sector':
      options = {
        startupName: req.query.search,
        startupSector: req.query.sector
      }
      findAll(options, 'search_results', res);
    break;

    case 'noSearch-stage-noSector':
      options = {
        fundingStage: req.query.stage,
      }
      findAll(options, 'search_results', res);
    break;

    default: res.render('search_results')
  }
}

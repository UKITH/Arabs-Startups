const findAll = require('../find_all.js');

module.exports = (req, res) => {
  let options = {};
  const filtersArray = [
    req.query.search ? 'search-' : 'null-',
    req.query.stage ? 'stage-' : 'null-',
    req.query.sector ? 'sector' : 'null'
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

    case 'search-stage-null':
       options = {
        startupName: req.query.search,
        fundingStage: req.query.stage
      }
      findAll(options, 'search_results', res);
    break;

    case 'null-null-sector':
       options =  {
        startupSector: req.query.sector,
      }
      findAll(options, 'search_results', res);
    break;
    // there needs to be validation for the search input in the front end so this would fully work without any bugs
    case 'search-null-null':
       options = {
        startupName: req.query.search,
      }
      findAll(options, 'search_results', res);
    break;

    case 'null-stage-sector':
       options = {
        fundingStage: req.query.stage,
        startupSector: req.query.sector
      }
      findAll(options, 'search_results', res);
    break;

    case 'search-null-sector':
      options = {
        startupName: req.query.search,
        startupSector: req.query.sector
      }
      findAll(options, 'search_results', res);
    break;

    case 'null-stage-null':
      options = {
        fundingStage: req.query.stage,
      }
      findAll(options, 'search_results', res);
    break;

    default: res.render('search_results')
  }
}

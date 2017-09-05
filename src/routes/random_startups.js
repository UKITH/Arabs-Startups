const showRandomStartups = require('../actions/show_random_startups.js');

module.exports = (req, res) => {
  showRandomStartups('search_results', res)
}

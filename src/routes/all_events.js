const findAllEvents = require('../actions/find_all_events.js');

module.exports = (req, res) => {
  findAllEvents('all_events', res)
}

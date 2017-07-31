const getAllEvents = require('../actions/get_all_events.js');

module.exports = (req, res) => {
  getAllEvents('all_events', res)
}

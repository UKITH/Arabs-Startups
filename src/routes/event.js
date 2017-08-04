const getEvent = require('../actions/get_event.js');

module.exports = (req, res) => {
  getEvent(req.params.id, 'event', res);
}

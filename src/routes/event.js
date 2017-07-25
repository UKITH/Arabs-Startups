const findEvent = require('../actions/find_event.js');

module.exports = (req, res) => {
  findEvent(req.params.id, 'event', res);
}

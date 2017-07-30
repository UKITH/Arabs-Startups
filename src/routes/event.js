const findEvent = require('../actions/get_event.js');

module.exports = (req, res) => {
  findEvent(req.params.id, 'event', res);
}

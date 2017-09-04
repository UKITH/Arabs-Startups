const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
  eventTitle: {type: String, required: true},
  eventDate: {type: String, required: true},
  eventTime: {type: String, required: true},
  eventDescription: {type: String, required: true},
  eventOrganiser: {type: String, required: true},
  eventAddress: {type: String, required: true}
});

const events = mongoose.model('UnOfficial Events', eventsSchema);
const officialEvents = mongoose.model('Official Events Collection', eventsSchema);

module.exports = {
  officialEvents,
  events
};

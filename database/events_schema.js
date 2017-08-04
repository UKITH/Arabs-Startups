const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
  eventTitle: {type: String, required: true},
  eventDate: {type: Date, min: Date.now(), required: true},
  eventTime: {type: String, required: true},
  eventDescription: {type: String, required: true},
  eventOrganiser: {type: String, required: true},
  eventAddress: {type: String, required: true}
});

const mockEvents = mongoose.model('Mock Events', eventsSchema);
const events = mongoose.model('Events Collection', eventsSchema);

module.exports = {
  mockEvents,
  events
};

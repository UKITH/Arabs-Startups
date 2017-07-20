const mongoose = require('mongoose');

const eventsSchema = mongoose.Schema({
  eventTitle: {type: String, required: true},
  eventDate: {type: Date, min: Date.now(), required},
  eventTime: {type: Number, required},
  eventDescription: {type: String, required},
  eventOrganiser: {type: String, required},
  eventTitle: {type: String, required}
});

const mockEvents = mongoose.model('Mock Events', eventsSchema);
const events = mongoose.model('Events Collection', eventsSchema);

module.exports = {
  mockEvents,
  events
};

const { mockEvents } = require('../../database/events_schema.js');

const findAllEvents = (hbs, response) => {
  mockEvents.find({}, (error, events) => {
    if (error) response.render('not_found')
    else {
      let upcomingEvents = [];
      let pastEvents = [];
      events.forEach((event) => {
        if(event.eventDate > new Date()) {
          upcomingEvents.push(event)
        }
        else {
          pastEvents.push(event)
        }
      })
      response.render(hbs, {
         upcomingEvents,
         pastEvents
      })
    }
  })
}

module.exports = findAllEvents;

const { events } = require('../../database/events_schema.js');

const getAllEvents = (hbs, response) => {
  events.find({}, (error, events) => {
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

module.exports = getAllEvents;

const { mockEvents } = require('../../database/events_schema.js');

const findEvent = (id, hbs, res) => {
  mockEvents.findOne({_id:id}, (error, event)=> {
    if(error) res.render('not_found');
    else {
      res.render(hbs, {
          event: event
      })
    }
  })
}

module.exports = findEvent;

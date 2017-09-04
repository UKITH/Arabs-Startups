const { events } = require('../../database/events_schema.js');
const latLng = require('../helpers/latlng.js');

const getEvent = (id, hbs, res) => {
  events.findOne({_id:id}, (error, event)=> {
    if(error) res.render('not_found');
    else {
      latLng(event.eventAddress, (err, coords) => {
        if (err) res.render('not_found')
        else {
          res.render(hbs, {
            event: event,
            latlng: coords,
          })
        }
      })
    }
  })
}

module.exports = getEvent;

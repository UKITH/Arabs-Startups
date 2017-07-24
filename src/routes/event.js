const { mockEvents } = require('../../database/events_schema.js');

module.exports = (req, res) => {
  const id = req.params.id;
  mockEvents.findOne({_id:id}, (error, event)=> {
    if(error) res.render('not_found');
    else {
      res.render('event', {
          event: event
      })
    }
  })
}

const { events } = require('../../database/events_schema.js');

module.exports = (req, res) => {

  const date = new Date(req.body.month + '-' + req.body.day + '-' + req.body.year).toString();
  console.log(date);

  const time = req.body.hour + ':' + req.body.minute;

  let eventT = new events({
    eventTitle: req.body.title,
    eventDate: date,
    eventTime: time,
    eventDescription: req.body.description,
    eventOrganiser: req.body.organiser,
    eventAddress: req.body.address
  })

  console.log(eventT);

  eventT.save((err) => {
    if(err) return err

    res.redirect('/submitMessage');
  })
}

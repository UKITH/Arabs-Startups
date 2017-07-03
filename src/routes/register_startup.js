const { oneTimeCollection } = require('../../database/schema.js');

module.exports = (req, res) => {
  const startup = new oneTimeCollection(req.body);
  startup.save((err) => {
    if (err) return err
  })
  console.log(oneTimeCollection);
  res.redirect('/');
}

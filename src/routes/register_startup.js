const { testCollection } = require('../../database/schema.js');
const mongoose = require('mongoose');

module.exports = (req, res) => {
  let startup = new testCollection({
    startupName: req.body['startup-name'],
    founderName: req.body['founder-name'],
    startupDescription: req.body['description'],
    startupField: req.body.Select,
    startupStage: req.body['startup-stage'],
    founderEmail: req.body['startup-email'],
    startupWebsite: req.body['startup-website']
  });

  console.log(startup);

   startup.save((err) => {
    if (err) {
      throw err;
    }
    res.redirect('/')
  })
}

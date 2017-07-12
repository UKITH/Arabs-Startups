const { mockCollection } = require('../../database/schema.js');
const mongoose = require('mongoose');

module.exports = (req, res) => {
  let startup = new mockCollection({
    startupName: req.body['startup-name'],
    founderName: req.body['founder-name'],
    coFounderName: req.body['coFounder-name'],
    startupDescription: req.body['description'],
    startupSector: req.body.Select,
    fundingStage: req.body['Select-stage'],
    email: req.body['startup-email'],
    startupWebsite: req.body['startup-website']
  });

   startup.save((err) => {
    if (err) {
      throw err;
    }
    res.redirect('/')
  })
}

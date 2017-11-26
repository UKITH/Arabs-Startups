const { mockCollection } = require('../../database/startup_schema.js');

module.exports = (req, res) => {
  const id = req.params.id;
  mockCollection.findOne({_id:id}, (error, startup)=> {
    if(error) res.render('not_found');
    else {
      let coFounders;
      if(startup.coFounderName){
        coFounders = startup.coFounderName.split(',')
      } else {
        coFounders = [];
      }
      res.render('startup_profile', {
          startup,
          coFounders
      })
    }
  })
}

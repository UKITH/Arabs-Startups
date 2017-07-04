const { mockCollection } = require('../../database/schema.js');

module.exports = (req, res) => {
  const id = req.query.id;
  mockCollection.findOne({_id:id}, (error, startup)=> {
    if(error) console.log(error);
    else {
      res.render('startup_profile', {
          startup: startup
      })
    }
  })
}

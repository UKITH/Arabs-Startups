const { mockCollection } = require('../../database/schema.js');

module.exports = (req, res) => {
  const id = req.params.id;
  mockCollection.findOne({_id:id}, (error, startup)=> {
    if(error) res.render(error);
    else {
      res.render('startup_profile', {
          startup: startup
      })
    }
  })
}

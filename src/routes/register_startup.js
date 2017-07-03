const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../', 'mock_data.js');

module.exports = (req, res) => {
  console.log(req.body);
  
  res.redirect('/')
}

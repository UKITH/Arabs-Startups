const mongoose = require('mongoose');

const startupSchema = mongoose.Schema({
  founderName: {type: String, required: true},
  startupName: {type: String, required: true, unique: true},
  phoneNumber: {type: String, required: true},
  field: {type: String, required: true},
  founderEmail: {type: String, required: true},
  startupStage: {type: String, required: true}
});

const startupInfoTable = mongoose.model('startupInfoTable', startupSchema);

const health = mongoose.model('Digital Health and Medical Technologies', startupSchema);
const it = mongoose.model('IT', startupSchema);
const security = mongoose .model('Security and Safety', startupSchema);
const hardware = mongoose.model('Hardware', startupSchema);
const software = mongoose.model('Software', startupSchema);
const lifeScience = mongoose.model('Life Sciences', startupSchema);
const eCommerce = mongoose.model('E-Commerce and Fintech', startupSchema);
const education = mongoose.model('Education and Knowledge Technologies', startupSchema);
const cities = mongoose.model('Smart & Safe Cities/Homes', startupSchema);
const other = mongoose.model('Other', startupSchema);

module.exports = {
  startupInfoTable,
  health,
  it,
  security,
  hardware,
  software,
  lifeScience,
  eCommerce,
  education,
  cities,
  other
}

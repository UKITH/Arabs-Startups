const mongoose = require('mongoose');
const random = require('mongoose-simple-random');

const startupSchema = mongoose.Schema({
  founderName: {type: String, required: true},
  coFounderName: {type: String},
  startupName: {type: String, required: true, unique: true},
  startupDescription: {type: String, required:true},
  startupSector: {type: String, required: true},
  email: {type: String, required: true},
  fundingStage: {type: String, required: true},
  startupWebsite: {type: String, required: true },
  logoUrl: {type: String, required: true},
  signUpReason: {type: String, required: true}
});
startupSchema.plugin(random);

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

const mockCollection = mongoose.model('mockData', startupSchema);

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
  other,
  mockCollection
}

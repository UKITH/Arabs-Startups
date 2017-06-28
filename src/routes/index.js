const router = require('express').Router();

const searchHome = require('./search_home.js');
const startupProfile = require('./startup_profile.js')

router.get('/', searchHome);
router.get('/Startup_Profile', startupProfile);

module.exports = router;

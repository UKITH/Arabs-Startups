const router = require('express').Router();

const searchHome = require('./search_home.js');
const startupProfile = require('./startup_profile.js');

router.get('/', searchHome);
router.get(`/startupProfile/:id`, startupProfile);

module.exports = router;

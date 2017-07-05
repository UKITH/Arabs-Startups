const router = require('express').Router();

const searchHome = require('./search_home.js');
const startupProfile = require('./startup_profile.js');
const submissionForm = require('./submission_form.js');
const registerStartup = require('./register_startup.js');

router.get('/', searchHome);
router.get('/submissionForm', submissionForm);
router.post('/registerStartup', registerStartup);
router.get('/', searchHome);
router.get(`/startupProfile/:id`, startupProfile);

module.exports = router;

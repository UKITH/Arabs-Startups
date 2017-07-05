const router = require('express').Router();

const searchHome = require('./search_home.js');
const startupProfile = require('./startup_profile.js');
const submissionForm = require('./submission_form.js');
const registerStartup = require('./register_startup.js');
const resultsHandler = require('./results.js');

router.get('/', searchHome);
router.get('/submissionForm', submissionForm);
router.post('/registerStartup', registerStartup);
router.get(`/startupProfile/:id`, startupProfile);
router.get('/search', resultsHandler);

module.exports = router;

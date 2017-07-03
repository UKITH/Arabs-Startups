const router = require('express').Router();

const searchHome = require('./search_home.js');
const submissionForm = require('./submission_form.js');
const registerStartup = require('./register_startup.js');
const searchResults = require('./search_results');

router.get('/', searchHome);
router.get('/submissionForm', submissionForm);
router.get('/results', searchResults);
router.post('/registerStartup', registerStartup);

module.exports = router;

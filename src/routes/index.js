const router = require('express').Router();

const searchHome = require('./search_home.js');
const registerStartup = require('./register_startup.js');
const resultsHandler = require('./results.js');
const startupProfile = require('./startup_profile.js');
const submitMessage = require('./submit_message.js');
const allEvents = require('./all_events.js');
const event = require('./event.js');

router.get('/', searchHome);
router.post('/registerStartup', registerStartup);
router.get(`/startupProfile/:id`, startupProfile);
router.get('/search', resultsHandler);
router.get('/submitMessage', submitMessage);
router.get('/allEvents', allEvents);
router.get('/event/:id', event);

module.exports = router;

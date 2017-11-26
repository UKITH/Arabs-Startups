const router = require('express').Router();

const searchHome = require('./search_home.js');
const registerStartup = require('./register_startup.js');
const resultsHandler = require('./results.js');
const startupProfile = require('./startup_profile.js');
const submitMessage = require('./submit_message.js');
const allEvents = require('./all_events.js');
const newsHandler = require('./news.js');
const allNews = require('./all_news.js');
const event = require('./event.js');
const awsS3 = require('./aws_s3.js');
const randomStartups = require('./random_startups.js');

router.get('/', searchHome);
router.post('/registerStartup', registerStartup);
router.get(`/startupProfile/:id`, startupProfile);
router.get('/search', resultsHandler);
router.get('/submitMessage', submitMessage);
router.get('/allEvents', allEvents);
router.get('/news/:id', newsHandler);
router.get('/allNews', allNews);
router.get('/event/:id', event);
router.get('/sign-s3', awsS3);
router.get('/randomStartups', randomStartups);

module.exports = router;

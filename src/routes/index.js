const router = require('express').Router();

const searchHome = require('./search_home.js');
const registerStartup = require('./register_startup.js');
const resultsHandler = require('./results.js');
const startupProfile = require('./startup_profile.js');
const submitMessage = require('./submit_message.js');
const adminLogin = require('./admin_login.js');
const adminHome = require('./admin_home.js');
const newsForm = require('./admin_news_form.js');
const eventForm = require('./admin_event_form.js');
const registerNews = require('./register_news.js');
const registerEvent = require('./register_event.js');
const allEvents = require('./all_events.js');
const newsHandler = require('./news.js');
const allNews = require('./all_news.js');
const event = require('./event.js');

router.get('/', searchHome);
router.post('/registerStartup', registerStartup);
router.get(`/startupProfile/:id`, startupProfile);
router.get('/search', resultsHandler);
router.get('/submitMessage', submitMessage);
router.get('/ukithAdmin', adminLogin);
router.get('/u1k2i3t4h5/adminHome', adminHome);
router.get('/u1k2i3t4h5/newsForm', newsForm);
router.get('/u1k2i3t4h5/eventForm', eventForm);
router.post('/u1k2i3t4h5/registerNews', registerNews);
router.post('/u1k2i3t4h5/registerEvent', registerEvent);
router.get('/allEvents', allEvents);
router.get('/news/:id', newsHandler);
router.get('/allNews', allNews);
router.get('/event/:id', event);

module.exports = router;

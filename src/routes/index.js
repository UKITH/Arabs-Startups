const router = require('express').Router();

const searchHome = require('./search_home.js');

router.get('/', searchHome);

module.exports = router;

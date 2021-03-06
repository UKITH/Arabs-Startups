const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const compression = require('compression');
const router = require('./routes/index.js');
const DateToString = require('./helpers/date_to_string.js');
const getMapLink = require('./helpers/get_map_link.js');

const app = express();

app.engine('hbs', hbs({
  defaultLayout: 'main',
  layoutsDir: path.join(__dirname, './', 'views/layouts'),
  partialsDir: path.join(__dirname, './', 'views/partials'),
  extname: 'hbs',
  helpers: {
    DateToString,
    getMapLink
  }
}));

app.use(compression());
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
mongoose.Promise = require('bluebird');

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './', '/views'));

app.use(router);

module.exports = app;

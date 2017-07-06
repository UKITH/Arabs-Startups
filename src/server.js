const express = require('express');
const hbs = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./routes/index.js');

const app = express();

app.engine('hbs', hbs({}));
app.use(express.static('public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './', '/views'));

app.use(router);

module.exports = app;

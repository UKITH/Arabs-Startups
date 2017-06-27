const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');
const router = require('./routes/index.js');

const app = express();

app.engine('hbs', hbs({}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './', '/views'));

app.use(router);

module.exports = app;

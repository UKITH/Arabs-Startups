const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();

app.engine('hbs', hbs({
  defaultLayout: 'main',
  deaultDir: path.join(__dirname, './', 'views/layouts'),
  partialsDir: path.joing(__dirname, './', 'views/partials')
  extname: 'hbs'
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, './', 'views'));

app.get('/', (req, res) => {
  res.send('Hello World')
});

module.exports = app;

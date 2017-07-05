const tape = require('tape');
const supertest = require('supertest');
const exphbs = require('express-handlebars');

const server = require('../../src/server.js');

tape('Test home route', (t) => {
  console.log(exphbs.create().render('src/views/search_home.hbs'));
  var html1 = '<h1>test test</h1>\n';
  supertest(server).get('/').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
    t.equal(res.text, html1, 'html is the same')
    t.end();
  });
});

tape('Test submission form route', (t) => {
  supertest(server).get('/submissionForm').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
    t.end();
  });
});

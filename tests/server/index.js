const mongoose = require('mongoose');
const tape = require('tape');
const supertest = require('supertest');
const exphbs = require('express-handlebars');
require('env2')('./config.env');

mongoose.connect(process.env.DB_URL, {
  useMongoClient: true
});

const { mockCollection } = require('../../database/startup_schema.js');
const server = require('../../src/server.js');
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("connected db");
})


tape('Test home route', (t) => {
  let html = '<h1 class="near-white mv0 f1">Arab innovators</h1>\n';
  supertest(server).get('/').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
    t.equal(res.text.includes(html), true, 'html is the same')
    t.end();
  });
});

tape('Test profile page route', (t) => {
  let html = '<h2 class="f1 absolute pt2">MyCity</h2>\n';
  let html2 = '<h1> Sorry we couldn\'t find any startup in our database that match your selections</h1>\n'
  supertest(server).get('/startupProfile/595cbfe08d75e77913c05c0e').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
    t.equal(res.text.includes(html), true, 'The right startup was found');
  })
  supertest(server).get('/startupProfile/sdgadfasd').end((err, res) => {
    t.equal(res.text.includes(html2), true, 'Recieved 404 page');
    t.end();
  })
})


tape('Test for register startup route', (t) => {
  let expected = {
    'startup-name': 'FAC',
    'founder-name': 'Dan',
    'coFounder-name': '',
    'description': 'Coding bootcamp for everyone',
    Select: 'Software',
    'funding-stage': 'Seed-Funded',
    'startup-email': 'mario91sss@gmail.com',
    'startup-website': 'foundersandcoders.com'
  }
  supertest(server).post('/registerStartup')
  .send(expected)
  .end((err, res) => {
    mockCollection.find({startupName: 'FAC'}, (err, startup) => {
      t.ok(startup, 'The startup is in the database');
    })
    mockCollection.find({startupName: 'FAC'}).remove((err) => {
      if (err) {
        console.log(err);
        return
      }
      console.log('Removed');
    });
    t.error(err, 'No Error');
    t.end();
  })
})

tape('Test the submit message page', (t) => {
  let html = 'Thank you!'
  supertest(server).get('/submitMessage').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.text.includes(html), true, 'Should have the html');
    t.end();
  })
})

tape('Test for results', (t) => {
  supertest(server).get('/search?search=&sector=').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
  })
  supertest(server).get('/search?search=&sector=Health').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
  })
  supertest(server).get('/search?search=MyCity&Submit=Submit&sector=cities').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
  })
  supertest(server).get('/search?search=MyCIty&Submit=Submit').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
  })
  supertest(server).get('/search?search=MyCity&Submit=Submit&stage=bootstrap').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
  })
  supertest(server).get('/search?search=MyCity&Submit=Submit&sector=Cities&stage=Bootstrap').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
  })
  supertest(server).get('/search?search=&Submit=Submit&sector=Cities&stage=Bootstrap').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
  })
  supertest(server).get('/search?search=&Submit=Submit&stage=Idea-Phase').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
  })
  let html = '<h1 class="f1 fw3 text-granite-gray">Startups</h1>\n';
  supertest(server).get('/search').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.status, 200, 'Should equal 200');
    t.equal(res.text.includes(html), true, 'Should render the results page');
    t.end();
  })
})

tape('Testing all events functionality page', (t) => {
  let html = '<span>Tue Oct 24 2017 14:29:47 GMT+0300 (IDT)</span>'
  supertest(server).get('/allEvents').end((err, res) => {
    t.error(err, 'No Error');
    t.ok(res.text.includes(html), 'Finds all the events');
    t.end();
    db.close();
  })
})

const mongoose = require('mongoose');
const tape = require('tape');
const supertest = require('supertest');
const exphbs = require('express-handlebars');
let request = require('request');
require('env2')('./config.env');

// helpers that are being tested
const DateToString = require('../../src/helpers/date_to_string.js');
const getMapLink = require('../../src/helpers/get_map_link.js');
let latLng = require('../../src/helpers/latlng.js');

// actions being tested
const findAllStartups = require('../../src/actions/find_all_startups.js');


mongoose.connect(process.env.DB_URL, {
  useMongoClient: true
});

const { mockCollection } = require('../../database/startup_schema.js');
const { mockEvents } = require('../../database/events_schema.js');
const { mockNews } = require('../../database/news_schema.js');
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
  let html2 = 'Sorry we could not find what you are searching for'
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
  let htmlErr = ' Sorry we could not find what you are searching for'
  let expected = {
    'startup-name': 'FAC',
    'founder-name': 'Dan',
    'coFounder-name': '',
    'description': 'Coding bootcamp for everyone',
    Select: 'Software',
    'logo-url': 'https://arab-innovators.s3.amazonaws.com/2.png',
    'funding-stage': 'Seed-Funded',
    'startup-email': 'mario91sss@gmail.com',
    'startup-website': 'foundersandcoders.com',
    'signup-reason': 'Other'
  }
  supertest(server).post('/registerStartup')
  .send(expected)
  .end((err, res) => {
    mockCollection.find({startupName: 'FAC'}, (err, startup) => {
      t.ok(startup, 'The startup is in the database');
      supertest(server).post('/registerStartup')
      .send(expected)
      .end((err, res) => {
        t.ok(res.text.includes(htmlErr), 'Since the startup already exists should give an error');

        mockCollection.find({startupName: 'FAC'}).remove((err) => {
          if (err) {
            return
          }
          console.log('Removed');
        });
      })
    })
    t.error(err, 'No Error');
  })

  supertest(server).post('/registerStartup')
  .send(expected)
  .end((err, res) => {
    t.ok(res.text.includes(htmlErr), 'Since the startup already exists should give an error');
    mockCollection.find({startupName: 'FAC'}).remove((err) => {
      if (err) {
        return
      }
      console.log('Removed');
      t.end();
    });
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

tape('Test for random startups page', (t) => {
  supertest(server).get('/randomStartups').end((err,res) => {
    t.error(err, 'No Error');
    const testedClass = '<div class="dib mh1 tc">';
    const count = (res.text.match(/<div class="dib mh1 tc">/g) || []).length;
    t.ok(res.text.includes(testedClass), 'should have this class at least 1');
    t.equal(count, 10, 'should have only 10 startups');
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
  let html = 'FACN3'
  supertest(server).get('/allEvents').end((err, res) => {
    t.error(err, 'No Error');
    t.ok(res.text.includes(html), 'Finds all the events');
    t.end()
  })
 })


tape('Test single news page', (t) => {
  let html = 'Water cooler in the Guesthouse';
  supertest(server).get('/news/5970cde547379a103492134b').end((err, res) => {
    t.error(err, 'No Error');
    t.ok(res.text.includes(html), 'Should render the right news');
    t.end();
  })
})

tape('Test news section page', (t) => {
  let html = 'at the end mario got the lazy plumber to fix the water cooler';
  supertest(server).get('/allNews').end((err, res) => {
    t.error(err, 'No Error');
    t.ok(res.text.includes(html), 'All news should be rendered');
    t.end();
   })
})

tape('Test Certain Event Page Functionality', (t) => {
  let html = 'FACN3'
  let htmlErr = 'Sorry we could not find what you are searching for';
  supertest(server).get('/event/5970aee1b36db104139d3af9').end((err, res) => {
    t.error(err, 'No Error');
    t.equal(res.text.includes(html), true, 'Should recieve the right event');
    })
    supertest(server).get('/event/5970aee1b36db104139d3af').end((err, res) => {
      t.equal(res.text.includes(htmlErr), true, 'Should get the 404 page');
      t.end();
  })
})

tape('Test aws endpoint /sign-s3', (t) => {
  const signedRequest = 'k.png';
  supertest(server).get('/sign-s3?file-name=k.png&file-type=image/png').end((err, res) => {
    t.ok(res.text.includes(signedRequest), 'Signed the right image to be sent to s3')
    t.end()
  })
})

tape('Test the date helper function', (t) => {
  date = new Date().toDateString();
  formatedDate = DateToString(new Date());
  t.equal(date, formatedDate, 'The date was trimmed down');
  t.end();
})


tape('Test the map link helper', (t) => {
  let expectedLink = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API}&callback=myMap`
  t.equal(getMapLink(), expectedLink, 'returns the right link');
  t.end();
})

tape('Test the latlng map helper', (t) => {
  let expectedFailedAddress = 'data-lat=32.7014255 data-lng=35.2967795';
  supertest(server).get('/event/5970af73b36db104139d3afd').end((err, res) => {
    t.ok(res.text.includes(expectedFailedAddress), 'returns default address when address not found');
    t.end();
  })
})

tape('Test if find_all_startups errors', t => {
  const original = mockCollection.find;
  let htmlErr = ' Sorry we could not find what you are searching for';
  mockCollection.find = (options, callback) => {
    process.nextTick(callback, new Error('hushs'))
  }
  supertest(server).get('/search?search=&sector=').end((err, res) => {
    t.error(err, 'No Error')
    t.ok(res.text.includes(htmlErr))
    mockCollection.find = original;
    t.end()
  })
})

tape('Test if get_all_event action errors', t => {
  const original = mockEvents.find;
  let htmlErr = ' Sorry we could not find what you are searching for';
  mockEvents.find = (options, callback) => {
    process.nextTick(callback, new Error('hushs'))
  }
  supertest(server).get('/allEvents').end((err, res) => {
    t.error(err, 'No Error');
    t.ok(res.text.includes(htmlErr))
    mockEvents.find = original
    t.end();
  })
})

tape('Test if get_all_news action errors', t => {
  const original = mockNews.find;
  let htmlErr = ' Sorry we could not find what you are searching for';
  mockNews.find = (callback) => {
    process.nextTick(callback, new Error('hushs'))
  }
  supertest(server).get('/allNews').end((err, res) => {
    t.error(err, 'No Error');
    t.ok(res.text.includes(htmlErr))
    mockNews.find = original
    t.end();
  })
})


tape('Test if get_news action errors', t => {
  const original = mockNews.findOne;
  let htmlErr = ' Sorry we could not find what you are searching for';
  mockNews.findOne = (options, callback) => {
    process.nextTick(callback, new Error('hushs'))
  }
  supertest(server).get('/news/5970cde547379a103492134b').end((err, res) => {
    t.error(err, 'No Error');
    t.ok(res.text.includes(htmlErr))
    mockNews.findOne = original
    t.end();
  })
})

tape('Test if get_event action errors', t => {
  const original = request.get;
  let htmlErr = ' Sorry we could not find what you are searching for';
  request.get = (url, callback) => {
    process.nextTick(callback, new Error('hushs'))
  }
  supertest(server).get('/event/5970aee1b36db104139d3af9').end((err, res) => {
    t.error(err, 'No Error');
    t.ok(res.text.includes(htmlErr))
    request.get = original
    t.end()
    db.close()
  })
})

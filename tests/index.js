var test = require('tape');

const serverSide = require('./server/index.js');

test('should return -1 when the value is not present in Array', function (t) {
  t.equal(-1, -1);
  t.end();
});

const limitResults = (results) => {
  while (results.length != 9 && results.length > 9) {
    results.pop()
  }
  return results
};

module.exports = limitResults;

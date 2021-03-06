require('env2')('./config.env')
const queryString = require('querystring')
const request = require('request')

const getLatLng = (address, cb) => {
  const baseURI = 'https://maps.googleapis.com/maps/api/geocode/json?'
  const queryParams = queryString.stringify({
    address: address,
    key: process.env.GOOGLE_API
  })
  const requestURI = baseURI + queryParams
  request.get(requestURI, (err, res, body) => {
    if (err) cb(err)
    else {
      const location = JSON.parse(body).results[0]
      if (location) {
        cb(null, JSON.parse(body).results[0].geometry.location)
      } else {
        cb(null, { lat: 32.7014255, lng: 35.2967795 })
      }
    }
  })
}

module.exports = getLatLng;

const getMapLink = () => {
  return `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_API}&callback=myMap`
}

module.exports = getMapLink;

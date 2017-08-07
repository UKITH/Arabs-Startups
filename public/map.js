function myMap () {
  var mapDiv = document.getElementById('google-map')
  var mapOptions = {
    center: new google.maps.LatLng(mapDiv.dataset.lat, mapDiv.dataset.lng),
    zoom: 18,
    disableDefaultUI: true
  }
  var map = new google.maps.Map(mapDiv, mapOptions)

  var _marker = new google.maps.Marker({
    position: new google.maps.LatLng(mapDiv.dataset.lat, mapDiv.dataset.lng),
    map: map,
    title: mapDiv.dataset.title
  })
}

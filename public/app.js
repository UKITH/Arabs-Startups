
var sectorLabel = document.querySelector('#sector-label');
var sectorFieldset = document.querySelector('#sector-fieldset');
sectorLabel.addEventListener('click', function() {
  sectorFieldset.classList.toggle('dn');
})

var fundingLabel = document.querySelector('#funding-label');
var fundingFieldset = document.querySelector('#funding-fieldset');
fundingLabel.addEventListener('click', function() {
  fundingFieldset.classList.toggle('dn');
})

var plusCircle = document.querySelector('#plus-circle');
var coFounderInput = document.querySelector('#coFounder-name');
plusCircle.addEventListener('click', function () {
  coFounderInput.classList.toggle('dn');
})

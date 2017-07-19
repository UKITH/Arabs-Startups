var fundingLabel = document.querySelector('#funding-label');
var fundingFieldset = document.querySelector('#funding-fieldset');
fundingLabel.addEventListener('click', function() {
  fundingFieldset.classList.toggle('dn');
})

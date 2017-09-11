var plusCircle = document.querySelector('#plus-circle');
var coFounderInput = document.querySelector('#co-founder');
var signupReason = document.querySelector('#signup-reason');
var otherReason = document.querySelector('#other');
var childNumber = 0;
plusCircle.addEventListener('click', function () {
  var childNumber = document.getElementById('co-founder').childElementCount;
    if(childNumber <= 8) {
      var newCoFounder = document.createElement('input');
      newCoFounder.setAttribute('id', 'coFounder-name');
      newCoFounder.setAttribute('name', 'coFounder-name');
      newCoFounder.setAttribute('required', '');
      coFounderInput.appendChild(newCoFounder).classList.add('ba','b--black-20','pa2','mb2','w-90','br2','db','fl');
      var removeCoFounder = document.createElement('img');
      removeCoFounder.setAttribute('id', 'cross-circle');
      removeCoFounder.setAttribute('src', './assets/cross.png');
      coFounderInput.appendChild(removeCoFounder).classList.add('w-10', 'db', 'mb2');
    }
    removeCoFounder.addEventListener('click', function () {
      removeCoFounder.parentNode.removeChild(newCoFounder);
      removeCoFounder.parentNode.removeChild(removeCoFounder);
    })
})

signupReason.addEventListener('change', function(value) {
  if(value='Other') {
    otherReason.classList.toggle('dn');
    otherReason.classList.toggle('db');
  }
})

var bgChangeColor = document.querySelector('#navbar');
bgChangeColor.style.backgroundColor = "white";

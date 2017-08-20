var plusCircle = document.querySelector('#plus-circle');
var coFounderInput = document.querySelector('#co-founder');
var childNumber = 0;
plusCircle.addEventListener('click', function () {
  var childNumber = document.getElementById('co-founder').childElementCount;
    if(childNumber <= 4) {
      var newCoFounder = document.createElement('input');
      newCoFounder.setAttribute('id', 'coFounder-name');
      newCoFounder.setAttribute('name', 'coFounder-name');
      coFounderInput.appendChild(newCoFounder).classList.add('ba', 'b--black-20','pa2','mb2','w-100','br2','db');

    }
})

var bgChangeColor = document.querySelector('#navbar');
bgChangeColor.style.backgroundColor = "white";

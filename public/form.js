var plusCircle = document.querySelector('#plus-circle');
var coFounderInput = document.querySelector('#co-founder');
var childNumber = 0;
plusCircle.addEventListener('click', function () {
  var childNumber = document.getElementById('co-founder').childElementCount;
    if(childNumber <= 4) {
      var input = document.createElement('input');
      input.setAttribute('id', 'coFounder-name');
      input.setAttribute('name', 'coFounder-name');
      coFounderInput.appendChild(input).classList.add('bg-light-gray','ba', 'b--black-20','pa2','mb2','w-100','br2','db');
      console.log(childNumber);

    }
})

var bgChangeColor = document.querySelector('#navbar');
bgChangeColor.style.backgroundColor = "white";
